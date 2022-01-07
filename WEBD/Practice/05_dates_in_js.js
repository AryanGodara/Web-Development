/*
* A Javascript Date instance represents a single moment in time based on the number of milliseconds
* elapsed since 1 January, 1970 UTC.
* 
* 
? Creating Date Instance :-
* 
? There are four constructors we can use to create a 'Date' object, defined below :-
* 
? 1. Using 'new' Date() :
* The default constructor creates a JavaScript Date object for the current date and time (according
* to your system settings) .
* 
? 2. Using 'new' Date(value) :
* This constructor has a parameter 'value', which is an integer representing the number of 
* milliseconds elapsed since 1 January, 1970 UTC (this is a Unix Epoch, though you should keep in
* mind that most Unix timestamp functions count in seconds).
* 
? 3. Using 'new' Date(dateString) :
* This constructor has a parameter 'dateString', which is a String describing a date. The dateString
* must be in a format recognized by the 'Date.parse()' function, such as MM/DD/YYYY or Month Day, Year.
* For example, '01/01/1980' and 'Jan 1, 1980' are both strings that can be successfully parsed 
* using the 'parse' function.
* 
? 4. Using new Date(year, month, day, hour, minutes, seconds, milliseconds) :
* This constructor has the following parameters :-
* year: An integer denoting the calender year. Values from 0 through 99 map to the years 1900-1999.
* month: A one of two digit integer denoting the 'zero-indexed' month. 0=January,..., 11=December.
* day: Optional. An integer denoting the specific  day number within the calender month.
* hour: Optional. An integer denoting the hour of the day.
* minute: Optional. An integer denoting the minute segment of a time.
* second: Optional. An integer denoting the second segment of a time.
* millisecond: Optional. An integer denoting the millisecond segment of a time.
*/


var date1 = new Date('10/11/2009');
console.log(date1.toString());
console.log(date1.toISOString());

date1 = new Date('2016, 04, 22');
console.log(date1.toString());
console.log(date1.toISOString());


date1 = new Date('3 January, 2022');
console.log(date1.toString());
console.log(date1.toISOString());

//? Date 'get' Methods :-
/*
? 1. Date.getTime() :
* Get the full time in milliseconds elapsed since January 1, 1970.
* 
? 2. Date.getFullYear() :
* Get the four-digit year (yyyy).
* 
* 3. Date.getMonth() :
? Get the Date object's month as a zero-indexed number (0-11).
* 
? 4. Date.getDate() :
* Get the Date object's date as a number (1-31).
* 
? 5. Date.getDay() :
* Get the Date object's day as a number (0-6)
* 
? 6. Date.getHours() :
* Get the Date object's hours (0-23)
* 
? 7. Date.getMinutes() :
* Get the Date object's minutes (0-59)
* 
? 8. Date.getSeconds() :
* Get the Date object's seconds (0-59)
* 
? 9. Date.getMilliseconds() :
* Get the Date object's milliseconds (0-999)
*/

let date = new Date('Feb 3, 1987 12:34:56:789');            //? One way to initialize a date object

let date2 = new Date ( 1987 , 1 , 3 , 12 , 34 , 56 , 789 ); //? Another way to do it

console.log("date: " + date);
console.log("date.getDate(): " + date.getDate());
console.log("date.getDay(): " + date.getDay());
console.log("date.getFullYear(): " + date.getFullYear());
console.log("date.getHours(): " + date.getHours());
console.log("date.getMilliseconds(): " + date.getMilliseconds());
console.log("date.getMinutes(): " + date.getMinutes());
console.log("date.getMonth(): " + date.getMonth());
console.log("date.getSeconds(): " + date.getSeconds());
console.log("date.getTime(): " + date.getTime());
console.log("date.getYear(): " + date.getYear());
console.log("date.toDateString(): " + date.toDateString());