document.addEventListener('DOMContentLoaded', () => {
  const themeLink = document.getElementById('theme-link');
  const setTheme = (theme) => {
    themeLink.href = `css/${theme}-mode.css`;
    const themeToggleButton = document.getElementById('theme-toggle');
    if (themeToggleButton) themeToggleButton.textContent = `Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`;
    localStorage.setItem('theme', theme);
  };
  setTheme(localStorage.getItem('theme') || 'light');
  document.addEventListener('componentsLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    themeToggleButton?.addEventListener('click', () => {
      setTheme(themeLink.href.includes('light') ? 'dark' : 'light');
    });
  });
});
