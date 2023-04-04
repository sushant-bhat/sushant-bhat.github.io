const header = document.querySelector("header");
const rootElem = document.querySelector(':root');
rootElem.style.setProperty('--header-height', -1 * header.offsetHeight + "px");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    console.log(header.offsetHeight);
    if (lastScrollY < window.scrollY) {
        header.classList.add("header-hide");
    } else {
        header.classList.remove("header-hide");
    }
    lastScrollY = window.scrollY;
});

let navHam = document.getElementById('nav__ham')
let navMenu = document.getElementById('nav__menu')
if (navHam) {
    navHam.addEventListener('click', () => {
        navHam.classList.toggle('active')
        navMenu.classList.toggle('active')
    })
}