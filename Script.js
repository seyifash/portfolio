const bar = document.querySelector('.hamburger');

console.log(bar);
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        console.log(bar);
        nav.classList.add('active');
        bar.style.display = 'none';
    })
} 
if (close) {
    close.addEventListener('click', (event) => {
        event.preventDefault();
        console.log(close);
        nav.classList.remove('active');
        bar.style.display = 'initial';
    })
}