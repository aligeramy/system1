document.addEventListener('DOMContentLoaded', () => {
  const themeLink = document.getElementById('theme-link');
  const setTheme = (theme) => {
    themeLink.href = `css/${theme}-mode.css`;
    const themeToggleButton = document.getElementById('theme-toggle');
    if (themeToggleButton) {
      themeToggleButton.textContent = `Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`;
    }
    localStorage.setItem('theme', theme);
  };
  const initializeThemeToggle = () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    if (themeToggleButton) {
      themeToggleButton.addEventListener('click', () => {
        const currentTheme = themeLink.href.includes('light') ? 'light' : 'dark';
        setTheme(currentTheme === 'light' ? 'dark' : 'light');
      });
    }
  };
  setTheme(localStorage.getItem('theme') || 'light');
  document.addEventListener('componentsFullyLoaded', initializeThemeToggle);
});