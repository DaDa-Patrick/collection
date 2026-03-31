---
title: CPBL Baseball Stats 智慧棒球數據平台
date: "2025.06"
tagLabel: 資料平台
tags:
  - web
  - data
meta: 4 人團隊｜Next.js、Flask、MySQL、Firebase Auth、Selenium、Firecrawl
image: /src/assets/projects/截圖-2025-08-08-03.03.16.jpg
gallery:
  - /src/assets/projects/截圖-2025-08-08-03.03.01.jpg
  - /src/assets/projects/截圖-2025-08-08-03.04.48.jpg
  - /src/assets/projects/截圖-2025-08-08-03.05.01.jpg
  - /src/assets/projects/截圖-2025-08-08-03.03.45.jpg
  - /src/assets/projects/截圖-2025-08-08-03.04.18.jpg
  - /src/assets/projects/截圖-2025-08-08-03.03.54.jpg
  - /src/assets/projects/截圖-2025-08-08-03.05.16.jpg
description: 這是一個以中華職棒資料為核心的全端專案，整合自動化資料蒐集、資料庫建模、後端統計 API
  與前端互動介面，讓使用者可以查戰績、看球員進階數據、追蹤球員並管理個人備註。
accent: "#0d59ff"
sidebar:
  role: 資料爬蟲 / 資料工程
  type: 課程專案
  period: 2026.04 - 2025.06
  techStack:
    - Next.js
    - TypeScript
    - Flask
    - MySQL
    - Firebase
    - Selenium
    - BeautifulSoup
highlights:
  - 打通資料爬蟲→資料庫→API→前端展示的完整流程
  - 提供戰績排行/球員詳情/比賽盒分數等核心功能
  - 整合 Google 登入與球員追蹤/備註建立個人化使用體驗
---
### 專案詳情

這個專案的目標是把分散的中華職棒資訊整合成一個可查詢、可追蹤、可視覺化的資料平台，讓一般球迷也能快速掌握賽況與球員表現。前端首頁直接呈現最新戰績、勝率、場差與連勝連敗趨勢，強調「打開就看懂現在聯盟狀態」。​

在功能設計上，我把使用者最常見的使用情境拆成三個主軸：  
1) **看聯盟與比賽**：可依日期切換賽程，進入單場查看盒分數與逐局得分，涵蓋一般賽事與延長賽資訊。  
2) **看球隊與球員**：可從球隊頁查看名單，深入到球員頁看打擊/投球統計。  
3) **做個人化管理**：登入後可追蹤球員、取消追蹤、並新增自己的觀察備註。 

資料層面，我規劃了完整的棒球領域資料庫模型，包含球隊、球員、球季、賽事、逐打席事件、結果類型與使用者偏好，讓後續統計計算有一致且可擴充的基礎。這使得專案不只是「顯示資料」，而是具備可持續更新與分析的能力。

後端 API 以 Flask 建置，除了提供球隊/球員/比賽查詢，也將進階統計（如上壘率、長打率、OPS、滾飛比）在伺服器端整合計算，前端可直接渲染結果，減少前端重算成本並提高一致性。排行榜也有連勝/連敗與場差計算邏輯，資訊更完整。​

在資料蒐集流程上，專案用 Selenium、requests、BeautifulSoup 與 Firecrawl 組成多層抓取策略，包含賽程抓取、球員資訊解析、文字轉播事件擷取與 API fallback，提升在來源頁面結構變動時的韌性。這是整個系統能「長期有資料」的核心價值。​

此外，專案整合 Firebase Google 登入，並以 Token 驗證保護個人化 API（追蹤、取消追蹤、備註、個人資料同步），把「公開資料查詢」與「個人使用行為」清楚分層，讓產品可往會員功能持續演進。​
