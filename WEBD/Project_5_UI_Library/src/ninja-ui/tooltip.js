import './styles/tooltip.css'

class Tooltip {
    constructor(element){    // element is the thing/component that we want to use tooltip on
        this.element = element;
        this.message = element.getAttribute('data-message');    // message = what we want to display
    }
    init () {       //? We call this function to initialize our component
        const tip = document.createElement('div');  //* We'll see this 'tip/short help' when we hover over the 'element' on the webpage
        tip.classList.add('tip');   // Add the class 'tip' 
        tip.textContent = this.message;

        //TODO: Now that the element is ready, we want to append it to the DOM now
        this.element.appendChild(tip);

        this.element.addEventListener('mouseenter' , () => {    //? mouseenter == hover over it
            tip.classList.add('active');
        });
        this.element.addEventListener('mouseleave' , () => {    //? mouseleave == stop hovering
            tip.classList.remove('active');
        });
    }
}

export { Tooltip as default }