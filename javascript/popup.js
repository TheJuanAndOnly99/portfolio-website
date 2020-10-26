// Open Popup of large profile pic image when clicking small avatar on footer

const popupLink = document.getElementById('click-popup');
const popupContainer = document.getElementsByClassName('popup-container');

popupContainer[0].style.display = 'none';

const showPopup = (event) => {
  event.target.classList.toggle('display');
  if (event.target.classList.contains('display')) {
    popupContainer[0].style.display = '';
  }
  else {
    popupContainer[0].style.display = 'none';
  }
};

popupLink.addEventListener('click', showPopup);

// Close Popup of large profile pic image when clicking anywhere on screen

const body = document.getElementsByTagName('body');

const hidePopup = (event) => {
  if (event.target.classList.contains('display')) {
    popupContainer[0].style.display = '';
  }
  else if (event.target.classList.contains('avatar')) {
    popupContainer[0].style.display = 'none';
  }
  else {
    popupContainer[0].style.display = 'none';
  }
};

body[0].addEventListener('click', hidePopup);

// Close Popup of large profile pic when scrolling

window.onscroll = function() {
  popupContainer[0].style.display = 'none';
};
