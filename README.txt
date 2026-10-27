楠楠島 檔案說明（所有檔案放在同一層）
index.html          頁面骨架與載入畫面
style.css           全部樣式
app.js              主程式（3D 場景、角色、遊戲、連線）
config.js           設定檔：試算表 ID、Firebase 連線設定、音樂檔名（最常改這個）
day.mp3 / night.mp3 白天、夜間音樂（用同名 mp3 覆蓋即可更換）
firebase-rules.json Firebase 資料庫安全規則（貼到 Firebase 的「規則」分頁，不用上傳到網站）

開啟連線功能：把 Firebase 的 firebaseConfig 貼進 config.js 的 firebase: { ... }，再重新上傳 config.js。
