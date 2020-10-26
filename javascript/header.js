const header = document.getElementById('header');

header.style.display = 'none';
let scrollHeight;

window.addEventListener('scroll', function() {
  scrollHeight = window.pageYOffset;
  if (scrollHeight > 100) {
    header.style.display = '';
  }
  else {
    header.style.display = 'none';
  }
});
