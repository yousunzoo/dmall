new Swiper(".mainCont__visual .swiper", {
  effect: "fade",
  speed: 500,
  autoplay: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

new Swiper(".mainCont__product-special .swiper", {
  speed: 500,
  autoplay: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
