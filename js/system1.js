document.addEventListener('DOMContentLoaded', () => {
  const components = document.querySelectorAll('[data-component]');
  Promise.all(Array.from(components).map(async (component) => {
    try {
      const res = await fetch(`components/${component.getAttribute('data-component')}.html`);
      component.innerHTML = await res.text();
      component.classList.remove('placeholder');
    } catch {
      component.innerHTML = `<p>Error loading component</p>`;
    }
  })).then(() => document.dispatchEvent(new Event('componentsLoaded')));
});