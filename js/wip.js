let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        }
    })
})

let wipTitles = document.querySelectorAll('.wip__desc h3')
wipTitles.forEach(title => {
    observer.observe(title)
})

let wipDescPara = document.querySelectorAll('.wip__desc p')
wipDescPara.forEach(para => {
    observer.observe(para)
})

let wipDescLinks = document.querySelectorAll('.wip__desc span')
wipDescLinks.forEach(link => {
    observer.observe(link)
})
