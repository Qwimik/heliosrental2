const swiper = new Swiper('.swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    centeredSlides: true,
    spaceBetween: 20,
    autoplay: {
        delay: 4000,
    },
    loop: true,
    breakpoints: {
        480: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        650: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        980: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1220: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
    },
});