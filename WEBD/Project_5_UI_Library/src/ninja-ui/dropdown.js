import './styles/dropdown.css'

class Dropdown {
    constructor(container) {
        // container is the div that contains the 'triggers' and the 'content' for the triggers
        this.container = container;
        this.trigger = container.querySelector('.trigger');
            // Find the element with class 'trigger' inside the 'container' element
        this.content = container.querySelector('.content');
            // This is the content that we want to display, when someone triggers the dropdown
    }
    init () {
        this.trigger.addEventListener('click', () => {
            this.trigger.classList.toggle('active');
            this.content.classList.toggle('active');
                // If we click on the trigger w/o 'active' class, it gets added, and if it already
                // exited, then when we click on the trigger, it gets removed

        })
    }
}

export { Dropdown as default }