const nav = document.querySelector('nav');
const toggle = document.querySelector('.menu-btn');

toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 700) {
        nav.classList.remove('active');
    }
});