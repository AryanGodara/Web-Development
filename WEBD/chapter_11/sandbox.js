//! date-fns.org
//* Website, library of a lot of useful date-time functions for JavaScript

// //? Dates and Times
// const date_rn = new Date(); // W/O any argument, stores the 'current' date
// console.log(date_rn);
// console.log(typeof(date_rn));   //OP: object

// // year, months, day, times
// console.log('getFullYear', date_rn.getFullYear());
// console.log('getMonth', date_rn.getMonth());
// console.log('getDate', date_rn.getDate());
// console.log('getDay', date_rn.getDay());
// console.log('getHours', date_rn.getHours());
// console.log('getMinutes', date_rn.getMinutes());
// console.log('getSeconds', date_rn.getSeconds());
// console.log('getMilliseconds', date_rn.getMilliseconds());
// console.log('getTime', date_rn.getTime());  // No. of milliseconds, since 00:00 hrs, 1st Jan, 1970

// // datestrings
// console.log('toDateString', date_rn.toDateString());
// console.log('toLocaleString', date_rn.toLocaleString());
// console.log('toDateString', date_rn.toDateString());
// console.log('toLocaleDateString', date_rn.toLocaleDateString());

// console.log('\n');

// //? Timestamps and Comparisons
// const before = new Date('February 1 2019 7:30:59');
// console.log(before);
// console.log('toLocaleString', before.toLocaleString());

// const date_difference = date_rn.getTime() - before.getTime() ;
// console.log('now.getTime() - before.getTime()', date_difference);


//? Building a Digital Clock

const clock = document.querySelector('.clock');

const tick = () =>{     // Responsible for updating the time on the digital clock every second
     
    const now = new Date() ;

    const h = now.getHours();    // Returns hours in 24 hr clock format (0-23)
    const m = now.getMinutes();  // 0-59
    const s = now.getSeconds();  // 0-59

    const html = `
    <span>${h}</span> :
    <span>${m}</span> :
    <span>${s}</span>
    `;

    clock.innerHTML = html ;
    //* Every second, we update the 'innerHTML' inside the 'div tag w/ class 'clock', to the 
    //* template string 'html' defined above
};

setInterval (tick, 1000);   // Call the 'tick' function, after every 1 second