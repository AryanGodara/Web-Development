//? Date-fns Library

const now = new Date()

// console.log(dateFns.isToday(now));
// console.log(dateFns.isFuture(now));

//* Formatting Options
console.log(dateFns.format(now, 'YYYY'));
console.log(dateFns.format(now, 'MMM'));
console.log(dateFns.format(now, 'MMMM'));
console.log(dateFns.format(now, 'Do'));
console.log(dateFns.format(now, 'dddd, Do, MMMM, YYYY'));
console.log(dateFns.format(now, 'dddd, Do, MMM, YYYY'));
console.log(dateFns.format());
// console.log(dateFns.format());
console.log('\n')

//? Comparing Dates
const before = new Date('February 1 2019 12:00:00');

console.log(dateFns.distanceInWords(now,before,{}));
console.log(dateFns.distanceInWords(now,before));   // now before OR before now :- Same output
console.log(dateFns.distanceInWords(now,before, {addSuffix:true})); // Adds 'ago' at the end
console.log(dateFns.distanceInWords());