document.addEventListener('DOMContentLoaded', () => {
    // Handle brochure form submissions
    document.querySelectorAll('.brochure-form').forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Add your form submission logic here
            alert('Thank you for your request. The brochure will be sent to your email.');
            form.reset();
        });
    });

    // Handle enquiry form submission
    const enquiryForm = document.querySelector('.enquiry-form');
    if (enquiryForm) {
        enquiryForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Add your form submission logic here
            alert('Thank you for your enquiry. We will be in touch soon.');
            enquiryForm.reset();
        });
    }
}); 