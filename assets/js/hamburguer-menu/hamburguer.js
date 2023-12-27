const hamburguerMenu = document.querySelector('.hamburguer'); 
const containerMenu = document.querySelector('#container-menu'); 
const navLink = document.querySelectorAll('.nav-link')

hamburguerMenu.addEventListener('click', () => {
    containerMenu.classList.toggle('container-menu--open'); 
    hamburguerMenu.classList.toggle('hamburguer--open');
});

navLink.forEach(e => e.addEventListener('click', () => {
    containerMenu.classList.remove('container-menu--open'); 
    hamburguerMenu.classList.remove('hamburguer--open');
})); 