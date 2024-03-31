
//burger menu
let burgerBtn = document.querySelector('.burger');
let overlayBlock = document.querySelector('.overlay');
let overlayMenu = document.querySelector('.overlay__list');
let overlayLink = document.querySelector('.overlay__link');
let overlayLinkAll = document.querySelectorAll('.overlay__link');



function toggleMenu(){
  burger.classList.toggle('burger--active');
  overlayBlock.classList.toggle('overlay--active');
}

function closeMenu(e){
  e.preventDefault();
  burger.classList.remove('burger--active');
  overlayBlock.classList.remove('overlay--active');
}

burgerBtn.addEventListener('click', e => {
  e.preventDefault();
  toggleMenu();
});

overlayLinkAll.forEach((link) => {
  link.addEventListener('click', closeMenu);
})

//reviews

const reviewsList = document.querySelector('.reviews__slider');
const reviewsItems = document.querySelectorAll('.reviews__img');
const reviewBlock = document.querySelectorAll('.reviews__info');

reviewsList.addEventListener('click' , e =>{
   e.preventDefault();
  
  if(e.target.classList.contains('reviews__logo')){
    const currentLink = e.target;
    const currentItem = currentLink.closest('.reviews__img');
    const currentId = currentItem.id;
    
    for (const iterator of reviewsItems) {
      if(iterator !== currentItem){
        iterator.classList.remove('reviews__img--active');
      }
    }
    
    if(!currentItem.classList.contains('reviews__img--active')){
      currentItem.classList.add('reviews__img--active');
    }
    
    reviewBlock.forEach(function(block){
      if(currentId == block.id){
        block.classList.add('reviews__info--active');
      }else{
        block.classList.remove('reviews__info--active');
      }
    })
  }
})


//slider

$(document).ready(function(){
	$('.slider').slick({
		dots: true
	});
});



//accordeon



