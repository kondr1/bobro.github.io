// ============================================================
// SUPABASE (ключ publishable: безопасен только при включённом RLS)
// ============================================================

const SUPABASE_URL = "https://odkhouddhfdyssxccsra.supabase.co";
const SUPABASE_KEY = "sb_publishable_FN2xpc6awEkkeeRxzkeXBg_tlEhbN53";

let supabaseClient = null;

try {
    supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
} catch (error) {
    // Библиотека не загрузилась (VPN, блокировщик, сеть): сайт всё равно покажет номинации
    console.error("Supabase недоступен:", error);
}


// ============================================================
// ТАЙМЕР (часовой пояс указан явно: МСК)
// ============================================================

const votingEnd = new Date("2026-12-23T23:59:59+03:00");
const countdownEl = document.getElementById("countdown");

function updateCountdown() {
    if (!countdownEl) return;

    const diff = votingEnd - new Date();

    if (diff <= 0) {
        countdownEl.textContent = "Голосование завершено";
        window.location.href = "result.html";
        return;
    }

    const d = Math.floor(diff / 86400000);
    const h = Math.floor(diff / 3600000) % 24;
    const m = Math.floor(diff / 60000) % 60;
    const s = Math.floor(diff / 1000) % 60;

    countdownEl.textContent = `${d}д ${h}ч ${m}м ${s}с`;
}


// ============================================================
// DOM
// ============================================================

const $ = id => document.getElementById(id);

const categoriesGrid   = $("categories-grid");
const modal            = $("modal");
const loginModal       = $("login-modal");
const modalImage       = $("modal-image");
const modalNumber      = $("modal-number");
const modalTitle       = $("modal-title");
const modalDescription = $("modal-description");
const nomineesList     = $("nominees-list");
const voteMessage      = $("vote-message");
const loginButton      = $("login-button");
const accountMenu      = $("account-menu");
const accountMenuName  = $("account-menu-name");
const prevButton       = $("prev-category");
const nextButton       = $("next-category");

if (!supabaseClient) loginButton.textContent = "Вход недоступен";


// ============================================================
// СОСТОЯНИЕ
// ============================================================

let currentCategory = null;
let currentUser = null;
let userVotes = {};
let voteBusy = false;

const isMulti = category => category.id === "indie";

const pad = n => String(n).padStart(2, "0");

function escapeHTML(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}


// ============================================================
// КАРТОЧКИ (один innerHTML + делегирование клика)
// ============================================================

function createCategoryCards() {
    if (!categoriesGrid) return;

    categoriesGrid.innerHTML = CATEGORIES.map((category, index) => `
        <div class="category-card" data-index="${index}">
            <div class="category-number">НОМИНАЦИЯ ${pad(index + 1)}</div>
            <div class="category-name">${escapeHTML(category.name)}</div>
            <div class="category-bottom" data-num="${pad(index + 1)}"><span class="category-arrow">→</span></div>
        </div>
    `).join("");

    categoriesGrid.addEventListener("click", event => {
        const card = event.target.closest(".category-card");
        if (card) openCategory(CATEGORIES[Number(card.dataset.index)]);
    });
}


// ============================================================
// МОДАЛКА НОМИНАЦИИ
// ============================================================

function updateCategoryNavigation() {
    const i = CATEGORIES.indexOf(currentCategory);
    if (i === -1) return;

    const atStart = i === 0;
    const atEnd = i === CATEGORIES.length - 1;

    prevButton.disabled = atStart;
    prevButton.style.visibility = atStart ? "hidden" : "visible";

    nextButton.disabled = atEnd;
    nextButton.style.visibility = atEnd ? "hidden" : "visible";
}

// ============================================================
// ПОИСК КАРТИНКИ КАНДИДАТА
// Сравнение терпимое: регистр, лишние пробелы и разные виды тире не мешают
// ("Мистик – Wolverine" найдётся по ключу "Мистик - Wolverine").
// ============================================================

const normKey = v => String(v).toLowerCase().replace(/[\u2010-\u2015\u2212]/g, "-").replace(/\s+/g, " ").trim();

function findImage(category, nominee) {
    if (!category.images) return undefined;

    if (!category._imgMap) {
        category._imgMap = {};
        Object.entries(category.images).forEach(([key, path]) => { category._imgMap[normKey(key)] = path; });
    }

    return category._imgMap[normKey(nominee)];
}

// Подсказки в консоли (F12), если в categories.js что-то не сходится
CATEGORIES.forEach(category => {
    if (!category.images) return;

    if (!category.cards) {
        console.warn(`[images] В номинации «${category.name}» задан images, но нет cards: true`);
    }

    const known = new Set(category.nominees.map(normKey));

    Object.keys(category.images).forEach(key => {
        if (!known.has(normKey(key))) {
            console.warn(`[images] Ключ «${key}» в номинации «${category.name}» не совпадает ни с одним кандидатом`);
        }
    });
});


// ============================================================
// КАРТОЧКА КАНДИДАТА (режим «голосование картинками»)
// Название в базе остаётся прежним (полная строка), поэтому уже
// поданные голоса не теряются. Текст делится по первому " - ":
// "Мистик - Wolverine" -> имя "Мистик", игра "Wolverine".
// ============================================================

function nomineeCardHTML(category, nominee, i, isSelected) {
    const [title, ...rest] = nominee.split(" - ");
    const game = rest.join(" - ");
    const own = findImage(category, nominee);
    const hasOwnImages = category.images && Object.keys(category.images).length > 0;

    // Нет своей картинки:
    //  - если у других кандидатов номинации картинки уже есть: плитка с первой буквой,
    //  - если картинок нет ни у кого (временный режим): общая картинка со сдвигом кадра.
    const tile = !own && hasOwnImages;
    const pos = category.nominees.length > 1 ? Math.round(i * 100 / (category.nominees.length - 1)) : 50;
    const style = own ? "" : ` style="object-position:${pos}% 50%"`;
    const letter = escapeHTML(([...title.trim()][0] || "?").toUpperCase());

    return `
        <button class="nominee nominee-card${isSelected ? " selected" : ""}" data-i="${i}" type="button">
            <span class="card-photo${tile ? " no-img" : ""}">
                ${tile ? "" : `<img src="${escapeHTML(own || IMAGE)}" alt="" loading="lazy" decoding="async"${style}>`}
                <span class="card-ph" aria-hidden="true">${letter}</span>
                <span class="nominee-check"><span>✓</span></span>
            </span>
            <span class="card-text">
                <span class="card-name">${escapeHTML(title)}</span>
                ${game ? `<span class="card-game">${escapeHTML(game)}</span>` : ""}
            </span>
        </button>`;
}

function openCategory(category) {
    currentCategory = category;

    const selected = userVotes[category.id] || [];

    modalNumber.textContent = `НОМИНАЦИЯ ${pad(CATEGORIES.indexOf(category) + 1)}`;
    modalTitle.textContent = category.name;

    modalDescription.textContent = isMulti(category)
        ? "Можно выбрать несколько вариантов (повторный клик снимает голос)."
        : "Выберите одного кандидата.";

    modalImage.src = category.banner || IMAGE; // свой баннер номинации или общий
    modalImage.alt = category.name;

    voteMessage.classList.remove("visible");
    voteMessage.textContent = "";

    const useCards = Boolean(category.cards);
    const total = category.nominees.length;
    const cols = total <= 6 ? Math.max(total, 3) : Math.ceil(total / 2); // 7-8 кандидатов: два ряда

    nomineesList.className = "nominees-list" + (useCards ? " cards" : "") + (useCards && selected.length ? " has-selected" : "");
    nomineesList.style.setProperty("--cols", cols);
    nomineesList.style.setProperty("--ratio", category.ratio || "3 / 4"); // пропорция карточек: "2 / 3" для постеров игр

    nomineesList.innerHTML = category.nominees.map((nominee, i) => {
        const isSelected = selected.includes(nominee);

        if (useCards) return nomineeCardHTML(category, nominee, i, isSelected);

        return `
            <button class="nominee${isSelected ? " selected" : ""}" data-i="${i}" type="button">
                <span class="nominee-name">${escapeHTML(nominee)}</span>
                <div class="nominee-check"><span>✓</span></div>
            </button>`;
    }).join("");

    updateCategoryNavigation();

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeModal() {
    modal.classList.remove("active");
    document.body.style.overflow = "";
}

function stepCategory(step) {
    if (!currentCategory) return;

    const next = CATEGORIES[CATEGORIES.indexOf(currentCategory) + step];
    if (next) openCategory(next);
}

// Один обработчик на весь список кандидатов
nomineesList.addEventListener("click", event => {
    const button = event.target.closest(".nominee");
    if (!button || !currentCategory) return;

    if (!currentUser) {
        showLoginModal();
        return;
    }

    voteForNominee(currentCategory, currentCategory.nominees[Number(button.dataset.i)], button);
});


// ============================================================
// МОДАЛКА ВХОДА
// ============================================================

function showLoginModal() {
    loginModal.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeLoginModal() {
    loginModal.classList.remove("active");

    if (!modal.classList.contains("active")) {
        document.body.style.overflow = "";
    }
}


// ============================================================
// АВТОРИЗАЦИЯ
// ============================================================

async function loginWith(provider, title) {
    if (!supabaseClient) {
        alert("Вход сейчас недоступен: не удалось связаться с сервером. Попробуй отключить VPN или блокировщик рекламы и обновить страницу.");
        return;
    }

    const { error } = await supabaseClient.auth.signInWithOAuth({
        provider,
        options: { redirectTo: window.location.origin + window.location.pathname }
    });

    if (error) {
        console.error(`Ошибка входа через ${title}:`, error);
        alert(`Ошибка входа через ${title}:\n${error.message}`);
    }
}

async function logout() {
    if (!supabaseClient) return;

    const { error } = await supabaseClient.auth.signOut({ scope: "local" });

    if (error) {
        console.error("Ошибка выхода:", error);
        alert("Не удалось выйти из аккаунта:\n" + error.message);
        return;
    }

    accountMenu.classList.remove("active");
    currentUser = null;
    userVotes = {};
    updateLoginButton();
}

function updateLoginButton() {
    if (!currentUser) {
        loginButton.textContent = "Авторизация";
        loginButton.classList.remove("logged-in");
        accountMenu.classList.remove("active");
        return;
    }

    const name =
        currentUser.user_metadata?.full_name ||
        currentUser.user_metadata?.name ||
        currentUser.email ||
        "Вы вошли";

    loginButton.textContent = name;
    loginButton.classList.add("logged-in");
    accountMenuName.textContent = name;
}

async function loadUserVotes() {
    userVotes = {};

    if (!currentUser) return;

    const { data, error } = await supabaseClient
        .from("votes")
        .select("category_id, nominee_id")
        .eq("user_id", currentUser.id);

    if (error) {
        console.error("Ошибка при получении голосов:", error);
        return;
    }

    (data || []).forEach(item => {
        (userVotes[item.category_id] ||= []).push(item.nominee_id);
    });

    // Если окно уже открыто, обновляем отметки
    if (modal.classList.contains("active") && currentCategory) {
        openCategory(currentCategory);
    }
}

// onAuthStateChange сам срабатывает при загрузке страницы (INITIAL_SESSION),
// поэтому отдельный getUser() не нужен. Запросы к Supabase выносим из колбэка.
supabaseClient?.auth.onAuthStateChange((event, session) => {
    currentUser = session?.user || null;
    updateLoginButton();

    if (currentUser) {
        closeLoginModal();
        setTimeout(loadUserVotes, 0);
    } else {
        userVotes = {};
    }
});


// ============================================================
// ГОЛОСОВАНИЕ
// ============================================================

async function voteForNominee(category, nominee, button) {
    if (voteBusy) return; // защита от двойных кликов

    voteBusy = true;

    const multi = isMulti(category);
    const previouslySelected = button.classList.contains("selected");

    // Мгновенная визуальная реакция
    if (multi) {
        button.classList.toggle("selected");
    } else {
        nomineesList.querySelectorAll(".nominee.selected").forEach(el => el.classList.remove("selected"));
        button.classList.add("selected");
    }

    // Карточки: остальные притухают, выбранная выходит на передний план
    nomineesList.classList.toggle("has-selected", Boolean(nomineesList.querySelector(".nominee.selected")));

    voteMessage.textContent = "Сохраняем голос...";
    voteMessage.classList.add("visible");

    const { data: action, error } = await supabaseClient.rpc("cast_vote", {
        p_category_id: category.id,
        p_nominee_id: nominee
    });

    voteBusy = false;

    if (error) {
        console.error("Ошибка голосования:", error);
        voteMessage.textContent = "Не удалось сохранить голос: " + error.message;

        // Откат визуального состояния
        if (multi) {
            button.classList.toggle("selected");
        } else {
            openCategory(category);
            voteMessage.textContent = "Не удалось сохранить голос: " + error.message;
            voteMessage.classList.add("visible");
        }
        return;
    }

    if (multi) {
        const list = userVotes[category.id] || [];

        if (action === "removed") {
            userVotes[category.id] = list.filter(name => name !== nominee);
            voteMessage.textContent = "Голос убран!";
        } else {
            userVotes[category.id] = [...list, nominee];
            voteMessage.textContent = "✓ Голос добавлен!";
            burst(button);
        }
    } else {
        userVotes[category.id] = [nominee];
        voteMessage.textContent = "✓ Голос сохранён!";
        burst(button);
    }
}


// ============================================================
// СОБЫТИЯ
// ============================================================

$("close-modal").addEventListener("click", closeModal);
document.querySelector("#modal .modal-overlay").addEventListener("click", closeModal);

$("close-login-modal").addEventListener("click", closeLoginModal);
document.querySelector("#login-modal .modal-overlay").addEventListener("click", closeLoginModal);

loginButton.addEventListener("click", () => {
    if (!currentUser) {
        showLoginModal();
    } else {
        accountMenu.classList.toggle("active");
    }
});

$("logout-button").addEventListener("click", logout);
$("google-login-modal").addEventListener("click", () => loginWith("google", "Google"));
$("discord-login-modal").addEventListener("click", () => loginWith("discord", "Discord"));

prevButton.addEventListener("click", () => stepCategory(-1));
nextButton.addEventListener("click", () => stepCategory(1));

// Клик мимо меню аккаунта закрывает его
document.addEventListener("click", event => {
    if (!accountMenu.contains(event.target) && !loginButton.contains(event.target)) {
        accountMenu.classList.remove("active");
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        accountMenu.classList.remove("active");

        if (loginModal.classList.contains("active")) closeLoginModal();
        else if (modal.classList.contains("active")) closeModal();

        return;
    }

    if (!modal.classList.contains("active")) return;

    if (event.key === "ArrowLeft") stepCategory(-1);
    if (event.key === "ArrowRight") stepCategory(1);
});


// ============================================================
// СТАРТ
// ============================================================

createCategoryCards();
revealCards(categoriesGrid);
updateCountdown();

// Скрытая вкладка таймер не обновляет, при возврате обновит сразу
setInterval(() => { if (!document.hidden) updateCountdown(); }, 1000);
document.addEventListener("visibilitychange", updateCountdown);

// ============================================================
// ПЛАВНОЕ ПОЯВЛЕНИЕ КАРТОЧЕК ПРИ ПРОКРУТКЕ
// ============================================================

function revealCards(container) {
    if (!container || !("IntersectionObserver" in window) ||
        matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const cards = container.querySelectorAll(".category-card");
    document.documentElement.classList.add("reveal-on");

    const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add("in");
                io.unobserve(e.target);
            }
        });
    }, { rootMargin: "0px 0px -6% 0px", threshold: 0.05 });

    cards.forEach(card => io.observe(card));

    // Страховка: если что-то не сработало, карточки всё равно появятся
    setTimeout(() => cards.forEach(card => card.classList.add("in")), 2500);
}


// ============================================================
// КОНФЕТТИ ПОСЛЕ ГОЛОСА (14 частиц, ~1 секунда)
// ============================================================

function burst(el) {
    if (!el.animate || matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const r = el.getBoundingClientRect();
    const x = r.left + r.width / 2;
    const y = r.top + r.height / 2;
    const colors = ["#fbbf24", "#ffe08a", "#e12cff", "#c084fc", "#8b3dff"];

    for (let i = 0; i < 14; i++) {
        const p = document.createElement("i");
        p.className = "confetti";
        p.style.cssText = `left:${x}px;top:${y}px;background:${colors[i % colors.length]}`;
        document.body.appendChild(p);

        const a = Math.random() * Math.PI * 2;
        const d = 45 + Math.random() * 70;

        p.animate([
            { transform: "translate(0, 0) rotate(0deg)", opacity: 1 },
            { transform: `translate(${Math.cos(a) * d}px, ${Math.sin(a) * d + 35}px) rotate(${Math.random() * 540}deg)`, opacity: 0 }
        ], { duration: 700 + Math.random() * 300, easing: "cubic-bezier(0.2, 0.7, 0.3, 1)" }).onfinish = () => p.remove();
    }
}


// Если файл картинки не загрузился (опечатка в пути, 404): показываем плитку с буквой
nomineesList.addEventListener("error", event => {
    if (event.target.tagName === "IMG") {
        console.warn("[images] Файл не загрузился (проверь путь и регистр):", event.target.src);
        event.target.closest(".card-photo")?.classList.add("no-img");
    }
}, true);
