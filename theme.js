// themeManager.js

document.addEventListener("DOMContentLoaded", function() {
    // Load saved theme preference on page load
    loadTheme();
});

// Toggle between dark mode and light mode
function toggleTheme() {
    const themeLink = document.getElementById("theme-link");

    if (themeLink.getAttribute("href") === "css/light-mode.css") {
        themeLink.href = "css/dark-mode.css";
        localStorage.setItem("theme", "dark"); // Save theme preference
    } else {
        themeLink.href = "css/light-mode.css";
        localStorage.setItem("theme", "light"); // Save theme preference
    }
}

// Load the saved theme from localStorage
function loadTheme() {
    const savedTheme = localStorage.getItem("theme");
    const themeLink = document.getElementById("theme-link");

    if (savedTheme) {
        if (savedTheme === "dark") {
            themeLink.href = "css/dark-mode.css";
        } else {
            themeLink.href = "css/light-mode.css";
        }
    }
}
