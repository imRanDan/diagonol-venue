document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.slider-track');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev-arrow');
    const nextButton = document.querySelector('.next-arrow');
    
    let currentIndex = 0;
    const slideWidth = 100; // Changed to 100% to match new CSS
    
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

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            moveToSlide(-1);
        }
        if (e.key === 'ArrowRight') {
            moveToSlide(1);
        }
    });

    // Event listeners
    prevButton.addEventListener('click', () => {
        moveToSlide(-1);
    });

    nextButton.addEventListener('click', () => {
        moveToSlide(1);
    });
});
