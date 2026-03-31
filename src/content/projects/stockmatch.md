---
period: 2025.03 - 2025.04
title: StockMatch 股票配對選股平台
date: "2025.04"
tagLabel: 行動應用
tags:
  - ai
  - mobile
  - data
meta: 四人團隊｜SwiftUI、Firebase、OpenAI
description: 將投資推薦融入 Tinder 式滑卡互動，結合 GPT 企業角色對話與 Finnhub 即時資料， 讓新手能以遊戲化方式認識股票並管理偏好。
accent: "#3886d1"
techStack:
  - SwiftUI
  - Firebase
  - OpenAI API
  - Finnhub API
role: iOS 前端開發 / 產品設計
highlights:
  - 實現如 Tinder 般的直覺式「滑卡」選股機制。
  - 整合 OpenAI API 為每支股票賦予獨特的 AI 個性與即時問答能力。
  - 完整串接 Firebase Auth 與 Google 登入系統提供安全的個人化服務。
  - 透過 Finnhub API 獲取即時市場數據並由 AI 進行深度商業摘要。
links:
  - label: 獲獎資訊：師大新聞稿
    url: https://www.es.ntnu.edu.tw/index.php/2025/05/12/1140512/
type: 2025 Hack to the Top 競賽專案
image: ../../assets/projects/A4E5DB1A-502C-4B88-A4F7-C716139FEAE1.jpeg
---
### 專案詳情

**StockMatch** 是一款旨在降低投資門檻、提升選股趣味性的 iOS 應用程式。有別於傳統金融軟體密密麻麻的報表與數字，本專案將常用的社交軟體「滑卡（Swipe Control）」機制引入股市，讓使用者能以最直覺的方式快速刷選感興趣的公司。

#### 核心功能亮點：

- **直覺滑卡配對**：
  使用者可以向右滑動收藏（Like）看好的潛力股，或向左滑動跳過。每張卡片皆展示了企業的「AI 個性」，例如將該公司擬人化，用更親切、易懂的語言描述其核心競爭優勢。

- **AI 驅動的企業對話**：
  整合了 OpenAI 最新技術，使用者可以直接進入個別股票的聊天室。這些聊天室並非冷冰冰的資訊查詢，而是根據該公司的財務背景、行業地位與企業風格，由 AI 扮演該公司代表（如：專業穩健、活潑創新等風格）與使用者進行深度交流，解釋複雜的金融名詞。

- **深度商業摘要**：
  透過與後端 API 及 Finnhub 數據的對抗與整合，App 提供了詳細的業務摘要與產業分析。當使用者上滑卡片時，即可查看由 AI 整理過的簡化版商業計畫書與市場定位。

- **個人化收藏管理**：
  所有「配對」成功的股票都會存入使用者的個人收藏清單中。系統採用本地持久化與雲端驗證（Firebase）結合的方式，確保每位使用者的選股紀錄能跨裝置同步且安全無虞。

#### 技術與設計考量：

- **SwiftUI 導向開發**：
  全案採用 SwiftUI 構建，實現了流暢的卡片拖曳動畫（DragGesture）與 3D 旋轉效果，並保持介面的現代與簡潔感。
  
- **安全的身分驗證**：
  整合了 Google Sign-In 與 Firebase Authentication，提供順暢的登入流程與一致的會員管理體驗。

- **多模態對話系統**：
  在對話組件中使用了 Markdown 渲染，讓 AI 回覆的金融分析報告具有極高的可讀性與專業層次。
