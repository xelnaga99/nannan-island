/* 楠楠島 設定檔：換試算表、換音樂只要改這裡 */
window.NANNAN_CONFIG = {
  // Google 試算表 ID（網址 /d/ 和 /edit 之間那一串）。留空則使用內建資料。
  sheetId: "15k3B3SVC5-FZ3gQea3nfHPqVR5lQkVmH",
  // 即時連線（島上人數、其他玩家、猜拳）。把 Firebase 的 firebaseConfig 貼在這裡；留 null 就是單機模式。
  // 例：firebase: { apiKey: "...", authDomain: "...", databaseURL: "https://xxx-default-rtdb.asia-southeast1.firebasedatabase.app", projectId: "...", appId: "..." },
  firebase: null,
  online: true,
  // 背景音樂（mp3）。白天 06:00–18:00 播 day，其餘播 night，轉換時漸入漸出。
  music: {
    day: "day.mp3",
    night: "night.mp3"
  }
};
