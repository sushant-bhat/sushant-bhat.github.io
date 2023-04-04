let aboutCards = document.querySelectorAll('.about__card')
let index = 0
aboutCards[index].classList.add('about__card-selected')
aboutCards.forEach(aboutCard => {
    aboutCard.addEventListener('click', () => {
        aboutCards[index].classList.remove('about__card-selected')
        index = (index+1)%aboutCards.length;
        aboutCards[index].classList.add('about__card-selected')
    })
})