const body = document.querySelector('.dashboard');
const sidebar = body.querySelector('.sidebar');
const toggle = body.querySelector('.toggle');
const searchBtn = body.querySelector('.search_box');
const modeSwitch = body.querySelector('.toggle_switch');
const modeText = body.querySelector('.mode_text');

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
    } else {
        modeText.innerText = 'Dark Mode'
    }
});