document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById("involvements-intro-overlay");

    fetch("/WD-Finals/components/header.html")
        .then((res) => res.text())
        .then((data) => {
        const header = document.getElementById("header-placeholder");
        if (header) header.innerHTML = data;
        })
        .catch((err) => console.error("Header load error:", err));

    if (overlay) {
        setTimeout(() => {
        overlay.classList.add("fade-out");
        }, 3000);

        setTimeout(() => {
        overlay.remove();
        document.body.classList.remove("no-scroll");
        }, 4000);
    }

    const popupOverlay = document.getElementById("popup-overlay");
    const closeButtons = document.querySelectorAll(".close-btn");

    document.querySelectorAll(".timeline-item").forEach((item) => {
        item.addEventListener("click", () => {
        const level = item.getAttribute("data-level");
        document.querySelectorAll(".popup-card").forEach((card) => {
            card.style.display = "none";
        });

        const target = document.getElementById(`popup-${level}`);
        if (target) {
            target.style.display = "block";
            popupOverlay.style.display = "flex";
        }
        });
    });

    closeButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
        popupOverlay.style.display = "none";
        });
    });

    popupOverlay.addEventListener("click", (e) => {
        if (e.target === popupOverlay) {
        popupOverlay.style.display = "none";
        }
    });
});