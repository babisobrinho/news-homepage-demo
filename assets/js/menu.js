const navLinks = document.getElementById('nav-links');
const menuIcon = document.getElementById('menu-icon');
const main = document.getElementById('main');

function toggleMenu() {
    navLinks.classList.toggle("show");
  
    menuIcon.src = navLinks.classList.contains("show") ? "assets/images/icon-menu-close.svg" : "assets/images/icon-menu.svg";
  
    main.classList.toggle("opacity", navLinks.classList.contains("show"));
}

menuIcon.addEventListener("click", toggleMenu);