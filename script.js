console.log('JS Loaded');

// Hamburger menu with close button

// Load the elements
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');

// Toggle menu
hamburger.addEventListener('click', () => {
    console.log('Hamburger clicked');
    mobileNav.classList.toggle('open');
});

// Close menu with X
closeNav.addEventListener('click', () =>{
    mobileNav.classList.remove('open');
});

// Close when clicking a link
document.querySelectorAll('.mobile-nav a').forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
    });
});