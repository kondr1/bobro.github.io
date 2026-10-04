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
        id: "game-of-the-year_2024",
        name: "Игра Года 2024",
        image: TEMP_IMAGE,
        nominees: [
            "Clair Obscur: Expedition 33"
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
            "MECCHA CHAMELEON",
            "Windrose",
            "Big Walk",
            "How to Fish",
            "Bombanana",
            "MOUSE: P.I. For Hire",
            "ReStory: Chill Electronics Repairs",
            "REPLACED",
            "Dressmaker",
            "Grain Rot",
            "Of Ash and Steel",
            "Palworld",       
            "shapez 2 - Factory"     
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
            "MOUSE: P.I. For Hire",
            "No More Room in Hell 2"
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
            "TCG Card Shop Simulator",
            "ReStory: Chill Electronics Repairs"
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
            "Dead as Disco",
            "Solasta II",
            "Paralives",
            "WARDOGS",
            "Hytale",
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
            "The Witcher 4",
            "Squadron 42",
            "Star Citizen"

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

const accountMenu =
    document.getElementById("account-menu");

const accountMenuName =
    document.getElementById("account-menu-name");

const logoutButton =
    document.getElementById("logout-button");

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
// LOGOUT
// ============================================================

async function logout() {

    const { error } =
        await supabaseClient.auth.signOut({
            scope: "local"
        });


    if (error) {

        console.error(
            "Ошибка выхода:",
            error
        );

        alert(
            "Не удалось выйти из аккаунта:\n" +
            error.message
        );

        return;
    }


    if (accountMenu) {
        accountMenu.classList.remove("active");
    }

    currentUser = null;
    userVotes = {};

    updateLoginButton();
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

        loginButton.classList.remove(
            "logged-in"
        );

        if (accountMenu) {
            accountMenu.classList.remove("active");
        }

        return;
    }


    const name =
        currentUser.user_metadata?.full_name ||
        currentUser.user_metadata?.name ||
        currentUser.email ||
        "Вы вошли";


    loginButton.textContent =
        name;

    loginButton.classList.add(
        "logged-in"
    );


    if (accountMenuName) {

        accountMenuName.textContent =
            name;
    }
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

if (loginButton) {

    loginButton.addEventListener(
        "click",
        () => {

            // Если пользователь НЕ вошёл
            if (!currentUser) {

                showLoginModal();

                return;
            }


            // Если пользователь уже вошёл
            if (accountMenu) {

                accountMenu.classList.toggle(
                    "active"
                );
            }

        }
    );
}


if (logoutButton) {

    logoutButton.addEventListener(
        "click",
        logout
    );
}

document.addEventListener(
    "click",
    event => {

        if (!accountMenu || !loginButton) {
            return;
        }


        if (
            accountMenu.contains(event.target) ||
            loginButton.contains(event.target)
        ) {
            return;
        }


        accountMenu.classList.remove("active");
    }
);

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

    if (accountMenu) {
        accountMenu.classList.remove("active");
    }

    if (
        modal &&
        modal.classList.contains("active")
    ) {
        closeModal();
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