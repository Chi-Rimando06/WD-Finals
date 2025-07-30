document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById("skills-intro-overlay");

    fetch("/WD-Finals/components/header.html")
        .then((response) => response.text())
        .then((data) => {
            const placeholder = document.getElementById("header-placeholder");
            if (placeholder) {
                placeholder.innerHTML = data;

                document.querySelectorAll(".nav-bar nav a").forEach((link) => {
                    link.addEventListener("click", (e) => {
                        const name = e.target.textContent.trim();
                        console.log(`Navigated to ${name}`);
                    });
                });
            }
            document.body.style.visibility = "visible";
        })
        .catch((error) => {
            console.error("Header failed to load:", error);
            document.body.style.visibility = "visible";
        });

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