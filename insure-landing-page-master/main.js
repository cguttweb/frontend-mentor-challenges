const hamburgerIcon = document.getElementById('hamburger');
const mainNav = document.querySelector('.main-nav');

console.log(screen.width)

// toggle class to show/hide mobile navigation
hamburgerIcon.addEventListener('click', () => {
    mainNav.classList.toggle('show-hide');
})