document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('.reviews_img');
    const textBlocks = document.querySelectorAll('.reviews_text-block');

    images.forEach(img => {
        img.addEventListener('click', function () {
            if (this.classList.contains('active-img')) {
                return;
            }

            textBlocks.forEach(block => {
                block.classList.remove('active-text');
                block.style.display = 'none';
                block.style.opacity = 0;
            });
            images.forEach(image => image.classList.remove('active-img'));

            const textId = 'reviews-text-' + this.id.split('-')[1];
            const activeTextBlock = document.getElementById(textId);
            activeTextBlock.style.display = 'block'; 
            setTimeout(() => {
                activeTextBlock.classList.add('active-text');
                activeTextBlock.style.opacity = 1;
            }, 10);
            this.classList.add('active-img');
        });
    });
});
