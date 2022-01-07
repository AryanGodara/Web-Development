const correctAnswers = ['B', 'B', 'B', 'B'];

const form = document.querySelector('.quiz-form');

const result = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0 ;

    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    // for ( let i = 0 ; i < 4 ; i++ )
    //     if ( correctAnswers[i] == userAnswers[i] )
    //         score++ ;

    userAnswers.forEach( (answer, index) => {
        if ( answer === correctAnswers[index] )
            score += 25 ;
    });

    // Show the result on the webpage
    // First, we scroll t othe top
    window.scrollTo(0,0);      //! We don't need to right window

    result.classList.remove('d-none');

    let output = 0;

    const timer = setInterval (() => {
        result.querySelector('span').textContent = `${output}%`; // Change 0% to the actual score

        if ( output === score )
            clearInterval(timer);   // Stop animating
        else
            output++;
    }, 70);
});


// window object (global object)
// console.log('hello');
// window.console.log('hello');

// alert('hello');
// window.alert('hello');

//? Both the pair of above statements are equivalent, as window is the 'global' object, so we don't have to write window. ...

//? Example of setInterval

// setInterval ( () => {
//     console.log('hello');
// },500);     // Keeps on console.loggin hello, every 500 millisecond
//* We have to stop it too

// let i = 0 ;
// const timer = setInterval ( () => {
//     console.log('hello');
//     i++;
//     if ( i === 5 )
//     {
//         clearInterval(timer);   // So, this stops when we reach i = 5
//     }
// 
// }, 1000);