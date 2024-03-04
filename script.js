// JavaScript for dynamically creating event tiles
document.addEventListener('DOMContentLoaded', function () {
    const eventTilesContainer = document.getElementById('eventTiles');

    // Example events (you can replace this with actual data)
    const events = [
       
        { title: 'Geeksphere  team hiring', date: 'march 6 2024',buttontag:'APPLY',url: 'https://forms.gle/BTYPntmXiVgW7P119'}
        // Add more events as needed
    ];

    // Create event tiles dynamically
    events.forEach(event => {
        const eventTile = document.createElement('div');
        eventTile.className = 'event-tile';
        eventTile.innerHTML = `
                        <h3>${event.title}</h3>
                        <p>last Date: ${event.date}</p>
                        <button onclick="window.location.href='${event.url}'">${event.buttontag}</button>`;
        eventTilesContainer.appendChild(eventTile);
    });
});
