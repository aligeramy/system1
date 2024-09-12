const loadComponents = async (parent = document) => {
  const components = parent.querySelectorAll('[data-component]');
  await Promise.all([...components].map(async (el) => {
    try {
      el.innerHTML = await (await fetch(`components/${el.getAttribute('data-component')}.html`)).text();
      await loadComponents(el); // Load nested components
    } catch {
      el.innerHTML = '<p>Error loading component</p>';
    }
}));
  document.dispatchEvent(new Event('componentsLoaded'));
};
document.addEventListener('DOMContentLoaded', () => loadComponents());