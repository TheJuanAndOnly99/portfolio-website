// Light/Dark theme

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

// Set Height of tabs to be the same as the navbar

const navWrapper = document.getElementsByClassName('nav-wrapper');
const navWrapperHeight = navWrapper[0].clientHeight;

const navigation = document.getElementById('navigation');

const tabs = document.getElementsByClassName('tab');

for (let tab of tabs) {
  tab.style.height = `${navWrapperHeight - 12}px`;
}

navigation.style.height = `${navWrapperHeight}px`;

// Tab switching

const summaryTab = document.getElementById('summary-tab');
const summaryLeft = document.getElementById('summary-left');
const summaryRight = document.getElementById('summary-right');

const aboutTab = document.getElementById('about-tab');
const aboutLeft = document.getElementById('about-left');
const aboutRight = document.getElementById('about-right');

const portfolioTab = document.getElementById('portfolio-tab');

const contactTab = document.getElementById('contact-tab');

const toggleTab = (event) => {
  for (let tab of tabs) {
    tab.classList.add('inactive-tab');
    tab.classList.remove('active', 'active-tab');
    event.target.classList.remove('inactive-tab');
    event.path[0].classList.add('active', 'active-tab');
  }
};

const showSummary = (event) => {
  console.log(event.target);
  if (event.target.classList.contains('active')) {
    summaryLeft.style.display = '';
    summaryRight.style.display = '';
    aboutLeft.style.display = 'none';
    aboutRight.style.display = 'none';
  }
};

const showAbout = (event) => {
  console.log(event.target);
  if (event.target.classList.contains('active')) {
    summaryLeft.style.display = 'none';
    summaryRight.style.display = 'none';
    aboutLeft.style.display = '';
    aboutRight.style.display = '';
  }
};

summaryTab.addEventListener('click', toggleTab);
summaryTab.addEventListener('click', showSummary);

aboutTab.addEventListener('click', toggleTab);
aboutTab.addEventListener('click', showAbout);

portfolioTab.addEventListener('click', toggleTab);
contactTab.addEventListener('click', toggleTab);
