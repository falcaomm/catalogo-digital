const menuBtn = document.getElementById('menu-btn');
const nav = document.getElementById('nav-menu');
const header = document.getElementById('header')

function openMenu(event) {
    if (event.type === 'touchstart') {
        event.preventDefault()
    }
    nav.classList.toggle('active');
    header.classList.toggle('header')
    
    const active = nav.classList.contains('active')
    
    event.currentTarget.setAttribute("aria-expanded", active)

    if (active) {
        event.currentTarget.setAttribute("aria-label", "Fechar Menu")
    } else {
        event.currentTarget.setAttribute("aria-label", "Abrir Menu")
    }
}

menuBtn.addEventListener('click', openMenu)
menuBtn.addEventListener('touchstart', openMenu)

const menuLinks = document.querySelectorAll('.menu-list a[href^="#"]')

menuLinks.forEach((link) => {
    link.addEventListener("click", () => nav.classList.toggle('active'))
});

menuLinks.forEach((link) => {
    link.addEventListener("click", () => header.classList.toggle('header'))
});