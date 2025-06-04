// IF ELSE STATEMENTS
// EXAMPLE OF IF ELSE STATEMENTS

const time = new Date().getHours(); // get the current hour of todays date

let greeting; // declare a variable to store the greeting message

if(time < 12){
    greeting = "Good Morning!"; // assign the greeting message for morning
}else if(time< 20){
    greeting = "Good Afternoon!"; // assign the greeting message for afternoon
}else{
    greeting = "Good Evening!"; // assign the greeting message for evening
}

document.writeln(greeting + "<br>"); // display the greeting message on the web page  



// EXAMPLE OF IF ELSE STATEMENTS

let creditScore = parseInt(prompt("Enter the credit score: ")); // get the credit score from the user and convert it into an integer
let annualIncome = parseInt(prompt("Enter annual income: ")); // Annual income in dollars and convert into an integer
let loanStatus; // declare a variable to store the loan status

if (creditScore >= 720 && annualIncome >= 60000) {

    loanStatus = "You are eligible for a loan.";

} else if (creditScore <= 700 && annualIncome <= 50000) {

    loanStatus = "You are eligible for standard loan rates.";

} else if (creditScore <= 500 && annualIncome <= 30000) {

    loanStatus = "Eligible for supreme loan rates.";

} else if (creditScore < 650) {

    loanStatus = "You are not eligible due to low credit score.";

} else {

    loanStatus = "You are not eligible for a loan due to insufficient funds.";
}


document.writeln(loanStatus + "<br>"); // display the loan status on the web page


// IF ELSE SATEMENTS

let max = 5;
let min = 1;
let randomNumber = Math.floor(Math.random()*(max -min) + min); // generate a random number between 1 and 5 and round it down to the nearest integer
let user;

if(randomNumber >= 1 && randomNumber <= 2){
    user = "You are a beginner!";
} else if(randomNumber >= 3 && randomNumber <= 4){  
    user = "You are a professional!";
}else if(randomNumber === 5){
    user= "You are a master!";
}else{
    user= "Number is not in the range!";
}

document.writeln("Random Number:", randomNumber); // display the random number on the web page
document.writeln(user + "<br>"); // display the user status on the web page


// SWITCH STATEMENTS

// EXAMPLE OF SWITCH STATEMENTS

let day;

switch(new Date().getDay()){
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day ="Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    default:
            day = "Invalid day!";
            break;
}

document.writeln("Today is: " + day + "<br>"); // display the current day of the week on the web page


// JAVASCRIPT FUNCTIONS

// EXAMPLE OF FUNCTION

// ACCESSING OUTER VARIBALES

let userName = "john"; // declare a variable to store the user name

function showMessage (){

     let userName =  "Bob";

     let message = "hello " + user;
}

document.writeln(userName + "<br>"); // display the username outside the function

showMessage(); // call back the function to display the message 

document.writeln(userName + "<br>"); // display the new username after calling back the function


// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.


function pow(x, n){
    let result = x;

    for(let i = 1; i < n ; i++){
        result *= x; // multiply the result by x
    }

    return result; // return the final result
}

let x = prompt("Enter the value of x?: ");
let n = prompt("Enter the value of n?") // get the value of x from the user

if(n < 1){
    alert(`power ${n} is not supported, please enter a positive number`); // display an alert message if the power is less than 1
} else(pow(x, n)); // call the function to calculate the power of x


// JAVASCRIPT FUNCTIONS

// BUILDING AN EMAIL MASKER


function maskedEmail(email){
    
    const atIndex = email.IndexOf("@"); // get the index of @ in the email address = 9
    const username = email.slice(0, atIndex); // get the username from the email address  (0, 9)
    const domain = email.slice(atIndex); // get the domain from the email address ( starting position 9 to the end)

    if(username.length <= 4){
        
         return username + domain; // if the username is greater than 4, return the username and domain
    }

    const masked = username[0] + "*".repeat(username.length -2) + username[username.length -1];

    return masked + domain;

}

const email = prompt("Enter your email address: "); // get the email address from the user  

// const email = "apple.pie@example.com"; // example email address

const result =  maskedEmail(email); // call the function to mask the email address

document.writeln("Masked Email: " + result);; // display the masked email address on the web page 


// JAVASCRIPT ARRAY SEARCH METHODS


// loop through an array

const fruits = ["apples", "banana", "oranges", "Mango"];

let text2 = "<ul>";

for(let i = 0; i < fruits.length; i++){
    text2 += "<li>" + fruits[i] + "</li>"; // add each fruit to the list
}   
text += "</ul>"; // close the list

document.writeln(text2); // display the list of fruits on the web page


// using the for key in the for loop   

const fruits2 = ["apples", "banana", "oranges", "Mango"];   

let text3 = "<ul>";

for(let key in fruits2){
    text3+= "<li>" + key[i] + "<li>"; // add each fruit to the list
}

text3 += "</ul>"; // close the list

document.writeln(text3); // display the list of fruits on the web page


// find() method
// The find() method returns the value of the first element that passes a test. If no values pass the test, undefined is returned.


const numbers = [4, 9, 16, 25, 29];

let first = numbers.find(myfunction);

function myfunction(value, index, array){
    return  value > 20; // return the first number that is greater than 20  

}

document.writeln("The first number greater than 20 is: " + first); // display the first number greater than 20 on the web page  


// number are stored in lexicographical order  


const points = [40, 100, 1, 5, 25, 10];

const asscending = points.sort((x, y) => {return x- y}); // sort the numbers in ascending order

document.writein("Ascending Order: " + asscending); // display the numbers in ascending order on the web page

const decending = points.sort((x, y) => {return y - x})// sorting in descenfding order

document.writeln("Descending Order: " + decending); // display the numbers in descending order on the web page  


// FIND TTHE LOWEST AND HIGHEST VALEU IN ASCENDING AND DESCENDING ORDER

// ASCENDING ORDER

const points2 = [40, 100, 1, 5, 25, 10];

points2.sort((a, b) => {return a - b});


document.writeln("The lowest value in ascendong oerder is: " + points2[0])// lowest value

// DESCENDING ORDER

points2.sort((a, b) => {return a - b});

document.writeln((a, b) => {return b - a});

document.writeln("the highest value at descending order is: "+ points[0]); // highest value at desceding order


// SORTING OBJECTS

const vehicles = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
]
vehicles.sort((a, b) => {return a.year - b.year}); // sort the vehicles in ascending order based on the year

document.writeln("The vehicles in ascending order are: " +
     vehicles[0].type + " " + vehicles[0].year,
     vehicles[1].type + " " + vehicles[1].year,
     vehicles[2].type + " " + vehicles[2].year
); // display the vehicles in ascending order on the web page

vehicles.sort(function(a ,b){

    return b.year - a.year; // arranging year in descending order

})

document.getElementById("demo58").innerHTML = "Arranging in descending order" + "<br>" +
vehicles[0].type + " " + vehicles[0].year + "<br>" +
vehicles[1].type + " " + vehicles[1].year + "<br>" +
vehicles[2].type + " " + vehicles[2].year;





// // JAVASCRIPT ARRAY MAXIMUMAND MINIMUM METHODS USING THE HOME MADE FUNCTIONS

//  const points2 = [40, 100, 1, 5, 25, 10];

//  function Max(arr){
//     let len = arr.length; // get the length of the array
//     //let min = infinity; // assign infinity to min
//     let max = -infinity; // assign -infinity to max

//     while(len --){
//         if (arr[len] > max){
//             max = arr[len];
//         } 
//     }
//     return max; // return an array containing min and max values (1, 100)
//  }


//  document.writeln("The minimum and maximum values are: " + Max(points2)); // display the minimum and maximum values on the web page
// //


// function minMax(arr){
//     let len = arr.length; // get the length of the array
//     let min = infinity; // assign infinity to min
    

//     while(len --){
//         if (arr[len] > min){
//             min = arr[len];
//         } 
//     }
//     return min; // return an array containing min and max values (1, 100)
//  }


//  document.writeln("The minimum and maximum values are: " + minMax(points2)); // display the minimum and maximum values on the web pa









