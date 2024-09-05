// router.js

/**
 * Routes object maps URL paths to their corresponding page file.
 */
const routes = {
  '/': 'pages/home.html',
  '/about': 'pages/about.html',
  '/services': 'pages/services.html',
  '/contact': 'pages/contact.html',
};

/**
 * Navigates to a given route, updates the URL, and loads the page content.
 * @param {string} path - The path to navigate to.
 */
const navigateTo = (path) => {
  window.history.pushState({}, path, `${window.location.origin}${path}`); // Update the URL without reloading
  loadPageContent(path); // Load the corresponding page content
};

/**
 * Loads the page content based on the given path.
 * @param {string} path - The URL path for the requested page.
 */
const loadPageContent = (path) => {
  const page = routes[path] || routes['/']; // Fallback to homepage if route is not found

  fetch(page)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to load page: ${response.statusText}`);
      }
      return response.text();
    })
    .then((pageHtml) => {
      const contentPlaceholder = document.getElementById('content-placeholder');
      contentPlaceholder.innerHTML = pageHtml; // Inject the page-specific content
    })
    .catch((err) => console.error('Error loading page content:', err));
};

/**
 * Initializes the router, handling navigation and URL changes.
 */
const initRouter = () => {
  // Handle link clicks for internal navigation
  document.addEventListener('click', (event) => {
    const { target } = event;
    if (target.tagName === 'A' && target.getAttribute('href').startsWith('/')) {
      event.preventDefault();
      const path = target.getAttribute('href');
      navigateTo(path); // Perform navigation when a link is clicked
    }
  });

  // Handle browser back/forward buttons
  window.onpopstate = () => loadPageContent(window.location.pathname);

  // Load the initial page content on page load
  loadPageContent(window.location.pathname);
};

// Initialize the router when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initRouter);
