const header = document.querySelector("header");
const rootElem = document.querySelector(':root');
rootElem.style.setProperty('--header-height', -1 * header.offsetHeight + "px");
let lastScrollY = window.scrollY;
let cursor = document.querySelector('.cursor')
let hoverables = document.querySelectorAll('a')

hoverables.forEach(elem => elem.addEventListener('mouseover', e => {
    cursor.classList.add('hover')
}))


hoverables.forEach(elem => elem.addEventListener('mouseleave', e => {
    cursor.classList.remove('hover')
}))

document.addEventListener('mousemove', e => {
    cursor.setAttribute('style', 'top: ' + (e.pageY - header.offsetHeight - 10) + 'px; left: ' + (e.pageX - 10) + 'px;')
})

window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
        header.classList.add("header-hide")
        nav.classList.remove('active')
        navHam.classList.remove('active')
        navMenu.classList.remove('active')
    } else {
        header.classList.remove("header-hide");
    }
    lastScrollY = window.scrollY;
});

let navHam = document.getElementById('nav__ham')
let navMenu = document.getElementById('nav__menu')
let nav = document.getElementById('nav')
let navItems = document.querySelectorAll('.nav-item')
if (navHam) {
    navHam.addEventListener('click', () => {
        nav.classList.toggle('active')
        navHam.classList.toggle('active')
        navMenu.classList.toggle('active')
        navItems.forEach(navItem => navItem.classList.toggle('active'))
    })
}