const body = document.querySelector('.dashboard');
const sidebar = body.querySelector('.sidebar');
const toggle = body.querySelector('.toggle');
const searchBtn = body.querySelector('.search_box');
const modeSwitch = body.querySelector('.toggle_switch');
const modeText = body.querySelector('.mode_text');
const logoDashboard = body.querySelector('.dashboard_logo-img');

toggle.addEventListener('click', () => {
    sidebar.classList.toggle('close');
});

searchBtn.addEventListener('click', () => {
    sidebar.classList.remove('close');
});

modeSwitch.addEventListener('click', () => {
    body.classList.toggle('dark');

    if (body.classList.contains('dark')) {
        modeText.innerText = 'Light Mode'
        logoDashboard.src = './images/sections/svg/logo_white-text.svg';
    } else {
        modeText.innerText = 'Dark Mode'
        logoDashboard.src = './images/sections/svg/logo_black.svg';
    }
});