// Navigation template
const navTemplate = `
<nav class="main-nav">
    <a href="index.html" class="logo">DIAGONAL</a>
    <div class="nav-links">
        <a href="index.html">HOME</a>
        <a href="shop.html">SHOP</a>
        <a href="whats-on.html">WHAT'S ON</a>
        <a href="news.html">NEWS</a>
        <a href="hire.html">HIRE</a>
    </div>
    <div class="hamburger">
        <span></span>
        <span></span>
        <span></span>
    </div>
</nav>
`;

// Load the navigation
document.addEventListener('DOMContentLoaded', function() {
    // Insert the navigation at the start of the body
    document.body.insertAdjacentHTML('afterbegin', navTemplate);
    
    // Initialize navigation functionality
    initializeNav();
});

function initializeNav() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Set active nav link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
} 