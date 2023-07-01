const menuEmail = document.querySelector('.navbar-email');
const DesktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu')
const burguerMenu = document.querySelector('.burguermenu') 

menuEmail.addEventListener('click',toggleDesktopMenu);
burguerMenu.addEventListener('click',toogleMobileMenu);

function toggleDesktopMenu(){
    DesktopMenu.classList.toggle('inactive');
}
function toogleMobileMenu(){
    mobileMenu.classList.toggle('inactivemobile');
}