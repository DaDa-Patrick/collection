---
period: 2023.11-2024.04
title: AIncome 智慧記帳 App
date: "2024.03"
tagLabel: 行動應用
tags:
  - ai
  - mobile
  - automation
meta: 獨立完成｜SwiftUI、OpenAI、App Intents
image: ../../assets/projects/截圖_2025-08-05_23.41.25.png
gallery: []
description: AIncome 是一款專為簡化記帳流程而設計的 iOS 應用程式。透過 OpenAI
  的自然語言處理技術，使用者只需用語音或文字輸入日常消費內容，App 即能自動解析品項、金額、商家與類別，徹底告別繁瑣的手動填報。
accent: "#6482bf"
highlights:
  - 支援 Siri 捷徑語音記帳與多頁籤介面，提升輸入效率。
  - 以馬卡龍色系與動畫設計打造愉悅的理財體驗。
  - 資料儲存於本地並支援 CSV 匯出，兼顧隱私與備份需求。
links:
  - label: AIncome 支援中心
    url: https://dada-patrick.github.io/AIncome/
  - label: App Store 頁面
    url: https://apps.apple.com/app/id6745864525
---
#### 產品願景
在快節奏的現代生活中，傳統的記帳 App 往往因為操作繁瑣（需要選擇類別、輸入日期、點選商家等）而難以持久。**AIncome** 的目標是將「記帳」這一動作縮短至三秒內，透過 AI 技術讓使用者能夠以最自然的溝通方式記錄每一筆支出。

#### 核心技術亮點
- **自然語言解析 (NLP)**: 核心解析引擎基於 OpenAI GPT-4 進行微調提示，能夠理解各種口語化的表達方式，並精準提取結構化 JSON 資料。
- **iOS 深度整合**: 完美支援 iOS 捷徑 (App Intents)，讓使用者可以透過桌面組件或通知中心快速觸發記帳任務。
- **響應式 UI 設計**: 利用 SwiftUI 與 Combine 打造的高性能介面，並內建多種精美的圖表展示消費統計，從圓餅圖、趨勢圖到類別對應。
- **智慧訂閱管理**: 自動追蹤並預測像是 iCloud、Netflix 或 Spotify 等週期性訂閱，協助用戶更好地掌控固定開銷。

#### 實踐成果
AIncome 不僅是一個技術原型，而是一個考慮到用戶隱私、性能與美感的高完整度產品。透過 Async/Await 管理非同步網路請求，並利用 UserDefaults 與文件儲存實現穩定的本地數據備份，確保使用者在不穩定網路環境下仍能流暢使用。
