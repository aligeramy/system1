document.addEventListener('DOMContentLoaded', loadComponents);

function loadComponents() {
  document.querySelectorAll('[data-component]').forEach(async (component) => {
    const componentName = component.getAttribute('data-component');
    try {
      const response = await fetch(`components/${componentName}.html`);
      if (!response.ok) throw new Error('Network response was not ok');
      component.innerHTML = await response.text();
      component.classList.remove('placeholder');
    } catch (error) {
      console.error(`Error loading component "${componentName}":`, error);
      component.innerHTML = `<p>Error loading component: ${componentName}</p>`;
    }
  });
}
