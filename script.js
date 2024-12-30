// Navigation Toggle for Mobile
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scrolling
const links = document.querySelectorAll('nav .nav-links a');

for (const link of links) {
    link.addEventListener('click', smoothScroll);
}

function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    const offsetTop = targetSection.offsetTop - 60; // Adjust for fixed nav height

    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
    });

    // Close mobile menu after clicking
    if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    }
}

// Contact Form Submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Simple form validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if(name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Here you can add AJAX request to send form data to your server
    // For demonstration, we'll just reset the form and show an alert
    contactForm.reset();
    alert('Thank you for contacting us! We will get back to you soon.');
});

// Read More Buttons for Sermons
const readMoreButtons = document.querySelectorAll('.read-more');

readMoreButtons.forEach(button => {
    button.addEventListener('click', () => {
        const sermon = button.parentElement;
        const moreText = document.createElement('p');
        moreText.textContent = "This is a more detailed description of the sermon. You can add additional insights, scriptures, and applications here to provide more value to your congregation.";

        if (!sermon.contains(moreText)) {
            sermon.appendChild(moreText);
            button.textContent = 'Read Less';
        } else {
            sermon.removeChild(moreText);
            button.textContent = 'Read More';
        }
    });
});
