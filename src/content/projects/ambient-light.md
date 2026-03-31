---
title: 動態背光燈光調整系統
date: "2022.10"
tagLabel: 硬體 / IoT
tags:
  - hardware
meta: 獨立完成｜Python、ESP8266、WS2812B
image: ../../assets/projects/Screenshot_2024-09-22_at_13.42.49.png
gallery:
  - /src/assets/projects/img_8168.jpg
  - /src/assets/projects/img_8171.jpg
  - /src/assets/projects/img_8170.jpg
  - /src/assets/projects/img_8169.jpg
description: 以低於市售 10% 的成本打造即時環境背光系統。透過 Python 捕捉螢幕邊緣顏色， 串流至 ESP8266 控制
  FastLED，將 LED 變換延遲壓縮至 16 毫秒內，顯著減少眼睛疲勞並強化沉浸感。
accent: "#2760fb"
highlights:
  - 整合硬體選型、演算法與韌體開發，全程獨立完成。
  - 優化取樣演算法與序列通訊，達到近 60 FPS 的即時同步效果。
  - 以可擴充架構預留智慧家居整合與燈帶擴充可能。
role: 全端開發 / 產品設計
period: 2022.10 - 2024.06
type: 個人專案
techStack:
  - Python
  - PySerial
  - NumPy
  - Pillow
  - Quartz
  - ESP8266
  - Arduino
  - FastLED
  - py2app
  - PyInstaller
links:
  - label: 展示影片
    url: https://youtu.be/mIWP7LP0n9k
---
### 專案詳情
`MonitorLight` 是一個把數位畫面延伸到實體空間的互動式 IoT 專案。核心概念很直接: 讀取螢幕邊緣的主要色彩，重新整理成燈條可用的顏色資料，再即時輸出到桌面周圍的 LED 燈光，讓使用者在觀影、遊戲或工作時都能感受到與畫面同步的光線變化。

### 我做了什麼
我把整個流程拆成兩個部分設計:

1. `電腦主機端`  
   負責擷取螢幕邊緣區域、壓縮成適合燈條的色彩資料，並在更新頻率與視覺穩定之間取得平衡。

2. `ESP8266 控制端`  
   接收主機送出的 RGB 資料，驅動 WS2812B LED 燈條完成即時顯示，形成完整的軟硬體串接流程。

### 專案重點
這個專案的重點不只是「燈會亮」，而是把一條可持續運作的即時互動鏈路做完整:

- 從螢幕不同邊緣抽取代表色，建立畫面與燈珠之間的對應關係
- 針對暗部與低辨識度色彩做過濾，避免環境光在黑畫面時產生不必要雜訊
- 透過顏色分組與資料簡化，降低 LED 快速跳動造成的閃爍感
- 建立手動指定燈色的測試模式，方便校正、驗證與展示

### 解決的問題
市面上的情境燈產品通常是封閉式方案，客製程度有限。這個專案的價值在於自行完成從畫面分析到燈光輸出的整合流程，驗證了我能處理以下幾件事:

- 即時資料擷取與轉換
- 跨軟硬體通訊整合
- 互動裝置的視覺體驗調校
- 從原型驗證走到可展示成果的工程化整理
