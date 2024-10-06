// Smooth scroll functionality for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



document.getElementById('searchButton').addEventListener('click', function() {
    const searchTerm = document.getElementById('searchTerm').value;
    fetchArchitectureImages(searchTerm);
});

async function fetchArchitectureImages(searchTerm) {
    const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(searchTerm)}&client_id=UKVo8BUZyi6RmJXPXY1JDnuNXwpLDAKoP4ZxKZPfEBk`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayImages(data.results);
    } catch (error) {
        console.error('Hiba történt a képek lekérése közben:', error);
    }
}

function displayImages(images) {
    const imageResultsDiv = document.getElementById('imageResults');
    imageResultsDiv.innerHTML = ''; 

    if (images.length > 0) {
        images.forEach(image => {
            const imageCard = document.createElement('div');
            imageCard.className = 'image-card';
            imageCard.innerHTML = `<img src="${image.urls.small}" alt="${image.alt_description}">`;
            imageResultsDiv.appendChild(imageCard);
        });
    } else {
        imageResultsDiv.innerHTML = '<p>Nincs találat.</p>';
    }
}
