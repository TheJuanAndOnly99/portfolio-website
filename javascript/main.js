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
const portfolioLeft = document.getElementById('portfolio-left');
const portfolioRight = document.getElementById('portfolio-right');

const contactTab = document.getElementById('contact-tab');
const contactLeft = document.getElementById('contact-left');
const contactRight = document.getElementById('contact-right');

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
    portfolioLeft.style.display = 'none';
    portfolioRight.style.display = 'none';
    contactLeft.style.display = 'none';
    contactRight.style.display = 'none';
  }
};

const showAbout = (event) => {
  console.log(event.target);
  if (event.target.classList.contains('active')) {
    summaryLeft.style.display = 'none';
    summaryRight.style.display = 'none';
    aboutLeft.style.display = '';
    aboutRight.style.display = '';
    portfolioLeft.style.display = 'none';
    portfolioRight.style.display = 'none';
    contactLeft.style.display = 'none';
    contactRight.style.display = 'none';
  }
};

const showPortfolio = (event) => {
  console.log(event.target);
  if (event.target.classList.contains('active')) {
    summaryLeft.style.display = 'none';
    summaryRight.style.display = 'none';
    aboutLeft.style.display = 'none';
    aboutRight.style.display = 'none';
    portfolioLeft.style.display = '';
    portfolioRight.style.display = '';
    contactLeft.style.display = 'none';
    contactRight.style.display = 'none';
  }
};

const showContact = (event) => {
  console.log(event.target);
  if (event.target.classList.contains('active')) {
    summaryLeft.style.display = 'none';
    summaryRight.style.display = 'none';
    aboutLeft.style.display = 'none';
    aboutRight.style.display = 'none';
    portfolioLeft.style.display = 'none';
    portfolioRight.style.display = 'none';
    contactLeft.style.display = '';
    contactRight.style.display = '';
  }
};

summaryTab.addEventListener('click', toggleTab);
summaryTab.addEventListener('click', showSummary);

aboutTab.addEventListener('click', toggleTab);
aboutTab.addEventListener('click', showAbout);

portfolioTab.addEventListener('click', toggleTab);
portfolioTab.addEventListener('click', showPortfolio);

contactTab.addEventListener('click', toggleTab);
contactTab.addEventListener('click', showContact);

// Show browser icons on hover

const browserDots = document.getElementsByClassName('browser-dot');
const browserIcons = document.getElementsByClassName('browser-icon');

const showIconsOnHover = () => {
  for (icon of browserIcons) {
    if ((icon.style.display = 'none')) {
      console.log('hello');
      icon.style.display = '';
    }
  }
};

const hideIconsOnHover = () => {
  for (icon of browserIcons) {
    console.log('bye');
    icon.style.display = 'none';
  }
};

for (dot of browserDots) {
  dot.addEventListener('mouseover', showIconsOnHover);
  dot.addEventListener('mouseleave', hideIconsOnHover);
}

// Detect id user is on a small screen to reduce tab size

function detectMob() {
  return window.innerWidth <= 600 && window.innerHeight <= 400;
}

if (detectMob === true) {
  summaryTab.innerHTML = 'S';
}
