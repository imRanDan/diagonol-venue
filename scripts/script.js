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
    testimonialSlider.innerHTML = `
        <div class="testimonial">
            <p class="quote">${testimonials[currentTestimonial].quote}</p>
            <p class="author">- ${testimonials[currentTestimonial].author}</p>
        </div>
    `;
    
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
}

// Initialize testimonials and set interval
updateTestimonials();
setInterval(updateTestimonials, 5000);

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Newsletter Form Submission
const subscribeForm = document.querySelector('.subscribe-form');
subscribeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    // Add your newsletter subscription logic here
    console.log('Subscription email:', email);
    // Reset form
    e.target.reset();
}); 