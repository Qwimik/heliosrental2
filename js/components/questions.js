document.addEventListener("DOMContentLoaded", function () {
    const questionItems = document.querySelectorAll('.question_item');

    questionItems.forEach(item => {
        item.addEventListener('click', function () {
            const p = this.querySelector('p');
            const pHeight = p.scrollHeight + 40 + "px";

            if (this.classList.contains('active')) {
                this.classList.remove('active');
                p.style.maxHeight = '0';
                p.style.opacity = '0';
                p.style.paddingTop = '0px';
                p.style.paddingBottom = '0px';
                return;
            }

            questionItems.forEach(q => {
                q.classList.remove('active');
                const p = q.querySelector('p');
                p.style.maxHeight = '0';
                p.style.opacity = '0';
                p.style.paddingTop = '0';
                p.style.paddingBottom = '0';
            });

            this.classList.add('active');
            p.style.maxHeight = pHeight; 
            p.style.opacity = '1';
            p.style.paddingTop = '20px';
            p.style.paddingBottom = '20px';
        });
    });
});
