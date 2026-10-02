// =========================================================
// SUPABASE
// =========================================================

const SUPABASE_URL =
    "https://odkhouddhfdyssxccsra.supabase.co";

const SUPABASE_KEY =
    "sb_publishable_FN2xpc6awEkkeeRxzkeXBg_tlEhbN53";

const { createClient } = supabase;

const supabaseClient = createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);


// =========================================================
// КАТЕГОРИИ
// =========================================================

const CATEGORIES = [

    {
        id: "choice-buldzhat",
        title: "Выбор БУЛДЖАТь",
        nominees: [
            "WWE 2025",
            "Madden 2025",
            "Dokapon! Ikari no Tekken",
            "MLB The Show 25",
            "Тетрис"
        ]
    },

    {
        id: "game-of-the-year",
        title: "Игра Года",
        nominees: [
            "Clair Obscur: Expedition 33",
            "Death Stranding 2",
            "NINJA GAIDEN 4",
            "Split Fiction",
            "Kingdom Come: Deliverance II",
            "Hollow Knight: Silksong"
        ]
    },

    {
        id: "real-game-of-the-year",
        title: "НАСТОЯЩАЯ ИГРА ГОДА",
        nominees: [
            "FEMBOY FUTA HOUSE",
            "ТИХИЙ ДЭН",
            "Земский Собор",
            "РУСЫ ПРОТИВ ЯЩЕРОВ 2",
            "ВАША МАТЬ",
            "Mindseye"
        ]
    },

    {
        id: "single-player",
        title: "Single-player Года",
        nominees: [
            "Clair Obscur: Expedition 33",
            "DOOM: The Dark Ages",
            "Kingdom Come: Deliverance II",
            "Donkey Kong Bananza",
            "Death Stranding 2",
            "NINJA GAIDEN 4",
            "Like a Dragon: Pirate Yakuza in Hawaii"
        ]
    },

    {
        id: "multiplayer",
        title: "Multiplayer Года",
        nominees: [
            "ARC Raiders",
            "Call of Duty: Black Ops 7",
            "Battlefield 6",
            "REMATCH",
            "Escape from Tarkov"
        ]
    },

    {
        id: "coop",
        title: "Кооп Года",
        nominees: [
            "Split Fiction",
            "LEGO Voyagers",
            "Abiotic Factor",
            "PEAK",
            "Supermarket Simulator",
            "ELDEN RING NIGHTREIGN"
        ]
    },

    {
        id: "indie",
        title: "Инди Года",
        nominees: [
            "Peak",
            "Megabonk",
            "Dispatch",
            "CloverPit",
            "No, I’m not human",
            "Beholder: Conductor",
            "Guilty as Sock",
            "Hollow Knight: Silksong",
            "Femboy Futa House",
            "Power wash Simulator 2",
            "My Summer Car",
            "Necesse",
            "Hades 2",
            "Supermarket Simulator",
            "BALL x PITT",
            "He is coming"
        ]
    },

    {
        id: "shooter",
        title: "Шутер Года",
        nominees: [
            "Call of Duty: Black Ops 7",
            "Battlefield",
            "Escape from Tarkov",
            "ARC Raiders",
            "Borderlands 4"
        ]
    },

    {
        id: "strategy",
        title: "Стратегия Года",
        nominees: [
            "Sid Meier's Civilization VII",
            "Europa Universalis V",
            "Stormgate",
            "Anno 117",
            "Jurassic World Evolution 3",
            "Tempest Rising",
            "Farthest Frontier"
        ]
    },

    {
        id: "rpg",
        title: "RPG Года",
        nominees: [
            "Kingdom Come: Deliverance II",
            "Clair Obscur: Expedition 33",
            "The Outer Worlds 2",
            "Avowed",
            "Tainted Grail: The Fall of Avalon",
            "Digimon Story Time Stranger"
        ]
    },

    {
        id: "simulator",
        title: "Симулятор Года",
        nominees: [
            "PowerWash Simulator 2",
            "Beholder: Conductor",
            "Supermarket Simulator",
            "RoadCraft",
            "Football Manager 26"
        ]
    },

    {
        id: "horror",
        title: "Хоррор Года",
        nominees: [
            "No, I’m not a Human",
            "SILENT HILL f",
            "Cronos: The New Dawn",
            "Five Nights at Freddy's: Secret of the Mimic",
            "Escape the Backrooms",
            "Little Nightmares III"
        ]
    },

    {
        id: "f2p",
        title: "F2P Года",
        nominees: [
            "Umamusume: Pretty Derby",
            "Battlefield REDSEC",
            "FragPunk",
            "Mecha BREAK",
            "Terminull Brigade"
        ]
    },

    {
        id: "remaster-remake",
        title: "Remaster/Remake Года",
        nominees: [
            "The Elder Scrolls IV: Oblivion Remastered",
            "METAL GEAR SOLID Δ: SNAKE EATER",
            "Trails in the Sky 1st Chapter",
            "Warhammer 40,000: Dawn of War",
            "NINJA GAIDEN 2 Black",
            "RAIDOU Remastered",
            "Stronghold Crusader: Definitive Edition",
            "FINAL FANTASY TACTICS - The Ivalice Chronicles",
            "Tales of Xillia Remastered"
        ]
    },

    {
        id: "early-access",
        title: "Early Access Года",
        nominees: [
            "R.E.P.O.",
            "Schedule I",
            "inZOI",
            "Grounded 2",
            "2XKO",
            "RuneScape: Dragonwilds",
            "Endless Legend II",
            "Hollywood Animal",
            "Jump Space"
        ]
    },

    {
        id: "dlc",
        title: "DLC Года",
        nominees: [
            "Lies of P: Overture",
            "Crusader Kings III: All Under Heaven",
            "RimWorld: Odyssey",
            "Atomic Heart - Enchantment Under the Sea",
            "Destiny 2: The Edge of Fate",
            "Rain World: The Watcher"
        ]
    },

    {
        id: "soundtrack",
        title: "Лучший Саундтрек",
        nominees: [
            "Clair Obscur: Expedition 33",
            "Hollow Knight: Silksong",
            "DOOM: The Dark Ages",
            "Deltarune chapters 3 & 4",
            "Hades II",
            "NINJA GAIDEN 4",
            "Like a Dragon: Pirate Yakuza in Hawaii"
        ]
    },

    {
        id: "chinese-casino",
        title: "Китайское Казино Года",
        nominees: [
            "Duet Night Abyss",
            "GIRLS' FRONTLINE 2: EXILIUM",
            "Destiny: Rising",
            "Persona 5: The Phantom X ( Global )"
        ]
    },

    {
        id: "shame",
        title: "Позор Года",
        nominees: [
            "Оптимизация Borderlands 4",
            "Plants vs. Zombies: Replanted",
            "Vampire: The Masquerade - Bloodlines 2",
            "Mindseye",
            "FBC: Firebreak",
            "South of Midnight"
        ]
    },

    {
        id: "most-anticipated",
        title: "Ожидание Года",
        nominees: [
            "Resident Evil Requiem",
            "007: First Light",
            "PRAGMATA",
            "Halo: Campaign Evolved",
            "Persona 4 Revival",
            "LEGO Batman: Legacy of the Dark Knight",
            "Marvel's Wolverine",
            "Heroes of Might and Magic: Olden Era",
            "Grand Theft Auto VI",
            "Пчелиная Война 2",
            "Ведьмак 4",
            "Star Citizen"
        ]
    },

    {
        id: "man-of-the-year",
        title: "Мужчина Года",
        nominees: [
            "Гюстав (Expedition 33)",
            "Ясуке (Assassin's Creed Shadows)",
            "Якумо (Ninja Gaiden 4)",
            "Кайл Крейн (Dying Light: The Beast)",
            "Маджима (Like a Dragon: Pirate Yakuza in Hawaii)",
            "Сонар (Dispatch)"
        ]
    },

    {
        id: "woman-of-the-year",
        title: "Женщина Года",
        nominees: [
            "Сэори (Ninja Gaiden 4)",
            "Твоя мама (ВАША МАТЬ)",
            "Невидива (Dispatch)",
            "Люнэ (Expedition 33)",
            "Фрэджайл (Death Stranding 2)",
            "Катерина (Kingdom Come: Deliverance II)",
            "Блонди Блейзер (Dispatch)",
            "Мишель (Beholder: Conductor)",
            "Хорнет (Hollow Knight Silksong)"
        ]
    }

];


// =========================================================
// DOM
// =========================================================

const categoriesContainer =
    document.getElementById("categoriesContainer");

const modal =
    document.getElementById("resultModal");

const modalTitle =
    document.getElementById("modalTitle");

const resultsList =
    document.getElementById("resultsList");

const modalClose =
    document.getElementById("modalClose");

const updateStatus =
    document.getElementById("updateStatus");

const errorMessage =
    document.getElementById("errorMessage");


// =========================================================
// ДАННЫЕ
// =========================================================

let voteResults = {};

let openedCategoryId = null;


// =========================================================
// ПУСТЫЕ РЕЗУЛЬТАТЫ
// =========================================================

function createEmptyResults() {

    const result = {};

    CATEGORIES.forEach(category => {

        result[category.id] = {};

        category.nominees.forEach(nominee => {

            result[category.id][nominee] = 0;

        });

    });

    return result;

}


// =========================================================
// КАРТОЧКИ
// =========================================================

function renderCategoryCards() {

    categoriesContainer.innerHTML = "";

    CATEGORIES.forEach((category, index) => {

        const card =
            document.createElement("div");

        card.className = "category-card";

        card.innerHTML = `

            <div class="category-number">
                НОМИНАЦИЯ ${String(index + 1).padStart(2, "0")}
            </div>

            <div class="category-name">
                ${escapeHtml(category.title)}
            </div>

            <div class="category-bottom">

                <span class="nominee-count">
                    ${category.nominees.length} кандидатов
                </span>

                <span class="category-arrow">
                    →
                </span>

            </div>
        `;

        card.addEventListener(
            "click",
            () => openCategory(category)
        );

        categoriesContainer.appendChild(card);

    });

}


// =========================================================
// ЗАГРУЗКА РЕЗУЛЬТАТОВ
// =========================================================

async function loadResults() {

    errorMessage.style.display =
        "none";

    try {

        const {
            data,
            error
        } =
            await supabaseClient.rpc(
                "get_vote_results"
            );

        if (error) {

            throw error;

        }

        voteResults =
            createEmptyResults();

        if (Array.isArray(data)) {

            data.forEach(row => {

                const categoryId =
                    row.category_id;

                const nomineeId =
                    row.nominee_id;

                const voteCount =
                    Number(row.vote_count) || 0;

                if (
                    voteResults[categoryId] &&
                    Object.prototype.hasOwnProperty.call(
                        voteResults[categoryId],
                        nomineeId
                    )
                ) {

                    voteResults[categoryId][nomineeId] =
                        voteCount;

                }

            });

        }

        updateStatus.textContent =
            "Результаты обновлены: " +
            new Date().toLocaleTimeString();

        if (openedCategoryId) {

            const category =
                CATEGORIES.find(
                    item =>
                        item.id === openedCategoryId
                );

            if (category) {

                renderModalResults(category);

            }

        }

    } catch (error) {

        console.error(
            "Ошибка загрузки результатов:",
            error
        );

        updateStatus.textContent =
            "Не удалось загрузить результаты";

        errorMessage.textContent =
            "Ошибка Supabase: " +
            (
                error.message ||
                "Неизвестная ошибка"
            );

        errorMessage.style.display =
            "block";

    }

}


// =========================================================
// ОТКРЫТИЕ КАТЕГОРИИ
// =========================================================

function openCategory(category) {

    openedCategoryId =
        category.id;

    modalTitle.textContent =
        category.title;

    renderModalResults(category);

    modal.classList.add("active");

    document.body.style.overflow =
        "hidden";

}


// =========================================================
// РЕЗУЛЬТАТЫ В МОДАЛКЕ
// =========================================================

function renderModalResults(category) {

    const results =
        category.nominees.map(
            nominee => ({

                nominee,

                votes:
                    voteResults[
                        category.id
                    ]?.[nominee] || 0

            })
        );

    results.sort(
        (a, b) => {

            if (b.votes !== a.votes) {

                return b.votes - a.votes;

            }

            return a.nominee.localeCompare(
                b.nominee,
                "ru"
            );

        }
    );

    const totalVotes =
        results.reduce(
            (sum, item) =>
                sum + item.votes,
            0
        );

    resultsList.innerHTML =
        "";

    if (totalVotes === 0) {

        resultsList.innerHTML = `
            <div class="no-votes">
                Пока никто не проголосовал.
                <br><br>
                Все номинанты имеют 0 голосов.
            </div>
        `;

        return;

    }

    results.forEach(
        (item, index) => {

            const percentage =
                totalVotes > 0
                    ? (item.votes / totalVotes) * 100
                    : 0;

            let place =
                `${index + 1}.`;

            if (index === 0) {

                place = "🥇";

            } else if (index === 1) {

                place = "🥈";

            } else if (index === 2) {

                place = "🥉";

            }

            const resultItem =
                document.createElement("div");

            resultItem.className =
                "result-item" +
                (
                    index === 0
                        ? " first"
                        : ""
                );

            resultItem.innerHTML = `

                <div class="result-header">

                    <span class="place">
                        ${place}
                    </span>

                    <span class="nominee-name">
                        ${escapeHtml(item.nominee)}
                    </span>

                    <span class="votes">
                        ${item.votes}
                        ${getVoteWord(item.votes)}
                    </span>

                </div>

                <div class="progress-background">

                    <div
                        class="progress-bar"
                        style="width: ${percentage}%"
                    ></div>

                </div>

                <div class="percentage">
                    ${percentage.toFixed(1)}%
                </div>

            `;

            resultsList.appendChild(
                resultItem
            );

        }
    );

}


// =========================================================
// ЗАКРЫТИЕ
// =========================================================

function closeModal() {

    modal.classList.remove(
        "active"
    );

    document.body.style.overflow =
        "";

    openedCategoryId =
        null;

}


modalClose.addEventListener(
    "click",
    closeModal
);


modal.addEventListener(
    "click",
    event => {

        if (event.target === modal) {

            closeModal();

        }

    }
);


document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeModal();

        }

    }
);


// =========================================================
// ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ
// =========================================================

function getVoteWord(number) {

    const lastTwo =
        number % 100;

    const last =
        number % 10;

    if (
        lastTwo >= 11 &&
        lastTwo <= 14
    ) {

        return "голосов";

    }

    if (last === 1) {

        return "голос";

    }

    if (
        last >= 2 &&
        last <= 4
    ) {

        return "голоса";

    }

    return "голосов";

}


function escapeHtml(text) {

    const div =
        document.createElement("div");

    div.textContent =
        text;

    return div.innerHTML;

}


// =========================================================
// ЗАПУСК
// =========================================================

renderCategoryCards();

loadResults();

setInterval(
    loadResults,
    5000
);