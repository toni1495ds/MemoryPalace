// ════════════════════════════════════════════════
//  CONFIG & CONSTANTS
// ════════════════════════════════════════════════
const BASE_SCALE = 2,
  GRID = 20,
  P_SIZE = 14,
  INTERACT_D = 38;
const SPEEDS = [2.2, 5, 10];
const SPEED_LABELS = ["🐢", "🚶", "🏃"];
let speedIdx = 0;
function getSpeed() {
  return SPEEDS[speedIdx];
}
function cycleSpeed() {
  speedIdx = (speedIdx + 1) % SPEEDS.length;
  document.getElementById("btn-speed").textContent =
    SPEED_LABELS[speedIdx] + " " + SPEEDS[speedIdx];
}
const MAP_W = 8000,
  MAP_H = 6000;

const PALETTE = [
  { bg: "#0d1f3c", wall: "#2050a0", label: "Azul" },
  { bg: "#1e0d0d", wall: "#7a2020", label: "Rojo" },
  { bg: "#0d1e0d", wall: "#207a20", label: "Verde" },
  { bg: "#1e1a06", wall: "#7a6010", label: "Dorado" },
  { bg: "#1a0d1e", wall: "#6020a0", label: "Morado" },
  { bg: "#0d1e1e", wall: "#1a8080", label: "Cian" },
  { bg: "#1e1006", wall: "#903010", label: "Naranja" },
  { bg: "#14141e", wall: "#404060", label: "Gris" },
];

const CAT = {
  leg_gen: { label: "LEGISLACIÓ GENERAL", cls: "tag-leg_gen", icon: "⚖" },
  leg_bom: { label: "LEGISLACIÓ BOMBERS", cls: "tag-leg_bom", icon: "🚒" },
  ciencies: { label: "CIÈNCIES BÀSIQUES", cls: "tag-ciencies", icon: "🔬" },
  foc: { label: "FOC I EXTINCIÓ", cls: "tag-foc", icon: "🔥" },
  risc: { label: "RISC QUÍMIC I SANITARI", cls: "tag-risc", icon: "☣" },
  mecanica: { label: "MECÀNICA I VEHICLES", cls: "tag-mecanica", icon: "⚙" },
  instal: { label: "INSTAL·LACIONS", cls: "tag-instal", icon: "🔌" },
  const_: { label: "CONSTRUCCIÓ", cls: "tag-const_", icon: "🏗" },
  territori: { label: "TERRITORI I NATURA", cls: "tag-territori", icon: "🌍" },
};

const FURNITURE = {
  // ── Sala d'estar ──
  sofa: {
    label: "Sofà",
    emoji: "🛋",
    w: 20,
    h: 20,
    base: "#3a2a6a",
    accent: "#5a4a9a",
  },
  armchair: {
    label: "Butaca",
    emoji: "💺",
    w: 20,
    h: 20,
    base: "#2a2a5a",
    accent: "#5a4a9a",
  },
  tv: {
    label: "Tele",
    emoji: "📺",
    w: 20,
    h: 20,
    base: "#1a1a2a",
    accent: "#3a3a5a",
  },
  coffeetable: {
    label: "Taula centre",
    emoji: "☕",
    w: 20,
    h: 20,
    base: "#3a2a1a",
    accent: "#7a5a2a",
  },
  rug: {
    label: "Catifa",
    emoji: "🟫",
    w: 20,
    h: 20,
    base: "#3a1a1a",
    accent: "#6a3a2a",
  },
  lamp: {
    label: "Làmpada",
    emoji: "💡",
    w: 20,
    h: 20,
    base: "#2a2a14",
    accent: "#7a7a2a",
  },
  fireplace: {
    label: "Llar de foc",
    emoji: "🔥",
    w: 20,
    h: 20,
    base: "#2a1010",
    accent: "#8a3020",
  },
  painting: {
    label: "Quadre",
    emoji: "🖼️",
    w: 20,
    h: 20,
    base: "#1a1a2a",
    accent: "#4a4a7a",
  },
  // ── Dormitori ──
  bed: {
    label: "Llit",
    emoji: "🛏",
    w: 20,
    h: 20,
    base: "#2a4a2a",
    accent: "#4a8a4a",
  },
  wardrobe: {
    label: "Armari",
    emoji: "🗄️",
    w: 20,
    h: 20,
    base: "#3a2a1a",
    accent: "#7a5a2a",
  },
  nightstand: {
    label: "Tauleta nit",
    emoji: "🕯️",
    w: 20,
    h: 20,
    base: "#2a2214",
    accent: "#5a502a",
  },
  mirror: {
    label: "Mirall",
    emoji: "🪞",
    w: 20,
    h: 20,
    base: "#1a2a2a",
    accent: "#3a6a6a",
  },
  // ── Estudi ──
  desk: {
    label: "Escriptori",
    emoji: "🖥",
    w: 20,
    h: 20,
    base: "#1a3a4a",
    accent: "#2a6a8a",
  },
  bookcase: {
    label: "Prestatgeria",
    emoji: "📚",
    w: 20,
    h: 20,
    base: "#3a2a1a",
    accent: "#7a5a2a",
  },
  piano: {
    label: "Piano",
    emoji: "🎹",
    w: 20,
    h: 20,
    base: "#101010",
    accent: "#404040",
  },
  // ── Cuina ──
  table: {
    label: "Taula",
    emoji: "🍽️",
    w: 20,
    h: 20,
    base: "#4a3a1a",
    accent: "#8a6a2a",
  },
  fridge: {
    label: "Nevera",
    emoji: "🧊",
    w: 20,
    h: 20,
    base: "#2a4a5a",
    accent: "#4a8aaa",
  },
  stove: {
    label: "Fogons",
    emoji: "🍳",
    w: 20,
    h: 20,
    base: "#252525",
    accent: "#585858",
  },
  washing: {
    label: "Rentadora",
    emoji: "🌀",
    w: 20,
    h: 20,
    base: "#1a2a3a",
    accent: "#2a5a7a",
  },
  // ── Bany ──
  toilet: {
    label: "WC",
    emoji: "🚽",
    w: 20,
    h: 20,
    base: "#3a3a4a",
    accent: "#6a6a8a",
  },
  bath: {
    label: "Banyera",
    emoji: "🛁",
    w: 20,
    h: 20,
    base: "#2a3a4a",
    accent: "#4a6a8a",
  },
  shower: {
    label: "Dutxa",
    emoji: "🚿",
    w: 20,
    h: 20,
    base: "#2a3a4a",
    accent: "#4a7a9a",
  },
  // ── General ──
  plant: {
    label: "Planta",
    emoji: "🪴",
    w: 20,
    h: 20,
    base: "#1a3a1a",
    accent: "#2a6a2a",
  },
  door: {
    label: "Porta",
    emoji: "🚪",
    w: 20,
    h: 20,
    base: "#3a2a1a",
    accent: "#7a5a2a",
  },
  // ── Animals ──
  lion: {
    label: "Lleó",
    emoji: "🦁",
    w: 20,
    h: 20,
    base: "#4a3a10",
    accent: "#9a7a20",
  },
  elephant: {
    label: "Elefant",
    emoji: "🐘",
    w: 20,
    h: 20,
    base: "#3a3a3a",
    accent: "#6a6a6a",
  },
  snake: {
    label: "Serp",
    emoji: "🐍",
    w: 20,
    h: 20,
    base: "#1a3a1a",
    accent: "#2a7a2a",
  },
  eagle: {
    label: "Àguila",
    emoji: "🦅",
    w: 20,
    h: 20,
    base: "#3a2a10",
    accent: "#7a5a20",
  },
  shark: {
    label: "Tauró",
    emoji: "🦈",
    w: 20,
    h: 20,
    base: "#1a2a4a",
    accent: "#2a4a8a",
  },
  bull: {
    label: "Toro",
    emoji: "🐂",
    w: 20,
    h: 20,
    base: "#3a1a10",
    accent: "#7a3a20",
  },
  wolf: {
    label: "Llop",
    emoji: "🐺",
    w: 20,
    h: 20,
    base: "#2a2a3a",
    accent: "#5a5a7a",
  },
  dragon: {
    label: "Drac",
    emoji: "🐉",
    w: 20,
    h: 20,
    base: "#1a3a1a",
    accent: "#2a8a3a",
  },
  octopus: {
    label: "Pop",
    emoji: "🐙",
    w: 20,
    h: 20,
    base: "#4a1a3a",
    accent: "#9a3a7a",
  },
  horse: {
    label: "Cavall",
    emoji: "🐴",
    w: 20,
    h: 20,
    base: "#3a2a1a",
    accent: "#7a5a2a",
  },
  bear: {
    label: "Os",
    emoji: "🐻",
    w: 20,
    h: 20,
    base: "#3a2a10",
    accent: "#6a4a20",
  },
  frog: {
    label: "Granota",
    emoji: "🐸",
    w: 20,
    h: 20,
    base: "#1a3a1a",
    accent: "#2a7a2a",
  },
  // ── Cossos i ment ──
  brain: {
    label: "Cervell",
    emoji: "🧠",
    w: 20,
    h: 20,
    base: "#3a1a2a",
    accent: "#8a3a6a",
  },
  eye: {
    label: "Ull",
    emoji: "👁",
    w: 20,
    h: 20,
    base: "#1a2a3a",
    accent: "#2a5a8a",
  },
  skull: {
    label: "Calavera",
    emoji: "💀",
    w: 20,
    h: 20,
    base: "#2a2a2a",
    accent: "#5a5a5a",
  },
  heart: {
    label: "Cor",
    emoji: "❤️",
    w: 20,
    h: 20,
    base: "#3a1010",
    accent: "#8a2020",
  },
  bone: {
    label: "Os (cos)",
    emoji: "🦴",
    w: 20,
    h: 20,
    base: "#3a3a2a",
    accent: "#7a7a5a",
  },
  hand: {
    label: "Mà",
    emoji: "✋",
    w: 20,
    h: 20,
    base: "#3a2a1a",
    accent: "#7a5a3a",
  },
  // ── Foc i emergències ──
  firetruck: {
    label: "Camió bombers",
    emoji: "🚒",
    w: 20,
    h: 20,
    base: "#3a0a0a",
    accent: "#9a1a1a",
  },
  extinguisher: {
    label: "Extintor",
    emoji: "🧯",
    w: 20,
    h: 20,
    base: "#3a0a0a",
    accent: "#9a2a2a",
  },
  helmet: {
    label: "Casc",
    emoji: "⛑️",
    w: 20,
    h: 20,
    base: "#2a3a1a",
    accent: "#5a7a3a",
  },
  explosion: {
    label: "Explosió",
    emoji: "💥",
    w: 20,
    h: 20,
    base: "#3a2a0a",
    accent: "#9a6a0a",
  },
  radioactive: {
    label: "Radioactiu",
    emoji: "☢️",
    w: 20,
    h: 20,
    base: "#1a3a0a",
    accent: "#4a9a0a",
  },
  biohazard: {
    label: "Bioperill",
    emoji: "☣️",
    w: 20,
    h: 20,
    base: "#2a2a0a",
    accent: "#7a7a0a",
  },
  // ── Natura i elements ──
  mountain: {
    label: "Muntanya",
    emoji: "⛰️",
    w: 20,
    h: 20,
    base: "#2a2a2a",
    accent: "#5a5a5a",
  },
  volcano: {
    label: "Volcà",
    emoji: "🌋",
    w: 20,
    h: 20,
    base: "#2a1010",
    accent: "#7a2020",
  },
  wave: {
    label: "Ona",
    emoji: "🌊",
    w: 20,
    h: 20,
    base: "#0a2a4a",
    accent: "#1a5a8a",
  },
  lightning: {
    label: "Llamp",
    emoji: "⚡",
    w: 20,
    h: 20,
    base: "#2a2a0a",
    accent: "#8a8a0a",
  },
  tornado: {
    label: "Tornado",
    emoji: "🌪️",
    w: 20,
    h: 20,
    base: "#1a1a3a",
    accent: "#3a3a7a",
  },
  tree: {
    label: "Arbre",
    emoji: "🌳",
    w: 20,
    h: 20,
    base: "#1a2a1a",
    accent: "#2a5a2a",
  },
  // ── Ciència i tècnica ──
  atom: {
    label: "Àtom",
    emoji: "⚛️",
    w: 20,
    h: 20,
    base: "#0a1a3a",
    accent: "#1a4a8a",
  },
  microscope: {
    label: "Microscopi",
    emoji: "🔬",
    w: 20,
    h: 20,
    base: "#1a2a1a",
    accent: "#2a5a3a",
  },
  magnet: {
    label: "Imant",
    emoji: "🧲",
    w: 20,
    h: 20,
    base: "#2a0a0a",
    accent: "#7a1a1a",
  },
  gear: {
    label: "Engranatge",
    emoji: "⚙️",
    w: 20,
    h: 20,
    base: "#2a2a2a",
    accent: "#5a5a5a",
  },
  battery: {
    label: "Bateria",
    emoji: "🔋",
    w: 20,
    h: 20,
    base: "#1a2a1a",
    accent: "#2a6a2a",
  },
  circuit: {
    label: "Circuit",
    emoji: "💻",
    w: 20,
    h: 20,
    base: "#0a1a0a",
    accent: "#1a4a1a",
  },
  flask: {
    label: "Matràs",
    emoji: "⚗️",
    w: 20,
    h: 20,
    base: "#1a2a3a",
    accent: "#2a5a7a",
  },
  // ── Objectes mnemotècnics ──
  key: {
    label: "Clau",
    emoji: "🗝️",
    w: 20,
    h: 20,
    base: "#3a2a0a",
    accent: "#8a6a0a",
  },
  bomb: {
    label: "Bomba",
    emoji: "💣",
    w: 20,
    h: 20,
    base: "#1a1a1a",
    accent: "#4a4a4a",
  },
  trophy: {
    label: "Trofeu",
    emoji: "🏆",
    w: 20,
    h: 20,
    base: "#3a2a0a",
    accent: "#9a7a0a",
  },
  sword: {
    label: "Espasa",
    emoji: "⚔️",
    w: 20,
    h: 20,
    base: "#2a2a3a",
    accent: "#5a5a7a",
  },
  shield: {
    label: "Escut",
    emoji: "🛡️",
    w: 20,
    h: 20,
    base: "#1a2a3a",
    accent: "#2a5a7a",
  },
  crown: {
    label: "Corona",
    emoji: "👑",
    w: 20,
    h: 20,
    base: "#3a2a0a",
    accent: "#9a7a0a",
  },
  anchor: {
    label: "Àncora",
    emoji: "⚓",
    w: 20,
    h: 20,
    base: "#1a2a3a",
    accent: "#2a5a7a",
  },
  hourglass: {
    label: "Rellotge sorra",
    emoji: "⏳",
    w: 20,
    h: 20,
    base: "#2a1a0a",
    accent: "#6a4a0a",
  },
  compass: {
    label: "Brúixola",
    emoji: "🧭",
    w: 20,
    h: 20,
    base: "#1a2a1a",
    accent: "#3a5a3a",
  },
  map: {
    label: "Mapa",
    emoji: "🗺️",
    w: 20,
    h: 20,
    base: "#2a2a1a",
    accent: "#5a5a2a",
  },
  book: {
    label: "Llibre",
    emoji: "📖",
    w: 20,
    h: 20,
    base: "#2a1a0a",
    accent: "#6a4a0a",
  },
  scroll: {
    label: "Pergamí",
    emoji: "📜",
    w: 20,
    h: 20,
    base: "#3a2a0a",
    accent: "#7a5a0a",
  },
  magnifier: {
    label: "Lupa",
    emoji: "🔍",
    w: 20,
    h: 20,
    base: "#1a2a2a",
    accent: "#2a5a5a",
  },
  warning: {
    label: "Avís",
    emoji: "⚠️",
    w: 20,
    h: 20,
    base: "#3a2a0a",
    accent: "#9a6a0a",
  },
};

// ════════════════════════════════════════════════
//  STATE
// ════════════════════════════════════════════════
let rooms = [],
  memories = [],
  furniture = [];
let nextRid = 1,
  nextMid = 1,
  nextFid = 1;

// Builder
let builderMode = false,
  currentTool = "draw",
  selectedColor = 0,
  selectedRoom = null;
let dragging = false,
  dragStart = null,
  dragCurrent = null,
  pendingRect = null,
  renamingId = null;
let selectedFurnitureType = "sofa";
let draggingFurniture = null,
  dragFurOffX = 0,
  dragFurOffY = 0;
let panning = false,
  panStartX = 0,
  panStartY = 0,
  panStartCamX = 0,
  panStartCamY = 0;
let resizingFurniture = null,
  resizeStartWX = 0,
  resizeStartWY = 0,
  resizeOrigW = 0,
  resizeOrigH = 0;
let selectedFurnitureId = null;
let draggingMem = null,
  dragMemOffX = 0,
  dragMemOffY = 0;

// Zoom
let zoomLevel = 1.5; // multiplier on BASE_SCALE
const ZOOM_MIN = 0.4,
  ZOOM_MAX = 3.0,
  ZOOM_STEP = 0.2;
function getScale() {
  return BASE_SCALE * zoomLevel;
}

const player = { x: 120, y: 120 };
let playerCfg = {
  gender: "m",
  skin: "#f0c080",
  outfit: "#e8a020",
  helmetColor: "#e8a020",
  name: "",
};
function loadPlayerCfg() {
  try {
    const s = localStorage.getItem("pc_player");
    if (s) playerCfg = { ...playerCfg, ...JSON.parse(s) };
  } catch (e) {}
}
function savePlayerCfg() {
  try {
    localStorage.setItem("pc_player", JSON.stringify(playerCfg));
  } catch (e) {}
}
loadPlayerCfg();
const keys = {},
  dpKeys = {};
let camX = 0,
  camY = 0,
  glowPh = 0,
  animF = 0;
let nearMem = null,
  openMem = null,
  curRoomName = "—",
  prevRoomId = null;
let cw = 0,
  ch = 0;

const canvas = document.getElementById("gc");
const ctx = canvas.getContext("2d");

// ── Quiz state ──
let quizMode = false,
  quizQueue = [],
  quizCurrent = null,
  quizCorrect = 0,
  quizForgot = 0,
  quizTotal = 0;

// Study stats per category { correct, total }
let studyStats = {
  leg_gen: { correct: 0, total: 0 },
  leg_bom: { correct: 0, total: 0 },
  ciencies: { correct: 0, total: 0 },
  foc: { correct: 0, total: 0 },
  risc: { correct: 0, total: 0 },
  mecanica: { correct: 0, total: 0 },
  instal: { correct: 0, total: 0 },
  const_: { correct: 0, total: 0 },
  territori: { correct: 0, total: 0 },
};

// ════════════════════════════════════════════════
//  PERSISTENCE
// ════════════════════════════════════════════════
function save() {
  try {
    localStorage.setItem("pc_rooms", JSON.stringify(rooms));
    localStorage.setItem("pc_mems", JSON.stringify(memories));
    localStorage.setItem("pc_furn", JSON.stringify(furniture));
    localStorage.setItem("pc_rid", nextRid);
    localStorage.setItem("pc_mid", nextMid);
    localStorage.setItem("pc_fid", nextFid);
    localStorage.setItem("pc_stats", JSON.stringify(studyStats));
  } catch (e) {}
}
function load() {
  try {
    const r = localStorage.getItem("pc_rooms");
    const m = localStorage.getItem("pc_mems");
    const f = localStorage.getItem("pc_furn");
    if (r) rooms = JSON.parse(r);
    if (m) memories = JSON.parse(m);
    if (f) furniture = JSON.parse(f);
    nextRid = parseInt(localStorage.getItem("pc_rid") || "1");
    nextMid = parseInt(localStorage.getItem("pc_mid") || "1");
    nextFid = parseInt(localStorage.getItem("pc_fid") || "1");
    const st = localStorage.getItem("pc_stats");
    if (st) studyStats = JSON.parse(st);
  } catch (e) {}
}
function loadDemo() {
  rooms = [
    { id: 1, name: "Saló", x: 10, y: 10, w: 280, h: 220, pal: 0 },
    { id: 2, name: "Cuina", x: 300, y: 10, w: 200, h: 180, pal: 1 },
    { id: 3, name: "Dormitori", x: 10, y: 240, w: 240, h: 210, pal: 2 },
    { id: 4, name: "Bany", x: 300, y: 200, w: 180, h: 165, pal: 5 },
    { id: 5, name: "Passadís", x: 255, y: 240, w: 220, h: 110, pal: 7 },
  ];
  furniture = [
    { id: 1, type: "sofa", room: 1, ox: 20, oy: 150 },
    { id: 2, type: "tv", room: 1, ox: 20, oy: 30 },
    { id: 3, type: "table", room: 2, ox: 60, oy: 80 },
    { id: 4, type: "fridge", room: 2, ox: 150, oy: 20 },
    { id: 5, type: "bed", room: 3, ox: 20, oy: 40 },
    { id: 6, type: "bookcase", room: 3, ox: 20, oy: 170 },
    { id: 7, type: "toilet", room: 4, ox: 20, oy: 20 },
    { id: 8, type: "bath", room: 4, ox: 60, oy: 110 },
  ];
  nextRid = 6;
  nextFid = 9;
  memories = [
    {
      id: 1,
      room: 1,
      cat: "ley",
      title: "Art. 23 — LPRL",
      body: "El empresario debe elaborar y conservar documentación relativa a las evaluaciones de riesgos.",
      ox: 200,
      oy: 90,
    },
    {
      id: 2,
      room: 1,
      cat: "temario",
      title: "Tipus de foc",
      body: "<strong>A</strong>: Sòlids · <strong>B</strong>: Líquids · <strong>C</strong>: Gasos · <strong>D</strong>: Metalls · <strong>F</strong>: Olis cuina",
      ox: 110,
      oy: 160,
    },
    {
      id: 3,
      room: 2,
      cat: "dato",
      title: "T. inflamació gasolina",
      body: "Punt d'inflamació: <strong>−43 °C</strong>. Tª mínima per emetre vapors inflamables.",
      ox: 110,
      oy: 100,
    },
    {
      id: 4,
      room: 3,
      cat: "proc",
      title: "RCP — 30:2",
      body: "<strong>30 compressions</strong> + <strong>2 ventilacions</strong>. 100-120/min. Profunditat 5-6 cm. Sense pauses > 10 s.",
      ox: 140,
      oy: 70,
    },
    {
      id: 5,
      room: 4,
      cat: "ley",
      title: "Llei 31/1995 — LPRL",
      body: "Llei de Prevenció de Riscos Laborals. Transposa la Directiva 89/391/CEE.",
      ox: 100,
      oy: 80,
    },
    {
      id: 6,
      room: 5,
      cat: "dato",
      title: "Monòxid de carboni",
      body: "Inodor i incolor. <strong>TLV-TWA: 25 ppm</strong>. Mortal en altes concentracions.",
      ox: 90,
      oy: 55,
    },
  ];
  nextMid = 7;
  save();
}

// ════════════════════════════════════════════════
//  EXPORT / IMPORT
// ════════════════════════════════════════════════
function exportPalace() {
  const data = {
    rooms,
    memories,
    furniture,
    nextRid,
    nextMid,
    nextFid,
    exportDate: new Date().toISOString(),
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download =
    "palau_memoria_" + new Date().toISOString().slice(0, 10) + ".json";
  a.click();
  URL.revokeObjectURL(url);
  showNotif("💾 Palau exportat!");
}
function importPalace() {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = ".json";
  input.onchange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const data = JSON.parse(ev.target.result);
        if (!data.rooms || !data.memories) throw new Error("Format invàlid");
        rooms = data.rooms;
        memories = data.memories;
        furniture = data.furniture || [];
        nextRid = data.nextRid || 1;
        nextMid = data.nextMid || 1;
        nextFid = data.nextFid || 1;
        save();
        refreshRoomSelect();
        renderEditorList();
        showNotif(
          "📂 Palau importat! " +
            rooms.length +
            " hab, " +
            memories.length +
            " mem.",
        );
      } catch (err) {
        showNotif("⚠ Error: fitxer no vàlid");
      }
    };
    reader.readAsText(file);
  };
  input.click();
}

// ════════════════════════════════════════════════
//  HELPERS
// ════════════════════════════════════════════════
function snap(v) {
  return Math.round(v / GRID) * GRID;
}
function getFD(type) {
  return (
    FURNITURE[type] || {
      label: "?",
      emoji: "❓",
      w: 28,
      h: 28,
      base: "#222",
      accent: "#444",
    }
  );
}
function roomAt(x, y) {
  return (
    rooms.find(
      (r) => x >= r.x && x <= r.x + r.w && y >= r.y && y <= r.y + r.h,
    ) || null
  );
}
function memPos(m) {
  if (m.furnitureId) {
    const f = furniture.find((f) => f.id === m.furnitureId);
    if (f) {
      const p = furPos(f);
      if (p) {
        const fw = f.scaleW || getFD(f.type).w,
          fh = f.scaleH || getFD(f.type).h;
        return { x: p.x + fw / 2, y: p.y + fh / 2 };
      }
    }
  }
  const r = rooms.find((r) => r.id === m.room);
  return r ? { x: r.x + m.ox, y: r.y + m.oy } : null;
}
function furPos(f) {
  const r = rooms.find((r) => r.id === f.room);
  return r ? { x: r.x + f.ox, y: r.y + f.oy } : null;
}
function dist(ax, ay, bx, by) {
  return Math.hypot(ax - bx, ay - by);
}
function c2w(cx, cy) {
  const S = getScale();
  return { x: (cx + camX) / S, y: (cy + camY) / S };
}
function resizeCanvas() {
  const w = document.getElementById("canvas-wrap");
  cw = w.clientWidth;
  ch = w.clientHeight;
  canvas.width = cw;
  canvas.height = ch;
}
function memAtWorld(wx, wy) {
  for (const m of memories) {
    const p = memPos(m);
    if (!p) continue;
    if (dist(wx, wy, p.x, p.y) < 18) return m;
  }
  return null;
}
function furAtWorld(wx, wy) {
  for (const f of furniture) {
    const p = furPos(f);
    if (!p) continue;
    const fd = getFD(f.type);
    if (!fd) continue;
    const fw = f.scaleW || fd.w;
    const fh = f.scaleH || fd.h;
    if (wx >= p.x && wx <= p.x + fw && wy >= p.y && wy <= p.y + fh) return f;
  }
  return null;
}

// ════════════════════════════════════════════════
//  ZOOM
// ════════════════════════════════════════════════
function applyZoom(newZoom, pivotCX, pivotCY) {
  const oldS = getScale();
  zoomLevel = Math.max(
    ZOOM_MIN,
    Math.min(ZOOM_MAX, parseFloat(newZoom.toFixed(2))),
  );
  const newS = getScale();
  camX = ((pivotCX + camX) / oldS) * newS - pivotCX;
  camY = ((pivotCY + camY) / oldS) * newS - pivotCY;
  const mx = Math.max(0, MAP_W * newS - cw);
  const my = Math.max(0, MAP_H * newS - ch);
  camX = Math.max(0, Math.min(mx, camX));
  camY = Math.max(0, Math.min(my, camY));
  const btn = document.getElementById("btn-zoom-pct");
  if (btn) btn.textContent = Math.round(zoomLevel * 100) + "%";
}
function zoomIn() {
  applyZoom(zoomLevel + ZOOM_STEP, cw / 2, ch / 2);
}
function zoomOut() {
  applyZoom(zoomLevel - ZOOM_STEP, cw / 2, ch / 2);
}
function zoomReset() {
  applyZoom(1.0, cw / 2, ch / 2);
}

// Wheel → zoom suau (trackpad i ratolí)
canvas.addEventListener(
  "wheel",
  (e) => {
    e.preventDefault();
    const factor = e.deltaMode === 1 ? 0.05 : 0.0018;
    const newZ = zoomLevel * (1 - e.deltaY * factor);
    applyZoom(newZ, e.offsetX, e.offsetY);
    showNotif("🔍 Zoom " + Math.round(zoomLevel * 100) + "%");
  },
  { passive: false },
);

// Evitar que el navegador faci zoom de pàgina amb pinch/ctrlKey+wheel
window.addEventListener(
  "wheel",
  (e) => {
    if (e.ctrlKey) e.preventDefault();
  },
  { passive: false },
);

// ════════════════════════════════════════════════
//  INPUT
// ════════════════════════════════════════════════
window.addEventListener("keydown", (e) => {
  keys[e.key] = true;
  if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " "].includes(e.key))
    e.preventDefault();
  if (
    (e.key === "e" || e.key === "E" || e.key === " ") &&
    nearMem &&
    !builderMode &&
    !quizMode
  ) {
    openMem ? closeMemory() : openMemCard(nearMem);
  }
  if (e.key === "Escape") {
    closeMemory();
    closeRoomModal();
    closeQuiz();
  }
  if (
    e.key === "Enter" &&
    document.getElementById("room-modal").classList.contains("visible")
  )
    confirmRoomName();
  if (e.key === "+" || e.key === "=") zoomIn();
  if (e.key === "-") zoomOut();
  if (e.key === "0") zoomReset();
});
window.addEventListener("keyup", (e) => {
  delete keys[e.key];
});

function dp(d, v) {
  dpKeys[d] = !!v;
  const el = document.getElementById("btn-" + d);
  if (el) v ? el.classList.add("pressed") : el.classList.remove("pressed");
}

canvas.addEventListener("mousedown", (e) => onDown(e.offsetX, e.offsetY));
canvas.addEventListener("mousemove", (e) => onMove(e.offsetX, e.offsetY));
canvas.addEventListener("mouseup", (e) => onUp(e.offsetX, e.offsetY));
canvas.addEventListener("mouseleave", (e) => {
  if (panning || dragging || draggingFurniture || draggingMem)
    onUp(e.offsetX, e.offsetY);
});
canvas.addEventListener(
  "touchstart",
  (e) => {
    e.preventDefault();
    const t = e.touches[0],
      r = canvas.getBoundingClientRect();
    onDown(t.clientX - r.left, t.clientY - r.top);
  },
  { passive: false },
);
canvas.addEventListener(
  "touchmove",
  (e) => {
    e.preventDefault();
    const t = e.touches[0],
      r = canvas.getBoundingClientRect();
    onMove(t.clientX - r.left, t.clientY - r.top);
  },
  { passive: false },
);
canvas.addEventListener("touchend", (e) => {
  const t = e.changedTouches[0],
    r = canvas.getBoundingClientRect();
  onUp(t.clientX - r.left, t.clientY - r.top);
});

function furResizeHandle(f) {
  // Returns world coords of the resize handle (bottom-right corner)
  const p = furPos(f);
  if (!p) return null;
  const fw = f.scaleW || getFD(f.type).w;
  const fh = f.scaleH || getFD(f.type).h;
  return { x: p.x + fw, y: p.y + fh };
}

function onDown(cx, cy) {
  if (!builderMode) {
    panning = true;
    panStartX = cx;
    panStartY = cy;
    panStartCamX = camX;
    panStartCamY = camY;
    canvas.style.cursor = "grabbing";
    return;
  }
  const w = c2w(cx, cy);
  if (currentTool === "furniture") {
    // 1. Check resize handle first (8px world radius)
    for (const f of furniture) {
      const h = furResizeHandle(f);
      if (!h) continue;
      if (dist(w.x, w.y, h.x, h.y) < 10) {
        resizingFurniture = f;
        resizeStartWX = w.x;
        resizeStartWY = w.y;
        resizeOrigW = f.scaleW || getFD(f.type).w;
        resizeOrigH = f.scaleH || getFD(f.type).h;
        return;
      }
    }
    // 2. Check drag existing
    const f = furAtWorld(w.x, w.y);
    if (f) {
      const p = furPos(f);
      draggingFurniture = f;
      dragFurOffX = w.x - p.x;
      dragFurOffY = w.y - p.y;
      selectedFurnitureId = f.id;
      return;
    }
    // 3. Place new — clamp so it stays inside room
    const r = roomAt(w.x, w.y);
    if (r) {
      const fd = FURNITURE[selectedFurnitureType];
      const fw = fd.w,
        fh = fd.h;
      const ox = Math.max(0, Math.min(r.w - fw, snap(w.x - r.x - fw / 2)));
      const oy = Math.max(0, Math.min(r.h - fh, snap(w.y - r.y - fh / 2)));
      furniture.push({
        id: nextFid++,
        type: selectedFurnitureType,
        room: r.id,
        ox,
        oy,
      });
      selectedFurnitureId = furniture[furniture.length - 1].id;
      save();
      showNotif("🖼 " + fd.label + " col·locada");
    } else {
      showNotif("⚠ Col·loca la imatge dins una habitació");
    }
    return;
  }
  if (currentTool === "movemem") {
    const m = memAtWorld(w.x, w.y);
    if (m) {
      const p = memPos(m);
      draggingMem = m;
      dragMemOffX = w.x - p.x;
      dragMemOffY = w.y - p.y;
    } else {
      showNotif("⚠ Fes click sobre una memòria (icona)");
    }
    return;
  }
  if (currentTool === "erase") {
    const f = furAtWorld(w.x, w.y);
    if (f) {
      const del = f;
      furniture = furniture.filter((x) => x.id !== f.id);
      if (selectedFurnitureId === f.id) selectedFurnitureId = null;
      save();
      showUndoNotif("🗑 " + getFD(del.type).label + " eliminat", () => {
        furniture.push(del);
        save();
        showNotif("↩ " + getFD(del.type).label + " restaurat");
      });
      return;
    }
    const r = roomAt(w.x, w.y);
    if (r) deleteRoom(r.id);
    return;
  }
  if (currentTool === "draw") {
    dragging = true;
    dragStart = { x: snap(w.x), y: snap(w.y) };
    dragCurrent = { ...dragStart };
  }
  selectedRoom = roomAt(w.x, w.y)?.id || null;
}
function onMove(cx, cy) {
  if (panning) {
    const S = getScale();
    camX = Math.max(
      0,
      Math.min(Math.max(0, MAP_W * S - cw), panStartCamX - (cx - panStartX)),
    );
    camY = Math.max(
      0,
      Math.min(Math.max(0, MAP_H * S - ch), panStartCamY - (cy - panStartY)),
    );
    return;
  }
  if (!builderMode) return;
  const w = c2w(cx, cy);
  if (resizingFurniture) {
    const r = rooms.find((r) => r.id === resizingFurniture.room);
    if (r) {
      const dw = w.x - resizeStartWX,
        dh = w.y - resizeStartWY;
      const maxW = r.w - resizingFurniture.ox,
        maxH = r.h - resizingFurniture.oy;
      resizingFurniture.scaleW = Math.max(
        GRID,
        Math.min(maxW, snap(resizeOrigW + dw)),
      );
      resizingFurniture.scaleH = Math.max(
        GRID,
        Math.min(maxH, snap(resizeOrigH + dh)),
      );
    }
    return;
  }
  if (draggingFurniture) {
    const fw = draggingFurniture.scaleW || getFD(draggingFurniture.type).w;
    const fh = draggingFurniture.scaleH || getFD(draggingFurniture.type).h;
    const targetRoom = roomAt(w.x, w.y);
    if (targetRoom) {
      draggingFurniture.room = targetRoom.id;
      draggingFurniture.ox = Math.max(
        0,
        Math.min(targetRoom.w - fw, snap(w.x - targetRoom.x - dragFurOffX)),
      );
      draggingFurniture.oy = Math.max(
        0,
        Math.min(targetRoom.h - fh, snap(w.y - targetRoom.y - dragFurOffY)),
      );
    }
    return;
  }
  if (draggingMem) {
    const targetRoom = roomAt(w.x, w.y);
    if (targetRoom) {
      draggingMem.room = targetRoom.id;
      draggingMem.ox = Math.max(
        10,
        Math.min(
          targetRoom.w - 10,
          Math.round(w.x - targetRoom.x - dragMemOffX),
        ),
      );
      draggingMem.oy = Math.max(
        10,
        Math.min(
          targetRoom.h - 10,
          Math.round(w.y - targetRoom.y - dragMemOffY),
        ),
      );
    }
    return;
  }
  if (dragging) dragCurrent = { x: snap(w.x), y: snap(w.y) };
}
function onUp(cx, cy) {
  if (panning) {
    panning = false;
    canvas.style.cursor = "grab";
    return;
  }
  if (resizingFurniture) {
    resizingFurniture = null;
    save();
    return;
  }
  if (draggingFurniture) {
    draggingFurniture = null;
    save();
    return;
  }
  if (draggingMem) {
    draggingMem = null;
    save();
    return;
  }
  if (!builderMode || !dragging) return;
  dragging = false;
  const w = c2w(cx, cy);
  dragCurrent = { x: snap(w.x), y: snap(w.y) };
  const x = Math.min(dragStart.x, dragCurrent.x),
    y = Math.min(dragStart.y, dragCurrent.y);
  const rw = Math.abs(dragCurrent.x - dragStart.x),
    rh = Math.abs(dragCurrent.y - dragStart.y);
  dragStart = dragCurrent = null;
  if (rw >= GRID * 2 && rh >= GRID * 2) {
    pendingRect = { x, y, w: rw, h: rh };
    openRoomModal("Nova habitació");
  }
}

// ════════════════════════════════════════════════
//  ROOMS
// ════════════════════════════════════════════════
function deleteRoom(id) {
  const room = rooms.find((r) => r.id === id);
  if (!room) return;
  const deletedMems = memories.filter((m) => m.room === id);
  const deletedFurn = furniture.filter((f) => f.room === id);
  rooms = rooms.filter((r) => r.id !== id);
  memories = memories.filter((m) => m.room !== id);
  furniture = furniture.filter((f) => f.room !== id);
  if (selectedRoom === id) selectedRoom = null;
  save();
  refreshRoomSelect();
  showUndoNotif("🗑 " + room.name + " eliminada", () => {
    rooms.push(room);
    memories.push(...deletedMems);
    furniture.push(...deletedFurn);
    save();
    refreshRoomSelect();
    showNotif("↩ " + room.name + " restaurada");
  });
}
function openRoomModal(def) {
  document.getElementById("modal-input").value = def;
  document.getElementById("room-modal").classList.add("visible");
  setTimeout(() => document.getElementById("modal-input").select(), 60);
}
function closeRoomModal() {
  document.getElementById("room-modal").classList.remove("visible");
  pendingRect = null;
  renamingId = null;
}
function confirmRoomName() {
  const name =
    document.getElementById("modal-input").value.trim() || "Habitació";
  if (renamingId !== null) {
    const r = rooms.find((r) => r.id === renamingId);
    if (r) r.name = name;
    save();
    refreshRoomSelect();
    closeRoomModal();
    showNotif("✏ " + name);
    return;
  }
  if (!pendingRect) {
    closeRoomModal();
    return;
  }
  rooms.push({ id: nextRid++, name, ...pendingRect, pal: selectedColor });
  pendingRect = null;
  save();
  refreshRoomSelect();
  closeRoomModal();
  showNotif("✦ " + name + " afegida");
}
function renameSelected() {
  if (selectedRoom === null) {
    showNotif("⚠ Fes click en una habitació primer");
    return;
  }
  renamingId = selectedRoom;
  const r = rooms.find((r) => r.id === selectedRoom);
  openRoomModal(r ? r.name : "");
}

// ════════════════════════════════════════════════
//  DRAW — MINIMAP
// ════════════════════════════════════════════════
function drawMinimap() {
  if (!rooms.length) return;
  const MM_W = 140,
    MM_H = 100,
    MM_PAD = 10;
  const mx = cw - MM_W - MM_PAD,
    my = MM_PAD;

  // Background
  ctx.fillStyle = "rgba(4,6,15,0.85)";
  ctx.beginPath();
  ctx.roundRect(mx, my, MM_W, MM_H, 6);
  ctx.fill();
  ctx.strokeStyle = "rgba(80,160,255,0.25)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.roundRect(mx, my, MM_W, MM_H, 6);
  ctx.stroke();

  // Calculate bounds
  const allX = rooms.flatMap((r) => [r.x, r.x + r.w]);
  const allY = rooms.flatMap((r) => [r.y, r.y + r.h]);
  const minX = Math.min(...allX),
    maxX = Math.max(...allX);
  const minY = Math.min(...allY),
    maxY = Math.max(...allY);
  const spanX = maxX - minX || 1,
    spanY = maxY - minY || 1;
  const scX = (MM_W - 16) / spanX,
    scY = (MM_H - 16) / spanY;
  const sc = Math.min(scX, scY);

  function mmX(wx) {
    return mx + 8 + (wx - minX) * sc;
  }
  function mmY(wy) {
    return my + 8 + (wy - minY) * sc;
  }

  // Rooms
  for (const r of rooms) {
    const p = PALETTE[r.pal] || PALETTE[0];
    ctx.fillStyle = p.bg + "dd";
    ctx.fillRect(mmX(r.x), mmY(r.y), r.w * sc, r.h * sc);
    ctx.strokeStyle = p.wall + "99";
    ctx.lineWidth = 0.5;
    ctx.strokeRect(mmX(r.x), mmY(r.y), r.w * sc, r.h * sc);
  }

  // Memory dots
  for (const m of memories) {
    const pos = memPos(m);
    if (!pos) continue;
    const col =
      m.cat === "ley"
        ? "#ff6464"
        : m.cat === "proc"
          ? "#50beff"
          : m.cat === "dato"
            ? "#ffc832"
            : "#9164ff";
    ctx.fillStyle = col;
    ctx.beginPath();
    ctx.arc(mmX(pos.x), mmY(pos.y), 2.5, 0, Math.PI * 2);
    ctx.fill();
  }

  // Player dot
  ctx.fillStyle = "#ff8c00";
  ctx.beginPath();
  ctx.arc(mmX(player.x), mmY(player.y), 3.5, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "#fff";
  ctx.lineWidth = 0.8;
  ctx.beginPath();
  ctx.arc(mmX(player.x), mmY(player.y), 3.5, 0, Math.PI * 2);
  ctx.stroke();

  // Viewport rect
  const S = getScale();
  const vx = camX / S,
    vy = camY / S,
    vw = cw / S,
    vh = ch / S;
  ctx.strokeStyle = "rgba(255,255,255,0.3)";
  ctx.lineWidth = 0.8;
  ctx.strokeRect(mmX(vx), mmY(vy), vw * sc, vh * sc);
}

// ════════════════════════════════════════════════
//  DRAW — FURNITURE
// ════════════════════════════════════════════════
function drawFurniture(ox, oy) {
  const S = getScale();
  for (const f of furniture) {
    const p = furPos(f);
    if (!p) continue;
    const fd = getFD(f.type);
    if (!fd) continue;
    const fw = f.scaleW || fd.w,
      fh = f.scaleH || fd.h;
    const sx = p.x * S + ox,
      sy = p.y * S + oy,
      sw = fw * S,
      sh = fh * S;
    const isDrag = draggingFurniture && draggingFurniture.id === f.id;
    const isResize = resizingFurniture && resizingFurniture.id === f.id;
    const isSel =
      builderMode &&
      currentTool === "furniture" &&
      selectedFurnitureId === f.id;

    // Shadow
    ctx.fillStyle = "rgba(0,0,0,0.25)";
    ctx.fillRect(sx + 3, sy + 4, sw, sh);

    // Body gradient
    const grad = ctx.createLinearGradient(sx, sy, sx + sw, sy + sh);
    grad.addColorStop(0, fd.accent);
    grad.addColorStop(1, fd.base);
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.roundRect(sx, sy, sw, sh, 4);
    ctx.fill();

    // Border
    ctx.strokeStyle =
      isDrag || isResize
        ? "#ffffff"
        : isSel
          ? "rgba(255,220,80,0.9)"
          : fd.accent + "88";
    ctx.lineWidth = isDrag || isResize || isSel ? 2 : 1;
    ctx.beginPath();
    ctx.roundRect(sx, sy, sw, sh, 4);
    ctx.stroke();

    // Emoji moble
    ctx.font = `${Math.min(sw, sh) * 0.52}px serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(fd.emoji, sx + sw / 2, sy + sh / 2);
    ctx.textBaseline = "alphabetic";

    // Memory indicator (small glowing dot if memories are linked to this furniture)
    const memCount = memories.filter((m) => m.furnitureId === f.id).length;
    if (memCount > 0) {
      const dotX = sx + sw - 7 * S,
        dotY = sy + 7 * S,
        dotR = 5.5 * S;
      const glow = ctx.createRadialGradient(
        dotX,
        dotY,
        0,
        dotX,
        dotY,
        dotR * 2,
      );
      glow.addColorStop(0, "rgba(255,220,80,0.6)");
      glow.addColorStop(1, "rgba(255,220,80,0)");
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(dotX, dotY, dotR * 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "rgba(255,220,80,0.95)";
      ctx.beginPath();
      ctx.arc(dotX, dotY, dotR, 0, Math.PI * 2);
      ctx.fill();
      if (memCount > 1) {
        ctx.fillStyle = "rgba(0,0,0,0.8)";
        ctx.font = `bold ${5 * S}px Share Tech Mono,monospace`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(memCount, dotX, dotY + 0.5 * S);
        ctx.textBaseline = "alphabetic";
      }
    }

    // Resize handle (only when selected in furniture tool)
    if (isSel || isDrag || isResize) {
      const hx = sx + sw,
        hy = sy + sh,
        hr = 7;
      ctx.fillStyle = isResize ? "#ffffff" : "#ffd700";
      ctx.strokeStyle = "rgba(0,0,0,0.6)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(hx, hy, hr, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = "rgba(0,0,0,0.7)";
      ctx.font = `bold ${hr * 1.1}px serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("↘", hx, hy + 1);
      ctx.textBaseline = "alphabetic";
    }
  }
}

// ════════════════════════════════════════════════
//  DRAW — ROOMS / GRID / PREVIEW / MEMORIES / PLAYER
// ════════════════════════════════════════════════
function drawGrid(ox, oy) {
  const S = getScale(),
    ts = GRID * S;
  ctx.strokeStyle = "rgba(255,255,255,0.022)";
  ctx.lineWidth = 0.5;
  for (let x = ((ox % ts) + ts) % ts; x < cw; x += ts) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, ch);
    ctx.stroke();
  }
  for (let y = ((oy % ts) + ts) % ts; y < ch; y += ts) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(cw, y);
    ctx.stroke();
  }
}

function drawRooms(ox, oy) {
  const S = getScale();
  for (const r of rooms) {
    const p = PALETTE[r.pal] || PALETTE[0];
    const rx = r.x * S + ox,
      ry = r.y * S + oy,
      rw = r.w * S,
      rh = r.h * S;
    ctx.fillStyle = p.bg;
    ctx.fillRect(rx, ry, rw, rh);
    ctx.strokeStyle = p.wall + "40";
    ctx.lineWidth = 0.5;
    const ts = GRID * S;
    for (let gx = rx; gx <= rx + rw; gx += ts) {
      ctx.beginPath();
      ctx.moveTo(gx, ry);
      ctx.lineTo(gx, ry + rh);
      ctx.stroke();
    }
    for (let gy = ry; gy <= ry + rh; gy += ts) {
      ctx.beginPath();
      ctx.moveTo(rx, gy);
      ctx.lineTo(rx + rw, gy);
      ctx.stroke();
    }
    const sel = builderMode && selectedRoom === r.id;
    ctx.strokeStyle = sel ? "#ffffff" : p.wall;
    ctx.lineWidth = sel ? 3 : 2;
    ctx.strokeRect(rx + 1, ry + 1, rw - 2, rh - 2);
    if (sel) {
      ctx.fillStyle = "rgba(255,255,255,0.05)";
      ctx.fillRect(rx, ry, rw, rh);
    }
    ctx.fillStyle = sel ? "rgba(255,255,255,0.28)" : "rgba(255,255,255,0.1)";
    ctx.font = `bold ${9 * S}px Orbitron,monospace`;
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.fillText(r.name.toUpperCase(), rx + rw / 2, ry + 7);
    ctx.textBaseline = "alphabetic";
  }
}

function drawPreview(ox, oy) {
  if (!dragging || !dragStart || !dragCurrent) return;
  const S = getScale();
  const x = Math.min(dragStart.x, dragCurrent.x),
    y = Math.min(dragStart.y, dragCurrent.y);
  const w = Math.abs(dragCurrent.x - dragStart.x),
    h = Math.abs(dragCurrent.y - dragStart.y);
  const p = PALETTE[selectedColor],
    sx = x * S + ox,
    sy = y * S + oy;
  ctx.fillStyle = p.bg + "99";
  ctx.fillRect(sx, sy, w * S, h * S);
  ctx.strokeStyle = "#60ff90";
  ctx.lineWidth = 2;
  ctx.setLineDash([8, 5]);
  ctx.strokeRect(sx + 1, sy + 1, w * S - 2, h * S - 2);
  ctx.setLineDash([]);
  if (w >= GRID * 2 && h >= GRID * 2) {
    ctx.fillStyle = "rgba(96,255,144,0.8)";
    ctx.font = `bold ${8 * S}px Share Tech Mono,monospace`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(`${w}×${h}`, sx + (w * S) / 2, sy + (h * S) / 2);
    ctx.textBaseline = "alphabetic";
  }
}

function drawMemories(ox, oy) {
  glowPh += 0.05;
  const g = 0.5 + 0.5 * Math.sin(glowPh),
    S = getScale();
  for (const m of memories) {
    const pos = memPos(m);
    if (!pos) continue;
    const sx = pos.x * S + ox,
      sy = pos.y * S + oy;
    const isN = nearMem && nearMem.id === m.id,
      isDrag = draggingMem && draggingMem.id === m.id;
    const rad = (isN || isDrag ? 23 : 16) * S;
    const CAT_COLORS = {
      leg_gen: "255,100,100",
      leg_bom: "255,140,60",
      ciencies: "80,190,255",
      foc: "255,100,30",
      risc: "180,255,100",
      mecanica: "160,160,160",
      instal: "80,180,255",
      const_: "200,150,80",
      territori: "100,200,130",
    };
    const col = CAT_COLORS[m.cat] || "150,150,255";
    const gr = ctx.createRadialGradient(sx, sy, 0, sx, sy, rad);
    gr.addColorStop(
      0,
      `rgba(${col},${isN || isDrag ? 0.5 + 0.3 * g : 0.18 + 0.1 * g})`,
    );
    gr.addColorStop(1, `rgba(${col},0)`);
    ctx.fillStyle = gr;
    ctx.beginPath();
    ctx.arc(sx, sy, rad, 0, Math.PI * 2);
    ctx.fill();
    if (isDrag) {
      ctx.strokeStyle = "rgba(255,255,255,0.8)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(sx, sy, rad * 0.55, 0, Math.PI * 2);
      ctx.stroke();
    }
    const bounce = isN ? Math.sin(glowPh * 2) * 2.5 : 0;
    ctx.font = `${(isN ? 20 : 15) * S}px serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(CAT[m.cat]?.icon || "✦", sx, sy - bounce * S);
    ctx.textBaseline = "alphabetic";
    if (isN) {
      ctx.fillStyle = `rgba(255,255,255,${0.38 + 0.38 * g})`;
      ctx.font = `bold ${7 * S}px Share Tech Mono,monospace`;
      ctx.textAlign = "center";
      ctx.fillText("[E]", sx, sy + 21 * S - bounce * S);
    }
    if (builderMode && currentTool === "movemem") {
      ctx.fillStyle = "rgba(255,200,80,0.7)";
      ctx.font = `${7 * S}px Share Tech Mono,monospace`;
      ctx.textAlign = "center";
      ctx.fillText("✥", sx, sy + 18 * S);
    }
  }
}

// ═══════════════════════════════════════════════════════════════════
//  PATCH per game.js — Personatge bomber millorat
//
//  INSTRUCCIONS:
//  1. Obre game.js
//  2. Busca la funció "function _lighten" (o si no existeix, busca
//     "function _drawCharHelmet")
//  3. Substitueix TOT el bloc des de "_lighten" fins al final de
//     "_drawCharHelmet" (inclòs) per el codi d'aquest fitxer.
// ═══════════════════════════════════════════════════════════════════

// ── Helpers de color ──────────────────────────────────────────────
function _lighten(hex, amt) {
  try {
    const r = parseInt(hex.slice(1, 3), 16),
      g = parseInt(hex.slice(3, 5), 16),
      b = parseInt(hex.slice(5, 7), 16);
    return `rgb(${Math.min(255, (r + amt * 255) | 0)},${Math.min(255, (g + amt * 255) | 0)},${Math.min(255, (b + amt * 255) | 0)})`;
  } catch (e) {
    return hex;
  }
}
function _darken(hex, amt) {
  try {
    const r = parseInt(hex.slice(1, 3), 16),
      g = parseInt(hex.slice(3, 5), 16),
      b = parseInt(hex.slice(5, 7), 16);
    return `rgb(${Math.max(0, (r - amt * 255) | 0)},${Math.max(0, (g - amt * 255) | 0)},${Math.max(0, (b - amt * 255) | 0)})`;
  } catch (e) {
    return hex;
  }
}

// ── Dibuix compartit del personatge (top-down, vista cenital) ─────
// sx,sy = centre del personatge en píxels pantalla
// sz    = P_SIZE * getScale()  (mida base × zoom)
// cfg   = { gender, skin, outfit, helmetColor, name }
function _drawCharHelmet(c, sx, cy, sz, cfg) {
  const helmR = sz * 0.82; // radi del casc (domina la vista)
  const visR = sz * 0.38; // radi de l'obertura de la visera
  const visOY = sz * 0.1; // la visera queda una mica cap avall

  // ── Ombra del personatge al terra ──
  c.fillStyle = "rgba(0,0,0,0.32)";
  c.beginPath();
  c.ellipse(
    sx + sz * 0.07,
    cy + sz * 0.09,
    helmR * 0.88,
    helmR * 0.65,
    0,
    0,
    Math.PI * 2,
  );
  c.fill();

  // ── Cos / granota (anell visible als marges del casc) ──
  c.fillStyle = cfg.outfit;
  c.beginPath();
  c.arc(sx, cy, helmR * 0.7, 0, Math.PI * 2);
  c.fill();

  // Franges reflectores de la granota (norma de seguretat)
  c.strokeStyle = "rgba(255,240,70,0.75)";
  c.lineWidth = sz * 0.055;
  c.beginPath();
  c.arc(sx, cy, helmR * 0.6, Math.PI * 0.25, Math.PI * 0.85);
  c.stroke();
  c.beginPath();
  c.arc(sx, cy, helmR * 0.6, Math.PI * 1.15, Math.PI * 1.75);
  c.stroke();

  // ── Casc: ombra interior (profunditat) ──
  c.fillStyle = "rgba(0,0,0,0.22)";
  c.beginPath();
  c.arc(sx + sz * 0.05, cy + sz * 0.05, helmR, 0, Math.PI * 2);
  c.fill();

  // ── Casc: cos principal amb gradient radial 3D ──
  const hg = c.createRadialGradient(
    sx - helmR * 0.32,
    cy - helmR * 0.32,
    0,
    sx,
    cy,
    helmR * 1.05,
  );
  hg.addColorStop(0, _lighten(cfg.helmetColor, 0.48));
  hg.addColorStop(0.35, cfg.helmetColor);
  hg.addColorStop(0.75, _darken(cfg.helmetColor, 0.3));
  hg.addColorStop(1, _darken(cfg.helmetColor, 0.6));
  c.fillStyle = hg;
  c.beginPath();
  c.arc(sx, cy, helmR, 0, Math.PI * 2);
  c.fill();

  // ── Casc: bora/ala (anell extern fosc) ──
  c.strokeStyle = _darken(cfg.helmetColor, 0.25);
  c.lineWidth = sz * 0.09;
  c.beginPath();
  c.arc(sx, cy, helmR * 0.975, 0, Math.PI * 2);
  c.stroke();

  // ── Casc: franja reflectora groga horitzontal ──
  c.strokeStyle = "rgba(255,235,50,0.80)";
  c.lineWidth = sz * 0.065;
  c.beginPath();
  c.arc(sx, cy, helmR * 0.76, 0, Math.PI * 2);
  c.stroke();

  // ── Visera: fons fosc (sembla profunditat) ──
  c.fillStyle = "rgba(4,6,18,0.90)";
  c.beginPath();
  c.arc(sx, cy + visOY, visR, 0, Math.PI * 2);
  c.fill();

  // ── Cara (pell visible dins la visera) ──
  c.fillStyle = cfg.skin;
  c.beginPath();
  c.arc(sx, cy + visOY + sz * 0.03, visR * 0.74, 0, Math.PI * 2);
  c.fill();

  // ── Cabell (dona: visible als costats de la visera) ──
  if (cfg.gender === "f") {
    c.fillStyle = "#3a1e08";
    const hairY = cy + visOY + sz * 0.1;
    c.beginPath();
    c.arc(sx - visR * 0.82, hairY, visR * 0.3, 0, Math.PI * 2);
    c.fill();
    c.beginPath();
    c.arc(sx + visR * 0.82, hairY, visR * 0.3, 0, Math.PI * 2);
    c.fill();
    c.beginPath();
    c.ellipse(
      sx - visR * 0.72,
      hairY - visR * 0.08,
      visR * 0.14,
      visR * 0.38,
      -0.3,
      0,
      Math.PI * 2,
    );
    c.fill();
    c.beginPath();
    c.ellipse(
      sx + visR * 0.72,
      hairY - visR * 0.08,
      visR * 0.14,
      visR * 0.38,
      0.3,
      0,
      Math.PI * 2,
    );
    c.fill();
  }

  // ── Ulls ──
  const eyeY = cy + visOY - sz * 0.04;
  const eyeR = sz * 0.082;
  const eyeOff = sz * 0.165;

  // Blancs
  c.fillStyle = "#eef3ff";
  c.beginPath();
  c.arc(sx - eyeOff, eyeY, eyeR, 0, Math.PI * 2);
  c.fill();
  c.beginPath();
  c.arc(sx + eyeOff, eyeY, eyeR, 0, Math.PI * 2);
  c.fill();

  // Pupil·les (mirada lleugerament cap endavant)
  c.fillStyle = "#18102e";
  c.beginPath();
  c.arc(
    sx - eyeOff + eyeR * 0.14,
    eyeY + eyeR * 0.1,
    eyeR * 0.56,
    0,
    Math.PI * 2,
  );
  c.fill();
  c.beginPath();
  c.arc(
    sx + eyeOff + eyeR * 0.14,
    eyeY + eyeR * 0.1,
    eyeR * 0.56,
    0,
    Math.PI * 2,
  );
  c.fill();

  // Brillantor dels ulls
  c.fillStyle = "rgba(255,255,255,0.88)";
  c.beginPath();
  c.arc(
    sx - eyeOff - eyeR * 0.18,
    eyeY - eyeR * 0.26,
    eyeR * 0.27,
    0,
    Math.PI * 2,
  );
  c.fill();
  c.beginPath();
  c.arc(
    sx + eyeOff - eyeR * 0.18,
    eyeY - eyeR * 0.26,
    eyeR * 0.27,
    0,
    Math.PI * 2,
  );
  c.fill();

  // ── Nas ──
  c.fillStyle = _darken(cfg.skin, 0.18) + "bb";
  c.beginPath();
  c.arc(sx, eyeY + eyeR * 1.55, eyeR * 0.36, 0, Math.PI * 2);
  c.fill();

  // ── Marc metàl·lic de la visera ──
  c.strokeStyle = _darken(cfg.helmetColor, 0.15);
  c.lineWidth = sz * 0.065;
  c.beginPath();
  c.arc(sx, cy + visOY, visR + sz * 0.035, 0, Math.PI * 2);
  c.stroke();

  // ── Reflex de vidre a la visera ──
  const vg = c.createRadialGradient(
    sx - visR * 0.22,
    cy + visOY - visR * 0.15,
    0,
    sx,
    cy + visOY,
    visR,
  );
  vg.addColorStop(0, "rgba(140,200,255,0.22)");
  vg.addColorStop(0.5, "rgba(80,140,255,0.06)");
  vg.addColorStop(1, "rgba(0,0,0,0)");
  c.fillStyle = vg;
  c.beginPath();
  c.arc(sx, cy + visOY, visR, 0, Math.PI * 2);
  c.fill();

  // ── Brillantor especular del casc (punt de llum alt-esquerre) ──
  const sg = c.createRadialGradient(
    sx - helmR * 0.38,
    cy - helmR * 0.38,
    0,
    sx - helmR * 0.22,
    cy - helmR * 0.22,
    helmR * 0.38,
  );
  sg.addColorStop(0, "rgba(255,255,255,0.46)");
  sg.addColorStop(0.5, "rgba(255,255,255,0.12)");
  sg.addColorStop(1, "rgba(255,255,255,0)");
  c.fillStyle = sg;
  c.beginPath();
  c.arc(sx, cy, helmR, 0, Math.PI * 2);
  c.fill();

  // ── Lletra 'B' al front del casc ──
  c.fillStyle = "rgba(0,0,0,0.52)";
  c.font = `bold ${sz * 0.22}px Orbitron,monospace`;
  c.textAlign = "center";
  c.textBaseline = "middle";
  c.fillText("B", sx, cy - helmR * 0.46);
  c.textBaseline = "alphabetic";

  // ── Nom del personatge (a dalt del casc) ──
  if (cfg.name) {
    c.fillStyle = "rgba(255,220,100,0.92)";
    c.font = `bold ${sz * 0.27}px Share Tech Mono,monospace`;
    c.textAlign = "center";
    c.textBaseline = "alphabetic";
    c.fillText(cfg.name, sx, cy - helmR - sz * 0.12);
  }
}

function drawPlayer(ox, oy) {
  if (builderMode) return;
  const S = getScale();
  const sx = player.x * S + ox,
    sy = player.y * S + oy,
    sz = P_SIZE * S;
  const mv =
    keys["ArrowUp"] ||
    keys["ArrowDown"] ||
    keys["ArrowLeft"] ||
    keys["ArrowRight"] ||
    dpKeys.up ||
    dpKeys.down ||
    dpKeys.left ||
    dpKeys.right;
  const bob = mv ? Math.sin(animF * 0.3) * 1.2 : 0;
  const bS = bob * S;

  _drawCharHelmet(ctx, sx, sy - bS, sz, playerCfg);

  if (playerCfg.name) {
    const hr = sz * 0.68;
    ctx.fillStyle = "rgba(255,220,100,0.92)";
    ctx.font = `bold ${sz * 0.28}px Share Tech Mono,monospace`;
    ctx.textAlign = "center";
    ctx.textBaseline = "alphabetic";
    ctx.fillText(playerCfg.name, sx, sy - sz * 0.04 - hr - sz * 0.1 - bS);
  }
}

function drawZoomHUD() {}

// ════════════════════════════════════════════════
//  UPDATE
// ════════════════════════════════════════════════
function updatePlayer() {
  if (openMem || builderMode || quizMode) return;
  let dx = 0,
    dy = 0;
  if (keys["ArrowLeft"] || dpKeys.left) dx -= getSpeed();
  if (keys["ArrowRight"] || dpKeys.right) dx += getSpeed();
  if (keys["ArrowUp"] || dpKeys.up) dy -= getSpeed();
  if (keys["ArrowDown"] || dpKeys.down) dy += getSpeed();

  player.x = Math.max(0, Math.min(MAP_W, player.x + dx));
  player.y = Math.max(0, Math.min(MAP_H, player.y + dy));
  // Auto-zoom when entering a new room
  const cr = roomAt(player.x, player.y);
  if (cr) curRoomName = cr.name;
  const newRid = cr ? cr.id : null;
  if (newRid !== prevRoomId) {
    prevRoomId = newRid;
  }

  let best = null,
    bestD = INTERACT_D;
  for (const m of memories) {
    const p = memPos(m);
    if (!p) continue;
    const d = dist(player.x, player.y, p.x, p.y);
    if (d < bestD) {
      best = m;
      bestD = d;
    }
  }
  nearMem = best;
  document.getElementById("hud-room").textContent = curRoomName;
  document.getElementById("hud-count").textContent = memories.length;
}

function updateCamera() {
  const S = getScale();
  const tx = player.x * S - cw / 2,
    ty = player.y * S - ch / 2;
  const mx = MAP_W * S - cw,
    my = MAP_H * S - ch;
  camX += (Math.max(0, Math.min(Math.max(0, mx), tx)) - camX) * 0.12;
  camY += (Math.max(0, Math.min(Math.max(0, my), ty)) - camY) * 0.12;
}

function updateBuilderCamera() {
  const S = getScale(),
    step = getSpeed() * 3.5;
  let dx = 0,
    dy = 0;
  if (keys["ArrowLeft"] || dpKeys.left) dx -= step;
  if (keys["ArrowRight"] || dpKeys.right) dx += step;
  if (keys["ArrowUp"] || dpKeys.up) dy -= step;
  if (keys["ArrowDown"] || dpKeys.down) dy += step;
  if (!dx && !dy) return;
  const mx = Math.max(0, MAP_W * S - cw),
    my = Math.max(0, MAP_H * S - ch);
  camX = Math.max(0, Math.min(mx, camX + dx));
  camY = Math.max(0, Math.min(my, camY + dy));
}

// ════════════════════════════════════════════════
//  MAIN LOOP
// ════════════════════════════════════════════════
function loop() {
  animF++;
  resizeCanvas();
  updatePlayer();
  if (!builderMode) updateCamera();
  else updateBuilderCamera();
  ctx.fillStyle = "#04060f";
  ctx.fillRect(0, 0, cw, ch);
  const S = getScale(),
    ox = Math.round(-camX),
    oy = Math.round(-camY);
  drawGrid(ox, oy);
  drawRooms(ox, oy);
  drawFurniture(ox, oy);
  if (builderMode) drawPreview(ox, oy);
  drawMemories(ox, oy);
  drawPlayer(ox, oy);
  drawMinimap();
  drawZoomHUD();
  requestAnimationFrame(loop);
}

// ════════════════════════════════════════════════
//  BUILDER MODE
// ════════════════════════════════════════════════
function toggleBuilder() {
  builderMode = !builderMode;
  document
    .getElementById("builder-bar")
    .classList.toggle("visible", builderMode);
  document.getElementById("btn-build").classList.toggle("active", builderMode);
  document.getElementById("canvas-wrap").style.bottom = builderMode
    ? "210px"
    : "108px";
  if (!builderMode) {
    selectedRoom = null;
    dragging = false;
    draggingFurniture = null;
    draggingMem = null;
    resizingFurniture = null;
    selectedFurnitureId = null;
  }
  document.getElementById("hint-explore").style.display = builderMode
    ? "none"
    : "";
  document.getElementById("hint-builder").style.display = builderMode
    ? ""
    : "none";
  updateCursor();
  showNotif(builderMode ? "🏗 Constructor ON" : "🎮 Explorar");
}
function setTool(t) {
  currentTool = t;
  ["draw", "erase", "furniture", "movemem"].forEach((id) => {
    const el = document.getElementById("tool-" + id);
    if (el) el.classList.toggle("active", id === t);
  });
  document.getElementById("furniture-picker").style.display =
    t === "furniture" ? "flex" : "none";
  updateCursor();
}
function updateCursor() {
  if (!builderMode) {
    canvas.style.cursor = "default";
    return;
  }
  const map = {
    draw: "crosshair",
    erase: "not-allowed",
    furniture: "copy",
    movemem: "grab",
  };
  canvas.style.cursor = map[currentTool] || "default";
}

// Dynamic cursor on mousemove (resize handle detection)
canvas.addEventListener(
  "mousemove",
  (e) => {
    if (!builderMode || currentTool !== "furniture") return;
    const w = c2w(e.offsetX, e.offsetY);
    for (const f of furniture) {
      const h = furResizeHandle(f);
      if (!h) continue;
      if (dist(w.x, w.y, h.x, h.y) < 10) {
        canvas.style.cursor = "se-resize";
        return;
      }
    }
    if (furAtWorld(w.x, w.y)) canvas.style.cursor = "grab";
    else canvas.style.cursor = "copy";
  },
  { capture: false },
);
function buildSwatches() {
  document.getElementById("swatches").innerHTML = PALETTE.map(
    (p, i) =>
      `<div class="swatch ${i === selectedColor ? "selected" : ""}" style="background:${p.wall};" title="${p.label}" onclick="selectColor(${i})"></div>`,
  ).join("");
}
function selectColor(i) {
  selectedColor = i;
  buildSwatches();
}
const FURN_ROWS = [
  [
    {
      label: "Sala",
      keys: [
        "sofa",
        "armchair",
        "tv",
        "coffeetable",
        "rug",
        "lamp",
        "fireplace",
        "painting",
      ],
    },
    { label: "Dormitori", keys: ["bed", "wardrobe", "nightstand", "mirror"] },
  ],
  [
    { label: "Estudi", keys: ["desk", "bookcase", "piano"] },
    { label: "Cuina", keys: ["table", "fridge", "stove", "washing"] },
    { label: "Bany", keys: ["toilet", "bath", "shower"] },
    { label: "General", keys: ["plant", "door"] },
  ],
  [
    {
      label: "Animals",
      keys: [
        "lion",
        "elephant",
        "snake",
        "eagle",
        "shark",
        "bull",
        "wolf",
        "dragon",
        "octopus",
        "horse",
        "bear",
        "frog",
      ],
    },
  ],
  [
    {
      label: "Cos/Ment",
      keys: ["brain", "eye", "skull", "heart", "bone", "hand"],
    },
    {
      label: "Emergències",
      keys: [
        "firetruck",
        "extinguisher",
        "helmet",
        "explosion",
        "radioactive",
        "biohazard",
      ],
    },
  ],
  [
    {
      label: "Natura",
      keys: ["mountain", "volcano", "wave", "lightning", "tornado", "tree"],
    },
    {
      label: "Ciència",
      keys: [
        "atom",
        "microscope",
        "magnet",
        "gear",
        "battery",
        "circuit",
        "flask",
      ],
    },
  ],
  [
    {
      label: "Símbols",
      keys: [
        "key",
        "bomb",
        "trophy",
        "sword",
        "shield",
        "crown",
        "anchor",
        "hourglass",
        "compass",
        "map",
        "book",
        "scroll",
        "magnifier",
        "warning",
      ],
    },
  ],
];
function buildFurniturePicker() {
  function chips(groups) {
    return groups
      .map(
        (g) =>
          `<span class="furn-group-label">${g.label}</span>` +
          g.keys
            .map(
              (k) =>
                `<div class="furn-chip ${k === selectedFurnitureType ? "active" : ""}" onclick="selectFurniture('${k}')" title="${FURNITURE[k].label}">${FURNITURE[k].emoji}</div>`,
            )
            .join(""),
      )
      .join("");
  }
  document.getElementById("furniture-picker").innerHTML = FURN_ROWS.map(
    (row) => `<div class="furn-row">${chips(row)}</div>`,
  ).join("");
}
function selectFurniture(k) {
  selectedFurnitureType = k;
  document
    .querySelectorAll(".furn-chip")
    .forEach((el) =>
      el.classList.toggle("active", el.title === FURNITURE[k].label),
    );
  showNotif("🖼 " + FURNITURE[k].label + " seleccionada");
}

// ════════════════════════════════════════════════
//  MEMORY MANAGEMENT
// ════════════════════════════════════════════════
function refreshRoomSelect() {
  document.getElementById("f-room").innerHTML = rooms.length
    ? rooms.map((r) => `<option value="${r.id}">${r.name}</option>`).join("")
    : '<option value="">— Sense habitacions —</option>';
  refreshFurnitureSelect();
}
function refreshFurnitureSelect() {
  const rid = parseInt(document.getElementById("f-room").value);
  const roomFurn = furniture.filter((f) => f.room === rid);
  document.getElementById("f-furniture").innerHTML =
    '<option value="">— Sense imatge —</option>' +
    roomFurn
      .map(
        (f) =>
          `<option value="${f.id}">${getFD(f.type).emoji} ${getFD(f.type).label}</option>`,
      )
      .join("");
}
function openMemCard(m) {
  if (!m) return;
  openMem = m;
  const pop = document.getElementById("mpopup"),
    meta = CAT[m.cat];
  const tag = document.getElementById("pop-tag");
  tag.textContent = meta.label;
  tag.className = "mtag " + meta.cls;
  document.getElementById("pop-title").textContent = m.title;
  document.getElementById("pop-body").innerHTML = m.body;
  const pos = memPos(m),
    S = getScale(),
    ox = -camX,
    oy2 = -camY;
  let left = pos.x * S + ox + 22,
    top = pos.y * S + oy2 - 80;
  if (left + 290 > cw) left = pos.x * S + ox - 310;
  if (top < 55) top = pos.y * S + oy2 + 32;
  pop.style.left = left + "px";
  pop.style.top = top + "px";
  pop.classList.add("visible");
}
function closeMemory() {
  openMem = null;
  document.getElementById("mpopup").classList.remove("visible");
}

function addMemory() {
  const rid = parseInt(document.getElementById("f-room").value);
  const cat = document.getElementById("f-cat").value;
  const title = document.getElementById("f-title").value.trim();
  const body = document.getElementById("f-body").value.trim();
  if (!title || !body) {
    showNotif("⚠ Omple títol i contingut");
    return;
  }
  if (!rid) {
    showNotif("⚠ Crea una habitació primer");
    return;
  }
  const r = rooms.find((r) => r.id === rid);
  const furnitureId =
    parseInt(document.getElementById("f-furniture").value) || null;
  let ox = 50,
    oy = 50;
  if (!furnitureId) {
    const occ = memories.filter((m) => m.room === rid && !m.furnitureId);
    let att = 0;
    while (
      occ.some((m) => Math.abs(m.ox - ox) < 36 && Math.abs(m.oy - oy) < 36) &&
      att < 40
    ) {
      ox = 28 + Math.random() * (r.w - 56);
      oy = 28 + Math.random() * (r.h - 56);
      att++;
    }
  }
  const image = document.getElementById("f-image").value.trim();
  memories.push({
    id: nextMid++,
    room: rid,
    cat,
    title,
    body,
    image,
    ox: Math.round(ox),
    oy: Math.round(oy),
    furnitureId,
  });
  save();
  renderEditorList();
  document.getElementById("f-title").value = "";
  document.getElementById("f-body").value = "";
  document.getElementById("f-image").value = "";
  document.getElementById("f-image-preview").textContent = "";
  showNotif("✦ Memòria afegida a " + r.name);
}
function deleteMemory(e, id) {
  e.stopPropagation();
  const del = memories.find((m) => m.id === id);
  if (!del) return;
  memories = memories.filter((m) => m.id !== id);
  save();
  renderEditorList();
  if (openMem?.id === id) closeMemory();
  showUndoNotif("🗑 " + del.title + " eliminada", () => {
    memories.push(del);
    save();
    renderEditorList();
    showNotif("↩ " + del.title + " restaurada");
  });
}
function teleportTo(id) {
  const m = memories.find((m) => m.id === id);
  if (!m) return;
  const pos = memPos(m);
  if (!pos) return;
  player.x = pos.x + 28;
  player.y = pos.y;
  toggleEditor();
  showNotif("📍 " + m.title);
}
function toggleEditor() {
  document.getElementById("editor-panel").classList.toggle("open");
  refreshRoomSelect();
  refreshFurnitureSelect();
  renderEditorList();
  buildImageSuggestions();
}
function renderEditorList() {
  const el = document.getElementById("ep-list");
  if (!memories.length) {
    el.innerHTML =
      '<p style="color:var(--dim);font-size:11px;text-align:center;padding:18px;">Sense memòries.<br>Afegeix-ne una ↓</p>';
    return;
  }
  el.innerHTML = memories
    .map((m) => {
      const meta = CAT[m.cat],
        rname = rooms.find((r) => r.id === m.room)?.name || "?";
      const furnName = m.furnitureId
        ? (() => {
            const f = furniture.find((f) => f.id === m.furnitureId);
            return f ? ` · ${getFD(f.type).emoji}${getFD(f.type).label}` : "";
          })()
        : "";
      return `<div class="mi" onclick="teleportTo(${m.id})"><div class="mi-icon">${meta.icon}</div><div class="mi-info"><div class="mi-title">${m.title}</div><div class="mi-room">${rname}${furnName} · ${meta.label}</div></div><button class="mi-del" onclick="deleteMemory(event,${m.id})">✕</button></div>`;
    })
    .join("");
}

// ════════════════════════════════════════════════
//  QUIZ MODE
// ════════════════════════════════════════════════
function startQuiz() {
  if (!memories.length) {
    showNotif("⚠ No hi ha memòries per repassar");
    return;
  }
  const now = Date.now();
  // SRS: les pendents primer (due <= now), ordenades per més endarrerides; les futures al final
  quizQueue = [...memories].sort((a, b) => {
    const da = a.srs?.due || 0,
      db = b.srs?.due || 0;
    const aDue = da <= now,
      bDue = db <= now;
    if (aDue && !bDue) return -1;
    if (!aDue && bDue) return 1;
    return da - db;
  });
  quizCorrect = 0;
  quizForgot = 0;
  quizTotal = quizQueue.length;
  quizMode = true;
  closeMemory();
  document.getElementById("editor-panel").classList.remove("open");
  showNextQuiz();
  document.getElementById("quiz-overlay").classList.add("visible");
}
function showNextQuiz() {
  if (!quizQueue.length) {
    endQuiz();
    return;
  }
  quizCurrent = quizQueue.shift();
  const r = rooms.find((r) => r.id === quizCurrent.room);
  const srs = quizCurrent.srs || { interval: 0, ease: 2.5, due: 0 };
  const now = Date.now();
  const overdue = srs.due && srs.due <= now;
  const daysLeft = srs.due ? Math.round((srs.due - now) / 86400000) : null;
  let srsLabel = "";
  if (!srs.interval) srsLabel = "🆕 Nova";
  else if (overdue) srsLabel = "⏰ Endarrerida";
  else if (daysLeft !== null) srsLabel = `📅 ${daysLeft}d`;

  document.getElementById("quiz-progress").textContent =
    `${quizTotal - quizQueue.length} / ${quizTotal}`;
  document.getElementById("quiz-room").textContent =
    (r ? "📍 " + r.name : "") + (srsLabel ? " · " + srsLabel : "");
  document.getElementById("quiz-cat").textContent =
    CAT[quizCurrent.cat].icon + " " + CAT[quizCurrent.cat].label;
  document.getElementById("quiz-cat").className = "quiz-cat " + quizCurrent.cat;
  document.getElementById("quiz-question").textContent = quizCurrent.title;
  document.getElementById("quiz-answer").innerHTML = quizCurrent.body;
  document.getElementById("quiz-answer").style.display = "none";
  document.getElementById("quiz-show-btn").style.display = "inline-block";
  document.getElementById("quiz-result-btns").style.display = "none";
}
function showQuizAnswer() {
  document.getElementById("quiz-answer").style.display = "block";
  document.getElementById("quiz-show-btn").style.display = "none";
  document.getElementById("quiz-result-btns").style.display = "flex";
}
function quizResult(rating) {
  // rating: 'easy' | 'hard' | 'forgot'
  const correct = rating !== "forgot";
  if (correct) quizCorrect++;
  else quizForgot++;

  // Stats per categoria
  const cat = quizCurrent?.cat;
  if (cat && studyStats[cat]) {
    studyStats[cat].total++;
    if (correct) studyStats[cat].correct++;
  }

  // SRS: actualitzar interval i ease (simplificació SM-2)
  const m = memories.find((x) => x.id === quizCurrent.id);
  if (m) {
    if (!m.srs) m.srs = { interval: 0, ease: 2.5, due: 0 };
    const s = m.srs;
    const now = Date.now();
    if (rating === "forgot") {
      s.interval = 0;
      s.ease = Math.max(1.3, s.ease - 0.2);
      // Torna a la cua al final de la sessió
      quizQueue.push(quizCurrent);
    } else if (rating === "hard") {
      s.interval = Math.max(1, Math.round((s.interval || 1) * 1.2));
      s.ease = Math.max(1.3, s.ease - 0.15);
      s.due = now + s.interval * 86400000;
    } else {
      // easy
      s.interval = Math.max(1, Math.round((s.interval || 1) * s.ease));
      s.ease = Math.min(4, s.ease + 0.1);
      s.due = now + s.interval * 86400000;
    }
  }
  save();
  showNextQuiz();
}
function endQuiz() {
  quizMode = false;
  const pct = quizTotal ? Math.round((quizCorrect / quizTotal) * 100) : 0;
  const emoji = pct >= 80 ? "🏆" : pct >= 60 ? "👍" : "💪";
  document.getElementById("quiz-question").textContent =
    `${emoji} Resultat: ${quizCorrect}/${quizTotal} correctes · ${quizForgot} a repassar (${pct}%)`;
  document.getElementById("quiz-answer").style.display = "none";
  document.getElementById("quiz-room").textContent = "";
  document.getElementById("quiz-show-btn").style.display = "none";
  document.getElementById("quiz-result-btns").style.display = "none";
  document.getElementById("quiz-end-btn").style.display = "inline-block";
}
function closeQuiz() {
  quizMode = false;
  document.getElementById("quiz-overlay").classList.remove("visible");
  document.getElementById("quiz-end-btn").style.display = "none";
}

// ════════════════════════════════════════════════
//  STATS
// ════════════════════════════════════════════════
function openStats() {
  const overlay = document.getElementById("stats-overlay");
  const body = document.getElementById("stats-body");
  body.innerHTML = "";

  const catKeys = Object.keys(CAT);
  const totalMems = memories.length;

  catKeys.forEach((key) => {
    const cat = CAT[key];
    const st = studyStats[key];
    const count = memories.filter((m) => m.cat === key).length;
    const pct = st.total > 0 ? Math.round((st.correct / st.total) * 100) : null;

    // colour based on % correct
    let barColor, statusLabel;
    if (pct === null) {
      barColor = "rgba(80,160,255,.35)";
      statusLabel = "Sense dades";
    } else if (pct >= 75) {
      barColor = "#3ddc84";
      statusLabel = "✓ Dominat";
    } else if (pct >= 50) {
      barColor = "#ffd700";
      statusLabel = "↗ En progrés";
    } else {
      barColor = "#ff6060";
      statusLabel = "✕ Cal repassar";
    }

    const barPct = pct !== null ? pct : 0;

    body.innerHTML += `
      <div class="stat-row">
        <div class="stat-header">
          <span class="stat-cat-label ${key}">${cat.icon} ${cat.label}</span>
          <span class="stat-status" style="color:${barColor}">${statusLabel}</span>
        </div>
        <div class="stat-bar-wrap">
          <div class="stat-bar" style="width:${barPct}%;background:${barColor}"></div>
        </div>
        <div class="stat-meta">
          <span>${count} memòria${count !== 1 ? "es" : ""}</span>
          ${st.total > 0 ? `<span>${st.correct} / ${st.total} correctes (${pct}%)</span>` : "<span>Fes un repàs per veure resultats</span>"}
        </div>
      </div>`;
  });

  body.innerHTML += `<div class="stat-total">Total: <strong>${totalMems}</strong> memòria${totalMems !== 1 ? "es" : ""} al palau</div>`;
  body.innerHTML += `<div style="text-align:right;margin-top:8px"><button class="btn-secondary" style="font-size:9px;padding:4px 10px;" onclick="resetStats()">🗑 Reiniciar estadístiques</button></div>`;

  overlay.classList.add("visible");
}
function closeStats() {
  document.getElementById("stats-overlay").classList.remove("visible");
}
function resetStats() {
  if (!confirm("Reiniciar totes les estadístiques?")) return;
  Object.keys(studyStats).forEach((k) => {
    studyStats[k] = { correct: 0, total: 0 };
  });
  save();
  openStats();
}

// ════════════════════════════════════════════════
//  NOTIFICATION
// ════════════════════════════════════════════════
function showNotif(msg) {
  const el = document.getElementById("notif");
  el.innerHTML = "";
  el.textContent = msg;
  el.classList.remove("has-undo");
  el._undoFn = null;
  el.classList.add("show");
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove("show"), 2700);
}
function showUndoNotif(msg, undoFn) {
  const el = document.getElementById("notif");
  el.innerHTML = `<span>${msg}</span><button class="undo-btn" onclick="doUndo()">↩ Desfer</button>`;
  el._undoFn = undoFn;
  el.classList.add("show", "has-undo");
  clearTimeout(el._t);
  el._t = setTimeout(() => {
    el.classList.remove("show", "has-undo");
    el._undoFn = null;
  }, 4000);
}
function doUndo() {
  const el = document.getElementById("notif");
  if (el._undoFn) {
    el._undoFn();
    el._undoFn = null;
  }
  clearTimeout(el._t);
  el.classList.remove("show", "has-undo");
}

// ════════════════════════════════════════════════
//  START / MENU
// ════════════════════════════════════════════════
function goToMenu() {
  document.getElementById("game").classList.add("hidden");
  document.getElementById("intro").classList.remove("hidden");
  openMem = null;
  builderMode = false;
  quizMode = false;
  document.getElementById("quiz-overlay").classList.remove("visible");
}
function startGame(demo) {
  if (demo) loadDemo();
  else load();
  refreshRoomSelect();
  buildSwatches();
  buildFurniturePicker();
  document.getElementById("intro").classList.add("hidden");
  document.getElementById("game").classList.remove("hidden");
  resizeCanvas();
  if (!rooms.length) {
    setTimeout(() => {
      toggleBuilder();
      showNotif("🏗 Comença arrossegant la primera habitació!");
    }, 350);
  }
  loop();
}

// Intro buttons + stats
(function () {
  const hasSave = !!localStorage.getItem("pc_rooms");
  const btns = document.getElementById("intro-btns");
  if (hasSave) {
    btns.innerHTML = `
      <button class="btn-primary" onclick="startGame(false)">🔥 CONTINUAR EL MEU PALAU</button>
      <button class="btn-secondary" onclick="confirmNewPalace()">✦ Nou palau</button>
      <button class="btn-secondary" onclick="startGame(true)">▶ Palau d'exemple</button>`;
    try {
      const r = JSON.parse(localStorage.getItem("pc_rooms") || "[]");
      const m = JSON.parse(localStorage.getItem("pc_mems") || "[]");
      const statsEl = document.getElementById("intro-stats");
      if (statsEl)
        statsEl.innerHTML = `🧠 <span>${m.length}</span> memòries guardades &nbsp;·&nbsp; <span>${r.length}</span> habitacions`;
    } catch (e) {}
  } else {
    btns.innerHTML = `
      <button class="btn-primary" onclick="startGame(false)">🔥 CONSTRUIR EL MEU PALAU</button>
      <button class="btn-secondary" onclick="startGame(true)">▶ Palau d'exemple</button>`;
  }
})();

// Spark particles
(function () {
  const c = document.getElementById("spark-canvas");
  if (!c) return;
  const ctx = c.getContext("2d");
  let W,
    H,
    sparks = [];
  function resize() {
    W = c.width = c.offsetWidth;
    H = c.height = c.offsetHeight;
  }
  resize();
  window.addEventListener("resize", resize);
  function newSpark() {
    return {
      x: Math.random() * W,
      y: H + 4,
      vx: (Math.random() - 0.5) * 0.8,
      vy: -(1.2 + Math.random() * 2.2),
      life: 1,
      size: 1.5 + Math.random() * 2,
    };
  }
  function frame() {
    ctx.clearRect(0, 0, W, H);
    if (Math.random() < 0.18) sparks.push(newSpark());
    sparks = sparks.filter((s) => s.life > 0);
    sparks.forEach((s) => {
      s.x += s.vx;
      s.y += s.vy;
      s.vy *= 0.985;
      s.life -= 0.012;
      const a = Math.max(0, s.life);
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.size * a, 0, Math.PI * 2);
      const hue = Math.random() < 0.6 ? 30 : 50;
      ctx.fillStyle = `hsla(${hue},100%,65%,${a * 0.85})`;
      ctx.fill();
    });
    requestAnimationFrame(frame);
  }
  frame();
})();

// ── IMATGE MENTAL ──
const IMAGE_SUGGESTIONS = [
  "🧠",
  "🔥",
  "💧",
  "⚡",
  "🏗",
  "🧪",
  "🌊",
  "🌡",
  "💣",
  "🚒",
  "🪖",
  "⚙",
  "🔌",
  "🗺",
  "🌲",
  "🏛",
  "💊",
  "☢",
  "📐",
  "🧲",
];
function buildImageSuggestions() {
  const el = document.getElementById("image-suggestions");
  if (!el) return;
  el.innerHTML = IMAGE_SUGGESTIONS.map(
    (e) => `<span class="img-sug" onclick="pickImage('${e}')">${e}</span>`,
  ).join("");
}
function pickImage(emoji) {
  document.getElementById("f-image").value = emoji;
  document.getElementById("f-image-preview").textContent = emoji;
}
function updateImagePreview() {
  const v = document.getElementById("f-image").value;
  document.getElementById("f-image-preview").textContent = v;
}

// ════════════════════════════════════════════════
//  PLAYER CUSTOMIZER
// ════════════════════════════════════════════════
const SKIN_COLORS = [
  "#f0c080",
  "#d4956a",
  "#c07840",
  "#7a4820",
  "#3a2010",
  "#ffd0a0",
];
const OUTFIT_COLORS = [
  "#e8a020",
  "#d03030",
  "#2060c0",
  "#208040",
  "#101010",
  "#6030a0",
  "#208090",
  "#c04090",
];
const HELMET_COLORS = [
  "#e8a020",
  "#f0f0f0",
  "#d03030",
  "#2050b0",
  "#101010",
  "#30a060",
];

let _pTmp = {}; // temp config while modal is open

function openPlayerCustomizer() {
  _pTmp = { ...playerCfg };
  document.getElementById("p-name").value = playerCfg.name || "";
  _buildSwatches("skin-swatches", SKIN_COLORS, "skin");
  _buildSwatches("outfit-swatches", OUTFIT_COLORS, "outfit");
  _buildSwatches("helmet-swatches", HELMET_COLORS, "helmetColor");
  _updateGenderBtns();
  previewPlayer();
  document.getElementById("player-modal").classList.add("visible");
}

function closePlayerCustomizer() {
  document.getElementById("player-modal").classList.remove("visible");
}

function savePlayerCustomizer() {
  _pTmp.name = document.getElementById("p-name").value.trim().slice(0, 16);
  playerCfg = { ...playerCfg, ..._pTmp };
  savePlayerCfg();
  closePlayerCustomizer();
}

function setPGender(g) {
  _pTmp.gender = g;
  _updateGenderBtns();
  previewPlayer();
}

function _updateGenderBtns() {
  document
    .getElementById("pgender-m")
    .classList.toggle("active", _pTmp.gender === "m");
  document
    .getElementById("pgender-f")
    .classList.toggle("active", _pTmp.gender === "f");
}

function _buildSwatches(containerId, colors, field) {
  const el = document.getElementById(containerId);
  el.innerHTML = colors
    .map(
      (c) =>
        `<div class="pcolor-swatch${_pTmp[field] === c ? " selected" : ""}" style="background:${c}" title="${c}"
      onclick="_pickColor('${field}','${c}','${containerId}')"></div>`,
    )
    .join("");
}

function _pickColor(field, color, containerId) {
  _pTmp[field] = color;
  // update selected state
  document.querySelectorAll(`#${containerId} .pcolor-swatch`).forEach((el) => {
    el.classList.toggle(
      "selected",
      el.style.background === color || el.style.backgroundColor === color,
    );
  });
  previewPlayer();
}

function previewPlayer() {
  const pc = document.getElementById("pmodal-canvas");
  if (!pc) return;
  const pctx = pc.getContext("2d");
  pctx.clearRect(0, 0, 120, 160);

  const name = (document.getElementById("p-name")?.value || "").trim();
  const cfg = { ..._pTmp, name };

  // Centrat al canvas de 120×160 — sz gran per omplir l'espai
  const sx = 60,
    cy = 90,
    sz = 20;

  _drawCharHelmet(pctx, sx, cy, sz, cfg);

  if (name) {
    const hr = sz * 0.68;
    pctx.fillStyle = "rgba(255,220,100,0.92)";
    pctx.font = `bold ${sz * 0.28}px Share Tech Mono,monospace`;
    pctx.textAlign = "center";
    pctx.textBaseline = "alphabetic";
    pctx.fillText(name.slice(0, 12), sx, cy - sz * 0.04 - hr - sz * 0.1);
  }
}

function confirmNewPalace() {
  if (confirm("Segur que vols esborrar el palau actual i començar de zero?")) {
    localStorage.removeItem("pc_rooms");
    localStorage.removeItem("pc_mems");
    localStorage.removeItem("pc_furn");
    localStorage.removeItem("pc_stats");
    startGame(false);
  }
}
