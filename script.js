const menuIcon = document.querySelector("#menu");
const navbar = document.querySelector(".nav");
const flags = document.querySelector(".flags");
const main_navigation = document.querySelector(".main-navigation");
const link = document.querySelector("#nav");

const mql = window.matchMedia('(max-width: 992px)');

const changeStyle = function() {
    if (mql.matches) {
    navbar.classList.toggle("nav-change");
    navbar.classList.toggle("nav");
    flags.classList.toggle("flags-change");
    flags.classList.toggle("flags");
    main_navigation.classList.toggle("main-navigation-change");
    main_navigation.classList.toggle("main-navigation");
    }
}

menuIcon.addEventListener("click", changeStyle);

link.addEventListener("click", changeStyle);