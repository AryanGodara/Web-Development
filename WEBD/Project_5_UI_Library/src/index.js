// import './test.css';
    //* Webpack runs the CSS inside the 'test.css' file through this 'index.js' file with the
    //* help of css-loader and style-loader, that we downloaded to dev dependensies

import Tooltip from './ninja-ui/tooltip'    // Import this js file from the given directory
import Dropdown from './ninja-ui/dropdown';
import Tabs from './ninja-ui/tabs';
import Snackbar from './ninja-ui/snackbar';


//? Create a tooltip
const tooltip = new Tooltip( document.querySelector('.tooltip') );
    //* We create a new tooltip instance using 'new' and a constructor, w/ the span tag having
    //* class 'tooltip' as the parameter.

tooltip.init();


//? Create (two) dropdowns
const dropdowns = document.querySelectorAll('.dropdown');   // Currently, there are two of these

dropdowns.forEach( dropdown => {
    const instance = new Dropdown(dropdown);    // Create a new Drowdown class instance
    instance.init();
});


//? Create tabs
const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();


//? Add/Create Snackbar
const snackbar = new Snackbar();
snackbar.init();

const button = document.querySelector('button');    // Only button on the page lol
button.addEventListener('click', () => {
    snackbar.show('You clicked me :)');
})