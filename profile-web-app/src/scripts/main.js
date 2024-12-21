document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.button');
    button.addEventListener('click', (event) => {
        event.preventDefault();
        document.body.style.backgroundColor = '#e0f7fa';
    });
});