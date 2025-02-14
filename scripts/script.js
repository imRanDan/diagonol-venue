// Testimonial Data
const testimonials = [
    {
        quote: "The saviour London clubbing desperately needed",
        author: "Mixmag"
    },
    {
        quote: "I am so grateful that this place exists!",
        author: "Annie Mac"
    },
    {
        quote: "F*cking love this place",
        author: "deadmau5"
    },
    // Add more testimonials
];

// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Testimonial Slider
let currentTestimonial = 0;
const testimonialSlider = document.querySelector('.testimonial-slider');

function updateTestimonials() {
    if (testimonialSlider) { // Only run if testimonial slider exists on page
        testimonialSlider.innerHTML = `
            <div class="testimonial">
                <p class="quote">${testimonials[currentTestimonial].quote}</p>
                <p class="author">- ${testimonials[currentTestimonial].author}</p>
            </div>
        `;
        
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    }
}

// Initialize testimonials and set interval if on homepage
if (document.querySelector('.testimonial-slider')) {
    updateTestimonials();
    setInterval(updateTestimonials, 5000);
}

// Navigation Links
const navItems = [
    { text: 'HOME', url: 'index.html' },
    { text: 'SHOP', url: 'shop.html' },
    { text: "WHAT'S ON", url: 'whats-on.html' },
    { text: 'NEWS', url: 'news.html' }
];

// Add active class to current page nav link
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// Call setActiveNavLink when DOM is loaded
document.addEventListener('DOMContentLoaded', setActiveNavLink);

// Newsletter Form Submission
const subscribeForm = document.querySelector('.subscribe-form');
if (subscribeForm) {
    subscribeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = e.target.querySelector('input[type="email"]').value;
        // Add your newsletter subscription logic here
        console.log('Subscription email:', email);
        // Reset form
        e.target.reset();
    });
} 