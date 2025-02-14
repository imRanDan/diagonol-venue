const newsItems = [
    {
        title: "Summer Underground Festival Announced",
        date: "30 January 2024",
        excerpt: "This June, we return with another highly-anticipated edition of Summer Underground Festival featuring the most influential names in electronic music...",
        image: "/assets/images/news/news1.jpg",
        link: "/news/summer-underground-2024"
    },
    {
        title: "DIAGONOL Store Launches",
        date: "5 May 2024",
        excerpt: "To celebrate our upcoming season, we're pleased to announce limited pieces of official DIAGONOL apparel, prints and accessories...",
        image: "/assets/images/news/news2.jpg",
        link: "/news/store-launch"
    },
    // Add more news items as needed
];

function formatDate(dateStr) {
    return dateStr; // You can add date formatting if needed
}

function displayNews() {
    const container = document.getElementById('news-container');
    
    newsItems.forEach(item => {
        const newsCard = `
            <article class="news-card">
                <a href="${item.link}" class="news-link">
                    <div class="news-image">
                        <img src="${item.image}" alt="${item.title}">
                    </div>
                    <div class="news-content">
                        <div class="news-date">${formatDate(item.date)}</div>
                        <h2 class="news-title">${item.title}</h2>
                        <p class="news-excerpt">${item.excerpt}</p>
                    </div>
                </a>
            </article>
        `;
        container.innerHTML += newsCard;
    });
}

// Newsletter form handling
function setupNewsletterForm() {
    const form = document.getElementById('newsletter-form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = form.querySelector('input[type="email"]').value;
        // Add your newsletter signup logic here
        console.log('Newsletter signup:', email);
        // Show success message
        alert('Thanks for subscribing!');
        form.reset();
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    displayNews();
    setupNewsletterForm();
});