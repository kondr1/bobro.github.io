// Supabase

const SUPABASE_URL = "https://odkhouddhfdyssxccsra.supabase.co";
const SUPABASE_KEY = "sb_publishable_FN2xpc6awEkkeeRxzkeXBg_tlEhbN53";

let supabaseClient = null;

try {
    supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
} catch (error) {
    // библиотека не загрузилась (VPN, блокировщик): номинации всё равно покажем
    console.error("Supabase недоступен:", error);
}

// Список номинаций (CATEGORIES) берётся из categories.js


// Dom

const categoriesContainer = document.getElementById("categoriesContainer");
const modal               = document.getElementById("resultModal");
const modalTitle          = document.getElementById("modalTitle");
const resultsList         = document.getElementById("resultsList");
const updateStatus        = document.getElementById("updateStatus");
const errorMessage        = document.getElementById("errorMessage");
const modalContent        = modal.querySelector(".results-modal-content");
const prevButton          = document.getElementById("prev-category");
const nextButton          = document.getElementById("next-category");
const navCounter          = document.getElementById("nav-counter");
const navStrip            = document.getElementById("nom-strip");

const REFRESH_MS = 10000;

let voteResults = {};
let openedCategoryId = null;
let loading = false;
let lastLoadAt = 0;


// Вспомогательные

function escapeHtml(text) {
    return String(text)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function getVoteWord(number) {
    const lastTwo = number % 100;
    const last = number % 10;

    if (lastTwo >= 11 && lastTwo <= 14) return "голосов";
    if (last === 1) return "голос";
    if (last >= 2 && last <= 4) return "голоса";

    return "голосов";
}

function createEmptyResults() {
    const result = {};

    CATEGORIES.forEach(category => {
        result[category.id] = {};
        category.nominees.forEach(nominee => { result[category.id][nominee] = 0; });
    });

    return result;
}


// Картинки кандидатов

const normKey = v => String(v).toLowerCase().replace(/[\u2010-\u2015\u2212]/g, "-").replace(/\s+/g, " ").trim();

function findImage(category, nominee) {
    if (!category.images) return undefined;

    if (!category._imgMap) {
        category._imgMap = {};
        Object.entries(category.images).forEach(([key, path]) => { category._imgMap[normKey(key)] = path; });
    }

    return category._imgMap[normKey(nominee)];
}

// "Мистик - Wolverine" -> имя "Мистик", игра "Wolverine"
function splitNominee(nominee) {
    const [title, ...rest] = nominee.split(" - ");
    return { title, game: rest.join(" - ") };
}


// Карточки

function renderCategoryCards() {
    categoriesContainer.innerHTML = CATEGORIES.map((category, index) => `
        <div class="category-card" data-index="${index}">
            <div class="category-name">${escapeHtml(category.name)}</div>

            <div class="category-bottom">
                <div class="card-num">
                    <span class="num">${String(index + 1).padStart(2, "0")}</span>
                    <span class="num-label">номинация</span>
                </div>
            </div>
        </div>
    `).join("");

    categoriesContainer.addEventListener("click", event => {
        const card = event.target.closest(".category-card");
        if (card) openCategory(CATEGORIES[Number(card.dataset.index)]);
    });
}


// Загрузка результатов

async function loadResults() {
    if (loading) return; // не запускаем новый запрос, пока не закончился прошлый

    loading = true;
    lastLoadAt = Date.now();
    errorMessage.style.display = "none";

    try {
        if (!supabaseClient) throw new Error("не загрузилась библиотека Supabase (возможно, её блокирует VPN или расширение браузера)");

        const { data, error } = await supabaseClient.rpc("get_vote_results");

        if (error) throw error;

        voteResults = createEmptyResults();

        if (Array.isArray(data)) {
            data.forEach(row => {
                const category = voteResults[row.category_id];

                if (category && Object.prototype.hasOwnProperty.call(category, row.nominee_id)) {
                    category[row.nominee_id] = Number(row.vote_count) || 0;
                }
            });
        }

        updateStatus.textContent = "Результаты обновлены: " + new Date().toLocaleTimeString();

        if (openedCategoryId) {
            const category = CATEGORIES.find(item => item.id === openedCategoryId);
            if (category) renderModalResults(category);
        }

    } catch (error) {
        console.error("Ошибка загрузки результатов:", error);

        updateStatus.textContent = "Не удалось загрузить результаты";
        errorMessage.textContent = "Ошибка Supabase: " + (error.message || "Неизвестная ошибка");
        errorMessage.style.display = "block";

    } finally {
        loading = false;
    }
}


// Модалка

function openCategory(category) {
    openedCategoryId = category.id;
    modalTitle.textContent = category.name;

    renderModalResults(category, true);

    modal.classList.add("active");
    document.body.style.overflow = "hidden";

    updateNavigation();
    modalContent.scrollTop = 0; // при переключении номинаций начинаем сверху

    // свежие данные при открытии (не чаще раза в 3 секунды)
    if (Date.now() - lastLoadAt > 3000) loadResults();
}

// Переключение между номинациями

function currentIndex() {
    return CATEGORIES.findIndex(item => item.id === openedCategoryId);
}

// Счётчик между кнопками: "Номинация 3 из 23" + полоска прогресса
function counterHTML(i, total) {
    const percent = ((i + 1) / total * 100).toFixed(1);

    return `<span class="cnt-label">Номинация</span>
        <span class="cnt-value"><b>${i + 1}</b> из ${total}</span>
        <span class="cnt-bar"><i style="width:${percent}%"></i></span>`;
}

// Строка с номерами номинаций (переход по нажатию)
function buildStrip() {
    navStrip.innerHTML = CATEGORIES.map((category, i) => `
        <button class="strip-item" type="button" data-i="${i}" title="${escapeHtml(category.name)}">${i + 1}</button>
    `).join("");

    navStrip.addEventListener("click", event => {
        const item = event.target.closest(".strip-item");
        if (item) openCategory(CATEGORIES[Number(item.dataset.i)]);
    });
}

function showCurrentInStrip(i) {
    navStrip.querySelectorAll(".strip-item").forEach((item, n) => item.classList.toggle("current", n === i));

    const current = navStrip.children[i];
    if (current) navStrip.scrollLeft = current.offsetLeft - (navStrip.clientWidth - current.offsetWidth) / 2;
}

function updateNavigation() {
    const i = currentIndex();
    navCounter.innerHTML = counterHTML(i, CATEGORIES.length);
    showCurrentInStrip(i);

    const atStart = i <= 0;
    const atEnd = i === CATEGORIES.length - 1;

    prevButton.disabled = atStart;
    prevButton.style.visibility = atStart ? "hidden" : "visible";

    nextButton.disabled = atEnd;
    nextButton.style.visibility = atEnd ? "hidden" : "visible";
}

function stepCategory(step) {
    const next = CATEGORIES[currentIndex() + step];
    if (next) openCategory(next);
}

function closeModal() {
    modal.classList.remove("active");
    document.body.style.overflow = "";
    openedCategoryId = null;
}

// 1-3 места на полную яркость, дальше тусклее (не ниже 0.5)
function dimFor(index) {
    return index < 3 ? 1 : Math.max(0.5, 1 - (index - 2) * 0.1).toFixed(2);
}

function resultRowHTML(item, index, percentage, rank) {
    const medals = ["🥇", "🥈", "🥉"];

    return `
        <div class="result-item${index === 0 ? " first" : ""}${rank}" style="--dim:${dimFor(index)}">
            <div class="result-header">
                <span class="place">${medals[index] || `${index + 1}.`}</span>
                <span class="nominee-name">${escapeHtml(item.nominee)}</span>
                <span class="votes">${item.votes} ${getVoteWord(item.votes)}</span>
            </div>

            <div class="progress-background">
                <div class="progress-bar" style="width: ${percentage}%"></div>
            </div>

            <div class="percentage">${percentage.toFixed(1)}%</div>
        </div>`;
}

function resultCardHTML(category, item, index, percentage, rank) {
    const { title, game } = splitNominee(item.nominee);
    const own = findImage(category, item.nominee);
    const hasOwnImages = category.images && Object.keys(category.images).length > 0;
    const tile = !own && hasOwnImages; // нет картинки: плитка с первой буквой
    const letter = escapeHtml(([...title.trim()][0] || "?").toUpperCase());

    return `
        <div class="result-card${rank}" style="--d:${index * 70}ms;--dim:${dimFor(index)}">
            <div class="card-photo${tile ? " no-img" : ""}">
                ${tile ? "" : `<img src="${escapeHtml(own || IMAGE)}" alt="" loading="lazy" decoding="async">`}
                <span class="card-ph" aria-hidden="true">${letter}</span>
                <span class="rank-badge">${index + 1}</span>
            </div>

            <div class="card-text">
                <span class="card-name">${escapeHtml(title)}</span>
                ${game ? `<span class="card-game">${escapeHtml(game)}</span>` : ""}

                <div class="result-meta">
                    <span>${item.votes} ${getVoteWord(item.votes)}</span>
                    <span>${percentage.toFixed(1)}%</span>
                </div>

                <div class="progress-background">
                    <div class="progress-bar" style="width: ${percentage}%"></div>
                </div>
            </div>
        </div>`;
}

function renderModalResults(category, animate = false) {
    const results = category.nominees
        .map(nominee => ({ nominee, votes: voteResults[category.id]?.[nominee] || 0 }))
        .sort((a, b) => b.votes - a.votes || a.nominee.localeCompare(b.nominee, "ru"));

    const totalVotes = results.reduce((sum, item) => sum + item.votes, 0);
    const useCards = Boolean(category.cards) && totalVotes > 0;

    // данные не изменились: не перерисовываем (картинки не должны моргать)
    const signature = category.id + "|" + results.map(item => item.nominee + ":" + item.votes).join("|");

    if (!animate && resultsList.dataset.sig === signature) return;

    resultsList.dataset.sig = signature;
    resultsList.className = "results-list" + (useCards ? " cards" : "") + (animate ? " animate" : "");
    resultsList.style.setProperty("--ratio", category.ratio || "3 / 4");

    const total = category.nominees.length;
    resultsList.style.setProperty("--cols", total <= 6 ? Math.max(total, 3) : Math.ceil(total / 2));

    if (totalVotes === 0) {
        resultsList.innerHTML = `
            <div class="no-votes">
                Пока никто не проголосовал.<br><br>Все номинанты имеют 0 голосов.
            </div>`;
        return;
    }

    resultsList.innerHTML = results.map((item, index) => {
        const percentage = (item.votes / totalVotes) * 100;
        const rank = index < 3 ? ` rank-${index + 1}` : ""; // золото, серебро, бронза

        return useCards
            ? resultCardHTML(category, item, index, percentage, rank)
            : resultRowHTML(item, index, percentage, rank);
    }).join("");
}


// События

document.getElementById("modalClose").addEventListener("click", closeModal);

// клик по затемнению закрывает окно
document.getElementById("resultsModalOverlay").addEventListener("click", closeModal);

prevButton.addEventListener("click", () => stepCategory(-1));
nextButton.addEventListener("click", () => stepCategory(1));

document.addEventListener("keydown", event => {
    if (event.key === "Escape") { closeModal(); return; }

    if (!openedCategoryId) return;

    if (event.key === "ArrowLeft") stepCategory(-1);
    if (event.key === "ArrowRight") stepCategory(1);
});


// Запуск

renderCategoryCards();
buildStrip();
revealCards(categoriesContainer);
loadResults();

// обновляем только пока открыто окно с результатами
setInterval(() => { if (!document.hidden && openedCategoryId) loadResults(); }, REFRESH_MS);
document.addEventListener("visibilitychange", () => { if (!document.hidden && openedCategoryId) loadResults(); });

// Плавное появление карточек при прокрутке

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


// Файл картинки не загрузился: плитка с буквой
resultsList.addEventListener("error", event => {
    if (event.target.tagName === "IMG") {
        console.warn("[images] Файл не загрузился (проверь путь и регистр):", event.target.src);
        event.target.closest(".card-photo")?.classList.add("no-img");
    }
}, true);
