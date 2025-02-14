const newsItems = [
    {
        date: "30 January 2025",
        title: "DIAGONAL Takes Over Berlin",
        description: "This summer, DIAGONAL brings its signature industrial atmosphere to Berlin's legendary Kraftwerk for a groundbreaking collaboration that merges two of electronic music's most distinctive spaces. The three-day takeover will feature custom-built installations and a carefully curated lineup spanning ambient, techno, and experimental electronic music...",
        image: "/assets/images/news1.png",
        category: "Events"
    },
    {
        date: "17 May 2024",
        title: "DIAGONAL x UNDERGROUND",
        description: "Following years of pioneering events, DIAGONAL partners with Underground Festival to create a new series of immersive experiences. Combining cutting-edge sound design with industrial architecture, this collaboration promises to push the boundaries of electronic music presentation. The series will launch with a 24-hour continuous sound installation...",
        image: "/assets/images/news2.jpg",
        category: "Partnerships"
    },
    {
        date: "5 May 2024",
        title: "DIAGONAL STORE LAUNCH",
        description: "To commemorate our groundbreaking first season, we're excited to announce the release of limited-edition DIAGONAL merchandise. The collection features exclusive apparel, architectural prints, and custom accessories previously only available at events. Each piece reflects the industrial aesthetic and innovative spirit of our space...",
        image: "/assets/images/news3.png",
        category: "Announcements"
    },
    {
        date: "2 May 2024",
        title: "DIAGONAL Phase Two Announced",
        description: "During our landmark show with Four Tet, DIAGONAL revealed plans for an ambitious expansion. Phase Two will introduce three new spaces, including an experimental sound lab and vertical performance area. This development marks the next evolution in our mission to redefine the modern venue experience...",
        image: "/assets/images/news4.jpg",
        category: "Development"
    },
    {
        date: "2 April 2024",
        title: "Opening Season Highlights",
        description: "DIAGONAL's Opening Season has redefined expectations for modern venue spaces. Over three months, we've hosted 20 groundbreaking events, featuring pioneering artists and cutting-edge production. From Aphex Twin's surprise appearance to Jon Hopkins' venue-specific ambient installation, each event has pushed creative boundaries...",
        image: "/assets/images/news5.jpg",
        category: "Reviews"
    },
    {
        date: "15 March 2024",
        title: "DIAGONAL Sound System Unveiled",
        description: "In collaboration with world-leading audio engineers, we're proud to introduce our custom-built sound system. Designed specifically for our main space's unique architecture, this bespoke system delivers unprecedented sonic clarity and physical impact, setting new standards for audio excellence...",
        image: "/assets/images/news6.jpg",
        category: "Technology"
    }
];

function formatDate(dateStr) {
    return dateStr; // You can add date formatting if needed
}

function displayNews() {
    const container = document.getElementById('news-container');
    container.innerHTML = ''; // Clear existing content
    
    newsItems.forEach(item => {
        const newsCard = `
            <article class="news-card">
                <div class="news-image">
                    <img src="${item.image}" alt="${item.title}">
                </div>
                <div class="news-content">
                    <div class="news-date">${formatDate(item.date)}</div>
                    <h2 class="news-title">${item.title}</h2>
                    <p class="news-excerpt">${item.description}</p>
                </div>
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