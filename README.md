# 🔥 Palau de Cristall

**El teu pis convertit en palau de memòria.**
Una aplicació web per estudiar amb la tècnica del palau de memòria: dibuixa les habitacions del teu pis, col·loca-hi mobles i ancora els teus apunts a cada racó.

---

## Descripció

El Palau de Cristall és un joc/eina d'estudi que implementa la **tècnica mnemotècnica del palau de memòria** (_method of loci_). L'usuari construeix un mapa interactiu del seu pis, hi afegeix mobles i anota els continguts d'estudi associant-los a llocs físics concrets. Posteriorment, passejar pel palau ajuda a recordar el material ancorat a cada espai.

L'aplicació és 100% client-side (HTML + CSS + JS), no requereix servidor ni instal·lació.

---

## Funcionalitats

### 🏠 Menú d'inici

- **Construir el meu pis** — comença amb un palau en blanc.
- **Usar pis d'exemple** — carrega un palau de demostració amb 5 habitacions, 8 mobles i 6 memòries prefabricades per explorar de seguida.

---

### 🏗 Constructor d'habitacions

Activa el mode constructor amb el botó **CONSTRUIR** (o `🏗`).

| Eina | Acció |
|---|---|
| **✦ Dibuixar** | Arrossega al canvas per crear una nova habitació rectangular. |
| **🪑 Moble** | Fes clic dins una habitació per col·locar el moble seleccionat. Arrossega'l per moure'l. Agafa la maneta `↘` per redimensionar-lo. |
| **✥ Moure mem.** | Arrossega les icones de memòria per reposicionar-les. |
| **✕ Esborrar** | Fes clic sobre un moble o habitació per eliminar-la (amb desfer). |
| **✏ Renombrar** | Renombra l'habitació seleccionada. |

**Colors d'habitació** — 8 paletes disponibles (Azul, Rojo, Verde, Dorado, Morado, Cian, Naranja, Gris). La paleta tenyeix el fons i les parets de l'habitació.

---

### 🪑 Catàleg de mobles

Organitzat per estances. Es col·loca fent clic dins una habitació i es pot redimensionar lliurement.

| Estança | Mobles |
|---|---|
| **Sala d'estar** | Sofà, Butaca, Tele, Taula centre, Catifa, Làmpada, Llar de foc, Quadre |
| **Dormitori** | Llit, Armari, Tauleta de nit, Mirall |
| **Estudi** | Escriptori, Prestatgeria, Piano |
| **Cuina** | Taula, Nevera, Fogons, Rentadora, Rentavaixelles |
| **Bany** | WC, Banyera, Dutxa, Lavabo |
| **General** | Planta, Porta |

Els mobles amb memòries associades mostren un **punt groc brillant** a la cantonada superior dreta amb el nombre de memòries.

---

### ✏ Gestió de memòries

Obre el panell lateral amb **✏ MEMÒRIES**.

**Camps d'una memòria:**

- **Habitació** — a quina habitació del palau pertany.
- **Moble (opcional)** — si es vol ancorar la memòria a un moble concret de l'habitació. La memòria apareixerà centrada sobre el moble.
- **Categoria** — classifica el contingut:
  - ⚖ `Legislació` — lleis, articles, normativa.
  - 🔧 `Procediment` — passos, protocols, accions.
  - 📊 `Dada / Xifra` — números, estadístiques, mesures.
  - 📚 `Temari` — conceptes generals, teoria.
- **Títol** — identificador curt de la memòria.
- **Contingut** — text de l'apunt (admet HTML bàsic: `<strong>`, etc.).

**Accions sobre memòries:**

- **Afegir** — crea la memòria i la situa al palau.
- **Teletransportar** — fes clic a qualsevol memòria de la llista per desplaçar el jugador fins a ella.
- **Eliminar** — botó `✕` amb opció de **desfer** durant 4 segons.

---

### 🎮 Mode explorar

Passeig pel palau en primera persona (vista cenital).

| Control | Acció |
|---|---|
| `↑ ↓ ← →` | Moure el jugador |
| `E` o `Espai` | Obrir la memòria més propera |
| `Escape` | Tancar la targeta de memòria |
| D-pad (pantalla) | Moviment tàctil |

Quan el jugador **s'acosta a una memòria** (≤ 38px de distància), la icona s'il·lumina i s'indica amb `[E]`. Les memòries brillen amb un halo de color segons la categoria.

**Auto-zoom per habitació** — en entrar a una nova habitació, el zoom s'ajusta automàticament perquè l'habitació càpiga a la pantalla.

---

### 🔍 Zoom

| Acció | Com |
|---|---|
| Apropar | Botó `＋` o tecla `+` |
| Allunyar | Botó `－` o tecla `-` |
| Zoom 100% | Botó `⊙` o tecla `0` |
| Zoom lliure | Scroll del ratolí (cap al cursor) |

Rang: 40% – 300%. El zoom és sempre centrat: al fer scroll, el punt del canvas sota el cursor no es desplaça.

---

### 🧠 Mode Repàs (Quiz)

Botó **🧠 REPÀS** a la barra superior.

1. Les memòries es barregen aleatòriament.
2. Es mostra el **títol** com a pregunta.
3. L'usuari preme **👁 Veure resposta** per revelar el contingut.
4. L'usuari valora si ho sabia (`✓ Ho sabia!`) o no (`✕ No ho sabia`).
5. Al final es mostra el resultat: puntuació i percentatge amb emoji de valoració (🏆 ≥80%, 👍 ≥60%, 💪 <60%).

---

### 💾 Persistència i exportació

| Funció | Detall |
|---|---|
| **Auto-desar** | Cada canvi es guarda automàticament a `localStorage`. |
| **Exportar** `💾` | Descàrrega un fitxer `.json` amb tot el palau (habitacions, mobles, memòries). |
| **Importar** `📂` | Carrega un fitxer `.json` exportat prèviament. |

---

### 🗺 Minimapa

Sempre visible a la cantonada superior dreta del canvas. Mostra:

- Totes les habitacions amb el seu color de paleta.
- Punts de colors per a cada memòria (vermell, blau, groc, morat segons categoria).
- Punt taronja per a la posició actual del jugador.
- Rectangle blanc indicant la zona visible de la càmera.

---

## Tecnologies

- **HTML5 Canvas** — renderitzat del mapa, mobles, jugador i efectes.
- **CSS3** — interfície, animacions i disseny responsiu.
- **JavaScript (Vanilla)** — lògica completa sense dependències externes.
- **localStorage** — persistència local de les dades.
- **Google Fonts** — tipografies Orbitron, Share Tech Mono, Inter.

---

## Estructura de fitxers

```
MemoryPalace/
├── index.html   # Estructura HTML i interfície
├── style.css    # Estils i animacions
└── game.js      # Tota la lògica de l'aplicació
```

---

## Com començar

1. Obre `index.html` al navegador (no cal servidor).
2. Tria **Construir el meu pis** o prova el **pis d'exemple**.
3. Activa el **Constructor** i arrossega per crear la primera habitació.
4. Col·loca mobles amb l'eina 🪑.
5. Obre **✏ MEMÒRIES** i afegeix els teus apunts.
6. Passeig pel palau i repassa amb **🧠 REPÀS**.

---

## Dreceres de teclat

| Tecla | Acció |
|---|---|
| `↑ ↓ ← →` | Moure jugador / càmera (en constructor) |
| `E` / `Espai` | Interactuar amb memòria propera |
| `+` / `=` | Zoom in |
| `-` | Zoom out |
| `0` | Zoom 100% |
| `Escape` | Tancar targeta / modal |
| `Enter` | Confirmar nom d'habitació |
