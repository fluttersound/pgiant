$(".slider-main_component").each(function (index) {
  const swiper = new Swiper($(this).find(".swiper")[0], {
    slidesPerfiew: "1",
    speed: 700,
    keyboard: true,
    mousewheel: { forceToAxis: true },
    slideToclickedSlide: true,
    followFinger: false,
    spaceBetween: "5%",
    breakpoints: {
      // mobile landscape
      480: {
        slidesPerView: 1,
        spaceBetween: "4%"
      },
      768: {
        slidesPerView: 3,
        spaceBetween: "3%"
      },
      992: {
        slidesPerView: 4,
        spaceBetween: "2%"
      }
    },
    pagination: {
      el: $(this).find(".swiper-bullet-wrapper")[0],
      bulletActiveClass: "is-active",
      bulletClass: "swiper-bullet",
      bulletElement: "button"
      clickable: true
    },
    navigation: {
      nextEl: $(this).find(".swiper-next")[0],
      prevEl: $(this).find(".swiper-prev")[0],
      disabledclass: "is-disabled"
    },
    scrollbar: {
      el: $(this).find(".swiper-drag-wrapper")[0],
      draggable: true,
      dragclass: "swiper-drag",
      snapOnRelease: true
    }
  });
});
