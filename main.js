new Swiper(".mainCont__visual .swiper-container", {
  effect: "fade",
  speed: 500,
  autoplay: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

new Swiper(".mainCont__product-special .swiper-container", {
  speed: 500,
  autoplay: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
