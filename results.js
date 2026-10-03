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
            "007: First Light"
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
            "Crimson Desert"
        ]
    },


    {
        id: "multiplayer",
        name: "Multiplayer Года",
        image: TEMP_IMAGE,
        nominees: [
            "Call of Duty: Modern Warfare 4",
            "Gears of War: E-Day",
            "Star Wars: Galactic Racer",
            "AION 2",
            "Marvel Tōkon: Fighting Souls",
            "2XKO"
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
            "Grain Rot"
        ]
    },

    {
        id: "indie",
        name: "Инди Года",
        image: TEMP_IMAGE,
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
        name: "Шутер Года",
        image: TEMP_IMAGE,
        nominees: [
            "Marathon",
            "Call of Duty: Modern Warfare 4",
            "PRAGMATA",
            "Gears of War: E-Day"
        ]
    },

    {
        id: "strategy",
        name: "Стратегия Года",
        image: TEMP_IMAGE,
        nominees: [
            "Star Wars: Zero Company",
            "Mewgenics",
            "Dawn of War IV"
        ]
    },

    {
        id: "rpg",
        name: "RPG Года",
        image: TEMP_IMAGE,
        nominees: [
            "The Blood of Dawnwalker",
            "PRAGMATA",
            "Phantom Blade Zero",
            "Control: Resonant",
            "Trails in the Sky 2nd Chapter",
            "Nioh 3",
            "Crimson Desert"
        ]
    },

    {
        id: "simulator",
        name: "Симулятор Года",
        image: TEMP_IMAGE,
        nominees: [
            "Maid Cafe Simulator",
            "Low-Budget Repairs",
            "Cheap Car Repair"
        ]
    },

    {
        id: "horror",
        name: "Хоррор Года",
        image: TEMP_IMAGE,
        nominees: [
            "Resident Evil Requiem",
            "Silent Hill: Townfall",
            "Reanimal"
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
            "Aniimo"
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
            "Dynasty Warriors 3: Complete Edition Remastered"
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
            "Hytale",
            "Ashes of Creation"
        ]
    },

    {
        id: "dlc",
        name: "DLC Года",
        image: TEMP_IMAGE,
        nominees: [
            "Elden Ring Nightreign - The Forsaken Hollows",
            "Frostpunk 2 - Fractured Utopias",
            "Dragon's Dogma 2 — Dark Arisen",
            "Crimson Desert Enhanced: Charting the Unknown"
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
            "Stranger Than Heaven"
        ]
    },

    {
        id: "shame",
        name: "Позор Года",
        image: TEMP_IMAGE,
        nominees: [
            "Hytale"
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
            "Леон Кеннеди - Resident Evil Requiem"
        ]
    },

    {
        id: "woman-of-the-year",
        name: "Женщина Года",
        image: TEMP_IMAGE,
        nominees: [
            "Грейс Эшкрофт - Resident Evil Requiem",
            "Диана - PRAGMATA"
        ]
    },

    {
        id: "last-studio-release",
        name: "Последний Релиз Студии",
        image: TEMP_IMAGE,
        nominees: [
            "Luna Abyss - Bonsai Collective"
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