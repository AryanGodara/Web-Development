function random(num){
    return Math.floor(Math.random()*num);
}
function bgChange () {
    return `rgb(${random(255)},${random(255)},${random(255)})`;
}
const container = document.querySelector('#container');
container.addEventListener( 'click' , (e) => {
    e.target.style.backgroundColor = bgChange();
    e.currentTarget.style.borderColor = bgChange();
})

// Suppose there are 4 buttons inside a 'canvas, with each having text inside them, indicating
// a certain color. Now, add an event listener to their parent, such that, whenever we click any
// of the buttons, there background colour changes to the 'color' written inside them in the form
// of text. Eg.: Button that says 'purple', should change its backgroun to purple color when clicked.

const buttonPar = document.querySelector('.button_par');

buttonPar.addEventListener('click' , (e) => {
    e.target.style.backgroundColor = e.target.textContent;
});