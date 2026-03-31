---
title: ToDoClaw 智慧任務管理系統
date: "2026.03"
tagLabel: AI / 自動化
tags:
  - ai
  - web
  - automation
meta: 獨立完成｜FastAPI、Next.js、OpenAI、Scriptable、SQLite
image: /src/assets/projects/Capture-2026-03-31-124651.png
gallery:
  - /src/assets/projects/IMG_8161.png
  - /src/assets/projects/IMG_8158.png
  - /src/assets/projects/IMG_8159.png
  - /src/assets/projects/IMG_8160.png
description: ToDoClaw 是一款專為追求極致效率的個人開發者設計的任務系統。它打破了傳統待辦軟體的限制，將 OpenClaw
  的自然語言處理能力與現代化 Web 指揮中心相結合，並針對 iOS Scriptable 生態開發了支援 StandBy
  模式的高質感小工具，實現了從對話到桌面的無縫任務追蹤。
accent: "#6f7bff"
highlights:
  - 整合 OpenClaw 自然語言處理實現代辦語音/文字管理
  - 支援 Google Calendar 同步的智慧任務調度系統
  - 現代化 Glassmorphism 視覺風格的 Next.js 管理後台
  - 專為 iOS StandBy 維度優化的 Scriptable 桌面小工具
  - 基於 FastAPI 與 SQLAlchemy 的高效能異步 REST API 架構
role: 全端開發 / 系統架構設計
period: 2026.02 - 2026.03
type: 個人專案
techStack:
  - Python
  - FastAPI
  - SQLite
  - React
  - Next.js
  - Tailwind CSS
  - Scriptable
---
### 專案詳情

#### 1. 專案背景與願景
在數位時代，資訊碎片化是效率的最大敵。ToDoClaw 的誕生是為了建立一個「單一真實來源（Single Source of Truth）」的個人任務中樞。它不只是一個記錄清單，而是一個能透過 AI 理解需求、在網頁端視覺化管理、並在手機桌面實時反饋的完整閉環系統。

#### 2. 核心技術架構
本系統採用前後端分離的現代化架構：
- **後端 (FastAPI)**：利用 Python 的非同步特性構建，確保 API 響應速度控制在毫秒級。透過 SQLAlchemy 實現任務、標籤、與操作日誌的持久化存儲，並整合 Google Calendar API 進行時程自動同步。
- **前端 (Next.js)**：打造「Mission Control」中央指揮中心。設計語言採用高品質的毛玻璃質感 (Glassmorphism)，將「待辦」、「進行中」與「緊急」任務進行合理的視覺分層，讓使用者能快速聚焦。
- **移動端互動 (Scriptable)**：針對 iOS 系統特性，開發了專屬的 JavaScript 腳本，透過私有 API 獲取數據。特別針對 iPhone 的時鐘模式（StandBy Mode）進行 UI 優化，確保在充電時也能作為美觀且實用的任務看板。

#### 3. 亮點功能描述
- **AI 自然語言入口**：使用者可以直接對 OpenClaw 下達如「幫我新增一個週五截稿的高優先任務」或「列出目前的進度摘要」，AI 會自動解析日期、優先度並寫入資料庫。
- **動態標籤註冊 (Tag Registry)**：系統具備靈活的標籤管理機制，可根據任務類型自動歸類，並提供豐富的篩選維度。
- **完整的活動追蹤 (Audit Log)**：系統會自動記錄任務的每一次狀態變遷（例如從 Todo 轉為 Doing），為日後的個人生產力回顧提供詳實的數據支持。
- **多元化 Display 策略**：不論是在電腦端的瀏覽器、聊天機器人的對話框，還是 iPhone 的小組件，資料始終即時同步，確保使用者隨時隨地掌握進度。

#### 4. 結語
ToDoClaw 展現了如何將 AI 工具與日常開發流程深度整合。它不僅是一個工具，更是對「極簡主義」與「高度自動化」效率哲學的實踐。
