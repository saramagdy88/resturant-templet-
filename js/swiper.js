//  var galleryThumbs = new Swiper('.gallery-thumbs', {
//   spaceBetween: 10,
//   slidesPerView: 4,
//   loop: true,
//   freeMode: true,
//   loopedSlides: 5, //looped slides should be the same
//   watchSlidesVisibility: true,
//   watchSlidesProgress: true,

//   centeredSlides: true,
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
// });
// var galleryTop = new Swiper('.gallery-top', {
//   slidesPerView: 1,
//   slidesPerGroup: 1,

//   spaceBetween: 10,
//   loop:true,
//   loopedSlides: 5, //looped slides should be the same

//   centeredSlides: true,
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },

//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   thumbs: {
//     swiper: galleryThumbs,
//   },
// });
var swiper = new Swiper(".swiper-container", {
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 1000
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});

// var swiper = new Swiper('.swiper-container', {

//   slidesPerView: 1,
//   slidesPerGroup: 1,
//   // spaceBetween: 30,
//   centeredSlides: true,
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });
