let menuIcon = document.querySelector('.menu');
let navbar = document.querySelector('.navbar ul');

menuIcon.onclick = () => {
    // menuIcon.classList.toggle('menu');
    navbar.classList.toggle('active');
};