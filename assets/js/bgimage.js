window.addEventListener('scroll', function() {
    const section2 = document.querySelector('.section2');
    const section1 = document.querySelector('.section1');

    const section1Height = section1.offsetHeight;
    const scrollPosition = window.scrollY;

    // Adjust opacity based on scroll position
    if (scrollPosition >= section1Height) {
        section2.style.opacity = '1';
    } else {
        section2.style.opacity = scrollPosition / section1Height;
    }
});