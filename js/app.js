const header = document.querySelector('header');

window.addEventListener('scroll',()=>{
    header.classList.toggle('sticky', window.scrollY > 0)
})
let menu = document.querySelector('#menu-icon')
let navlist = document.querySelector('.navlist')

menu.addEventListener('click',() => {
    menu.classList.toggle('bx-x')
    navlist.classList.toggle('active')
});

const sr = ScrollReveal({
    distance:'45px',
    duration:2700,
    reset:true
})
sr.reveal('.home-text', {delay: 350, origin:'left'})
sr.reveal('.home-img', {delay: 350, origin:'right'})

sr.reveal('.sub-service, .about, .protflio, .service, .cta, .contact', {delay: 500, origin:'bottom'})