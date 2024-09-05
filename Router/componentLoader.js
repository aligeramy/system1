// componentLoader.js

/**
 * Initializes the application by loading the layout, theme, components, and attaching event listeners.
 */
document.addEventListener('DOMContentLoaded', () => {
  loadLayout()
    .then(() => {
      applyTheme();
      loadComponents();
    })
    .catch((err) => console.error('Error initializing app:', err));
});

/**
 * Loads the layout and injects it into the DOM.
 * @returns {Promise} A promise that resolves when the layout is loaded.
 */
const loadLayout = () => fetch('index.html')
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Failed to load layout: ${response.statusText}`);
    }
    return response.text();
  })
  .then((layoutHtml) => {
    document.body.innerHTML = layoutHtml;
  });

/**
 * Finds and loads components (including nested components) dynamically.
 */
const loadComponents = () => {
  const components = document.querySelectorAll('[data-component]');

  components.forEach((component) => {
    const componentPath = component.getAttribute('data-component');
    fetchComponent(componentPath, component)
      .then(() => loadNestedComponents(component)) // Handle nested components
      .catch((err) => console.error(`Error loading component: ${componentPath}`, err));
  });
};

/**
 * Fetches and injects a component into the DOM.
 * @param {string} path - The component path.
 * @param {Element} element - The DOM element where the component will be injected.
 * @returns {Promise} A promise that resolves when the component is loaded.
 */
const fetchComponent = (path, element) => fetch(`components/${path}.html`)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Failed to load component: ${path}`);
    }
    return response.text();
  })
  .then((data) => {
    element.innerHTML = data;
    element.classList.remove('placeholder'); // Remove shimmer effect
  });

/**
 * Recursively loads nested components within a parent component.
 * @param {Element} parent - The parent element containing potential nested components.
 */
const loadNestedComponents = (parent) => {
  const nestedComponents = parent.querySelectorAll('[data-component]');

  nestedComponents.forEach((nestedComponent) => {
    const nestedComponentPath = nestedComponent.getAttribute('data-component');
    fetchComponent(nestedComponentPath, nestedComponent)
      .catch((err) => console.error(`Error loading nested component: ${nestedComponentPath}`, err));
  });
};

/**
 * Toggles between dark mode and light mode, and stores the preference in localStorage.
 */
const toggleTheme = () => {
  const themeLink = document.getElementById('theme-link');
  const isLightMode = themeLink.getAttribute('href') === 'css/light-mode.css';

  themeLink.href = isLightMode ? 'css/dark-mode.css' : 'css/light-mode.css';
  localStorage.setItem('theme', isLightMode ? 'dark' : 'light');
};

/**
 * Loads and applies the saved theme preference from localStorage.
 */
const applyTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  const themeLink = document.getElementById('theme-link');

  if (savedTheme) {
    themeLink.href = savedTheme === 'dark' ? 'css/dark-mode.css' : 'css/light-mode.css';
  }
};
