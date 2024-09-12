const loadComponents = async (parent = document) => {
  await Promise.all([...parent.querySelectorAll('[data-component]')].map(async (el) => {
    try {
      el.innerHTML = await (await fetch(`components/${el.getAttribute('data-component')}.html`)).text();
      await loadComponents(el); // Load nested components
    } catch {
      el.innerHTML = '<p>Error loading component</p>';
    }
  }));
  if (parent === document) document.dispatchEvent(new Event('componentsFullyLoaded'));
};
document.addEventListener('DOMContentLoaded', () => loadComponents());