document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#contact form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message. We will get back to you shortly.');
        form.reset();
    });
});
