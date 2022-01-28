const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  loop: true,
  speed: 400,
  spaceBetween: 70,
  centeredSlide: true,
  slideToClickedSlide: true,
  toggle: true,
  breakpoints: {
    320: {
      slidesPerView: 3,
    }
  }
});