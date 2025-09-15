const prMediaSwiper = new Swiper(".what-we-do .what-we-do-slider", {
  slidesPerView: 3,
  loop: true,
  speed: 800,
  spaceBetween: 25,
  grabCursor: true,
  autoplay: false,
  navigation: {
    nextEl: ".what-we-do .swiper-button-next",
    prevEl: ".what-we-do .swiper-button-prev",
  },
  breakpoints: {
    992: { slidesPerView: 3 },
    768: { slidesPerView: 3 },
    480: { slidesPerView: 2 },
    0: { slidesPerView: 1 }
  }
});
