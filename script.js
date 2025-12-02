/* ========== ДАННЫЕ ========== */
const DATA = {
  "Выбор БУЛДЖАТь": [
    {label: "WWE 2025", value: 8.3},
    {label: "Madden 2025", value: 5.0},
    {label: "Dokapon! Ikari no Tekken", value: 13.2},
    {label: "MLB The Show 25", value: 3.9},
    {label: "Тетрис", value: 69.6, cheese: true}
  ],
  "Игра Года": [
    {label: "Clair Obscur: Expedition 33", value: 23.5},
    {label: "Death Stranding 2", value: 9.8},
    {label: "NINJA GAIDEN 4", value: 8.2},
    {label: "Split Fiction", value: 6.2},
    {label: "Kingdom Come: Deliverance II", value: 24.9},
    {label: "Hollow Knight: Silksong", value: 27.3, cheese: true}
  ],
  "НАСТОЯЩАЯ ИГРА ГОДА": [
    {label: "FEMBOY FUTA HOUSE", value: 37.9, cheese:true},
    {label: "ТИХИЙ ДЭН", value: 12.1},
    {label: "Земский Собор", value: 11.4},
    {label: "РУСЫ ПРОТИВ ЯЩЕРОВ 2", value: 16.5},
    {label: "ВАША МАТЬ", value: 15.6},
    {label: "Mindseye", value: 6.4}
  ],
  "Single-player Года": [
    {label: "Clair Obscur: Expedition 33", value: 17.8},
    {label: "DOOM: The Dark Ages", value: 14.8},
    {label: "Kingdom Come: Deliverance II", value: 19.8, cheese:true},
    {label: "Donkey Kong Bananza", value: 13.6},
    {label: "Death Stranding 2", value: 7.7},
    {label: "NINJA GAIDEN 4", value: 4.8},
    {label: "Like a Dragon: Pirate Yakuza in Hawaii", value: 4.7}
  ],
  "Multiplayer Года": [
    {label: "ARC Raiders", value: 25.6},
    {label: "Call of Duty: Black Ops 7", value: 6.2},
    {label: "Battlefield 6", value: 44.6, cheese:true},
    {label: "REMATCH", value: 7.6},
    {label: "Escape from Tarkov", value: 16.0}
  ],
  "Кооп Года": [
    {label: "Split Fiction", value: 27.3},
    {label: "LEGO Voyagers", value: 5.9},
    {label: "Abiotic Factor", value: 8.2},
    {label: "PEAK", value: 35.9, cheese:true},
    {label: "Supermarket Simulator", value: 7.9},
    {label: "ELDEN RING NIGHTREIGN", value: 14.8}
  ],
  "Инди Года": [
    {label: "Peak", value: 39.4},
    {label: "Megabonk", value: 21.1},
    {label: "Dispatch", value: 39.4},
    {label: "CloverPit", value: 11.3},
    {label: "No, I’m not human", value: 42.3},
    {label: "Beholder: Conductor", value: 15.4},
    {label: "Guilty as Sock", value: 4.7},
    {label: "Hollow Knight: Silksong", value: 51.2, cheese:true},
    {label: "Femboy Futa House", value: 34.1},
    {label: "Power wash Simulator 2", value: 12.9},
    {label: "My Summer Car", value: 18.9},
    {label: "Necesse", value: 4.7},
    {label: "Hades 2", value: 25.0},
    {label: "Supermarket Simulator", value: 7.1},
    {label: "BALL x PITT", value: 6.3},
    {label: "He is coming", value: 4.4}
  ],
  "Шутер Года": [
    {label: "Call of Duty: Black Ops 7", value: 6.8},
    {label: "Battlefield", value: 62.7, cheese:true},
    {label: "Escape from Tarkov", value: 15.2},
    {label: "ARC Raiders", value: 17.8},
    {label: "Borderlands 4", value: 7.7}
  ],
  "Стратегия Года": [
    {label: "Sid Meier's Civilization VII", value: 24.6},
    {label: "Europa Universalis V", value: 26.1, cheese:true},
    {label: "Stormgate", value: 16.3},
    {label: "Anno 117", value: 12.4},
    {label: "Jurassic World Evolution 3", value: 8.4},
    {label: "Tempest Rising", value: 7.3},
    {label: "Farthest Frontier", value: 4.9}
  ],
  "RPG Года": [
    {label: "Kingdom Come: Deliverance II", value: 53.4, cheese:true},
    {label: "Clair Obscur: Expedition 33", value: 24.4},
    {label: "The Outer Worlds 2", value: 5.8},
    {label: "Avowed", value: 4.6},
    {label: "Tainted Grail: The Fall of Avalon", value: 6.9},
    {label: "Digimon Story Time Stranger", value: 4.9}
  ],
  "Симулятор Года": [
    {label: "PowerWash Simulator 2", value: 37.3, cheese:true},
    {label: "Beholder: Conductor", value: 27.1},
    {label: "Supermarket Simulator", value: 17.8},
    {label: "RoadCraft", value: 12.8},
    {label: "Football Manager 26", value: 5.0}
  ],
  "Хоррор Года": [
    {label: "No, I'm not a Human", value: 41.7, cheese:true},
    {label: "SILENT HILL f", value: 21.5},
    {label: "Cronos: The New Dawn", value: 12.1},
    {label: "Five Nights at Freddy's: Secret of the Mimic", value: 9.6},
    {label: "Escape the Backrooms", value: 8.0},
    {label: "Little Nightmares III", value: 7.1}
  ],
  "F2P Года": [
    {label: "Umamusume: Pretty Derby", value: 50.8, cheese:true},
    {label: "Battlefield REDSEC", value: 19.7},
    {label: "FragPunk", value: 18.7},
    {label: "Mecha BREAK", value: 8.7},
    {label: "Terminull Brigade", value: 2.1}
  ],
  "Remaster/Remake Года": [
    {label: "The Elder Scrolls IV: Oblivion Remastered", value: 29.0, cheese:true},
    {label: "METAL GEAR SOLID Δ: SNAKE EATER", value: 26.6},
    {label: "Trails in the Sky 1st Chapter", value: 11.2},
    {label: "Warhammer 40,000: Dawn of War", value: 10.9},
    {label: "NINJA GAIDEN 2 Black", value: 9.5},
    {label: "RAIDOU Remastered", value: 2.4},
    {label: "Stronghold Crusader: Definitive Edition", value: 5.3},
    {label: "FINAL FANTASY TACTICS - The Ivalice Chronicles", value: 2.8},
    {label: "Tales of Xillia Remastered", value: 2.3}
  ],
  "Early Access Года": [
    {label: "R.E.P.O.", value: 52.5, cheese:true},
    {label: "Schedule I", value: 11.8},
    {label: "inZOI", value: 8.7},
    {label: "Grounded 2", value: 5.8},
    {label: "2XKO", value: 4.7},
    {label: "RuneScape: Dragonwilds", value: 4.1},
    {label: "Endless Legend II", value: 3.5},
    {label: "Hollywood Animal", value: 4.9},
    {label: "Jump Space", value: 4.0}
  ],
  "DLC Года": [
    {label: "Lies of P: Overture", value: 21.2},
    {label: "Crusader Kings III: All Under Heaven", value: 10.5},
    {label: "RimWorld: Odyssey", value: 18.4},
    {label: "Atomic Heart - Enchantment Under the Sea", value: 36.5, cheese:true},
    {label: "Destiny 2: The Edge of Fate", value: 3.9},
    {label: "Rain World: The Watcher", value: 9.4}
  ],
  "Лучший Саундтрек": [
    {label: "Clair Obscur: Expedition 33", value: 33.3, cheese:true},
    {label: "Hollow Knight: Silksong", value: 17.4},
    {label: "DOOM: The Dark Ages", value: 17.3},
    {label: "Deltarune chapters 3 & 4", value: 15.9},
    {label: "Hades II", value: 6.7},
    {label: "NINJA GAIDEN 4", value: 4.3},
    {label: "Like a Dragon: Pirate Yakuza in Hawaii", value: 5.1}
  ],
  "Китайское Казино Года": [
    {label: "Duet Night Abyss", value: 8.6},
    {label: "GIRLS' FRONTLINE 2: EXILIUM", value: 30.6},
    {label: "Destiny: Rising", value: 14.3},
    {label: "Persona 5: The Phantom X ( Global )", value: 46.5, cheese:true},
  ],
  "Позор Года": [
    {label: "Оптимизация Borderlands 4", value: 30.6, cheese:true},
    {label: "Plants vs. Zombies: Replanted", value: 28.4},
    {label: "Vampire: The Masquerade - Bloodlines 2", value: 17.0},
    {label: "Mindseye", value: 15.6},
    {label: "FBC: Firebreak", value: 5.8},
    {label: "South of Midnight", value: 2.6},
  ],
  "Ожидание Года": [
    {label: "Resident Evil Requiem", value: 5.6},
    {label: "007: First Light", value: 1.8},
    {label: "PRAGMATA", value: 1.3},
    {label: "Halo: Campaign Evolved", value: 0.6},
    {label: "Persona 4 Revival", value: 16},
    {label: "LEGO Batman: Legacy of the Dark Knight", value: 4.4},
    {label: "Marvel's Wolverine", value: 1.6},
    {label: "Heroes of Might and Magic: Olden Era", value: 3.5},
    {label: "Grand Theft Auto VI", value: 11.9},
    {label: "Пчелиная Война 2", value: 46.4, cheese:true },
    {label: "Ведьмак 4", value: 6.6},
    {label: "Star Citizen", value: 16.1},
  ],
  "Мужчина Года": [
    {label: "Гюстав (Expedition 33)", value: 20.4, cheese:true},
    {label: "Ясуке (Assassin's Creed Shadows)", value: 12.9},
    {label: "Якумо (Ninja Gaiden 4)", value: 10.7},
    {label: "Кайл Крейн (Dying Light: The Beast)", value: 16.2},
    {label: "Маджима (Like a Dragon: Pirate Yakuza in Hawaii)", value: 19.8},
    {label: "Сонар (Dispatch)", value: 20.1}
  ],
  "Женщина Года": [
    {label: "Сэори (Ninja Gaiden 4)", value: 4.1},
    {label: "Твоя мама (ВАША МАТЬ)", value: 24.4},
    {label: "Невидива (Dispatch)", value: 9.5},
    {label: "Люнэ (Expedition 33)", value: 7.9},
    {label: "Фрэджайл (Death Stranding 2)", value: 5.8},
    {label: "Катерина (Kingdom Come: Deliverance II)", value: 7.1},
    {label: "Блонди Блейзер (Dispatch)", value: 6.5},
    {label: "Мишель (Beholder: Conductor)", value: 5.0},
    {label: "Хорнет (Hollow Knight Silksong)", value: 29.7, cheese:true}
  ]
};

// --- ЦВЕТОВАЯ ПАЛИТРА ---
const COLORS = [
  '#3b82f6', // Blue
  '#ef4444', // Red
  '#10b981', // Emerald
  '#f97316', // Orange
  '#8b5cf6', // Violet
  '#ec4899', // Pink
  '#06b6d4', // Cyan
  '#84cc16', // Lime
];

function getItemColor(item, index) {
  if (item.cheese) return '#ffd700'; // Gold
  return COLORS[index % COLORS.length];
}

/* ============================================================
      СОЗДАНИЕ КАРТОЧЕК
============================================================ */
const cardsContainer = document.getElementById('cards');

function createCards() {
  Object.keys(DATA).forEach(title => {
    const btn = document.createElement('button');
    btn.className = 'card';
    btn.type = 'button';
    btn.innerHTML = `<div class="title">${title}</div>`;
    btn.addEventListener('click', () => openModal(title));
    cardsContainer.appendChild(btn);
  });
}
createCards();


/* ============================================================
      МОДАЛЬНОЕ ОКНО
============================================================ */
const modalOverlay = document.getElementById('modalOverlay');
const modalClose   = document.getElementById('modalClose');
const closeBtn     = document.getElementById('closeBtn');
const modalTitle   = document.getElementById('modalTitle');
const itemsList    = document.getElementById('itemsList');
const chartCanvas  = document.getElementById('chartCanvas');

modalClose.addEventListener('click', closeModal);
closeBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', e => {
  if (e.target === modalOverlay) closeModal();
});

function openModal(title) {
    const dataset = DATA[title] || [];
    modalTitle.textContent = title;

    // Сначала заполняем список, чтобы цвета совпали
    populateList(dataset);

    modalOverlay.style.display = 'flex';
    modalOverlay.setAttribute('aria-hidden', 'false');

    // Логика выбора типа диаграммы
    setTimeout(() => {
        if (title === "Инди Года") {
            drawBarChart(dataset);
        } else {
            // Восстанавливаем canvas если его скрывали
            const parent = chartCanvas.parentElement;
            const oldBars = parent.querySelector('.bar-chart-container');
            if (oldBars) oldBars.remove();
            
            chartCanvas.style.display = 'block';
            drawAnimatedPieChart(dataset);
        }
    }, 30);
}

function closeModal() {
  modalOverlay.style.display = 'none';
  modalOverlay.setAttribute('aria-hidden', 'true');
}


/* ============================================================
      ПРАВАЯ ПАНЕЛЬ – СПИСОК
============================================================ */
function populateList(dataset) {
  itemsList.innerHTML = '';
  
  dataset.forEach((it, index) => {
    const row = document.createElement('div');
    row.className = 'item' + (it.cheese ? ' cheese' : '');

    const color = getItemColor(it, index);

    const labelDiv = document.createElement('div');
    labelDiv.className = 'label';
    
    // Цветная точка
    const dot = document.createElement('span');
    dot.className = 'legend-dot';
    dot.style.backgroundColor = color;
    
    labelDiv.appendChild(dot);
    labelDiv.appendChild(document.createTextNode(it.label));

    const pct = document.createElement('div');
    pct.className = 'percent';
    pct.textContent = it.value.toFixed(1) + '%';

    row.appendChild(labelDiv);
    row.appendChild(pct);
    itemsList.appendChild(row);
  });
}


/* ============================================================
      СТОЛБЧАТАЯ ДИАГРАММА (BAR CHART)
============================================================ */
function drawBarChart(dataset) {
    const canvas = document.getElementById('chartCanvas');
    const container = canvas.parentElement;

    // 1. Скрываем круглую диаграмму
    canvas.style.display = 'none';

    // 2. Убираем старую таблицу
    const oldBars = container.querySelector('.bar-chart-container');
    if (oldBars) oldBars.remove();

    // 3. Создаем контейнер
    const barList = document.createElement('div');
    barList.className = 'bar-chart-container';

    // 4. Сортируем
    const sortedData = [...dataset].sort((a, b) => b.value - a.value);

    // 5. Генерируем строки
    sortedData.forEach((item) => {
        if (item.value <= 0) return;

        // Находим исходный индекс для цвета
        const originalIndex = dataset.indexOf(item);
        const color = getItemColor(item, originalIndex);

        const row = document.createElement('div');
        row.className = 'bar-row';

        row.innerHTML = `
            <div class="bar-label" title="${item.label}">${item.label}</div>
            <div class="bar-track">
                <div class="bar-fill" 
                     style="width: 0%; background: ${color}; box-shadow: 0 0 10px ${color}80;" 
                     data-width="${item.value > 100 ? 100 : item.value}%">
                </div>
            </div>
            <div class="bar-value">${item.value.toFixed(1)}%</div>
        `;
        barList.appendChild(row);
    });

    container.appendChild(barList);

    // 6. Анимация
    requestAnimationFrame(() => {
        const fills = barList.querySelectorAll('.bar-fill');
        fills.forEach(fill => {
            fill.style.width = fill.getAttribute('data-width');
        });
    });
}

/* ============================================================
      КРУГОВАЯ ДИАГРАММА (PIE CHART)
============================================================ */
function drawAnimatedPieChart(dataset) {
    const canvas = chartCanvas;
    const ctx = canvas.getContext('2d');
    const DPR = window.devicePixelRatio || 1;

    // Цвет границ (как фон модалки)
    const backgroundColor = "#0b1622"; 
    
    // Размеры берем от родителя
    const parentWidth = canvas.parentElement.clientWidth;
    const parentHeight = canvas.parentElement.clientHeight;
    
    // Чтобы на телефонах не был слишком огромным
    const w = parentWidth;
    const h = parentHeight;

    canvas.width = w * DPR;
    canvas.height = h * DPR;
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    ctx.scale(DPR, DPR);

    ctx.clearRect(0, 0, w, h);

    if (!dataset.length) return;

    const total = dataset.reduce((a, b) => a + b.value, 0);
    const cx = w / 2;
    const cy = h / 2;
    const radius = Math.min(w, h) * 0.35; // Радиус круга

    const startTime = performance.now();
    const duration = 900;

    function ease(t) { return 1 - Math.pow(1 - t, 3); }

    function frame(time) {
        const progress = Math.min(1, (time - startTime) / duration);
        const eased = ease(progress);

        ctx.clearRect(0, 0, w, h);

        let startAngle = -Math.PI / 2;
        let lastTextAngle = -100; 

        dataset.forEach((item, index) => {
            if (item.value <= 0) return;

            const slice = (item.value / total) * Math.PI * 2 * eased;
            const endAngle = startAngle + slice;
            
            const color = getItemColor(item, index);

            // Сектор
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.arc(cx, cy, radius, startAngle, endAngle);
            ctx.closePath();
            ctx.fillStyle = color;
            ctx.fill();

            // Границы
            ctx.lineWidth = 2; 
            ctx.strokeStyle = backgroundColor; 
            ctx.stroke(); 

            // Текст на секторе (если больше 6%)
            if (item.value > 6) { 
                const mid = (startAngle + endAngle) / 2;
                
                if (Math.abs(mid - lastTextAngle) > 0.3) {
                    const tx = cx + Math.cos(mid) * (radius * 0.70); 
                    const ty = cy + Math.sin(mid) * (radius * 0.70);

                    const textColor = item.cheese ? "rgba(0, 0, 0, 0.9)" : "white";
                    
                    ctx.shadowColor = "rgba(0,0,0,0.5)";
                    ctx.shadowBlur = 4;

                    ctx.fillStyle = textColor;
                    ctx.font = "bold 14px Inter, Arial";
                    ctx.textAlign = "center";
                    ctx.textBaseline = "middle";
                    ctx.fillText(item.value.toFixed(1) + "%", tx, ty);
                    
                    ctx.shadowBlur = 0;
                    lastTextAngle = mid;
                }
            }
            startAngle = endAngle;
        });

        if (progress < 1) requestAnimationFrame(frame);
    }

    requestAnimationFrame(frame);
}