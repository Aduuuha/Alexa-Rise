const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.nav-menu');
const navLink = document.querySelectorAll('.nav-menu__item-link');
const hiremeBtn = document.querySelector('.hero-btn');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal-close')

function showHideMenu() {
    burger.classList.toggle('open');
    navMenu.classList.toggle('open');
}

function hideMenuFolLinks () {
    burger.classList.remove('open');
    navMenu.classList.remove('open');
}

function showModal() {
    modal.classList.add('open');
}

function hideModal() {
    modal.classList.add('close')
}

burger.addEventListener('click', showHideMenu);

for( i = 0; i < navLink.length; i++){
    navLink[i].addEventListener('click',hideMenuFolLinks); 
}

hiremeBtn.addEventListener('click', showModal);

closeModal.addEventListener('click', hideModal);


