// WATCHING BRO CODE YOUTUBE VIDEO

//change the text content of an html element
// document.getElementById("").textContent = `Hello world`

// VARIBLES
// variable names needs to be unique and not have the same name

// examples
// datatypes
let age= 35 // integer
let price = 10.99 // floating point
let gpa = 2.1 // floating point
let firstname = "David" // strings
// boolean variables
let online = true
let offline = false
let isStudent = true

console.log(typeof firstname); //  strings
console.log(`You are ${age}`);
console.log(`Your  price is  ${price}`);
console.log(`Your first name is ${firstname}`);
console.log(`You are ${online}`)
console.log(`You are ${offline}`);
console.log(`is student online ${online}`);


let lastName = "Bro Code";
let myAge= 25;
let isTeacher = true;

document.getElementById("p1").textContent =  `Your  last name is ${lastName}`;
document.getElementById("p2").textContent =  `Your size is ${myAge}`;
document.getElementById("p3").textContent =  `Are you enrolled: ${isTeacher}`;

// operators
// arithmetic operators
// +-/*
// exponents ** 
// modulus (%) - gives you the remainder

// augmented assignment operators
let students = 30;
students += 1; // same as students = students + 1
// students -= 1; same as students = students - 1
// students *= 1; same as students = students * 1
// students /= 1; same as students = students / 1
// students %= 1; same as students = students % 1
console.log(students);

// increment opeartors
// students++
// students--

// order of precedence
//  1.paranthesis
//  2.exponents
//  3.multiplicaton, division and modulus
//  4.addidtion and subtraction

// example
let result = 1 + 2 * 3 + 4 ** 2;
console.log(result);
let result2 = 12 % 5 + 8 / 2;
console.log(result2);

// Accept user Input
// 1.easy way - window prompt
// 2. profeesional way -html box

let userName;
// userName = window.prompt("What's your username");
console.log(userName);

let username2;
document.getElementById("mySubmit").onclick = function(){
    username2 = document.getElementById("myText").value; // get the value of the textbox
    document.getElementById("myH1").textContent = `Hello ${username2}`;
}

// type conversions - change the datatype of a value to another value

// let studentAge = window.prompt("How old are you");
// studentAge= Number(studentAge);// convert the string into a number 
// studentAge += 1;
// console.log(studentAge, typeof studentAge);

// example
let x =  "Pizza"
let y =  "Pizza"
let z =  "Pizza"

x =  Number(x);  //NaN(Not a Number) strings cannot be converted into a number
y =  String(y); // strings
z =  Boolean(z); // true

console.log(x, typeof x)
console.log(y, typeof y)
console.log(z, typeof z)

let m;
let n;
let o;

m = Number(m); // Not a Number
n = String(n); // strings undefined
o = Boolean(o); // false boolean

console.log(m, typeof m)
console.log(n, typeof n)
console.log(o, typeof o)

// constant variable - cannot be reassigned or redeclared

// Accept user input via a  prompt
const PI = 3.142;
// let radius= window.prompt("Enter the radius of a circle")
let circuference;
// let circuference = 2 * PI * radius;
console.log(circuference)

// Accept user input via the textBox
// let radius = Number(radius);
// document.getElementById("mySubmit2").onclick = function(){
//     radius = document.getElementById("myText2").value; // get the radius value
//     radius = Number(radius)// convert the radius into a number
//     circuference = 2 * PI * radius;
//     document.getElementById("myH3").textContent = `${circuference} cm`; 
// }


// counter program

const decreaseBtn = document.getElementById("decreaseBtn")
const resetBtn = document.getElementById("resetBtn")
const increaseBtn = document.getElementById("increaseBtn")
const countLabel =  document.getElementById("countLabel")

let count= 0;
decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}
increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}
resetBtn.onclick = function(){
    count =  0;
    countLabel.textContent = count;
}

// Math Object - is a built in javascript object that provides a collection of properties and methods

let b = 3.25;
console.log(Math.round(b));  // round to the nearest number
console.log(Math.floor(b)); // round down
console.log(Math.ceil(b)); //  rounds up
console.log(Math.trunc(b))// remove any decimal point
console.log(Math.pow(x,y));
console.log(Math.sqrt(b)); // square root of a number
console.log(Math.cos(b)) // get the consine
console.log(Math.sin(b))// get the sine
console.log(Math.tan(b)) // get the tan
console.log(Math.abs(b)) // get the absolute value a number
console.log(Math.sign(b))

let v = 10;
let t = 20;
let f = 15;

let max = Math.max(v, t, f);
let min = Math.min(v, t, f);
console.log(max)
console.log(min);


//  RANDOM NUMBER GENERATOR

let randomNum = Math.random() * 6; // get the ranndom number btw 0 and 5 and to get the value of 6 add plus 1
console.log(randomNum);

let randomNum2 = Math.floor(Math.random() * 6)  + 1; // to get rounded number
console.log(randomNum2);

const min2 = 50;
const max2 = 100;

let randomNum3 = Math.floor(Math.random() * (max - min) + min); // gets the random number btw 50 and 100;
console.log(randomNum3);

// Example based on rolling a dice

const myButton = document.getElementById("myButton");
// const myLabel1=  document.getElementById("myLabel");
// const myLabel2=  document.getElementById("myLabe2");
// const myLabel3=  document.getElementById("myLabe3");
const min3 = 1;
const max3 = 6;
// let randomNumber1;
// let randomNumber2;
// let randomNumber3;


// myButton.onclick = function(){
//     // randomNumber =  Math.floor(Math.random() (max - min) + min);
//     randomNumber1 = Math.floor(Math.random() * max)  + min;
//     randomNumber2 = Math.floor(Math.random() * max)  + min;
//     randomNumber3 = Math.floor(Math.random() * max)  + min;
//     myLabel1.textContent = randomNumber1;
//     myLabel2.textContent = randomNumber2;
//     myLabel3.textContent = randomNumber3;

// }

const myLabels =  document.querySelectorAll(".myLabels");
let randomAll;
myButton.addEventListener("click", ()=> {
    myLabels.forEach(label => {
        randomAll = Math.floor(Math.random() * max3)  + min3;
        label.textContent = randomAll;
    })
})


// iF ELSE STATEMENTS
// if to execute of condition is true and else block to execute if condition is false
// checking boolean varible

// You can use comparison operator (equality(==) and strict equality(===)) to compare values in the if statements or any other operators

let isStudentEnrolled = false;

if(isStudentEnrolled){
    console.log("You are already enrolled!");
}else{
    console.log("You are not enrolled!");
}

// // nested if statements

// let ageNumber = 25;
// let hasLicence = true; // change the boolean  value to true or false 

// if(age >= 16){
//     console.log("Yo are old enough to drive!");

//     if(hasLicence){
//         console.log("You have your licence");
//     }else{
//         console.log("You  do not have a licence yet")
//     }
// }else{
//     console.log("You must be 16+ to have a licence!");
// }

// // using a textbox: not working 
// const myText3 = document.getElementById("myText3");
// const mySubmit = document.getElementById("mySubmit")
// const resultElement = document.getElementById("resultElement");

// let checkAge;
// mySubmit.addEventListener("click", ()=> {
//     checkAge = Number(myText3.value);

//     if(checkAge >= 100){
//         resultElement.textContent = "You're too Old to drive!";
//     }else if(checkAge === 0){
//         resultElement.textContent = "You can enter. You are just born!";
//     }else if(checkAge > 18){
//         resultElement.textContent = "You are old enough to enter this site!";
//     }else if(checkAge < 0){
//         resultElement.textContent = "You're age cannot be below 0!";
//     }else{
//         resultElement.textContent = "You must be 18+ and aboe to enter this site!";
//     }
// })


// CHECKED PROPERTY
// it determines if the checked state of an html checkbox or radio button element

const myCheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const mastercardBtn = document.getElementById("mastercardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const mySubmitBtn= document.getElementById("mySubmitBtn");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmitBtn.addEventListener("click", ()=>{

    if(myCheckbox.checked){
        subResult.textContent = `You are subscribed`
    }else{
        subResult.textContent = `You are not subscribed`
    }
    if(visaBtn.checked){
        paymentResult.textContent = `You are paying with Visa`;
    }else if(mastercardBtn.checked){
        paymentResult.textContent = `You are paying with MasterCard`;
    }else if(paypalBtn.checked){
        paymentResult.textContent = `You are paying with Paypal`;
    }else{
        paymentResult.textContent = `You must select a payment type`;
    }
})


// TERNARY OPERATOR 
// it is a shortcut  for writing a if and else statement helps to assign variable based on a condition ? condition True : condition False

// example
let ageNumber2 =  25;
let showMessage = age > 18 ? "You are an adult" : "You are a minor"
console.log(showMessage)

let timeNow = 19;
let greetings = timeNow > 12 ? "Good Mornings" : "Good Afternoon";
console.log(greetings);

let isStudentEnrolledOrNot = true;
let showMessageStudent = isStudentEnrolledOrNot ? "You are enrolled" : "You are not enrolled";
console.log(showMessageStudent);

let purchaseAmount = 125;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Your total is $${purchaseAmount - purchaseAmount * discount/100}`);


// SWITCH STATEMENTS
// break keyword is used to break out of the switch statement 

let day = 1;

switch (day) {
    case 1:
        console.log("Its Monday")
        break;

    case 2:
        console.log("Its Tuesday")
        break;

    case 3:
        console.log("Its Wednesday")
        break;

    case 4:
        console.log("Its Thursday")
        break;

    case 5:
        console.log("Its Friday")
        break;

    case 6:
        console.log("Its Saturday")
        break;

    case 7:
        console.log("Its Sunday")
        break;

    default:
        console.log(`${day} is not a day`)
        break;
}

// example 2

let testScore= 92;
let letterGrade;

switch (true) {
    case testScore >= 90:
        letterGrade = "A"
        break;
    case testScore >= 80:
        letterGrade = "B"
        break;
    case testScore >= 70:
        letterGrade = "C"
        break;
    case testScore >= 60:
        letterGrade = "D"
        break;
    case testScore >= 50:
        letterGrade = "E"
        break;
    default:
        letterGrade = "F"
        break;
}


// STRING METHODS
// it allows you to manipulate and work with strings

let name = "BroCode";

console.log(name.charAt(0)); // returns the character of a specific index
console.log(name.indexOf("o")) // returns the index of the first occurrence of an "o"
console.log(name.lastIndexOf("d")); // returns the last indexof  of the occurrence "d"
console.log(name.length); // get the length of a string

let usernameTrim = name.trim();// to remove any white space btw the characters
console.log(usernameTrim)

console.log(name.toUpperCase()); // return uppercase characters
console.log(name.toLowerCase()); // return lowerCase characters

console.log(name.repeat(3));  // repeat the characters 3 times

let spaceName = " BroCode ";
let nameSpace = spaceName.startsWith(" "); // checks if a strings starts with a empty space
console.log(nameSpace); // return boolean value true or false if not

let endsSpace = spaceName.endsWith(" ")
console.log(endsSpace); // return boolean value true and false if not

let includeSpace = spaceName.includes(" ");
console.log(includeSpace); // return true or false

let phoneNumber = "123-456-789";

let replaceCharacter = phoneNumber.replaceAll("-", "/"); // takes two arguments : the character to be replaced and the character to be replaced with
console.log(replaceCharacter);

let padStartAdd = phoneNumber.padStart(15, "0"); // It pads the string with another string (multiple times) until it reaches a given length
let padEndAdd = phoneNumber.padEnd(15, "0"); // It pads the string with another string (multiple times) until it reaches a given length.

console.log(padStartAdd);
console.log(padEndAdd);


// STRINGS SLICING
// it invloves creating a substring from a portion of another string
// String.slice(start, end) - the ending index is exclusive or excluded
// you can aslo use the slice method with a ending index

const fullName = "Bro Code";

let fullNameSliced = fullName.slice(0, 3);
let fullNameSliced2 = fullName.slice(4, 8);

console.log(fullNameSliced);
console.log(fullNameSliced2);

let firstChar = fullName.slice(0,1);
let lastChar = fullName.slice(-2); // starts from the end to the begining

console.log(firstChar);
console.log(lastChar);

// using the indexof method to act as a second Argument for the slice method
let charIndex = fullName.slice(0, fullName.indexOf(" "));
console.log(charIndex);
let charIndexLast = fullName.slice(fullName.indexOf(" ") + 1);
console.log(charIndexLast);

// exercise
const email = "Brocode@gmail.com";
let userEmail = email.slice(0, email.indexOf("@")); // prints the text btw begining of the text and at the end of the @ symbol
let extension = email.slice(email.indexOf("@")); // prints out the text after the @ symbol

console.log(userEmail);
console.log(extension);


// METHOD CHAINING
// It is calling a method after the other in a continuous line of code

// let userInput = window.prompt("Enter your username");
// let trimUsername = userInput.trim();// remove any white spaces
// let letter = userInput.charAt(0).toUpperCase(); // get the first character which is b and put it into lowercase
// let extraCharacters = userInput.slice(1).toLowerCase();// make the rest of the characters lower case

// userInput = letter + extraCharacters;

// console.log(userInput);

// method chaining

// userInput = userInput.trim().charAt(0).toUpperCase() + userInput.trim().slice(1).toLowerCase();
// console.log(userInput);



// LOGICAL OPERATORS

// used to combine or manipulate boolean values(true or false)
// AND = && -  both condition needs to be true
// OR = || - atleast one condition needs to be true
// NOT = ! - changes the booelan value to be true or false

let temp = 30;

const isSunny = true;

if(!isSunny){
    console.log("It is sunny")
}else{
    console.log("It is cloudy")
}


// STRICTLY EQUALITY
// == comaprison opeartor(compares if value are equal without caring about the data type)
// === strictly equality operator(compare datatype and values are equal)
// != inequality operator
// !== strict inequality operator

const PIValue = 3.14;

// if(PIValue == "3.14"){
//     console.log("This is PI");  // same

if(PIValue ==="3.14"){
    console.log("This is PI");
}else{
    console.log("That is not a PI"); // not same   
}

// LABELS: 

// A label provides a name for a statement, or a block of statements, allowing statements to be referenced to, for program flow control, particularly in loops.

let textvalue = "";

loop1: for (let j = 1; j < 5; j++) {
  loop2: for (let i = 1; i < 5; i++) {
    if (i === 3) { continue loop1; }
    textvalue += i + "<br>";
  }
}

// WHILE LOOPS - Repeat some code while the condition is true and cancel the code when the condition is false

// let usernameValue = "";
// while(usernameValue === ""){
    // usernameValue = window.prompt("Enter your username")
// }


// DO WHILE LOOPS - This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true. 

// do{
//    usernameValue = window.prompt("Enter your username") 
// }while(usernameValue === "" || usernameValue === null)


// let isLoggedIn = false;
// let enterUserName;
// let password;
// let i = 0;

// while(!isLoggedIn && i < 3){
//     enterUserName = window.prompt("Enter your username:");
//     password = window.prompt("Enter your password:");

//     if(enterUserName === "MyUserName" && password === "MyPassword"){
//         isLoggedIn = true;
//         console.log("You  are logged in!");
//     }else{
//         console.log("Invalid credentials!. Please try again");
//         i++;
//     }
// }
// if(!isLoggedIn){
//     console.log("Too many attempts. Access denied!. Refresh the page to continue");
// }

// In this version, i++ is inside the else block so it only increments when credentials are wrong.

// Using the do while loop version
// do {
//     enterUserName = window.prompt("Enter your username:");
//     password = window.prompt("Enter your password:");

//     if (enterUserName === "MyUserName" && password === "MyPassword") {
//         isLoggedIn = true;
//         console.log("You are logged in!");
//     } else {
//         console.log("Invalid credentials! Please try again.");
//         i++; // increment only on failure
//     } 
// } while (!isLoggedIn && i < 3);

// if (!isLoggedIn) {
//     console.log("Too many failed attempts. Access denied!");
// }


// FOR LOOPS
// it consist of counter variable, condition and a increment/decrement
// Repeat some code at a limited number of times

// for(let i = 1; i <= 10; i++){
//     console.log(i);
// }
// for(let i = 2; i <= 10; i+=2){
//     console.log(i);
// }
// for(let i = 10; i > 0; i--){
//     console.log(i);
// }

console.log('Happy New Year');

// continue - used to skip a iteration
// break - to break out of the loop entirely
for(let j = 1; j <= 20; j++){

    if(j === 13){
        continue;// when i reaches 13 it will skip the iteration
    }else{
        console.log(j);
    }
}

for(let i = 1; i <= 10; i++){

    if(i === 5){
        break;// to break out of the loop entirely
    }else{
        console.log(i);
    }
}


// NUMBER GUESSING GAME
// - look at guessinggame.js

// const minNum = 50;
// const maxNum = 100;

// const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum; // generate a random number between a minimum and a maximum
// let attempts = 0; // counter variable
// let guess;
// let running = true;

//  while(running){
//     guess = Number(window.prompt(`Guess a number bwtween ${minNum} - ${maxNum}`))
    
//     if(isNaN(guess)){
//         window.alert("Please enter a valid number")
//     }else if(guess < minNum || guess > maxNum){
//         window.alert("Please enter a valid number");
//     }else{
//         attempts++
//         if(guess < answer){
//             window.alert("TOO LOW TRY AGAIN!");
//         }else if(guess > answer){
//             window.alert("TOO HIGH TRY AGAIN!")
//         }else{
//             window.alert(`CORRECT!.The answer was ${answer}. It took you ${attempts} attempts`)
//             running = false;   
//         }
//     }
// }


// FUNCTION 
// it is a section of reusable code. dealcre a code once and reuse it when you want by calling the function to execute that code
// parameters are temporary varibles
// The order of paramaters does matter when declairing paramters and calling back the function with arguments
// functions can have function expressions and function declarations
// use the return keyword to return a function

// Function parameters are the names listed in the function definition.

// Function arguments are the real values passed to (and received by) the function.

function addTwoNumbers(x, y){
    let result = x + y;
    return result;
}
let answerResult = addTwoNumbers(4, 5);
console.log(answerResult);
 
// function isEven(number) {
//     if(number % 2 === 0){
//         return true;
//     }else{
//         return false;
//     }
// }

function isEven(number) {
    return number % 2 === 0 ? true : false;
}
console.log(isEven(13))

function isValidEmail(email){
    return email.includes("@"); // the includes method return true or false and no need for the ternary operator
}
console.log(isValidEmail("brocode@gmail.com"));
console.log(isValidEmail("elonmusk.com"))


// SCOPE : LOCAL SCOPE AND GLOBAL SCOPE
// local scope - are variables that are declared inside the function. They are used in large programs
// global scope - are variables that are declared outside the function and can be accessible eveywhere. The are used in small programs

// local varbles are executed and used first compared to global variables when they have same name



// JAVASCRIPT ARRAYS
let fruits = ["apple", "Orange", "Banana"];
console.log(fruits)
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

fruits[2]= "Coconut" // change array element

fruits.push("Banana") // add element at the end of the array
// fruits.pop(); // removes an element at the end of the array
fruits.unshift("Mango"); // adds an element at the begining of the array
// fruits.shift(); // remove an element at he begining of the array 
let numberOfFruits = fruits.length; // the length of tha array
console.log(numberOfFruits);

// get the iendex of various elements
let index = fruits.indexOf("Banana"); // returns (-1) if the element doesnot exist
console.log(index)

// loop through the array
for(let i = 0;i < numberOfFruits; i++){
    console.log(fruits[i]);
}
// loop in reverse
for(let i = numberOfFruits - 1; i >= 0 ; i--){
    console.log(fruits[i]);
}

// using the FOR..OF.. LOOP METHOD
// It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:
let text;
for (const fruit of fruits) {
    console.log(fruit);
}

console.log(fruits.sort());// sort the elements in alphabetical order
console.log(fruits.reverse());// sort the elements backwards


// SPREAD OPERATOR
// ...  allows an iterable such as array or string to be expanded into seperate elements(unpacks the elements)

let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);

console.log(maximum);
console.log(minimum);

let stringsName =  "BroCode";
let lettersStrings =  [...stringsName];
console.log(lettersStrings);

let fruitsNames = ["apple", "Orange", "Banana"];
let copyFruits = [...fruitsNames];
console.log(copyFruits)

// combining two arrays into 1
let newFruits = ["apple", "Orange", "Banana"]
let vegetables = ["carrots", "celery", "potatoes"];

let foodsCombined = [...fruits, ...vegetables]
// foodsCombined =  [...fruits, ...vegetables, "eggs", "milk"]; // you can also add new elements inside the spread operator
console.log(foodsCombined);



// REST PARAMETERS  (...rest)
// allow a function to work with a variable number of arguments binding them to an array

const food1 ="Pizza"
const food2 ="hamburger"
const food3 ="hotdog"
const food4 ="sushi"
const food5 ="ramen"

// using rest parameters when calling back the function
function openFridge(...foods){
    console.log(foods);
    // console.log(...foods); - use the spread operator to spread the completely
}
openFridge(food1, food2, food3, food4, food5);

// using the rest parameters when creating a new array
function toGetFood(...foods){
    return foods;
}

const foodsArray = toGetFood(food1, food2, food3, food4, food5) 
console.log(foodsArray)// an array created

// example
function sum(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;
}
const totalNumbers = sum(10, 20, 30, 50, 60)
console.log("The total is: " + totalNumbers)

// function to get the avearge
function getAverage(...numbers){
    let result =  0;
    for(let number of numbers){
        result += number
    }
    return result / numbers.length;
}

const aveargeNumbers =getAverage(10, 20, 30, 50, 60);
console.log("The average is: " + aveargeNumbers);

// example

function combineString(...Strings) {
    return Strings.join(" ")
}
const fullNamesArray = combineString("Mr", "Spongbob", "Squarepants", "III");
console.log(fullNamesArray);


//RANDOM PASSWORD GENEARTOR
//  look at randomPassword.html and randomPassword.js


//  CALLBACKS
// function that is passed as an argument by another function
// used to handle asynchronous operations reading file, network request and interacting with databases 
// example

function hello(callback){
    console.log("Hello!");
    callback(); // take the parameter and call or invoke
}
function goodbye(){
    console.log("Goodbye!");
}
function leave(){
    console.log("Leave!")
}
hello(leave)
hello(goodbye); // the goodbye function get passed as an argument to the hello function

// exmaple
function sumTwoNumbers(callback, x, y){
    let result = x + y;
    callback(result); // this means call the function that was passed in, and give it the result.
}
function displayConsole(result){
    console.log(result);
}
sumTwoNumbers(displayPage, 1, 2);


function displayPage(result){
    document.getElementById("myID").textContent = result
}

function multiplyNumbers(callback, m, n){
    let multiplyResult = m * n;
    callback(multiplyResult);
}

function showResults(multiplyResult){
    console.log("The results is:" + multiplyResult);
}

multiplyNumbers(showResults, 125, 76);


// FOREACH() METHOD

// - it is used to iterate through the elements of the array and apply a specified function to each element in the array 
// array.forEach(callback);
// it provides an element array and index;


let numberFor = [1, 2, 3, 4, 5];

numberFor.forEach((element, index) => {
    console.log(index, element * 2);
})

console.log('The cube')

numberFor.forEach((element, index) => {
    console.log(index, Math.pow(element, 3))
});

let numbersAgain =  [2, 4, 6, 8, 10];

function MultyBy4(element, index, array){
    array[index] = element * 4;
}
numbersAgain.forEach(MultyBy4);
console.log(numbersAgain); // it will output in an array format

let fruitsUpperCase =["Apples", "Oranges", "Banana", "Coconut"];

// to make all letters uppaercase
fruitsUpperCase.forEach((element)=> {
    console.log(element.toUpperCase());
})

// to make a single character at index 0 uppercase only
fruitsUpperCase.forEach((element)=> {
    console.log(element.charAt(0).toUpperCase() + element.slice(1));// get the first letter in the strings convert to uppercase and concatenate the rest of the characters using the slice method
});


// MAP() METHOD

// accepts the callback and applies that function to each element of an array and then return an new array
// it return a new array
// it takes the element index and array 

const mappedValues = [1, 2, 3, 4, 5];

const squaredNumbers  = mappedValues.map(element => {
    return Math.pow(element, 2); // do not forget the return keyword
})

console.log(squaredNumbers);

const mapppedStrinsgUpperCase = fruitsUpperCase.map((element)=> {
    return element.toUpperCase();
})

console.log(mapppedStrinsgUpperCase);


const datesArranged = ["2024-1-10", "2025-2-20", "2026-3-30"];

const formattedDates = datesArranged.map(element => {
    const parts = element.split("-");  // ["2024", "1", "10"]
    return `${parts[1]}/${parts[2]}/${parts[0]}`; // "1/10/2024"
});

console.log(formattedDates);


// FILTER() METHOD

// - its creates an new array by filtering out elements
// it takes element that return true and stick them with a new array
// it takes the element, index and array  

let filterNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNumbers = filterNumbers.filter(element => element % 2 === 0);
console.log(index, evenNumbers);

let oddNumbers = filterNumbers.filter(element => element % 2 !== 0);
console.log(index, oddNumbers)

// // another way to be written
// function oddFunction(element) {
//     return element % 2 !== 0;
// }
// const oddNumbers2 = filterNumbers.filter(oddFunction)
// console.log(oddNumbers2)


// REDUCE() METHOD
// - It reduces the element of an array into a single value
// it has two paramter : the accumulator and the amount
// the 0 indicates that it sholud start at 0. it can be included and also not included

const prices = [10, 30, 50, 70, 80, 90];

let sumPrices = prices.reduce((accumulator, element) => accumulator + element, 0)
console.log("The sum of prices:" + sumPrices)



// FUNCTION EXPRESSIONS AND FUNCTION DECLARATIONS

// Function Declaration - defines a block of code that performs a specific task

function sayHello(){
    console.log("Hello");
}

// Function Expressions - a way to define function as values or variables
// function expressions are used in callback, asyschronous operation, high order function , closure and event listeners


const helloNow = function (){
    console.log("Hello Again");
}
helloNow() // use the varible name and invoke it or call it

// // it waits for 3 seconds  before displaying the word hello
// setTimeout(function(){
//     console.log("Hello!");
// }, 3000);

// example

const numbersArray = [1, 2, 3, 4, 5, 6];

const squarreNumbers= numbersArray.map(element => Math.pow(element, 2));
console.log(squarreNumbers)

// another way it can be written
const sqaures = numbersArray.map(function(element) {
    return Math.pow(element, 2);
})
console.log(sqaures);

const totalNumbersArray = numbersArray.reduce((sum, amount) => sum + amount);
console.log("The total number is the array are: " + totalNumbersArray)


// ARROW FUNCTIONS 
// It is a concise way to write function expressions and good for simple that you use only once
// The syntax is: (parameters) => some code 
// arrow functions return a value by default and there is no need of the return keyword

// example

// setTimeout( () => console.log("Hello Arrow function"), 3000)


// exercise

// If a function is called with too many arguments (more than declared), these arguments can be reached using the arguments object.

const numbersNewArray = [1, 3, 4, 5, 7, 9];

const maxNumber = () => {
    let max = -Infinity;  // smallest possible number
    for (let i = 0; i < numbersNewArray.length; i++) {
        if (numbersNewArray[i] > max) {
            max = numbersNewArray[i];
        }
    }
    return max;
}

console.log("The maximum number is: " + maxNumber()); // 9
