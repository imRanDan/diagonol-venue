const events = [
    {
        title: "deadmau5 funhau5",
        date: "2024-03-15",
        time: "18:00 - 03:00",
        status: "On Sale", // or "Sold Out"
        image: "/assets/images/events/event1.jpg",
        ticketLink: "#"
    },
    {
        title: "Summer Underground",
        date: "2024-06-15",
        time: "22:00 - 06:00",
        status: "On Sale", // or "Sold Out"
        image: "/assets/images/events/event1.jpg",
        ticketLink: "#"
    },
    {
        title: "Winter Wonderland",
        date: "2024-12-15",
        time: "20:00 - 04:00",
        status: "On Sale", // or "Sold Out"
        image: "/assets/images/events/event1.jpg",
        ticketLink: "#"
    },
    {
        title: "New Years Bonanza ",
        date: "2024-01-01",
        time: "22:00 - 06:00",
        status: "On Sale", // or "Sold Out"
        image: "/assets/images/events/event1.jpg",
        ticketLink: "#"
    },
    // Add more events as needed
];

function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: '2-digit'
    });
}

function displayEvents(filteredEvents = events) {
    const container = document.getElementById('events-container');
    container.innerHTML = '';

    if (filteredEvents.length === 0) {
        container.innerHTML = `
            <div class="no-events">
                <h2>There are currently no events available for your filters</h2>
                <p>Maybe change your filters and you might find something that you think is really cool.</p>
            </div>
        `;
        return;
    }

    filteredEvents.forEach(event => {
        const eventCard = `
            <div class="event-card ${event.status === 'Sold Out' ? 'sold-out' : ''}">
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
        container.innerHTML += eventCard;
    });
}

function setupFilters() {
    const dateFrom = document.getElementById('date-from');
    const dateTo = document.getElementById('date-to');
    const hideSoldOut = document.getElementById('hide-sold-out');
    const clearFilters = document.querySelector('.clear-filters');

    function applyFilters() {
        let filtered = [...events];

        // Date filter
        if (dateFrom.value) {
            filtered = filtered.filter(event => event.date >= dateFrom.value);
        }
        if (dateTo.value) {
            filtered = filtered.filter(event => event.date <= dateTo.value);
        }

        // Availability filter
        if (hideSoldOut.checked) {
            filtered = filtered.filter(event => event.status !== 'Sold Out');
        }

        displayEvents(filtered);
    }

    dateFrom.addEventListener('change', applyFilters);
    dateTo.addEventListener('change', applyFilters);
    hideSoldOut.addEventListener('change', applyFilters);

    clearFilters.addEventListener('click', () => {
        dateFrom.value = '';
        dateTo.value = '';
        hideSoldOut.checked = false;
        displayEvents();
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    displayEvents();
    setupFilters();
});