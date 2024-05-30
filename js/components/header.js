document.addEventListener('DOMContentLoaded', function () {
    const burgerBtn = document.getElementById('burger-btn');
    const menu = document.getElementById('menu');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('close-btn');
    const contactOpenBtn = document.querySelector('.contact_btn');
    const contactMenu = document.querySelector('.contact_container');
    const contactCloseBtn = document.querySelector('.contact_close_btn');



    closeBtn.addEventListener('click', function () {
        menu.style.left = '-300px';
        overlay.classList.remove('show');
        document.body.style.overflowY = 'auto';
    });

    burgerBtn.addEventListener('click', function () {
        if (menu.style.left === '0px') {
            menu.style.left = '-300px';
            overlay.classList.remove('show');
            document.body.style.overflowY = 'auto';
        } else {
            menu.style.left = '0px';
            overlay.classList.add('show');
            document.body.style.overflowY = 'hidden';
        }
    });
    
    overlay.addEventListener('click', function () {
        menu.style.left = '-300px';
        contactMenu.style.right = '-300px';
        overlay.classList.remove('show');
        document.body.style.overflowY = 'auto';
    });

    contactCloseBtn.addEventListener('click', function () {
        contactMenu.style.right = '-300px';
        overlay.classList.remove('show');
        document.body.style.overflowY = 'auto';
    });

    contactOpenBtn.addEventListener('click', function () {
        if (contactMenu.style.right === '0px') {
            contactMenu.style.right = '-300px';
            overlay.classList.remove('show');
            document.body.style.overflowY = 'auto';
        } else {
            contactMenu.style.right = '0px';
            overlay.classList.add('show');
            document.body.style.overflowY = 'hidden';
        }
    });
});