import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/projects' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.string().default('2024.01'),
    tagLabel: z.string().default('其他'),
    tags: z.union([z.string(), z.array(z.string())]).transform((val) => (Array.isArray(val) ? val : [val])).default(['all']),
    meta: z.string().default('個人專案'),
    description: z.string().default(''),
    highlights: z.array(z.string()).default([]),
    accent: z.string().optional(),
    // These will be optional and auto-calculated in the component if missing
    image: image().optional(), // Main primary hero image
    gallery: z.array(image()).optional(), // Multiple gallery images
    // Optional sidebar fields
    role: z.string().optional(),
    period: z.string().optional(),
    type: z.string().optional(),
    techStack: z.array(z.string()).optional(),
    deliverables: z.array(z.string()).optional(),
    sidebar: z.object({
      role: z.string().optional(),
      period: z.string().optional(),
      type: z.string().optional(),
      techStack: z.array(z.string()).optional(),
      deliverables: z.array(z.string()).optional(),
    }).optional(),
    links: z.array(z.object({
      label: z.string(),
      url: z.string()
    })).optional(),
  }),
});

export const collections = {
  projects: projects,
};
