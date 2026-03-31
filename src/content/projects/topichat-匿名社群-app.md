---
title: Topichat 匿名社群 App
date: "2025.09"
tagLabel: 行動應用
tags:
  - mobile
  - ai
meta: 三人團隊｜SwiftUI・OpenAI・WebSocket
image: /src/assets/projects/IMG_8125.JPG
gallery:
  - /src/assets/projects/IMG_8126.JPG
  - /src/assets/projects/IMG_8127.JPG
  - /src/assets/projects/IMG_8128.JPG
  - /src/assets/projects/IMG_8129.JPG
  - /src/assets/projects/IMG_8130.JPG
description: Topichat 是一款專為現代匿名社交打造的即時通訊 App。運用 Go 語言與 WebSocket 技術實現毫秒級訊息同步，並串接
  OpenAI GPT 系列模型為聊天群組提供即時對話摘要，讓用戶及時掌握討論動向。
accent: "#6f7bff"
highlights:
  - 採用 Go 搭配 Gorilla WebSocket 構建穩定的高併發後端架構。
  - 串接 AI 實現自動匯整聊天室內容，幫助忙碌的使用者秒懂討論重點。
  - 內建趣味動物暱稱配對，在保護用戶隱私的同時增加互動的趣味。
role: iOS 應用開發
period: 2025.09 - 2025.11
type: 三人團隊
sidebar:
  role: iOS 應用程式開發
  period: 2025.09 - 2025.11
  type: 三人團隊
---
### 專案詳情

**Topichat** 的核心理念是打破傳統通訊軟體的負擔，讓使用者在保證隱私的前提下，能針對特定主題進行深度交流。

#### 核心技術亮點

*   **SwiftUI & Combine**: 運用 Apple 最新開發框架打造流暢的使用者介面，並透過 Combine 處理複雜的狀態管理與非同步 API 請求。
*   **Go 後端架構**: 選擇 Go 語言作為後端核心，利用其優異的併發處理能力，在面對大量訊息流與連線時依然能保持極低的延遲。
*   **WebSocket 即時同步**: 透過極輕量的 WebSocket 協定，實現訊息的一端發送、多端瞬時更新。
*   **AI 動態摘要**: 每當聊天室累積到一定程度的對話，系統會自動透過 OpenAI 模型產生該時段的精簡摘要，解決「爬樓梯」太累的問題。
*   **管理員後端與日誌**: 內建完整的系統管理入口，包含用戶停權、聊天室監控與高度透明化的運作日誌。

#### 開發心路歷程

這個專案最大的挑戰在於如何平衡「匿名性」與「社群內容質量」。為此，我不僅設計了匿名暱稱機制，更引入了 AI 摘要技術，讓新進入聊天室的使用者能快速融入討論，避免匿名社群常見的內容碎片化問題。
