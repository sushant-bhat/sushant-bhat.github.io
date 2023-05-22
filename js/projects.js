const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show')
        }
        // } else {
        //     entry.target.classList.remove('show')
        // }
    })
})

let projectContents = document.querySelectorAll('.project__content')
let projectImgs = document.querySelectorAll('.project__img')

projectContents.forEach(content => {
    let desc = content.querySelector('.project__desc')
    let img = content.querySelector('.project__img')
    let imgr = content.querySelector('.project__img-right')
    if (img) {
        observer.observe(img)
        img.addEventListener('mouseenter', () => {
            console.log('image hover')
            desc.classList.add('active')
            img.classList.add('active')
            cursor.classList.add('hover')
        })
        img.addEventListener('click', () => {
            let url = content.getAttribute('data-link')
            window.open(url, '_blank')
        })
        img.addEventListener('mouseleave', e => {
            cursor.classList.remove('hover')
        })
    }
    if (imgr) {
        observer.observe(imgr)
        imgr.addEventListener('mouseenter', () => {
            desc.classList.add('active')
            imgr.classList.add('active')
            cursor.classList.add('hover')
        })
        imgr.addEventListener('click', () => {
            let url = content.getAttribute('data-link')
            window.open(url, '_blank')
        })
        imgr.addEventListener('mouseleave', e => {
            cursor.classList.remove('hover')
        })
    }
})
