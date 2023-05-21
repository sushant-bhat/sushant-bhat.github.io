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
    content.addEventListener('mouseleave', () => {
        // desc.classList.remove('active')
        cursor.classList.remove('hover')
        // if (img) {
        //     img.classList.remove('active')
        // }
        // if (imgr) {
        //     imgr.classList.remove('active')
        // }
    })
    content.addEventListener('click', () => {
        let url = content.getAttribute('data-link')
        window.open(url, '_blank')
    })
    if (img) {
        observer.observe(img)
        img.addEventListener('mouseenter', () => {
            console.log('image hover')
            desc.classList.add('active')
            img.classList.add('active')
            cursor.classList.add('hover')
        })
    }
    if (imgr) {
        observer.observe(imgr)
        imgr.addEventListener('mouseenter', () => {
            desc.classList.add('active')
            imgr.classList.add('active')
            cursor.classList.add('hover')
        })
    }
})
