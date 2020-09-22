if (localStorage.getItem('color-mode') === 'dark') {
  document.documentElement.setAttribute('color-mode', 'dark');
}
else {
  document.documentElement.setAttribute('color-mode', 'light');
}
