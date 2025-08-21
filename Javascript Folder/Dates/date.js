let now = new Date();

// alert(now);

document.write("The date is " + now + "<br>");


// DATE MILLISECONDS

let Jan01_1970 = new Date(0);

document.write("The date in milliseconds: " + Jan01_1970 + "<br>");

// now add 24 hours, get 02.01.1970 UTC+0
let Jan02_1970 = new Date(24 * 3600 * 1000);

document.write("The date in milliseconds: " + Jan02_1970 + "<br>");

// alert( Jan02_1970 );



// DATE STRINGS

let date = new Date("2017-01-26");

document.writeln("The date strings : " + date + "<br>");



// new Date(year, month, date, hours, minutes, seconds, ms) - it follows the following format

let date2 = new Date(2011, 0, 1, 2, 3, 4, 567);

document.write("The date format: " + date2 + "<br>");


// DATE METHODS

// DISPLAY DATES

    // TODATESTRING() - converts date to more readable format

    const now2 = new Date();

    document.write("The date format: " + now2.toDateString() + "<br>");


    // TOUTCSTRING()- (coordniated universal time) - converts date to more readable format

    document.write("The date format: " + now2.toUTCString() + "<br>");

 
    // The toISOString() - YYYY-MM-DDTHH:mm:ss.sssZ - suitable for machine readable format like JSON file

    document.write("The date format: " + now2.toISOString() + "<br>");// uses zulu time 




// ACCESSSING DATE COMPONETS - GET() METHODS

const d = new Date();

// document.write("The date format to get the day: " + d);           

document.write("The date format to get the day: " + d.getDate() + "<br>");

// document.write("The date hours: " + d.gethours(); - (0-23)           
// document.write("The date minutes: " + d.getMinutes(); - (0-59)           
// document.write("The date seconds: " + d.getSeconds(); - (0-59)         
// document.write("The date milliseconds: " + d.getMilliseconds(); (0-999)           
// document.write("The date format: " + d.getFullYear(); -  four digits number
// document.write("The time is : " + d.getTime(); - get milliseconds since 1970 january 1st



// UTC GET METHODS - is the same as the get methods

document.write("The date today in utc time is: " + d.getUTCDate() + "<br>");
// document.write(d.getUTCDay());
// document.write(d.getUTCFullYear());
// document.write(d.getUTCHours());
// document.write(d.getMinutes());
// document.write(d.getUTCMilliseconds());
// document.write(d.getUTCSeconds());
// document.write(d.get);



// SET() METHODS

const r = new Date("January 01, 2025");

document.write(r + "<br>"); 

r.setFullYear(2023);        
// r.setHours(20);        
// r.setDate(25);        
// r.setMinutes(20);        
// r.setSeconds(200);        
// r.setTime();        
// r.setMilliseconds(300);
// r.setMonth(8);    


document.write("The year is now: " + r + "<br>");
// document.write("The month is now: " + r);
// document.write("The hours is now: " + r);
// document.write("The date is now: " + r);
// document.write("The miniutes is now: " + r);
// document.write("The seconds is now: " + r);
// document.write("The time now: " + r);
// document.write("The milliseconds is now: " + r);



// AUTOCORRECTION IN JAVASCRIPT INFO

const date3 = new Date(2013, 1, 28);

date3.setDate(date3.getDate() + 2);

document.write(date3 + "<br>");


const date4 = new Date(2025, 3, 20);

date3.setDate(date4.getMilliseconds() + 300);

document.write("The milliseconds and 70: " + date4 + "<br>");



// Date to number, Date difference

let start = new Date(); // start measuring time

//  do the job

for (let i = 0; i < 10000; i++){

    let dosomething = i * i * i;
    
}

let end = new Date(); // end measuring time

document.write(`The loop took  ${end - start} ms<br>`);



// EXAMPLE 2
let start2 = new Date(); // start measuring time and get the milliseconds
document.write("Start Time: " + start2.toLocaleString() + "<br>"); // start time


// do the job - to know the time it took to run and stop the function

for (let i = 0; i < 100000; i++) {

    let doSomething = i * i * i;
}

let end2 = new Date(); // end measuring time and get the milliseconds 

document.write("End Time: " + end2.toLocaleString() + "<br>"); // end time


document.write(`The loop took  ${end2 - start2} ms<br>`);



// DATE.NOW()-  retursn the milliseconds since the jan 1st 1970 and present

let start3 = Date.now();

document.write("Start Time: " + start3 + "<br>"); // start time

for(let i = 0; i < 100000; i++){
    
    let dosomething2 = i * i * i;

}

let end3 = Date.now();

document.write("End Time: " + end3 + "<br>"); // end time

document.write(`The loop took  ${end3 - start3} ms<br>`);


/**
 ** TODO: TO BE REVISITED
**/
// BENCHMARKING - testing execution speed of two functions - 
        

function diffSubtract(date1, date2) {

    return date2 - date1; // jaascript converts the date into numbers before execution 
}

function diffGetTime(date1, date2) {

    return date2.getTime() - date1.getTime(); // get the dates in milliseconds
}

function bench(f) {

    let date1 = new Date(0); // Jan 1, 1970 (epoch time) or utc time with zero milliseconds

    let date2 = new Date(); // current time and date

    let start = Date.now(); // date to be returned in miliseconds

for (let i = 0; i < 100000; i++) f(date1, date2); // runs the function 100000 times

    return Date.now() - start; // Return total time taken
}

// alert( 'Time of diffSubtract: ' + bench(diffSubtract) + 'ms' );
// alert( 'Time of diffGetTime: ' + bench(diffGetTime) + 'ms' );

document.write('Time of diffSubtract: ' + bench(diffSubtract) + 'ms<br>');

document.write('Time of diffGetTime: ' + bench(diffGetTime) + 'ms<br>');



// practice

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const newDate = new Date("2021-03-25");   

const month = months[newDate.getMonth()]; // get the month in string 

document.writeln("The month is: " + month + "<br>"); // get the month in string



const nowDate = new Date();

// add 1 to the month because it starts from  and are zero based

const newMonth = months[nowDate.getMonth()]; // get the month in number

document.writeln("The month is: " + newMonth + "<br>"); // get the month in number


// get tthe day from the array

const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]; // array index starts at 0

const dayNow = new Date("2021-03-25");

const beforeNow = dayNow.getDay(); // get the day in string

let nowWeek = days[dayNow.getDay()]; // 4

document.writeln("The day is: " + beforeNow + "<br>"); // get the day in string 

document.writeln("The day is: " + nowWeek + "<br>"); // get the day in string


// getTime()

const nowTime = new Date("2021-03-25");

const timeNow = nowTime.getTime(); // get the time in milliseconds since january 1st 1970

document.writeln("The time milliseconds: " + timeNow + "<br>"); // get the time in milliseconds



// Tasks

 let start1 = new Date(); // start measuring time and get the milliseconds

 for(let i = 0; i < 100000; i++){

    let s = i * i * i;

 }

 let end1 = new Date(); // end measuring time and get the milliseconds

document.writeln("The time is: " + (end1 - start1) + "<br>"); // get the time in milliseconds


// tolocaleDateString()
// - allows you to format date based on users locale and tkakes tow options locale and options

// locale

const now10 = new Date()

document.write(now10.toLocaleDateString("en"));


// options
// - allows you to specify the format of the date string using an object

const nowDate2 = new Date();

const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
};

document.write(nowDate2.toLocaleDateString("en-GB", options));


// tolocaleTimeString();

// get the hour minutes, seconds and AM/PM FORMAT : HH:MM:SS: AM/PM

const nowTime2 = new Date()

document.write(nowTime2.toLocaleTimeString());// get the time in AM and PM





