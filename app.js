var CFG = window.NANNAN_CONFIG || {};
(function () {
  if (!window.THREE || !window.gsap || !THREE.OrbitControls) {
    var f = document.createElement("div");
    f.className = "fallback";
    f.textContent = "無法載入 3D 元件，請檢查網路連線後重新整理。";
    document.body.appendChild(f);
    return;
  }

  // ---------- 7 大特色專班/科別與最新消息資料 ----------
  var hotspots = [
    {
      id: "bilingual",
      name: "雙語實驗班",
      subtitle: "國際教育中心 · 西側大樓轉折處",
      tag: "BILINGUAL CLASS · INTERNATIONAL EDUCATION",
      intro: "培養學生的雙語溝通力，兼具精準書寫與創意思維，強化口語表達與團隊協作，讓語言成為思辨與連結世界的橋樑。",
      pos: [ -3.5, 2.15, -0.9 ],
      camTarget: [ -3.5, 1.6, -0.9 ],
      camPos: [ -2.0, 3.8, 2.4 ],
      color: "#2f8fd8",
      items: [
        { date: "精選影音", title: "雙語實驗班介紹影片", summary: "透過影片直擊楠梓高中雙語實驗班沉浸式教學、外師專題實作與國際跨國共學交流的精彩全貌！", link: "https://youtu.be/Vdja29Jh0cI?si=4Iel6TWHnE41ArzV" },
        { date: "課程規劃", title: "漸進式跨科雙語學習", summary: "三年漸進式設計，從強化語言基礎，到發展專題實作與批判力，最終結合升學準備與實務應用（如簡報、新聞寫作與全球議題探索）。特色包含外師授課與AI語言應用。", link: "" },
        { date: "國際交流", title: "拓展全球夥伴網絡", summary: "與美國、日本、越南、澳洲等國建立合作，透過跨國學伴計畫、跨國視訊共學、教育旅行與文化體驗營，深化跨文化理解與全球視野。", link: "" },
        { date: "招生資訊", title: "免試入學後校內擇優", summary: "免試入學進入楠梓高中後，即可參加校內報名，擇優進入實驗班。如有疑問可洽詢教務處研發組（分機1108）。", link: "https://sites.google.com/nths.kh.edu.tw/nthsbilingual" }
      ]
    },
    {
      id: "ai-semi",
      name: "AI半導體專班",
      subtitle: "行政大樓東側5樓實驗室",
      tag: "AI & SEMICONDUCTOR CLASS",
      intro: "面對AI與半導體產業急速發展的浪潮，本專班致力於培養具備跨領域整合能力的未來人才。透過完善的課程規劃、產學合作與專題實作，讓學術與實務無縫接軌。",
      pos: [ 5.3, 2.05, 5.2 ],
      camTarget: [ 5.3, 1.8, 5.2 ],
      camPos: [ 5.3, 3.6, 8.4 ],
      color: "#7c5cf0",
      items: [
        { date: "課程亮點", title: "AI × 半導體跨域整合實作", summary: "建構學生AI邏輯與晶片應用能力。開設生成式AI課程，讓學生實作從劇本撰寫、圖片繪製到語音生成的全AI專案；結合AMC數學賽、科展等多元競賽豐富學習歷程。", link: "" },
        { date: "大學合作", title: "高雄大學攜手打造半導體實驗室", summary: "引進大學端資源，由國立高雄大學教授親自指導「半導體製程探究與實作課程」。帶領楠梓學子挑戰奈米級薄膜量測、黃光微影等先進製程，落實學用合一。", link: "" },
        { date: "招生資訊", title: "免試入學後校內擇優", summary: "只要免試入學進入楠梓高中後，即可參加校內報名，擇優進入AI半導體專班。如有疑問可洽詢教務處設備組（分機1110）。", link: "https://sites.google.com/nths.kh.edu.tw/nths114ai/" }
      ]
    },
    {
      id: "law-finance",
      name: "法政財經專班",
      subtitle: "圖資大樓 / 圖書館",
      tag: "LAW · POLITICS · FINANCE",
      intro: "自 115 學年度起全新設立！以法律、政治、經濟及社會科學領域為主要發展方向，涵括法學思辨、公共政策與現代金融素養，培育具備社會洞察力與邏輯思辨的未來領袖。",
      pos: [ -2.6, 2.15, -3.0 ],
      camTarget: [ -2.6, 1.8, -3.0 ],
      camPos: [ -0.8, 3.8, 0.8 ],
      color: "#d9485f",
      items: [
        { date: "法學思辨", title: "法學論辯與模擬法庭研習", summary: "研討當代憲法、民刑法與科技人權等時事議題，培養批判性邏輯思維，並結合司法審判實作與模擬法庭，落實公民素養。", link: "" },
        { date: "財經商管", title: "總體經濟脈動與商業企劃", summary: "導入基礎投資理財觀念、國際經貿趨勢分析、企業永續經營 (ESG) 等課程，訓練學生商業敏銳度與企劃提案能力。", link: "" },
        { date: "招生資訊", title: "115 學年度全新招生與課程資源", summary: "法政財經專班將提供專屬的課程學習目標與電子報。詳細招生簡章下載、課程總覽與最新消息，請點擊下方專班網站查看！", link: "https://sites.google.com/nths.kh.edu.tw/nths115/" }
      ]
    },
    {
      id: "sports",
      name: "體育班",
      subtitle: "北端田徑場",
      tag: "SPORTS CLASS · ATHLETICS",
      intro: "重視品德、學業與專項競技並進，結合運動科學化訓練模式，致力培育國家級運動代表隊與具備運動管理素養之頂尖人才。",
      pos: [ 4.85, 1.0, -13.6 ],
      camTarget: [ 4.85, 0.8, -13.6 ],
      camPos: [ 4.85, 5.5, -7.5 ],
      color: "#e8d12c",
      items: [
        { date: "形象影音", title: "體育班形象簡介影片", summary: "直擊楠梓高中體育班日常訓練、現代化運動場館設施與選手熱血競技的精彩瞬間！", link: "https://www.youtube.com/watch?v=QywWZm43CiY&list=PLUELEYFV86b6-0ZW2u1wBbdi971J1p_e3&index=1" },
        { date: "招生項目", title: "四大重點競技專項招募", summary: "本校體育班重點招募與培訓四大運動項目：【田徑】、【跆拳道】、【自由車】、【五人制足球】。由國家級專任運動教練進行系統化週期培訓。", link: "" },
        { date: "訓練設施", title: "專業運動防護與現代化訓練場館", summary: "配置標準田徑場、重訓體能室、光電風雨球場與運動防護中心，導入運動科學監控體能數據，預防運動傷害並提升競技表現。", link: "" },
        { date: "升學展望", title: "運動績優甄審保送多元進路", summary: "選手可透過中等學校運動績優學生甄審、甄試及獨立招生管道，直升國立體大、師大體育系及健康休閒運動產業相關頂尖系所。", link: "" }
      ]
    },
    {
      id: "data-processing",
      name: "資料處理科",
      subtitle: "行政大樓西側4樓",
      tag: "DIGITAL BUSINESS · IT · INNOVATION",
      intro: "本科致力於培育數位跨領域人才，以「數位商務 × 資訊科技 × 創新整合」為核心，引領學生將資訊技術轉化為商業解決方案，培育具備商業思維與實作能力的數位領航人才。",
      pos: [ -2.8, 1.62, 5.2 ],
      camTarget: [ -2.8, 1.45, 5.2 ],
      camPos: [ -2.8, 3.2, 8.4 ],
      color: "#14b5a0",
      items: [
        { date: "核心宗旨", title: "數位商務 × 資訊科技 × 創新整合", summary: "提供商業思維並結合大數據分析；學習程式語言與實務應用，深化資訊科技硬實力，培育跨域創新的現代數位人才。", link: "" },
        { date: "課程地圖", title: "三年循序漸進的技能培育", summary: "高一奠定數位科技與商業基礎知能，高二深化程式設計、網頁開發與資料庫應用，高三聚焦於專題實作與競賽發表。", link: "" },
        { date: "多元進路", title: "科技大學銜接與就業方向", summary: "升學直攻科大資管、資工、多媒體與企管系；就業涵蓋軟體開發、多媒體網頁設計、數位行銷廣告企劃、商業會計及公職資訊人員。", link: "https://sites.google.com/nths.kh.edu.tw/nths115-1/" }
      ]
    },
    {
      id: "tourism-catering",
      name: "觀餐科 (觀光/餐飲)",
      subtitle: "行政大樓最西側1樓",
      tag: "TOURISM & CATERING",
      intro: "涵蓋「觀光事業科」與「餐飲管理科」。培養推動在地深度的觀光企劃人才，並兼具精緻烘焙、中西餐烹調及國際餐旅接待之卓越實務能力。",
      pos: [ -4.6, 0.65, 5.2 ],
      camTarget: [ -4.6, 0.45, 5.2 ],
      camPos: [ -4.6, 2.5, 8.4 ],
      color: "#f0702e",
      items: [
        { date: "觀光事業科", title: "在地深度觀光與活動展演企劃", summary: "透過基礎與特色課程結合，培養學生在地深度觀光導覽與活動規畫能力。強調全國專題競賽、業師協同教學及豐富的校外參訪體驗。", link: "https://sites.google.com/nths.kh.edu.tw/tourism/" },
        { date: "餐飲管理科", title: "星級廚藝與食農教育實作", summary: "涵蓋中西餐烹調、烘焙西點與飲調實務。推動食農教育與產學業師協同教學，近年更在「全國專題實作及創意競賽」中榮獲全國大獎。", link: "https://sites.google.com/nths.kh.edu.tw/food-and-beverage-managerment" },
        { date: "專業認證", title: "多元技術士證照與產學攜手", summary: "輔導考取餐飲烹調、烘焙西點與外語接待檢定證照。並與高餐大等指標名校及五星級連鎖餐旅集團合作，升學與就業無縫接軌。", link: "" }
      ]
    },
    {
      id: "events",
      name: "最新消息",
      subtitle: "光電風雨球場",
      tag: "LATEST NEWS · SOLAR STADIUM",
      intro: "高雄市立楠梓高中最新校園公告、競賽榮譽榜、體育賽事、校慶活動與多元專班入學日程匯總。",
      pos: [ 4.35, 2.75, -3.7 ],
      camTarget: [ 4.35, 2.2, -3.7 ],
      camPos: [ 6.35, 5.5, 1.8 ],
      color: "#e0589f",
      items: [
        { date: "招生快訊", title: "115學年度特色專班暨高一新生甄選簡章", summary: "國三同學及家長歡迎查閱雙語實驗班、AI半導體班、法政財經班與體育班最新招生規定。", link: "" },
        { date: "校園賽事", title: "光電風雨球場三對三籃球暨排球聯賽熱血開打", summary: "在百萬瓦綠能光電球場下奔跑跳躍，各班菁英隊伍同場競技，爭奪年度霸主！", link: "" },
        { date: "榮譽榜單", title: "狂賀！本校學子榮獲全國各項競賽特優獎項", summary: "雙語演講、科技創新實作及技藝競賽連創佳績，展現楠梓高中頂尖教學成效與卓越風采。", link: "" }
      ]
    }
  ];

  var canvas = document.getElementById("stage");
  var labelsEl = document.getElementById("labels");

  var renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  var SKY_LOW = 0xcfeaff;
  var scene = new THREE.Scene();
  scene.background = new THREE.Color(SKY_LOW);
  scene.fog = new THREE.Fog(SKY_LOW, 55, 190);

  var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.4, 650);

  function overview() {
    var k = 1.05 * Math.max(1, 1.15 / camera.aspect);
    return { target: new THREE.Vector3(0.5, 0.5, -4.5), pos: new THREE.Vector3(0.5, 21 * k, -4.5 + 23.5 * k) };
  }
  var ov = overview();
  camera.position.copy(ov.pos);

  var controls = new THREE.OrbitControls(camera, canvas);
  controls.target.copy(ov.target);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.maxPolarAngle = Math.PI * 0.47;
  controls.minDistance = 2.5;
  controls.maxDistance = 95;

  var hemi = new THREE.HemisphereLight(0xdff0ff, 0x7fae5c, 0.95);
  scene.add(hemi);
  var sun = new THREE.DirectionalLight(0xfff4dc, 1.25);
  sun.position.set(9, 18, 8);
  scene.add(sun);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  sun.shadow.camera.left = -21; sun.shadow.camera.right = 21; sun.shadow.camera.top = 21; sun.shadow.camera.bottom = -21;
  sun.shadow.camera.near = 1; sun.shadow.camera.far = 90;
  sun.shadow.bias = -0.0005; sun.shadow.normalBias = 0.03;
  sun.target.position.set(0, 0, -4);
  scene.add(sun.target);

  // ---------- 材質快取與物件生成工廠函式 ----------
  var matCache = {};
  function std(color, rough, metal) {
    var key = color + "_" + (rough !== undefined ? rough : 0.92) + "_" + (metal || 0);
    if (!matCache[key]) {
      var gc = new THREE.Color(color), hsl = { h: 0, s: 0, l: 0 };
      gc.getHSL(hsl);
      gc.setHSL(hsl.h, hsl.s * 0.88, Math.min(0.96, hsl.l * 0.9 + 0.1));
      matCache[key] = new THREE.MeshStandardMaterial({
        color: gc,
        roughness: rough !== undefined ? rough : 0.92,
        metalness: metal || 0
      });
    }
    return matCache[key];
  }

  var brickRed = std(0xba533c, 0.88);
  var whiteTrim = std(0xf3eee5, 0.7);
  var grayConcrete = std(0x9aa0a6, 0.9);
  var windowDark = std(0x6f8ba3, 0.22);
  var clockHands = []; // 鐘塔指針，由時間系統每幀更新
  var gateBars = null;      // 校門鐵柵欄（依時間開關）
  var courtLights = null;   // 光電球場夜間照明
  var tennis = null;        // 網球場資訊
  var roleApi = null;       // 角色系統用的人物工廠
  var roleMode = false, roleFP = false;   // 角色模式／第一人稱
  var playerPos = null;     // 玩家位置（車輛會禮讓）
  var obstCircles = [];     // 樹木等圓形障礙
  var courtHoops = [];      // 籃球場籃框位置，給投籃的學生使用
  var domeLight = std(0xd8dcde, 0.7);
  var walkwayMat = std(0xd4cfc5, 0.9);
  var goldText = std(0xd89f36, 0.4);

  var rbCache = {};
  function roundedGeo(w, h, d) {
    var key = w.toFixed(3) + "_" + h.toFixed(3) + "_" + d.toFixed(3);
    if (rbCache[key]) return rbCache[key];
    var minD = Math.min(w, d), r = Math.min(0.09, minD * 0.2), b = Math.min(0.025, h * 0.25, minD * 0.08);
    var iw = w - 2 * b, id = d - 2 * b, rad = Math.max(0.005, Math.min(r, iw / 2 - 0.001, id / 2 - 0.001));
    var sh = new THREE.Shape(), x0 = -iw / 2, x1 = iw / 2, z0 = -id / 2, z1 = id / 2;
    sh.moveTo(x0 + rad, z0); sh.lineTo(x1 - rad, z0); sh.quadraticCurveTo(x1, z0, x1, z0 + rad);
    sh.lineTo(x1, z1 - rad); sh.quadraticCurveTo(x1, z1, x1 - rad, z1);
    sh.lineTo(x0 + rad, z1); sh.quadraticCurveTo(x0, z1, x0, z1 - rad);
    sh.lineTo(x0, z0 + rad); sh.quadraticCurveTo(x0, z0, x0 + rad, z0);
    var g = new THREE.ExtrudeGeometry(sh, { depth: h - 2 * b, bevelEnabled: true, bevelThickness: b, bevelSize: b, bevelSegments: 2, curveSegments: 3 });
    g.rotateX(-Math.PI / 2);
    g.translate(0, h / 2 - b, 0);
    g.computeBoundingBox();
    var bb = g.boundingBox, cy = (bb.max.y + bb.min.y) / 2;
    g.translate(0, -cy, 0);
    rbCache[key] = g;
    return g;
  }
  function box(w, h, d, mat, x, y, z, parent, ry, rx, rz) {
    var geo;
    if (h >= 0.1 && w >= 0.3 && d >= 0.3 && !Array.isArray(mat) && !mat.map && !mat.transparent) geo = roundedGeo(w, h, d);
    else geo = new THREE.BoxGeometry(w, h, d);
    if (mat === windowDark && w >= 0.12 && h >= 0.12 && d <= 0.12) {
      var wc = geo.attributes.position.count, we = new Float32Array(wc * 2);
      for (var wi = 0; wi < wc; wi++) { we[wi * 2] = w; we[wi * 2 + 1] = h; }
      geo.setAttribute("wext", new THREE.BufferAttribute(we, 2));
    }
    var m = new THREE.Mesh(geo, mat);
    m.position.set(x || 0, y || 0, z || 0);
    if (ry) m.rotation.y = ry;
    if (rx) m.rotation.x = rx;
    if (rz) m.rotation.z = rz;
    (parent || scene).add(m);
    return m;
  }

  function cyl(rt, rb, h, seg, mat, x, y, z, parent, rx, ry, rz, ts, tl) {
    var geo = (ts !== undefined)
      ? new THREE.CylinderGeometry(rt, rb, h, seg || 16, 1, false, ts, tl)
      : new THREE.CylinderGeometry(rt, rb, h, seg || 16);
    var m = new THREE.Mesh(geo, mat);
    m.position.set(x || 0, y || 0, z || 0);
    if (rx) m.rotation.x = rx;
    if (ry) m.rotation.y = ry;
    if (rz) m.rotation.z = rz;
    (parent || scene).add(m);
    return m;
  }

  function slab(w, h, d, color, x, y, z, ry) {
    return box(w, h, d, std(color), x, y, z, scene, ry);
  }

  var tbBlob = new THREE.IcosahedronGeometry(1, 1), tbTrunk = new THREE.CylinderGeometry(0.05, 0.085, 0.7, 6);
  var tbTrunkM = new THREE.MeshStandardMaterial({ color: 0x8a6a4e, flatShading: true });
  var TB = [[0, 1.02, 0, 0.46], [0.27, 0.8, 0.1, 0.3], [-0.26, 0.86, -0.12, 0.31], [0.04, 1.36, -0.02, 0.27]];
  function leafMats(cols) { return cols.map(function (c) { return new THREE.MeshStandardMaterial({ color: c, flatShading: true, roughness: 0.95 }); }); }
  function buildTree(parent, x, z, s, mats, k) {
    var t = new THREE.Group();
    var tr = new THREE.Mesh(tbTrunk, tbTrunkM);
    tr.position.y = 0.35;
    t.add(tr);
    TB.forEach(function (b, bi) {
      var cr = new THREE.Mesh(tbBlob, mats[(k + (bi === 3 ? 1 : 0)) % mats.length]);
      cr.position.set(b[0], b[1], b[2]);
      cr.scale.set(b[3], b[3] * 0.92, b[3]);
      cr.rotation.y = bi * 1.3 + k;
      t.add(cr);
    });
    t.scale.setScalar(s);
    t.position.set(x, 0.02, z);
    parent.add(t);
    return t;
  }

  function disk(r, color, x, y, z, seg) {
    var m = new THREE.Mesh(new THREE.CircleGeometry(r, seg || 24), std(color));
    m.rotation.x = -Math.PI / 2;
    m.position.set(x, y, z);
    scene.add(m);
    return m;
  }

  function roadSeg(x1, z1, x2, z2, w, color) {
    var dx = x2 - x1, dz = z2 - z1, L = Math.hypot(dx, dz);
    slab(w, 0.03, L, color, (x1 + x2) / 2, 0.015, (z1 + z2) / 2, Math.atan2(dx, dz));
  }

  function dashes(x1, z1, x2, z2, y) {
    var dx = x2 - x1, dz = z2 - z1, L = Math.hypot(dx, dz), n = Math.floor(L / 1.6), ry = Math.atan2(dx, dz);
    for (var i = 0; i < n; i++) {
      var t = (i + 0.5) / n;
      slab(0.07, 0.012, 0.7, 0xf3f0e6, x1 + dx * t, y, z1 + dz * t, ry);
    }
  }

  function polyFlat(pts, color, y) {
    var s = new THREE.Shape();
    pts.forEach(function (p, i) { if (i === 0) s.moveTo(p[0], -p[1]); else s.lineTo(p[0], -p[1]); });
    var m = new THREE.Mesh(new THREE.ShapeGeometry(s), new THREE.MeshStandardMaterial({ color: color, roughness: 1, side: THREE.DoubleSide }));
    m.rotation.x = -Math.PI / 2;
    m.position.y = y;
    scene.add(m);
  }

  function stadium(w, h, cx, cz, color, y) {
    var r = w / 2, a = h / 2 - r, s = new THREE.Shape();
    s.moveTo(r, -a);
    s.lineTo(r, a);
    s.absarc(0, a, r, 0, Math.PI, false);
    s.lineTo(-r, -a);
    s.absarc(0, -a, r, Math.PI, Math.PI * 2, false);
    var m = new THREE.Mesh(new THREE.ShapeGeometry(s), new THREE.MeshStandardMaterial({ color: color, roughness: 1, side: THREE.DoubleSide }));
    m.rotation.x = -Math.PI / 2;
    m.position.set(cx, y, cz);
    scene.add(m);
  }

  function makeBlock(parent, w, h, d, x, z, ry) {
    var g = new THREE.Group();
    box(w, h, d, brickRed, 0, h / 2, 0, g);

    var numF = 5;
    for (var f = 1; f <= numF; f++) {
      var fy = f * (h / numF) - 0.04;
      box(w + 0.05, 0.07, 0.12, whiteTrim, 0, fy, d / 2 + 0.04, g);
      box(w + 0.05, 0.07, 0.12, whiteTrim, 0, fy, -d / 2 - 0.04, g);

      var nCols = Math.max(2, Math.floor(w / 0.7));
      for (var ci = 0; ci < nCols; ci++) {
        var wx = -w / 2 + (ci + 0.5) * (w / nCols);
        box(w / nCols * 0.68, h / numF * 0.45, 0.05, windowDark, wx, fy - (h / numF) * 0.3, d / 2 + 0.03, g);
      }
    }
    box(w + 0.08, 0.09, d + 0.08, whiteTrim, 0, h + 0.045, 0, g);
    g.position.set(x, 0.02, z);
    if (ry) g.rotation.y = ry;
    parent.add(g);
    return g;
  }

  function makeBridge(parent, w, h, d, x, z, ry) {
    var g = new THREE.Group();
    box(w, 0.08, d, walkwayMat, 0, h, 0, g);
    box(w, h * 0.65, d, windowDark, 0, h * 0.6, 0, g);
    [-w / 2 + 0.08, w / 2 - 0.08].forEach(function (cx) {
      box(0.08, h, 0.08, whiteTrim, cx, h / 2, 0, g);
    });
    g.position.set(x, 0.02, z);
    if (ry) g.rotation.y = ry;
    parent.add(g);
    return g;
  }

  // ---------- 天空與雲朵 ----------
  var sky = new THREE.Mesh(
    new THREE.SphereGeometry(320, 32, 16),
    new THREE.ShaderMaterial({
      side: THREE.BackSide, depthWrite: false, fog: false,
      uniforms: { top: { value: new THREE.Color(0x3f9be6) }, low: { value: new THREE.Color(SKY_LOW) } },
      vertexShader: "varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",
      fragmentShader: "uniform vec3 top; uniform vec3 low; varying vec3 vP; void main(){ float h = clamp(normalize(vP).y, 0.0, 1.0); gl_FragColor = vec4(mix(low, top, pow(h, 0.55)), 1.0); }"
    })
  );
  scene.add(sky);

  var clouds = [];
  var cloudMat = new THREE.MeshStandardMaterial({ color: 0xffffff, flatShading: true, roughness: 1 });
  (function () {
    for (var i = 0; i < 14; i++) {
      var g = new THREE.Group();
      var n = 4 + (i % 3);
      for (var k = 0; k < n; k++) {
        var s = new THREE.Mesh(new THREE.SphereGeometry(1.0 + (k % 2) * 0.5, 8, 6), cloudMat);
        s.position.set(k * 1.2 - n * 0.6, (k % 2) * 0.3, (i % 2 - 0.5) * 0.8);
        s.scale.y = 0.6;
        g.add(s);
      }
      var ang = (i / 14) * Math.PI * 2, dist = 32 + (i % 5) * 12;
      g.position.set(Math.cos(ang) * dist, 14 + (i % 4) * 2.5, Math.sin(ang) * dist - 10);
      g.userData.speed = 0.2 + (i % 3) * 0.1;
      scene.add(g);
      clouds.push(g);
    }
  })();

  // ---------- 校園多邊形邊界 ----------
  var poly = [
    [-7.35, 8.67], [6.85, 8.67], [7.55, 6.42], [7.8, -20.2],
    [3.6, -18.2], [0.6, -15.2], [-2.6, -12.2], [-6.2, -7.5],
    [-8.5, -2.5], [-8.1, 2.7]
  ];

  function inside(x, z) {
    var c = false;
    for (var i = 0, j = poly.length - 1; i < poly.length; j = i++) {
      var xi = poly[i][0], zi = poly[i][1], xj = poly[j][0], zj = poly[j][1];
      if ((zi > z) !== (zj > z) && x < ((xj - xi) * (z - zi)) / (zj - zi) + xi) c = !c;
    }
    return c;
  }

  var ground = new THREE.Mesh(new THREE.CircleGeometry(260, 64), new THREE.MeshStandardMaterial({ color: 0x86bd5c, roughness: 1 }));
  ground.rotation.x = -Math.PI / 2;
  scene.add(ground);
  polyFlat(poly, 0x9bcb6c, 0.02);

  // ---------- 街道與鋪面 ----------
  var ROAD = 0x4b5159;
  var roads = [
    [-60, 10.4, 60, 10.4, 2.2], [8.8, 10.4, 8.8, -30.0, 1.9],
    [-8.3, 10.4, -9.6, 2.7, 1.9], [-9.6, 2.7, -9.8, -2.5, 1.9],
    [-9.8, -2.5, -7.5, -7.8, 1.9], [-7.5, -7.8, -3.8, -12.6, 1.9],
    [-3.8, -12.6, -0.5, -15.8, 1.9], [-0.5, -15.8, 2.8, -19.0, 1.9],
    [2.8, -19.0, 8.8, -21.4, 1.9]
  ];
  roads.forEach(function (r) { roadSeg(r[0], r[1], r[2], r[3], r[4], ROAD); });
  [[8.8, 10.4, 1.15], [-8.3, 10.4, 1.15], [-9.6, 2.7, 0.95], [-9.8, -2.5, 0.95], [8.8, -21.4, 1.0]].forEach(function (j) {
    disk(j[2], ROAD, j[0], 0.016, j[1], 20);
  });
  dashes(-60, 10.4, -9, 10.4, 0.04);
  dashes(9, 10.4, 60, 10.4, 0.04);
  dashes(8.8, 9.5, 8.8, -28.0, 0.04);

  var PAVE = 0xdccfb5;
  slab(1.1, 0.03, 17.4, PAVE, 0, 0.04, 0.6);
  slab(12.4, 0.03, 0.9, PAVE, 0.3, 0.04, 3.35);
  slab(12.4, 0.03, 0.6, PAVE, 0.3, 0.04, 0.05);
  slab(12.4, 0.03, 0.6, PAVE, 0.3, 0.04, -3.05);
  slab(11.0, 0.03, 0.85, PAVE, 1.8, 0.04, -5.5);
  slab(0.9, 0.03, 10.0, PAVE, 7.0, 0.04, -10.5);
  slab(2.2, 0.03, 2.6, 0x4b5159, 0, 0.05, 9.9);
  for (var zi = 0; zi < 7; zi++) slab(0.18, 0.012, 1.0, 0xf6f3ea, (zi - 3) * 0.3, 0.075, 11.6);
  slab(4.8, 0.03, 1.2, PAVE, 0, 0.045, 7.5);

  // 校內環道：校門口進來繞校園一圈，北側經過光電球場與黑森林之間（供汽車行駛）
  var RING = [[-6.8, 8.2], [6.3, 8.2], [6.95, 6.3], [7.06, -5.5], [-6.46, -5.5], [-7.9, -2.3], [-7.5, 2.7]];
  (function () {
    var RW = 0.6, n = RING.length, i, k, roadMat = std(0x4b5159, 0.95);
    for (i = 0; i < n; i++) {
      var a = RING[i], b = RING[(i + 1) % n], dx = b[0] - a[0], dz = b[1] - a[1], L = Math.hypot(dx, dz), ry = Math.atan2(dx, dz);
      box(RW, 0.02, L, roadMat, (a[0] + b[0]) / 2, 0.06, (a[1] + b[1]) / 2, scene, ry);
      var nd = Math.floor(L / 0.9);
      for (k = 0; k < nd; k++) {
        var t = (k + 0.5) / nd;
        slab(0.035, 0.004, 0.36, 0xf3f0e6, a[0] + dx * t, 0.074, a[1] + dz * t, ry);
      }
      disk(RW / 2, 0x4b5159, a[0], 0.072, a[1], 16);
    }
  })();

  // 停車位：兩個前庭停車場與西側直列停車場的中間空位，加上西側環道旁的 5 個斜停格
  var PARK_SLOTS = [
    { x: -5.0, z: 7.25 }, { x: 4.2, z: 7.25 }, { x: -5.6, z: -2.6 },
    { x: -6.4, z: 6.9 }, { x: -6.4, z: 6.58 }, { x: -6.4, z: 6.26 }, { x: -6.4, z: 5.94 }, { x: -6.4, z: 5.62 }
  ];
  slab(0.8, 0.02, 1.8, 0x5a5f67, -6.4, 0.05, 6.26);
  slab(0.4, 0.02, 0.5, 0x4b5159, -5.0, 0.06, 7.8);
  slab(0.4, 0.02, 0.5, 0x4b5159, 4.2, 0.06, 7.8);
  slab(1.8, 0.02, 0.45, 0x4b5159, -6.75, 0.06, -2.6);

  // ---------- 1. 全校通學步道與圍牆 ----------
  (function () {
    var perimeterGroup = new THREE.Group();
    var blueRailMat = std(0x5ca5d8, 0.45);
    var sidewalkMat = std(0xdedbd2, 0.95);
    var curbMat = std(0x8a9199, 0.9);
    var fenceBaseMat = std(0xc7c1b5, 0.95);

    var n = poly.length;
    for (var i = 0; i < n; i++) {
      var p1 = poly[i], p2 = poly[(i + 1) % n];
      var dx = p2[0] - p1[0], dz = p2[1] - p1[1], L = Math.hypot(dx, dz);
      var nx = -dz / L, nz = dx / L, rotY = Math.atan2(dx, dz);
      var isSouthFront = (Math.abs(p1[1] - 8.67) < 0.05 && Math.abs(p2[1] - 8.67) < 0.05);

      if (isSouthFront) {
        [{ xA: p1[0], xB: -3.5 }, { xA: 2.4, xB: p2[0] }].forEach(function(span) {
          var spanL = Math.abs(span.xB - span.xA), midX = (span.xA + span.xB) / 2;
          box(spanL, 0.04, 0.55, sidewalkMat, midX, 0.02, 8.67 + 0.5, perimeterGroup);
          box(spanL, 0.05, 0.08, curbMat, midX, 0.025, 8.67 + 0.8, perimeterGroup);
        });
      } else {
        var midX = (p1[0] + p2[0]) / 2, midZ = (p1[1] + p2[1]) / 2, walkW = 0.55;
        box(walkW, 0.04, L, sidewalkMat, midX + nx * (walkW / 2 + 0.12), 0.02, midZ + nz * (walkW / 2 + 0.12), perimeterGroup, rotY);
        box(0.08, 0.05, L, curbMat, midX + nx * (walkW + 0.14), 0.025, midZ + nz * (walkW + 0.14), perimeterGroup, rotY);
        box(0.16, 0.32, L, fenceBaseMat, midX, 0.16, midZ, perimeterGroup, rotY);

        var bayLen = 1.8, nBays = Math.max(1, Math.floor(L / bayLen));
        for (var b = 0; b <= nBays; b++) {
          var t = b / nBays, postX = p1[0] + dx * t, postZ = p1[1] + dz * t;
          box(0.24, 0.85, 0.24, brickRed, postX, 0.425, postZ, perimeterGroup);
          box(0.3, 0.06, 0.3, whiteTrim, postX, 0.88, postZ, perimeterGroup);

          if (b < nBays) {
            var spanMidX = p1[0] + dx * (b + 0.5) / nBays, spanMidZ = p1[1] + dz * (b + 0.5) / nBays;
            var bayRealL = L / nBays - 0.24;
            [0.45, 0.78].forEach(function(barY) {
              box(0.04, 0.04, bayRealL, blueRailMat, spanMidX, barY, spanMidZ, perimeterGroup, rotY);
            });
            var nPickets = Math.max(2, Math.floor(bayRealL / 0.25));
            for (var pk = 1; pk < nPickets; pk++) {
              var pkt = (b + pk / nPickets) / nBays;
              box(0.025, 0.38, 0.025, blueRailMat, p1[0] + dx * pkt, 0.61, p1[1] + dz * pkt, perimeterGroup);
            }
          }
        }
      }
    }
    scene.add(perimeterGroup);
  })();

  // ---------- 2. 主樓：行政大樓與川堂 ----------
  (function () {
    var mainBuilding = new THREE.Group();
    var rotunda = new THREE.Group();
    var archR = 1.8, openingH = 1.45, openingW = 2.4, openHalfAng = 0.72;

    cyl(archR, archR, openingH, 16, brickRed, 0, openingH / 2, 0, rotunda, 0, 0, 0, openHalfAng, Math.PI - openHalfAng * 2);
    cyl(archR, archR, openingH, 16, brickRed, 0, openingH / 2, 0, rotunda, 0, 0, 0, Math.PI + openHalfAng, Math.PI - openHalfAng * 2);
    box(openingW, 0.04, archR * 2.2, whiteTrim, 0, openingH - 0.02, 0, rotunda);

    [-0.85, 0.85].forEach(function (cx) {
      cyl(0.12, 0.14, openingH, 16, grayConcrete, cx, openingH / 2, 1.3, rotunda);
      [0.08, 0.22, 0.32].forEach(function(dy) {
        cyl(0.14, 0.14, 0.04, 16, whiteTrim, cx, openingH - dy, 1.3, rotunda);
      });
      cyl(0.16, 0.16, 0.08, 16, whiteTrim, cx, 0.04, 1.3, rotunda);
    });

    var upperBaseY = openingH;
    cyl(archR * 1.02, archR * 1.02, 0.06, 32, grayConcrete, 0, upperBaseY + 0.03, 0, rotunda);

    var f2Height = 0.7;
    cyl(archR, archR, f2Height, 32, brickRed, 0, upperBaseY + 0.06 + f2Height / 2, 0, rotunda);
    for (var wi = -1.5; wi <= 1.5; wi += 1) {
      var wAng = wi * 0.18;
      box(0.12, 0.45, 0.1, windowDark, Math.sin(wAng) * (archR + 0.02), upperBaseY + 0.06 + f2Height / 2, Math.cos(wAng) * (archR + 0.02), rotunda, wAng);
    }
    [-0.72, 0.72].forEach(function (side) {
      for (var r = 0; r < 2; r++) {
        for (var c = 0; c < 3; c++) {
          var ang = side + (c - 1) * 0.08;
          box(0.065, 0.065, 0.08, windowDark, Math.sin(ang) * (archR + 0.02), upperBaseY + 0.06 + f2Height / 2 - 0.15 + r * 0.3, Math.cos(ang) * (archR + 0.02), rotunda, ang);
        }
      }
    });

    var midBand2Y = upperBaseY + 0.06 + f2Height + 0.03;
    cyl(archR * 1.02, archR * 1.02, 0.06, 32, grayConcrete, 0, midBand2Y, 0, rotunda);

    var upperH = 1.1, upperBodyY = midBand2Y + 0.03 + upperH / 2;
    cyl(archR, archR, upperH, 32, brickRed, 0, upperBodyY, 0, rotunda);
    for (var wj = -2; wj <= 2; wj++) {
      var uAng = wj * 0.18;
      box(0.12, 0.8, 0.1, windowDark, Math.sin(uAng) * (archR + 0.02), upperBodyY, Math.cos(uAng) * (archR + 0.02), rotunda, uAng);
    }

    var ringTopH = 0.45, ringTopY = upperBodyY + upperH / 2 + ringTopH / 2;
    cyl(archR * 0.94, archR * 0.94, ringTopH, 36, brickRed, 0, ringTopY, 0, rotunda);

    var drumTopY = upperBodyY + upperH / 2 + ringTopH;
    cyl(archR * 1.06, archR * 1.06, 0.12, 36, whiteTrim, 0, drumTopY + 0.06, 0, rotunda);
    cyl(archR * 0.94, archR * 0.94, 0.22, 36, windowDark, 0, drumTopY + 0.12 + 0.11, 0, rotunda);
    cyl(archR * 1.02, archR * 1.02, 0.1, 36, whiteTrim, 0, drumTopY + 0.23 + 0.05, 0, rotunda);
    cyl(archR * 0.45, archR * 0.98, 0.24, 36, domeLight, 0, drumTopY + 0.28 + 0.12, 0, rotunda);
    cyl(0.12, archR * 0.46, 0.08, 36, domeLight, 0, drumTopY + 0.4 + 0.04, 0, rotunda);
    mainBuilding.add(rotunda);

    function buildWingSection(wLen, startX, dir) {
      var wg = new THREE.Group(), wH = 3.3, wD = 1.9, cx = startX + dir * (wLen / 2);
      box(wLen, wH, wD, brickRed, cx, wH / 2, -0.15, wg);
      for (var f = 1; f <= 5; f++) {
        box(wLen + 0.05, 0.1, 0.18, whiteTrim, cx, f * 0.62 - 0.05, 0.82, wg);
        var nWin = Math.max(2, Math.floor(wLen / 1.15));
        for (var bi = 0; bi < nWin; bi++) {
          box(wLen / nWin * 0.68, 0.32, 0.08, windowDark, startX + dir * (0.5 + bi * (wLen / nWin)), f * 0.62 + 0.18, 0.78, wg);
        }
      }
      return wg;
    }

    function buildStairTower(xPos) {
      var tw = new THREE.Group(), towerW = 1.15, towerH = 3.65, towerD = 2.1;
      box(towerW, towerH, towerD, brickRed, xPos, towerH / 2, -0.1, tw);
      box(towerW + 0.15, 0.1, towerD + 0.15, whiteTrim, xPos, towerH + 0.05, -0.1, tw);
      return tw;
    }

    mainBuilding.add(buildWingSection(4.8, archR - 0.2, 1));
    mainBuilding.add(buildStairTower(archR + 4.8 + 0.35));
    mainBuilding.add(buildWingSection(4.8, -(archR - 0.2), -1));
    var westJunctionX = -(archR - 0.2 + 4.8);
    mainBuilding.add(buildWingSection(3.4, westJunctionX, -1));
    mainBuilding.add(buildStairTower(westJunctionX - 3.4 - 0.35));

    // 東側延長：行政大樓往東拉到接近東側圍牆，盡頭再加一座樓梯塔
    var eastJunctionX = archR + 4.8 + 0.35 + 0.575;
    mainBuilding.add(buildWingSection(3.2, eastJunctionX, 1));
    mainBuilding.add(buildStairTower(eastJunctionX + 3.2 + 0.35));

    cyl(archR * 1.5, archR * 1.8, 0.12, 24, std(0xd8d3c5), 0, 0.06, 1.8, mainBuilding, 0, Math.PI / 2, 0, 0, Math.PI);
    mainBuilding.scale.setScalar(0.55);
    mainBuilding.position.set(0, 0.02, 5.3);
    scene.add(mainBuilding);
  })();

  // ---------- 3. 公共藝術廣場 ----------
  (function () {
    var plazaGroup = new THREE.Group();
    box(4.2, 0.035, 4.0, std(0xded7c6), 0, 0.045, 1.2, plazaGroup);
    box(2.2, 0.04, 3.2, std(0xcdbeaa), 0, 0.048, 1.2, plazaGroup);
    for (var bi = -1; bi <= 1; bi++) box(1.6, 0.042, 0.35, std(0xb3a28c), 0, 0.05, 1.2 + bi * 0.95, plazaGroup);

    function makePergola(dir) {
      var p = new THREE.Group(), px = dir * 1.75;
      box(0.48, 0.15, 3.2, std(0xbfb8ab), px, 0.1, 1.2, p);
      for (var ci = 0; ci < 4; ci++) {
        var cz = -0.15 + ci * 0.9;
        [-0.16, 0.16].forEach(function (offX) { box(0.06, 0.85, 0.06, whiteTrim, px + offX, 0.45, cz, p); });
      }
      [-0.16, 0.16].forEach(function (offX) { box(0.08, 0.08, 3.4, whiteTrim, px + offX, 0.88, 1.2, p); });
      for (var gi = 0; gi < 14; gi++) box(0.62, 0.04, 0.08, std(0x7a4b2a), px, 0.94, -0.4 + gi * 0.24, p);
      return p;
    }
    plazaGroup.add(makePergola(-1));
    plazaGroup.add(makePergola(1));

    var artGroup = new THREE.Group();
    cyl(0.35, 0.4, 0.1, 16, std(0xd2cbc0), 0, 0.05, 0, artGroup);
    var arch1 = new THREE.Mesh(new THREE.TorusGeometry(0.35, 0.045, 8, 24, Math.PI), std(0xc73b28));
    arch1.rotation.set(0, Math.PI / 6, Math.PI / 4);
    arch1.position.set(0, 0.35, 0);
    artGroup.add(arch1);
    var arch2 = new THREE.Mesh(new THREE.TorusGeometry(0.28, 0.04, 8, 24, Math.PI), whiteTrim);
    arch2.rotation.set(0, -Math.PI / 4, -Math.PI / 5);
    arch2.position.set(0.08, 0.32, 0);
    artGroup.add(arch2);
    artGroup.position.set(-1.3, 0.02, -0.4);
    plazaGroup.add(artGroup);
    scene.add(plazaGroup);
  })();

  // ---------- 4. 林蔭步道與花台 ----------
  (function () {
    var walkwayGroup = new THREE.Group();
    box(1.6, 0.025, 2.7, std(0xc8beac, 0.9), 0, 0.026, 3.1, walkwayGroup);

    [-0.98, 0.98].forEach(function(hx) {
      box(0.38, 0.34, 2.6, std(0x276326, 0.95), hx, 0.17, 3.1, walkwayGroup);
      for (var fi = 0; fi < 8; fi++) {
        var fMesh = new THREE.Mesh(new THREE.SphereGeometry(0.03, 6, 6), std(0xde622b, 0.7));
        fMesh.position.set(hx + (hx > 0 ? -0.16 : 0.16), 0.2 + (fi % 3) * 0.06, 2.0 + fi * 0.32);
        walkwayGroup.add(fMesh);
      }
      [2.1, 3.1, 4.1].forEach(function(tz) {
        var tx = hx > 0 ? hx + 0.28 : hx - 0.28;
        cyl(0.032, 0.048, 1.05, 8, std(0x4a3423, 0.95), tx, 0.525, tz, walkwayGroup, 0, 0, hx > 0 ? 0.06 : -0.06);
        cyl(0.018, 0.026, 0.45, 6, std(0x4a3423, 0.95), tx + (hx > 0 ? -0.15 : 0.15), 0.98, tz, walkwayGroup, 0, 0, hx > 0 ? 0.6 : -0.6);
        [{ y: 1.05, r: 0.45, inOff: 0.18 }, { y: 1.28, r: 0.58, inOff: 0.24 }, { y: 1.5, r: 0.42, inOff: 0.14 }].forEach(function(l) {
          var cl = cyl(l.r * 0.85, l.r, 0.14, 12, std(0x3e9432, 0.88), tx + (hx > 0 ? -l.inOff : l.inOff), l.y, tz, walkwayGroup);
          cl.scale.set(1.15, 0.75, 1.1);
        });
      });
    });
    scene.add(walkwayGroup);
  })();

  // ---------- 5. 校門口大圓樓前樹列 ----------
  (function () {
    var entranceTreesGroup = new THREE.Group();
    var eGreens = leafMats([0x6aa56c, 0x7fb577, 0x5c9a66]);
    [-1.9, 1.9].forEach(function(ex, colIdx) {
      [6.3, 6.9, 7.5].forEach(function(ez, rowIdx) {
        buildTree(entranceTreesGroup, ex, ez, 0.82, eGreens, colIdx + rowIdx);
        var pit = new THREE.Mesh(new THREE.RingGeometry(0.18, 0.32, 16), std(0xb3ab9d));
        pit.rotation.x = -Math.PI / 2;
        pit.position.set(ex, 0.025, ez);
        entranceTreesGroup.add(pit);
      });
    });
    scene.add(entranceTreesGroup);
  })();

  // ---------- 6. 花園六角涼亭 ----------
  (function () {
    var pavGroup = new THREE.Group(), pX = 2.3, pZ = -1.4;
    var timberDark = std(0x422a18, 0.7), tileRoofMat = std(0x35443c, 0.85), stonePodium = std(0xd8d3c5, 0.95), copperMat = std(0x764b2d, 0.4);
    var baseR = 0.95, baseH = 0.16;
    cyl(baseR, baseR * 1.05, baseH, 6, stonePodium, 0, baseH / 2, 0, pavGroup);

    for (var s = 0; s < 2; s++) box(0.65 - s * 0.1, 0.08, 0.22, stonePodium, -baseR * 0.85 - s * 0.16, 0.04 + s * 0.08, 0, pavGroup);
    for (var bi = 1; bi < 6; bi++) {
      var ang = (bi / 6) * Math.PI * 2;
      box(0.65, 0.24, 0.11, stonePodium, Math.cos(ang) * (baseR * 0.82), baseH + 0.12, Math.sin(ang) * (baseR * 0.82), pavGroup, -ang + Math.PI / 2);
    }

    var postH = 1.15, postR = 0.78;
    for (var pi = 0; pi < 6; pi++) {
      var pAng = (pi / 6) * Math.PI * 2, nextAng = ((pi + 1) / 6) * Math.PI * 2, midAng = (pAng + nextAng) / 2;
      cyl(0.042, 0.042, postH, 12, timberDark, Math.cos(pAng) * postR, baseH + postH / 2, Math.sin(pAng) * postR, pavGroup);
      box(2 * postR * Math.sin(Math.PI / 6) + 0.04, 0.07, 0.05, timberDark, Math.cos(midAng) * postR, baseH + postH + 0.02, Math.sin(midAng) * postR, pavGroup, -midAng + Math.PI / 2);
    }

    var roofBaseY = baseH + postH + 0.05, roofEaveR = 1.25, roofH = 0.46;
    var roofCone = new THREE.Mesh(new THREE.ConeGeometry(roofEaveR, roofH, 6), tileRoofMat);
    roofCone.position.y = roofBaseY + roofH / 2;
    pavGroup.add(roofCone);

    var cupolaBaseY = roofBaseY + roofH;
    box(0.26, 0.13, 0.26, copperMat, 0, cupolaBaseY + 0.065, 0, pavGroup);
    box(0.2, 0.07, 0.28, windowDark, 0, cupolaBaseY + 0.065, 0, pavGroup);
    box(0.32, 0.03, 0.32, copperMat, 0, cupolaBaseY + 0.13 + 0.015, 0, pavGroup);

    cyl(0.22, 0.22, 0.35, 16, stonePodium, 0, baseH + 0.175, 0, pavGroup);
    for (var si = 0; si < 4; si++) {
      var sAng = (si / 4) * Math.PI * 2 + Math.PI / 4;
      cyl(0.08, 0.08, 0.22, 12, stonePodium, Math.cos(sAng) * 0.42, baseH + 0.11, Math.sin(sAng) * 0.42, pavGroup);
    }

    var gardenRock = new THREE.Mesh(new THREE.DodecahedronGeometry(0.26, 0), std(0x8a857b, 0.95));
    gardenRock.scale.set(0.7, 1.2, 0.8);
    gardenRock.position.set(0.95, 0.26, 0.55);
    pavGroup.add(gardenRock);
    pavGroup.position.set(pX, 0.02, pZ);
    scene.add(pavGroup);
  })();

  // ---------- 7. 西側教學大樓群與圖資鐘塔 ----------
  (function () {
    var westGroup = new THREE.Group(), bH = 1.85;
    makeBlock(westGroup, 1.45, bH, 2.1, -2.6, 3.4);
    makeBridge(westGroup, 0.7, 1.4, 0.8, -2.6, 4.65);
    makeBlock(westGroup, 1.45, bH, 3.1, -4.6, 1.8);
    makeBridge(westGroup, 0.85, 1.4, 0.7, -3.55, 2.7);
    makeBlock(westGroup, 1.45, bH, 2.2, -3.5, -0.9);
    makeBridge(westGroup, 0.7, 1.4, 0.95, -4.0, 0.1);

    var libGroup = new THREE.Group(), libRot = Math.PI * 0.18, lMainW = 2.6, lMainH = 1.6, lMainD = 1.8;
    box(lMainW, lMainH, lMainD, brickRed, 0, lMainH / 2, 0, libGroup);
    box(1.3, 0.06, 0.7, whiteTrim, -0.25, 0.84, lMainD / 2 + 0.35, libGroup);
    [-0.8, 0.3].forEach(function(px) { box(0.06, 0.82, 0.06, grayConcrete, px, 0.41, lMainD / 2 + 0.65, libGroup); });
    box(1.0, 0.7, 0.05, windowDark, -0.25, 0.35, lMainD / 2 + 0.03, libGroup);

    [0.9, 1.35].forEach(function(fy) {
      box(1.5, 0.28, 0.06, windowDark, -0.4, fy, lMainD / 2 + 0.03, libGroup);
      box(1.6, 0.05, 0.14, whiteTrim, -0.4, fy + 0.16, lMainD / 2 + 0.09, libGroup);
    });

    box(0.9, 0.18, 0.04, brickRed, -0.35, lMainH + 0.1, lMainD / 2 - 0.05, libGroup);
    for (var wi = 0; wi < 3; wi++) box(0.12, 0.1, 0.05, goldText, -0.65 + wi * 0.3, lMainH + 0.1, lMainD / 2 - 0.02, libGroup);
    box(lMainW + 0.08, 0.08, lMainD + 0.08, whiteTrim, 0, lMainH + 0.04, 0, libGroup);

    var towerGroup = new THREE.Group(), tW = 0.8, tD = 0.8;
    box(tW + 0.06, 0.32, tD + 0.06, grayConcrete, 0, 0.16, 0, towerGroup);
    var shaftH = 1.6;
    box(tW, shaftH, tD, brickRed, 0, 0.32 + shaftH / 2, 0, towerGroup);

    [
      { rx: 0, rz: tD / 2 + 0.015, ry: 0, w: tW * 0.68 },
      { rx: tW / 2 + 0.015, rz: 0, ry: Math.PI / 2, w: tD * 0.68 }
    ].forEach(function(sideInfo) {
      box(sideInfo.w, shaftH * 0.82, 0.025, windowDark, sideInfo.rx, 0.32 + shaftH / 2, sideInfo.rz, towerGroup, sideInfo.ry);
      for (var fi = 0; fi < 4; fi++) box(sideInfo.w + 0.02, 0.04, 0.035, whiteTrim, sideInfo.rx, 0.45 + fi * 0.42, sideInfo.rz, towerGroup, sideInfo.ry);
      for (var vi = -1; vi <= 1; vi++) {
        var offX = vi * (sideInfo.w * 0.32);
        box(0.03, shaftH * 0.82, 0.035, whiteTrim, sideInfo.ry === 0 ? offX : sideInfo.rx, 0.32 + shaftH / 2, sideInfo.ry === 0 ? sideInfo.rz : offX, towerGroup, sideInfo.ry);
      }
    });

    box(tW + 0.22, 0.12, tD + 0.22, whiteTrim, 0, 0.32 + shaftH + 0.06, 0, towerGroup);
    var upperShaftH = 0.48, upperShaftY = 0.32 + shaftH + 0.12 + upperShaftH / 2;
    box(tW - 0.04, upperShaftH, tD - 0.04, brickRed, 0, upperShaftY, 0, towerGroup);
    box(tW + 0.16, 0.12, tD + 0.16, grayConcrete, 0, upperShaftY + upperShaftH / 2 + 0.06, 0, towerGroup);

    var clockCubeH = 0.72, clockCubeY = upperShaftY + upperShaftH / 2 + 0.12 + clockCubeH / 2;
    box(tW, clockCubeH, tD, brickRed, 0, clockCubeY, 0, towerGroup);

    var clockFaceMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    var clockRimMat = std(0x222222, 0.3), clockHandMat = std(0x111111, 0.2);

    // 一面鐘（圓盤 + 外框 + 刻度 + 時針分針）：四個方向用同一個函式建立，ry 決定朝向
    function makeClockFace(fz, fx, ry) {
      var fg = new THREE.Group();
      fg.position.set(fx, clockCubeY, fz);
      fg.rotation.y = ry;
      towerGroup.add(fg);
      var disc = new THREE.Mesh(new THREE.CylinderGeometry(0.27, 0.27, 0.03, 40), clockFaceMat);
      disc.rotation.x = Math.PI / 2;
      disc.position.z = 0.02;
      fg.add(disc);
      var rim = new THREE.Mesh(new THREE.TorusGeometry(0.27, 0.026, 8, 40), clockRimMat);
      rim.position.z = 0.035;
      fg.add(rim);
      for (var m = 0; m < 12; m++) {
        var ang = m / 12 * Math.PI * 2, big = m % 3 === 0;
        var tk = new THREE.Mesh(new THREE.BoxGeometry(big ? 0.024 : 0.014, big ? 0.06 : 0.035, 0.006), clockHandMat);
        tk.position.set(Math.sin(ang) * 0.205, Math.cos(ang) * 0.205, 0.05);
        tk.rotation.z = -ang;
        fg.add(tk);
      }
      function hand(len, w, zOff) {
        var pv = new THREE.Group();
        pv.position.z = zOff;
        var hm = new THREE.Mesh(new THREE.BoxGeometry(w, len, 0.008), clockHandMat);
        hm.position.y = len / 2 - 0.02;
        pv.add(hm);
        fg.add(pv);
        return pv;
      }
      var hh = hand(0.13, 0.03, 0.056), mm = hand(0.2, 0.018, 0.064);
      var cap = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, 0.012, 12), clockHandMat);
      cap.rotation.x = Math.PI / 2;
      cap.position.z = 0.07;
      fg.add(cap);
      clockHands.push({ hour: hh, min: mm });
    }

    [-1, 1].forEach(function(side) {
      makeClockFace(side * (tD / 2), 0, side > 0 ? 0 : Math.PI);        // 南／北面
      makeClockFace(0, side * (tW / 2), side * Math.PI / 2);            // 東／西面
    });

    var belfryDeckY = clockCubeY + clockCubeH / 2 + 0.04;
    box(tW + 0.1, 0.08, tD + 0.1, whiteTrim, 0, belfryDeckY, 0, towerGroup);
    [-tW / 2 + 0.04, tW / 2 - 0.04].forEach(function(rx) {
      box(0.02, 0.18, tD * 0.85, std(0x9aa2ac, 0.4), rx, belfryDeckY + 0.13, 0, towerGroup);
    });

    var gantryH = 0.62, postSpacing = 0.22;
    [-postSpacing, postSpacing].forEach(function(px) {
      box(0.09, gantryH, 0.12, whiteTrim, px, belfryDeckY + 0.04 + gantryH / 2, 0, towerGroup);
    });
    var archBeamY = belfryDeckY + 0.04 + gantryH + 0.05;
    box(postSpacing * 2 + 0.12, 0.1, 0.14, whiteTrim, 0, archBeamY, 0, towerGroup);
    cyl(0.05, 0.13, 0.22, 16, std(0xb8883b, 0.25), 0, belfryDeckY + 0.04 + gantryH * 0.58, 0, towerGroup);
    cyl(0.012, 0.016, 0.5, 6, std(0x8a929c, 0.2), 0, archBeamY + 0.05 + 0.25, 0, towerGroup);
    box(0.12, 0.012, 0.012, std(0x8a929c, 0.2), 0, archBeamY + 0.05 + 0.4, 0, towerGroup);

    towerGroup.position.set(lMainW / 2 - 0.05, 0, lMainD / 2 - 0.25);
    libGroup.add(towerGroup);
    libGroup.position.set(-2.6, 0.02, -3.2);
    libGroup.rotation.y = libRot;
    westGroup.add(libGroup);
    makeBridge(westGroup, 0.75, 1.4, 1.1, -3.05, -2.1, libRot * 0.7);
    scene.add(westGroup);
  })();

  // ---------- 8. 鋪石子景觀步道（已移除圖書館無門死角，純粹連接東側至操場） ----------
  (function () {
    var gravelGroup = new THREE.Group();
    var gravelBedMat = std(0xd0c9bc, 0.96), pebbleBorderMat = std(0xaba292, 0.9), stoneTileMat = std(0xe0ded8, 0.9);
    var pathPts = [
      [-0.8, -4.8], [0.4, -5.8], [1.3, -7.2],
      [1.5, -9.0], [1.6, -11.0], [1.8, -12.4], [2.05, -13.6]
    ];
    for (var i = 0; i < pathPts.length - 1; i++) {
      var pA = pathPts[i], pB = pathPts[i + 1];
      var dx = pB[0] - pA[0], dz = pB[1] - pA[1], L = Math.hypot(dx, dz), rotY = Math.atan2(dx, dz);
      var midX = (pA[0] + pB[0]) / 2, midZ = (pA[1] + pB[1]) / 2;
      box(0.65, 0.026, L + 0.04, gravelBedMat, midX, 0.028, midZ, gravelGroup, rotY);
      [-0.34, 0.34].forEach(function(sideOff) {
        var nx = -dz / L, nz = dx / L;
        box(0.06, 0.032, L + 0.04, pebbleBorderMat, midX + nx * sideOff, 0.031, midZ + nz * sideOff, gravelGroup, rotY);
      });
      var numStones = Math.max(1, Math.floor(L / 0.5));
      for (var s = 0; s < numStones; s++) {
        var stT = (s + 0.5) / numStones;
        var stone = cyl(0.12, 0.14, 0.028, 8, stoneTileMat, pA[0] + dx * stT + ((s % 2) - 0.5) * 0.06, 0.03, pA[1] + dz * stT, gravelGroup, 0, rotY + (s % 3) * 0.4);
        stone.scale.set(1.2, 1, 0.85);
      }
    }
    scene.add(gravelGroup);
  })();

  // ---------- 8-2. 圖書館淺綠色草徑（公共藝術廣場直連圖書館正門） ----------
  (function () {
    var grassPathGroup = new THREE.Group();
    var grassBedMat = std(0xaee278, 0.95);
    var grassEdgeMat = std(0x94cd5e, 0.95);
    var stepStoneMat = std(0xd8e4c8, 0.92);

    var grassPts = [
      [-1.05, 0.25],   // 公共藝術廣場銜接處
      [-1.30, -0.42],  // 藝術雕塑西側
      [-1.60, -1.06],  // 前庭草坪走道中段
      [-1.93, -1.67],  // 圖書館正門階梯雨遮前
      [-2.16, -2.04]   // 圖書館大門門檻內
    ];

    // 圓角節點平滑過渡
    grassPts.forEach(function(p) {
      disk(0.32, 0xaee278, p[0], 0.028, p[1], 18);
    });

    for (var i = 0; i < grassPts.length - 1; i++) {
      var pA = grassPts[i], pB = grassPts[i + 1];
      var dx = pB[0] - pA[0], dz = pB[1] - pA[1], L = Math.hypot(dx, dz), rotY = Math.atan2(dx, dz);
      var midX = (pA[0] + pB[0]) / 2, midZ = (pA[1] + pB[1]) / 2;

      // 淺綠色草皮基底
      box(0.64, 0.015, L + 0.02, grassBedMat, midX, 0.027, midZ, grassPathGroup, rotY);

      // 柔和草緣側邊修飾
      [-0.31, 0.31].forEach(function(sideOff) {
        var nx = -dz / L, nz = dx / L;
        box(0.04, 0.018, L + 0.02, grassEdgeMat, midX + nx * sideOff, 0.028, midZ + nz * sideOff, grassPathGroup, rotY);
      });

      // 嵌於草徑中的自然踏石
      var nSteps = Math.max(1, Math.floor(L / 0.55));
      for (var s = 0; s < nSteps; s++) {
        var stT = (s + 0.5) / nSteps;
        var st = cyl(0.11, 0.13, 0.016, 8, stepStoneMat, pA[0] + dx * stT + ((s % 2) - 0.5) * 0.04, 0.03, pA[1] + dz * stT, grassPathGroup, 0, rotY + (s % 3) * 0.5);
        st.scale.set(1.15, 1, 0.85);
      }
    }
    scene.add(grassPathGroup);
  })();

  // ---------- 9. 戶外劇場 ----------
  (function () {
    var theaterGroup = new THREE.Group(), cx = -4.1, cz = 4.2;
    [{ r: 1.15, h: 0.14 }, { r: 0.92, h: 0.26 }, { r: 0.68, h: 0.38 }].forEach(function (t) {
      cyl(t.r, t.r, t.h, 24, std(0xd4cdc0), 0, t.h / 2, 0, theaterGroup, 0, Math.PI * 0.68, 0, 0, Math.PI);
    });
    cyl(0.42, 0.42, 0.08, 20, std(0xb38662), 0.1, 0.04, -0.1, theaterGroup);
    box(0.12, 0.2, 1.6, std(0xbfb8ab), -0.9, 0.1, 0.3, theaterGroup);
    theaterGroup.position.set(cx, 0.02, cz);
    scene.add(theaterGroup);
  })();

  // ---------- 10. 東側活動中心與光電風雨球場 ----------
  (function () {
    var eastGroup = new THREE.Group(), cx = 4.35, cz = 2.1;
    var gymW = 3.5, gymD = 4.0, gymH = 1.35;
    var whiteMetal = std(0xebedf2, 0.65), skylightGlass = std(0x78b2db, 0.25);

    box(gymW + 0.08, 0.14, gymD + 0.08, grayConcrete, cx, 0.07, cz, eastGroup);
    box(gymW, gymH, gymD, whiteMetal, cx, 0.14 + gymH / 2, cz, eastGroup);

    for (var bi = 0; bi < 5; bi++) {
      var bz = cz - gymD / 2 + bi * (gymD / 4);
      [-gymW / 2 - 0.02, gymW / 2 + 0.02].forEach(function(bx) {
        box(0.06, gymH, 0.08, whiteTrim, cx + bx, 0.14 + gymH / 2, bz, eastGroup);
      });
    }
    box(1.2, 0.95, 0.05, std(0x8a929c, 0.5), cx, 0.14 + 0.48, cz + gymD / 2 + 0.02, eastGroup);

    var roofPitchH = 0.38, halfW = gymW / 2 + 0.16, slopeLen = Math.hypot(halfW, roofPitchH), slopeAng = Math.atan2(roofPitchH, halfW);
    [-1, 1].forEach(function(side) {
      box(slopeLen, 0.06, gymD + 0.2, whiteMetal, cx + side * (halfW / 2), 0.14 + gymH + roofPitchH / 2, cz, eastGroup, 0, 0, side * slopeAng);
    });

    for (var ki = -1; ki <= 1; ki++) {
      var kz = cz + ki * 1.1;
      box(0.68, 0.04, 0.72, whiteTrim, cx, 0.14 + gymH + roofPitchH + 0.1, kz, eastGroup);
      [-0.3, 0.3].forEach(function(mx) {
        box(0.03, 0.14, 0.7, skylightGlass, cx + mx, 0.14 + gymH + roofPitchH + 0.04, kz, eastGroup);
      });
    }

    function makeSolarRoof(w, d, h, px, pz, cols, rows) {
      var roofGroup = new THREE.Group();
      box(w, 0.07, d, std(0x1a2634, 0.4), 0, h, 0, roofGroup, 0, -Math.PI * 0.015);
      var gridMat = new THREE.MeshBasicMaterial({ color: 0x4a6278 });
      for (var c = 1; c < cols; c++) box(0.02, 0.08, d - 0.05, gridMat, -w / 2 + c * (w / cols), h + 0.005, 0, roofGroup, 0, -Math.PI * 0.015);
      for (var r = 1; r < rows; r++) box(w - 0.05, 0.08, 0.02, gridMat, 0, h + 0.005, -d / 2 + r * (d / rows), roofGroup, 0, -Math.PI * 0.015);

      var nColsX = Math.max(2, Math.floor(w / 1.6) + 1), nColsZ = Math.max(2, Math.floor(d / 1.6) + 1);
      for (var i = 0; i < nColsX; i++) {
        for (var j = 0; j < nColsZ; j++) {
          if (i > 0 && i < nColsX - 1 && j > 0 && j < nColsZ - 1) continue;
          var colX = -w / 2 + 0.18 + i * ((w - 0.36) / (nColsX - 1)), colZ = -d / 2 + 0.18 + j * ((d - 0.36) / (nColsZ - 1));
          box(0.1, h, 0.1, std(0x7c858e, 0.7), colX, h / 2, colZ, roofGroup);
          box(0.18, 0.32, 0.18, std(0xe08b26, 0.8), colX, 0.16, colZ, roofGroup);
        }
      }
      roofGroup.position.set(px, 0, pz);
      return roofGroup;
    }

    // ----- 網球場：白線、球網、綠色菱形鐵絲網圍籬（入口在朝公共藝術廣場的西南角）-----
    var tCx = cx + 0.65, tCz = -1.35, tW = 2.9, tD = 1.5, courtGreen = std(0x4d8c5f, 0.9), courtRed = std(0xba5245, 0.9);
    var pw = tW - 0.2, ph = tD - 0.2, lineMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    box(tW, 0.02, tD, courtGreen, tCx, 0.03, tCz, eastGroup);
    box(pw, 0.01, ph, std(0x5aa56e, 0.9), tCx, 0.04, tCz, eastGroup);
    function cLine(w, d, lx, lz) { box(w, 0.004, d, lineMat, tCx + lx, 0.047, tCz + lz, eastGroup); }
    cLine(pw, 0.016, 0, -ph / 2); cLine(pw, 0.016, 0, ph / 2);
    cLine(0.016, ph, -pw / 2, 0); cLine(0.016, ph, pw / 2, 0);
    cLine(pw, 0.016, 0, -ph / 2 + 0.17); cLine(pw, 0.016, 0, ph / 2 - 0.17);
    var svc = pw / 2 * 0.54;
    cLine(0.016, ph - 0.34, -svc, 0); cLine(0.016, ph - 0.34, svc, 0);
    cLine(svc * 2, 0.016, 0, 0);

    // 球網
    var postMat = std(0x2f8f5a, 0.6);
    [-1, 1].forEach(function(ns) { cyl(0.012, 0.012, 0.38, 8, postMat, tCx, 0.21, tCz + ns * (ph / 2 + 0.04), eastGroup); });
    var netCv = document.createElement("canvas");
    netCv.width = netCv.height = 16;
    var nctx = netCv.getContext("2d");
    if (nctx) { nctx.strokeStyle = "rgba(235,235,235,0.95)"; nctx.lineWidth = 1.5; nctx.strokeRect(0, 0, 16, 16); }
    var netTex = new THREE.CanvasTexture(netCv);
    netTex.wrapS = netTex.wrapT = THREE.RepeatWrapping;
    netTex.repeat.set((ph + 0.08) / 0.03, 0.3 / 0.03);
    var netMesh = new THREE.Mesh(new THREE.PlaneGeometry(ph + 0.08, 0.3), new THREE.MeshBasicMaterial({ map: netTex, transparent: true, alphaTest: 0.3, side: THREE.DoubleSide }));
    netMesh.rotation.y = Math.PI / 2;
    netMesh.position.set(tCx, 0.2, tCz);
    eastGroup.add(netMesh);
    box(0.014, 0.022, ph + 0.08, lineMat, tCx, 0.355, tCz, eastGroup);

    // 綠色菱形鐵絲網圍籬
    function chainTex(rx, ry) {
      var cv = document.createElement("canvas");
      cv.width = cv.height = 32;
      var c2 = cv.getContext("2d");
      if (c2) {
        c2.strokeStyle = "#2f9a55"; c2.lineWidth = 3;
        c2.beginPath(); c2.moveTo(0, 16); c2.lineTo(16, 0); c2.lineTo(32, 16); c2.lineTo(16, 32); c2.closePath(); c2.stroke();
      }
      var t = new THREE.CanvasTexture(cv);
      t.wrapS = t.wrapT = THREE.RepeatWrapping;
      t.repeat.set(rx, ry);
      return t;
    }
    var fenceH = 0.7, fx0 = tCx - tW / 2 - 0.12, fx1 = tCx + tW / 2 + 0.12, fz0 = tCz - tD / 2 - 0.1, fz1 = tCz + tD / 2 + 0.1;
    var gateX = tCx - tW / 2 + 0.45, gateHalf = 0.17;
    function fencePane(x1, z1, x2, z2) {
      var dx = x2 - x1, dz = z2 - z1, len = Math.hypot(dx, dz);
      var pane = new THREE.Mesh(
        new THREE.PlaneGeometry(len, fenceH),
        new THREE.MeshStandardMaterial({ map: chainTex(len / 0.09, fenceH / 0.09), transparent: true, alphaTest: 0.35, side: THREE.DoubleSide, roughness: 1 })
      );
      pane.position.set((x1 + x2) / 2, fenceH / 2 + 0.04, (z1 + z2) / 2);
      pane.rotation.y = Math.atan2(-dz, dx);
      eastGroup.add(pane);
      box(len, 0.025, 0.025, postMat, (x1 + x2) / 2, fenceH + 0.045, (z1 + z2) / 2, eastGroup, Math.atan2(dx, dz) - Math.PI / 2);
      var np = Math.max(1, Math.round(len / 0.6));
      for (var pi = 0; pi <= np; pi++) box(0.03, fenceH + 0.04, 0.03, postMat, x1 + dx * pi / np, (fenceH + 0.04) / 2, z1 + dz * pi / np, eastGroup);
    }
    fencePane(fx0, fz0, fx1, fz0);                 // 北
    fencePane(fx0, fz1, gateX - gateHalf, fz1);    // 南（入口左）
    fencePane(gateX + gateHalf, fz1, fx1, fz1);    // 南（入口右）
    fencePane(fx0, fz0, fx0, fz1);                 // 西
    fencePane(fx1, fz0, fx1, fz1);                 // 東
    [-1, 1].forEach(function(gs) { box(0.04, fenceH + 0.1, 0.04, std(0xdfe4e8, 0.5), gateX + gs * gateHalf, (fenceH + 0.1) / 2, fz1, eastGroup); });
    box(gateHalf * 2 + 0.04, 0.03, 0.04, std(0xdfe4e8, 0.5), gateX, fenceH + 0.1, fz1, eastGroup);
    tennis = { cx: tCx, cz: tCz, w: tW, d: tD, pw: pw, ph: ph, gx: gateX, gz: fz1 };

    eastGroup.add(makeSolarRoof(tW + 0.4, tD + 0.4, 1.85, tCx, tCz, 8, 5));

    var bCx = cx, bCz = -3.7, bW = 4.4, bD = 2.8;
    box(bW, 0.02, bD, courtRed, bCx, 0.03, bCz, eastGroup);
    for (var r = 0; r < 2; r++) {
      for (var c = 0; c < 3; c++) {
        var subCx = bCx - bW / 3 + c * (bW / 3), subCz = bCz - bD / 4 + r * (bD / 2);
        box(bW / 3 - 0.25, 0.023, bD / 2 - 0.25, courtGreen, subCx, 0.031, subCz, eastGroup);
        [-1, 1].forEach(function(side) {
          var hz = subCz + side * (bD / 4 - 0.1);
          box(0.04, 0.95, 0.04, grayConcrete, subCx, 0.475, hz + side * 0.05, eastGroup);
          box(0.24, 0.15, 0.015, whiteTrim, subCx, 0.86, hz, eastGroup);
          var rim = new THREE.Mesh(new THREE.TorusGeometry(0.055, 0.008, 6, 16), std(0xe0541f, 0.5));
          rim.rotation.x = Math.PI / 2;
          rim.position.set(subCx, 0.78, hz - side * 0.08);
          eastGroup.add(rim);
          var net = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.032, 0.07, 8, 1, true), new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true }));
          net.position.set(subCx, 0.74, hz - side * 0.08);
          eastGroup.add(net);
          courtHoops.push({ x: subCx, z: hz, side: side, c: c, r: r });
        });
      }
    }
    eastGroup.add(makeSolarRoof(bW + 0.5, bD + 0.5, 2.2, bCx, bCz, 12, 10));

    // 光電球場夜間照明（18:00–22:00 由時間系統開啟）：燈管 + 點光源 + 地面光暈
    var lampMat = new THREE.MeshBasicMaterial({ color: 0x3a3f46 });
    function lampRow(lcx, lcz, w, d, y, nx, nz) {
      for (var li = 0; li < nx; li++) {
        for (var lj = 0; lj < nz; lj++) {
          box(0.5, 0.03, 0.09, lampMat, lcx - w / 2 + w * (li + 0.5) / nx, y, lcz - d / 2 + d * (lj + 0.5) / nz, eastGroup);
        }
      }
    }
    lampRow(bCx, bCz, bW - 0.4, bD - 0.3, 2.14, 4, 3);
    lampRow(tCx, tCz, tW - 0.4, tD - 0.3, 1.79, 3, 2);

    var glowCv = document.createElement("canvas");
    glowCv.width = glowCv.height = 64;
    var gctx = glowCv.getContext("2d");
    if (gctx) {
      var gr = gctx.createRadialGradient(32, 32, 2, 32, 32, 32);
      gr.addColorStop(0, "rgba(255,238,175,1)");
      gr.addColorStop(0.55, "rgba(255,214,120,0.45)");
      gr.addColorStop(1, "rgba(255,200,100,0)");
      gctx.fillStyle = gr;
      gctx.fillRect(0, 0, 64, 64);
    }
    var glowTex = new THREE.CanvasTexture(glowCv);
    var glows = [];
    [[bCx, bCz, bW + 3.6, bD + 3.6], [tCx, tCz, tW + 3.2, tD + 3.0]].forEach(function(gdef) {
      var gm = new THREE.Mesh(
        new THREE.PlaneGeometry(gdef[2], gdef[3]),
        new THREE.MeshBasicMaterial({ map: glowTex, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending })
      );
      gm.rotation.x = -Math.PI / 2;
      gm.position.set(gdef[0], 0.07, gdef[1]);
      eastGroup.add(gm);
      glows.push(gm);
    });
    var cPts = [[bCx - 1.1, 1.9, bCz], [bCx + 1.1, 1.9, bCz], [tCx, 1.5, tCz]].map(function(q) {
      var pl = new THREE.PointLight(0xffe2a0, 0, 7, 1.6);
      pl.position.set(q[0], q[1], q[2]);
      eastGroup.add(pl);
      return pl;
    });
    courtLights = { mat: lampMat, glows: glows, pts: cPts, level: 0 };
    scene.add(eastGroup);
  })();

  // ---------- 11. 黑森林自然林區 ----------
  (function () {
    var forestGroup = new THREE.Group();
    box(5.2, 0.025, 4.4, std(0x569443), 4.6, 0.025, -7.9, forestGroup);
    var fGreens = leafMats([0x4a8a5a, 0x55956a, 0x5f9f6c]);
    var treeSpots = [
      [3.0, -6.6, 1.25, 0], [4.4, -6.3, 1.35, 1], [6.0, -6.5, 1.2, 2],
      [2.7, -7.6, 1.15, 2], [4.8, -7.5, 1.45, 0], [6.2, -7.7, 1.3, 1],
      [3.4, -8.7, 1.3, 1], [4.9, -8.6, 1.4, 2], [6.1, -8.8, 1.15, 0],
      [3.2, -9.7, 1.2, 0], [5.3, -9.6, 1.35, 1]
    ];
    treeSpots.forEach(function(sp) {
      var x = sp[0], z = sp[1], scale = sp[2], colIdx = sp[3];
      buildTree(forestGroup, x, z, scale * 1.05, fGreens, colIdx);
    });
    forestGroup.position.set(-0.3, 0, -0.3);
    scene.add(forestGroup);
  })();

  // ---------- 12. 操場田徑場與司令台 ----------
  (function () {
    var trackGroup = new THREE.Group(), tCx = 4.85, tCz = -13.6, tW = 4.1, tH = 7.0;
    stadium(tW, tH, tCx, tCz, 0xc4553f, 0.03);
    stadium(tW - 1.0, tH - 1.0, tCx, tCz, 0x6dbb4a, 0.036);
    stadium(tW - 1.8, tH - 1.8, tCx, tCz, 0x7ecc59, 0.04);

    var sprintW = 0.52, sprintL = 2.2;
    box(sprintW, 0.032, sprintL, std(0xc4553f), tCx + tW / 2 - sprintW / 2, 0.032, tCz + tH / 2 + sprintL / 2 - 0.35, trackGroup);

    var ringMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    box(0.02, 0.033, tH - tW, ringMat, tCx - (tW - 1.0) / 2, 0.038, tCz, trackGroup);
    box(0.02, 0.033, tH - tW, ringMat, tCx + (tW - 1.0) / 2, 0.038, tCz, trackGroup);

    var sCx = tCx - tW / 2 - 0.72, sCz = tCz;
    box(0.82, 0.38, 1.9, whiteTrim, sCx, 0.19, sCz, trackGroup);
    box(1.05, 0.06, 2.2, std(0x4a6278), sCx + 0.05, 0.82, sCz, trackGroup);
    [-0.8, 0.8].forEach(function(oz) { box(0.06, 0.72, 0.06, grayConcrete, sCx + 0.32, 0.42, sCz + oz, trackGroup); });
    for (var st = 0; st < 3; st++) box(0.2, 0.06, 1.5 - st * 0.2, grayConcrete, sCx + 0.45 + st * 0.12, 0.03 + (2 - st) * 0.06, sCz, trackGroup);

    for (var fi = -1; fi <= 1; fi++) {
      cyl(0.012, 0.012, 1.2, 6, grayConcrete, sCx + 0.32, 0.7, sCz + fi * 0.45, trackGroup);
      box(0.02, 0.12, 0.18, std(fi === 0 ? 0xba3c3c : 0x3c74ba), sCx + 0.32, 1.18, sCz + fi * 0.45 + 0.09, trackGroup);
    }
    [-1.2, 1.2].forEach(function(oz) {
      buildTree(trackGroup, sCx - 0.55, sCz + oz, 0.95, leafMats([0x6aa56c, 0x7fb577]), oz > 0 ? 0 : 1);
    });
    scene.add(trackGroup);
  })();

  // ---------- 13. 大門校門門面 ----------
  (function () {
    var gateGroup = new THREE.Group();
    var silverMetal = std(0xdce0e4, 0.25, 0.85), graniteStone = std(0xd0ccc2, 0.95), darkLetter = std(0x283038, 0.3);
    var wallW = 2.6, wallH = 0.86, wallD = 0.22, wallX = -3.2, wallZ = 8.82;

    box(wallW, wallH, wallD, graniteStone, wallX, wallH / 2, wallZ, gateGroup);
    box(wallW + 0.08, 0.06, wallD + 0.08, whiteTrim, wallX, wallH + 0.03, wallZ, gateGroup);

    var chLetters = ["高", "雄", "市", "立", "楠", "梓", "高", "級", "中", "學"];
    var chStart = wallX - wallW / 2 + 0.32, chStep = (wallW - 0.9) / (chLetters.length - 1);
    for (var ci = 0; ci < chLetters.length; ci++) box(0.12, 0.13, 0.035, darkLetter, chStart + ci * chStep, wallH * 0.64, wallZ + wallD / 2 + 0.02, gateGroup);
    box(2.0, 0.05, 0.03, darkLetter, wallX - 0.1, wallH * 0.38, wallZ + wallD / 2 + 0.02, gateGroup);
    box(0.32, 0.44, 0.02, whiteTrim, wallX + wallW / 2 - 0.25, wallH * 0.52, wallZ + wallD / 2 + 0.02, gateGroup);

    var pW = 0.48, pH = 1.15, pD = 0.48, pX = wallX - wallW / 2 - pW / 2 + 0.05;
    box(pW + 0.08, 0.18, pD + 0.08, grayConcrete, pX, 0.09, wallZ, gateGroup);
    box(pW, pH - 0.28, pD, brickRed, pX, 0.18 + (pH - 0.28) / 2, wallZ, gateGroup);
    box(0.12, pH - 0.35, 0.04, grayConcrete, pX, 0.18 + (pH - 0.28) / 2, wallZ + pD / 2 + 0.015, gateGroup);
    box(pW + 0.1, 0.1, pD + 0.1, whiteTrim, pX, pH, wallZ, gateGroup);

    var gateStartX = wallX + wallW / 2, gateEndX = 1.9, gateW = gateEndX - gateStartX, gateH = 0.82, gateZ = 8.82, nPillars = 24;
    box(0.08, gateH + 0.08, 0.12, silverMetal, gateStartX + 0.04, gateH / 2 + 0.04, gateZ, gateGroup);

    // 可移動的柵欄：打開時往西側縮進牆內（6:30 開、18:00 關）
    var barsGroup = new THREE.Group();
    barsGroup.position.x = gateStartX;
    gateGroup.add(barsGroup);
    gateBars = { group: barsGroup, startX: gateStartX, amt: 0 };

    for (var i = 0; i <= nPillars; i++) {
      var gx = i * (gateW / nPillars);
      box(0.025, gateH, 0.035, silverMetal, gx, gateH / 2 + 0.03, gateZ, barsGroup);
      if (i < nPillars) {
        var nextGx = (i + 1) * (gateW / nPillars);
        var diagL = Math.hypot(nextGx - gx, gateH * 0.42), ang = Math.atan2(gateH * 0.42, nextGx - gx);
        box(diagL, 0.016, 0.016, silverMetal, (gx + nextGx) / 2, gateH * 0.5, gateZ, barsGroup, 0, 0, ang);
        box(diagL, 0.016, 0.016, silverMetal, (gx + nextGx) / 2, gateH * 0.5, gateZ, barsGroup, 0, 0, -ang);
      }
    }
    box(gateW + 0.1, 0.025, 0.08, grayConcrete, gateStartX + gateW / 2, 0.015, gateZ, gateGroup);

    var colW = 0.52, colH = 2.05, colD = 0.7, colX = 2.05, colZ = 8.78;
    box(colW, colH, colD, graniteStone, colX, colH / 2, colZ, gateGroup);
    box(colW + 0.08, 0.08, colD + 0.08, std(0x4a535e), colX, colH + 0.04, colZ, gateGroup);
    box(0.18, 1.25, 0.04, darkLetter, colX, colH * 0.62, colZ + colD / 2 + 0.02, gateGroup);
    box(0.8, 0.05, 0.8, whiteTrim, colX + 0.3, 1.6, colZ - 0.2, gateGroup);

    function frontBrickWall(x1, x2) {
      var len = Math.abs(x2 - x1), midX = (x1 + x2) / 2;
      box(len, 0.58, 0.18, brickRed, midX, 0.58 / 2, 8.67, gateGroup);
      box(len + 0.04, 0.06, 0.24, whiteTrim, midX, 0.61, 8.67, gateGroup);
      var nPosts = Math.max(1, Math.floor(len / 1.6));
      for (var pi = 0; pi <= nPosts; pi++) {
        box(0.24, 0.75, 0.24, brickRed, x1 + pi * (len / nPosts), 0.375, 8.67, gateGroup);
        box(0.3, 0.06, 0.3, whiteTrim, x1 + pi * (len / nPosts), 0.78, 8.67, gateGroup);
      }
    }
    frontBrickWall(-7.35, -4.5);
    frontBrickWall(2.4, 6.85);

    // 人車分流：校門西側是行人通道（綠色），東側是車道；中間用護欄與警示柱隔開
    box(1.2, 0.01, 1.7, std(0x8fbf7a, 0.95), -1.2, 0.06, 8.85, gateGroup);
    scene.add(gateGroup);
  })();

  // ---------- 14. 停車場與警衛室 ----------
  function parking(cx, cz, w, d, vertical) {
    slab(w, 0.02, d, 0x5a5f67, cx, 0.05, cz);
    var colors = [0xe8e8e8, 0x2f6fb5, 0xc2402f, 0x333a44, 0xe6b422];
    var n = vertical ? 3 : 5;
    for (var i = 0; i < n; i++) {
      if (i === 1) continue;
      var car = new THREE.Group();
      box(0.22, 0.09, 0.42, std(colors[i % colors.length]), 0, 0.09, 0, car);
      box(0.19, 0.07, 0.22, std(0xcfe6f2), 0, 0.16, -0.02, car);
      if (vertical) {
        car.position.set(cx, 0, cz - d / 2 + 0.4 + i * ((d - 0.8) / (n - 1)));
        car.rotation.y = Math.PI / 2;
      } else {
        car.position.set(cx - w / 2 + 0.4 + i * ((w - 0.8) / (n - 1)), 0, cz);
      }
      scene.add(car);
    }
  }
  parking(-4.6, 7.25, 2.4, 0.8, false);
  parking(4.6, 7.25, 2.4, 0.8, false);
  parking(-5.6, -2.6, 0.7, 2.6, true);

  (function () {
    var g = new THREE.Group();
    box(0.7, 0.5, 0.55, std(0xefe0c8), 0, 0.25, 0, g);
    box(0.82, 0.07, 0.67, std(0xb5523a), 0, 0.54, 0, g);
    g.position.set(3.0, 0.02, 6.7);
    scene.add(g);
  })();

  // ---------- 15. 自然散植樹木（防遮擋保護） ----------
  var trunkGeo = new THREE.CylinderGeometry(0.05, 0.085, 0.7, 6);
  var blobGeo = new THREE.IcosahedronGeometry(1, 1);
  var trunkM = new THREE.MeshStandardMaterial({ color: 0x8a6a4e, flatShading: true });
  var greens = [0x6aa56c, 0x7fb577, 0x5c9a66, 0x8fc083].map(function (c) {
    return new THREE.MeshStandardMaterial({ color: c, flatShading: true, roughness: 0.95 });
  });
  var BLOBS = [[0, 1.02, 0, 0.46], [0.27, 0.8, 0.1, 0.3], [-0.26, 0.86, -0.12, 0.31], [0.04, 1.36, -0.02, 0.27]];

  function plant(x, z, s) {
    var t = new THREE.Group();
    var tr = new THREE.Mesh(trunkGeo, trunkM);
    tr.position.y = 0.35;
    t.add(tr);
    var gm = greens[Math.floor(Math.abs(x * 7 + z * 13)) % greens.length];
    BLOBS.forEach(function (b, bi) {
      var cr = new THREE.Mesh(blobGeo, bi === 3 ? greens[(Math.floor(Math.abs(x * 7 + z * 13)) + 1) % greens.length] : gm);
      cr.position.set(b[0], b[1], b[2]);
      cr.scale.set(b[3], b[3] * 0.92, b[3]);
      cr.rotation.y = bi * 1.3;
      t.add(cr);
    });
    t.scale.setScalar(s);
    t.position.set(x, 0.02, z);
    scene.add(t);
    if (inside(x, z)) obstCircles.push([x, z, 0.2 * s]);
  }

  var avoidRects = [
    [-7.0, -0.6, -4.8, 6.2], [-2.5, 2.5, 4.8, 8.8], [-2.4, 2.4, -1.0, 4.8],
    [1.4, 7.0, 4.2, 6.2], [1.6, 3.2, -2.2, -0.6], [3.2, 7.4, -0.5, 3.8],
    [2.8, 7.8, -5.8, -0.8], [1.6, 7.5, -10.6, -5.6], [1.2, 7.8, -18.6, -10.8]
  ];
  function segDist(x, z, A, B) {
    var dx = B[0] - A[0], dz = B[1] - A[1], t = ((x - A[0]) * dx + (z - A[1]) * dz) / (dx * dx + dz * dz);
    t = Math.max(0, Math.min(1, t));
    return Math.hypot(x - (A[0] + dx * t), z - (A[1] + dz * t));
  }
  function isBlocked(x, z) {
    for (var ri = 0; ri < RING.length; ri++) if (segDist(x, z, RING[ri], RING[(ri + 1) % RING.length]) < 0.9) return true;
    if (Math.hypot(x - (-1.4), z - (-3.2)) < 2.0) return true;
    if (Math.hypot(x - 2.3, z - (-1.4)) < 1.6) return true;
    if (x > 0.0 && x < 2.5 && z < -4.0 && z > -14.0) return true;
    for (var i = 0; i < avoidRects.length; i++) {
      var r = avoidRects[i];
      if (x > r[0] && x < r[1] && z > r[2] && z < r[3]) return true;
    }
    return false;
  }

  for (var i = 0; i < 110; i++) {
    var ang = (i / 110) * Math.PI * 2, d = 18 + (i % 6) * 6;
    var px = Math.cos(ang) * d * 1.25, pz = Math.sin(ang) * d - 8;
    if (Math.abs(px) < 12.0 && pz > -21 && pz < 14) continue;
    plant(px, pz, 1.0 + (i % 3) * 0.3);
  }
  for (var k = 0; k < 85; k++) {
    var tx = -7.0 + ((k * 17) % 145) / 10, tz = -18.5 + ((k * 29) % 270) / 10;
    if (inside(tx, tz) && !isBlocked(tx, tz)) plant(tx, tz, 0.75 + (k % 3) * 0.2);
  }

  // ---------- 15-2. 校園小人（依楠梓校服與 8 位角色設計的 Q 版學生） ----------
  var students = [];
  var updateStudents = function () {};
  (function () {
    var characters = [
      { sex: "m", skin: 0xf6d3b3, hair: 0xe6c36b, hairStyle: "spiky", eye: 0x4a78c8, shoe: "loafer", pose: "thumbs" },
      { sex: "m", skin: 0xf6d3b3, hair: 0x1e2a4a, hairStyle: "side", eye: null, mouth: "open", shoe: "loafer", pose: "hips" },
      { sex: "m", skin: 0xf6d3b3, hair: 0x1b1e2a, hairStyle: "side", eye: 0x4a60b0, shoe: "sneaker", prop: "tablet" },
      { sex: "f", skin: 0xf6d3b3, hair: 0xeac777, hairStyle: "bun", eye: 0x6a6fb8, sock: 0x23262e, shoe: "loafer" },
      { sex: "f", skin: 0xf6d3b3, hair: 0x8a6a52, hairStyle: "wavy", eye: null, mouth: "open", sock: 0x23262e, shoe: "loafer", pose: "hips" },
      { sex: "f", skin: 0xf6d3b3, hair: 0x232a4f, hairStyle: "bob", eye: 0x4a4566, sock: 0xffffff, shoe: "loafer", prop: "bag" },
      { sex: "f", skin: 0xf6d3b3, hair: 0xe8cf86, hairStyle: "bob", eye: 0x8a6a4a, sock: 0xffffff, shoe: "loafer", pose: "wave" },
      { sex: "f", skin: 0xf6d3b3, hair: 0xe8a9b0, hairStyle: "longwavy", eye: null, sock: 0x23262e, shoe: "loafer", longSleeve: true, pose: "cheek" },
      { sex: "m", uniform: "pe", skin: 0xf6d3b3, hair: 0x3a2a20, hairStyle: "side", eye: 0x4a60b0, shorts: "stripe", pose: "thumbs" },
      { sex: "f", uniform: "pe", skin: 0xf8dcc4, hair: 0xe9ecf2, hairStyle: "bun", eye: 0x5a86c8, shorts: "stripe" },
      { sex: "f", uniform: "pe", skin: 0xf8dcc4, hair: 0xeccb78, hairStyle: "longstraight", eye: 0x4a60c0, shorts: "piping", pose: "thumbs" },
      { sex: "m", uniform: "pe", skin: 0xe4b48c, hair: 0x2e241d, hairStyle: "bowl", eye: 0x4a5aa0, shorts: "stripe", pose: "thumbs" },
      { sex: "f", uniform: "pe", skin: 0xf8dcc4, hair: 0xa9adb8, hairStyle: "wavymid", eye: 0x4a90e2, shorts: "stripe", pose: "back" },
      { sex: "m", uniform: "pe", skin: 0xe4b48c, hair: 0x1b1e2a, hairStyle: "bowl", eye: 0x4a5aa0, shorts: "stripe", pose: "cross" },
      { sex: "m", uniform: "pe", skin: 0xe4b48c, hair: 0x3d8fe0, hairStyle: "side", eye: null, mouth: "open", shorts: "stripe", pose: "hips" },
      { sex: "f", uniform: "pe", skin: 0xf8dcc4, hair: 0xe8a0b4, hairStyle: "wavymid", eye: 0x5a7ad0, mouth: "open", shorts: "stripe", pose: "look" },
      { sex: "f", uniform: "pe", skin: 0xf8dcc4, hair: 0xc9bda5, hairStyle: "longstraight", eye: 0x4a90e2, shorts: "stripe", pose: "cross" },
      { sex: "m", outfit: "principal", skin: 0xe9b88f, hair: 0x1b1b1f, hairStyle: "principal", eye: 0x23283a, shoe: "loafer", pose: "peace", prop: "paperbag", scale: 1.45 }
    ];
    var PRINCIPAL = 17;
    var altHair = [0x1b1e2a, 0x4a3020, 0x6b4a2b, 0x232a4f, 0xb06a3b];

    function G(geo, tx, ty, tz) { if (tx || ty || tz) geo.translate(tx || 0, ty || 0, tz || 0); return geo; }
    var headGeo = new THREE.SphereGeometry(0.115, 16, 12);
    var torsoGeo = new THREE.CylinderGeometry(0.075, 0.095, 0.17, 12);
    var hipGeo = new THREE.CylinderGeometry(0.097, 0.1, 0.07, 12);
    var skirtGeo = new THREE.CylinderGeometry(0.092, 0.145, 0.1, 14);
    var legPantsGeo = G(new THREE.CylinderGeometry(0.034, 0.038, 0.13, 8), 0, -0.065, 0);
    var legSkinGeo = G(new THREE.CylinderGeometry(0.025, 0.029, 0.13, 8), 0, -0.065, 0);
    var sockGeo = G(new THREE.CylinderGeometry(0.03, 0.032, 0.06, 8), 0, -0.1, 0);
    var sleeveGeo = G(new THREE.CylinderGeometry(0.03, 0.034, 0.065, 8), 0, -0.03, 0);
    var foreGeo = G(new THREE.CylinderGeometry(0.02, 0.022, 0.075, 8), 0, -0.1, 0);
    var handGeo = new THREE.SphereGeometry(0.028, 8, 8);
    var collarGeo = new THREE.CylinderGeometry(0.06, 0.068, 0.024, 12);
    var bowGeo = new THREE.BoxGeometry(0.08, 0.045, 0.02);
    var knotGeo = new THREE.BoxGeometry(0.022, 0.028, 0.026);
    var emblemRingGeo = new THREE.RingGeometry(0.012, 0.019, 16);
    var emblemDiscGeo = new THREE.CircleGeometry(0.012, 12);
    var shoeGeo = new THREE.BoxGeometry(0.058, 0.032, 0.085);
    var sneakerGeo = new THREE.BoxGeometry(0.06, 0.036, 0.095);
    var irisGeo = new THREE.SphereGeometry(0.02, 10, 8);
    var glintGeo = new THREE.SphereGeometry(0.0055, 6, 6);
    var arcGeo = new THREE.TorusGeometry(0.016, 0.0035, 6, 10, Math.PI);
    var openMouthGeo = new THREE.SphereGeometry(0.018, 8, 6);
    var blushGeo = new THREE.CircleGeometry(0.02, 10);
    var hairCapGeo = new THREE.SphereGeometry(0.124, 14, 8, 0, Math.PI * 2, 0, Math.PI * 0.45);
    var fringeGeo = new THREE.SphereGeometry(0.1, 10, 8);
    var backGeo = new THREE.SphereGeometry(0.125, 12, 10);
    var sideGeo = new THREE.SphereGeometry(0.07, 8, 8);
    var bunGeo = new THREE.SphereGeometry(0.05, 10, 8);
    var spikeGeo = new THREE.ConeGeometry(0.034, 0.09, 6);
    var shadowGeo = new THREE.CircleGeometry(0.13, 14);
    var shortsGeo = G(new THREE.CylinderGeometry(0.041, 0.045, 0.075, 8), 0, -0.0375, 0);
    var pipingGeo = G(new THREE.CylinderGeometry(0.0425, 0.0445, 0.008, 8), 0, -0.072, 0);
    var stripeGeo = new THREE.BoxGeometry(0.005, 0.07, 0.016);
    var peUpperGeo = new THREE.BoxGeometry(0.058, 0.026, 0.085);
    var peSoleGeo = new THREE.BoxGeometry(0.063, 0.012, 0.094);
    var peBandGeo = new THREE.BoxGeometry(0.0625, 0.008, 0.04);
    var fingerGeo = new THREE.BoxGeometry(0.012, 0.012, 0.055);

    var shadowMat = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.2, depthWrite: false });
    var shirtM = std(0xf8f8fb, 0.7);
    var pantsM = std(0x28336a, 0.9);
    var loaferM = std(0x6b4126, 0.5);
    var sneakerM = std(0xf4f4f4, 0.7);
    var eyeDark = std(0x23283a, 0.4);
    var mouthM = std(0x8a3a3a, 0.6);
    var openMouthM = std(0x7a2230, 0.6);
    var blushM = new THREE.MeshBasicMaterial({ color: 0xf2848a, transparent: true, opacity: 0.7 });
    var whiteBasic = new THREE.MeshBasicMaterial({ color: 0xffffff });
    var emblemBlue = new THREE.MeshBasicMaterial({ color: 0x2c5aa8, side: THREE.DoubleSide });
    var tabletM = std(0xf2f2f4, 0.5), screenM = std(0x1c2028, 0.3), bagM = std(0x2d56a3, 0.7);
    var peShirtM = std(0x3d8fdc, 0.8), shortsM = std(0x1f2a5e, 0.9), peShoeM = std(0x23306a, 0.7);
    var emblemNavy = new THREE.MeshBasicMaterial({ color: 0x16306a, side: THREE.DoubleSide });
    var poloM = std(0x1d1d22, 0.8), trouserM = std(0x55575c, 0.9), blackShoeM = std(0x1c1c20, 0.5);
    var kraftM = std(0xc9a36a, 0.9);

    function plaidTexture() {
      var c = document.createElement("canvas");
      c.width = 64; c.height = 64;
      var x = c.getContext("2d");
      x.fillStyle = "#dcc4a6";
      x.fillRect(0, 0, 64, 64);
      x.fillStyle = "rgba(96,76,62,0.55)";
      [6, 10, 38, 42].forEach(function (p) { x.fillRect(p, 0, 3, 64); x.fillRect(0, p, 64, 3); });
      x.fillStyle = "rgba(40,48,70,0.45)";
      [28].forEach(function (p) { x.fillRect(p, 0, 2, 64); x.fillRect(0, p, 64, 2); });
      x.fillStyle = "rgba(255,255,255,0.55)";
      [22, 52].forEach(function (p) { x.fillRect(p, 0, 1, 64); x.fillRect(0, p, 64, 1); });
      var t = new THREE.CanvasTexture(c);
      t.wrapS = t.wrapT = THREE.RepeatWrapping;
      t.repeat.set(3, 1);
      return t;
    }
    var plaidM = new THREE.MeshStandardMaterial({ map: plaidTexture(), flatShading: true, roughness: 0.9 });

    function addHair(head, c) {
      var hm = std(c.hair, 0.8), st = c.hairStyle;
      var cap = new THREE.Mesh(hairCapGeo, hm);
      cap.rotation.x = -0.2;
      cap.position.set(0, 0.004, -0.012);
      head.add(cap);

      if (st !== "spiky") {
        var fr = new THREE.Mesh(fringeGeo, hm);
        fr.scale.set(1.15, 0.45, 0.55);
        fr.position.set(st === "side" ? 0.015 : 0, 0.075, 0.078);
        fr.rotation.z = st === "side" ? 0.18 : 0;
        head.add(fr);
      }
      function back(sx, sy, sz, y) {
        var b = new THREE.Mesh(backGeo, hm);
        b.scale.set(sx, sy, sz);
        b.position.set(0, y, -0.05);
        head.add(b);
      }
      function sides(sx, sy, y, x) {
        [-1, 1].forEach(function (d) {
          var m = new THREE.Mesh(sideGeo, hm);
          m.scale.set(sx, sy, 0.9);
          m.position.set(d * x, y, 0.015);
          head.add(m);
        });
      }
      if (st === "spiky") {
        [[0, 0.125, 0.05, 0.5, 0], [0.06, 0.12, 0.02, 0.2, -0.5], [-0.06, 0.12, 0.02, 0.2, 0.5],
         [0, 0.13, -0.04, -0.4, 0], [0.085, 0.09, -0.02, 0, -0.9], [-0.085, 0.09, -0.02, 0, 0.9]].forEach(function (p) {
          var sp = new THREE.Mesh(spikeGeo, hm);
          sp.position.set(p[0], p[1], p[2]);
          sp.rotation.set(p[3], 0, p[4]);
          head.add(sp);
        });
      } else if (st === "bun") {
        var bun = new THREE.Mesh(bunGeo, hm);
        bun.position.set(0, 0.14, -0.03);
        head.add(bun);
        back(1, 0.85, 0.82, -0.03);
        sides(0.45, 1.9, -0.07, 0.118);
      } else if (st === "bob") {
        back(1.02, 0.95, 0.85, -0.03);
        sides(0.55, 1.2, -0.035, 0.112);
      } else if (st === "wavy") {
        back(1.05, 1.7, 0.85, -0.1);
        sides(0.55, 2.0, -0.09, 0.115);
      } else if (st === "longwavy") {
        back(1.1, 2.1, 0.9, -0.14);
        sides(0.6, 2.6, -0.12, 0.12);
      } else if (st === "longstraight") {
        back(1.08, 2.0, 0.85, -0.13);
        sides(0.5, 2.4, -0.11, 0.118);
      } else if (st === "wavymid") {
        back(1.06, 1.35, 0.85, -0.07);
        sides(0.58, 1.6, -0.07, 0.116);
      } else if (st === "principal") {
        var quiff = new THREE.Mesh(fringeGeo, hm);
        quiff.scale.set(0.95, 0.5, 0.6);
        quiff.position.set(0, 0.125, 0.05);
        quiff.rotation.x = -0.35;
        head.add(quiff);
      }
    }

    function addFace(head, c) {
      [-1, 1].forEach(function (s) {
        if (c.eye === null) {
          var arc = new THREE.Mesh(arcGeo, eyeDark);
          arc.position.set(s * 0.045, 0.018, 0.108);
          head.add(arc);
        } else {
          var base = new THREE.Mesh(irisGeo, eyeDark);
          base.scale.set(0.9, 1.2, 0.5);
          base.position.set(s * 0.045, 0.014, 0.1);
          head.add(base);
          var iris = new THREE.Mesh(irisGeo, std(c.eye, 0.4));
          iris.scale.set(0.72, 0.95, 0.5);
          iris.position.set(s * 0.045, 0.012, 0.105);
          head.add(iris);
          var glint = new THREE.Mesh(glintGeo, whiteBasic);
          glint.position.set(s * 0.045 + 0.006, 0.024, 0.113);
          head.add(glint);
        }
        var blush = new THREE.Mesh(blushGeo, blushM);
        blush.position.set(s * 0.07, -0.026, 0.09);
        blush.rotation.y = s * 0.6;
        head.add(blush);
      });
      if (c.mouth === "open") {
        var om = new THREE.Mesh(openMouthGeo, openMouthM);
        om.scale.set(1.25, 0.9, 0.4);
        om.position.set(0, -0.056, 0.103);
        head.add(om);
      } else {
        var sm = new THREE.Mesh(arcGeo, mouthM);
        sm.scale.set(0.8, 0.8, 0.8);
        sm.rotation.z = Math.PI;
        sm.position.set(0, -0.046, 0.106);
        head.add(sm);
      }
    }

    function makeStudent(c) {
      var g = new THREE.Group(), girl = c.sex === "f", pe = c.uniform === "pe", prin = c.outfit === "principal";
      var skinM = std(c.skin !== undefined ? c.skin : 0xf6d3b3, 0.8);
      var topM = pe ? peShirtM : prin ? poloM : shirtM;
      if (c.topColor !== undefined) topM = std(c.topColor, 0.8);
      var botM = c.bottomColor !== undefined ? std(c.bottomColor, 0.9) : null;

      var torso = new THREE.Mesh(torsoGeo, topM);
      torso.position.y = 0.215;
      if (prin) torso.scale.set(1.12, 1, 1.1);
      g.add(torso);
      var collar = new THREE.Mesh(collarGeo, topM);
      collar.position.y = 0.3;
      g.add(collar);

      if (girl && !pe) {
        var skirt = new THREE.Mesh(skirtGeo, c.skirtColor !== undefined ? std(c.skirtColor, 0.9) : plaidM);
        skirt.position.y = 0.165;
        g.add(skirt);
        if (!c.noEmblem) {
          var bow = new THREE.Mesh(bowGeo, plaidM);
          bow.position.set(0, 0.282, 0.082);
          g.add(bow);
          var knot = new THREE.Mesh(knotGeo, plaidM);
          knot.position.set(0, 0.282, 0.088);
          g.add(knot);
        }
      } else {
        var hip = new THREE.Mesh(hipGeo, botM || (pe ? shortsM : prin ? trouserM : pantsM));
        hip.position.y = 0.165;
        if (prin) hip.scale.set(1.1, 1, 1.08);
        g.add(hip);
      }

      if (!prin && !c.noEmblem) {
        var em = new THREE.Group();
        em.add(new THREE.Mesh(emblemRingGeo, pe ? emblemNavy : emblemBlue));
        em.add(new THREE.Mesh(emblemDiscGeo, whiteBasic));
        em.position.set(0.042, 0.255, 0.072);
        em.rotation.y = 0.55;
        g.add(em);
      }

      function limb(geo, mat, x, y) {
        var j = new THREE.Group();
        j.position.set(x, y, 0);
        j.add(new THREE.Mesh(geo, mat));
        g.add(j);
        return j;
      }
      var legGeo, legMat;
      if ((pe || girl) && !c.longLegs) { legGeo = legSkinGeo; legMat = skinM; }
      else { legGeo = legPantsGeo; legMat = botM || (prin ? trouserM : pantsM); }
      var legL = limb(legGeo, legMat, 0.042, 0.135), legR = limb(legGeo, legMat, -0.042, 0.135);
      [legL, legR].forEach(function (leg, li) {
        var side = li === 0 ? 1 : -1;
        if ((girl || pe) && !c.longLegs) leg.add(new THREE.Mesh(sockGeo, std(c.sock !== undefined ? c.sock : 0xffffff, 0.9)));
        if (pe) {
          if (!c.longLegs) leg.add(new THREE.Mesh(shortsGeo, botM || shortsM));
          if (c.shorts === "piping") {
            leg.add(new THREE.Mesh(pipingGeo, whiteBasic));
          } else if (c.shorts !== "none") {
            var stripe = new THREE.Mesh(stripeGeo, whiteBasic);
            stripe.position.set(side * 0.0435, -0.0375, 0);
            leg.add(stripe);
          }
          var shoeG = new THREE.Group();
          var upper = new THREE.Mesh(peUpperGeo, c.shoeColor !== undefined ? std(c.shoeColor, 0.7) : peShoeM);
          upper.position.y = 0.004;
          var sole = new THREE.Mesh(peSoleGeo, whiteBasic);
          sole.position.y = -0.014;
          var band = new THREE.Mesh(peBandGeo, whiteBasic);
          band.position.y = 0.008;
          shoeG.add(upper); shoeG.add(sole); shoeG.add(band);
          shoeG.position.set(0, -0.116, 0.016);
          leg.add(shoeG);
        } else {
          var sneaker = c.shoe === "sneaker";
          var shoe = new THREE.Mesh(sneaker ? sneakerGeo : shoeGeo, c.shoeColor !== undefined ? std(c.shoeColor, 0.7) : sneaker ? sneakerM : prin ? blackShoeM : loaferM);
          shoe.position.set(0, -0.12, 0.016);
          leg.add(shoe);
        }
      });

      function makeArm(x) {
        var j = new THREE.Group();
        j.position.set(x, 0.285, 0);
        j.add(new THREE.Mesh(sleeveGeo, topM));
        j.add(new THREE.Mesh(foreGeo, c.longSleeve ? topM : skinM));
        var hand = new THREE.Mesh(handGeo, skinM);
        hand.position.set(0, -0.145, 0);
        j.add(hand);
        g.add(j);
        return j;
      }
      var armL = makeArm(0.108), armR = makeArm(-0.108);
      if (c.pose === "thumbs") {
        var thumb = new THREE.Mesh(handGeo, skinM);
        thumb.scale.set(0.45, 0.8, 0.45);
        thumb.position.set(0, -0.137, 0.032);
        armR.add(thumb);
      } else if (c.pose === "peace") {
        [-1, 1].forEach(function (d) {
          var f = new THREE.Mesh(fingerGeo, skinM);
          f.position.set(d * 0.012, -0.15, 0.04);
          f.rotation.y = d * 0.22;
          armR.add(f);
        });
      }

      if (c.prop === "tablet") {
        var tab = new THREE.Group();
        var tbody = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.012, 0.1), tabletM);
        var scr = new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.014, 0.082), screenM);
        tab.add(tbody); tab.add(scr);
        tab.position.set(0, 0.19, 0.125);
        tab.rotation.x = -0.5;
        g.add(tab);
      } else if (c.prop === "bag") {
        var bg = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.1, 0.12), bagM);
        bg.position.set(0.138, 0.15, 0.0);
        g.add(bg);
        var strap = new THREE.Mesh(new THREE.BoxGeometry(0.014, 0.15, 0.014), bagM);
        strap.position.set(0.118, 0.26, 0.0);
        strap.rotation.z = -0.25;
        g.add(strap);
      } else if (c.prop === "paperbag") {
        var pb = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.12, 0.025), kraftM);
        pb.position.set(0.12, 0.205, 0.135);
        pb.rotation.z = -0.08;
        g.add(pb);
      }

      var head = new THREE.Group();
      head.scale.setScalar(1.08);
      head.position.y = 0.4;
      g.add(head);
      head.add(new THREE.Mesh(headGeo, skinM));
      addFace(head, c);
      addHair(head, c);

      var shadow = new THREE.Mesh(shadowGeo, shadowMat);
      shadow.rotation.x = -Math.PI / 2;
      shadow.position.y = 0.003;
      g.add(shadow);

      g.scale.setScalar(c.scale || 1.2);
      scene.add(g);
      return { root: g, head: head, legL: legL, legR: legR, armL: armL, armR: armR, laughing: c.mouth === "open" };
    }

    function variant(id, hairColor) {
      var base = characters[id], c = {}, k;
      for (k in base) c[k] = base[k];
      if (hairColor !== undefined) c.hair = hairColor;
      c.pose = null;
      return c;
    }

    function makePath(pts, closed) {
      var n = pts.length, m = closed ? n : n - 1, cum = [0], L = 0, i;
      for (i = 0; i < m; i++) {
        var a = pts[i], b = pts[(i + 1) % n];
        L += Math.hypot(b[0] - a[0], b[1] - a[1]);
        cum.push(L);
      }
      return { pts: pts, closed: closed, cum: cum, L: L, n: n };
    }
    function samplePath(p, s) {
      var m = p.cum.length - 1, i = 0;
      while (i < m - 1 && s > p.cum[i + 1]) i++;
      var a = p.pts[i], b = p.pts[(i + 1) % p.n];
      var seg = p.cum[i + 1] - p.cum[i];
      var t = seg > 0 ? (s - p.cum[i]) / seg : 0;
      var dx = seg > 0 ? (b[0] - a[0]) / seg : 0, dz = seg > 0 ? (b[1] - a[1]) / seg : 1;
      return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, dx, dz];
    }
    function ovalPath(cx, cz, r, half) {
      var pts = [], i, n = 10, a;
      for (i = 0; i <= n; i++) { a = (Math.PI * i) / n; pts.push([cx + r * Math.cos(a), cz + half + r * Math.sin(a)]); }
      for (i = 0; i <= n; i++) { a = Math.PI + (Math.PI * i) / n; pts.push([cx + r * Math.cos(a), cz - half + r * Math.sin(a)]); }
      return pts;
    }

    function addWalker(path, c, idx, s0, speed, dir, run, door) {
      students.push({
        m: makeStudent(c), path: path, s: s0, speed: speed, dir: dir || 1,
        run: !!run, phase: idx * 1.7, y: 0.08, idle: false, hold: c.prop === "tablet", door: !!door, wait: 0
      });
    }
    function addIdle(x, y, z, c, off) {
      var m = makeStudent(c);
      m.root.position.set(x, y, z);
      m.root.rotation.y = 0;
      students.push({ m: m, idle: true, y: y, off: off, pose: c.pose });
    }

    var pathA = makePath([[-1.2, 10.3], [-1.2, 8.0], [0, 7.0], [0, 1.0]], false);
    var pathB = makePath([[-0.8, -0.5], [1.2, -0.5], [1.2, 1.4], [-0.8, 1.4]], true);
    var pathD = makePath([[1.2, 3.4], [2.3, 3.4]], false);
    var pavArc = [], k;
    for (k = 0; k <= 8; k++) {
      var th = Math.PI * 0.5 + (Math.PI * k) / 8;
      pavArc.push([2.3 + 1.4 * Math.cos(th), -1.4 + 1.4 * Math.sin(th)]);
    }
    var pathP = makePath(pavArc, false);

    // 操場方向的鋪石子路小人巡邏路徑（起點在東側草坪，不再經圖書館）
    var pathG = makePath([
      [-0.8, -4.8], [0.4, -5.8], [1.3, -7.2],
      [1.5, -9.0], [1.6, -11.0], [1.8, -12.4], [2.05, -13.6]
    ], false);

    // 新增：公共藝術廣場連到圖書館正門的草徑行走路徑（可直接走進圖書館）
    var pathL = makePath([
      [-1.05, 0.25],   // 公共藝術廣場
      [-1.30, -0.42],  // 藝術雕塑旁
      [-1.60, -1.06],  // 淺綠草徑走道
      [-1.93, -1.67],  // 圖書館正門階梯
      [-2.16, -2.04]   // 進入圖書館雨遮大門
    ], false);

    var lanes = [1.65, 1.8, 1.95].map(function (r) { return makePath(ovalPath(4.85, -13.6, r, 1.45), true); });

    addWalker(pathB, characters[3], 3, 0.5, 0.5, 1);
    addWalker(pathB, characters[5], 4, 4.0, 0.5, 1);
    addWalker(pathD, variant(10), 5, 0.3, 0.45, 1);
    addWalker(pathP, variant(6, altHair[4]), 6, 0.0, 0.5, 1);
    addWalker(pathP, variant(12), 7, 2.6, 0.5, -1);
    addWalker(pathG, variant(2, altHair[3]), 8, 0.0, 0.6, 1);
    addWalker(pathG, variant(3, altHair[3]), 9, 4.5, 0.7, -1);
    addWalker(pathG, variant(6, altHair[0]), 10, 8.5, 0.5, 1);

    // 配置走在淺綠草徑、進出圖書館正門的學生
    addWalker(pathL, variant(2, altHair[1]), 14, 0.0, 0.5, 1, false, true);
    addWalker(pathL, variant(5, altHair[2]), 15, 1.4, 0.48, -1, false, true);

    addWalker(lanes[0], variant(8), 11, 0.0, 1.7, 1, true);
    addWalker(lanes[1], variant(9), 12, 6.0, 1.5, 1, true);
    addWalker(lanes[2], variant(13), 13, 11.0, 1.9, 1, true);

    // 原有的巡邏小人：白天 8:00–16:00 在校園走動
    students.forEach(function (a) { if (!a.idle) a.win = [8.0, 16.0]; });

    function setWin(w0, w1) { students[students.length - 1].win = [w0, w1]; }
    addIdle(-0.55, 0.08, 8.5, characters[0], 1.1); setWin(7.2, 8.25);    // 校門口站崗
    addIdle(-2.05, 0.08, 8.3, characters[6], 3.7); setWin(7.2, 8.25);
    addIdle(-4.05, 0.1, 4.15, characters[1], 0); setWin(8.1, 16.1);
    addIdle(-3.88, 0.1, 4.02, characters[4], 2.3); setWin(8.1, 16.1);
    addIdle(2.3, 0.08, 0.35, characters[7], 0.8); setWin(8.1, 16.4);
    addIdle(-0.8, 0.08, 6.8, characters[PRINCIPAL], 0.4); setWin(6.5, 18.0); students[students.length - 1].tag = "principal"; // 校長在校門迎接

    // ---------- 籃球場投籃的學生 ----------
    var ballMat = std(0xe8742a, 0.65), shooters = [];
    var shooterChars = [8, 9, 14, 15, 13, 16], shooterWin = [17.1, 17.1, 17.1, 21.8, 21.8, 21.8];
    var picked = courtHoops.filter(function (hp) { return hp.side === ((hp.c + hp.r) % 2 === 0 ? 1 : -1); });
    picked.forEach(function (hp, i) {
      var cid = shooterChars[i % shooterChars.length];
      var sm = makeStudent(variant(cid));
      var sx = hp.x + (hp.c % 2 ? -0.25 : 0.25), sz = hp.z - hp.side * 0.62;
      var yaw = Math.atan2(hp.x - sx, hp.z - sz);
      sm.root.position.set(sx, 0.07, sz);
      sm.root.rotation.y = yaw;
      var ball = new THREE.Mesh(new THREE.SphereGeometry(0.04, 12, 10), ballMat);
      scene.add(ball);
      shooters.push({ m: sm, ball: ball, hp: hp, sx: sx, sz: sz, yaw: yaw, off: i * 1.1, clock: i * 0.9, end: shooterWin[i % shooterWin.length], shown: null });
    });

    function updateShooters(sdt, hr) {
      for (var i = 0; i < shooters.length; i++) {
        var q = shooters[i], m = q.m;
        var vis = hr >= 8.0 && hr < q.end;
        if (vis !== q.shown) { q.shown = vis; m.root.visible = vis; q.ball.visible = vis; }
        if (!vis) continue;
        q.clock += sdt;
        var T = 4.2, u = q.clock % T;
        var fx = Math.sin(q.yaw), fz = Math.cos(q.yaw), sx = q.sx, sz = q.sz, y0 = 0.07, by, bx, bz;
        var hx = q.hp.x, hz = q.hp.z - q.hp.side * 0.08, hy = 0.78;
        var armsL = -0.05, armsR = -0.05, lift = 0;
        if (u < 1.5) {                       // 運球
          var b = Math.abs(Math.sin(Math.PI * u / 0.5));
          bx = sx + fx * 0.17; bz = sz + fz * 0.17; by = 0.04 + 0.24 * b;
          armsR = -0.15 - 0.55 * b; armsL = -0.1;
        } else if (u < 1.9) {                // 蓄力
          var g = (u - 1.5) / 0.4;
          bx = sx + fx * (0.17 - 0.07 * g); bz = sz + fz * (0.17 - 0.07 * g); by = 0.04 + 0.3 * g;
          armsL = armsR = -0.4 - 0.8 * g; lift = -0.012 * Math.sin(Math.PI * g);
        } else if (u < 2.2) {                // 起跳
          var j = (u - 1.9) / 0.3;
          lift = 0.12 * Math.sin(Math.PI * j * 0.9);
          armsL = armsR = -1.2 - 1.4 * j;
          bx = sx + fx * (0.1 - 0.05 * j); bz = sz + fz * (0.1 - 0.05 * j); by = 0.34 + 0.3 * j + lift;
        } else if (u < 2.95) {               // 投出，球飛向籃框
          var p = (u - 2.2) / 0.75;
          var x0 = sx + fx * 0.05, z0 = sz + fz * 0.05, yy0 = 0.68;
          bx = x0 + (hx - x0) * p; bz = z0 + (hz - z0) * p;
          by = yy0 + (hy - yy0) * p + 0.2 * 4 * p * (1 - p);
          lift = 0.12 * Math.max(0, Math.sin(Math.PI * Math.min(1, (u - 1.9) / 0.3) * 0.9));
          armsL = armsR = -2.6 + Math.min(1, p * 2) * 0.9;
        } else if (u < 3.25) {               // 進網落下
          var d = (u - 2.95) / 0.3;
          bx = hx; bz = hz; by = hy - (hy - 0.04) * d * d;
          armsL = armsR = -1.0 + d * 0.9;
        } else {                             // 球滾回來
          var r = (u - 3.25) / (T - 3.25);
          bx = hx + (sx + fx * 0.17 - hx) * r; bz = hz + (sz + fz * 0.17 - hz) * r;
          by = 0.04 + 0.05 * Math.abs(Math.sin(r * Math.PI * 3)) * (1 - r);
          armsL = armsR = -0.1;
        }
        m.legL.rotation.x = 0; m.legR.rotation.x = 0;
        m.armL.rotation.set(armsL, 0, 0.05);
        m.armR.rotation.set(armsR, 0, -0.05);
        m.head.rotation.set(u > 1.9 && u < 3.0 ? -0.35 : 0, 0, 0);
        m.root.position.y = y0 + lift;
        q.ball.position.set(bx, by, bz);
      }
    }

    // ---------- 上學、放學人潮 ----------
    // 校園步道節點（沿著鋪面步道，避開建築）
    var NODE_DEF = [
      ["A75", 0, 7.5], ["A335", 0, 3.35], ["A005", 0, 0.05], ["A_305", 0, -3.05], ["A_55", 0, -5.5],
      ["E335", 2.3, 3.35], ["E005", 2.3, 0.05], ["CW", 2.0, -3.05], ["E55", 3.0, -5.5], ["CN", 4.35, -5.4],
      ["LP1", -1.05, 0.25], ["LP2", -1.6, -1.06], ["LIB", -2.16, -2.04],
      ["G1", 0.4, -5.8], ["G2", 1.3, -7.2], ["G3", 1.5, -9.0], ["G4", 1.6, -11.0], ["G5", 1.8, -12.4], ["TRK", 2.05, -13.6], ["PL", 2.45, -0.3], ["TG", 4.0, -0.25]
    ];
    var EDGE_DEF = [
      ["A75", "A335"], ["A335", "A005"], ["A005", "A_305"], ["A_305", "A_55"], ["A335", "E335"], ["A005", "E005"],
      ["A_305", "CW"], ["A_55", "E55"], ["E55", "CN"], ["A005", "LP1"], ["LP1", "LP2"], ["LP2", "LIB"],
      ["A_55", "G1"], ["G1", "G2"], ["G2", "G3"], ["G3", "G4"], ["G4", "G5"], ["G5", "TRK"], ["E005", "PL"], ["PL", "TG"]
    ];
    var NID = {}, NPOS = [], NADJ = [];
    NODE_DEF.forEach(function (n, i) { NID[n[0]] = i; NPOS.push([n[1], n[2]]); NADJ.push([]); });
    EDGE_DEF.forEach(function (e) { NADJ[NID[e[0]]].push(NID[e[1]]); NADJ[NID[e[1]]].push(NID[e[0]]); });
    function nodeRoute(from, to) {          // 最短路徑（Dijkstra）
      var n = NPOS.length, dist = [], prev = [], done = [], i, k;
      for (i = 0; i < n; i++) { dist.push(1e9); prev.push(-1); done.push(false); }
      dist[from] = 0;
      for (k = 0; k < n; k++) {
        var u = -1;
        for (i = 0; i < n; i++) if (!done[i] && (u < 0 || dist[i] < dist[u])) u = i;
        if (u < 0 || dist[u] >= 1e9) break;
        done[u] = true;
        NADJ[u].forEach(function (v) {
          var w = Math.hypot(NPOS[u][0] - NPOS[v][0], NPOS[u][1] - NPOS[v][1]);
          if (dist[u] + w < dist[v]) { dist[v] = dist[u] + w; prev[v] = u; }
        });
      }
      var out = [], cur = to;
      while (cur >= 0) { out.unshift(cur); cur = prev[cur]; }
      return out;
    }
    function nearestNode(x, z) {
      var best = 0, bd = 1e9;
      NPOS.forEach(function (q, i) { var d = Math.hypot(q[0] - x, q[1] - z); if (d < bd) { bd = d; best = i; } });
      return best;
    }
    var DESTS = ["A335", "E335", "E005", "CW", "TG", "TG", "LIB", "TRK", "G3", "LP2", "A_305", "A005"].map(function (nm) { return NID[nm]; });   // 不選在環道上的節點，避免擋車
    var LIB_ID = NID["LIB"], TG_ID = NID["TG"];

    var seed = 20261024;
    function rnd() { seed = (seed * 1664525 + 1013904223) % 4294967296; return seed / 4294967296; }

    var CROWD_N = 40, crowd = [], order = [], ci;
    for (ci = 0; ci < CROWD_N; ci++) order.push(ci);
    for (ci = CROWD_N - 1; ci > 0; ci--) { var sj = Math.floor(rnd() * (ci + 1)), tmpo = order[ci]; order[ci] = order[sj]; order[sj] = tmpo; }
    for (ci = 0; ci < CROWD_N; ci++) {
      var cc = variant(ci % 17, ci % 3 === 0 ? altHair[ci % altHair.length] : undefined);
      var cm = makeStudent(cc);
      cm.root.visible = false;
      var wave = (ci % 5 < 2) ? 1 : 2;
      crowd.push({
        m: cm, hold: cc.prop === "tablet", state: "out", mode: "roam",
        tIn: 7.5 + 0.667 * ((order[ci] + rnd()) / CROWD_N),
        tOut: (wave === 1 ? 16.0 : 17.0) + rnd() * 0.3,
        speed: 0.8 + rnd() * 0.3, sp: 0.8, phase: ci * 1.3,
        side: ci % 2 ? 1 : -1, xg: -1.7 + rnd(),
        pts: [], seg: 0, d: 0, x: 0, z: 0, wait: 0, node: 0, inside: false, goal: -1
      });
    }
    function setRoute(a, pts) { a.pts = pts; a.seg = 0; a.d = 0; }
    function nodePts(path) { return path.map(function (id) { return [NPOS[id][0], NPOS[id][1]]; }); }
    function pickGoal(a) {
      var g, tries = 0;
      do { g = DESTS[Math.floor(rnd() * DESTS.length)]; tries++; } while (g === a.node && tries < 8);
      a.goal = g;
      var pts = nodePts(nodeRoute(a.node, g));
      pts.unshift([a.x, a.z]);
      setRoute(a, pts);
    }
    function showAgent(a) { a.state = "on"; a.m.root.visible = true; a.inside = false; }
    function hideAgent(a) { a.state = "out"; a.m.root.visible = false; a.inside = false; }
    function beginEnter(a) {
      showAgent(a);
      a.mode = "enter"; a.wait = 0;
      a.x = a.side * 7.0; a.z = 9.2; a.node = NID["A75"];
      a.goal = DESTS[Math.floor(rnd() * DESTS.length)];
      var pts = [[a.x, a.z], [a.xg, 9.2], [a.xg, 8.0]].concat(nodePts(nodeRoute(a.node, a.goal)));
      setRoute(a, pts);
      a.sp = a.speed * 1.15;
    }
    function beginRoamAt(a) {
      showAgent(a);
      a.mode = "roam"; a.wait = rnd() * 2;
      a.node = DESTS[Math.floor(rnd() * DESTS.length)];
      a.x = NPOS[a.node][0]; a.z = NPOS[a.node][1];
      a.sp = a.speed;
      pickGoal(a);
    }
    function beginLeave(a) {
      if (!a.m.root.visible) { a.m.root.visible = true; a.inside = false; }
      a.mode = "leave"; a.wait = 0;
      var from = nearestNode(a.x, a.z), hub = NID["A75"];
      var pts = [[a.x, a.z]].concat(nodePts(nodeRoute(from, hub)), [[a.xg, 8.0], [a.xg, 9.2], [a.side * 7.0, 9.2]]);
      setRoute(a, pts);
      // 保證在 18:00 關門前走出校門：距離遠的人走得快一點
      var plen = 0, pi2;
      for (pi2 = 0; pi2 < pts.length - 1; pi2++) plen += Math.hypot(pts[pi2 + 1][0] - pts[pi2][0], pts[pi2 + 1][1] - pts[pi2][1]);
      var avail = Math.max(1, (17.9 - timeOfDay) / (24 / DAY_SECONDS));
      a.sp = Math.max(a.speed * 1.5, plen / avail * 1.08);
    }
    // 行人遇到前方駛近的車先等一下（等太久就放行，避免卡死）
    function pedHolds(a, x, z, sdt) {
      var hold = false;
      if ((a.hx || a.hz) && !(a.cw > 0)) {
        for (var i = 0; i < cars.length; i++) {
          var c = cars[i];
          if (c.state !== "drive") continue;
          var ex = c.x - x, ez = c.z - z, d = Math.hypot(ex, ez);
          if (d > 1e-4 && ((d < 0.55 && (ex * a.hx + ez * a.hz) / d > 0.5) || d < 0.3)) { hold = true; break; }
        }
      }
      if (hold) { a.cwt = (a.cwt || 0) + sdt; if (a.cwt > 2.5) { a.cw = 1.5; a.cwt = 0; } }
      else { a.cwt = 0; if (a.cw > 0) a.cw -= sdt; }
      return hold;
    }
    // 沿路徑前進；回傳 true 表示走完
    function crowdMove(a, sdt) {
      var left = a.sp * sdt, guard = 0;
      while (left > 0 && a.seg < a.pts.length - 1 && guard++ < 40) {
        var p0 = a.pts[a.seg], p1 = a.pts[a.seg + 1], segL = Math.hypot(p1[0] - p0[0], p1[1] - p0[1]);
        if (segL < 1e-6) { a.seg++; a.d = 0; continue; }
        if (a.d + left >= segL) { left -= segL - a.d; a.seg++; a.d = 0; }
        else { a.d += left; left = 0; }
      }
      if (a.seg >= a.pts.length - 1) {
        var last = a.pts[a.pts.length - 1];
        a.x = last[0]; a.z = last[1];
        return { done: true, dx: 0, dz: 0 };
      }
      var q0 = a.pts[a.seg], q1 = a.pts[a.seg + 1], L2 = Math.hypot(q1[0] - q0[0], q1[1] - q0[1]);
      a.x = q0[0] + (q1[0] - q0[0]) * (a.d / L2);
      a.z = q0[1] + (q1[1] - q0[1]) * (a.d / L2);
      return { done: false, dx: (q1[0] - q0[0]) / L2, dz: (q1[1] - q0[1]) / L2 };
    }
    function updateCrowd(sdt, dt, hr, t) {
      for (var i = 0; i < crowd.length; i++) {
        var a = crowd[i], m = a.m;
        if (hr >= 18.0 || hr < 6.0) { if (a.state !== "out") hideAgent(a); continue; }   // 校門關閉後不留人
        if (a.state === "out") {
          if (hr >= a.tIn && hr < a.tOut - 0.02) {
            if (hr - a.tIn < 0.5) beginEnter(a); else beginRoamAt(a);
          } else continue;
        } else {
          if (hr < a.tIn) { hideAgent(a); continue; }
          if (a.mode === "leave" && hr >= a.tOut + 1.0) { hideAgent(a); continue; }
          if (hr >= a.tOut && a.mode !== "leave") beginLeave(a);
        }

        var moving = false, dx = 0, dz = 0;
        if (a.wait > 0) {
          a.wait -= sdt;
          if (a.wait <= 0) {
            if (a.inside) { a.inside = false; m.root.visible = true; }
            if (a.mode !== "leave") pickGoal(a);
          }
        } else {
          var r = crowdMove(a, pedHolds(a, a.x, a.z, sdt) ? 0 : sdt);
          if (!r.done) { a.hx = r.dx; a.hz = r.dz; }
          if (r.done) {
            if (a.mode === "leave") { hideAgent(a); continue; }
            a.mode = "roam";
            a.node = a.goal; a.sp = a.speed;
            if (a.goal === LIB_ID || a.goal === TG_ID) { a.inside = true; m.root.visible = false; a.wait = 3 + rnd() * 5; }
            else a.wait = 2 + rnd() * 6;
          } else { moving = true; dx = r.dx; dz = r.dz; }
        }

        if (moving) {
          var tgt = Math.atan2(dx, dz), cur = m.root.rotation.y, df = Math.atan2(Math.sin(tgt - cur), Math.cos(tgt - cur));
          m.root.rotation.y = cur + df * Math.min(1, dt * 8);
          a.phase += Math.min(sdt * a.sp * 12, 0.6);
          var sw = Math.sin(a.phase) * 0.6;
          m.legL.rotation.x = sw; m.legR.rotation.x = -sw;
          if (a.hold) { m.armL.rotation.x = -0.8; m.armR.rotation.x = -0.8; }
          else { m.armL.rotation.x = -sw * 0.85; m.armR.rotation.x = sw * 0.85; }
          m.root.position.set(a.x, 0.08 + Math.abs(Math.sin(a.phase)) * 0.018, a.z);
        } else {
          m.legL.rotation.x = 0; m.legR.rotation.x = 0;
          if (!a.hold) { m.armL.rotation.x = 0; m.armR.rotation.x = 0; }
          m.head.rotation.y = Math.sin(t * 0.8 + i) * 0.3;
          m.root.position.set(a.x, 0.08, a.z);
        }
      }
    }

    // ---------- 網球場上的雙打（白天與夜間燈光下都有人在打）----------
    var tPlayers = [], tOrder = [0, 2, 1, 3], tBall = null, tClock = 0, tShown = null;
    if (tennis) {
      var tids = [10, 11, 12, 9], tspots = [[-1, -0.3], [-1, 0.3], [1, -0.3], [1, 0.3]];
      var racketMat = std(0x2a2a2f, 0.5), strMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.35, side: THREE.DoubleSide });
      tspots.forEach(function (sp, i) {
        var tm = makeStudent(variant(tids[i]));
        var west = sp[0] < 0, px = tennis.cx + sp[0] * (tennis.pw / 2 - 0.2), pz = tennis.cz + sp[1];
        var rk = new THREE.Group();
        var hd = new THREE.Mesh(new THREE.BoxGeometry(0.012, 0.09, 0.012), racketMat);
        hd.position.y = -0.19;
        var rim = new THREE.Mesh(new THREE.TorusGeometry(0.05, 0.006, 6, 16), racketMat);
        rim.position.y = -0.28;
        var str = new THREE.Mesh(new THREE.CircleGeometry(0.048, 12), strMat);
        str.position.y = -0.28;
        rk.add(hd); rk.add(rim); rk.add(str);
        tm.armR.add(rk);
        tm.root.position.set(px, 0.07, pz);
        tm.root.rotation.y = west ? Math.PI / 2 : -Math.PI / 2;
        tm.root.visible = false;
        tPlayers.push({ m: tm, west: west, x: px, z: pz, bz: pz });
      });
      tBall = new THREE.Mesh(new THREE.SphereGeometry(0.028, 10, 8), new THREE.MeshBasicMaterial({ color: 0xd9ec3a }));
      tBall.visible = false;
      scene.add(tBall);
    }
    function updateTennis(sdt, hr) {
      if (!tennis) return;
      var vis = hr >= 8.0 && hr < 21.8;
      if (vis !== tShown) {
        tShown = vis;
        tPlayers.forEach(function (q) { q.m.root.visible = vis; });
        tBall.visible = vis;
      }
      if (!vis) return;
      tClock += sdt;
      var D = 1.3, k = Math.floor(tClock / D), p = (tClock % D) / D, tsec = p * D;
      var si = tOrder[k % 4], ri = tOrder[(k + 1) % 4], st = tPlayers[si], rc = tPlayers[ri];
      var hitH = 0.32, sx = st.x + (st.west ? 0.14 : -0.14), sz = st.z, rx = rc.x + (rc.west ? 0.14 : -0.14), rz = rc.z;
      var bx = tennis.cx + (rc.west ? -0.65 : 0.65), bz = rz, q2, ex, ey, ez;
      if (p < 0.6) {
        q2 = p / 0.6;
        ex = sx + (bx - sx) * q2; ez = sz + (bz - sz) * q2;
        ey = hitH + (0.03 - hitH) * q2 + 0.34 * Math.sin(Math.PI * q2);
      } else {
        q2 = (p - 0.6) / 0.4;
        ex = bx + (rx - bx) * q2; ez = bz + (rz - bz) * q2;
        ey = 0.03 + (hitH - 0.03) * q2 + 0.1 * Math.sin(Math.PI * q2);
      }
      tBall.position.set(ex, ey, ez);
      for (var j = 0; j < tPlayers.length; j++) {
        var pl = tPlayers[j], pm = pl.m, ang = -0.5, lift = 0;
        if (j === si) {
          if (tsec < 0.3) { ang = 0.7 - 2.7 * (tsec / 0.3); lift = 0.012 * Math.sin(Math.PI * tsec / 0.3); }
          else ang = -2.0 + 1.5 * Math.min(1, (tsec - 0.3) / 0.4);
        } else if (j === ri && p > 0.75) {
          ang = -0.5 + 1.2 * ((p - 0.75) / 0.25);
        }
        pm.armR.rotation.set(ang, 0, -0.05);
        pm.armL.rotation.set(-0.35, 0, 0.05);
        var target = pl.bz + Math.max(-0.18, Math.min(0.18, (ez - pl.bz) * 0.45));
        pl.z += (target - pl.z) * Math.min(1, sdt * 4);
        pm.legL.rotation.x = 0.25 * Math.sin(tClock * 6 + j);
        pm.legR.rotation.x = -0.25 * Math.sin(tClock * 6 + j);
        pm.root.position.set(pl.x, 0.07 + lift, pl.z);
      }
    }

    // ---------- 環道汽車：上學時間湧入、放學時間離開（人車分流，行人優先）----------
    // 車走東側車道（進 x=1.2、出 x=0.2），行人走西側人行帶；環道單向逆時針、靠右行駛
    var LANE_OFF = 0.15;
    var lanePts = (function () {
      var n = RING.length, out = [], i;
      for (i = 0; i < n; i++) {
        var p0 = RING[(i + n - 1) % n], p1 = RING[i], p2 = RING[(i + 1) % n];
        var l1 = Math.hypot(p1[0] - p0[0], p1[1] - p0[1]), l2 = Math.hypot(p2[0] - p1[0], p2[1] - p1[1]);
        var n1 = [-(p1[1] - p0[1]) / l1, (p1[0] - p0[0]) / l1], n2 = [-(p2[1] - p1[1]) / l2, (p2[0] - p1[0]) / l2];
        var kk = LANE_OFF / (1 + n1[0] * n2[0] + n1[1] * n2[1]);
        out.push([p1[0] + (n1[0] + n2[0]) * kk, p1[1] + (n1[1] + n2[1]) * kk]);
      }
      return out;
    })();
    var lane = makePath(lanePts, true);
    function laneS(x, z) {
      var best = 1e9, bs = 0, i;
      for (i = 0; i < lane.n; i++) {
        var a = lane.pts[i], b = lane.pts[(i + 1) % lane.n], dx = b[0] - a[0], dz = b[1] - a[1], l2 = dx * dx + dz * dz;
        var t = Math.max(0, Math.min(1, ((x - a[0]) * dx + (z - a[1]) * dz) / l2));
        var d = Math.hypot(x - (a[0] + dx * t), z - (a[1] + dz * t));
        if (d < best) { best = d; bs = lane.cum[i] + t * Math.sqrt(l2); }
      }
      return bs;
    }
    function lanePt(s) { var q = samplePath(lane, ((s % lane.L) + lane.L) % lane.L); return [q[0], q[1]]; }
    function laneSlice(s0, s1) {
      if (s1 < s0) s1 += lane.L;
      var out = [lanePt(s0)], k, i;
      for (k = 0; k < 2; k++) for (i = 0; i < lane.n; i++) {
        var c = lane.cum[i] + k * lane.L;
        if (c > s0 + 1e-6 && c < s1 - 1e-6) out.push([lane.pts[i][0], lane.pts[i][1]]);
      }
      out.push(lanePt(s1));
      return out;
    }
    var S_ENTRY = laneS(1.2, 8.35), S_EXIT = laneS(0.2, 8.35);

    var cars = [], carCols = [0xe8e8e8, 0x2f6fb5, 0xc2402f, 0x333a44, 0xe6b422, 0x6b8f5e, 0xb0b5bd, 0x8a4f9e];
    PARK_SLOTS.forEach(function (sl, ki) {
      var g = new THREE.Group();
      box(0.22, 0.09, 0.42, std(carCols[ki % carCols.length]), 0, 0.09, 0, g);
      box(0.19, 0.07, 0.22, std(0xcfe6f2), 0, 0.16, -0.02, g);
      g.visible = false;
      scene.add(g);
      var js = laneS(sl.x, sl.z), jp = lanePt(js);
      cars.push({
        g: g, slot: sl, js: js, jp: jp, ki: ki, state: "out", mode: "in",
        tIn: 7.55 + 0.5 * (ki / PARK_SLOTS.length) + rnd() * 0.04, tOut: 16.0 + 1.3 * ((ki * 3 % PARK_SLOTS.length) / PARK_SLOTS.length) + rnd() * 0.1,
        pts: [], seg: 0, d: 0, x: 0, z: 0, sp: 3.0, dx: 0, dz: 1
      });
    });
    function carShow(c, x, z, hx, hz) {
      c.state = "drive"; c.g.visible = true; c.x = x; c.z = z; c.dx = hx; c.dz = hz;
      c.g.position.set(x, 0.07, z); c.g.rotation.y = Math.atan2(hx, hz);
    }
    function carHide(c) { c.state = "out"; c.g.visible = false; }
    function carPark(c) {
      var sl = c.slot, hx = sl.x - c.jp[0], hz = sl.z - c.jp[1], hl = Math.hypot(hx, hz) || 1;
      c.state = "parked"; c.mode = "parked"; c.g.visible = true; c.x = sl.x; c.z = sl.z; c.dx = hx / hl; c.dz = hz / hl;
      c.g.position.set(sl.x, 0.07, sl.z); c.g.rotation.y = Math.atan2(c.dx, c.dz);
    }
    function carBegin(c) {
      var west = c.ki % 2 === 0;
      var start = west ? [[-8.6, 10.95], [1.2, 10.95], [1.2, 9.0], [1.2, 8.35]] : [[8.6, 9.85], [1.2, 9.85], [1.2, 9.0], [1.2, 8.35]];
      var pts = start.concat(laneSlice(S_ENTRY, c.js), [[c.slot.x, c.slot.z]]);
      c.mode = "in"; c.pts = pts; c.seg = 0; c.d = 0;
      carShow(c, pts[0][0], pts[0][1], west ? 1 : -1, 0);
    }
    function carLeave(c) {
      var pts = [[c.slot.x, c.slot.z]].concat(laneSlice(c.js, S_EXIT), [[0.2, 8.35], [0.2, 9.0], [0.2, 9.85], [-8.6, 9.85]]);
      c.mode = "leave"; c.pts = pts; c.seg = 0; c.d = 0;
      c.state = "drive"; c.g.visible = true;
    }
    // 在車頭前方（含車身兩側）的狹長範圍內有行人就停車
    function inBand(c, px, pz, back, front, lat) {
      var ex = px - c.x, ez = pz - c.z, along = ex * c.dx + ez * c.dz, side = Math.abs(ex * c.dz - ez * c.dx);
      return along > -back && along < front && side < lat;
    }
    function carBlocked(c) {
      var i, a, o;
      if (playerPos && inBand(c, playerPos.x, playerPos.z, -0.12, 0.85, 0.32)) return true;
      for (i = 0; i < crowd.length; i++) {
        a = crowd[i];
        if (a.state === "on" && a.m.root.visible && inBand(c, a.x, a.z, -0.12, 0.85, 0.32)) return true;
      }
      for (i = 0; i < students.length; i++) {
        a = students[i];
        if (a.m.root.visible && inBand(c, a.m.root.position.x, a.m.root.position.z, -0.12, 0.85, 0.32)) return true;
      }
      for (i = 0; i < cars.length; i++) {          // 同向前車：保持車距
        o = cars[i];
        if (o !== c && o.state === "drive" && (c.dx * o.dx + c.dz * o.dz) > 0.5 && inBand(c, o.x, o.z, 0, 0.6, 0.22)) return true;
      }
      return false;
    }
    function updateCars(sdt, dt, hr) {
      for (var i = 0; i < cars.length; i++) {
        var c = cars[i];
        if (hr >= 18.0 || hr < 6.0) { if (c.state !== "out") carHide(c); continue; }   // 校門關閉後不留車
        if (c.state === "out") {
          if (hr >= c.tIn && hr < c.tOut - 0.02) { if (hr - c.tIn < 0.4) carBegin(c); else carPark(c); }
          else continue;
        } else {
          if (hr < c.tIn) { carHide(c); continue; }
          if (c.mode === "leave" && hr >= c.tOut + 1.0) { carHide(c); continue; }
          if (hr >= c.tOut && c.mode !== "leave") { if (c.mode === "in") carPark(c); carLeave(c); }
        }
        if (c.state === "drive") {
          var steps = Math.max(1, Math.ceil(sdt / 0.08)), sub = sdt / steps, done = false;
          for (var sI = 0; sI < steps && !done; sI++) {
            var r = crowdMove(c, carBlocked(c) ? 0 : sub);
            if (r.done) done = true; else { c.dx = r.dx; c.dz = r.dz; }
          }
          if (done) { if (c.mode === "leave") { carHide(c); continue; } carPark(c); }
          var cur = c.g.rotation.y, tgt = Math.atan2(c.dx, c.dz);
          c.g.rotation.y = cur + Math.atan2(Math.sin(tgt - cur), Math.cos(tgt - cur)) * Math.min(1, dt * 10);
          c.g.position.set(c.x, 0.07, c.z);
        }
      }
    }

    roleApi = { makeStudent: makeStudent, variant: variant, characters: characters, PRINCIPAL: PRINCIPAL, students: students, cars: cars,
      nodeRoute: nodeRoute, nodePts: nodePts, nearestNode: nearestNode, NID: NID, NPOS: NPOS, crowdMove: crowdMove, pedHolds: pedHolds, carHide: carHide, DESTS: DESTS, EDGE: EDGE_DEF };

    updateStudents = function (dt, now) {
      var t = now * 0.001;
      var hr = timeOfDay, sdt = timePlaying ? Math.min(dt, 0.1) * timeSpeed : 0;
      updateCrowd(sdt, dt, hr, t);
      updateShooters(sdt, hr);
      updateCars(sdt, dt, hr);
      updateTennis(sdt, hr);
      for (var i = 0; i < students.length; i++) {
        var a = students[i], m = a.m;
        if (a.win) {
          var vis = hr >= a.win[0] && hr < a.win[1] && !a.suppress;
          if (vis !== a.shown) { a.shown = vis; m.root.visible = vis; }
          if (!vis) continue;
        }
        if (a.idle) {
          var off = a.off, p = a.pose;
          m.armL.rotation.set(0, 0, 0.05);
          m.armR.rotation.set(0, 0, -0.05);
          m.head.rotation.set(0, Math.sin(t * 0.8 + off) * 0.3, 0);
          if (p === "thumbs") {
            m.armR.rotation.set(-1.3, 0, 0);
          } else if (p === "hips") {
            m.armL.rotation.set(-0.25, 0, 0.65);
            m.armR.rotation.set(-0.25, 0, -0.65);
          } else if (p === "cheek") {
            m.armR.rotation.set(-2.2, 0, 0);
            m.head.rotation.set(0, 0, 0.12 + Math.sin(t * 1.5 + off) * 0.03);
          } else if (p === "cross") {
            m.armL.rotation.set(-1.2, 0, -0.9);
            m.armR.rotation.set(-1.2, 0, 0.9);
          } else if (p === "back") {
            m.armL.rotation.set(0.45, 0, 0.05);
            m.armR.rotation.set(0.45, 0, -0.05);
          } else if (p === "look") {
            m.head.rotation.set(-0.25 + Math.sin(t * 1.2 + off) * 0.04, Math.sin(t * 0.7 + off) * 0.2, 0);
          } else if (p === "peace") {
            m.armR.rotation.set(-1.5 + Math.sin(t * 3 + off) * 0.05, 0, 0);
            m.armL.rotation.set(-0.9, 0, -0.2);
          } else if (p === "wave") {
            var waving = ((t + off) % 6) < 2.2;
            m.armR.rotation.set(0, 0, waving ? -2.7 + Math.sin(t * 9) * 0.3 : -0.05);
          }
          if (m.laughing) {
            m.head.rotation.x = -0.12 + Math.sin(t * 7 + off) * 0.04;
            m.root.position.y = a.y + Math.abs(Math.sin(t * 7 + off)) * 0.014;
          } else {
            m.root.position.y = a.y + Math.sin(t * 2 + off) * 0.004;
          }
          continue;
        }
        if (a.wait > 0) {
          a.wait -= sdt;
          if (a.wait > 0) continue;
          m.root.visible = true;
          var spOut = samplePath(a.path, a.path.L);
          m.root.rotation.y = Math.atan2(-spOut[2], -spOut[3]);
        }
        var wsd = pedHolds(a, m.root.position.x, m.root.position.z, sdt) ? 0 : sdt;
        a.s += a.speed * wsd * a.dir;
        var L = a.path.L, s = a.s;
        if (a.path.closed) {
          s = ((s % L) + L) % L;
          a.s = s;
        } else if (s > L) {
          a.s = s = L; a.dir = -1;
          if (a.door) { a.wait = 1.2 + (a.phase % 1.5); m.root.visible = false; continue; }
        }
        else if (s < 0) { a.s = s = 0; a.dir = 1; }

        var sp = samplePath(a.path, s);
        a.hx = sp[2] * a.dir; a.hz = sp[3] * a.dir;
        var target = Math.atan2(sp[2] * a.dir, sp[3] * a.dir), cur = m.root.rotation.y;
        var diff = Math.atan2(Math.sin(target - cur), Math.cos(target - cur));
        m.root.rotation.y = cur + diff * Math.min(1, dt * 7);

        a.phase += Math.min(sdt * a.speed * (a.run ? 8 : 12), 0.6);
        var sw = Math.sin(a.phase) * (a.run ? 0.95 : 0.6);
        m.legL.rotation.x = sw;
        m.legR.rotation.x = -sw;
        if (a.hold) {
          m.armL.rotation.x = -0.8;
          m.armR.rotation.x = -0.8;
        } else {
          m.armL.rotation.x = -sw * 0.85;
          m.armR.rotation.x = sw * 0.85;
        }
        m.root.position.set(sp[0], a.y + Math.abs(Math.sin(a.phase)) * (a.run ? 0.03 : 0.018), sp[1]);
      }
    };
  })();

  // ---------- 16. 熱點 3D 標記與互動徽章 ----------
  var pickables = [], hotspotObjects = [], activeHotspotId = null;
  var panel = document.getElementById("panel"), listEl = document.getElementById("list");

  hotspots.forEach(function (data) {
    var b = document.createElement("button");
    b.type = "button";
    b.setAttribute("data-id", data.id);
    var dot = document.createElement("span");
    dot.className = "badge-dot";
    dot.style.background = data.color;
    var infoDiv = document.createElement("div");
    infoDiv.className = "list-info";
    var nameSpan = document.createElement("span");
    nameSpan.className = "list-name";
    nameSpan.textContent = data.name;
    var subSpan = document.createElement("span");
    subSpan.className = "list-sub";
    subSpan.textContent = data.subtitle;
    infoDiv.appendChild(nameSpan);
    infoDiv.appendChild(subSpan);
    b.appendChild(dot);
    b.appendChild(infoDiv);
    b.addEventListener("click", function () { openHotspot(data.id); });
    listEl.appendChild(b);

    var g = new THREE.Group();
    g.position.set(data.pos[0], data.pos[1], data.pos[2]);

    var pinMat = new THREE.MeshStandardMaterial({
      color: data.color, roughness: 0.2, metalness: 0.65,
      emissive: data.color, emissiveIntensity: 0.35
    });
    var pinMesh = new THREE.Mesh(new THREE.OctahedronGeometry(0.24, 0), pinMat);
    pinMesh.userData.id = data.id;
    g.add(pinMesh);

    cyl(0.015, 0.015, 0.45, 8, std(0xffffff, 0.5), 0, -0.3, 0, g);

    var ringMesh = new THREE.Mesh(new THREE.RingGeometry(0.16, 0.28, 24), new THREE.MeshBasicMaterial({ color: data.color, side: THREE.DoubleSide, transparent: true, opacity: 0.85 }));
    ringMesh.rotation.x = -Math.PI / 2;
    ringMesh.position.y = -0.52;
    g.add(ringMesh);

    scene.add(g);
    pickables.push(pinMesh);

    var badge = document.createElement("div");
    badge.className = "hotspot-badge";
    badge.setAttribute("data-id", data.id);
    var bDot = document.createElement("span");
    bDot.className = "badge-num";
    bDot.style.background = data.color;
    bDot.textContent = String(hotspots.indexOf(data) + 1);
    var bText = document.createElement("span");
    bText.textContent = data.name;
    badge.appendChild(bDot);
    badge.appendChild(bText);
    badge.addEventListener("click", function(e) {
      e.stopPropagation();
      openHotspot(data.id);
    });
    labelsEl.appendChild(badge);

    hotspotObjects.push({
      data: data, group: g, pin: pinMesh, ring: ringMesh, badge: badge,
      worldPos: new THREE.Vector3(data.pos[0], data.pos[1] + 0.35, data.pos[2])
    });
  });

  function byHotspotId(id) {
    for (var i = 0; i < hotspotObjects.length; i++) {
      if (hotspotObjects[i].data.id === id) return hotspotObjects[i];
    }
    return null;
  }

  function openHotspot(id) {
    var h = byHotspotId(id);
    if (!h) return;
    activeHotspotId = id;
    listEl.hidden = true;

    document.getElementById("panel-tag").textContent = h.data.tag;
    document.getElementById("panel-title").textContent = h.data.name;
    document.getElementById("panel-intro").textContent = h.data.intro;
    var ul = document.getElementById("panel-items");
    ul.innerHTML = "";
    h.data.items.forEach(function (it) {
      var li = document.createElement("li");
      if (it.date) {
        var d = document.createElement("div");
        d.className = "date";
        d.textContent = it.date;
        li.appendChild(d);
      }
      var t = document.createElement("div");
      t.className = "title";
      t.textContent = it.title;
      li.appendChild(t);
      var s = document.createElement("p");
      s.className = "summary";
      s.textContent = it.summary;
      li.appendChild(s);

      if (it.link) {
        var a = document.createElement("a");
        a.className = "action-link";
        a.href = it.link;
        a.target = "_blank";
        a.rel = "noopener";
        a.textContent = it.link.includes("youtu") ? "觀賞專屬介紹影片 →" : "前往官方專屬網站 →";
        li.appendChild(a);
      }
      ul.appendChild(li);
    });

    panel.hidden = false;
    panel.scrollTop = 0;

    hotspotObjects.forEach(function (obj) {
      var isTarget = (obj.data.id === id);
      obj.badge.classList.toggle("active", isTarget);
      obj.badge.classList.toggle("dim", !isTarget);
      gsap.to(obj.pin.scale, {
        x: isTarget ? 1.4 : 1.0, y: isTarget ? 1.4 : 1.0, z: isTarget ? 1.4 : 1.0,
        duration: 0.35
      });
    });

    try { gameOnOpen(id); } catch (eg) {}
    var d = h.data;
    flyTo(new THREE.Vector3(d.camTarget[0], d.camTarget[1], d.camTarget[2]), new THREE.Vector3(d.camPos[0], d.camPos[1], d.camPos[2]), 1.3);
  }

  function closePanel() {
    panel.hidden = true;
    activeHotspotId = null;
    hotspotObjects.forEach(function (obj) {
      obj.badge.classList.remove("active", "dim");
      gsap.to(obj.pin.scale, { x: 1, y: 1, z: 1, duration: 0.3 });
    });
  }

  function showOverview() {
    closePanel();
    listEl.hidden = true;
    var o = overview();
    flyTo(o.target, o.pos, 1.4);
  }

  document.getElementById("panel-close").addEventListener("click", showOverview);
  document.getElementById("btn-list").addEventListener("click", function () {
    listEl.hidden = !listEl.hidden;
  });

  // ---------- 地點標籤 ----------
  var tags = [];
  function addTag(text, x, y, z, isRoad, isLandmark) {
    var el = document.createElement("div");
    el.className = "tag" + (isRoad ? " road" : "") + (isLandmark ? " landmark" : "");
    el.textContent = text;
    labelsEl.appendChild(el);
    tags.push({ el: el, pos: new THREE.Vector3(x, y, z) });
  }

  addTag("清豐路", -11, 0.3, 10.4, true);
  addTag("土庫六路", 8.8, 0.3, -3, true);
  addTag("土庫七街", -7.4, 0.3, 1.5, true);
  addTag("土庫八街", 3.0, 0.3, -19.5, true);
  addTag("正門校門", 0, 1.2, 8.82, false, true);
  addTag("通學步道", 7.9, 0.5, 0.0);
  addTag("川堂", 0, 2.5, 5.3);
  addTag("林蔭走道", 0, 1.2, 3.1);
  addTag("公共藝術廣場", 0, 0.8, 1.2, false, true);
  addTag("花園涼亭", 2.3, 1.3, -1.4, false, true);
  addTag("鋪石子步道", 1.5, 0.4, -9.0);
  addTag("戶外劇場", -4.1, 0.6, 4.2);
  addTag("教學大樓", -3.6, 2.0, 1.2);
  addTag("圖資鐘塔", -2.4, 3.2, -3.1, false, true);
  addTag("活動中心", 4.35, 1.9, 2.1);
  addTag("網球場", 5.0, 0.9, -1.35, false, true);
  addTag("黑森林", 4.2, 1.0, -8.2, false, true);
  addTag("校內環道", -3.5, 0.3, -5.5, true);
  addTag("司令台", 2.08, 1.2, -13.6);
  addTag("校長", -0.8, 1.1, 6.8, false, true);

  function flyTo(t, c, d) {
    if (roleMode) return;
    d = d || 1.2;
    gsap.to(controls.target, { x: t.x, y: t.y, z: t.z, duration: d, ease: "power2.inOut" });
    gsap.to(camera.position, { x: c.x, y: c.y, z: c.z, duration: d, ease: "power2.inOut" });
  }

  var raycaster = new THREE.Raycaster();
  var pointer = new THREE.Vector2();
  var downX = 0, downY = 0;

  function pick(ev) {
    var rect = canvas.getBoundingClientRect();
    pointer.x = ((ev.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((ev.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(pointer, camera);
    var hit = raycaster.intersectObjects(pickables, false)[0];
    return hit ? hit.object.userData.id : null;
  }

  canvas.addEventListener("pointerdown", function (ev) { downX = ev.clientX; downY = ev.clientY; });
  canvas.addEventListener("pointerup", function (ev) {
    if (Math.hypot(ev.clientX - downX, ev.clientY - downY) > 6) return;
    var hitId = pick(ev);
    if (hitId) openHotspot(hitId);
  });

  document.getElementById("btn-overview").addEventListener("click", showOverview);
  document.getElementById("btn-gate").addEventListener("click", function () {
    closePanel();
    flyTo(new THREE.Vector3(0, 0.9, 8.8), new THREE.Vector3(0, 2.6, 14.5), 1.2);
  });
  document.getElementById("btn-walkway").addEventListener("click", function () {
    closePanel();
    flyTo(new THREE.Vector3(0, 1.35, 5.3), new THREE.Vector3(0, 1.05, 1.4), 1.2);
  });
  document.getElementById("btn-pavilion").addEventListener("click", function () {
    closePanel();
    flyTo(new THREE.Vector3(2.3, 1.0, -1.4), new THREE.Vector3(4.2, 2.5, 0.5), 1.2);
  });
  document.getElementById("btn-library").addEventListener("click", function () {
    closePanel();
    flyTo(new THREE.Vector3(-2.4, 2.0, -3.1), new THREE.Vector3(-0.6, 3.8, 0.8), 1.2);
  });
  document.getElementById("btn-theater").addEventListener("click", function () {
    closePanel();
    flyTo(new THREE.Vector3(-4.1, 0.5, 4.2), new THREE.Vector3(-3.0, 3.2, 8.2), 1.2);
  });
  document.getElementById("btn-sports").addEventListener("click", function () { openHotspot("events"); });
  document.getElementById("btn-forest").addEventListener("click", function () {
    closePanel();
    flyTo(new THREE.Vector3(4.5, 1.1, -7.9), new THREE.Vector3(4.5, 5.5, -2.5), 1.2);
  });
  document.getElementById("btn-track").addEventListener("click", function () { openHotspot("sports"); });

  var tmp = new THREE.Vector3();
  function place(el, pos, w, h) {
    tmp.copy(pos).project(camera);
    if (tmp.z >= 1) { el.style.display = "none"; return; }
    el.style.display = "flex";
    el.style.transform = "translate(" + (((tmp.x + 1) / 2) * w) + "px," + (((1 - tmp.y) / 2) * h) + "px) translate(-50%,-50%)";
  }
  function updateLabels() {
    var w = window.innerWidth, h = window.innerHeight;
    for (var i = 0; i < tags.length; i++) place(tags[i].el, tags[i].pos, w, h);
    for (var j = 0; j < hotspotObjects.length; j++) place(hotspotObjects[j].badge, hotspotObjects[j].worldPos, w, h);
  }


  // ---------- 16-3. 時間系統（0:00 → 24:00）----------
  // 天色、光線、日月星辰、夜間窗燈與鐘塔指針全部由 timeOfDay（小時，0–24）推算
  var timeOfDay = (function () { var d = new Date(); return d.getHours() + d.getMinutes() / 60; })();
  var timePlaying = true, timeSpeed = 4, DAY_SECONDS = 600; // 預設 4×：現實 2.5 分鐘 = 一天

  var moonLight = new THREE.DirectionalLight(0x9db4ff, 0);
  scene.add(moonLight);
  var sunDisc = new THREE.Mesh(new THREE.SphereGeometry(14, 20, 14), new THREE.MeshBasicMaterial({ color: 0xfff0b8, fog: false }));
  var moonDisc = new THREE.Mesh(new THREE.SphereGeometry(10, 20, 14), new THREE.MeshBasicMaterial({ color: 0xe8eeff, fog: false }));
  scene.add(sunDisc);
  scene.add(moonDisc);

  var starMat = new THREE.PointsMaterial({ color: 0xffffff, size: 2.2, sizeAttenuation: false, transparent: true, opacity: 0, fog: false, depthWrite: false });
  var stars = (function () {
    var n = 520, arr = new Float32Array(n * 3);
    for (var i = 0; i < n; i++) {
      var y = 0.06 + 0.94 * Math.random(), r = Math.sqrt(1 - y * y), th = Math.random() * Math.PI * 2;
      arr[i * 3] = Math.cos(th) * r * 300;
      arr[i * 3 + 1] = y * 300;
      arr[i * 3 + 2] = Math.sin(th) * r * 300;
    }
    var g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(arr, 3));
    var pts = new THREE.Points(g, starMat);
    pts.frustumCulled = false;
    scene.add(pts);
    return pts;
  })();

  // 關鍵影格：[小時, 天頂, 地平線(同霧色), 半球天光, 半球地光, 半球強度, 太陽色, 太陽強度, 雲色]
  var SKY_KEYS = [
    [0,    0x050a1f, 0x131f45, 0x3a4a7a, 0x1a2420, 0.38, 0xffd9a0, 0,    0x3a4466],
    [5,    0x0a1334, 0x24305c, 0x3f4f82, 0x1c2622, 0.40, 0xffd9a0, 0,    0x3a4466],
    [6,    0x5a6aa6, 0xf6b088, 0xffdcc0, 0xb09a80, 0.66, 0xffb87c, 0.75, 0xffd8c4],
    [7.5,  0x86bdea, 0xffe6cc, 0xf2f2ff, 0xd2c4a2, 0.92, 0xffecd0, 0.95, 0xfff4ec],
    [10,   0x7cbaec, 0xe4f0f6, 0xf0f4ff, 0xd8c9a5, 1.05, 0xfff0d6, 1.1, 0xffffff],
    [15,   0x7cbaec, 0xe4f0f6, 0xf0f4ff, 0xd8c9a5, 1.05, 0xfff0d6, 1.1, 0xffffff],
    [17,   0x7fa8dc, 0xffe2bc, 0xfff0e0, 0xd2bd98, 0.98, 0xffdca8, 1.0, 0xfff0e4],
    [18.2, 0x7a6aa8, 0xffa07a, 0xffd2b8, 0xb89f88, 0.7, 0xff9a60, 0.7, 0xffc0a4],
    [19.4, 0x1c2650, 0x6a4a6a, 0x6a6a9a, 0x2a3028, 0.45, 0xff7a50, 0.20, 0x5a4a66],
    [21,   0x080e28, 0x1a2850, 0x3a4a7a, 0x1a2420, 0.38, 0xffd9a0, 0,    0x3a4466],
    [24,   0x050a1f, 0x131f45, 0x3a4a7a, 0x1a2420, 0.38, 0xffd9a0, 0,    0x3a4466]
  ];
  var _ca = new THREE.Color(), _cb = new THREE.Color();
  function keyColor(out, idx, i, t) {
    _ca.setHex(SKY_KEYS[i][idx]); _cb.setHex(SKY_KEYS[i + 1][idx]);
    out.copy(_ca).lerp(_cb, t);
  }
  function clamp01(v) { return v < 0 ? 0 : v > 1 ? 1 : v; }

  var timeEls = {
    play: document.getElementById("t-play"), clock: document.getElementById("t-clock"),
    range: document.getElementById("t-range"), label: document.getElementById("t-label"),
    speed: document.getElementById("t-speed"), now: document.getElementById("t-now")
  };
  var lastMinuteShown = -1, rangeDragging = false;

  function periodName(h) {
    if (h < 5) return "深夜";
    if (h < 6.5) return "黎明";
    if (h < 11) return "早晨";
    if (h < 13.5) return "中午";
    if (h < 17) return "下午";
    if (h < 19) return "黃昏";
    return "夜晚";
  }

  function applyTime(h) {
    h = ((h % 24) + 24) % 24;
    var i = 0;
    while (i < SKY_KEYS.length - 2 && h >= SKY_KEYS[i + 1][0]) i++;
    var t = clamp01((h - SKY_KEYS[i][0]) / (SKY_KEYS[i + 1][0] - SKY_KEYS[i][0]));
    var u = sky.material.uniforms;
    keyColor(u.top.value, 1, i, t);
    keyColor(u.low.value, 2, i, t);
    scene.background.copy(u.low.value);
    scene.fog.color.copy(u.low.value);
    keyColor(hemi.color, 3, i, t);
    keyColor(hemi.groundColor, 4, i, t);
    hemi.intensity = SKY_KEYS[i][5] + (SKY_KEYS[i + 1][5] - SKY_KEYS[i][5]) * t;
    keyColor(sun.color, 6, i, t);
    sun.intensity = SKY_KEYS[i][7] + (SKY_KEYS[i + 1][7] - SKY_KEYS[i][7]) * t;
    keyColor(cloudMat.color, 8, i, t);

    // 太陽 6 點從東邊升起、12 點最高、18 點西沉；月亮在正對面
    var a = (h - 6) / 12 * Math.PI, elev = Math.sin(a), dx = -Math.cos(a);
    var len = Math.sqrt(dx * dx + elev * elev + 0.0625);
    var nx = dx / len, ny = elev / len, nz = 0.25 / len;
    sun.position.set(dx * 20, Math.max(elev * 20, 3), 8);
    sunDisc.position.set(nx * 290, ny * 290, nz * 290);
    moonDisc.position.set(-nx * 290, -ny * 290, -nz * 290);
    sunDisc.visible = ny > -0.06;
    moonDisc.visible = -ny > -0.06;
    sunDisc.material.color.copy(sun.color).lerp(_ca.setHex(0xfff6d8), 0.5);
    var night = clamp01((0.1 - elev) / 0.3);
    moonLight.position.set(-dx * 20, Math.max(-elev * 20, 4), -8);
    moonLight.intensity = 0.35 * night;
    starMat.opacity = clamp01((0.05 - elev) / 0.3);

    // 夜間窗燈
    var lamp = clamp01((0.25 - elev) / 0.35);
    windowDark.emissive.setHex(0xffb84d);
    windowDark.emissiveIntensity = 0.75 * lamp;

    // 鐘塔：時針走一圈 12 小時、分針走一圈 1 小時（順時針）
    var ha = -(h % 12) / 12 * Math.PI * 2, ma = -(h % 1) * Math.PI * 2;
    for (var k = 0; k < clockHands.length; k++) {
      clockHands[k].hour.rotation.z = ha;
      clockHands[k].min.rotation.z = ma;
    }

    // 介面
    var totalMin = Math.floor(h * 60) % 1440;
    if (totalMin !== lastMinuteShown) {
      lastMinuteShown = totalMin;
      var hh = Math.floor(totalMin / 60), mi = totalMin % 60;
      timeEls.clock.textContent = (hh < 10 ? "0" : "") + hh + ":" + (mi < 10 ? "0" : "") + mi;
      timeEls.label.textContent = periodName(h);
    }
    if (!rangeDragging) timeEls.range.value = h;
  }

  timeEls.play.addEventListener("click", function () {
    timePlaying = !timePlaying;
    timeEls.play.textContent = timePlaying ? "⏸" : "▶";
  });
  timeEls.range.addEventListener("pointerdown", function () { rangeDragging = true; });
  window.addEventListener("pointerup", function () { rangeDragging = false; });
  timeEls.range.addEventListener("input", function () {
    timeOfDay = parseFloat(timeEls.range.value) % 24;
    applyTime(timeOfDay);
  });
  var SPEEDS = [1, 2, 4, 8, 0.5];
  timeEls.speed.addEventListener("click", function () {
    timeSpeed = SPEEDS[(SPEEDS.indexOf(timeSpeed) + 1) % SPEEDS.length];
    timeEls.speed.textContent = timeSpeed + "×";
  });
  timeEls.now.addEventListener("click", function () {
    var d = new Date();
    timeOfDay = d.getHours() + d.getMinutes() / 60;
    applyTime(timeOfDay);
  });
  applyTime(timeOfDay);


  // ---------- 17. 角色系統：選一個角色，用他的視角逛校園 ----------
  var ROLE_SEX = [{ k: "m", l: "男生" }, { k: "f", l: "女生" }];
  var ROLES = [];
  var _rs = null;
  function rsBase(sex) { return roleApi.variant(sex === "f" ? 5 : 2, sex === "f" ? 0x232a4f : 0x1b1e2a); }
  function rsStudent(sex, hair, over, dec) {
    var c = rsBase(sex);
    if (hair !== undefined) c.hair = hair;
    c.prop = null;
    for (var k in over) c[k] = over[k];
    return { c: c, deco: dec || {} };
  }
  function rsPe(sex, over, dec) {
    var c = roleApi.variant(sex === "f" ? 9 : 8);
    c.prop = null;
    for (var k in over) c[k] = over[k];
    return { c: c, deco: dec || {} };
  }
  function rsTeacher(sex, over, dec) {
    var c = roleApi.variant(sex === "f" ? 5 : 2);
    c.prop = null; c.noEmblem = true; c.longSleeve = true; c.shoe = "loafer"; c.sock = 0x23262e;
    for (var k in over) c[k] = over[k];
    return { c: c, deco: dec || {} };
  }
  ROLES = [
    { id: "principal", name: "校長", sub: "到校門迎接大家，巡視校園", color: "#2b2d3a", hot: "events", note: "",
      make: function () { var c = roleApi.variant(roleApi.PRINCIPAL); return { c: c, deco: {} }; } },
    { id: "director", name: "教務主任", sub: "課務與招生，巡視校園", color: "#3a6ea5", hot: "events", note: "",
      make: function () { return rsTeacher("m", { hair: 0x3a2a22, hairStyle: "side", topColor: 0x5d6288, bottomColor: 0xa6c6e4, longSleeve: false, shoe: "sneaker", shoeColor: 0x1c1c22, sock: 0x1c1c22, skin: 0xe9c29c, scale: 1.3 }, { crossbag: true, tumbler: 0x1f4a3a }); } },
    { id: "bilingual", name: "雙語實驗班學生", sub: "英語沉浸式課程", color: "#2e86de", hot: "bilingual", sexes: true,
      make: function (v, sex) { return rsStudent(sex, sex === "f" ? 0xe8cf86 : 0x4a3020, {}, { lanyard: 0x3a7bd5, book: 0xd04a4a }); } },
    { id: "ai", name: "AI半導體班學生", sub: "AI × 半導體跨域實作", color: "#7c5cf0", hot: "ai-semi", sexes: true,
      make: function (v, sex) { return rsStudent(sex, undefined, { prop: "tablet" }, { lanyard: 0x7c5cf0, glasses: true }); } },
    { id: "law", name: "法政財經專班學生", sub: "法律、政治與財經", color: "#c0392b", hot: "law-finance", sexes: true,
      make: function (v, sex) { return rsStudent(sex, sex === "f" ? 0x3a2a20 : 0x6b4a2b, { prop: "bag", longSleeve: true }, { tie: 0x7a1f2b, glasses: true }); } },
    { id: "data", name: "資料處理科學生", sub: "程式、資料與商務", color: "#16a085", hot: "data-processing", sexes: true,
      make: function (v, sex) { return rsStudent(sex, undefined, { prop: "bag" }, { headphones: 0x39c0b0, lanyard: 0x39c0b0 }); } },
    { id: "tourism", name: "餐管科學生", sub: "觀光事業科 & 餐飲管理科", color: "#e67e22", hot: "tourism-catering", sexes: true,
      make: function (v, sex) { return rsStudent(sex, undefined, {}, { chefHat: true, apron: 0xffffff }); } },
    { id: "sports", name: "體育班學生", sub: "跆拳道／田徑／自由車／足球", color: "#27ae60", hot: "sports", sexes: true,
      variants: [{ k: "tkd", l: "跆拳道" }, { k: "track", l: "田徑" }, { k: "cycle", l: "自由車" }, { k: "soccer", l: "足球" }],
      make: function (v, sex) {
        if (v === "tkd") return rsPe(sex, { topColor: 0xf4f4f4, bottomColor: 0xf4f4f4, longLegs: true, shorts: "none", noEmblem: true, shoeColor: 0xf6d3b3, longSleeve: false }, { belt: 0x1b1b1b });
        if (v === "track") return rsPe(sex, { topColor: 0xe0443a, noEmblem: true }, { headband: 0xffffff, bib: true });
        if (v === "cycle") return rsPe(sex, { topColor: 0xf2c230, bottomColor: 0x1b1b22, shorts: "piping", noEmblem: true }, { helmet: 0xe0443a });
        return rsPe(sex, { topColor: 0x1f9e55, sock: 0xffffff, noEmblem: true }, { ball: true });
      } },
    { id: "foreign", name: "外籍教師（英國）", sub: "英語教學，來自英國", color: "#8e44ad", hot: "bilingual", sexes: true,
      make: function (v, sex) {
        return rsTeacher(sex, { skin: 0xf9d9c4, hair: sex === "f" ? 0xe0b070 : 0xc8793a, hairStyle: sex === "f" ? "wavy" : "side", eye: 0x3a8a6a,
          topColor: sex === "f" ? 0x7a3b4a : 0x5d6b7c, bottomColor: 0x3b3f4a, skirtColor: 0x3b3f4a, scale: 1.5 },
          { tie: sex === "f" ? undefined : 0xa11b2b, mug: true, lanyard: 0x3b6ea5 });
      } },
    { id: "teacher", name: "一般教師", sub: "任課教師", color: "#34495e", hot: "events", sexes: true,
      make: function (v, sex) {
        return rsTeacher(sex, { hair: sex === "f" ? 0x3a2a20 : 0x2a2a30, hairStyle: sex === "f" ? "bob" : "side", skin: 0xf0cba8,
          topColor: sex === "f" ? 0xf6e7ef : 0xf2f2f4, bottomColor: 0x3a3f4a, skirtColor: 0x2f3a55, prop: "tablet", scale: 1.3 },
          { lanyard: 0x2aa198, glasses: true });
      } }
  ];

  // 角色的配件
  function roleDeco(m, o) {
    function add(geo, mat, parent, x, y, z, rx, ry, rz) {
      var me = new THREE.Mesh(geo, mat);
      me.position.set(x, y, z);
      if (rx) me.rotation.x = rx;
      if (ry) me.rotation.y = ry;
      if (rz) me.rotation.z = rz;
      parent.add(me);
      return me;
    }
    var root = m.root, head = m.head, dark = std(0x1b1b22, 0.5), white = std(0xffffff, 0.7);
    if (o.tie !== undefined) {
      add(new THREE.BoxGeometry(0.022, 0.08, 0.008), std(o.tie, 0.6), root, 0, 0.235, 0.083);
      add(new THREE.BoxGeometry(0.032, 0.026, 0.01), std(o.tie, 0.6), root, 0, 0.283, 0.084);
    }
    if (o.lanyard !== undefined) {
      add(new THREE.BoxGeometry(0.012, 0.13, 0.006), std(o.lanyard, 0.6), root, 0, 0.23, 0.081);
      add(new THREE.BoxGeometry(0.036, 0.046, 0.006), white, root, 0, 0.16, 0.082);
    }
    if (o.glasses) {
      [-1, 1].forEach(function (d) { add(new THREE.TorusGeometry(0.027, 0.0045, 6, 14), dark, head, d * 0.045, 0.016, 0.118); });
      add(new THREE.BoxGeometry(0.03, 0.005, 0.005), dark, head, 0, 0.02, 0.12);
    }
    if (o.chefHat) {
      add(new THREE.CylinderGeometry(0.095, 0.085, 0.07, 16), white, head, 0, 0.14, 0);
      var puff = add(new THREE.SphereGeometry(0.115, 14, 10), white, head, 0, 0.2, 0);
      puff.scale.set(1, 0.65, 1);
    }
    if (o.apron !== undefined) {
      add(new THREE.BoxGeometry(0.15, 0.15, 0.01), std(o.apron, 0.8), root, 0, 0.17, 0.083);
      add(new THREE.BoxGeometry(0.1, 0.03, 0.01), std(o.apron, 0.8), root, 0, 0.275, 0.083);
    }
    if (o.helmet !== undefined) {
      var hm = add(new THREE.SphereGeometry(0.135, 16, 10, 0, Math.PI * 2, 0, Math.PI * 0.56), std(o.helmet, 0.4), head, 0, 0.012, 0);
      hm.rotation.x = -0.1;
      [-0.05, 0, 0.05].forEach(function (vx) { add(new THREE.BoxGeometry(0.018, 0.004, 0.1), white, head, vx, 0.12, 0.0); });
    }
    if (o.headband !== undefined) {
      add(new THREE.TorusGeometry(0.124, 0.012, 6, 20), std(o.headband, 0.7), head, 0, 0.05, 0, Math.PI / 2);
    }
    if (o.belt !== undefined) {
      add(new THREE.BoxGeometry(0.175, 0.026, 0.125), std(o.belt, 0.6), root, 0, 0.19, 0);
    }
    if (o.bib) {
      add(new THREE.BoxGeometry(0.1, 0.1, 0.006), white, root, 0, 0.225, 0.082);
      add(new THREE.BoxGeometry(0.03, 0.05, 0.008), dark, root, 0, 0.225, 0.084);
    }
    if (o.ball) {
      var bl = add(new THREE.SphereGeometry(0.052, 12, 10), white, root, 0.135, 0.12, 0.07);
      [[0, 0.05, 0.02], [0.04, 0.0, 0.035], [-0.04, -0.02, 0.035], [0.0, -0.05, 0.02]].forEach(function (q) {
        add(new THREE.BoxGeometry(0.02, 0.02, 0.012), dark, bl, q[0], q[1], q[2]);
      });
    }
    if (o.book !== undefined) {
      add(new THREE.BoxGeometry(0.1, 0.014, 0.13), std(o.book, 0.7), root, -0.125, 0.14, 0.085, -0.5, 0, 0.1);
    }
    if (o.crossbag) {
      add(new THREE.BoxGeometry(0.014, 0.22, 0.006), dark, root, 0.0, 0.22, 0.083, 0, 0, -0.62);
      add(new THREE.BoxGeometry(0.085, 0.06, 0.04), dark, root, -0.095, 0.13, 0.06);
    }
    if (o.tumbler !== undefined) {
      add(new THREE.CylinderGeometry(0.021, 0.017, 0.065, 10), std(o.tumbler, 0.5), m.armR, 0, -0.15, 0.035);
    }
    if (o.mug) {
      add(new THREE.CylinderGeometry(0.022, 0.019, 0.045, 10), std(0xf4f4f4, 0.5), m.armR, 0, -0.16, 0.035);
    }
    if (o.headphones !== undefined) {
      add(new THREE.TorusGeometry(0.128, 0.008, 6, 18, Math.PI), std(o.headphones, 0.5), head, 0, 0.01, 0);
      [-1, 1].forEach(function (d) { add(new THREE.CylinderGeometry(0.035, 0.035, 0.03, 12), std(o.headphones, 0.5), head, d * 0.13, 0.01, 0, 0, 0, Math.PI / 2); });
    }
  }

  // ----- 碰撞：多邊形邊界、建築、圍籬、樹、車 -----
  var OBST = [];
  (function () {
    function R(x0, x1, z0, z1) { OBST.push({ t: "r", x0: x0, x1: x1, z0: z0, z1: z1 }); }
    R(-5.95, -0.95, 4.69, 5.75); R(0.95, 6.55, 4.69, 5.75);                    // 行政大樓兩翼
    R(-1.0, -0.62, 4.3, 6.3); R(0.62, 1.0, 4.3, 6.3);                          // 川堂圓體（中間留通道）
    R(-3.325, -1.875, 2.35, 4.45); R(-5.325, -3.875, 0.25, 3.35); R(-4.225, -2.775, -2.0, 0.2);   // 西側教學大樓
    OBST.push({ t: "o", cx: -2.6, cz: -3.2, hw: 1.7, hd: 1.1, rot: Math.PI * 0.18 });             // 圖資館
    R(2.55, 6.15, 0.05, 4.15);                                                   // 活動中心
    R(1.7, 6.9, -10.4, -6.0);                                                    // 黑森林
    R(1.67, 2.49, -14.6, -12.6);                                                 // 司令台
    R(2.65, 3.35, 6.4, 7.0);                                                     // 警衛室
    if (tennis) {
      var fx0 = tennis.cx - tennis.w / 2 - 0.12, fx1 = tennis.cx + tennis.w / 2 + 0.12;
      var fz0 = tennis.cz - tennis.d / 2 - 0.1, fz1 = tennis.cz + tennis.d / 2 + 0.1, gh = 0.17;
      R(fx0 - 0.04, fx1 + 0.04, fz0 - 0.04, fz0 + 0.04);
      R(fx0 - 0.04, fx0 + 0.04, fz0, fz1);
      R(fx1 - 0.04, fx1 + 0.04, fz0, fz1);
      R(fx0, tennis.gx - gh, fz1 - 0.04, fz1 + 0.04);
      R(tennis.gx + gh, fx1, fz1 - 0.04, fz1 + 0.04);
      R(tennis.cx - 0.03, tennis.cx + 0.03, tennis.cz - tennis.ph / 2 - 0.05, tennis.cz + tennis.ph / 2 + 0.05);
    }
    [-1.9, 1.9].forEach(function (ex) { [6.3, 6.9, 7.5].forEach(function (ez) { obstCircles.push([ex, ez, 0.3]); }); });
  })();
  var PLAYER_R = 0.13;
  function rectDist(lx, lz, hw, hd) {
    var ex = Math.max(Math.abs(lx) - hw, 0), ez = Math.max(Math.abs(lz) - hd, 0);
    return Math.hypot(ex, ez);
  }
  function blockedAt(x, z) {
    var r = PLAYER_R, i;
    if (!inside(x, z) || !inside(x + r, z) || !inside(x - r, z) || !inside(x, z + r) || !inside(x, z - r)) return true;
    for (i = 0; i < OBST.length; i++) {
      var o = OBST[i];
      if (o.t === "r") {
        if (x > o.x0 - r && x < o.x1 + r && z > o.z0 - r && z < o.z1 + r && rectDist(x - (o.x0 + o.x1) / 2, z - (o.z0 + o.z1) / 2, (o.x1 - o.x0) / 2, (o.z1 - o.z0) / 2) < r) return true;
      } else {
        var dx = x - o.cx, dz = z - o.cz, co = Math.cos(o.rot), si = Math.sin(o.rot);
        if (rectDist(dx * co - dz * si, dx * si + dz * co, o.hw, o.hd) < r) return true;
      }
    }
    for (i = 0; i < obstCircles.length; i++) {
      var c = obstCircles[i];
      if (Math.hypot(x - c[0], z - c[1]) < c[2] + r) return true;
    }
    for (i = 0; i < roleApi.cars.length; i++) {
      var cr = roleApi.cars[i];
      if (cr.state !== "out" && Math.hypot(x - cr.x, z - cr.z) < 0.24 + r) return true;
    }
    return false;
  }

  // ----- 狀態與介面 -----
  var role = null, player = null, playerYaw = Math.PI, playerPhase = 0, fpYaw = Math.PI, fpPitch = 0;
  var keys = {}, joy = { x: 0, y: 0, on: false }, savedSpeed = 1, savedCtl = null, nearHot = null, lastGoalShow = 0;
  var rpEls = {
    wrap: document.getElementById("rolepick"), note: document.getElementById("rp-note"), grid: document.getElementById("rp-grid"),
    opts: document.getElementById("rp-opts"), go: document.getElementById("rp-go"), skip: document.getElementById("rp-skip"), close: document.getElementById("rp-close")
  };
  var rhEls = {
    wrap: document.getElementById("rolehud"), dot: document.getElementById("rh-dot"), name: document.getElementById("rh-name"),
    goal: document.getElementById("rh-goal"), arrow: document.getElementById("rh-arrow"), near: document.getElementById("rh-near"),
    auto: document.getElementById("rh-auto"), view: document.getElementById("rh-view"), exit: document.getElementById("rh-exit")
  };
  var toastEl = document.getElementById("toast");
  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    setTimeout(function () { toastEl.classList.remove("show"); }, 2600);
  }
  function schoolOpen() { return timeOfDay >= 6.5 && timeOfDay < 16.0; }

  var pick = { role: null, v: null, sex: "m" };
  function renderPicker() {
    var open = schoolOpen() || !!pick.rush;
    rpEls.note.className = "rp-note" + (open ? "" : " warn");
    rpEls.note.textContent = open ? "選角色後，他會自己走完一天的行程；只有上學時間（6:30–16:00）可以選，放學後不能選。" : "現在是放學後（或還沒開校門），一般角色不能選，但可以用「自創島民」隨時進島。";
    rpEls.skip.hidden = open;
    rpEls.grid.innerHTML = "";
    ROLES.filter(function (r) { return !pick.rush || RUSH_OK.indexOf(r.id) >= 0; }).forEach(function (r) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "rp-role" + (pick.role === r ? " sel" : "");
      b.disabled = !open && !r.free;
      b.innerHTML = '<b><i style="background:' + r.color + '"></i>' + r.name + "</b><span>" + r.sub + "</span>";
      b.addEventListener("click", function () {
        pick.role = r; pick.v = r.variants ? r.variants[0].k : null; pick.sex = "m";
        renderPicker();
      });
      rpEls.grid.appendChild(b);
    });
    rpEls.opts.innerHTML = "";
    var r = pick.role;
    if (r) {
      if (r.note) { var nt = document.createElement("div"); nt.className = "rp-row"; nt.textContent = r.note; rpEls.opts.appendChild(nt); }
      function chipRow(label, list, cur, setter) {
        var row = document.createElement("div");
        row.className = "rp-row";
        row.innerHTML = "<em>" + label + "</em>";
        list.forEach(function (o) {
          var c = document.createElement("button");
          c.type = "button";
          c.className = "rp-chip" + (cur === o.k ? " sel" : "");
          c.textContent = o.l;
          c.addEventListener("click", function () { setter(o.k); renderPicker(); });
          row.appendChild(c);
        });
        rpEls.opts.appendChild(row);
      }
      if (r.variants) chipRow("項目", r.variants, pick.v, function (k) { pick.v = k; });
      if (r.sexes) chipRow("性別", ROLE_SEX, pick.sex, function (k) { pick.sex = k; });
      if (r.free) renderCreator(chipRow);
    }
    rpEls.go.disabled = !((open || (pick.role && pick.role.free)) && pick.role);
  }
  function openPicker(rushMode) {
    pick.rush = !!rushMode;
    pick.role = null;
    renderPicker();
    rpEls.wrap.hidden = false;
  }
  document.getElementById("btn-role").addEventListener("click", function () { openPicker(false); });
  rpEls.close.addEventListener("click", function () { rpEls.wrap.hidden = true; });
  rpEls.skip.addEventListener("click", function () { timeOfDay = 7.5; applyTime(timeOfDay); renderPicker(); });
  rpEls.go.addEventListener("click", function () { if (!pick.role) return; if (pick.rush) startRush(pick.role, pick.v, pick.sex); else if (schoolOpen() || pick.role.free) startRole(pick.role, pick.v, pick.sex); });

  function startRole(r, v, sex) {
    rpEls.wrap.hidden = true;
    closePanel();
    listEl.hidden = true;
    var cfg = r.make(v, sex);
    player = roleApi.makeStudent(cfg.c);
    roleDeco(player, cfg.deco);
    artApply(player.root);
    role = r;
    roleOpt = { v: v || "", sex: sex || "m" };
    roleMode = true; roleFP = false;
    document.body.classList.add("role-mode");
    gsap.killTweensOf(controls.target);
    gsap.killTweensOf(camera.position);
    playerYaw = Math.PI;
    var px = -1.2, pz = 7.7;
    player.root.position.set(px, 0.08, pz);
    player.root.rotation.y = playerYaw;
    playerPos = { x: px, z: pz };
    roleApi.students.forEach(function (a) { if (r.id === "principal" && a.tag === "principal") a.suppress = true; });
    initAuto(r, v, sex);
    savedCtl = { minD: controls.minDistance, maxD: controls.maxDistance, minP: controls.minPolarAngle };
    controls.minDistance = 1.1; controls.maxDistance = 7; controls.minPolarAngle = 0.25;
    controls.target.set(px, 0.45, pz);
    camera.position.set(px, 1.2, pz + 2.6);
    rhEls.dot.style.background = r.color;
    rhEls.name.textContent = r.name + (v ? "（" + (r.variants.filter(function (o) { return o.k === v; })[0].l) + "）" : "");
    rhEls.view.textContent = "第一人稱";
    rhEls.auto.textContent = "自己操控";
    if (r.free) { rhEls.name.textContent = avNick(); rhEls.auto.hidden = true; }
    rhEls.wrap.hidden = false;
    document.getElementById("rolekeys").hidden = false;
    document.getElementById("joy").hidden = false;
    toast("跟著他過一天！想自己走可按「自己操控」");
  }
  function endRole(msg) {
    if (!role) return;
    if (rush) { rush = null; if (rushSaved) { timeSpeed = rushSaved; timeEls.speed.textContent = rushSaved + "×"; rushSaved = null; } rhEls.auto.hidden = false; }
    scene.remove(player.root);
    rhEls.auto.hidden = false;
    roleApi.students.forEach(function (a) { a.suppress = false; });
    role = null; player = null; playerPos = null; roleMode = false; roleFP = false; nearHot = null;
    document.body.classList.remove("role-mode");
    rhEls.wrap.hidden = true;
    document.getElementById("rolekeys").hidden = true;
    document.getElementById("joy").hidden = true;
    controls.minDistance = savedCtl.minD; controls.maxDistance = savedCtl.maxD; controls.minPolarAngle = savedCtl.minP;
    controls.enabled = true;
    restoreCar();
    showOverview();
    if (msg) toast(msg);
  }
  rhEls.exit.addEventListener("click", function () { endRole(); });
  rhEls.view.addEventListener("click", function () {
    roleFP = !roleFP;
    rhEls.view.textContent = roleFP ? "第三人稱" : "第一人稱";
    player.root.visible = !roleFP;
    controls.enabled = !roleFP;
    if (roleFP) {
      fpYaw = playerYaw; fpPitch = 0;
    } else {
      var dx = Math.sin(playerYaw), dz = Math.cos(playerYaw);
      controls.target.set(playerPos.x, 0.45, playerPos.z);
      camera.position.set(playerPos.x - dx * 2.4, 1.2, playerPos.z - dz * 2.4);
    }
  });
  rhEls.near.addEventListener("click", function () { if (nearHot) openHotspot(nearHot.data.id); });

  // 輸入
  window.addEventListener("keydown", function (e) {
    if (!roleMode) return;
    keys[e.code] = true;
    if (e.code.indexOf("Arrow") === 0 || e.code === "Space") e.preventDefault();
  });
  window.addEventListener("keyup", function (e) { keys[e.code] = false; });
  (function () {
    var joyEl = document.getElementById("joy"), knob = document.getElementById("joy-knob"), act = false;
    function setFrom(ev) {
      var r = joyEl.getBoundingClientRect(), cx = r.left + r.width / 2, cy = r.top + r.height / 2;
      var dx = ev.clientX - cx, dy = ev.clientY - cy, m = Math.hypot(dx, dy), mx = r.width / 2;
      if (m > mx) { dx = dx / m * mx; dy = dy / m * mx; }
      joy.x = dx / mx; joy.y = dy / mx;
      knob.style.transform = "translate(" + dx + "px," + dy + "px)";
    }
    joyEl.addEventListener("pointerdown", function (ev) { act = true; joyEl.setPointerCapture(ev.pointerId); setFrom(ev); });
    joyEl.addEventListener("pointermove", function (ev) { if (act) setFrom(ev); });
    function stop() { act = false; joy.x = 0; joy.y = 0; knob.style.transform = ""; }
    joyEl.addEventListener("pointerup", stop);
    joyEl.addEventListener("pointercancel", stop);
  })();
  // 第一人稱：拖曳轉頭
  (function () {
    var drag = false, lx = 0, ly = 0;
    canvas.addEventListener("pointerdown", function (ev) { if (roleMode && roleFP) { drag = true; lx = ev.clientX; ly = ev.clientY; } });
    window.addEventListener("pointermove", function (ev) {
      if (!drag) return;
      fpYaw -= (ev.clientX - lx) * 0.006;
      fpPitch = Math.max(-0.7, Math.min(0.7, fpPitch - (ev.clientY - ly) * 0.004));
      lx = ev.clientX; ly = ev.clientY;
    });
    window.addEventListener("pointerup", function () { drag = false; });
  })();

  // ---------- 自動行程 ----------
  var AG = null, PL = {}, autoMode = true, carSave = null, bikeG = null, ballM = null;
  var NAMES_PATROL = ["A335", "E335", "E005", "CW", "TG", "LIB", "TRK", "G3", "LP2", "A_305", "A005"];
  function rr(a, b) { return a + Math.random() * (b - a); }
  function pickOf(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
  function fmtH(h) { var hh = Math.floor(h), mm = Math.floor((h - hh) * 60); return (hh < 10 ? "0" : "") + hh + ":" + (mm < 10 ? "0" : "") + mm; }
  function mkPlaces() {
    var hxs = courtHoops.map(function (h) { return h.x; });
    var ccx = (Math.min.apply(null, hxs) + Math.max.apply(null, hxs)) / 2;
    PL = {
      admin: { name: "行政大樓", node: "A335", via: [[0, 4.2]], door: [0, 4.62], inside: true, dur: [10, 25] },
      bilingual: { name: "雙語實驗班", node: "LP2", via: [], door: [-2.75, -0.95], inside: true, dur: [40, 70] },
      ai: { name: "AI半導體班教室", node: "E335", via: [[2.4, 4.4], [5.3, 4.4]], door: [5.3, 4.62], inside: true, dur: [40, 70] },
      data: { name: "資料處理科教室", node: "A335", via: [[-1.2, 4.0], [-1.2, 4.58]], door: [-2.8, 4.58], inside: true, dur: [40, 70] },
      tourism: { name: "餐管科教室", node: "A335", via: [[-1.2, 4.0], [-1.2, 4.58]], door: [-4.6, 4.58], inside: true, dur: [40, 70] },
      lib: { name: "圖書館", node: "LIB", via: [], door: [-2.16, -2.04], inside: true, dur: [40, 70] },
      gym: { name: "活動中心（體育課）", node: "TG", via: [], door: [4.0, -0.25], inside: true, dur: [30, 50] },
      tennis: { name: "網球場（體育課）", node: "TG", via: [[tennis.gx, tennis.gz + 0.3], [tennis.gx, tennis.gz - 0.25]], act: "tennis", dur: [30, 45] },
      court: { name: "光電球場（體育課）", node: "CN", via: [], act: "hoops", dur: [30, 45], ccx: ccx },
      greet: { name: "校門口迎接同學", node: "A75", via: [[-0.8, 6.8]], act: "greet", dur: [0, 0] },
      trk_run: { name: "田徑場（跑步）", node: "TRK", via: [[2.6, -13.6]], act: "run", dur: [0, 0] },
      trk_cycle: { name: "田徑場（自由車）", node: "TRK", via: [[2.6, -13.6]], act: "cycle", dur: [0, 0] },
      trk_soccer: { name: "田徑場（足球）", node: "TRK", via: [[3.4, -13.6], [4.85, -13.6]], act: "soccer", dur: [0, 0] },
      trk_tkd: { name: "司令台前（跆拳道）", node: "TRK", via: [[2.95, -13.3]], act: "tkd", dur: [0, 0] }
    };
  }
  var SCHED = {
    principal: { kind: "principal", car: true, arr: 7.0 },
    director: { kind: "teacher", car: true, arr: 7.5, dir: true },
    bilingual: { kind: "student", cls: "bilingual" }, ai: { kind: "student", cls: "ai" }, law: { kind: "student", cls: "lib" },
    data: { kind: "student", cls: "data" }, tourism: { kind: "student", cls: "tourism" }, sports: { kind: "student", sports: true },
    foreign: { kind: "teacher", car: true }, teacher: { kind: "teacher", car: true }
  };
  function initAuto(r, v, sex) {
    var A = roleApi;
    if (r.free) {
      mkPlaces();
      AG = { S: {}, x: -1.2, z: 7.7, pts: [], seg: 0, d: 0, sp: 0.8, hx: 0, hz: 1, phase: 0, place: null, until: 0, state: "done", leaving: false, act: null, side: 1 };
      autoMode = false; carSave = null;
      player.root.visible = true;
      focusX = -1.2; focusZ = 7.7;
      playerPos = { x: -1.2, z: 7.7 };
      return;
    }
    mkPlaces();
    var S = {}, base = SCHED[r.id];
    for (var k in base) S[k] = base[k];
    if (S.arr === undefined) S.arr = rr(7.75, 8.0);
    S.sv = v;
    AG = { S: S, x: 0, z: 9, pts: [], seg: 0, d: 0, sp: 0.8, hx: 0, hz: 1, phase: 0, place: null, until: 0, state: "pre", leaving: false, act: null, side: Math.random() < 0.5 ? -1 : 1 };
    autoMode = true;
    var car = A.cars[0];
    carSave = { tIn: car.tIn, tOut: car.tOut };
    if (S.car) { A.carHide(car); car.tIn = S.arr; car.tOut = 99; }
    if (timeOfDay >= S.arr) {
      if (S.car) AG.state = "drive";
      else if (timeOfDay > S.arr + 0.3) { var nd = pickOf(A.DESTS); spawnAt(A.NPOS[nd][0], A.NPOS[nd][1]); planNext(); }
      else spawnEnter();
    }
    player.root.visible = false;
    focusX = 0; focusZ = 8.8;
    playerPos = null;
  }
  function restoreCar() {
    if (carSave) { var car = roleApi.cars[0]; car.tIn = carSave.tIn; car.tOut = carSave.tOut; carSave = null; }
    if (bikeG) bikeG.visible = false;
    if (ballM) ballM.visible = false;
  }
  var focusX = 0, focusZ = 8.8;
  function spawnAt(x, z) { AG.x = x; AG.z = z; AG.state = "wait"; AG.until = 0; player.root.visible = !roleFP; }
  function spawnEnter() {
    var A = roleApi, S = AG.S, xg = -1.2;
    AG.x = AG.side * 7.0; AG.z = 9.2;
    player.root.visible = !roleFP;
    var first = firstKey();
    routeTo(first, [[AG.x, AG.z], [xg, 9.2], [xg, 8.0]], true);
  }
  function firstKey() {
    var S = AG.S;
    if (S.kind === "principal") return "greet";
    if (S.kind === "teacher") return "admin";
    return pickOf(["admin", S.sports ? pickOf(["gym", "tennis", "court"]) : S.cls]);
  }
  function patrolPlace() {
    var nm = pickOf(NAMES_PATROL), A = roleApi, inside = (nm === "TG" || nm === "LIB");
    PL.patrol = { name: "校園巡視", node: nm, via: [], door: inside ? [A.NPOS[A.NID[nm]][0], A.NPOS[A.NID[nm]][1]] : null, inside: inside, dur: inside ? [5, 15] : [2, 6] };
    return "patrol";
  }
  function pickKey() {
    var S = AG.S, hr = timeOfDay, last = AG.place, c, i;
    if (S.kind === "principal") return hr < 8 ? "greet" : (Math.random() < 0.2 ? "admin" : patrolPlace());
    if (S.kind === "teacher") {
      if (S.dir) { var q = Math.random(); return q < 0.3 ? "bilingual" : q < 0.45 ? "admin" : patrolPlace(); }
      c = Math.random() < 0.2 ? ["admin"] : ["bilingual", "ai", "lib", "data", "tourism"];
      c = c.filter(function (k) { return k !== last; });
      return c.length ? pickOf(c) : "bilingual";
    }
    if (S.sports && hr >= 12) return { tkd: "trk_tkd", track: "trk_run", cycle: "trk_cycle", soccer: "trk_soccer" }[S.sv];
    var sp = pickOf(["gym", "tennis", "court"]);
    c = ["admin", S.sports ? sp : S.cls, sp].filter(function (k) { return k !== last; });
    if (!S.sports) c = ["admin", S.cls, sp].filter(function (k) { return k !== last; });
    else c = ["admin", sp].filter(function (k) { return k !== last; });
    return pickOf(c);
  }
  function routeTo(key, prefix, fromGate) {
    var A = roleApi, P = PL[key], nd = A.NID[P.node], pts;
    if (key === "court") {
      var hp = pickOf(courtHoops);
      AG.hoop = hp;
      P.via = [[P.ccx, -5.0], [hp.x + (hp.c % 2 ? -0.25 : 0.25), hp.z - hp.side * 0.62]];
    }
    if (prefix) pts = prefix.concat(A.nodePts(A.nodeRoute(A.NID.A75, nd)));
    else pts = [[AG.x, AG.z]].concat(A.nodePts(A.nodeRoute(A.nearestNode(AG.x, AG.z), nd)));
    P.via.forEach(function (q) { pts.push([q[0], q[1]]); });
    if (P.door) pts.push([P.door[0], P.door[1]]);
    AG.pts = pts; AG.seg = 0; AG.d = 0; AG.place = key; AG.state = "walk"; AG.sp = (key.indexOf("trk_") === 0) ? 1.0 : 0.8;
    AG.dest = pts[pts.length - 1];
    AG.cw = 0; AG.cwt = 0;
  }
  function planNext() { routeTo(pickKey(), null); }
  function leaveTarget() { var S = AG.S; return S.car ? roleApi.cars[0].slot : { x: -0.5, z: 8.4 }; }
  function startLeave() {
    var A = roleApi, S = AG.S, hr = timeOfDay, pts;
    AG.leaving = true; AG.act = null;
    if (bikeG) bikeG.visible = false;
    if (ballM) ballM.visible = false;
    player.root.visible = !roleFP; player.root.position.y = 0.08;
    pts = [[AG.x, AG.z]].concat(A.nodePts(A.nodeRoute(A.nearestNode(AG.x, AG.z), A.NID.A75)));
    if (S.car) { var sl = A.cars[0].slot; pts.push([sl.x, sl.z]); AG.state = "toCar"; }
    else { pts.push([-1.2, 8.0], [-1.2, 9.2], [AG.side * 7.0, 9.2]); AG.state = "exitWalk"; }
    var len = 0, q;
    for (q = 0; q < pts.length - 1; q++) len += Math.hypot(pts[q + 1][0] - pts[q][0], pts[q + 1][1] - pts[q][1]);
    var avail = Math.max(0.05, 17.02 - hr) / (24 / DAY_SECONDS);
    AG.sp = Math.min(3.0, Math.max(0.8, len / avail * 1.05));
    AG.pts = pts; AG.seg = 0; AG.d = 0; AG.dest = pts[pts.length - 1]; AG.place = "_leave";
  }
  function arriveAt() {
    var P = PL[AG.place], hr = timeOfDay;
    if (!P) { planNext(); return; }
    if (P.inside) { AG.state = "inside"; player.root.visible = false; AG.until = hr + rr(P.dur[0], P.dur[1]) / 60; return; }
    if (P.act) { AG.state = P.act === "greet" ? "greet" : "act"; AG.act = P.act; AG.until = P.act === "greet" ? 8.0 : (P.dur[1] ? hr + rr(P.dur[0], P.dur[1]) / 60 : 99); actInit(); return; }
    AG.state = "wait"; AG.until = hr + rr(P.dur[0], P.dur[1]) / 60;
  }
  function lazyProps() {
    if (!bikeG) {
      bikeG = new THREE.Group();
      var wm = std(0x1b1b22, 0.6), fm = std(0xd23a3a, 0.5);
      [-0.15, 0.15].forEach(function (zz, i) {
        var w = new THREE.Mesh(new THREE.TorusGeometry(0.07, 0.012, 6, 16), wm);
        w.rotation.y = Math.PI / 2; w.position.set(0, 0.07, zz); w.name = "wheel"; bikeG.add(w);
      });
      var fr = new THREE.Mesh(new THREE.BoxGeometry(0.014, 0.014, 0.32), fm); fr.position.set(0, 0.13, 0); bikeG.add(fr);
      var fk = new THREE.Mesh(new THREE.BoxGeometry(0.014, 0.1, 0.014), fm); fk.position.set(0, 0.12, 0.13); bikeG.add(fk);
      var bar = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.012, 0.012), wm); bar.position.set(0, 0.2, 0.14); bikeG.add(bar);
      bikeG.visible = false; scene.add(bikeG);
    }
    if (!ballM) { ballM = new THREE.Mesh(new THREE.SphereGeometry(0.04, 12, 10), std(0xffffff, 0.6)); ballM.visible = false; scene.add(ballM); }
  }
  function loopPts(r, nearX, nearZ) {
    var pts = [], i, n = 10, a, cx = 4.85, cz = -13.6, half = 1.45;
    for (i = 0; i <= n; i++) { a = Math.PI * i / n; pts.push([cx + r * Math.cos(a), cz + half + r * Math.sin(a)]); }
    for (i = 0; i <= n; i++) { a = Math.PI + Math.PI * i / n; pts.push([cx + r * Math.cos(a), cz - half + r * Math.sin(a)]); }
    var bi = 0, bd = 1e9;
    pts.forEach(function (q, k) { var dd = Math.hypot(q[0] - nearX, q[1] - nearZ); if (dd < bd) { bd = dd; bi = k; } });
    var out = pts.slice(bi).concat(pts.slice(0, bi));
    out.push(out[0]);
    return out;
  }
  function actInit() {
    var a = AG.act;
    lazyProps();
    AG.ap = 0; AG.tgt = null;
    if (a === "run" || a === "cycle") {
      AG.loopR = a === "run" ? rr(1.65, 1.85) : 1.95;
      AG.pts = loopPts(AG.loopR, AG.x, AG.z); AG.seg = 0; AG.d = 0; AG.sp = a === "run" ? 1.0 : 1.8;
      if (a === "cycle") bikeG.visible = true;
    }
    if (a === "soccer") ballM.visible = true;
    if (a === "hoops") { ballM.material = std(0xe8742a, 0.65); ballM.visible = true; }
    else if (a === "soccer") ballM.material = std(0xffffff, 0.6);
  }
  function wanderTo(bx0, bx1, bz0, bz1, spd, sdt) {
    if (!AG.tgt || Math.hypot(AG.tgt[0] - AG.x, AG.tgt[1] - AG.z) < 0.05) {
      if (AG.tgt && AG.rest === undefined) { AG.rest = rr(0.8, 2.0); }
      if (AG.rest !== undefined) { AG.rest -= sdt; if (AG.rest > 0) return false; AG.rest = undefined; }
      AG.tgt = [rr(bx0, bx1), rr(bz0, bz1)];
    }
    var dx = AG.tgt[0] - AG.x, dz = AG.tgt[1] - AG.z, d = Math.hypot(dx, dz), st = Math.min(d, spd * sdt);
    if (d > 1e-5) { AG.x += dx / d * st; AG.z += dz / d * st; AG.hx = dx / d; AG.hz = dz / d; }
    return d > 0.05;
  }
  var animInfo = { moving: false, amp: 0.6 };
  function actUpdate(sdt, now) {
    var a = AG.act, m = player, ph, hp;
    animInfo.moving = false; animInfo.amp = 0.6;
    if (a === "run" || a === "cycle") {
      var r = roleApi.crowdMove(AG, sdt);
      if (r.done) { AG.pts = loopPts(AG.loopR, AG.x, AG.z); AG.seg = 0; AG.d = 0; }
      else { AG.hx = r.dx; AG.hz = r.dz; }
      animInfo.moving = true; animInfo.amp = 0.95;
      if (a === "cycle") {
        AG.phase += sdt * 14;
        var yaw = Math.atan2(AG.hx, AG.hz);
        bikeG.position.set(AG.x, 0.07, AG.z); bikeG.rotation.y = yaw;
        bikeG.children.forEach(function (c) { if (c.name === "wheel") c.rotation.x += sdt * 12; });
        animInfo.moving = false;
        m.root.position.y = 0.17;
        var sw = Math.sin(AG.phase) * 0.9;
        m.legL.rotation.x = -0.5 + sw; m.legR.rotation.x = -0.5 - sw;
        m.armL.rotation.x = -1.0; m.armR.rotation.x = -1.0;
        animInfo.custom = true;
      }
    } else if (a === "soccer") {
      var mv = wanderTo(3.9, 5.8, -14.4, -12.8, 0.9, sdt);
      animInfo.moving = mv; animInfo.amp = 0.8;
      var hh = Math.sqrt(AG.hx * AG.hx + AG.hz * AG.hz) || 1;
      ballM.position.set(AG.x + AG.hx / hh * 0.17, 0.075 + Math.abs(Math.sin(AG.phase * 0.5)) * 0.015, AG.z + AG.hz / hh * 0.17);
    } else if (a === "tkd") {
      AG.ap += sdt * 2.0;
      var cyc = Math.floor(AG.ap / Math.PI) % 2, kk = Math.sin(AG.ap);
      AG.hx = 1; AG.hz = 0;
      m.legL.rotation.x = 0; m.legR.rotation.x = 0;
      (cyc ? m.legL : m.legR).rotation.x = -1.45 * Math.max(0, kk);
      m.armL.rotation.x = -0.9; m.armR.rotation.x = -0.9;
      animInfo.custom = true;
    } else if (a === "tennis") {
      var half = AG.side < 0 ? [-1, -0.2] : [0.2, 1];
      var x0 = tennis.cx + (half[0] === -1 ? -tennis.w / 2 + 0.15 : 0.2), x1 = tennis.cx + (half[1] === 1 ? tennis.w / 2 - 0.15 : -0.2);
      var mv2 = wanderTo(x0, x1, tennis.cz - tennis.d / 2 + 0.15, tennis.cz + tennis.d / 2 - 0.15, 0.9, sdt);
      animInfo.moving = mv2; animInfo.amp = 0.8;
      if (!mv2) { AG.ap += sdt * 5; m.armR.rotation.x = -1.4 * Math.max(0, Math.sin(AG.ap)); m.armL.rotation.x = 0; AG.hx = AG.side < 0 ? 1 : -1; AG.hz = 0; animInfo.custom = false; animInfo.armsSet = true; }
    } else if (a === "hoops") {
      hp = AG.hoop; AG.ap += sdt * 0.9;
      var cph = AG.ap % 1, face = Math.atan2(hp.x - AG.x, hp.z - AG.z);
      AG.hx = Math.sin(face); AG.hz = Math.cos(face);
      var hand = [AG.x + AG.hx * 0.12, 0.14, AG.z + AG.hz * 0.12], tgt = [hp.x, 0.8, hp.z - hp.side * 0.08], bp;
      m.armL.rotation.x = 0; m.armR.rotation.x = 0;
      if (cph < 0.35) { bp = [hand[0], 0.12 + Math.abs(Math.sin(cph * 18)) * 0.07, hand[2]]; m.armR.rotation.x = -0.7; }
      else if (cph < 0.5) { bp = [hand[0], 0.3 + (cph - 0.35) * 2, hand[2]]; m.armR.rotation.x = -2.5; m.armL.rotation.x = -2.2; m.root.position.y = 0.08 + Math.sin((cph - 0.35) / 0.15 * Math.PI) * 0.05; }
      else if (cph < 0.8) { var u = (cph - 0.5) / 0.3; bp = [hand[0] + (tgt[0] - hand[0]) * u, 0.3 + (tgt[1] - 0.3) * u + Math.sin(u * Math.PI) * 0.25, hand[2] + (tgt[2] - hand[2]) * u]; m.armR.rotation.x = -2.5; m.armL.rotation.x = -2.2; }
      else { var u2 = (cph - 0.8) / 0.2; bp = [tgt[0] + (hand[0] - tgt[0]) * u2, tgt[1] + (0.12 - tgt[1]) * u2, tgt[2] + (hand[2] - tgt[2]) * u2]; }
      ballM.position.set(bp[0], bp[1], bp[2]);
      animInfo.armsSet = true; animInfo.custom = true;
      m.legL.rotation.x = 0; m.legR.rotation.x = 0;
    } else if (a === "greet") {
      AG.hx = 0; AG.hz = 1;
      m.armR.rotation.x = -2.2 + Math.sin(now * 0.006) * 0.25; m.armL.rotation.x = 0;
      animInfo.armsSet = true;
    }
  }

  function manualToggle() {
    if (!AG) return;
    if (autoMode) {
      if (["pre", "drive", "ride", "toCar", "exitWalk", "done"].indexOf(AG.state) >= 0 || AG.leaving) { toast("現在不能自己操控（車上或準備離校中）"); return; }
      autoMode = false;
      if (bikeG) bikeG.visible = false;
      if (ballM) ballM.visible = false;
      player.root.visible = !roleFP; player.root.position.y = 0.08;
      playerPos = { x: AG.x, z: AG.z };
      rhEls.auto.textContent = "回到行程";
    } else {
      autoMode = true; AG.x = playerPos.x; AG.z = playerPos.z; AG.leaving = false; AG.act = null; AG.tgt = null;
      rhEls.auto.textContent = "自己操控";
      planNext();
    }
  }
  rhEls.auto.addEventListener("click", manualToggle);

  function updateRole(dt, now) {
    if (!role) return;
    var hr = timeOfDay;
    if (!role.free && (hr >= 18.0 || hr < 6.0)) { endRole("校門關了，今天的行程結束。"); return; }
    var sdt = timePlaying ? Math.min(dt, 0.1) * timeSpeed : 0;
    dt = Math.min(dt, 0.1);
    var m = player, A = roleApi, car = A.cars[0], S = AG.S, status = "", moving = false, amp = 0.6, vis = true;
    var px, pz, fx, fz, rx, rz, wasManualMoving = false;
    animInfo.custom = false; animInfo.armsSet = false;

    // 相機前方向量
    if (roleFP) { fx = Math.sin(fpYaw); fz = Math.cos(fpYaw); }
    else { fx = controls.target.x - camera.position.x; fz = controls.target.z - camera.position.z; var fl = Math.hypot(fx, fz) || 1; fx /= fl; fz /= fl; }
    rx = -fz; rz = fx;

    if (!autoMode) {
      // ---- 手動操控 ----
      px = playerPos.x; pz = playerPos.z;
      var ix = (keys.KeyD ? 1 : 0) + (keys.ArrowRight && !roleFP ? 1 : 0) - (keys.KeyA ? 1 : 0) - (keys.ArrowLeft && !roleFP ? 1 : 0) + joy.x;
      var iy = (keys.KeyS ? 1 : 0) + (keys.ArrowDown ? 1 : 0) - (keys.KeyW ? 1 : 0) - (keys.ArrowUp ? 1 : 0) + joy.y;
      if (roleFP) { if (keys.ArrowLeft) fpYaw += dt * 1.8; if (keys.ArrowRight) fpYaw -= dt * 1.8; }
      var mag = Math.hypot(ix, iy);
      if (mag > 1) { ix /= mag; iy /= mag; mag = 1; }
      moving = mag > 0.08;
      var sprint = keys.ShiftLeft || keys.ShiftRight || Math.hypot(joy.x, joy.y) > 0.9;
      if (moving) {
        var spd = (sprint ? 2.0 : 1.2) * mag;
        var mx = (rx * ix - fx * iy) * spd * dt, mz = (rz * ix - fz * iy) * spd * dt;
        if (!blockedAt(px + mx, pz)) px += mx;
        if (!blockedAt(px, pz + mz)) pz += mz;
        playerPhase += dt * spd * 9;
        if (!roleFP) {
          var tg = Math.atan2(mx, mz), df = Math.atan2(Math.sin(tg - playerYaw), Math.cos(tg - playerYaw));
          playerYaw += df * Math.min(1, dt * 10);
        } else playerYaw = fpYaw;
        amp = sprint ? 0.9 : 0.6;
      }
      if (rush) { var hit = rushStep(dt, px, pz); if (hit) { px = hit[0]; pz = hit[1]; } }
      playerPos.x = px; playerPos.z = pz; AG.x = px; AG.z = pz;
      status = rush ? rushStatus() : role.free ? onlineStatus() : "手動操控中（按「回到行程」讓他自己走）";
      AG.dest = null;
      if (hr >= 17.5 && !role.free) { endRole("下課了，今天的行程結束。"); return; }
    } else {
      // ---- 自動行程 ----
      if (keys.KeyW || keys.KeyA || keys.KeyS || keys.KeyD || Math.hypot(joy.x, joy.y) > 0.25) manualToggle();
      // 到時間離校
      if (!AG.leaving && ["walk", "inside", "act", "wait", "greet"].indexOf(AG.state) >= 0) {
        var lt = leaveTarget(), est = Math.hypot(AG.x - lt.x, AG.z - lt.z) * 1.5 / 0.9 * (24 / DAY_SECONDS);
        if (hr + est + 0.02 >= 17.0 || hr >= 16.7) { if (AG.state === "inside") { AG.x = PL[AG.place].door[0]; AG.z = PL[AG.place].door[1]; } startLeave(); }
      }
      if (S.sports && hr >= 12 && !AG.leaving && !AG.trk && ["walk", "inside", "act", "wait"].indexOf(AG.state) >= 0 && (AG.place || "").indexOf("trk_") !== 0) {
        if (AG.state === "inside") { AG.x = PL[AG.place].door[0]; AG.z = PL[AG.place].door[1]; player.root.visible = !roleFP; }
        AG.act = null; if (bikeG) bikeG.visible = false; if (ballM) ballM.visible = false; player.root.position.y = 0.08;
        AG.trk = true; planNext();
      }
      var st = AG.state;
      if (st === "pre") {
        vis = false; status = "等待 " + fmtH(S.arr) + " 到校（" + (S.car ? "開車" : "步行") + "）";
        if (hr >= S.arr) { if (S.car) AG.state = "drive"; else spawnEnter(); }
      } else if (st === "drive") {
        vis = false; status = "開車進入校園";
        if (car.state === "parked") { spawnAt(car.slot.x + 0.2, car.slot.z); if (S.kind === "principal" && hr < 8) { routeTo("greet", null); } else if (S.kind === "teacher" && S.dir) { routeTo("admin", null); } else planNext(); }
      } else if (st === "walk" || st === "toCar" || st === "exitWalk") {
        var rres = A.crowdMove(AG, A.pedHolds(AG, AG.x, AG.z, sdt) ? 0 : sdt);
        if (!rres.done) { AG.hx = rres.dx; AG.hz = rres.dz; moving = true; }
        else if (st === "walk") arriveAt();
        else if (st === "toCar") { AG.state = "ride"; player.root.visible = false; car.tOut = Math.max(17.0, hr - 0.001); }
        else { AG.state = "done"; player.root.visible = false; }
        status = st === "walk" ? "前往：" + (PL[AG.place] ? PL[AG.place].name : "") : st === "toCar" ? "走向停車位，準備開車回家" : "走出校門，放學回家";
        amp = AG.sp > 1.2 ? 0.9 : 0.6;
      } else if (st === "inside") {
        vis = false; status = "在「" + PL[AG.place].name + "」（到 " + fmtH(AG.until) + "）";
        if (hr >= AG.until) { var dr = PL[AG.place].door; AG.x = dr[0]; AG.z = dr[1]; player.root.visible = !roleFP; planNext(); }
      } else if (st === "wait") {
        status = "在" + (PL[AG.place] ? PL[AG.place].name : "校園") + "停留";
        if (hr >= AG.until) planNext();
      } else if (st === "greet") {
        status = "在校門口迎接同學（到 08:00）"; actUpdate(sdt, now);
        if (hr >= 8.0) { AG.act = null; planNext(); }
      } else if (st === "act") {
        status = "在" + PL[AG.place].name; actUpdate(sdt, now);
        moving = animInfo.moving; amp = animInfo.amp;
        if (hr >= AG.until) { AG.act = null; if (bikeG) bikeG.visible = false; if (ballM) ballM.visible = false; m.root.position.y = 0.08; planNext(); }
      } else if (st === "ride") {
        vis = false; status = hr < 17 ? "在車上等 17:00 離校" : "開車離開校園";
        if (car.state === "out" && hr >= 16.9) { endRole("開車離開校園了，今天的行程結束！"); return; }
      } else if (st === "done") { endRole("放學回家了，今天的行程結束！"); return; }
      px = AG.x; pz = AG.z;
      if (moving || AG.act) { if (AG.hx || AG.hz) playerYaw = roleFP ? fpYaw : (function () { var tg = Math.atan2(AG.hx, AG.hz), df = Math.atan2(Math.sin(tg - playerYaw), Math.cos(tg - playerYaw)); return playerYaw + df * Math.min(1, dt * 8); })(); }
      if (moving) AG.phase += Math.min(sdt * AG.sp * 12, 0.6);
      if (roleFP && AG.hx !== undefined && moving) fpYaw = Math.atan2(AG.hx, AG.hz);
      playerPos = (vis && player.root.visible) ? { x: px, z: pz } : null;
      if (!vis) player.root.visible = false;
      else if (st !== "inside" && st !== "done" && st !== "ride") player.root.visible = !roleFP;
    }

    // ---- 人物動作 ----
    var ph = autoMode ? AG.phase : playerPhase;
    if (!animInfo.custom || !autoMode) {
      if (moving) {
        var sw = Math.sin(ph) * amp;
        m.legL.rotation.x = sw; m.legR.rotation.x = -sw;
        if (!animInfo.armsSet || !autoMode) { m.armL.rotation.x = -sw * 0.85; m.armR.rotation.x = sw * 0.85; }
        m.root.position.y = 0.08 + Math.abs(Math.sin(ph)) * 0.02;
      } else {
        m.legL.rotation.x *= 0.8; m.legR.rotation.x *= 0.8;
        if (!animInfo.armsSet || !autoMode) { m.armL.rotation.x *= 0.8; m.armR.rotation.x *= 0.8; }
        m.head.rotation.y = Math.sin(now * 0.0008) * 0.25;
        if (!animInfo.armsSet || !autoMode) m.root.position.y = 0.08;
      }
    }
    if (autoMode && (!AG.act || AG.act !== "cycle") && !(animInfo.custom && AG.act === "hoops")) { if (m.root.position.y > 0.12) m.root.position.y = 0.08; }
    m.root.position.x = px; m.root.position.z = pz;
    m.root.rotation.y = playerYaw;

    // ---- 相機焦點 ----
    var cx2 = px, cz2 = pz;
    if (autoMode) {
      if (AG.state === "drive" || AG.state === "ride") { cx2 = car.x; cz2 = car.z; if (car.state === "out") { cx2 = 0; cz2 = 8.8; } }
      else if (AG.state === "pre") { cx2 = 0; cz2 = 8.8; }
      else if (AG.state === "inside") { cx2 = AG.x; cz2 = AG.z; }
    }
    if (roleFP) {
      var fpOn = player.root.visible || !autoMode;
      camera.position.set(cx2, 0.62, cz2);
      camera.lookAt(cx2 + Math.sin(fpYaw) * Math.cos(fpPitch), 0.62 + Math.sin(fpPitch), cz2 + Math.cos(fpYaw) * Math.cos(fpPitch));
      focusX = cx2; focusZ = cz2;
    } else {
      var k = Math.min(1, dt * 8), tx = controls.target.x, tz = controls.target.z;
      var ntx = tx + (cx2 - tx) * k, ntz = tz + (cz2 - tz) * k;
      camera.position.x += ntx - tx; camera.position.z += ntz - tz;
      controls.target.set(ntx, 0.45, ntz);
    }

    // ---- 狀態列 / 目標箭頭 / 熱點 ----
    var gx, gz;
    if (autoMode && AG.dest) { gx = AG.dest[0]; gz = AG.dest[1]; }
    else {
      var hs = hotspotObjects.filter(function (h) { return h.data.id === (rush ? rush.hid : role.hot); })[0];
      if (hs) { gx = hs.data.pos[0]; gz = hs.data.pos[2]; }
    }
    rhEls.goal.textContent = fmtH(hr) + "　" + status;
    if (gx !== undefined) {
      var ddx = gx - cx2, ddz = gz - cz2;
      var rel = Math.atan2(ddx * rx + ddz * rz, ddx * fx + ddz * fz);
      rhEls.arrow.style.transform = "rotate(" + (rel - Math.PI / 2) + "rad)";
      rhEls.arrow.style.visibility = "visible";
    } else rhEls.arrow.style.visibility = "hidden";
    var best = null, bd = 1.8;
    hotspotObjects.forEach(function (h) {
      var d2 = Math.hypot(h.data.pos[0] - cx2, h.data.pos[2] - cz2);
      if (d2 < bd) { bd = d2; best = h; }
    });
    if (rush) best = null;
    if (best !== nearHot) {
      nearHot = best;
      rhEls.near.hidden = !best;
      if (best) rhEls.near.textContent = "查看：" + best.data.name;
    }
  }


  // ---------- 18. 美術細修：陰影、光點 ----------
  function artApply(root) {
    root.traverse(function (o) {
      if (!o.isMesh || !o.material || Array.isArray(o.material)) return;
      var mt = o.material;
      if (!mt.isMeshStandardMaterial || mt.transparent || mt.side === THREE.BackSide) return;
      o.receiveShadow = true;
      var g = o.geometry;
      if (!g.boundingSphere) g.computeBoundingSphere();
      var sc = Math.max(o.scale.x, o.scale.y, o.scale.z) * ((o.parent && o.parent.scale) ? Math.max(o.parent.scale.x, o.parent.scale.y, o.parent.scale.z) : 1);
      if (g.boundingSphere.radius * sc > 0.03) o.castShadow = true;
    });
  }
  try { artApply(scene); } catch (e) { console.error(e); }
  var bokeh = null;
  (function () {
    var cv = document.createElement("canvas");
    cv.width = cv.height = 64;
    var cx = cv.getContext("2d");
    var gr = cx.createRadialGradient(32, 32, 2, 32, 32, 30);
    gr.addColorStop(0, "rgba(255,244,190,0.95)"); gr.addColorStop(0.55, "rgba(255,240,170,0.55)"); gr.addColorStop(1, "rgba(255,236,160,0)");
    cx.fillStyle = gr; cx.fillRect(0, 0, 64, 64);
    var n = 80, pos = new Float32Array(n * 3), base = [], i;
    for (i = 0; i < n; i++) {
      var bx = -13 + Math.random() * 26, by = 0.5 + Math.random() * 6, bz = -22 + Math.random() * 34;
      base.push([bx, by, bz, Math.random() * 6.28]);
      pos[i * 3] = bx; pos[i * 3 + 1] = by; pos[i * 3 + 2] = bz;
    }
    var geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    var mat = new THREE.PointsMaterial({ map: new THREE.CanvasTexture(cv), size: 0.34, sizeAttenuation: true, transparent: true, opacity: 0.5, depthWrite: false });
    var pts = new THREE.Points(geo, mat);
    pts.frustumCulled = false;
    scene.add(pts);
    bokeh = { pts: pts, base: base, pos: pos, geo: geo, mat: mat };
  })();
  function artUpdate(t) {
    if (!bokeh) return;
    var b = bokeh.base, p = bokeh.pos;
    for (var i = 0; i < b.length; i++) {
      p[i * 3] = b[i][0] + Math.sin(t * 0.25 + b[i][3]) * 0.5;
      p[i * 3 + 1] = b[i][1] + Math.sin(t * 0.4 + b[i][3] * 2) * 0.3;
      p[i * 3 + 2] = b[i][2] + Math.cos(t * 0.22 + b[i][3]) * 0.5;
    }
    bokeh.geo.attributes.position.needsUpdate = true;
    var day = timeOfDay > 6.5 && timeOfDay < 17.5;
    bokeh.mat.opacity = day ? 0.5 : 0.25;
    bokeh.pts.visible = !(roleMode && roleFP);
    if (streetLamp) {
      var h = timeOfDay, lv = (h >= 17.2 && h < 18.6) ? (h - 17.2) / 1.4 : (h >= 18.6 || h < 5.6) ? 1 : (h >= 5.6 && h < 6.8) ? 1 - (h - 5.6) / 1.2 : 0;
      streetLamp.mat.emissiveIntensity = lv * 1.3;
      streetLamp.pool.opacity = lv * 0.28;
    }
  }
  var streetLamp = null;


  // ---------- 19. 美術細修二：地磚、草皮、窗框 ----------
  (function () {
    var tileCode = [
      "vec2 tp = vWP.xz / 0.28; vec2 tf = fract(tp); vec2 te = min(tf, 1.0 - tf);",
      "float tfw = max(fwidth(tp.x), fwidth(tp.y)); float tw = max(0.03, tfw * 0.9);",
      "float tln = (1.0 - smoothstep(0.0, tw, min(te.x, te.y))) * (1.0 - smoothstep(0.35, 0.7, tfw));",
      "float tchk = mod(floor(tp.x) + floor(tp.y), 2.0);",
      "diffuseColor.rgb *= (1.0 - 0.045 * tchk);",
      "diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * 0.82, tln * 0.85);"
    ].join("\n");
    var grassCode = [
      "float gn = sin(vWP.x * 0.45) * sin(vWP.z * 0.4) + 0.5 * sin(vWP.x * 1.1 + vWP.z * 0.7);",
      "diffuseColor.rgb *= 1.0 + 0.05 * gn;"
    ].join("\n");
    function worldPatch(mat, code) {
      if (mat.userData.artPatched) return;
      mat.userData.artPatched = true;
      mat.extensions = { derivatives: true };
      mat.onBeforeCompile = function (sh) {
        sh.vertexShader = sh.vertexShader.replace("#include <common>", "#include <common>\nvarying vec3 vWP;")
          .replace("#include <begin_vertex>", "#include <begin_vertex>\nvWP = (modelMatrix * vec4(transformed, 1.0)).xyz;");
        sh.fragmentShader = sh.fragmentShader.replace("#include <common>", "#include <common>\nvarying vec3 vWP;")
          .replace("#include <color_fragment>", "#include <color_fragment>\n" + code);
      };
      mat.needsUpdate = true;
    }
    // 窗戶：亮面玻璃＋深色窗框／窗櫺
    windowDark.color.setHex(0xf0f6fa);
    windowDark.roughness = 0.16;
    windowDark.extensions = { derivatives: true };
    windowDark.onBeforeCompile = function (sh) {
      sh.vertexShader = sh.vertexShader.replace("#include <common>", "#include <common>\nattribute vec2 wext;\nvarying vec2 vWe;\nvarying vec2 vWp;")
        .replace("#include <begin_vertex>", "#include <begin_vertex>\nvWe = wext; vWp = position.xy;");
      sh.fragmentShader = sh.fragmentShader.replace("#include <common>", "#include <common>\nvarying vec2 vWe;\nvarying vec2 vWp;")
        .replace("#include <color_fragment>", [
          "#include <color_fragment>",
          "float fMask = 1.0;",
          "if (vWe.x > 0.05 && vWe.y > 0.05) {",
          "  vec2 q = vWp + vWe * 0.5;",
          "  float t = min(0.018, min(vWe.x, vWe.y) * 0.1);",
          "  float nx = vWe.x < 0.18 ? 1.0 : max(2.0, floor(vWe.x / 0.34 + 0.5));",
          "  float ny = vWe.y < 0.18 ? 1.0 : max(2.0, floor(vWe.y / 0.30 + 0.5));",
          "  vec2 cell = vec2(vWe.x / nx, vWe.y / ny);",
          "  vec2 c = mod(q, cell); c = min(c, cell - c);",
          "  float edge = min(min(q.x, vWe.x - q.x), min(q.y, vWe.y - q.y));",
          "  float fwq = fwidth(q.x) + fwidth(q.y);",
          "  float b1 = 1.0 - smoothstep(t * 0.5 - fwq, t * 0.5 + fwq, min(c.x, c.y));",
          "  float b2 = 1.0 - smoothstep(t - fwq, t + fwq, edge);",
          "  float bar = max(b1, b2);",
          "  diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.17, 0.2, 0.25), bar * 0.92);",
          "  fMask = 1.0 - bar;",
          "}"
        ].join("\n"))
        .replace("#include <emissivemap_fragment>", "#include <emissivemap_fragment>\ntotalEmissiveRadiance *= fMask;");
    };
    windowDark.needsUpdate = true;

    // 地面材質：依顏色／厚度判斷是鋪面或草地
    ground.material.color.setHex(0x9acb78);
    scene.updateMatrixWorld(true);
    var hsl = { h: 0, s: 0, l: 0 }, wp = new THREE.Vector3();
    scene.traverse(function (o) {
      if (!o.isMesh || Array.isArray(o.material) || !o.material.isMeshStandardMaterial || o.material.transparent) return;
      var g = o.geometry, mt = o.material;
      if (!g.boundingBox) g.computeBoundingBox();
      var hgt = (g.boundingBox.max.y - g.boundingBox.min.y) * Math.abs(o.scale.y);
      var flat = (g.type === "ShapeGeometry" || g.type === "CircleGeometry") ? Math.abs(o.rotation.x + Math.PI / 2) < 0.01 : hgt <= 0.06;
      if (!flat) return;
      o.getWorldPosition(wp);
      if (wp.y > 0.1) return;
      mt.color.getHSL(hsl);
      if (hsl.s < 0.3 && hsl.l > 0.55 && hsl.l < 0.9 && g.type !== "CircleGeometry") worldPatch(mt, tileCode);
      else if (hsl.h > 0.18 && hsl.h < 0.4 && hsl.s > 0.25 && hsl.l > 0.35 && hsl.l < 0.8) worldPatch(mt, grassCode);
    });
  })();


  // ---------- 20. 街道家具：路燈、長椅、垃圾桶、腳踏車架、指示牌 ----------
  (function () {
    var A = roleApi, NID = A.NID, NPOS = A.NPOS, furn = new THREE.Group();
    scene.add(furn);
    var glowM = new THREE.MeshStandardMaterial({ color: 0xfffbee, emissive: 0xffe2a0, emissiveIntensity: 0, roughness: 0.4 });
    var poolM = new THREE.MeshBasicMaterial({ color: 0xffe3a0, transparent: true, opacity: 0, depthWrite: false });
    streetLamp = { mat: glowM, pool: poolM };
    var poleM = std(0x4a525c, 0.6), woodM = std(0xc9a070, 0.8), binM = std(0x74a08a, 0.8), lidM = std(0x4a525c, 0.6), steelM = std(0xb9c0c8, 0.4, 0.6);
    var lamps = [];
    function mesh(geo, mat, x, y, z, parent) { var m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); (parent || furn).add(m); return m; }
    function ok(x, z) {
      if (!inside(x, z) || blockedAt(x, z)) return false;
      if (x > -2.3 && x < 2.3 && z > -0.9 && z < 3.3) return false;
      if (Math.hypot(x - 2.3, z + 1.4) < 1.7 || Math.hypot(x + 1.4, z + 3.2) < 2.0) return false;
      if (z > 7.6) return false;
      for (var ri = 0; ri < RING.length; ri++) if (segDist(x, z, RING[ri], RING[(ri + 1) % RING.length]) < 0.55) return false;
      return true;
    }
    var edges = A.EDGE.map(function (e) {
      var a = NPOS[NID[e[0]]], b = NPOS[NID[e[1]]], dx = b[0] - a[0], dz = b[1] - a[1], L = Math.hypot(dx, dz);
      return { a: a, dx: dx / L, dz: dz / L, L: L, nm: e[0] + "-" + e[1] };
    });
    function pt(e, t, lat) { return [e.a[0] + e.dx * t - e.dz * lat, e.a[1] + e.dz * t + e.dx * lat]; }
    function addLamp(x, z) {
      var g = new THREE.Group();
      mesh(new THREE.CylinderGeometry(0.03, 0.036, 0.035, 8), poleM, 0, 0.018, 0, g);
      mesh(new THREE.CylinderGeometry(0.011, 0.015, 0.62, 8), poleM, 0, 0.33, 0, g);
      mesh(new THREE.SphereGeometry(0.052, 12, 10), glowM, 0, 0.67, 0, g);
      mesh(new THREE.CylinderGeometry(0.02, 0.058, 0.03, 10), poleM, 0, 0.72, 0, g);
      var pool = mesh(new THREE.CircleGeometry(0.4, 20), poolM, 0, 0.06, 0, g);
      pool.rotation.x = -Math.PI / 2;
      g.position.set(x, 0.04, z);
      furn.add(g);
      lamps.push([x, z]);
      obstCircles.push([x, z, 0.06]);
    }
    function lampOk(x, z) { if (x > -2.6 && x < 2.6 && z > 4.0) return false; for (var i = 0; i < lamps.length; i++) if (Math.hypot(lamps[i][0] - x, lamps[i][1] - z) < 1.5) return false; return ok(x, z); }
    function addBench(x, z, fx, fz) {
      var g = new THREE.Group();
      mesh(new THREE.BoxGeometry(0.28, 0.022, 0.085), woodM, 0, 0.085, 0, g);
      mesh(new THREE.BoxGeometry(0.28, 0.07, 0.014), woodM, 0, 0.14, -0.04, g);
      [-0.115, 0.115].forEach(function (lx) { mesh(new THREE.BoxGeometry(0.016, 0.085, 0.085), poleM, lx, 0.042, 0, g); });
      g.position.set(x, 0.04, z);
      g.rotation.y = Math.atan2(fx, fz);
      furn.add(g);
      obstCircles.push([x, z, 0.13]);
    }
    function addBin(x, z) {
      var g = new THREE.Group();
      mesh(new THREE.CylinderGeometry(0.04, 0.034, 0.11, 10), binM, 0, 0.055, 0, g);
      mesh(new THREE.CylinderGeometry(0.044, 0.044, 0.016, 10), lidM, 0, 0.118, 0, g);
      g.position.set(x, 0.04, z);
      furn.add(g);
      obstCircles.push([x, z, 0.06]);
    }
    function addRack(x, z, ang) {
      var g = new THREE.Group();
      for (var i = -2; i <= 2; i++) {
        var arc = mesh(new THREE.TorusGeometry(0.034, 0.005, 6, 10, Math.PI), steelM, i * 0.07, 0.0, 0, g);
        arc.position.y = 0.008;
      }
      g.position.set(x, 0.04, z);
      g.rotation.y = ang;
      furn.add(g);
      obstCircles.push([x, z, 0.16]);
    }
    function signTex(txt) {
      var cv = document.createElement("canvas");
      cv.width = 320; cv.height = 64;
      var c = cv.getContext("2d");
      c.fillStyle = "#2f6f73"; c.fillRect(0, 0, 320, 64);
      c.fillStyle = "#ffffff"; c.fillRect(0, 0, 320, 4); c.fillRect(0, 60, 320, 4);
      c.fillStyle = "#ffffff"; c.font = "bold 34px 'Noto Sans TC','Microsoft JhengHei',sans-serif";
      c.textAlign = "center"; c.textBaseline = "middle";
      c.fillText(txt, 160, 34);
      var t = new THREE.CanvasTexture(cv);
      return new THREE.MeshBasicMaterial({ map: t });
    }
    function addSign(nm, texts) {
      var np = NPOS[NID[nm]], offs = [[0.45, 0.3], [-0.45, 0.3], [0.45, -0.3], [-0.45, -0.3], [0.6, 0.0], [-0.6, 0.0]], pos = null, i;
      for (i = 0; i < offs.length; i++) { if (ok(np[0] + offs[i][0], np[1] + offs[i][1])) { pos = [np[0] + offs[i][0], np[1] + offs[i][1]]; break; } }
      if (!pos) return;
      var g = new THREE.Group();
      mesh(new THREE.CylinderGeometry(0.012, 0.014, 0.5 + texts.length * 0.0, 8), poleM, 0, 0.29, 0, g);
      texts.forEach(function (tx, ti) {
        var mat = signTex(tx), y = 0.52 - ti * 0.085;
        var p1 = mesh(new THREE.PlaneGeometry(0.34, 0.068), mat, 0, y, 0.016, g);
        var p2 = mesh(new THREE.PlaneGeometry(0.34, 0.068), mat, 0, y, -0.016, g);
        p2.rotation.y = Math.PI;
      });
      g.position.set(pos[0], 0.04, pos[1]);
      furn.add(g);
      obstCircles.push([pos[0], pos[1], 0.07]);
    }
    var ei, t, side, lat, p, b = 0, racks = 0;
    // 路燈：沿步道兩側交錯
    edges.forEach(function (e, idx) {
      if (e.L < 1.1) return;
      for (t = 0.5; t < e.L - 0.3; t += 2.3) {
        side = ((Math.round(t / 2.3) + idx) % 2 ? 1 : -1);
        p = pt(e, t, side * 0.34);
        if (lampOk(p[0], p[1])) addLamp(p[0], p[1]);
        else { p = pt(e, t, -side * 0.34); if (lampOk(p[0], p[1])) addLamp(p[0], p[1]); }
      }
    });
    // 停車場前的道路：兩側各三盞路燈
    [-5.8, -4.6, -3.4, 3.4, 4.6, 5.8].forEach(function (lx) { addLamp(lx, 7.85); });
    // 校內環道：沿環道內側每隔一段距離一盞
    (function () {
      var cx0 = 0, cz0 = 0, ri2;
      RING.forEach(function (q) { cx0 += q[0] / RING.length; cz0 += q[1] / RING.length; });
      for (ri2 = 0; ri2 < RING.length; ri2++) {
        var P0 = RING[ri2], P1 = RING[(ri2 + 1) % RING.length], sdx = P1[0] - P0[0], sdz = P1[1] - P0[1], SL = Math.hypot(sdx, sdz);
        var ux = sdx / SL, uz = sdz / SL, nx2 = -uz, nz2 = ux, mx = (P0[0] + P1[0]) / 2, mz = (P0[1] + P1[1]) / 2;
        if ((cx0 - mx) * nx2 + (cz0 - mz) * nz2 < 0) { nx2 = -nx2; nz2 = -nz2; }
        for (var tt = 0.9; tt < SL - 0.5; tt += 2.6) {
          var lx2 = P0[0] + ux * tt + nx2 * 0.5, lz2 = P0[1] + uz * tt + nz2 * 0.5, good = inside(lx2, lz2) && !blockedAt(lx2, lz2) && !(lx2 > -2.6 && lx2 < 2.6 && lz2 > 4.0);
          for (var li = 0; good && li < lamps.length; li++) if (Math.hypot(lamps[li][0] - lx2, lamps[li][1] - lz2) < 1.6) good = false;
          if (good) addLamp(lx2, lz2);
        }
      }
    })();
    // 長椅＋垃圾桶：較長的步道段中點
    edges.forEach(function (e, idx) {
      if (e.L < 1.8 || b >= 9) return;
      side = idx % 2 ? 1 : -1;
      p = pt(e, e.L * 0.5, side * 0.4);
      if (!ok(p[0], p[1])) { side = -side; p = pt(e, e.L * 0.5, side * 0.4); }
      if (!ok(p[0], p[1])) return;
      var fxz = [e.dz * side, -e.dx * side];      // 面向步道
      addBench(p[0], p[1], fxz[0], fxz[1]);
      var q = pt(e, e.L * 0.5 + 0.3, side * 0.42);
      if (ok(q[0], q[1])) addBin(q[0], q[1]);
      b++;
    });
    // 腳踏車架
    edges.forEach(function (e) {
      if (racks >= 3 || e.L < 1.4) return;
      if (["A335-E335", "A_305-CW", "G1-G2", "A_55-E55", "A005-LP1"].indexOf(e.nm) < 0) return;
      for (var sd = -1; sd <= 1; sd += 2) {
        var q = pt(e, e.L * 0.5, sd * 0.55);
        if (ok(q[0], q[1])) { addRack(q[0], q[1], Math.atan2(e.dx, e.dz) + Math.PI / 2); racks++; break; }
      }
    });
    // 指示牌
    addSign("A335", ["↓ 行政大樓／校門", "→ 活動中心", "← 教學大樓"]);
    addSign("E335", ["→ AI半導體班", "↑ 網球場", "← 林蔭走道"]);
    addSign("A_305", ["↑ 司令台／田徑場", "← 圖書館", "→ 光電球場"]);
    addSign("G3", ["↑ 田徑場", "↓ 校園中庭"]);
    artApply(furn);
  })();


  // ---------- 21. 背景音樂：白天／夜間兩首，轉換時漸入漸出 ----------
  (function () {
    var btn = document.getElementById("t-music");
    var ctx = null, master = null, tracks = {}, started = false, wantOn = true, loading = false, curDay = null;
    try { if (localStorage.getItem("nannan-music") === "off") wantOn = false; } catch (e) {}
    function label() { btn.textContent = wantOn ? "♪ 音樂：開" : "♪ 音樂：關"; }
    label();
    function decode(key) {
      var url = (CFG.music || {})[key];
      return fetch(url).then(function (r) { if (!r.ok) throw new Error(url + " " + r.status); return r.arrayBuffer(); }).then(function (buf) {
        return new Promise(function (res, rej) { var p = ctx.decodeAudioData(buf, res, rej); if (p && p.catch) p.catch(rej); });
      });
    }
    function isDay() { return timeOfDay >= 6.0 && timeOfDay < 18.0; }
    function applyMix(fast) {
      if (!ctx || !started) return;
      var d = isDay(), now = ctx.currentTime, tc = fast ? 0.15 : 1.4;
      curDay = d;
      tracks.day.gain.gain.setTargetAtTime(d ? 1 : 0, now, tc);
      tracks.night.gain.gain.setTargetAtTime(d ? 0 : 1, now, tc);
    }
    function applyMaster() {
      if (!ctx || !master) return;
      master.gain.setTargetAtTime(wantOn ? 0.5 : 0, ctx.currentTime, 0.5);
    }
    function init() {
      if (started || loading || !CFG.music || typeof fetch === "undefined") return;
      var AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      loading = true;
      ctx = new AC();
      master = ctx.createGain(); master.gain.value = 0; master.connect(ctx.destination);
      Promise.all([decode("day"), decode("night")]).then(function (bufs) {
        ["day", "night"].forEach(function (k, i) {
          var src = ctx.createBufferSource(), g = ctx.createGain();
          src.buffer = bufs[i]; src.loop = true; g.gain.value = 0;
          src.connect(g); g.connect(master); src.start(0);
          tracks[k] = { src: src, gain: g };
        });
        started = true; loading = false;
        applyMix(true); applyMaster();
      }).catch(function (e) { loading = false; console.warn("music", e); });
    }
    function tryStart() {
      if (!wantOn) return;
      init();
      if (ctx && ctx.state === "suspended") ctx.resume();
    }
    // 自動播放：先直接嘗試，被瀏覽器擋下時，等第一次點擊／按鍵後開始
    tryStart();
    var unlock = function () {
      tryStart();
      if (ctx && ctx.state === "running") {
        ["pointerdown", "keydown", "touchstart"].forEach(function (ev) { window.removeEventListener(ev, unlock, true); });
      }
    };
    ["pointerdown", "keydown", "touchstart"].forEach(function (ev) { window.addEventListener(ev, unlock, true); });
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      wantOn = !wantOn;
      try { localStorage.setItem("nannan-music", wantOn ? "on" : "off"); } catch (er) {}
      label();
      if (wantOn) { tryStart(); }
      applyMaster();
    });
    if (document.addEventListener) document.addEventListener("visibilitychange", function () {
      if (!ctx) return;
      if (document.hidden) ctx.suspend(); else if (wantOn) ctx.resume();
    });
    // 每 0.5 秒檢查是否跨越日夜界線
    setInterval(function () { if (started && isDay() !== curDay) applyMix(false); }, 500);
  })();

  // ---------- 22. 遊戲：楠楠島任務（尋寶打卡／投籃／遲到衝刺） ----------
  var MS = { treasure: {}, hoops: 0, rush: 0 }, treasureOn = false;
  try { var rawMs = localStorage.getItem("nannan-missions"); if (rawMs) { var oMs = JSON.parse(rawMs); MS.treasure = oMs.treasure || {}; MS.hoops = oMs.hoops || 0; MS.rush = oMs.rush || 0; } } catch (eMs) {}
  function saveMS() { try { localStorage.setItem("nannan-missions", JSON.stringify(MS)); } catch (e) {} }
  var TREASURE_IDS = hotspots.filter(function (h) { return h.id !== "events"; }).map(function (h) { return h.id; });
  function treasureCount() { return TREASURE_IDS.filter(function (id) { return MS.treasure[id]; }).length; }
  function allDone() { return treasureCount() >= TREASURE_IDS.length && MS.hoops >= 6 && MS.rush >= 1; }
  function mk(tag, cls, html, parent) { var e = document.createElement(tag); if (cls) e.className = cls; if (html !== undefined) e.innerHTML = html; if (parent) parent.appendChild(e); return e; }

  var QUIZ = {
    "bilingual": [
      { q: "雙語實驗班的課程特色包含什麼？", o: ["外師授課與 AI 語言應用", "全部用中文授課", "只上英文單字課"], a: 0, why: "三年漸進式雙語學習，並有外師授課與 AI 語言應用。" },
      { q: "免試入學楠梓高中後，要怎麼進入雙語實驗班？", o: ["校內報名擇優進入", "另外參加入學考", "抽籤決定"], a: 0, why: "免試入學後即可參加校內報名，擇優進入實驗班。" }
    ],
    "ai-semi": [
      { q: "AI半導體專班的「半導體製程探究與實作」由哪所大學的教授指導？", o: ["國立高雄大學", "國立成功大學", "國立中山大學"], a: 0, why: "由國立高雄大學教授親自指導，打造半導體實驗室。" },
      { q: "AI半導體專班主要整合哪兩個領域？", o: ["AI 與半導體", "美術與音樂", "農業與漁業"], a: 0, why: "專班培養 AI × 半導體的跨領域整合人才。" }
    ],
    "law-finance": [
      { q: "法政財經專班從哪一學年度起設立？", o: ["115 學年度", "112 學年度", "108 學年度"], a: 0, why: "自 115 學年度起全新設立。" },
      { q: "法政財經專班的課程會做什麼？", o: ["模擬法庭與商業企劃", "只練習田徑", "只學烘焙"], a: 0, why: "課程包含法學論辯、模擬法庭，以及財經與商業企劃。" }
    ],
    "sports": [
      { q: "體育班重點招募的四大專項，不包含下列哪一項？", o: ["籃球", "田徑", "跆拳道"], a: 0, why: "四大專項是田徑、跆拳道、自由車、五人制足球。" },
      { q: "體育班的運動績優甄審，可以直升哪類學校？", o: ["國立體大、師大體育系", "美術學院", "航海學院"], a: 0, why: "可透過甄審、甄試及獨立招生，直升體大、師大體育系等。" }
    ],
    "data-processing": [
      { q: "資料處理科的核心是什麼？", o: ["數位商務 × 資訊科技 × 創新整合", "油畫 × 雕塑 × 設計", "航空 × 造船 × 機械"], a: 0, why: "以數位商務、資訊科技、創新整合為核心。" },
      { q: "資料處理科高二會深化什麼？", o: ["程式設計、網頁開發與資料庫", "只做社團活動", "只上體育課"], a: 0, why: "高二深化程式設計、網頁開發與資料庫應用。" }
    ],
    "tourism-catering": [
      { q: "觀餐科包含哪兩個科？", o: ["觀光事業科與餐飲管理科", "資訊科與電子科", "美容科與服裝科"], a: 0, why: "觀餐科涵蓋觀光事業科與餐飲管理科。" },
      { q: "餐飲管理科與哪所指標名校合作？", o: ["高餐大", "台灣大學", "政治大學"], a: 0, why: "與高餐大等指標名校及餐旅集團合作。" }
    ],
    "events": [
      { q: "光電風雨球場舉辦了什麼賽事？", o: ["三對三籃球暨排球聯賽", "游泳錦標賽", "馬拉松"], a: 0, why: "最新消息：光電風雨球場三對三籃球暨排球聯賽。" },
      { q: "115 學年度招生快訊提到哪些特色專班？", o: ["雙語、AI半導體、法政財經與體育班", "只有美術班", "只有音樂班"], a: 0, why: "招生快訊介紹雙語實驗班、AI半導體班、法政財經班與體育班。" }
    ]
  };
  function shuffle(a) { for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }

  // ---- 介面元件 ----
  var gmMis = mk("div", "gm-overlay", "", document.body); gmMis.hidden = true;
  var gmQuiz = mk("div", "gm-overlay", "", document.body); gmQuiz.hidden = true;
  var gmHoops = mk("div", "gm-overlay", "", document.body); gmHoops.hidden = true;
  var gmRes = mk("div", "gm-overlay", "", document.body); gmRes.hidden = true;
  var gmPass = mk("div", "gm-overlay", "", document.body); gmPass.hidden = true;
  var gmFlash = mk("div", "gm-flash", "", document.body);
  var chip = mk("div", "gamechip", "", document.body); chip.hidden = true;
  chip.addEventListener("click", openMissions);
  function updateChip() {
    var n = treasureCount();
    chip.hidden = !(treasureOn && n < TREASURE_IDS.length);
    chip.textContent = "📍 尋寶打卡 " + n + "/" + TREASURE_IDS.length + "　（點我看任務）";
  }

  function openMissions() {
    closePanel && closePanel();
    var n = treasureCount(), tot = TREASURE_IDS.length;
    gmMis.innerHTML = "";
    var card = mk("div", "gm-card", "", gmMis);
    mk("h2", "", "🏝 楠楠島任務", card);
    mk("p", "gm-sub", "完成三項任務，就能領取「楠楠島通行證」！", card);
    function mission(ic, title, desc, done, btnText, fn) {
      var m = mk("div", "gm-mission" + (done ? " done" : ""), "", card);
      mk("div", "ic", done ? "✅" : ic, m);
      var tx = mk("div", "tx", "<b>" + title + "</b><span>" + desc + "</span>", m);
      var b = mk("button", "gm-btn", btnText, m);
      b.type = "button"; b.addEventListener("click", fn);
    }
    mission("📍", "尋寶打卡", "走訪 6 個專班／科別，讀完介紹並答對題目就能打卡。進度 " + n + "/" + tot, n >= tot, n >= tot ? "再逛逛" : "開始尋寶", function () { gmMis.hidden = true; treasureOn = true; updateChip(); toast("點地圖上的專班圖示，讀完介紹後按「打卡答題」"); });
    mission("🏀", "光電球場投籃", "30 秒內在綠色區間按下投籃，投進 6 球過關。最佳：" + MS.hoops + " 球", MS.hoops >= 6, "開始投籃", function () { gmMis.hidden = true; startHoops(); });
    mission("🏃", "遲到衝刺", "開學日 7:50！在時間內跑進教室，小心來往車輛，被撞到會扣 5 秒。", MS.rush >= 1, "開始衝刺", function () { gmMis.hidden = true; pick.rush = true; openPicker(true); });
    var row = mk("div", "gm-row", "", card);
    if (allDone()) { var pb = mk("button", "gm-btn", "🎫 領取通行證", row); pb.type = "button"; pb.addEventListener("click", function () { gmMis.hidden = true; showPass(); }); }
    var cb = mk("button", "gm-btn alt", "關閉", row); cb.type = "button"; cb.addEventListener("click", function () { gmMis.hidden = true; });
    gmMis.hidden = false;
  }
  document.getElementById("btn-missions").addEventListener("click", openMissions);

  // ---- 尋寶打卡：答題 ----
  function showQuiz(id) {
    var h = byHotspotId(id); if (!h) return;
    var qs = QUIZ[id] || QUIZ["events"], q = qs[Math.floor(Math.random() * qs.length)];
    gmQuiz.innerHTML = "";
    var card = mk("div", "gm-card", "", gmQuiz);
    mk("h2", "", "📍 打卡：" + h.data.name, card);
    mk("p", "gm-sub", "答對就能蓋章！可以回去看專班介紹再答。", card);
    mk("div", "gm-q", q.q, card);
    var fb = null, solved = false;
    var opts = shuffle(q.o.map(function (t, i) { return { t: t, ok: i === q.a }; }));
    opts.forEach(function (op) {
      var b = mk("button", "gm-opt", op.t, card); b.type = "button";
      b.addEventListener("click", function () {
        if (solved || b.disabled) return;
        if (op.ok) {
          solved = true; b.classList.add("ok");
          fb.textContent = "答對了！" + q.why;
          MS.treasure[id] = true; saveMS(); updateChip(); gameOnOpen(id);
          var nx = mk("div", "gm-row", "", card);
          var c1 = mk("button", "gm-btn", treasureCount() >= TREASURE_IDS.length ? "太棒了，看任務" : "繼續探索", nx); c1.type = "button";
          c1.addEventListener("click", function () { gmQuiz.hidden = true; if (treasureCount() >= TREASURE_IDS.length) openMissions(); });
        } else { b.classList.add("bad"); b.disabled = true; fb.textContent = "再想想～可以看看專班介紹的內容。"; }
      });
    });
    fb = mk("div", "gm-fb", "", card);
    var cl = mk("div", "gm-row", "", card), cb = mk("button", "gm-btn alt", "關閉", cl); cb.type = "button";
    cb.addEventListener("click", function () { gmQuiz.hidden = true; });
    gmQuiz.hidden = false;
  }
  function gameOnOpen(id) {
    var box = document.getElementById("panel-game"); if (!box) return;
    box.innerHTML = "";
    if (TREASURE_IDS.indexOf(id) >= 0) {
      var b = mk("button", "gm-btn", MS.treasure[id] ? "✔ 已打卡" : "📍 打卡答題", box); b.type = "button";
      if (MS.treasure[id]) b.disabled = true; else b.addEventListener("click", function () { showQuiz(id); });
    }
    if (id === "events") { var b2 = mk("button", "gm-btn alt", "🏀 玩投籃", box); b2.type = "button"; b2.addEventListener("click", function () { startHoops(); }); }
  }

  // ---- 投籃小遊戲（2D） ----
  var HC = { W: 16, H: 9, rimX: 13, rimY: 4.2, floor: 7.4 };
  var hg = null, hgRaf = 0;
  function startHoops() {
    gmHoops.innerHTML = "";
    var wrap = mk("div", "hoops-wrap", "", gmHoops);
    var top = mk("div", "hoops-top", "", wrap);
    var sc = mk("span", "", "", top), tm = mk("span", "", "", top), cx = mk("button", "", "✕ 結束", top); cx.type = "button";
    var cv = mk("canvas", "", "", wrap); cv.id = "hoops-cv"; cv.width = 960; cv.height = 540;
    var meter = mk("div", "meter", "", wrap), z2 = mk("div", "z2", "", meter), z1 = mk("div", "z1", "", meter), nd = mk("div", "nd", "", meter);
    var msg = mk("div", "hoops-msg", "點「投籃」按鈕（或畫面／空白鍵），在指針進入綠色區時出手！", wrap);
    var sb = mk("button", "gm-btn hoops-shoot", "🏀 開始！", wrap); sb.type = "button";
    gmHoops.hidden = false;
    var ctx2 = cv.getContext("2d");
    hg = { state: "intro", t: 30, score: 0, needle: 0, dir: 1, speed: 0.75, ball: null, D: 8, pstar: 0.6, shootT: 0, cool: 0, msgT: 0, closed: false, last: performance.now() };
    function newTarget() { hg.D = [6, 8, 10][Math.floor(Math.random() * 3)]; hg.pstar = 0.3 + Math.random() * 0.5; var w1 = 0.07, w2 = 0.11; z1.style.left = ((hg.pstar - w1) * 100) + "%"; z1.style.width = (w1 * 200) + "%"; z2.style.left = ((hg.pstar - w2) * 100) + "%"; z2.style.width = (w2 * 200) + "%"; }
    newTarget();
    function say(t) { msg.textContent = t; }
    function shoot() {
      if (hg.state === "intro") { hg.state = "play"; sb.textContent = "🏀 投籃！"; say("看準時機！"); return; }
      if (hg.state !== "play" || hg.ball || hg.cool > 0) return;
      var p = hg.needle, err = (p - hg.pstar) * 4, sx = HC.rimX - hg.D, y0 = 5.6, y1 = HC.rimY, g = 9, vy0 = -Math.sqrt(2 * g * 3.2), T = (-vy0 + Math.sqrt(vy0 * vy0 - 2 * g * (y0 - y1))) / g;
      var aerr = Math.abs(err) < 0.32 ? err * 0.3 : err, xEnd = HC.rimX + aerr;
      hg.ball = { x: sx, y: y0, vx: (xEnd - sx) / T, vy: vy0, g: g, scored: false, done: false, t: 0, hit: 0, noscore: Math.abs(err) >= 0.55 };
    }
    function finish() {
      hg.state = "end";
      var best = Math.max(MS.hoops, hg.score), newDone = MS.hoops < 6 && hg.score >= 6;
      MS.hoops = best; saveMS();
      sb.textContent = "再玩一次"; sb.onclick = function () { cancelAnimationFrame(hgRaf); startHoops(); };
      say(hg.score >= 6 ? "過關！投進 " + hg.score + " 球 🎉" : "投進 " + hg.score + " 球，再試試看（需要 6 球）");
      if (newDone) { toast("投籃任務完成！"); if (allDone()) setTimeout(openMissions, 1200); }
    }
    function closeH() { hg.closed = true; cancelAnimationFrame(hgRaf); gmHoops.hidden = true; }
    cx.onclick = closeH;
    sb.onclick = shoot;
    cv.addEventListener("pointerdown", function (e) { e.preventDefault(); shoot(); });
    function onKey(e) { if (hg.closed) { window.removeEventListener("keydown", onKey); return; } if (e.code === "Space") { e.preventDefault(); shoot(); } }
    window.addEventListener("keydown", onKey);
    function step(dt) {
      if (hg.state === "play") {
        hg.t -= dt; if (hg.t <= 0) { hg.t = 0; if (!hg.ball) finish(); else hg.state = "ending"; }
        hg.needle += hg.dir * hg.speed * dt;
        if (hg.needle >= 1) { hg.needle = 1; hg.dir = -1; } if (hg.needle <= 0) { hg.needle = 0; hg.dir = 1; }
      }
      if (hg.cool > 0) hg.cool -= dt;
      var b = hg.ball;
      if (b) {
        b.t += dt; b.vy += b.g * dt; b.x += b.vx * dt; b.y += b.vy * dt;
        if (b.x > 13.95 && b.x < 14.3 && b.y > 2.8 && b.y < 4.3) { b.x = 13.95; b.vx = -Math.abs(b.vx) * 0.45; }
        [[HC.rimX - 0.9, HC.rimY], [HC.rimX + 0.9, HC.rimY]].forEach(function (rp) {
          var dx = b.x - rp[0], dy = b.y - rp[1], d = Math.hypot(dx, dy);
          if (d < 0.36 && d > 0.001 && b.hit < 3) { var nx = dx / d, ny = dy / d, vn = b.vx * nx + b.vy * ny; if (vn < 0) { b.vx -= 1.55 * vn * nx; b.vy -= 1.55 * vn * ny; b.hit++; b.x = rp[0] + nx * 0.37; b.y = rp[1] + ny * 0.37; } }
        });
        if (!b.scored && !b.noscore && b.vy > 0 && b.y > HC.rimY + 0.05 && b.y < HC.rimY + 0.4 && Math.abs(b.x - HC.rimX) < 0.6) { b.scored = true; hg.score++; say(b.hit ? "擦框進網！" : "刷！"); hg.msgT = 1; }
        if (b.y > HC.floor - 0.4) { b.y = HC.floor - 0.4; b.vy *= -0.4; b.vx *= 0.7; if (Math.abs(b.vy) < 0.8) b.done = true; }
        if (b.t > 2.4) b.done = true;
        if (b.done) { if (!b.scored) say("沒進～再來一球"); hg.ball = null; hg.cool = 0.25; newTarget(); hg.speed = Math.min(1.2, 0.75 + hg.score * 0.04); if (hg.state === "ending") finish(); }
      }
      nd.style.left = (hg.needle * 100) + "%";
      sc.textContent = "🏀 " + hg.score + " 球";
      tm.textContent = "⏱ " + Math.ceil(hg.t) + " 秒";
    }
    function draw() {
      var c = ctx2, W = cv.width, H = cv.height, s = W / HC.W;
      c.clearRect(0, 0, W, H);
      var gr = c.createLinearGradient(0, 0, 0, H); gr.addColorStop(0, "#bfe3f6"); gr.addColorStop(1, "#f3f0e4"); c.fillStyle = gr; c.fillRect(0, 0, W, H);
      c.fillStyle = "#d7c4cf"; c.fillRect(1.5 * s, 2.3 * s, 5.5 * s, 3.8 * s);
      c.fillStyle = "#e8d9e0"; c.fillRect(1.2 * s, 2.0 * s, 6.1 * s, 0.4 * s);
      c.fillStyle = "#f4fbff"; for (var wi = 0; wi < 3; wi++) for (var wj = 0; wj < 2; wj++) c.fillRect((1.9 + wi * 1.7) * s, (2.8 + wj * 1.5) * s, 1.3 * s, 1.1 * s);
      c.fillStyle = "#b9d99a"; c.fillRect(0, HC.floor * s, W, H - HC.floor * s);
      c.fillStyle = "#c9694d"; c.fillRect(0, (HC.floor - 0.1) * s, W, 0.5 * s);
      // 籃板／籃框
      c.fillStyle = "#8e969e"; c.fillRect(14.15 * s, 3.2 * s, 0.18 * s, (HC.floor - 3.2) * s);
      c.fillStyle = "#ffffff"; c.strokeStyle = "#8e969e"; c.lineWidth = 3; c.fillRect(13.85 * s, 2.5 * s, 0.3 * s, 2.0 * s); c.strokeRect(13.85 * s, 2.5 * s, 0.3 * s, 2.0 * s);
      c.strokeStyle = "#ffffff"; c.lineWidth = 1.5;
      for (var ni = -3; ni <= 3; ni++) { c.beginPath(); c.moveTo((HC.rimX + ni * 0.25) * s, HC.rimY * s); c.lineTo((HC.rimX + ni * 0.15) * s, (HC.rimY + 0.8) * s); c.stroke(); }
      c.strokeStyle = "#e0541f"; c.lineWidth = 6; c.beginPath(); c.moveTo((HC.rimX - 0.9) * s, HC.rimY * s); c.lineTo((HC.rimX + 0.9) * s, HC.rimY * s); c.stroke();
      // 球員
      var sx = HC.rimX - hg.D, up = hg.ball && hg.ball.t < 0.25;
      c.fillStyle = "#3d8fdc"; c.fillRect((sx - 0.3) * s, 5.2 * s, 0.6 * s, 1.2 * s);
      c.fillStyle = "#1f2a5e"; c.fillRect((sx - 0.3) * s, 6.3 * s, 0.6 * s, 0.9 * s);
      c.fillStyle = "#f8dcc4"; c.beginPath(); c.arc(sx * s, 4.85 * s, 0.5 * s, 0, 7); c.fill();
      c.fillStyle = "#2a1f1a"; c.beginPath(); c.arc(sx * s, 4.7 * s, 0.5 * s, Math.PI, 0); c.fill();
      c.fillStyle = "#222"; c.beginPath(); c.arc((sx + 0.15) * s, 4.9 * s, 0.06 * s, 0, 7); c.fill();
      c.strokeStyle = "#f8dcc4"; c.lineWidth = 7; c.beginPath(); c.moveTo((sx + 0.25) * s, 5.5 * s); c.lineTo((sx + 0.6) * s, (up ? 4.3 : 5.5) * s); c.stroke();
      // 球
      var bx, by;
      if (hg.ball) { bx = hg.ball.x; by = hg.ball.y; } else { bx = sx + 0.7; by = 5.5; }
      c.fillStyle = "#e8742a"; c.beginPath(); c.arc(bx * s, by * s, 0.28 * s, 0, 7); c.fill();
      c.strokeStyle = "#7a3a12"; c.lineWidth = 2; c.beginPath(); c.arc(bx * s, by * s, 0.28 * s, 0, 7); c.moveTo((bx - 0.28) * s, by * s); c.lineTo((bx + 0.28) * s, by * s); c.stroke();
      if (hg.state === "intro") { c.fillStyle = "rgba(255,255,255,0.8)"; c.fillRect(0, 0, W, H); c.fillStyle = "#1d3347"; c.font = "bold 40px sans-serif"; c.textAlign = "center"; c.fillText("光電球場投籃", W / 2, H / 2 - 20); c.font = "24px sans-serif"; c.fillText("30 秒內投進 6 球過關", W / 2, H / 2 + 24); }
    }
    function loop(now) {
      if (hg.closed) return;
      var dt = Math.min(0.05, (now - hg.last) / 1000); hg.last = now;
      step(dt); draw(); hgRaf = requestAnimationFrame(loop);
    }
    hgRaf = requestAnimationFrame(loop);
    hg.api = { shoot: shoot, step: step, finish: finish };
  }

  // ---- 遲到衝刺 ----
  var RUSH_OK = ["bilingual", "ai", "law", "data", "tourism", "sports"];
  var RUSH_TARGETS = [
    { hid: "bilingual", name: "雙語實驗班", x: -2.75, z: -0.95 }, { hid: "ai-semi", name: "AI半導體專班", x: 5.3, z: 4.55 },
    { hid: "law-finance", name: "法政財經專班（圖書館）", x: -2.0, z: -1.8 }, { hid: "data-processing", name: "資料處理科", x: -2.8, z: 4.58 },
    { hid: "tourism-catering", name: "觀餐科", x: -4.6, z: 4.58 }, { hid: "sports", name: "體育班（田徑場）", x: 4.85, z: -13.0 }
  ];
  var rush = null, rushSaved = null;
  var rushLast = null, rushRole = null;
  function startRush(r, v, sex) {
    rpEls.wrap.hidden = true;
    rushRole = [r, v, sex];
    startRole(r, v, sex);
    autoMode = false;
    rhEls.auto.hidden = true;
    rushSaved = timeSpeed; timeSpeed = 1; timeEls.speed.textContent = "1×";
    if (!timePlaying) timeEls.play.click();
    timeOfDay = 7.8; applyTime(timeOfDay);
    var px = -1.2, pz = 8.0;
    playerPos = { x: px, z: pz }; AG.x = px; AG.z = pz; playerYaw = Math.PI;
    player.root.visible = !roleFP; player.root.position.set(px, 0.08, pz);
    controls.target.set(px, 0.45, pz); camera.position.set(px, 1.3, pz + 2.6);
    var tg;
    do { tg = RUSH_TARGETS[Math.floor(Math.random() * RUSH_TARGETS.length)]; } while (tg === rushLast && RUSH_TARGETS.length > 1);
    rushLast = tg;
    var len = Math.hypot(tg.x - px, tg.z - pz) * 1.4;
    var limit = len / 1.7 + 14;
    rush = { hid: tg.hid, tg: tg, t: limit, limit: limit, inv: 0, over: false };
    rhEls.name.textContent = "遲到衝刺：" + tg.name;
    toast("7:50 了！跑到「" + tg.name + "」！（Shift／推滿搖桿可衝刺）");
  }
  function rushStep(dt, px, pz) {
    if (!rush || rush.over) return null;
    rush.t -= dt; rush.inv -= dt;
    var ret = null;
    if (rush.inv <= 0) {
      roleApi.cars.forEach(function (c) {
        if (ret || c.state !== "drive") return;
        if (Math.hypot(c.x - px, c.z - pz) < 0.3) {
          rush.t -= 5; rush.inv = 1.6;
          var ax = px - c.x, az = pz - c.z, al = Math.hypot(ax, az) || 1, nx = px + ax / al * 0.5, nz = pz + az / al * 0.5;
          if (!blockedAt(nx, nz)) ret = [nx, nz];
          gmFlash.classList.add("on"); setTimeout(function () { gmFlash.classList.remove("on"); }, 120);
          toast("小心車子！扣 5 秒");
        }
      });
    }
    if (Math.hypot(px - rush.tg.x, pz - rush.tg.z) < 0.9) { rushEnd(true); return ret; }
    if (rush.t <= 0) { rush.t = 0; rushEnd(false); }
    return ret;
  }
  function rushStatus() {
    var d = Math.round(Math.hypot(playerPos.x - rush.tg.x, playerPos.z - rush.tg.z) * 4.5);
    return "⏱ " + Math.max(0, rush.t).toFixed(1) + " 秒｜目標：" + rush.tg.name + "｜" + d + " 公尺";
  }
  function rushEnd(win) {
    rush.over = true;
    var stars = win ? (rush.t >= 10 ? 3 : rush.t >= 4 ? 2 : 1) : 0, wasDone = MS.rush >= 1;
    if (win) { MS.rush = Math.max(MS.rush, stars); saveMS(); }
    gmRes.innerHTML = "";
    var card = mk("div", "gm-card", "", gmRes);
    mk("h2", "", win ? "準時到班！" : "遲到了…", card);
    mk("div", "rush-big", win ? "★".repeat(stars) + "☆".repeat(3 - stars) : "😵", card);
    mk("p", "gm-sub", win ? "還剩 " + rush.t.toFixed(1) + " 秒，抵達「" + rush.tg.name + "」。" : "時間到了，下次記得早點出門、小心車輛！", card);
    var row = mk("div", "gm-row", "", card);
    var b1 = mk("button", "gm-btn", "再衝一次", row); b1.type = "button";
    b1.addEventListener("click", function () { gmRes.hidden = true; var rr = rushRole; endRole(); startRush(rr[0], rr[1], rr[2]); });
    var b2 = mk("button", "gm-btn alt", "回任務", row); b2.type = "button";
    b2.addEventListener("click", function () { gmRes.hidden = true; endRole(); openMissions(); });
    gmRes.hidden = false;
    if (win && !wasDone) toast("遲到衝刺任務完成！");
  }

  // ---- 通行證 ----
  function showPass() {
    gmPass.innerHTML = "";
    var card = mk("div", "gm-card", "", gmPass);
    mk("h2", "", "🎫 楠楠島通行證", card);
    var cv = mk("canvas", "", "", card); cv.width = 800; cv.height = 480; cv.style.cssText = "width:100%;border-radius:14px;display:block";
    var c = cv.getContext("2d"), gr = c.createLinearGradient(0, 0, 800, 480);
    gr.addColorStop(0, "#fbe9df"); gr.addColorStop(1, "#dcecf7");
    c.fillStyle = gr; c.fillRect(0, 0, 800, 480);
    c.strokeStyle = "#ba533c"; c.lineWidth = 6; c.strokeRect(18, 18, 764, 444);
    c.fillStyle = "#ba533c"; c.font = "bold 44px sans-serif"; c.textAlign = "center"; c.fillText("楠楠島通行證", 400, 92);
    c.fillStyle = "#1d3347"; c.font = "22px sans-serif"; c.fillText("高雄市立楠梓高中 · 特色專班招生", 400, 132);
    var phs = hotspots.filter(function (h) { return TREASURE_IDS.indexOf(h.id) >= 0; }), names = phs.map(function (h) { return h.name; }), i;
    c.font = "bold 18px sans-serif";
    for (i = 0; i < names.length; i++) {
      var cx = 120 + (i % 4) * 185, cy = 200 + Math.floor(i / 4) * 90;
      c.fillStyle = "#ffffff"; c.beginPath(); c.arc(cx, cy, 30, 0, 7); c.fill();
      c.strokeStyle = phs[i].color; c.lineWidth = 5; c.beginPath(); c.arc(cx, cy, 30, 0, 7); c.stroke();
      c.fillStyle = phs[i].color; c.font = "bold 28px sans-serif"; c.fillText("✔", cx, cy + 10);
      c.fillStyle = "#1d3347"; c.font = "15px sans-serif"; c.fillText(names[i].replace(/ \(.*\)/, ""), cx, cy + 52);
    }
    c.fillStyle = "#1d3347"; c.font = "18px sans-serif"; c.textAlign = "left";
    c.fillText("🏀 投籃最佳 " + MS.hoops + " 球　🏃 遲到衝刺 " + "★".repeat(MS.rush), 560, 262);
    c.textAlign = "center"; c.fillStyle = "#ba533c"; c.font = "bold 24px sans-serif"; c.fillText("歡迎加入楠梓高中！", 400, 410);
    c.fillStyle = "#6a7480"; c.font = "16px sans-serif"; c.fillText(new Date().toLocaleDateString("zh-TW"), 400, 440);
    var row = mk("div", "gm-row", "", card);
    var d = mk("button", "gm-btn", "下載圖片", row); d.type = "button";
    d.addEventListener("click", function () { try { var a = document.createElement("a"); a.download = "楠楠島通行證.png"; a.href = cv.toDataURL("image/png"); a.click(); } catch (e) { toast("無法下載，請長按圖片儲存"); } });
    var cl = mk("button", "gm-btn alt", "關閉", row); cl.type = "button";
    cl.addEventListener("click", function () { gmPass.hidden = true; });
    gmPass.hidden = false;
  }

  // ---------- 23. 資訊來源：Google 試算表（留空則使用內建資料） ----------
  // 設定方式：把試算表網址中 /d/ 與 /edit 之間那一段 ID 貼在下面引號內。
  var SHEET_ID = CFG.sheetId || "";
  (function () {
    var sid = SHEET_ID;
    try { var qs = new URLSearchParams(location.search).get("sheet"); if (qs) sid = qs; } catch (e) {}
    if (!sid) return;
    var TABS = { "bilingual": "雙語實驗班", "ai-semi": "AI半導體專班", "law-finance": "法政財經專班", "sports": "體育班", "data-processing": "資料處理科", "tourism-catering": "觀餐科", "events": "最新消息" };
    function parseCSV(t) {
      var rows = [], row = [], cur = "", q = false, i, ch;
      for (i = 0; i < t.length; i++) {
        ch = t[i];
        if (q) { if (ch === '"') { if (t[i + 1] === '"') { cur += '"'; i++; } else q = false; } else cur += ch; }
        else if (ch === '"') q = true;
        else if (ch === ",") { row.push(cur); cur = ""; }
        else if (ch === "\n" || ch === "\r") { if (ch === "\r" && t[i + 1] === "\n") i++; row.push(cur); rows.push(row); row = []; cur = ""; }
        else cur += ch;
      }
      if (cur !== "" || row.length) { row.push(cur); rows.push(row); }
      return rows;
    }
    function getTab(name) {
      var url = "https://docs.google.com/spreadsheets/d/" + encodeURIComponent(sid) + "/gviz/tq?tqx=out:csv&headers=1&sheet=" + encodeURIComponent(name);
      var ctl = (typeof AbortController !== "undefined") ? new AbortController() : null;
      if (ctl) setTimeout(function () { ctl.abort(); }, 9000);
      return fetch(url, ctl ? { signal: ctl.signal } : undefined).then(function (r) { if (!r.ok) throw new Error(name + " " + r.status); return r.text(); }).then(parseCSV);
    }
    function norm(c) { return (c || "").replace(/^\s+|\s+$/g, ""); }
    function hidden(v) { v = norm(v).toLowerCase(); return v === "否" || v === "n" || v === "no" || v === "false" || v === "0" || v === "隱藏" || v === "x"; }
    function apply(data) {
      var i;
      if (data.intro) data.intro.forEach(function (r) {
        var h = hotspots.filter(function (x) { return x.id === norm(r[0]); })[0];
        if (!h) return;
        if (norm(r[1])) h.name = norm(r[1]);
        if (norm(r[2])) h.subtitle = norm(r[2]);
        if (norm(r[3])) h.tag = norm(r[3]);
        if (norm(r[4])) h.intro = norm(r[4]);
      });
      Object.keys(data.items || {}).forEach(function (id) {
        var h = hotspots.filter(function (x) { return x.id === id; })[0], list = data.items[id];
        if (h && list && list.length) h.items = list;
      });
      if (data.quiz) Object.keys(data.quiz).forEach(function (id) { if (data.quiz[id].length) QUIZ[id] = data.quiz[id]; });
      // 更新畫面上已建立的標籤與清單
      hotspotObjects.forEach(function (o) { var sp = o.badge.querySelector("span:last-child"); if (sp) sp.textContent = o.data.name; });
      var lb = document.querySelectorAll("#list button[data-id]");
      for (i = 0; i < lb.length; i++) {
        var hh = hotspots.filter(function (x) { return x.id === lb[i].getAttribute("data-id"); })[0];
        if (hh) { var n1 = lb[i].querySelector(".list-name"), n2 = lb[i].querySelector(".list-sub"); if (n1) n1.textContent = hh.name; if (n2) n2.textContent = hh.subtitle; }
      }
    }
    function load() {
      var data = { intro: null, items: {}, quiz: {} }, jobs = [];
      jobs.push(getTab("簡介").then(function (rows) {
        if (norm(rows[0] && rows[0][0]) !== "代號") return;
        data.intro = rows.slice(1).filter(function (r) { return norm(r[0]); });
      }));
      Object.keys(TABS).forEach(function (id) {
        jobs.push(getTab(TABS[id]).then(function (rows) {
          if (norm(rows[0] && rows[0][1]) !== "標題") return;
          data.items[id] = rows.slice(1).filter(function (r) { return norm(r[1]) && !hidden(r[4]); }).map(function (r) {
            return { date: norm(r[0]), title: norm(r[1]), summary: norm(r[2]), link: norm(r[3]) };
          });
        }));
      });
      jobs.push(getTab("題目").then(function (rows) {
        if (norm(rows[0] && rows[0][0]) !== "代號") return;
        rows.slice(1).forEach(function (r) {
          var id = norm(r[0]);
          if (!id || !norm(r[1]) || !norm(r[2]) || !norm(r[3])) return;
          var opts = [norm(r[2]), norm(r[3])]; if (norm(r[4])) opts.push(norm(r[4]));
          (data.quiz[id] = data.quiz[id] || []).push({ q: norm(r[1]), o: opts, a: 0, why: norm(r[5]) });
        });
      }));
      // 個別分頁失敗不影響其他分頁
      Promise.all(jobs.map(function (p) { return p.catch(function (e) { console.warn("sheet", e); }); })).then(function () {
        apply(data);
        try { localStorage.setItem("nannan-sheet-cache", JSON.stringify(data)); } catch (e) {}
      });
    }
    try { var c = localStorage.getItem("nannan-sheet-cache"); if (c) apply(JSON.parse(c)); } catch (e) {}
    load();
  })();

  // ---------- 24. 連線：島上人數、其他島民、猜拳與表情（需要 config.js 的 firebase 設定） ----------
  var EMOTES = ["👋", "❤️", "😄", "⭐", "👍"];
  var RPS_ICON = ["✊", "✌️", "✋"];
  var NET = { on: false, db: null, id: null, ref: null, players: {}, meshes: {}, lastSend: 0, sent: "", selfEl: null, selfBubUntil: 0, near: null, nearId: null };
  var roleOpt = { v: "", sex: "m" };

  // 暱稱過濾：只留文字與數字，最多 8 字，不雅字詞改用預設名稱
  var BAD_WORDS = ["幹你", "幹妳", "幹他", "操你", "操妳", "靠北", "靠杯", "雞掰", "機掰", "雞巴", "三小", "他媽", "你媽", "妳媽", "媽的", "白痴", "白癡", "智障", "腦殘", "去死", "死全家", "強姦", "強暴", "做愛", "色情", "性愛", "幹嘛幹", "fuck", "shit", "bitch", "dick", "cunt", "porn", "sex", "nazi", "rape", "nigg", "slut", "asshole"];
  function cleanName(s, fallback) {
    s = String(s == null ? "" : s).replace(/[^一-鿿A-Za-z0-9_\- ]/g, "").replace(/\s+/g, " ").replace(/^\s+|\s+$/g, "");
    s = Array.from(s).slice(0, 8).join("");
    var low = s.toLowerCase().replace(/[\s_\-]/g, "");
    for (var i = 0; i < BAD_WORDS.length; i++) if (low.indexOf(BAD_WORDS[i]) >= 0) return fallback || "";
    return s || fallback || "";
  }
  var guestName = "島民" + (100 + Math.floor(Math.random() * 900));

  // 自創角色：全部用選項組合，不開放自由輸入文字或圖片
  var H_STYLES = [["side", "短髮"], ["spiky", "刺蝟頭"], ["bun", "丸子頭"], ["wavy", "波浪"], ["bob", "鮑伯頭"], ["longwavy", "長捲髮"], ["longstraight", "長直髮"], ["bowl", "蘑菇頭"], ["wavymid", "中長捲"]];
  var H_COLORS = [0x1b1e2a, 0x4a3020, 0x6b4a2b, 0xb06a3b, 0xe6c36b, 0xe8a9b0, 0xe9ecf2, 0x3d8fe0, 0x7c5cf0, 0x16a085];
  var SKINS = [0xf8dcc4, 0xf6d3b3, 0xe9b88f, 0xe4b48c, 0xc98f63, 0x8d5a3b];
  var FITS = [["school", "楠中校服"], ["pe", "運動服"], ["casual", "便服"]];
  var TOPS = [0xf8f8fb, 0xe0443a, 0xf2c230, 0x3d8fdc, 0x1f9e55, 0xe8a9b0, 0x7c5cf0, 0xe67e22, 0x2b2d3a, 0xa6c6e4];
  var BOTTOMS = [0x28336a, 0x1b1b22, 0x55575c, 0xa6c6e4, 0x7a1f2b, 0x2f3a55, 0xc9bda5, 0x3a6b4a];
  var ACCS = [["none", "無配件"], ["glasses", "眼鏡"], ["headphones", "耳機"], ["chef", "廚師帽"], ["helmet", "安全帽"], ["headband", "頭巾"], ["tie", "領帶"], ["bag", "書包"]];
  var AV_LIM = { hs: H_STYLES.length, hc: H_COLORS.length, sk: SKINS.length, fit: FITS.length, tc: TOPS.length, bc: BOTTOMS.length, acc: ACCS.length };
  var AV = { sex: "m", hs: 0, hc: 0, sk: 1, fit: 0, tc: 1, bc: 0, acc: 0, nick: "" };
  (function () {
    try {
      var s = JSON.parse(localStorage.getItem("nannan-avatar") || "null");
      if (s) { for (var k in AV_LIM) if (typeof s[k] === "number" && s[k] >= 0 && s[k] < AV_LIM[k]) AV[k] = s[k] | 0; if (s.sex === "f") AV.sex = "f"; AV.nick = cleanName(s.nick, ""); }
    } catch (e) {}
  })();
  function saveAV() { try { localStorage.setItem("nannan-avatar", JSON.stringify(AV)); } catch (e) {} }
  function avNick() { return cleanName(AV.nick, guestName); }
  function encodeAV(a) { return "c:" + [a.sex === "f" ? 1 : 0, a.hs, a.hc, a.sk, a.fit, a.tc, a.bc, a.acc].join(","); }
  function customCfg(a) {
    var f = a.sex === "f", c = roleApi.variant(f ? (a.fit === 1 ? 9 : 5) : (a.fit === 1 ? 8 : 2)), d = {};
    c.prop = null;
    c.hairStyle = H_STYLES[a.hs][0]; c.hair = H_COLORS[a.hc]; c.skin = SKINS[a.sk];
    if (a.fit === 1) { c.topColor = TOPS[a.tc]; c.bottomColor = BOTTOMS[a.bc]; c.noEmblem = true; }
    else if (a.fit === 2) { c.noEmblem = true; c.topColor = TOPS[a.tc]; c.bottomColor = BOTTOMS[a.bc]; c.skirtColor = BOTTOMS[a.bc]; c.shoe = "sneaker"; c.longSleeve = false; }
    var acc = ACCS[a.acc][0];
    if (acc === "glasses") d.glasses = true;
    else if (acc === "headphones") d.headphones = 0x39c0b0;
    else if (acc === "chef") d.chefHat = true;
    else if (acc === "helmet") d.helmet = 0xe0443a;
    else if (acc === "headband") d.headband = 0xffffff;
    else if (acc === "tie") d.tie = 0x7a1f2b;
    else if (acc === "bag") c.prop = "bag";
    return { c: c, deco: d };
  }
  // 把別人傳來的代碼還原成外觀；格式不對就回傳 null
  function buildAvatar(code) {
    var p = String(code || "").split(":"), i;
    if (p[0] === "c" && p[1]) {
      var n = p[1].split(",");
      if (n.length !== 8) return null;
      var a = { sex: n[0] === "1" ? "f" : "m" }, keys = ["hs", "hc", "sk", "fit", "tc", "bc", "acc"];
      for (i = 0; i < keys.length; i++) {
        var q = parseInt(n[i + 1], 10);
        if (!(q >= 0 && q < AV_LIM[keys[i]])) return null;
        a[keys[i]] = q;
      }
      return customCfg(a);
    }
    if (p[0] === "r") {
      var r = ROLES.filter(function (x) { return x.id === p[1] && !x.free; })[0];
      if (!r) return null;
      var v = null;
      if (r.variants) { v = r.variants.some(function (o) { return o.k === p[2]; }) ? p[2] : r.variants[0].k; }
      return r.make(v, p[3] === "f" ? "f" : "m");
    }
    return null;
  }

  ROLES.unshift({ id: "custom", name: "自創島民", sub: "自己捏角色，隨時進島、遇見其他玩家", color: "#e0703f", hot: null, free: true,
    make: function () { return customCfg(AV); } });

  // ----- 捏角色畫面（含 3D 預覽） -----
  var PV = null;
  function pvInit() {
    if (PV !== null) return PV;
    try {
      var cv = document.createElement("canvas");
      cv.className = "rp-pv";
      var rn = new THREE.WebGLRenderer({ canvas: cv, antialias: true, alpha: true });
      rn.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      rn.setSize(150, 180);
      var sc = new THREE.Scene();
      sc.add(new THREE.HemisphereLight(0xffffff, 0xc8c8d0, 1.0));
      var dl = new THREE.DirectionalLight(0xffffff, 0.9); dl.position.set(2, 3, 3); sc.add(dl);
      var cam = new THREE.PerspectiveCamera(30, 150 / 180, 0.1, 20);
      cam.position.set(0, 0.42, 2.1); cam.lookAt(0, 0.36, 0);
      PV = { cv: cv, rn: rn, sc: sc, cam: cam, model: null, raf: 0 };
    } catch (e) { PV = false; }
    return PV;
  }
  function pvRefresh() {
    if (!pvInit()) return;
    try {
      if (PV.model) PV.sc.remove(PV.model.root);
      var cfg = customCfg(AV), m = roleApi.makeStudent(cfg.c);
      scene.remove(m.root);
      roleDeco(m, cfg.deco);
      m.root.position.set(0, 0, 0);
      PV.sc.add(m.root);
      PV.model = m;
      if (!PV.raf) PV.raf = requestAnimationFrame(pvLoop);
    } catch (e) { console.warn("preview", e); }
  }
  function pvLoop() {
    if (!PV || rpEls.wrap.hidden || !pick.role || !pick.role.free) { if (PV) PV.raf = 0; return; }
    PV.model.root.rotation.y += 0.012;
    PV.rn.render(PV.sc, PV.cam);
    PV.raf = requestAnimationFrame(pvLoop);
  }
  function renderCreator(chipRow) {
    var box = rpEls.opts;
    if (pvInit()) { var wrap = document.createElement("div"); wrap.className = "rp-pvwrap"; wrap.appendChild(PV.cv); box.appendChild(wrap); }
    function idxRow(label, list, key) {
      chipRow(label, list.map(function (o, i) { return { k: i, l: o[1] }; }), AV[key], function (k) { AV[key] = k; saveAV(); });
    }
    function swatchRow(label, colors, key) {
      var row = document.createElement("div");
      row.className = "rp-row";
      row.innerHTML = "<em>" + label + "</em>";
      colors.forEach(function (col, i) {
        var b = document.createElement("button");
        b.type = "button"; b.className = "rp-sw" + (AV[key] === i ? " sel" : ""); b.style.background = "#" + ("000000" + col.toString(16)).slice(-6);
        b.setAttribute("aria-label", label + (i + 1));
        b.addEventListener("click", function () { AV[key] = i; saveAV(); renderPicker(); });
        row.appendChild(b);
      });
      box.appendChild(row);
    }
    var nr = document.createElement("div");
    nr.className = "rp-row";
    nr.innerHTML = "<em>暱稱</em>";
    var inp = document.createElement("input");
    inp.type = "text"; inp.maxLength = 8; inp.className = "rp-nick"; inp.placeholder = "最多 8 個字（留空會給你島民編號）"; inp.value = AV.nick;
    inp.addEventListener("input", function () { AV.nick = inp.value; saveAV(); });
    nr.appendChild(inp);
    box.appendChild(nr);
    chipRow("性別", ROLE_SEX, AV.sex, function (k) { AV.sex = k; saveAV(); });
    idxRow("髮型", H_STYLES, "hs");
    swatchRow("髮色", H_COLORS, "hc");
    swatchRow("膚色", SKINS, "sk");
    idxRow("服裝", FITS, "fit");
    if (AV.fit !== 0) { swatchRow("上衣", TOPS, "tc"); swatchRow("下身", BOTTOMS, "bc"); }
    idxRow("配件", ACCS, "acc");
    var tip = document.createElement("div");
    tip.className = "rp-row rp-tip";
    tip.textContent = NET.on ? "進島後，其他線上的島民看得到你，靠近就能打招呼、猜拳。暱稱會自動過濾不雅字詞。" : "目前是單機模式（尚未連線）。暱稱會自動過濾不雅字詞。";
    box.appendChild(tip);
    pvRefresh();
  }

  // ----- 連線 -----
  function loadScript(src, ok, fail) {
    var s = document.createElement("script");
    s.src = src; s.async = true; s.onload = ok; s.onerror = fail;
    document.head.appendChild(s);
  }
  var pillEl = document.getElementById("on-pill"), pillN = document.getElementById("on-n");
  function updateCount() {
    var n = Math.max(1, Object.keys(NET.players).length);
    if (pillEl) { pillEl.hidden = !NET.on; pillN.textContent = n; }
  }
  function onlineStatus() { return "自由逛校園" + (NET.on ? "　島上 " + Math.max(1, Object.keys(NET.players).length) + " 人" : ""); }
  function myName() { return role ? (role.free ? avNick() : (cleanName(AV.nick, "") || role.name)) : avNick(); }
  function myCode() {
    if (!role) return encodeAV(AV);
    if (role.free) return encodeAV(AV);
    return "r:" + role.id + ":" + (roleOpt.v || "-") + ":" + roleOpt.sex;
  }
  function netInit() {
    var F = CFG.firebase;
    if (!F || !F.databaseURL || CFG.online === false) return;
    var base = "https://www.gstatic.com/firebasejs/9.23.0/";
    var go = function () {
      try { firebase.initializeApp(F); NET.db = firebase.database(); netStart(); } catch (e) { console.warn("net", e); }
    };
    if (typeof firebase !== "undefined" && firebase.database) { go(); return; }
    loadScript(base + "firebase-app-compat.js", function () {
      loadScript(base + "firebase-database-compat.js", go, function () { console.warn("net: 無法載入 firebase-database"); });
    }, function () { console.warn("net: 無法載入 firebase-app"); });
  }
  function netStart() {
    var db = NET.db;
    NET.id = Math.random().toString(36).slice(2, 10) + Math.random().toString(36).slice(2, 5);
    NET.ref = db.ref("players/" + NET.id);
    db.ref(".info/connected").on("value", function (s) {
      if (s.val() !== true) { NET.on = false; updateCount(); return; }
      NET.ref.onDisconnect().remove().then(function () {
        NET.sent = "";
        return NET.ref.set({ n: myName(), a: myCode(), v: 0, x: 0, z: 0, r: 0 });
      }).then(function () { NET.on = true; updateCount(); }).catch(function (e) { console.warn("net", e); });
    });
    var P = db.ref("players");
    P.on("child_added", function (s) { NET.players[s.key] = s.val(); updateCount(); });
    P.on("child_changed", function (s) { NET.players[s.key] = s.val(); });
    P.on("child_removed", function (s) {
      delete NET.players[s.key]; dropRemote(s.key); updateCount();
      if (rps && rps.d && (rps.d.a === s.key || rps.d.b === s.key)) { var dead = rpsRef(); rpsClose("對方離開了，猜拳結束"); dead.remove(); }
    });
    var R = db.ref("rps");
    R.on("child_added", onRps); R.on("child_changed", onRps);
    R.on("child_removed", function (s) { if (rps && rps.id === s.key) rpsClose(rps.d && rps.d.st === 2 ? "" : "猜拳結束了"); });
  }

  // 其他島民的 3D 角色與名牌
  function num(v, lo, hi, d) { v = Number(v); return isFinite(v) ? Math.max(lo, Math.min(hi, v)) : d; }
  function makeTag(me) {
    var el = document.createElement("div");
    el.className = "pl-tag" + (me ? " me" : "");
    el.innerHTML = '<span class="pl-bub"></span><span class="pl-name"></span>';
    el.style.display = "none";
    labelsEl.appendChild(el);
    return { el: el, bub: el.firstChild, nm: el.lastChild, vec: new THREE.Vector3(), until: 0 };
  }
  function ensureRemote(id, p) {
    var m = NET.meshes[id];
    if (m && m.code === p.a) return m;
    if (m) dropRemote(id);
    var cfg = buildAvatar(p.a);
    if (!cfg) return null;
    var mesh = roleApi.makeStudent(cfg.c);
    roleDeco(mesh, cfg.deco);
    artApply(mesh.root);
    var x = num(p.x, -80, 80, 0), z = num(p.z, -80, 80, 0);
    mesh.root.position.set(x, 0.08, z);
    var tag = makeTag(false);
    m = { mesh: mesh, tag: tag, code: p.a, x: x, z: z, yaw: num(p.r, -10, 10, 0), ph: 0, lastE: p.e ? p.e.ts : 0, name: "" };
    NET.meshes[id] = m;
    return m;
  }
  function dropRemote(id) {
    var m = NET.meshes[id];
    if (!m) return;
    scene.remove(m.mesh.root);
    if (m.tag.el.parentNode) m.tag.el.parentNode.removeChild(m.tag.el);
    delete NET.meshes[id];
    if (NET.nearId === id) NET.nearId = null;
  }
  function showBub(tag, txt, ms, now) { tag.bub.textContent = txt; tag.bub.style.display = "block"; tag.until = now + ms; }

  // 面板：靠近別人時出現的互動選單
  var soEl = document.getElementById("social");
  function renderSocial(id) {
    if (!id) { soEl.hidden = true; soEl.innerHTML = ""; return; }
    var p = NET.players[id] || {};
    soEl.hidden = false;
    soEl.innerHTML = '<span class="so-name"></span><span class="so-em"></span><button type="button" class="so-rps">✊✌️✋ 猜拳</button>';
    soEl.firstChild.textContent = cleanName(p.n, "島民") + " 在旁邊";
    var em = soEl.querySelector(".so-em");
    EMOTES.forEach(function (e, i) {
      var b = document.createElement("button");
      b.type = "button"; b.textContent = e; b.setAttribute("aria-label", "表情" + (i + 1));
      b.addEventListener("click", function () { sendEmote(i); });
      em.appendChild(b);
    });
    soEl.querySelector(".so-rps").addEventListener("click", function () { startRps(id); });
  }
  function sendEmote(i) {
    if (!NET.on) return;
    NET.ref.child("e").set({ k: i, ts: firebase.database.ServerValue.TIMESTAMP }).catch(function () {});
    if (NET.selfEl) showBub(NET.selfEl, EMOTES[i], 3200, performance.now());
  }

  // ----- 猜拳 -----
  var rps = null, rpsEl = document.getElementById("rps"), rpsCard = document.getElementById("rps-card");
  function rpsRef() { return NET.db.ref("rps/" + rps.id); }
  function startRps(targetId) {
    if (rps || !NET.on) return;
    var t = NET.players[targetId];
    if (!t) return;
    var ref = NET.db.ref("rps").push();
    ref.onDisconnect().remove();
    ref.set({ a: NET.id, b: targetId, an: myName(), bn: cleanName(t.n, "島民"), st: 0, ma: -1, mb: -1, rd: 0 }).catch(function () { toast("猜拳邀請沒有送出，請再試一次"); });
    setTimeout(function () { ref.once("value", function (s) { var d = s.val(); if (d && d.st === 0) ref.remove(); }); }, 30000);
  }
  function onRps(snap) {
    var d = snap.val();
    if (!d) return;
    var mine = d.a === NET.id ? "a" : (d.b === NET.id ? "b" : null);
    if (!mine) return;
    if (!rps) rps = { id: snap.key, me: mine, d: d };
    else if (rps.id !== snap.key) return;
    rps.d = d;
    renderRps();
  }
  function rpsClose(msg) {
    rps = null;
    rpsEl.hidden = true; rpsCard.innerHTML = "";
    if (msg) toast(msg);
  }
  function rpsBtn(txt, cls, fn) {
    var b = document.createElement("button");
    b.type = "button"; b.textContent = txt; if (cls) b.className = cls;
    b.addEventListener("click", fn);
    return b;
  }
  function renderRps() {
    if (!rps) return;
    var d = rps.d, me = rps.me, other = cleanName(me === "a" ? d.bn : d.an, "對方"), box = rpsCard, acts, title = document.createElement("h3"), sub = document.createElement("p");
    box.innerHTML = "";
    rpsEl.hidden = false;
    acts = document.createElement("div"); acts.className = "rps-acts";
    if (d.st === 2) {
      if (me === "a") { rpsRef().remove(); rpsClose("對方婉拒了猜拳"); } else rpsClose("");
      return;
    }
    if (d.st === 0) {
      if (me === "a") {
        title.textContent = "等待 " + other + " 回應…"; sub.textContent = "對方按下接受後就開始。";
        acts.appendChild(rpsBtn("取消", "", function () { rpsRef().remove(); }));
      } else {
        title.textContent = other + " 邀你猜拳！"; sub.textContent = "要接受嗎？";
        acts.appendChild(rpsBtn("接受", "go", function () { rpsRef().update({ st: 1 }); }));
        acts.appendChild(rpsBtn("拒絕", "", function () { rpsRef().update({ st: 2 }); }));
      }
    } else {
      var mine = me === "a" ? d.ma : d.mb, theirs = me === "a" ? d.mb : d.ma;
      if (mine < 0) {
        title.textContent = "和 " + other + " 猜拳"; sub.textContent = "第 " + ((d.rd || 0) + 1) + " 局：出拳！";
        [0, 1, 2].forEach(function (k) {
          var b = rpsBtn(RPS_ICON[k], "rps-hand", function () { var o = {}; o[me === "a" ? "ma" : "mb"] = k; rpsRef().update(o); });
          acts.appendChild(b);
        });
      } else if (theirs < 0) {
        title.textContent = "你出了 " + RPS_ICON[mine]; sub.textContent = "等 " + other + " 出拳…";
      } else {
        var res = (mine - theirs + 3) % 3;
        title.textContent = res === 2 ? "你贏了！🎉" : res === 1 ? "你輸了…" : "平手！";
        sub.textContent = "你 " + RPS_ICON[mine] + "　vs　" + RPS_ICON[theirs] + " " + other;
        acts.appendChild(rpsBtn("再來一局", "go", function () { rpsRef().update({ ma: -1, mb: -1, rd: (d.rd || 0) + 1 }); }));
      }
      acts.appendChild(rpsBtn("結束", "", function () { rpsRef().remove(); }));
    }
    box.appendChild(title); box.appendChild(sub); box.appendChild(acts);
  }

  // 每一幀：送出自己的位置、更新別人的角色、名牌、互動面板
  function onlineUpdate(dt, now) {
    if (!NET.on) return;
    var w = window.innerWidth, h = window.innerHeight, id, i;
    var vis = !!(role && playerPos);
    if (now - NET.lastSend > 250) {
      var st = vis ? { n: myName(), a: myCode(), v: 1, x: Math.round(playerPos.x * 100) / 100, z: Math.round(playerPos.z * 100) / 100, r: Math.round(Math.atan2(Math.sin(playerYaw), Math.cos(playerYaw)) * 100) / 100 }
                   : { n: myName(), a: myCode(), v: 0 };
      var key = JSON.stringify(st);
      if (key !== NET.sent) { NET.sent = key; NET.lastSend = now; NET.ref.update(st).catch(function () {}); }
    }
    // 其他島民
    var k = Math.min(1, dt * 7);
    for (id in NET.players) {
      if (id === NET.id) continue;
      var p = NET.players[id], m;
      if (!p || p.v !== 1) { if (NET.meshes[id]) dropRemote(id); continue; }
      m = ensureRemote(id, p);
      if (!m) continue;
      var tx = num(p.x, -80, 80, m.x), tz = num(p.z, -80, 80, m.z), ty = num(p.r, -10, 10, m.yaw);
      var ddx = tx - m.x, ddz = tz - m.z, dist = Math.hypot(ddx, ddz);
      if (dist > 6) { m.x = tx; m.z = tz; dist = 0; }
      else { m.x += ddx * k; m.z += ddz * k; }
      var dy = Math.atan2(Math.sin(ty - m.yaw), Math.cos(ty - m.yaw));
      m.yaw += dy * Math.min(1, dt * 8);
      var moving = dist > 0.03, mm = m.mesh;
      if (moving) {
        m.ph += dt * 10;
        var sw = Math.sin(m.ph) * 0.6;
        mm.legL.rotation.x = sw; mm.legR.rotation.x = -sw; mm.armL.rotation.x = -sw * 0.85; mm.armR.rotation.x = sw * 0.85;
        mm.root.position.y = 0.08 + Math.abs(Math.sin(m.ph)) * 0.02;
      } else {
        mm.legL.rotation.x *= 0.8; mm.legR.rotation.x *= 0.8; mm.armL.rotation.x *= 0.8; mm.armR.rotation.x *= 0.8;
        mm.root.position.y = 0.08;
      }
      mm.root.position.x = m.x; mm.root.position.z = m.z; mm.root.rotation.y = m.yaw;
      var nm = cleanName(p.n, "島民");
      if (m.name !== nm) { m.name = nm; m.tag.nm.textContent = nm; }
      if (p.e && p.e.ts !== m.lastE) { m.lastE = p.e.ts; var ei = num(p.e.k, 0, EMOTES.length - 1, 0) | 0; showBub(m.tag, EMOTES[ei], 3200, now); }
      m.tag.vec.set(m.x, 0.98, m.z);
    }
    // 名牌
    for (id in NET.meshes) {
      var mt = NET.meshes[id];
      if (mt.tag.until && now > mt.tag.until) { mt.tag.until = 0; mt.tag.bub.style.display = "none"; }
      place(mt.tag.el, mt.tag.vec, w, h);
      if (camera.position.distanceTo(mt.tag.vec) > 30) mt.tag.el.style.display = "none";
    }
    if (!NET.selfEl) { NET.selfEl = makeTag(true); }
    var se = NET.selfEl;
    if (vis && !roleFP) {
      se.nm.textContent = myName();
      se.vec.set(playerPos.x, 0.98, playerPos.z);
      if (se.until && now > se.until) { se.until = 0; se.bub.style.display = "none"; }
      place(se.el, se.vec, w, h);
    } else se.el.style.display = "none";
    // 附近有人 → 顯示互動選單
    var best = null, bd = 1.4;
    if (vis && !rps) {
      for (id in NET.meshes) { var d2 = Math.hypot(NET.meshes[id].x - playerPos.x, NET.meshes[id].z - playerPos.z); if (d2 < bd) { bd = d2; best = id; } }
    }
    if (best !== NET.nearId) { NET.nearId = best; renderSocial(best); }
  }

  netInit();

  window.__ld&&__ld(88,"校園就緒");
  var last = performance.now(), __fr = 0;
  function tick(now) {
    var dt = Math.min((now - last) / 1000, 0.1);
    last = now;

    if (timePlaying) {
      var boost = 1;
      timeOfDay = (timeOfDay + dt * 24 / DAY_SECONDS * timeSpeed * boost) % 24;
      applyTime(timeOfDay);
    }

    // 校門鐵柵欄：6:30 開（往西縮進牆內）、18:00 關
    if (gateBars) {
      var gTarget = (timeOfDay >= 6.5 && timeOfDay < 18.0) ? 1 : 0;
      var gStep = dt * 0.8;
      gateBars.amt += Math.max(-gStep, Math.min(gStep, gTarget - gateBars.amt));
      var ge = gateBars.amt * gateBars.amt * (3 - 2 * gateBars.amt);
      gateBars.group.position.x = gateBars.startX - 2.4 * ge;
      gateBars.group.scale.x = 1 - 0.45 * ge;
    }
    // 光電球場夜間照明：18:00–22:00
    if (courtLights) {
      var lTarget = (timeOfDay >= 18.0 && timeOfDay < 22.0) ? 1 : 0, lStep = dt * 1.2;
      courtLights.level += Math.max(-lStep, Math.min(lStep, lTarget - courtLights.level));
      var lv = courtLights.level;
      courtLights.mat.color.setHex(lv > 0.5 ? 0xfff2b8 : 0x3a3f46);
      courtLights.glows.forEach(function (gm) { gm.material.opacity = 0.8 * lv; gm.visible = lv > 0.01; });
      courtLights.pts.forEach(function (pl) { pl.intensity = 1.5 * lv; });
    }

    clouds.forEach(function (c) {
      c.position.x += c.userData.speed * dt;
      if (c.position.x > 90) c.position.x = -90;
    });

    var tTime = now * 0.0025;
    for (var h = 0; h < hotspotObjects.length; h++) {
      var obj = hotspotObjects[h];
      obj.pin.rotation.y = tTime * 1.5;
      obj.pin.position.y = Math.sin(tTime * 2.0 + h * 0.8) * 0.06;
      obj.ring.scale.setScalar(1.0 + Math.sin(tTime * 3.0 + h) * 0.08);
    }

    try { updateStudents(dt, now); } catch (err) { if (!window.__stuErr) { window.__stuErr = 1; console.error(err); } }
    artUpdate(now * 0.001);
    try { updateRole(dt, now); } catch (err2) { if (!window.__roleErr) { window.__roleErr = 1; console.error(err2); } }
    if (!(roleMode && roleFP)) controls.update();
    try { onlineUpdate(dt, now); } catch (err3) { if (!window.__netErr) { window.__netErr = 1; console.error(err3); } }
    updateLabels();
    renderer.render(scene, camera);
    if (++__fr === 10 && window.__ldDone) { clearTimeout(window.__ldTimer); window.__ldDone(); }
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);

  window.addEventListener("resize", function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
})();
