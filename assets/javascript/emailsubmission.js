// TODO: NOT WORKING implement email event listener and send client for form
const form = document.getElementById('email');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    const mailtoLink = `mailto:cjek243@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
})