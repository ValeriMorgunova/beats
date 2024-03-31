
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

//gorizont accordeon


//onepage-scroll

let onePageScroll = () =>{
  const wrapper = document.querySelector('.wrapper');
  const content = wrapper.querySelector('.main-content');
  const pages = content.querySelectorAll('.section');
  const points = document.querySelectorAll('.fixed__item');
  const dataScrollto = document.querySelectorAll('[data-scroll-to]');
  
  let inScroll = false;
  
  addNavigation();
  wheel();
  keyPush();
  
  //   функция прокрутки к нужной странице
  function doTransition(pageNumber){
    const position  = `${pageNumber * (-100)}%`;
    
    if(inScroll) return;
    
    inScroll = true;
    
    addClass(pages);
    
    content.style.transform = `translateY(${position})`;
    
    setTimeout(() => {
      inScroll = false;
      addClass(points);
    }, 1000); //transition + 300(инерция скролла)
    
    function addClass(arr){
      arr[pageNumber].classList.add('is-active');
      
      for(const item of arr){
        if(item != arr[pageNumber]){
          item.classList.remove('is-active');
        }
      }
    }
  }
 
  // функция навигации по клику data-scroll
  function addNavigation(){
    for(const point of dataScrollto){
      point.addEventListener('click' , e=>{
        e.preventDefault();
        doTransition(point.dataset.scrollTo);
      })
    }
  }
  
  // функция работы с колесиком мышки
  function wheel() {
    document.addEventListener('wheel', e => {
      const direct = e.deltaY > 0 ? 'up' : 'down';
      
      scrollToPage(direct);
    })
  }
  
  // функция отработки нажатия стрелочек на клавиатуре
  function keyPush() {
    document.addEventListener('keydown', e => {
      switch (e.keyCode) {
        case 40:
        scrollToPage('up');
          break;
        case 38:
        scrollToPage('down');
          break;
        default:
          break;
      }
    })
  }
  
  // функция определения нужной страницы нам и навешивает класс активный
  function definePage(arr){
    for (let i = 0; i < arr.length; i++) {
      let iter = arr[i];
      if (iter.classList.contains('is-active')){
        return {
          iterIndex: i,
          iterActive: iter,
          iterNext: iter.nextElementSibling,
          iterPrev: iter.previousElementSibling
        }
      }   
    }
  }
  
  // функция определяет куда скроли полльзователь и вызывает doTransition
  function scrollToPage(direct){
    let page = definePage(pages);
    
    if (direct === 'up' && page.iterNext) {
      let numPage = page.iterIndex + 1;
      
      doTransition(numPage);
    }

    if (direct === 'down' && page.iterPrev) {
      let numPage = page.iterIndex - 1;
      doTransition(numPage);
    }
  }
}

onePageScroll();



