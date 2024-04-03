
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
  const contentAvatar = document.querySelector(".item__avatar");

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

$(function(){
  $('.acco-menu__link').on('click', function(e){
      e.preventDefault();
  
        let calculateWidth = () => {
      let windowWidth = $(window).width();
      let links = $(".acco-menu__link");
      let linkWidth = links.width();
      let reqWidth = windowWidth - linkWidth * links.length;
              console.log(reqWidth);
      return reqWidth > 500 ? 500 : reqWidth;
  }
  
          var $this = $(this),
          container = $this.closest('.acco-menu__list'),
          item = $this.closest('.acco-menu__item'),
          items = container.find('.acco-menu__item'),
          activeItem = items.filter('.is-active'),
          content = item.find('.acco-menu__description'),
          activeContent = activeItem.find('.acco-menu__description');
          openWidth = calculateWidth();
  
          
          if (!item.hasClass('is-active')) {
              items.removeClass('is-active');
              item.addClass('is-active');
              activeContent.animate({
                     'width' : '0px'
              });       
              content.animate({
                     'width' : openWidth + 'px'
  
                     
              });
          } else {
              item.removeClass('is-active');
              content.animate({
                     'width' : '0px'
              });
  
          }
  });
  
  
  
  $(document).on('click', function (e) {
     var $this = $(e.target);
     if (!$this.closest('.acco-menu__list').length) {
           $('.acco-menu__description').animate({
                 'width' : '0px'
           });
           $('.acco-menu__link').removeClass('is-active');
     }
  });
  });





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

//modalWindow

 

//form

$('.order__content').submit(e => {
  e.preventDefault();

  const form = $(e.currentTarget);
  const name = form.find("[name = 'name']"); //берем значения инпутов
  const phone = form.find("[name = 'phone']");
  const comment = form.find("[name = 'comment']");
  const to = form.find("[name = 'to']");

  const modal = $(".modal");
  const content = modal.find(".modal__content");

  modal.removeClass("modal__error");

  [name, phone, comment, to].forEach(field => { //проверяем поля на наличие заполненной информации
    field.removeClass("input__error");
    if (field.val().trim() == "") { // trim - без пробелов
      field.addClass("input__error");
    }
  });

  const errorFields = form.find(".input__error");

  if(errorFields.length == 0) { //если все поля заполнены 
    const request = $.ajax({ //выполняем запрос на сервер
      url: "https://webdev-api.loftschool.com/sendmail",
      method: "post",
      data: {
        name: name.val(),
        phone: phone.val(),
        comment: comment.val(),
        to: to.val(),
      },
    })

    request.done(data => {
      content.text(data.message);

    })

    request.fail(data => {
      const message = data.responseJSON.message;
      content.text(message);
      modal.addClass("modal__error");
    })

    request.always(() => {
      Fancybox.show([{ src: "#modal", type: "inline" }]); //вызываем модальное окно при отправке 
    })
    
  }
})

$(".btn__close").click(e => { //закрытие модала при нажатии на кнопку
  e.preventDefault();

  Fancybox.close();
})

//maps

let myMap;

const init = () => {
  myMap = new ymaps.Map("map", {
    center: [61.785021, 34.346878],
    zoom: 11,
    controls: []
  })

  const points = [
    [61.812563, 34.271420],
    [61.814960, 34.162418],
    [61.721213, 34.484276]
  ];

  const pointsImg = new ymaps.GeoObjectCollection({}, {
    draggable: false,
    iconLayout: 'default#image',
    iconImageHref: "./img/marker.png",
    iconImageSize: [46, 57],
    iconImageOffset: [-35, -52]
  })

  points.forEach(point => {
    pointsImg.add(new ymaps.Placemark(point));
  })

  myMap.geoObjects.add(pointsImg);

  myMap.behaviors.disable('scrollZoom');
}

ymaps.ready(init);