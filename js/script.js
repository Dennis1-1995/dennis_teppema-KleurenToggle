const menu = document.querySelector('.nav-links');
const menuButton = document.querySelector('#img-menu');
const menuLink = document.querySelector('nav-link');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('show');
});

const bodyBackground = document.querySelector('body');
const linkHome = document.querySelector('#home');
const linkRed = document.querySelector('#nav-color-red');
const linkOrange = document.querySelector('#nav-color-orange');
const linkPurple = document.querySelector('#nav-color-purple');
const linkGreen = document.querySelector('#nav-color-green');

linkHome.addEventListener('click', () => {
    document.body.style.backgroundColor = "lightgrey";
    menu.classList.remove('show');
});

linkRed.addEventListener('click', () => {
    document.body.style.backgroundColor = "red";
    menu.classList.remove('show');
});

linkOrange.addEventListener('click', () => {
    document.body.style.backgroundColor = "orange";
    menu.classList.remove('show');
});

linkPurple.addEventListener('click', () => {
     document.body.style.backgroundColor = "purple";
     menu.classList.remove('show');
});

linkGreen.addEventListener('click', () => {
    document.body.style.backgroundColor = "green";
    menu.classList.remove('show');
});

