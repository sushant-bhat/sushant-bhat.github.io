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
let nav = document.getElementById('nav')
if (navHam) {
    navHam.addEventListener('click', () => {
        navHam.classList.add('elem-hide')
        nav.classList.remove('elem-hide')
    })
}

let navCloseBtn = document.getElementById('nav__close__btn')
if (navCloseBtn) {
    navCloseBtn.addEventListener('click', () => {
        navHam.classList.remove('elem-hide')
        nav.classList.add('elem-hide')
    })
}