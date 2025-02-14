document.addEventListener('DOMContentLoaded', () => {
    const texts = [
        "Welcome to 2025....",
        "Lets get this show on the road",
        "DIAGONAL 2025"
    ];
    
    const typewriterElement = document.querySelector('.typewriter-text');
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typewriterElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            
            if (charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                setTimeout(type, 1000); // Pause before next word
                return;
            }
        } else {
            typewriterElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            
            if (charIndex === currentText.length) {
                setTimeout(() => {
                    isDeleting = true;
                    type();
                }, 2000); // Wait before deleting
                return;
            }
        }
        
        const typingSpeed = isDeleting ? 75 : 150;
        setTimeout(type, typingSpeed);
    }
    
    // Start the typewriter effect
    type();
}); 