---
title: AI 智慧郵件摘要管理系統
date: '2025.04'
tagLabel: AI / 自動化
tags:
- ai
- automation
meta: 獨立完成｜Python・OpenAI・IMAP
image: ../../assets/projects/A7F4325A-5FD9-41BA-8027-B4FD4976A9DF.jpeg
description: 此專案可從多個信箱抓取近期郵件，透過 GPT 分析重要性與是否需回覆，最後生成結構化 Markdown 電子報並自動寄送給指定收件人。
accent: '#3f7fbf'
highlights:
- 支援多帳號 IMAP 收信與廣告信初步過濾
- 整合 GPT 進行郵件摘要、重要性判斷與分類
- 自動輸出每日 Markdown 報告並轉為 HTML Email 寄送
role: ''
period: 2025.03 - 2025.04
type: 個人開發
techStack:
- Python
- imaplib
- OpenAI
- MarkdownIt
- yagmail
---
### 問題背景

當同時管理多個信箱（個人、工作、學校）時，常見痛點包含：

- 重要訊息容易淹沒在大量通知與宣傳信中。
- 每封信逐一閱讀與整理耗時。
- 每日重複整理流程缺乏標準化輸出。

### 解決方案

本專案建立一條可重複執行的自動化管線：

1. 透過 IMAP 連線多個信箱並擷取近期郵件。
2. 以規則先做廣告信初步判斷與文字清理。
3. 呼叫 OpenAI 模型產出每封信的摘要、重要性、是否需回覆、分類。
4. 將所有摘要再交由 GPT 生成一份「公司內部電子報風格」的 Markdown 日報。
5. 將 Markdown 轉為 HTML，透過 SMTP 寄送給指定收件人。

### 主要功能模組

- `utils/email_fetcher.py`：負責 IMAP 收信、欄位擷取、純文字內容抽取與廣告信判斷。
- `utils/gpt_summary.py`：建立 Prompt 並呼叫 GPT，回傳單封郵件的分析結果。
- `utils/report_writer.py`：整合多封摘要，生成最終 Markdown 報告並寫入 `output/YYYY-MM-DD.md`。
- `send_email_digest.py`：將當日 Markdown 報告轉成 HTML 並寄送每日摘要信。

### 專案輸出成果

- 每日產生一份可讀性高的郵件摘要報告（Markdown）。
- 報告內容依「需回覆 / 優先通知 / 推廣資訊 / 其他通知」分區呈現。
- 可直接寄出 HTML 版本摘要，支援日常個人或團隊資訊同步。

### 後續優化方向

- 加入收件匣去重與執行紀錄追蹤（避免重複摘要）。
- 增加信件來源白名單/黑名單與更精細分類規則。
- 將敏感憑證移至環境變數或 Secret Manager，提升安全性。
