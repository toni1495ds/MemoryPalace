// ════════════════════════════════════════════════
//  CONFIG & CONSTANTS
// ════════════════════════════════════════════════
const SCALE = 2,
  GRID = 20,
  SPEED = 2.2,
  P_SIZE = 14,
  INTERACT_D = 38;
const MAP_W = 1280,
  MAP_H = 2000;

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
  ley: { label: "LEGISLACIÓ", cls: "tag-ley", icon: "⚖" },
  proc: { label: "PROCEDIMENT", cls: "tag-proc", icon: "🔧" },
  dato: { label: "DADA / XIFRA", cls: "tag-dato", icon: "📊" },
  temario: { label: "TEMARI", cls: "tag-temario", icon: "📚" },
};

// ── Furniture catalogue ──
// Each type: { label, emoji, w, h, color, shadow }
// w/h in world units
const FURNITURE = {
  sofa: {
    label: "Sofà",
    emoji: "🛋",
    w: 60,
    h: 28,
    base: "#3a2a6a",
    accent: "#5a4a9a",
  },
  bed: {
    label: "Llit",
    emoji: "🛏",
    w: 60,
    h: 50,
    base: "#2a4a2a",
    accent: "#4a8a4a",
  },
  table: {
    label: "Taula",
    emoji: "🪑",
    w: 40,
    h: 40,
    base: "#4a3a1a",
    accent: "#8a6a2a",
  },
  desk: {
    label: "Escriptori",
    emoji: "🖥",
    w: 50,
    h: 28,
    base: "#1a3a4a",
    accent: "#2a6a8a",
  },
  fridge: {
    label: "Nevera",
    emoji: "🧊",
    w: 24,
    h: 30,
    base: "#2a4a5a",
    accent: "#4a8aaa",
  },
  plant: {
    label: "Planta",
    emoji: "🪴",
    w: 20,
    h: 20,
    base: "#1a3a1a",
    accent: "#2a6a2a",
  },
  bookcase: {
    label: "Prestatgeria",
    emoji: "📚",
    w: 50,
    h: 20,
    base: "#3a2a1a",
    accent: "#7a5a2a",
  },
  toilet: {
    label: "WC",
    emoji: "🚽",
    w: 22,
    h: 26,
    base: "#3a3a4a",
    accent: "#6a6a8a",
  },
  bath: {
    label: "Banyera",
    emoji: "🛁",
    w: 56,
    h: 28,
    base: "#2a3a4a",
    accent: "#4a6a8a",
  },
  tv: {
    label: "Tele",
    emoji: "📺",
    w: 44,
    h: 12,
    base: "#1a1a2a",
    accent: "#3a3a5a",
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
let builderMode = false;
let currentTool = "draw"; // 'draw' | 'erase' | 'furniture' | 'movemem'
let selectedColor = 0;
let selectedRoom = null;
let dragging = false,
  dragStart = null,
  dragCurrent = null;
let pendingRect = null,
  renamingId = null;
let selectedFurnitureType = "sofa";

// Drag-furniture state
let draggingFurniture = null,
  dragFurOffX = 0,
  dragFurOffY = 0;

// Drag-memory state
let draggingMem = null,
  dragMemOffX = 0,
  dragMemOffY = 0;

const player = { x: 80, y: 80 };
const keys = {},
  dpKeys = {};
let camX = 0,
  camY = 0,
  glowPh = 0,
  animF = 0;
let nearMem = null,
  openMem = null,
  curRoomName = "—";
let cw = 0,
  ch = 0;

const canvas = document.getElementById("gc");
const ctx = canvas.getContext("2d");

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
  } catch (e) {}
}
function loadDemo() {
  rooms = [
    { id: 1, name: "Saló", x: 10, y: 10, w: 260, h: 200, pal: 0 },
    { id: 2, name: "Cuina", x: 275, y: 10, w: 185, h: 165, pal: 1 },
    { id: 3, name: "Dormitori", x: 10, y: 215, w: 225, h: 195, pal: 2 },
    { id: 4, name: "Bany", x: 275, y: 180, w: 165, h: 155, pal: 5 },
    { id: 5, name: "Passadís", x: 240, y: 215, w: 205, h: 100, pal: 7 },
  ];
  furniture = [
    { id: 1, type: "sofa", room: 1, ox: 20, oy: 140 },
    { id: 2, type: "tv", room: 1, ox: 20, oy: 30 },
    { id: 3, type: "table", room: 2, ox: 60, oy: 80 },
    { id: 4, type: "fridge", room: 2, ox: 140, oy: 20 },
    { id: 5, type: "bed", room: 3, ox: 20, oy: 40 },
    { id: 6, type: "bookcase", room: 3, ox: 20, oy: 160 },
    { id: 7, type: "toilet", room: 4, ox: 20, oy: 20 },
    { id: 8, type: "bath", room: 4, ox: 60, oy: 100 },
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
      ox: 185,
      oy: 80,
    },
    {
      id: 2,
      room: 1,
      cat: "temario",
      title: "Tipus de foc",
      body: "<strong>A</strong>: Sòlids · <strong>B</strong>: Líquids · <strong>C</strong>: Gasos · <strong>D</strong>: Metalls · <strong>F</strong>: Olis cuina",
      ox: 100,
      oy: 140,
    },
    {
      id: 3,
      room: 2,
      cat: "dato",
      title: "T. inflamació gasolina",
      body: "Punt d'inflamació: <strong>−43 °C</strong>. Tª mínima per emetre vapors inflamables.",
      ox: 100,
      oy: 80,
    },
    {
      id: 4,
      room: 3,
      cat: "proc",
      title: "RCP — 30:2",
      body: "<strong>30 compressions</strong> + <strong>2 ventilacions</strong>. 100-120/min. Profunditat 5-6 cm. Sense pauses > 10 s.",
      ox: 130,
      oy: 60,
    },
    {
      id: 5,
      room: 4,
      cat: "ley",
      title: "Llei 31/1995 — LPRL",
      body: "Llei de Prevenció de Riscos Laborals. Transposa la Directiva 89/391/CEE.",
      ox: 100,
      oy: 70,
    },
    {
      id: 6,
      room: 5,
      cat: "dato",
      title: "Monòxid de carboni",
      body: "Inodor i incolor. <strong>TLV-TWA: 25 ppm</strong>. Mortal en altes concentracions.",
      ox: 80,
      oy: 50,
    },
  ];
  nextMid = 7;
  save();
}

// ════════════════════════════════════════════════
//  HELPERS
// ════════════════════════════════════════════════
function snap(v) {
  return Math.round(v / GRID) * GRID;
}
function roomAt(x, y) {
  return (
    rooms.find(
      (r) => x >= r.x && x <= r.x + r.w && y >= r.y && y <= r.y + r.h,
    ) || null
  );
}
function memPos(m) {
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
  return { x: (cx + camX) / SCALE, y: (cy + camY) / SCALE };
}
function resizeCanvas() {
  const wrap = document.getElementById("canvas-wrap");
  cw = wrap.clientWidth;
  ch = wrap.clientHeight;
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
    const fd = FURNITURE[f.type];
    if (wx >= p.x && wx <= p.x + fd.w && wy >= p.y && wy <= p.y + fd.h)
      return f;
  }
  return null;
}

// ════════════════════════════════════════════════
//  INPUT
// ════════════════════════════════════════════════
window.addEventListener("keydown", (e) => {
  keys[e.key] = true;
  if (
    (e.key === "e" || e.key === "E" || e.key === " ") &&
    nearMem &&
    !builderMode
  ) {
    openMem ? closeMemory() : openMemCard(nearMem);
    e.preventDefault();
  }
  if (e.key === "Escape") {
    closeMemory();
    closeRoomModal();
  }
  if (
    e.key === "Enter" &&
    document.getElementById("room-modal").classList.contains("visible")
  )
    confirmRoomName();
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
  if (dragging || draggingFurniture || draggingMem) onUp(e.offsetX, e.offsetY);
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

function onDown(cx, cy) {
  if (!builderMode) return;
  const w = c2w(cx, cy);

  if (currentTool === "furniture") {
    // Check if clicking existing furniture (to drag it)
    const f = furAtWorld(w.x, w.y);
    if (f) {
      const p = furPos(f);
      draggingFurniture = f;
      dragFurOffX = w.x - p.x;
      dragFurOffY = w.y - p.y;
      return;
    }
    // Otherwise place new furniture
    const r = roomAt(w.x, w.y);
    if (r) {
      const fd = FURNITURE[selectedFurnitureType];
      const ox = snap(w.x - r.x - fd.w / 2);
      const oy = snap(w.y - r.y - fd.h / 2);
      furniture.push({
        id: nextFid++,
        type: selectedFurnitureType,
        room: r.id,
        ox,
        oy,
      });
      save();
      showNotif("🪑 " + fd.label + " col·locat");
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
    }
    return;
  }

  if (currentTool === "erase") {
    // Erase furniture first, then room
    const f = furAtWorld(w.x, w.y);
    if (f) {
      furniture = furniture.filter((x) => x.id !== f.id);
      save();
      showNotif("🗑 Moble eliminat");
      return;
    }
    const r = roomAt(w.x, w.y);
    if (r) deleteRoom(r.id);
    return;
  }

  // draw tool
  if (currentTool === "draw") {
    dragging = true;
    dragStart = { x: snap(w.x), y: snap(w.y) };
    dragCurrent = { ...dragStart };
  }
  selectedRoom = roomAt(w.x, w.y)?.id || null;
}

function onMove(cx, cy) {
  if (!builderMode) return;
  const w = c2w(cx, cy);

  if (draggingFurniture) {
    const fd = FURNITURE[draggingFurniture.type];
    const r = rooms.find((r) => r.id === draggingFurniture.room);
    if (r) {
      draggingFurniture.ox = Math.max(
        0,
        Math.min(r.w - fd.w, snap(w.x - r.x - dragFurOffX)),
      );
      draggingFurniture.oy = Math.max(
        0,
        Math.min(r.h - fd.h, snap(w.y - r.y - dragFurOffY)),
      );
    }
    return;
  }

  if (draggingMem) {
    const r = rooms.find((r) => r.id === draggingMem.room);
    if (r) {
      draggingMem.ox = Math.max(
        10,
        Math.min(r.w - 10, Math.round(w.x - r.x - dragMemOffX)),
      );
      draggingMem.oy = Math.max(
        10,
        Math.min(r.h - 10, Math.round(w.y - r.y - dragMemOffY)),
      );
    }
    return;
  }

  if (dragging) {
    dragCurrent = { x: snap(w.x), y: snap(w.y) };
  }
}

function onUp(cx, cy) {
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
  const x = Math.min(dragStart.x, dragCurrent.x);
  const y = Math.min(dragStart.y, dragCurrent.y);
  const rw = Math.abs(dragCurrent.x - dragStart.x);
  const rh = Math.abs(dragCurrent.y - dragStart.y);
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
  if (!confirm("Esborrar aquesta habitació i tots els seus elements?")) return;
  rooms = rooms.filter((r) => r.id !== id);
  memories = memories.filter((m) => m.room !== id);
  furniture = furniture.filter((f) => f.room !== id);
  if (selectedRoom === id) selectedRoom = null;
  save();
  refreshRoomSelect();
  showNotif("🗑 Habitació eliminada");
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
  const id = nextRid++;
  rooms.push({ id, name, ...pendingRect, pal: selectedColor });
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
//  DRAW — FURNITURE
// ════════════════════════════════════════════════
function drawFurniture(ox, oy) {
  for (const f of furniture) {
    const p = furPos(f);
    if (!p) continue;
    const fd = FURNITURE[f.type];
    const sx = p.x * SCALE + ox,
      sy = p.y * SCALE + oy;
    const fw = fd.w * SCALE,
      fh = fd.h * SCALE;
    const isDragging = draggingFurniture && draggingFurniture.id === f.id;

    // Shadow
    ctx.fillStyle = "rgba(0,0,0,0.25)";
    ctx.fillRect(sx + 3, sy + 4, fw, fh);

    // Body
    const grad = ctx.createLinearGradient(sx, sy, sx + fw, sy + fh);
    grad.addColorStop(0, fd.accent);
    grad.addColorStop(1, fd.base);
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.roundRect(sx, sy, fw, fh, 4);
    ctx.fill();

    // Border (highlight when dragging in builder)
    ctx.strokeStyle = isDragging ? "#ffffff" : fd.accent + "88";
    ctx.lineWidth = isDragging ? 2 : 1;
    ctx.beginPath();
    ctx.roundRect(sx, sy, fw, fh, 4);
    ctx.stroke();

    // Emoji
    ctx.font = `${Math.min(fw, fh) * 0.55}px serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(fd.emoji, sx + fw / 2, sy + fh / 2);
    ctx.textBaseline = "alphabetic";
  }
}

// ════════════════════════════════════════════════
//  DRAW — ROOMS / GRID / PREVIEW / MEMORIES / PLAYER
// ════════════════════════════════════════════════
function drawGrid(ox, oy) {
  ctx.strokeStyle = "rgba(255,255,255,0.025)";
  ctx.lineWidth = 0.5;
  const ts = GRID * SCALE;
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
  for (const r of rooms) {
    const p = PALETTE[r.pal] || PALETTE[0];
    const rx = r.x * SCALE + ox,
      ry = r.y * SCALE + oy,
      rw = r.w * SCALE,
      rh = r.h * SCALE;
    ctx.fillStyle = p.bg;
    ctx.fillRect(rx, ry, rw, rh);
    ctx.strokeStyle = p.wall + "40";
    ctx.lineWidth = 0.5;
    const ts = GRID * SCALE;
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
    ctx.font = `bold ${9 * SCALE}px Orbitron,monospace`;
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.fillText(r.name.toUpperCase(), rx + rw / 2, ry + 7);
    ctx.textBaseline = "alphabetic";
  }
}

function drawPreview(ox, oy) {
  if (!dragging || !dragStart || !dragCurrent) return;
  const x = Math.min(dragStart.x, dragCurrent.x),
    y = Math.min(dragStart.y, dragCurrent.y);
  const w = Math.abs(dragCurrent.x - dragStart.x),
    h = Math.abs(dragCurrent.y - dragStart.y);
  const p = PALETTE[selectedColor];
  const sx = x * SCALE + ox,
    sy = y * SCALE + oy;
  ctx.fillStyle = p.bg + "99";
  ctx.fillRect(sx, sy, w * SCALE, h * SCALE);
  ctx.strokeStyle = "#60ff90";
  ctx.lineWidth = 2;
  ctx.setLineDash([8, 5]);
  ctx.strokeRect(sx + 1, sy + 1, w * SCALE - 2, h * SCALE - 2);
  ctx.setLineDash([]);
  if (w >= GRID * 2 && h >= GRID * 2) {
    ctx.fillStyle = "rgba(96,255,144,0.8)";
    ctx.font = `bold ${8 * SCALE}px Share Tech Mono,monospace`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(`${w}×${h}`, sx + (w * SCALE) / 2, sy + (h * SCALE) / 2);
    ctx.textBaseline = "alphabetic";
  }
}

function drawMemories(ox, oy) {
  glowPh += 0.05;
  const g = 0.5 + 0.5 * Math.sin(glowPh);
  for (const m of memories) {
    const pos = memPos(m);
    if (!pos) continue;
    const sx = pos.x * SCALE + ox,
      sy = pos.y * SCALE + oy;
    const isN = nearMem && nearMem.id === m.id;
    const isDrag = draggingMem && draggingMem.id === m.id;
    const rad = (isN || isDrag ? 23 : 16) * SCALE;
    const col =
      m.cat === "ley"
        ? "255,100,100"
        : m.cat === "proc"
          ? "80,190,255"
          : m.cat === "dato"
            ? "255,195,40"
            : "145,90,255";
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
    // drag outline
    if (isDrag) {
      ctx.strokeStyle = "rgba(255,255,255,0.8)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(sx, sy, rad * 0.55, 0, Math.PI * 2);
      ctx.stroke();
    }
    const bounce = isN ? Math.sin(glowPh * 2) * 2.5 : 0;
    ctx.font = `${(isN ? 20 : 15) * SCALE}px serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(CAT[m.cat].icon, sx, sy - bounce * SCALE);
    ctx.textBaseline = "alphabetic";
    if (isN) {
      ctx.fillStyle = `rgba(255,255,255,${0.38 + 0.38 * g})`;
      ctx.font = `bold ${7 * SCALE}px Share Tech Mono,monospace`;
      ctx.textAlign = "center";
      ctx.fillText("[E]", sx, sy + 21 * SCALE - bounce * SCALE);
    }
    // "move" hint in movemem mode
    if (builderMode && currentTool === "movemem") {
      ctx.fillStyle = "rgba(255,200,80,0.7)";
      ctx.font = `${7 * SCALE}px Share Tech Mono,monospace`;
      ctx.textAlign = "center";
      ctx.fillText("✥", sx, sy + 18 * SCALE);
    }
  }
}

function drawPlayer(ox, oy) {
  if (builderMode) return;
  const sx = player.x * SCALE + ox,
    sy = player.y * SCALE + oy,
    sz = P_SIZE * SCALE;
  const mv =
    keys["ArrowUp"] ||
    keys["ArrowDown"] ||
    keys["ArrowLeft"] ||
    keys["ArrowRight"] ||
    dpKeys.up ||
    dpKeys.down ||
    dpKeys.left ||
    dpKeys.right;
  const bob = mv ? Math.sin(animF * 0.3) * 1.8 : 0;
  ctx.fillStyle = "rgba(0,0,0,0.32)";
  ctx.beginPath();
  ctx.ellipse(sx, sy + sz * 0.54, sz * 0.38, sz * 0.13, 0, 0, Math.PI * 2);
  ctx.fill();
  const bg = ctx.createRadialGradient(sx, sy - bob, 0, sx, sy - bob, sz * 0.54);
  bg.addColorStop(0, "#ff8c00");
  bg.addColorStop(0.6, "#cc4400");
  bg.addColorStop(1, "#8b1a00");
  ctx.fillStyle = bg;
  ctx.beginPath();
  ctx.arc(sx, sy - sz * 0.1 - bob, sz * 0.48, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#ffd700";
  ctx.beginPath();
  ctx.arc(sx, sy - sz * 0.4 - bob, sz * 0.29, Math.PI, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#b8860b";
  ctx.fillRect(sx - sz * 0.33, sy - sz * 0.41 - bob, sz * 0.66, sz * 0.08);
  ctx.fillStyle = "rgba(0,0,0,0.8)";
  ctx.beginPath();
  ctx.arc(sx - sz * 0.1, sy - sz * 0.13 - bob, sz * 0.065, 0, Math.PI * 2);
  ctx.arc(sx + sz * 0.1, sy - sz * 0.13 - bob, sz * 0.065, 0, Math.PI * 2);
  ctx.fill();
}

// ════════════════════════════════════════════════
//  UPDATE
// ════════════════════════════════════════════════
function updatePlayer() {
  if (openMem || builderMode) return;
  let dx = 0,
    dy = 0;
  if (keys["ArrowLeft"] || dpKeys.left) dx -= SPEED;
  if (keys["ArrowRight"] || dpKeys.right) dx += SPEED;
  if (keys["ArrowUp"] || dpKeys.up) dy -= SPEED;
  if (keys["ArrowDown"] || dpKeys.down) dy += SPEED;
  player.x = Math.max(0, Math.min(MAP_W, player.x + dx));
  player.y = Math.max(0, Math.min(MAP_H, player.y + dy));
  const cr = roomAt(player.x, player.y);
  if (cr) curRoomName = cr.name;
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
  const tx = player.x * SCALE - cw / 2,
    ty = player.y * SCALE - ch / 2;
  const mx = MAP_W * SCALE - cw,
    my = MAP_H * SCALE - ch;
  camX += (Math.max(0, Math.min(mx, tx)) - camX) * 0.1;
  camY += (Math.max(0, Math.min(my, ty)) - camY) * 0.1;
}

// ════════════════════════════════════════════════
//  MAIN LOOP
// ════════════════════════════════════════════════
function loop() {
  animF++;
  resizeCanvas();
  updatePlayer();
  if (!builderMode) updateCamera();
  ctx.fillStyle = "#04060f";
  ctx.fillRect(0, 0, cw, ch);
  const ox = Math.round(-camX),
    oy = Math.round(-camY);
  drawGrid(ox, oy);
  drawRooms(ox, oy);
  drawFurniture(ox, oy);
  if (builderMode) drawPreview(ox, oy);
  drawMemories(ox, oy);
  drawPlayer(ox, oy);
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
    ? "160px"
    : "108px";
  if (!builderMode) {
    selectedRoom = null;
    dragging = false;
    draggingFurniture = null;
    draggingMem = null;
  }
  updateCursor();
  showNotif(builderMode ? "🏗 Constructor ON" : "🎮 Explorar");
}

function setTool(t) {
  currentTool = t;
  ["draw", "erase", "furniture", "movemem"].forEach((id) => {
    const el = document.getElementById("tool-" + id);
    if (el) el.classList.toggle("active", id === t);
  });
  // Update furniture picker visibility
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

function buildFurniturePicker() {
  document.getElementById("furniture-picker").innerHTML = Object.entries(
    FURNITURE,
  )
    .map(
      ([k, v]) =>
        `<div class="furn-chip ${k === selectedFurnitureType ? "active" : ""}" onclick="selectFurniture('${k}')" title="${v.label}">${v.emoji}</div>`,
    )
    .join("");
}
function selectFurniture(k) {
  selectedFurnitureType = k;
  document
    .querySelectorAll(".furn-chip")
    .forEach((el) =>
      el.classList.toggle("active", el.title === FURNITURE[k].label),
    );
  showNotif("🪑 " + FURNITURE[k].label + " seleccionat");
}

// ════════════════════════════════════════════════
//  MEMORY MANAGEMENT
// ════════════════════════════════════════════════
function refreshRoomSelect() {
  document.getElementById("f-room").innerHTML = rooms.length
    ? rooms.map((r) => `<option value="${r.id}">${r.name}</option>`).join("")
    : '<option value="">— Sense habitacions —</option>';
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
    ox = -camX,
    oy2 = -camY;
  let left = pos.x * SCALE + ox + 22,
    top = pos.y * SCALE + oy2 - 80;
  if (left + 290 > cw) left = pos.x * SCALE + ox - 310;
  if (top < 55) top = pos.y * SCALE + oy2 + 32;
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
  const occ = memories.filter((m) => m.room === rid);
  let ox = 50,
    oy = 50,
    att = 0;
  while (
    occ.some((m) => Math.abs(m.ox - ox) < 36 && Math.abs(m.oy - oy) < 36) &&
    att < 40
  ) {
    ox = 28 + Math.random() * (r.w - 56);
    oy = 28 + Math.random() * (r.h - 56);
    att++;
  }
  memories.push({
    id: nextMid++,
    room: rid,
    cat,
    title,
    body,
    ox: Math.round(ox),
    oy: Math.round(oy),
  });
  save();
  renderEditorList();
  document.getElementById("f-title").value = "";
  document.getElementById("f-body").value = "";
  showNotif("✦ Memòria afegida a " + r.name);
}
function deleteMemory(e, id) {
  e.stopPropagation();
  memories = memories.filter((m) => m.id !== id);
  save();
  renderEditorList();
  if (openMem?.id === id) closeMemory();
  showNotif("🗑 Eliminada");
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
  renderEditorList();
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
      return `<div class="mi" onclick="teleportTo(${m.id})">
      <div class="mi-icon">${meta.icon}</div>
      <div class="mi-info"><div class="mi-title">${m.title}</div><div class="mi-room">${rname} · ${meta.label}</div></div>
      <button class="mi-del" onclick="deleteMemory(event,${m.id})">✕</button>
    </div>`;
    })
    .join("");
}

// ════════════════════════════════════════════════
//  NOTIFICATION
// ════════════════════════════════════════════════
function showNotif(msg) {
  const el = document.getElementById("notif");
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove("show"), 2700);
}

// ════════════════════════════════════════════════
//  START
// ════════════════════════════════════════════════
function goToMenu() {
  document.getElementById("game").classList.add("hidden");
  document.getElementById("intro").classList.remove("hidden");
  openMem = null;
  builderMode = false;
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
