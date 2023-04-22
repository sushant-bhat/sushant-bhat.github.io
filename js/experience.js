const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

let expItems = document.querySelectorAll('.exp__img')
let expInfos = document.querySelectorAll('.exp__info')
let expInfoItems = document.querySelectorAll('.exp__info > li')

expItems.forEach(expItem => observer.observe(expItem))
expInfos.forEach(expInfo => observer.observe(expInfo))
expInfoItems.forEach(expInfoItem => observer.observe(expInfoItem))
