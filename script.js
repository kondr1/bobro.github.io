// ============================================================
// SUPABASE
// ============================================================

const SUPABASE_URL = "https://odkhouddhfdyssxccsra.supabase.co";
const SUPABASE_KEY = "sb_publishable_FN2xpc6awEkkeeRxzkeXBg_tlEhbN53";

const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);


// ============================================================
// ТАЙМЕР
// ============================================================

const votingEnd = new Date("2026-12-23T23:59:59");

function updateCountdown() {
    const countdownEl = document.getElementById("countdown");

    // На странице результатов таймера нет
    if (!countdownEl) return;

    const now = new Date();
    const difference = votingEnd - now;

    if (difference <= 0) {
        countdownEl.textContent = "Голосование завершено";

        // Не перенаправляем повторно, если уже на result.html
        if (!window.location.pathname.endsWith("result.html")) {
            window.location.href = "result.html";
        }

        return;
    }

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );

    countdownEl.textContent =
        `${days}д ${hours}ч ${minutes}м ${seconds}с`;
}


// ============================================================
// КАРТИНКА
// ============================================================

const TEMP_IMAGE = "./photo_2025-11-10_21-02-06.png";


// ============================================================
// КАТЕГОРИИ
// ============================================================

const CATEGORIES = [
    {
        id: "choice-buldzhat",
        name: "Выбор БУЛДЖАТь",
        image: TEMP_IMAGE,
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
        name: "Игра Года",
        image: TEMP_IMAGE,
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
        name: "НАСТОЯЩАЯ ИГРА ГОДА",
        image: TEMP_IMAGE,
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
        name: "Single-player Года",
        image: TEMP_IMAGE,
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
        name: "Multiplayer Года",
        image: TEMP_IMAGE,
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
        name: "Кооп Года",
        image: TEMP_IMAGE,
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
            "Call of Duty: Black Ops 7",
            "Battlefield",
            "Escape from Tarkov",
            "ARC Raiders",
            "Borderlands 4"
        ]
    },

    {
        id: "strategy",
        name: "Стратегия Года",
        image: TEMP_IMAGE,
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
        name: "RPG Года",
        image: TEMP_IMAGE,
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
        name: "Симулятор Года",
        image: TEMP_IMAGE,
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
        name: "Хоррор Года",
        image: TEMP_IMAGE,
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
        name: "F2P Года",
        image: TEMP_IMAGE,
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
        name: "Remaster/Remake Года",
        image: TEMP_IMAGE,
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
        name: "Early Access Года",
        image: TEMP_IMAGE,
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
        name: "DLC Года",
        image: TEMP_IMAGE,
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
        name: "Лучший Саундтрек",
        image: TEMP_IMAGE,
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
        name: "Китайское Казино Года",
        image: TEMP_IMAGE,
        nominees: [
            "Duet Night Abyss",
            "GIRLS' FRONTLINE 2: EXILIUM",
            "Destiny: Rising",
            "Persona 5: The Phantom X ( Global )"
        ]
    },

    {
        id: "shame",
        name: "Позор Года",
        image: TEMP_IMAGE,
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
        name: "Ожидание Года",
        image: TEMP_IMAGE,
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
        name: "Мужчина Года",
        image: TEMP_IMAGE,
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
        name: "Женщина Года",
        image: TEMP_IMAGE,
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


// ============================================================
// DOM
// ============================================================

const categoriesGrid =
    document.getElementById("categories-grid");

const modal =
    document.getElementById("modal");

const loginModal =
    document.getElementById("login-modal");

const modalImage =
    document.getElementById("modal-image");

const modalNumber =
    document.getElementById("modal-number");

const modalTitle =
    document.getElementById("modal-title");

const modalDescription =
    document.getElementById("modal-description");

const nomineesList =
    document.getElementById("nominees-list");

const voteMessage =
    document.getElementById("vote-message");

const loginButton =
    document.getElementById("login-button");

const googleLoginModal =
    document.getElementById("google-login-modal");

const discordLoginModal =
    document.getElementById("discord-login-modal");

const prevCategoryButton =
    document.getElementById("prev-category");

const nextCategoryButton =
    document.getElementById("next-category");


// ============================================================
// СОСТОЯНИЕ
// ============================================================

let currentCategory = null;
let currentUser = null;

let userVotes = {};


// ============================================================
// ESCAPE HTML
// ============================================================

function escapeHTML(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}


// ============================================================
// КАРТОЧКИ КАТЕГОРИЙ
// ============================================================

function createCategoryCards() {

    // ВАЖНО:
    // Если этот JS каким-то образом загрузился не на главной,
    // функция просто прекращает работу.

    if (!categoriesGrid) {
        return;
    }

    categoriesGrid.innerHTML = "";

    CATEGORIES.forEach((category, index) => {

        const card =
            document.createElement("div");

        card.className =
            "category-card";

        card.innerHTML = `
            <div class="category-number">
                НОМИНАЦИЯ ${String(index + 1).padStart(2, "0")}
            </div>

            <div class="category-name">
                ${escapeHTML(category.name)}
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

        categoriesGrid.appendChild(card);
    });
}


// ============================================================
// ОБНОВЛЕНИЕ НАВИГАЦИИ
// ============================================================

function updateCategoryNavigation() {

    if (!currentCategory) return;

    const currentIndex =
        CATEGORIES.indexOf(currentCategory);

    if (currentIndex === -1) return;


    if (prevCategoryButton) {

        if (currentIndex === 0) {

            prevCategoryButton.style.visibility =
                "hidden";

            prevCategoryButton.disabled =
                true;

        } else {

            prevCategoryButton.style.visibility =
                "visible";

            prevCategoryButton.disabled =
                false;
        }
    }


    if (nextCategoryButton) {

        if (currentIndex === CATEGORIES.length - 1) {

            nextCategoryButton.style.visibility =
                "hidden";

            nextCategoryButton.disabled =
                true;

        } else {

            nextCategoryButton.style.visibility =
                "visible";

            nextCategoryButton.disabled =
                false;
        }
    }
}


// ============================================================
// ПРЕДЫДУЩАЯ НОМИНАЦИЯ
// ============================================================

function openPreviousCategory() {

    if (!currentCategory) return;

    const currentIndex =
        CATEGORIES.indexOf(currentCategory);

    if (currentIndex <= 0) return;

    const previousCategory =
        CATEGORIES[currentIndex - 1];

    openCategory(previousCategory);
}


// ============================================================
// СЛЕДУЮЩАЯ НОМИНАЦИЯ
// ============================================================

function openNextCategory() {

    if (!currentCategory) return;

    const currentIndex =
        CATEGORIES.indexOf(currentCategory);

    if (currentIndex === -1) return;

    if (currentIndex >= CATEGORIES.length - 1) {
        return;
    }

    const nextCategory =
        CATEGORIES[currentIndex + 1];

    openCategory(nextCategory);
}


// ============================================================
// ОТКРЫТИЕ КАТЕГОРИИ
// ============================================================

function openCategory(category) {

    // Дополнительная защита
    if (
        !modal ||
        !modalImage ||
        !modalNumber ||
        !modalTitle ||
        !modalDescription ||
        !nomineesList ||
        !voteMessage
    ) {
        return;
    }

    currentCategory = category;

    const categoryIndex =
        CATEGORIES.indexOf(category) + 1;

    const isIndie =
        category.id === "indie";


    modalNumber.textContent =
        `НОМИНАЦИЯ ${String(categoryIndex).padStart(2, "0")}`;

    modalTitle.textContent =
        category.name;


    modalDescription.textContent =
        isIndie
            ? "Можно выбрать несколько вариантов (повторный клик снимает голос)."
            : "Выберите одного кандидата.";


    modalImage.src =
        category.image;

    modalImage.alt =
        category.name;


    voteMessage.classList.remove(
        "visible"
    );

    voteMessage.textContent =
        "";


    nomineesList.innerHTML =
        "";


    const selectedNominees =
        userVotes[category.id] || [];


    category.nominees.forEach(
        nominee => {

            const button =
                document.createElement("button");

            button.className =
                "nominee";


            if (
                selectedNominees.includes(
                    nominee
                )
            ) {
                button.classList.add(
                    "selected"
                );
            }


            button.innerHTML = `
                <span class="nominee-name">
                    ${escapeHTML(nominee)}
                </span>

                <div class="nominee-check">
                    <span>✓</span>
                </div>
            `;


            button.addEventListener(
                "click",
                () => {

                    if (!currentUser) {

                        showLoginModal();

                        return;
                    }

                    voteForNominee(
                        category,
                        nominee,
                        button
                    );
                }
            );


            nomineesList.appendChild(
                button
            );
        }
    );


    updateCategoryNavigation();


    modal.classList.add(
        "active"
    );

    document.body.style.overflow =
        "hidden";
}


// ============================================================
// ЗАКРЫТИЕ MODAL
// ============================================================

function closeModal() {

    if (!modal) return;

    modal.classList.remove(
        "active"
    );

    document.body.style.overflow =
        "";
}


// ============================================================
// LOGIN MODAL
// ============================================================

function showLoginModal() {

    if (!loginModal) return;

    loginModal.classList.add("active");

    document.body.style.overflow = "hidden";
}


function closeLoginModal() {

    if (!loginModal) return;

    loginModal.classList.remove("active");

    if (
        !modal ||
        !modal.classList.contains("active")
    ) {
        document.body.style.overflow = "";
    }
}


// ============================================================
// GOOGLE LOGIN
// ============================================================

async function loginWithGoogle() {

    const { error } =
        await supabaseClient.auth.signInWithOAuth({

            provider: "google",

            options: {
                redirectTo:
                    window.location.origin +
                    window.location.pathname
            }
        });


    if (error) {

        console.error(error);

        alert(
            "Ошибка входа через Google:\n" +
            error.message
        );
    }
}

// ============================================================
// DISCORD LOGIN
// ============================================================

async function loginWithDiscord() {

    const { error } =
        await supabaseClient.auth.signInWithOAuth({

            provider: "discord",

            options: {
                redirectTo:
                    window.location.origin +
                    window.location.pathname
            }
        });


    if (error) {

        console.error(
            "Ошибка входа через Discord:",
            error
        );

        alert(
            "Ошибка входа через Discord:\n" +
            error.message
        );
    }
}


// ============================================================
// ЗАГРУЗКА ГОЛОСОВ
// ============================================================

async function loadUserVotes() {

    if (!currentUser) {

        userVotes = {};

        return;
    }


    const { data, error } =
        await supabaseClient
            .from("votes")
            .select(
                "category_id, nominee_id"
            )
            .eq(
                "user_id",
                currentUser.id
            );


    if (error) {

        console.error(
            "Ошибка при получении голосов:",
            error
        );

        return;
    }


    userVotes = {};


    if (Array.isArray(data)) {

        data.forEach(item => {

            if (
                !userVotes[item.category_id]
            ) {
                userVotes[item.category_id] =
                    [];
            }

            userVotes[item.category_id].push(
                item.nominee_id
            );
        });
    }
}


// ============================================================
// ТЕКУЩИЙ ПОЛЬЗОВАТЕЛЬ
// ============================================================

async function loadCurrentUser() {

    if (!supabaseClient) return;

    const { data, error } =
        await supabaseClient.auth.getUser();


    if (error || !data.user) {

        currentUser = null;

        userVotes = {};

        updateLoginButton();

        return;
    }


    currentUser =
        data.user;

    updateLoginButton();

    await loadUserVotes();
}


// ============================================================
// КНОПКА ВХОДА
// ============================================================

function updateLoginButton() {

    if (!loginButton) return;


    if (!currentUser) {

    loginButton.textContent =
        "Авторизация";

     return;
    }


    const name =
        currentUser.user_metadata?.full_name ||
        currentUser.user_metadata?.name ||
        currentUser.email ||
        "Вы вошли";


    loginButton.textContent =
        name;
}


// ============================================================
// AUTH STATE CHANGE
// ============================================================

supabaseClient.auth.onAuthStateChange(
    async (event, session) => {

        currentUser =
            session?.user || null;


        updateLoginButton();


        if (currentUser) {

            closeLoginModal();

            await loadUserVotes();

        } else {

            userVotes = {};
        }
    }
);


// ============================================================
// ГОЛОСОВАНИЕ
// ============================================================

async function voteForNominee(
    category,
    nominee,
    buttonElement
) {

    if (!currentUser) {

        showLoginModal();

        return;
    }


    const isIndie =
        category.id === "indie";


    if (!userVotes[category.id]) {

        userVotes[category.id] =
            [];
    }


    // ========================================================
    // ВИЗУАЛЬНОЕ СОСТОЯНИЕ
    // ========================================================

    if (isIndie) {

        buttonElement.classList.toggle(
            "selected"
        );

    } else {

        document
            .querySelectorAll(".nominee")
            .forEach(el => {

                el.classList.remove(
                    "selected"
                );
            });


        buttonElement.classList.add(
            "selected"
        );
    }


    voteMessage.textContent =
        "Сохраняем голос...";


    voteMessage.classList.add(
        "visible"
    );


    // ========================================================
    // SUPABASE
    // ========================================================

    const {
        data: action,
        error
    } = await supabaseClient.rpc(
        "cast_vote",
        {
            p_category_id:
                category.id,

            p_nominee_id:
                nominee
        }
    );


    // ========================================================
    // ОШИБКА
    // ========================================================

    if (error) {

        console.error(
            "Ошибка голосования:",
            error
        );


        voteMessage.textContent =
            "Не удалось сохранить голос: " +
            error.message;


        if (isIndie) {

            buttonElement.classList.toggle(
                "selected"
            );

        } else {

            buttonElement.classList.remove(
                "selected"
            );
        }


        return;
    }


    // ========================================================
    // ЛОКАЛЬНОЕ СОСТОЯНИЕ
    // ========================================================

    if (isIndie) {

        if (action === "removed") {

            userVotes[category.id] =
                userVotes[category.id].filter(
                    name => name !== nominee
                );


            voteMessage.textContent =
                "Голос убран!";

        } else {

            userVotes[category.id].push(
                nominee
            );


            voteMessage.textContent =
                "✓ Голос добавлен!";
        }

    } else {

        userVotes[category.id] =
            [nominee];


        voteMessage.textContent =
            "✓ Голос сохранён!";
    }
}


// ============================================================
// СОБЫТИЯ
// ============================================================

// Закрытие обычной модалки

const closeModalButton =
    document.getElementById("close-modal");

if (closeModalButton) {

    closeModalButton.addEventListener(
        "click",
        closeModal
    );
}


const modalOverlay =
    document.querySelector(
        "#modal .modal-overlay"
    );

if (modalOverlay) {

    modalOverlay.addEventListener(
        "click",
        closeModal
    );
}


// ============================================================
// LOGIN MODAL
// ============================================================

const closeLoginModalButton =
    document.getElementById(
        "close-login-modal"
    );

if (closeLoginModalButton) {

    closeLoginModalButton.addEventListener(
        "click",
        closeLoginModal
    );
}


const loginModalOverlay =
    document.querySelector(
        "#login-modal .modal-overlay"
    );

if (loginModalOverlay) {

    loginModalOverlay.addEventListener(
        "click",
        closeLoginModal
    );
}

// ============================================================
// АВТОРИЗАЦИЯ
// ============================================================

// Кнопка "Авторизация" в шапке
if (loginButton) {

    loginButton.addEventListener(
        "click",
        showLoginModal
    );
}


// Google
if (googleLoginModal) {

    googleLoginModal.addEventListener(
        "click",
        loginWithGoogle
    );
}


// Discord
if (discordLoginModal) {

    discordLoginModal.addEventListener(
        "click",
        loginWithDiscord
    );
}


// ============================================================
// НАЗАД / ДАЛЕЕ
// ============================================================

if (prevCategoryButton) {

    prevCategoryButton.addEventListener(
        "click",
        openPreviousCategory
    );
}


if (nextCategoryButton) {

    nextCategoryButton.addEventListener(
        "click",
        openNextCategory
    );
}


// ============================================================
// КЛАВИАТУРА
// ============================================================

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            if (
                modal &&
                modal.classList.contains("active")
            ) {
                closeModal();
            }


            if (
                loginModal &&
                loginModal.classList.contains("active")
            ) {
                closeLoginModal();
            }


            return;
        }


        if (
            !modal ||
            !modal.classList.contains("active")
        ) {
            return;
        }


        if (event.key === "ArrowLeft") {

            openPreviousCategory();
        }


        if (event.key === "ArrowRight") {

            openNextCategory();
        }
    }
);


// ============================================================
// СТАРТ
// ============================================================

// Таймер запускаем всегда.
// На result.html он просто ничего не делает.

updateCountdown();

setInterval(
    updateCountdown,
    1000
);


// Карточки и пользовательская логика
// запускаются безопасно.

createCategoryCards();

loadCurrentUser();