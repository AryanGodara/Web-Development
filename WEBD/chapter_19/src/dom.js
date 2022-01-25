console.log('dom file');

const body = document.querySelector('body');

// export const styleBody = () => {
const styleBody = () => {
    body.style.background = 'peachpuff';
};

// export const addTitle = (text) => {
const addTitle = (text) => {
    const title = document.createElement('h1');
    title.textContent = text ;
    body.appendChild(title);
};

const contact = 'mario@netninja.com'

// Instead of using 'export' for individual things, we can also do it at the bottom

export { styleBody, addTitle, contact };