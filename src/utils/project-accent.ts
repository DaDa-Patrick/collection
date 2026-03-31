import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const accentCache = new Map<string, string>();

function extractFrontmatterImagePath(source: string) {
  const match = source.match(/^---\s*[\r\n]+([\s\S]*?)^---\s*$/m);
  if (!match) return null;
  const imageLine = match[1].match(/^\s*image:\s*(.+)\s*$/m);
  if (!imageLine) return null;
  return imageLine[1].trim().replace(/^['"]|['"]$/g, '');
}

function resolveImagePath(filePath: string, imagePath: string) {
  if (imagePath.startsWith('/src/')) {
    return path.resolve(process.cwd(), imagePath.slice(1));
  }
  if (imagePath.startsWith('.')) {
    return path.resolve(process.cwd(), path.dirname(filePath), imagePath);
  }
  return null;
}

function getWeightedAccentFromPixels(data: Buffer) {
  const buckets = new Map<string, { r: number; g: number; b: number; weight: number }>();

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const alpha = data[i + 3];

    if (alpha < 32) continue;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const chroma = max - min;
    const brightness = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;

    if (chroma < 18 || brightness < 0.12 || brightness > 0.9) continue;

    const weight = (chroma / 255) * (1 - Math.abs(brightness - 0.55));
    if (weight <= 0) continue;

    const key = `${Math.round(r / 32)}-${Math.round(g / 32)}-${Math.round(b / 32)}`;
    const bucket = buckets.get(key) ?? { r: 0, g: 0, b: 0, weight: 0 };
    bucket.r += r * weight;
    bucket.g += g * weight;
    bucket.b += b * weight;
    bucket.weight += weight;
    buckets.set(key, bucket);
  }

  let bestBucket: { r: number; g: number; b: number; weight: number } | null = null;
  buckets.forEach((bucket) => {
    if (!bestBucket || bucket.weight > bestBucket.weight) {
      bestBucket = bucket;
    }
  });

  if (!bestBucket || bestBucket.weight <= 0) return null;

  return `rgb(${Math.round(bestBucket.r / bestBucket.weight)}, ${Math.round(bestBucket.g / bestBucket.weight)}, ${Math.round(bestBucket.b / bestBucket.weight)})`;
}

export async function getProjectAccent(filePath?: string, fallback = '#6f7bff') {
  if (!filePath) return fallback;

  const absoluteContentPath = path.resolve(process.cwd(), filePath);
  const raw = await fs.readFile(absoluteContentPath, 'utf8').catch(() => null);
  if (!raw) return fallback;

  const rawImagePath = extractFrontmatterImagePath(raw);
  if (!rawImagePath) return fallback;

  const absoluteImagePath = resolveImagePath(filePath, rawImagePath);
  if (!absoluteImagePath) return fallback;

  if (accentCache.has(absoluteImagePath)) {
    return accentCache.get(absoluteImagePath) as string;
  }

  const buffer = await sharp(absoluteImagePath)
    .resize(24, 24, { fit: 'cover' })
    .ensureAlpha()
    .raw()
    .toBuffer()
    .catch(() => null);

  if (!buffer) return fallback;

  const accent = getWeightedAccentFromPixels(buffer) ?? fallback;
  accentCache.set(absoluteImagePath, accent);
  return accent;
}
