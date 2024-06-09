document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.querySelector('.login_form_password_show'),
    passInput = document.querySelector('.login_form_password_input'),
    showIcon = document.querySelector('.login_form_password_show_icon'),
    hideIcon = document.querySelector('.login_form_password_hide_icon');

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            if (passInput.type === "password") {
                passInput.type = 'text';
                hideIcon.style.display = 'none';
                showIcon.style.display = 'block';
            } else if (passInput.type === "text") {
                passInput.type = 'password';
                hideIcon.style.display = 'block';
                showIcon.style.display = 'none';
            }
        })
    }

});