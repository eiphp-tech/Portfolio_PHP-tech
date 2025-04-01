const menuHam = document.getElementById('ham')
const navbar = document.getElementById('nav')

function clickMenu() {
  navbar.style.display =
    navbar.style.display === 'flex' ? 'none' : 'flex'
}


menuHam.addEventListener("click", clickMenu)