// componentLoader.js

document.addEventListener("DOMContentLoaded", function() {
    // Load saved theme preference on page load
    loadTheme();

    // Find all elements with a 'data-component' attribute
    const components = document.querySelectorAll("[data-component]");

    // Loop through each component and dynamically load its content
    components.forEach(component => {
        const componentName = component.getAttribute("data-component");

        // Load the actual component file
        fetch(`components/${componentName}.html`)
            .then(response => response.text())
            .then(data => {
                // Inject the fetched HTML into the placeholder and remove the "shimmer" effect
                component.innerHTML = data;
                component.classList.remove("placeholder");
            })
            .catch(error => {
                console.error(`Error loading component "${componentName}":`, error);
                component.innerHTML = `<p>Error loading component: ${componentName}</p>`;
            });
    });
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
