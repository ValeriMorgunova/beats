
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

function accordionTeam() {
  const workers = document.querySelectorAll(".team__item");
  const teamAccord = document.querySelector(".team__list");

  teamAccord.addEventListener("click", function (event) {
    event.preventDefault(); // скидываем стандартное состояние (что бы не кидало страницу вверх / или не перенаправляло на другую)
    const target = event.target; // то на что мы клацнули
   
    if (target.classList.contains("item__name")) {
      const worker = target.parentNode; // родитель нашей ссылки (li.team__item)
      const content = target.nextElementSibling; //  элемент который находится рядом с рашей ссылкой на уровне (item__content)
      const contentHeight = content.firstElementChild.clientHeight; // высота wrapper который лежит в item__content

      for (const iterator of workers) {
        if (iterator !== worker) {
          iterator.classList.remove("team__item--active");
          iterator.lastElementChild.style.height = 0;
        }
      }

      if (worker.classList.contains("team__item--active")) {
        worker.classList.remove("team__item--active");
        content.style.height = 0;
      } else {
        worker.classList.add("team__item--active");
        content.style.height = contentHeight + "px";
      }
    }
  });
}

accordionTeam();

//gorizont accordeon


//onepage-scroll

$(".main").onepage_scroll({
  sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
  easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
                                   // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
  animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
  pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
  updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
  beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
  afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
  loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
  keyboard: true,                  // You can activate the keyboard controls
  responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
                                   // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
                                   // the browser's width is less than 600, the fallback will kick in.
  direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
});
