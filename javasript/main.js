const themeSwitcher = document.getElementById('theme-switch');
// Check to see if user has set a site preference for dark mode OR
//  OS - level preference for dark mode AND no site preference
if (
  localStorage.getItem('color-mode') === 'dark' ||
  (window.matchMedia('(prefers-color-scheme: dark)').matches && !localStorage.getItem('color-mode'))
) {
  document.documentElement.setAttribute('color-mode', 'dark');
  themeSwitcher.setAttribute('checked', 'true');
}

const toggleTheme = (event) => {
  // Switch to Light Mode if input is not checked
  if (event.path[0].checked === false) {
    themeSwitcher.setAttribute('checked', 'false');
    document.documentElement.setAttribute('color-mode', 'light');
    localStorage.setItem('color-mode', 'light');
    return;
  }
  // Switch to Dark Mode if input is checked
  themeSwitcher.setAttribute('checked', 'true');
  document.documentElement.setAttribute('color-mode', 'dark');
  localStorage.setItem('color-mode', 'dark');
};

themeSwitcher.addEventListener('click', toggleTheme);
