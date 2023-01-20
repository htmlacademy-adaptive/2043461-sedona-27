const menu = document.querySelector('.nav');
const menuBtn = document.querySelector('.nav__toggle');
const body = document.querySelector('body');

if (document.querySelector('.no-js')) {
  body.classList.remove('no-js');
}

if (menuBtn) {
  menuBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    menu.classList.toggle('nav--opened');
  })
}
