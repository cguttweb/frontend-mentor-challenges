const hamburgerIcon = document.getElementById('hamburger');
const mainNav = document.querySelector('.main-nav');

// toggle class to show/hide mobile navigation
hamburgerIcon.addEventListener('click', () => {
    mainNav.classList.toggle('show-hide');
})