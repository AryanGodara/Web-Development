//? More DOM Events

const copy = document.querySelector('.copy-me');

//* Copy is an event in Javascript(When the user copy something on the webpage)
copy.addEventListener('copy', () => console.log('Oi Mate!! My content is copyrighted') );

const box = document.querySelector('.box');

//* Eventlistener for every time the mouse 'moves' inside this tag 'box'
box.addEventListener('mousemove', e => {
    // console.log(e);
    // console.log(e.offsetX, e.offsetY);
    box.textContent = `x pos = ${e.offsetX} ; y pox = ${e.offsetY}`;
});

//* Event for scroling
document.addEventListener('wheel', e => {
    console.log(e);
})