const body = document.querySelector('.dashboard'),
    sidebar = body.querySelector('.sidebar'),
    toggle = body.querySelector('.toggle'),
    searchBtn = body.querySelector('.search_box'),
    modeSwitch = body.querySelector('.toggle_switch'),
    modeText = body.querySelector('.mode_text'),
    logoWhite = body.querySelector('.white-logo'),
    logoBlack = body.querySelector('.black-logo');

function updateTheme() {
    if (body.classList.contains('dark')) {
        modeText.innerText = 'Light Mode';
        logoBlack.style.display = 'none';
        logoWhite.style.display = 'block';
    } else {
        modeText.innerText = 'Dark Mode';
        logoBlack.style.display = 'block';
        logoWhite.style.display = 'none';
    }
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
    updateTheme();
}

modeSwitch.addEventListener('click', () => {
    body.classList.toggle('dark');
    
    if (body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.removeItem('theme');
    }
    
    updateTheme();
});

toggle.addEventListener('click', () => {
    sidebar.classList.toggle('close');
});

searchBtn.addEventListener('click', () => {
    sidebar.classList.remove('close');
});
