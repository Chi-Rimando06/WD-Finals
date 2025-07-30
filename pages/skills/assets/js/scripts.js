document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById("skills-intro-overlay");

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
});