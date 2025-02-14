const events = [
    {
        title: "DIAGONAL Opening Night: Aphex Twin",
        date: "2024-11-15",
        time: "22:00 - 06:00",
        status: "Sold Out",
        image: "/assets/images/whatson1.jpg",
        ticketLink: "#"
    },
    {
        title: "Four Tet + Floating Points",
        date: "2024-11-22",
        time: "22:00 - 06:00",
        status: "Sold Out",
        image: "/assets/images/whatson2.jpg",
        ticketLink: "#"
    },
    {
        title: "Bonobo: Fragments Live",
        date: "2024-12-06",
        time: "20:00 - 02:00",
        status: "On Sale",
        image: "/assets/images/whatson3.png",
        ticketLink: "#"
    },
    {
        title: "Jamie xx All Night Long",
        date: "2024-12-13",
        time: "22:00 - 06:00",
        status: "On Sale",
        image: "/assets/images/whatson4.jpg",
        ticketLink: "#"
    },
    {
        title: "New Year's Eve: Chemical Brothers",
        date: "2024-12-31",
        time: "21:00 - 07:00",
        status: "Sold Out",
        image: "/assets/images/whatson5.jpg",
        ticketLink: "#"
    },
    {
        title: "New Year's Day: CDW Live",
        date: "2025-01-01",
        time: "16:00 - 02:00",
        status: "On Sale",
        image: "/assets/images/whatson6.jpg",
        ticketLink: "#"
    },
    {
        title: "Jon Hopkins: Polarity",
        date: "2025-01-15",
        time: "19:00 - 23:00",
        status: "On Sale",
        image: "/assets/images/whatson7.jpg",
        ticketLink: "#"
    },
    {
        title: "Moderat Live",
        date: "2025-01-22",
        time: "20:00 - 02:00",
        status: "Sold Out",
        image: "/assets/images/whatson8.jpg",
        ticketLink: "#"
    },
    {
        title: "Tale Of Us: Afterlife",
        date: "2025-01-29",
        time: "22:00 - 06:00",
        status: "On Sale",
        image: "/assets/images/whatson9.jpg",
        ticketLink: "#"
    },
    {
        title: "Burial DJ Set",
        date: "2025-02-08",
        time: "22:00 - 05:00",
        status: "On Sale",
        image: "/assets/images/whatson10.jpg",
        ticketLink: "#"
    },
    {
        title: "Max Cooper: 4D Experience",
        date: "2025-02-15",
        time: "20:00 - 02:00",
        status: "On Sale",
        image: "/assets/images/whatson11.jpg",
        ticketLink: "#"
    },
    {
        title: "Röyksopp Live",
        date: "2025-02-22",
        time: "20:00 - 02:00",
        status: "On Sale",
        image: "/assets/images/whatson12.jpg",
        ticketLink: "#"
    }
];

function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: '2-digit'
    });
}

function displayEvents() {
    const availableContainer = document.getElementById('available-events-grid');
    const soldOutContainer = document.getElementById('sold-out-events-grid');
    
    availableContainer.innerHTML = '';
    soldOutContainer.innerHTML = '';

    events.forEach(event => {
        const eventCard = `
            <div class="event-card">
                <div class="event-image">
                    <img src="${event.image}" alt="${event.title}">
                </div>
                <div class="event-info">
                    <h3>${event.title}</h3>
                    <p class="event-date">${formatDate(event.date)}</p>
                    <p class="event-time">${event.time}</p>
                    <div class="event-status">
                        ${event.status === 'Sold Out' 
                            ? '<span class="sold-out-badge">Sold Out</span>'
                            : `<a href="${event.ticketLink}" class="ticket-button">Get Tickets</a>`
                        }
                    </div>
                </div>
            </div>
        `;
        
        if (event.status === 'Sold Out') {
            soldOutContainer.innerHTML += eventCard;
        } else {
            availableContainer.innerHTML += eventCard;
        }
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', displayEvents);