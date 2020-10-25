const popupLink = document.getElementById('click-popup');
const popupContainer = document.getElementsByClassName('popup-container');

popupContainer[0].style.display = 'none';

const showPopup = (event) => {
  event.target.classList.toggle('display');
  if (event.target.classList.contains('display')) {
    popupContainer[0].style.display = '';
    console.log('hello');
  }
  else {
    popupContainer[0].style.display = 'none';
    console.log('bye');
  }
};

popupLink.addEventListener('click', showPopup);

const body = document.getElementsByTagName('body');
