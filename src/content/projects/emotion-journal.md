---
title: 心晴日記：智慧情緒日記與分析平台
date: "2024.10"
tagLabel: AI + Web
tags:
  - ai
  - web
  - mobile
  - data
meta: 獨立完成｜GPT-4、Firebase、SwiftUI、CBT
image: ../../assets/projects/image_5.png
gallery:
  - /src/assets/projects/img_2055.jpeg
  - /src/assets/projects/img_2057.jpeg
  - /src/assets/projects/img_2056.jpeg
  - /src/assets/projects/img_2059.jpeg
  - /src/assets/projects/img_2061.jpeg
  - /src/assets/projects/img_2064.jpeg
description: 心晴日記 (SunnyMind Journal)
  是一款旨在提升心理健康意識的跨平台應用程式。在快節奏的現代生活中，情緒管理往往被忽視。本專案透過 AI
  技術將傳統的日記書寫轉化為具備引導性、分析性且有溫度的互動體驗。
accent: "#3675bf"
highlights:
  - 自動產生情緒百分比與 CBT 分析，協助使用者理解自我狀態。
  - 整合 GCP 儲存與 bcrypt 加密，兼顧資料安全與跨裝置同步。
  - 動態背景、提示引導與回饋機制讓日記撰寫更具儀式感。
role: 全端開發 / 產品設計
period: 2024.10 - 2025.12
type: 個人專案
techStack:
  - SwiftUI
  - Firebase
  - OpenAI API
  - JavaScript
links:
  - label: App Store 連結
    url: https://apps.apple.com/app/id6756477406
  - url: https://chatgpt-diary-76d82.web.app/
    label: 網頁版連結
  - url: https://dada-patrick.github.io/SunnyMind-Journal/
    label: 心情日記支援中心
advanced_styles:
  accentGlow: ""
  projectImageStyle: ""
  accentSoft: ""
---
#### 核心技術與創新

1.  **AI 深度情緒分析 (CBT 技術指標)**：
    核心功能採用 **OpenAI GPT-4-turbo** 模型。不同於坊間簡單的正負面情緒辨識，本系統導入了 **認知行為療法 (CBT)** 框架。AI 會針對使用者的文字內容抽絲剝繭，提供包含「情緒比例百分比」、「自動化思考辨識」與「替代性想法建議」的完整報告，像是一位虛擬的心理輔導專家常駐身邊。

2.  **四時段動態漸層介面 (Context-Aware Design)**：
    為營造沉浸式的書寫氛圍，App 會根據使用者開啟的時間（早晨、白天、黃昏、夜晚）自動切換相對應的動態背景漸層與問候語，讓數位工具具體呈現出時間的流動感，增強使用者的情緒連結。

3.  **跨平台全棧架構**：
    專案採用 **Firebase** 作為統一後端，整合了 Google OAuth 安全登入、Cloud Firestore 即時資料庫、以及部署在 Cloud Functions 上的 AI 運算邏輯。這確保了使用者在 Web 版（基於 HTML5/JS/Canvas）與 iOS 版（基於 SwiftUI）之間能獲得無縫的同步體驗。

#### 特色功能區塊

*   **靈感提示系統**：為了解決「不知從何寫起」的痛點，系統內建了涵蓋生活、夢想、人際關係等多維度的引導問題，隨機激發寫作靈感。
*   **快樂膠囊 (Happy Capsules)**：鼓勵使用者記錄生活中的細微小確幸，這些片段會被獨立保存，在心情低落時成為最強大的正向回憶支持。
*   **iOS 專屬體驗**：針對行動端開發了日曆標記視圖、每日溫馨提醒通知，以及能調用系統相簿回顧當日照片的「時光回憶」功能。
*   **季節限定視覺**：Web 版本特別實作了基於 Canvas 高效能渲染的雪花堆積效果，會隨頁面捲動與介面互動，增添書寫的趣味性。

#### 專案成果

本專案成功整合了尖端 AI 技術與心理學理論，打造出一款兼具專業深度與視覺美感的產品原型。目前已完成 Web 版部署與 iOS 版本的核心開發，展現了從產品定義、介面設計 (UI/UX) 到前後端全棧開發的綜合執行力。
