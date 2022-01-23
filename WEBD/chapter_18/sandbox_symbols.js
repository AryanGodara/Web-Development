//? Symbols
// Each symbol is completely unique, no two symbols can be equal to each other

const a = Symbol();
const b = Symbol();

console.log(a , typeof(a));
console.log(a , typeof a );
console.log(b) ;
console.log(a==b);
console.log(a===b);

const c = Symbol('a generic name');
const d = Symbol('a generic name');
console.log(c==d);
console.log(d===c);

const ninja = {} ;
ninja.age = 30 ;
ninja['belt'] = 'orange';
console.log(ninja);
ninja['belt'] = 'black';
console.log(ninja);

console.log('\n');

ninja[a] = 'shaun';
ninja[b] = 'ryu';

console.log(ninja);