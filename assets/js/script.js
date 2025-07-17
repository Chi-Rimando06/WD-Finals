function logAction(text) {
    const list = document.getElementById("notifList");
    if (!list) return;

    if (list.firstElementChild?.textContent === "No notifications yet.") {
        list.innerHTML = "";
    }

    const li = document.createElement("li");
    li.textContent = text;
    list.prepend(li);

    if (list.children.length > 6) list.removeChild(list.lastChild);
}

document.getElementById("playScroll")?.addEventListener("click", () => {
    document.body.classList.add("scroll");
    document.body.classList.remove("no-scroll");
    document.getElementById("carouselSec")?.scrollIntoView({ behavior: "smooth" });
    logAction("Played intro ‣ Scrolled to Carousel");
});

const video = document.querySelector(".bg-video");
document.getElementById("musicToggle")?.addEventListener("click", () => {
    if (!video) return;
    video.muted = !video.muted;
    logAction(video.muted ? "Video muted" : "Video unmuted");
});

document.querySelectorAll(".detail-links a, .nav-bar nav a").forEach((link) => {
    link.addEventListener("click", (e) => {
        const name = e.target.textContent.trim();
        logAction(`Navigated to ${name}`);
    });
});

window.addEventListener("load", () => {
    setTimeout(() => {
        document.body.classList.add("loaded");
        document.getElementById("intro-flicker")?.remove();
        document.querySelector(".intro-overlay")?.style.setProperty("display", "none");
    }, 4200);
});

const cards = document.querySelectorAll(".c-card");
let currentIndex = 0;

function updateCarousel() {
    cards.forEach((card, index) => {
        card.classList.remove("active", "left", "right", "hidden");

        if (index === currentIndex) {
            card.classList.add("active");
        } else if (index === currentIndex - 1) {
            card.classList.add("left");
        } else if (index === currentIndex + 1) {
            card.classList.add("right");
        } else {
            card.classList.add("hidden");
        }
    });
}

cards.forEach((card, index) => {
    card.addEventListener("click", () => {
        if (index === currentIndex) return;
        if (Math.abs(index - currentIndex) === 1) {
            currentIndex = index;
            updateCarousel();
        }
    });
});

updateCarousel();

document.querySelectorAll(".c-play").forEach((button) => {
    button.addEventListener("click", (e) => {
        e.stopPropagation();
        const page = button.getAttribute("data-link");
        if (page) window.location.href = page;
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".detail-links a");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                navLinks.forEach((link) => {
                    link.classList.toggle(
                        "active",
                        link.getAttribute("href")?.includes(entry.target.id)
                    );
                });
            }
        });
    }, { threshold: 0.6 });

    sections.forEach((section) => observer.observe(section));

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            document.body.classList.remove("hide-scrollbar");
            document.body.classList.add("show-scrollbar");
        });
    });
});