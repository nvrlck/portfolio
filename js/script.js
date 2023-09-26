const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close'),
    closeElem2 = document.querySelector('.menu__overlay');
    closeElem3 = document.querySelector('.menu__list');


hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

closeElem2.addEventListener('click', () => {
    menu.classList.remove('active');
});

closeElem3.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__percentage'),
    lines = document.querySelectorAll('.skills__bar span');
counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});