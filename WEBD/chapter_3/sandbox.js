//? For Loops
//TODO : For Loops in Javascript are almost the same as For Loops in C++. Lucky me :)
for ( let i = 0 ; i < 5 ; i++ )
    console.log(i+1);


//? While Loops
//TODO : While Loops in Javascript are almost the same as While Loops in C++. Lucky me :)
let i = 5 ;
while ( i > 0 )
    console.log(i--);


//? Do-While Loops
//TODO : Do-While Loops in Javascript are almost the same as Do-While Loops in C++. Lucky me :)
console.log('While Loop Node. 1');
i = 5 ;
do {
    console.log(i--)    // Semicolons aren't even necessary
}while(i>0)             // Semicolons aren't even necessary

console.log('While Loop Node. 2');
i=5
do 
    console.log(i--);
while(i);

console.log('While Loop Node. 3');
i=5
do console.log(i--); while(i);

console.log('While Loop Node. 4');
i=5
do console.log(i--); 
    while(i);

//! As Shown above, the syntax for do while loops is very liberal.


//? If-Else Statements
i = 2;
if (i)
    console.log('i is not zero');
if (!i)
    console.log('i is zero')
else if (i<0)
    console.log('i is less than 0')
else
    console.log('i is greater than 0')

//! Everything else like the logical operators, break, continue, etc. all work the same here
//! Variables and block scopes are also the same, so are the switch statements.

//TODO Writing the switch statements' syntax, just in case lol

const grade = 'Z';

switch(grade)
{
    case 'A':
        console.log('Grade is A');
        break;
    case 'B':
        console.log('Grade is B');
        break;
    case 'C':
        console.log('Grade is C');
        break;
    case 'D':
        console.log('Grade is D');
        break;
    case 'E':
        console.log('Grade is E');
        break;
    case 'F':
        console.log('Grade is F');
        break;
    default:
        console.log('Idk what to do now :(')
}