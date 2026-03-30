---
title: Show the Sheep 合作型策略遊戲
date: '2024.03'
tagLabel: 遊戲
tags:
- game
meta: 三人團隊｜Python・Pygame
image: ../../assets/projects/image.png
description: 於 48 小時 Game Jam 中，以「視覺受限」為題打造雙人合作遊戲。 玩家需分工操控牧羊犬與無人機，在夜間森林中護送羊群躲避狼群。
accent: '#ffe056'
highlights:
- 榮獲 Game Jam 玩法評鑑第 1 名與總榜第 3 名。
- 創新雙視角協作機制（手電筒光束與無人機空拍）。
- 負責所有程式開發，實作 AI 羊群行為、動態視野與物理碰撞系統。
role: 遊戲設計 / 全端獨立開發
period: 2024.03 - 2024.04
type: Normal Game Jam 2024 競賽專案
techStack:
- Python
- Pygame
- NumPy
links:
- label: 競賽成果頁面
  url: https://itch.io/jam/normal-game-jam-2024/rate/2717569
- label: 遊戲下載頁面
  url: https://dada-patrick.itch.io/show-the-sheep
- url: https://youtu.be/Pj5XoseOwUk?si=1uE2eGdpuaaTC7aZ
  label: 遊戲展示影片
---
### 專案詳情

**Show the Sheep** 是一款專為雙人協作設計的冒險模擬遊戲，誕生於一場限時的 Game Jam。遊戲背景設定在一個白天高溫難耐的世界，為了生存，牧羊工作必須在危險的深夜進行。

#### 核心機制：跨維度協作
遊戲最大的特色在於兩位玩家完全不同的操控邏輯與視覺資訊：
- **牧羊犬 Hades (Player 1)**：負責地面引導。由於年邁，視力與體力有限，必須依賴身上裝備的「聚光燈」在黑暗中照亮道路。Hades 的移動會產生威懾力，用於精準驅趕羊群。
- **無人機 (Player 2)**：提供空中支援。無人機擁有較廣的環形視野，並搭載了「抗重力牽引束」，可以直接抓取走散的綿羊或入侵的狼群，是應對緊急狀況的關鍵。

#### 技術與設計亮點
1. **羊群行為模擬**：應用了分離 (Separation)、對齊 (Alignment) 與凝聚 (Cohesion) 的群體演算法，使羊群展現出逼真的群聚感與對威脅的逃避反應。
2. **動態遮罩與光影**：實作了渲染遮罩系統，模擬牧羊犬的手電筒光束效果與無人機的局部視野。兩者的光影交疊強化了溝通的需求——牧羊犬看不見的地方，需要無人機指引。
3. **狼群 AI 威脅**：狼群會自動追蹤最近的羊隻，並將其轉化為星果（代表羊隻脫逃）。玩家必須在限時內利用無人機的抓取能力將狼群拋擲到地圖邊緣。

#### 獲獎成績
本專案在參賽的 30 件作品中脫穎而出，獲得了高度評價：
- **Gameplay (玩法)**：#1
- **Assets (美術資產)**：#2
- **Overall (總體評價)**：#3
- **Theme (主題契合度)**：#4

這款遊戲展示了我們在短時間內完成核心系統開發、演算法優化以及多人同步遊戲邏輯整合的能力。
