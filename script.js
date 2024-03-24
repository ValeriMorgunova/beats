let burgerBtn = document.querySelector('.burger');
let overlayBlock = document.querySelector('.overlay');
let overlayMenu = document.querySelector('.overlay__list');


function toggleMenu(){
  burger.classList.toggle('burger--active');
  overlayBlock.classList.toggle('overlay--active');
}

burgerBtn.addEventListener('click', e => {
  e.preventDefault();
  toggleMenu();
});

