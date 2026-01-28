const menubtn = document.querySelector('.menu-btn');

menubtn.addEventListener('click', () => {
    menubtn.classList.toggle('change');
    nav = document.querySelector('nav');
    nav.classList.toggle('nav-open');
});