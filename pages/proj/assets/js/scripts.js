document.addEventListener("DOMContentLoaded", () => {
    fetch("../../../../components/header.html")
        .then((response) => response.text())
        .then((data) => {
        const placeholder = document.getElementById("header-placeholder");
        if (placeholder) {
            placeholder.innerHTML = data;
        } else {
            console.error("Missing #header-placeholder div.");
        }
    })
    .catch((error) => console.error("Error loading header:", error));
});