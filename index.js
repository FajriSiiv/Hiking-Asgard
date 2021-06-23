$(".bar").click(function () {
  $(".list").toggleClass("slide-toggle");
});

var swiper = new Swiper(".swiper-container", {
  slidesPerView: "auto",
  loop: true,
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  autoplay: {
    delay: 3000,
  },
});
var swiper = new Swiper(".swiper-customer", {
  effect: "coverflow",
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  autoplay: {
    delay: 2000,
  },
});
