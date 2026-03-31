---
period: 2024.07 - 2024.08
title: ME_NU LLM 菜單推薦系統
date: "2024.07"
tagLabel: AI + Web
tags:
  - automation
  - ai
  - data
meta: 9 人團隊｜LangChain、LINE Bot、Web App
description: ME_NU 透過使用者偏好訪談、菜單資料與網路評論整合，協助外食族更快做出符合口味與需求的點餐決策。
accent: "#edba8b"
techStack:
  - Python
  - Flask
  - LINE Messaging API
  - GPT-4o
  - LangChain
  - React
  - Firebase
role: PM/LLM 串接/RAG
highlights:
  - 於 OpenHCI 2024 獲得最佳 Demo 獎，現場超過 200 名參與者體驗
  - 從 261 份問卷與 7 位深度訪談萃取痛點
  - 設計出「快速釐清偏好 → 立即推薦」的點餐流程
  - 整合菜單與 Google Maps 評論並由 LLM 生成可讀摘要
  - 以 LINE Bot 降低學習門檻並提供角色化互動與個人化推薦
links:
  - url: https://docs.google.com/presentation/d/10FqJoL1q6WxRrGlgPW-T1QYRnAzHJ3Ug/edit?usp=sharing&ouid=110167270196578549482&rtpof=true&sd=true
    label: 專案簡報
type: OpenHCI 2024 專案
image: ../../assets/projects/image_1.png
---
### 專案詳情
ME_NU 是一個以「幫助使用者在資訊充足下快速點餐」為目標的 AI 產品。專案從使用者研究出發，發現多數人點餐時會遇到三類障礙：

1. 不了解菜單細節（例如品項差異、口味想像困難）
2. 評論資訊分散，搜尋成本高
3. 無法把「個人口味與限制」快速對應到餐點

因此，我們設計了以 LLM 為核心的推薦體驗：先用輕量問答建立飲食偏好，再結合餐廳菜單與網路評價做語意分析，最後輸出個人化推薦與原因，幫助使用者更快做決定。

產品形式採雙介面：
- **LINE Bot**：承接主要對話與推薦流程，降低學習成本。
- **Web App**：讓使用者可視化調整偏好、推薦份數與互動角色設定。

在測試中，使用者回饋指出系統能有效排除不想吃的食材，並更具體地描述餐點風味。後續迭代方向包含：強化 CTA 引導語、優化推薦訊息可讀性，以及讓偏好分析結果更即時透明，以提升信任感。
