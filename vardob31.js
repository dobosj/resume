document.querySelector('.btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#services').scrollIntoView({ behavior: 'smooth' });
});

document.querySelectorAll('.image-container').forEach(container => {
    container.addEventListener('mouseover', function() {
        const description = this.getAttribute('data-description');
        const popup = document.createElement('div');
        popup.className = 'popup';
        popup.innerText = description;
        document.body.appendChild(popup);
        popup.style.display = 'block';
    });

    container.addEventListener('mouseout', function() {
        const popup = document.querySelector('.popup');
        if (popup) {
            popup.remove();
        }
    });
});
