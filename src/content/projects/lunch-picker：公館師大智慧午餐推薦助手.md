---
title: Lunch Picker：公館師大智慧午餐推薦助手
date: "2025.10"
tagLabel: Web / 前端
tags:
  - web
  - data
meta: 四人團隊｜React、Vite、Vanilla CSS、LocalStorage
image: /src/assets/projects/IMG_8147.PNG
gallery:
  - /src/assets/projects/IMG_8143.PNG
  - /src/assets/projects/IMG_8142.PNG
  - /src/assets/projects/IMG_8145.PNG
  - /src/assets/projects/IMG_8146.PNG
description: 整合了師大與公館商圈數百筆餐廳資訊，透過多維度的篩選演算法，提供個人化的快速午餐決策體驗。不僅能不用登入就記住你的喜好，還能透過「避雷機制」持續優化推薦品質。
accent: "#6f7bff"
highlights:
  - 智慧多維度篩選演算法
  - 個人化避雷機制系統
  - 收藏清單與歷史軌跡追蹤
sidebar:
  role: 產品設計 / 全端開發
  period: 2025.10 - 2025.11
  type: 課程專案
  techStack:
    - React 18
    - Vite
    - React Router
    - Lucide Icons
    - Vanilla CSS
links:
  - label: 網頁連結
    url: https://dada-patrick.github.io/food_recommend_web/
---
### 專案詳情

在繁忙的校園或職場生活中，「中午吃什麼」往往是一個讓人頭痛的問題。為了終結無窮無盡的選擇困難，我開發了這款 **Lunch Picker**。這不只是一個隨機轉盤，而是一個真正理解使用者偏好、並能持續累積個人口味的智慧助手。

#### 核心價值與問題解決
*   **消除決策疲勞**：透過直覺的標籤式選擇（飯食、麵食、價位、地點），在三秒內給出最佳推薦。
*   **精準資料庫**：內建針對師大及公館商圈深度優化的餐廳資料，涵蓋價位、評分與特色標籤。
*   **個人偏好記憶**：利用瀏覽器本地儲存（LocalStorage），自動記錄使用者的飲食類型偏好與地點選擇，下次開啟即用。

#### 技術亮點與功能實現
*   **避雷機制（Blocklist）**：使用者可以將不合口味的店家加入黑名單。推薦引擎在運算時會自動剔除這些選項，確保每次推薦都是潛在的美味。
*   **歷史與收藏**：系統紀錄最近 10 筆推薦結果，並提供「愛心收藏」功能，讓使用者能快速找回心儀的餐廳。
*   **智慧過濾引擎**：採用多條件交集篩選邏輯，即使在大量資料（如 `restaurant.json` 中的數百家店鋪）中也能達到毫秒級的響應速度。

#### 設計美學
專案採用現代化的設計語彙，營造出高端且舒適的視覺感：
*   **毛玻璃效果 (Glassmorphism)**：介面充滿層次感，提升了整體的數位質感。
*   **深色模式與漸層**：以深色調為底，搭配靛藍與粉色漸層，適合在各種環境下使用。
*   **流暢微動畫**：透過 CSS Transition 與動畫，讓推薦結果出現時更具驚喜感與生命力。
