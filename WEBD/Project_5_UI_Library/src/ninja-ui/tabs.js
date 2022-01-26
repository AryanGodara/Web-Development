import './styles/tabs.css';

class Tabs{
    constructor (container) {
        this.container = container;
        this.tabs = container.querySelectorAll('.trigger');
    }
    init () {
        this.tabs.forEach( tab => {
            tab.addEventListener('click', e => {
                // We want to give 'active' class to the trigger of the tab we click on(and its content), 
                // and take it away from the rest of the 'triggers/tabs'
                if ( e.target.tagName == 'LI' ) {
                    this.toggleTabs(e);
                    this.toggleContent(e);
                }
            });
        });
    }
    toggleTabs (e) {
        // remove current active classes from any of the tabs
        this.tabs.forEach ( tab => tab.classList.remove('active') );
        // add new active class ONLY to the clicked tab
        e.target.classList.add('active');
    }
    toggleContent (e) {
        // remove current active classes from any of the tabs' content
        this.container.querySelectorAll('.content').forEach ( item => item.classList.remove('active') );
        // add new active class ONLY to the clicked tab's content
        const selector = e.target.getAttribute('data-target');
        const content = this.container.querySelector(selector);
        content.classList.add('active');
    }
    // toggleTabs(e){
    //     // remove current active classes
    //     this.tabs.forEach(tab => tab.classList.remove('active'));
    //     // add new active class
    //     e.target.classList.add('active');
    // }
    // toggleContent(e){
    //     // remove current active classes
    //     this.container.querySelectorAll('.content')
    //         .forEach(item => { item.classList.remove('active');
    // });
    //     // add new active class
    //     const selector = e.target.getAttribute('data-target');
    //     const content = this.container.querySelector(selector);
    //     content.classList.add('active');
    // }
}

export { Tabs as default }