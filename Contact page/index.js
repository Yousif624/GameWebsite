// index.js

document.addEventListener('DOMContentLoaded', () => {
    console.log("Contact page loaded.");

    const form = document.querySelector('.contact-form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // For now, just display a message in the console and alert
        console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
        alert(`Thank you, ${name}! Your message has been sent.`);
        
        // Clear the form fields
        form.reset();
    });
});
