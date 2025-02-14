document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.slider-track');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev-arrow');
    const nextButton = document.querySelector('.next-arrow');
    
    let currentIndex = 0;
    const slideWidth = 100; // 100%

    // Clone first and last slides for infinite effect
    const firstClone = slides[0].cloneNode(true);
    const lastClone = slides[slides.length - 1].cloneNode(true);
    track.appendChild(firstClone);
    track.prepend(lastClone);

    // Set initial position
    track.style.transform = `translateX(-${slideWidth}%)`;

    function updateSlidePosition() {
        track.style.transform = `translateX(-${(currentIndex + 1) * slideWidth}%)`;
    }

    function moveToSlide(direction) {
        track.style.transition = 'transform 0.5s ease-in-out';
        currentIndex += direction;

        updateSlidePosition();

        // Handle infinite scroll
        if (currentIndex === slides.length) {
            setTimeout(() => {
                track.style.transition = 'none';
                currentIndex = 0;
                updateSlidePosition();
            }, 500);
        }

        if (currentIndex === -1) {
            setTimeout(() => {
                track.style.transition = 'none';
                currentIndex = slides.length - 1;
                updateSlidePosition();
            }, 500);
        }
    }

    // Auto slide every 5 seconds
    let autoSlideInterval = setInterval(() => moveToSlide(1), 5000);

    // Event listeners
    prevButton.addEventListener('click', () => {
        clearInterval(autoSlideInterval);
        moveToSlide(-1);
        autoSlideInterval = setInterval(() => moveToSlide(1), 5000);
    });

    nextButton.addEventListener('click', () => {
        clearInterval(autoSlideInterval);
        moveToSlide(1);
        autoSlideInterval = setInterval(() => moveToSlide(1), 5000);
    });

    // Pause auto-slide on hover
    track.addEventListener('mouseenter', () => {
        clearInterval(autoSlideInterval);
    });

    track.addEventListener('mouseleave', () => {
        autoSlideInterval = setInterval(() => moveToSlide(1), 5000);
    });
});
