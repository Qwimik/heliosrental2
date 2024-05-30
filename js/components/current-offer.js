// document.addEventListener('DOMContentLoaded', () => {
  let swiper = null;

  const initSwiper = () => {
    if (window.innerWidth <= 1239 && !swiper) {
      swiper = new Swiper('.current_content', {
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },
        // centeredSlides: true,
        slidesPerView: 1,
        autoplay: {
          delay: 4000,
        },
        loop: true,
        breakpoints: {
          650: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          980: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        },
      });
    }
  };

  const checkSwiper = () => {
    if (window.innerWidth > 1239 && swiper) {
      swiper.destroy(true, true);
      swiper = null;
    } else if (window.innerWidth <= 1239 && !swiper) {
      initSwiper();
    }
  };

  initSwiper();
  window.addEventListener('resize', checkSwiper);
// });
