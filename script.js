document.getElementById('learnMoreBtn').addEventListener('click', function() {
    window.location.href = '#about';
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for contacting us!');
});