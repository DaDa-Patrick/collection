---
period: 2023.08 - 2025.04
title: ChatWithGPT 群組聊天 App
date: "2023.08"
tagLabel: 行動應用
tags:
  - ai
  - mobile
meta: 獨立完成｜SwiftUI、Firebase、GPT
accent: "#1372cf"
techStack:
  - SwiftUI
  - Firebase Auth
  - Cloud Firestore
  - Firebase Messaging
  - Google Sign-In
  - OpenAI
role: 全端開發
type: 企業合作專案
image: ../../assets/projects/EFA8D9FE-2CF5-4871-B275-8A3F920FB0BE.jpeg
description: 一款結合群組聊天、私訊、好友系統與 AI 助理協作的 iOS App，讓使用者能在同一個對話流中完成溝通、提問與協作。
highlights:
  - 整合 Email / Google 登入、好友邀請、群組與一對一私訊流程
  - 以 Firebase 建立即時訊息同步、未讀統計、已讀狀態、輸入中提示與推播通知
  - 把 AI 助理設計成聊天室成員，支援 @mention、回覆脈絡、訊息標記與互動表情
---
### 專案詳情
`ChatWithGPT` 是一款以 iPhone 為主要載體的即時聊天應用，核心目標不是單純做一個聊天介面，而是把「團隊溝通」與「AI 協作」放進同一個對話空間。使用者可以透過 Email 或 Google 帳號登入，建立群組、加入好友、開啟一對一私訊，並直接在聊天室中與 AI 助理互動，不需要切換到另一個問答工具。

這個專案的重點在於把 AI 視為聊天室中的一個成員，而不是外掛功能。當使用者在訊息中提及 `@gpt`，系統會保留對話脈絡、觸發 AI 回覆流程，讓 AI 能跟著群組或私訊節奏參與討論。這樣的設計讓產品更接近日常協作場景，而不是單次問答。

### 功能設計
我把整個產品拆成兩條主要使用路徑。第一條是社交與溝通流程，包含登入、好友邀請、好友請求處理、群組建立、成員邀請、私訊聊天室建立與聊天室釘選。第二條是訊息互動流程，包含即時訊息同步、已讀狀態、未讀計數、輸入中提示、訊息回覆、表情反應、訊息收回，以及提及特定成員的提醒機制。

在聊天體驗上，我特別強化了「像成熟通訊軟體一樣好用」這件事。訊息支援滑動回覆、長按開啟互動選單、快速表情反應與完整 Emoji 選擇，群組內也能看到已讀狀態與成員名單管理。除了訊息本身之外，使用者也能透過推播通知快速回到指定聊天室，讓跨裝置或離開 App 後的對話延續更自然。

### 專案成果
技術上，這個專案以 SwiftUI 建構 iOS 介面，並以 Firebase Auth、Cloud Firestore、Firebase Messaging 與 Google Sign-In 串起登入、資料同步與通知流程。整體架構偏向事件驅動與即時同步，讓聊天室列表、未讀數、訊息狀態與成員變動都能即時反映在 UI 上。
