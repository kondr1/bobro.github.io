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
        name: "Выбор Булджать",
        image: TEMP_IMAGE,
        nominees: [
            "Grand Theft Auto VI",
            "The Blood of Dawnwalker",
            "PRAGMATA",
            "Resident Evil Requiem",
            "Control: Resonant",
            "007: First Light"
        ]
    },


    {
        id: "game-of-the-year",
        name: "Игра Года",
        image: TEMP_IMAGE,
        nominees: [
            "Grand Theft Auto VI",
            "The Blood of Dawnwalker",
            "PRAGMATA",
            "Resident Evil Requiem",
            "Control: Resonant",
            "007: First Light",
            "Forza Horizon 6"
        ]
    },


    {
        id: "single-player",
        name: "Single-Player Года",
        image: TEMP_IMAGE,
        nominees: [
            "PRAGMATA",
            "Resident Evil Requiem",
            "007: First Light",
            "Control: Resonant",
            "The Blood of Dawnwalker",
            "Gears of War: E-Day",
            "Grand Theft Auto VI",
            "ACE COMBAT 8: WINGS OF THEVE",
            "Onimusha: Way of the Sword",
            "Crimson Desert",
            "Mortal Shell II"
        ]
    },


    {
        id: "multiplayer",
        name: "Multiplayer Года",
        image: TEMP_IMAGE,
        nominees: [
            "Call of Duty: Modern Warfare 4",
            "Marathon",
            "Gears of War: E-Day",
            "Star Wars: Galactic Racer",
            "Forza Horizon 6",
            "Marvel Tōkon: Fighting Souls",
            "2XKO",
            "Avatar Legends: The Fighting Game"
        ]
    },


    {
        id: "friend-slop",
        name: "Френдслоп Года",
        image: TEMP_IMAGE,
        nominees: [
            "Big Walk",
            "How to Fish",
            "Bombanana",
            "Grain Rot",
            "Crashout Crew",
            "Dumb Ways to Build",
            "YAPYAP",
            "MECCHA CHAMELEON"
        ]
    },

    {
        id: "indie",
        name: "Инди Года",
        image: TEMP_IMAGE,
        nominees: [
            "Mewgenics",
            "Pathologic 3",
            "Valheim",
            "MECCHA CHAMELEON"

            
        ]
    },


    {
        id: "shooter",
        name: "Шутер Года",
        image: TEMP_IMAGE,
        nominees: [
            "Marathon",
            "Call of Duty: Modern Warfare 4",
            "PRAGMATA",
            "Gears of War: E-Day",
            "High on Life 2",
            "Highguard",
            "Far Far West"
        ]
    },

    {
        id: "strategy",
        name: "Стратегия Года",
        image: TEMP_IMAGE,
        nominees: [
            "Star Wars: Zero Company",
            "Mewgenics",
            " Anno 117: Pax Romana",
            "Going Medieval",
            "Terra Invicta",
            "Pioneers of Pagonia",
            "Heroes of Might & Magic: Olden Era"
        ]
    },

    {
        id: "rpg",
        name: "RPG Года",
        image: TEMP_IMAGE,
        nominees: [
            "The Blood of Dawnwalker",
            "Phantom Blade Zero",
            "Nioh 3",
            "Crimson Desert",
            "Code Vein 2",
            "RPG Of Ash and Steel",
            "Mortal Shell II",
            "Minecraft Dungeons II",
            "Monster Hunter Stories 3: Twisted Reflection"
        ]
    },

    {
        id: "simulator",
        name: "Симулятор Года",
        image: TEMP_IMAGE,
        nominees: [
            "Maid Cafe Simulator",
            "Low-Budget Repairs",
            "Cheap Car Repair",
            "Scrap Mechanic",
            "IRON NEST: Heavy Turret Simulator",
            "TCG Card Shop Simulator"
        ]
    },

    {
        id: "horror",
        name: "Хоррор Года",
        image: TEMP_IMAGE,
        nominees: [
            "Resident Evil Requiem",
            "Silent Hill: Townfall",
            "Reanimal",
            "Pathologic 3",
            "Halloween: The Game"
        ]
    },

    {
        id: "f2p",
        name: "F2P Года",
        image: TEMP_IMAGE,
        nominees: [
            "AION 2",
            "2XKO",
            "Neverness to Everness",
            "Aniimo",
            "Pokemon Champions",
            "Arknights: Endfield",
            "Duet Night Abyss"
        ]
    },

    {
        id: "wolverine",
        name: "Росомаха Года",
        image: TEMP_IMAGE,
        nominees: [
            "Marvel's Wolverine"
        ]
    },

    {
        id: "remaster-remake",
        name: "Remaster/Remake Года",
        image: TEMP_IMAGE,
        nominees: [
            "The Witcher 3: Wild Hunt — Remastered",
            "Gothic 1 Remake",
            "Assassin's Creed IV: Black Flag Resynced",
            "Trails in the Sky 2nd Chapter",
            "Dynasty Warriors 3: Complete Edition Remastered",
            "Halo: Campaign Evolved"
        ]
    },

    {
        id: "early-access",
        name: "Ранний Доступ Года",
        image: TEMP_IMAGE,
        nominees: [
            "Roadside Research",
            "Slay the Spire 2",
            "Subnautica 2",
            "Solasta II",
            "Paralives",
            "WARDOGS",
            "Hytale",
            "Ashes of Creation",
            "Deep Rock Galactic: Rogue Core",
            "Dead as Disco"
        ]
    },

    {
        id: "dlc",
        name: "DLC Года",
        image: TEMP_IMAGE,
        nominees: [
            "Elden Ring Nightreign - The Forsaken Hollows",
            "Frostpunk 2 - Fractured Utopias",
            "Dragon's Dogma 2 - Dark Arisen",
            "Crimson Desert Enhanced: Charting the Unknown",
            "DOOM: The Dark Ages Revelations"
        ]
    },

    {
        id: "shame",
        name: "Позор Года",
        image: TEMP_IMAGE,
        nominees: [
            "Tiny Bunny",
            "s&box",
            "Highguard",
            "Ashes of Creation",
            "Life is Strange: Reunion",
            "Mixtape"
        ]
    },

    {
        id: "soundtrack",
        name: "Лучший Саундтрек",
        image: TEMP_IMAGE,
        nominees: [
            "Resident Evil Requiem",
            "Trails in the Sky 2nd Chapter",
            "Onimusha: Way of the Sword",
            "Control Resonant",
            "007: First Light"
        ]
    },

    {
        id: "most-anticipated",
        name: "Ожидание Года",
        image: TEMP_IMAGE,
        nominees: [
            "Persona 6",
            "Tides of Annihilation",
            "Stellar Blade Blood Rain",
            "Ananta",
            "Final Fantasy VII Revelation",
            "Fable",
            "God of War: Laufey",
            "Stranger Than Heaven",
            "The Witcher 4"
        ]
    },

    {
        id: "man-of-the-year",
        name: "Мужчина Года",
        image: TEMP_IMAGE,
        nominees: [
            "Миямото Мусаси - Onimusha: Way of the Sword",
            "Джеймс Бонд - 007: First Light",
            "Дилан Фейден - Control Resonant",
            "Леон Кеннеди - Resident Evil Requiem",
            "Логан - Wolverine",
            "Джейсон Дюваль - GTA VI"
        ]
    },

    {
        id: "woman-of-the-year",
        name: "Женщина Года",
        image: TEMP_IMAGE,
        nominees: [
            "Грейс Эшкрофт - Resident Evil Requiem",
            "Диана - PRAGMATA",
            "Люсия Кэминос - GTA VI",
            "Мистик - Wolverine",
        ]
    },

    {
        id: "sort-10000-shit",
        name: "Отсортируй 10000 ГОВНА!",
        image: TEMP_IMAGE,
        nominees: [
            "Librarian: Tidy Up the Arcane Library!",
            "Never Sort By Color",
            "Cellar Keeper",
            "Storehand",
            "LIMINAL SORTING"
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