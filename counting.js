(function () {
    const now = () => new Date();

    if (now() < VOTING_END) { location.replace("index.html"); return; }

    if (now() >= RESULTS_AT) { location.replace("result.html"); return; }

    const d = document.getElementById("cd-d");
    const h = document.getElementById("cd-h");
    const m = document.getElementById("cd-m");
    const s = document.getElementById("cd-s");
    const bar = document.getElementById("count-bar");

    const pad = n => String(n).padStart(2, "0");

    function tick() {
        const diff = RESULTS_AT - now();

        if (diff <= 0) { location.replace("result.html"); return; }

        d.textContent = pad(Math.floor(diff / 86400000));
        h.textContent = pad(Math.floor(diff / 3600000) % 24);
        m.textContent = pad(Math.floor(diff / 60000) % 60);
        s.textContent = pad(Math.floor(diff / 1000) % 60);

        const total = RESULTS_AT - VOTING_END;
        const done = Math.min(1, Math.max(0, (now() - VOTING_END) / total));
        bar.style.width = (done * 100).toFixed(2) + "%";
    }

    tick();
    setInterval(tick, 1000);

    document.addEventListener("visibilitychange", () => {
        document.body.classList.toggle("paused", document.hidden);
        if (!document.hidden) tick();
    });
})();
