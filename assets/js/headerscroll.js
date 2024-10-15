let lastScrollTop1 = 0;
const navbar1 = document.querySelector('#navbar');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop1) {
        // Scroll down: hide the navbar
        navbar1.style.transform = 'translateY(-100%)'; // Move navbar up by its full height
    } else {
        // Scroll up: show the navbar
        navbar1.style.transform = 'translateY(0)';
    }
    
    lastScrollTop1 = scrollTop;
});