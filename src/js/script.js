const menuHam = document.getElementsByClassName('menu-ham');
const navbar = document.getElementsByClassName('.nav-container');

function clickMenu() {
  navbar.style.display =
    navbar.style.display === 'flex' ? 'none' : 'flex';
}

menuHamburguer.addEventListener("click", clickMenu)