const modal = document.getElementById('make_deposit-modal');
const openModalBtn = document.querySelector('.make_deposit-btn');
const closeBtn = document.querySelector('.make_deposit-close');

openModalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

function openModal() {
    modal.classList.add('active');
}

function closeModal() {
    modal.classList.remove('active');
}

function outsideClick(e) {
    if (e.target == modal) {
        modal.classList.remove('active');
    }
}
