// index.js

// Initialize EmailJS
(function() {
    emailjs.init("PKQbZgm2CyPxlj1tL"); // Replace with your EmailJS user ID
})();

document.addEventListener('DOMContentLoaded', () => {
    console.log("Contact page loaded.");

    const form = document.querySelector('.contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Send email using EmailJS
        emailjs.send("service_budcfoc", "template_rp8bqhb", {
            from_name: name,
            from_email: email,
            message: message
        })
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            alert(`Thank you, ${name}! Your message has been sent.`);
            form.reset();
        }, (error) => {
            console.log('FAILED...', error);
            alert('Sorry, there was an error sending your message. Please try again later.');
        });
    });
});
