  let swiper = null;

  const initSwiper = () => {
    if (window.innerWidth <= 1239 && !swiper) {
      swiper = new Swiper('.current_content', {
        pagination: {
            el: '.swiper-pagination',
        },
          slidesPerView: 1,

        autoplay: {
          delay: 4000,
        },
        loop: true,
        breakpoints: {
          768: {
            slidesPerView: 2,
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
