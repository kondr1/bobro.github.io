// =========================================================
// SUPABASE
// =========================================================

const SUPABASE_URL = "https://odkhouddhfdyssxccsra.supabase.co";
const SUPABASE_KEY = "sb_publishable_FN2xpc6awEkkeeRxzkeXBg_tlEhbN53";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Список номинаций (CATEGORIES) берётся из categories.js


// =========================================================
// DOM
// =========================================================

const categoriesContainer = document.getElementById("categoriesContainer");
const modal               = document.getElementById("resultModal");
const modalTitle          = document.getElementById("modalTitle");
const resultsList         = document.getElementById("resultsList");
const updateStatus        = document.getElementById("updateStatus");
const errorMessage        = document.getElementById("errorMessage");

const REFRESH_MS = 10000;

let voteResults = {};
let openedCategoryId = null;
let loading = false;


// =========================================================
// ВСПОМОГАТЕЛЬНЫЕ
// =========================================================

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


// =========================================================
// КАРТОЧКИ
// =========================================================

function renderCategoryCards() {
    categoriesContainer.innerHTML = CATEGORIES.map((category, index) => `
        <div class="category-card" data-index="${index}">
            <div class="category-number">НОМИНАЦИЯ ${String(index + 1).padStart(2, "0")}</div>
            <div class="category-name">${escapeHtml(category.name)}</div>
            <div class="category-bottom" data-num="${String(index + 1).padStart(2, "0")}"><span class="category-arrow">→</span></div>
        </div>
    `).join("");

    categoriesContainer.addEventListener("click", event => {
        const card = event.target.closest(".category-card");
        if (card) openCategory(CATEGORIES[Number(card.dataset.index)]);
    });
}


// =========================================================
// ЗАГРУЗКА РЕЗУЛЬТАТОВ
// =========================================================

async function loadResults() {
    if (loading) return; // не запускаем новый запрос, пока не закончился прошлый

    loading = true;
    errorMessage.style.display = "none";

    try {
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


// =========================================================
// МОДАЛКА
// =========================================================

function openCategory(category) {
    openedCategoryId = category.id;
    modalTitle.textContent = category.name;

    renderModalResults(category, true);

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeModal() {
    modal.classList.remove("active");
    document.body.style.overflow = "";
    openedCategoryId = null;
}

function renderModalResults(category, animate = false) {
    resultsList.classList.toggle("animate", animate);

    const results = category.nominees
        .map(nominee => ({ nominee, votes: voteResults[category.id]?.[nominee] || 0 }))
        .sort((a, b) => b.votes - a.votes || a.nominee.localeCompare(b.nominee, "ru"));

    const totalVotes = results.reduce((sum, item) => sum + item.votes, 0);

    if (totalVotes === 0) {
        resultsList.innerHTML = `
            <div class="no-votes">
                Пока никто не проголосовал.<br><br>Все номинанты имеют 0 голосов.
            </div>`;
        return;
    }

    const medals = ["🥇", "🥈", "🥉"];

    resultsList.innerHTML = results.map((item, index) => {
        const percentage = (item.votes / totalVotes) * 100;

        return `
            <div class="result-item${index === 0 ? " first" : ""}">
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
    }).join("");
}


// =========================================================
// СОБЫТИЯ
// =========================================================

document.getElementById("modalClose").addEventListener("click", closeModal);

// Клик по затемнению закрывает окно (раньше не срабатывал, т.к. overlay перекрывал modal)
document.getElementById("resultsModalOverlay").addEventListener("click", closeModal);

document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeModal();
});


// =========================================================
// ЗАПУСК
// =========================================================

renderCategoryCards();
revealCards(categoriesContainer);
loadResults();

// Скрытая вкладка не опрашивает сервер
setInterval(() => { if (!document.hidden) loadResults(); }, REFRESH_MS);
document.addEventListener("visibilitychange", () => { if (!document.hidden) loadResults(); });

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
