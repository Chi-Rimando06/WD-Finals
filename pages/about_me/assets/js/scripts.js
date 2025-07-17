document.addEventListener("DOMContentLoaded", () => {
    fetch("../../../../components/header.html")
        .then(response => response.text())
        .then(data => {
            const placeholder = document.getElementById("header-placeholder");
            if (placeholder) {
                placeholder.innerHTML = data;
            } else {
                console.error("Missing #header-placeholder div.");
            }
            document.body.style.visibility = "visible";
        })
        .catch(error => {
            console.error("Error loading header:", error);
            document.body.style.visibility = "visible";
        });

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".detail-links a");

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    navLinks.forEach(link => {
                        link.classList.remove("active");
                        if (link.getAttribute("href").includes(entry.target.id)) {
                            link.classList.add("active");
                        }
                    });
                }
            });
        },
        { threshold: 0.6 }
    );

    sections.forEach(section => observer.observe(section));

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            document.body.classList.remove("hide-scrollbar");
            document.body.classList.add("show-scrollbar");
        });
    });
});