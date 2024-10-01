// Smooth scroll functionality for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple alert on clicking contact information
document.querySelector('#contact').addEventListener('click', function() {
    alert("Contact us via email or phone!");
});
