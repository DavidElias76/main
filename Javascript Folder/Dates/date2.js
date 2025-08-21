function dateAlgo(date, days){

    let dateCopy = new Date(date); // create a new date object
    // 
    dateCopy.setDate(dateCopy.getDate() - days); // update the date by subtracting the days from the date

    return dateCopy; // return the new date object  
}

let date = new Date(2021, 3, 5); // April 5, 2021

let result = dateAlgo(date, 2); // subtract 2 days

document.write("The date is: " + result.toDateString() + "<br>");
document.write("The date is: " + result.toUTCString() + "<br>");
document.write("The date is: " + result.toISOString()+ "<br>");


let date2 = new Date();

let date3 =  Date.now(); // get the current date and time in milliseconds since January 1, 1970

document.write("The date is: " + date3.toString() + "<br>");

document.write("The date is: " + date2.getMilliseconds() + "<br>");