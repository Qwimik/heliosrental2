document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.hero_btn').addEventListener('click', function () {
        const statistics = document.querySelector('.statistics_section');
        const statisticsHeight = statistics.offsetHeight;
        const scrollPosition = statistics.offsetTop - 200;
        window.scrollTo({
            top: scrollPosition,
            behavior: 'smooth'
        });
    });
});