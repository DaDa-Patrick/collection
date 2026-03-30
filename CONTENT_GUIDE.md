# 專案內容維護指南 (Portfolio Content Guide)

這份文件定義了本作品集專案 (Astro v6 + Decap CMS) 的所有內容欄位規格與填充建議。

## 1. 核心資訊欄位 (Core Metadata)

| 欄位 (Key) | 類型 | 範例 | 顯示位置 |
| :--- | :--- | :--- | :--- |
| `title` | String | `AIncome 智慧記帳 App` | 專案標題 (Hero + Card) |
| `date` | YYYY.MM | `2024.03` | 用於排序（越新越前面） |
| `tagLabel` | String | `AI`, `APP`, `Web` | 右上角的主分類標籤 |
| `tags` | Array | `["React", "Node.js"]` | 技術標籤組 |
| `meta` | String | `串接 GPT-4 的理財幫手` | 一句話副標題 |
| `description`| String | `簡述解決了什麼痛點...` | 首頁卡片與詳情短述 |

## 2. 視覺與色彩系統 (Visual System)

這組欄位決定了專案詳情頁的「沉浸感」配色。

*   **`image`**: 指向 `/public/images/projects/` 的主圖路徑。
*   **`accent`**: 專案主色調 (Hex)，如 `#6F7BFF`。
*   **`accentSoft`**: 背景淡色，建議 `rgba(111,123,255,0.15)`。
*   **`accentGlow`**: 邊框發光色，建議 `rgba(111,123,255,0.4)`。
*   **`projectImageStyle`**: Hero 區的 CSS 漸層。範例：
    `radial-gradient(circle at 30% 20%, rgba(255,255,255,0.15), transparent 60%)`

## 3. 側邊規格欄位 (Sidebar Specs)

位於詳情頁右側的資訊卡片。

*   **`sidebar.role`**: 我的角色 (e.g., `Product UI/UX Designer`)。
*   **`sidebar.period`**: 開發耗時 (e.g., `4 Weeks`)。
*   **`sidebar.type`**: 專案屬性 (e.g., `Freelance Project`)。
*   **`sidebar.techStack`**: 側欄用的技術清單 (如 `["Figma", "Stripe"]`)。
*   **`sidebar.deliverables`**: 交付的產出 (如 `["UI Design", "App Store Release"]`)。

## 4. 底部亮點 (Highlights)

*   **`highlights`**: Array 格式。
    會以「✦」符號列表顯示在正文下方，用於強調開發過程中最具挑戰性或最引以為傲的技術細節。

---

## 5. 常用的標準範例模板

當你在新增 `.md` 檔案時，可以直接複製這段 Frontmatter：

```markdown
---
title: "新專案名稱"
date: "2024.03"
tagLabel: "分類名稱"
tags: ["技術 A", "技術 B"]
meta: "專案的一句話標語"
description: "簡短描述這個專案的背景與目標。"
image: "/images/projects/project-main.jpg"
gallery:
  - "/images/projects/shot-1.jpg"
accent: "#6f7bff"
accentSoft: "rgba(111, 123, 255, 0.15)"
accentGlow: "rgba(111, 123, 255, 0.4)"
highlights:
  - "亮點 1：解決了效能瓶頸"
  - "亮點 2：獲得了用戶好評"
sidebar:
  role: "全端開發"
  period: "1 個月"
  type: "個人開發"
  techStack: ["Next.js", "Firebase"]
  deliverables: ["測試報告", "伺服器架設"]
---
```

## 6. 維護建議

1.  **圖片處理**：建議主圖與 Gallery 圖片寬度維持在 1200px 以上，以確保在大螢幕下的清晰度。
2.  **更新頻率**：每次有新技術突破或專案完工，請優先至 `date` 欄位更新日期，系統會自動推播至首頁第一順位。
3.  **CMS 備註**：如果透過 Decap CMS 後台更新，大多數規範已整合在輸入框提示中，照著填寫即可。
