//? Building a Popup

const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper')

const close = document.querySelector('.popup-close');

button.addEventListener('click', e => {
    popup.style.display = 'block';
    //* Display of popup-wrapper (containg all popup tags) goes from 'none(invisible)' to 'block'
});


close.addEventListener('click', e => {
    popup.style.display = 'none';   //* Toggle the display back to none
})

//? Now, we add an eventlistener to the popup itself
popup.addEventListener('click', e => {
    popup.style.display = 'none';   // Display, if we click anywhere on the screen
})