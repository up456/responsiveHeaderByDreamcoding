const toggleBtn = document.querySelector('.fa-bars');
const menu = document.querySelector('.header__menu-container');
const icons = document.querySelector('.header__sub-container');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  icons.classList.toggle('active');
});