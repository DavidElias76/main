// loops

// for loop the initialiization, condition, and increment are all in the same line  

for(let i = 0; i < 10; i++) {
    document.writeln("The number is " + i + "<br>");
}


// for of loop - used to iterate over iterable objects like arrays, strings, maps, nodelist

const numbers = [1, 2, 3, 4, 5];

// Start looping from the second element (index 1)

for (let i = 1; i < numbers.length; i++) {
    document.writeln(numbers[i] + "<br>");
}

// for loops used to  iterate strinsg also

const str = "freeCodeCamp";

for (const char of str) {

    document.writeln("The character is " + char + "<br>");
}


// for loop used to loop elements in arrays of objects

const people = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Jim", age: 35 }
];

for(const person of people) {

    document.writeln("Name: " + person.name + ", Age: " + person.age + "<br>");
}


// FOR IN LOOP- USED WHEN LOOPING PROPERTIES OF AN OBJECTS

const fruits ={
    name: "banana",
    color: "yellow", 
    taste: "sweet",
   
};

for(const prop in fruits){

    document.writeln(prop + ": " + fruits[prop] + "<br>");
}


// using the for in loop to loop through the properties of an object that contains another object or nested objects


const fruits2 ={
    name: "banana",
    color: "yellow", 
    taste: "sweet",
    price: {
        price: 1.99,
        currency: "USD"
    }
};

function isObject(obj) {
    return typeof obj === 'object' && obj !== null && !Array.isArray(obj);  
}

for (const prop in fruits2) {

    if (isObject(fruits2[prop])) {

        document.writeln("<strong>" + prop.toUpperCase() + ":</strong><br>");
        // Loop
        for (const subProp in fruits2[prop]) {

            document.writeln(subProp + ": " + fruits2[prop][subProp] + "<br>");
        }
        
    } else {
        document.writeln(prop + ": " + fruits2[prop] + "<br>");
    }
}

// another example of using the for in loop to loop through the properties of an object that contains another object or nested objects  

const fruits3 = {

    apple: {
        name: "Apple",
        color: "Red",
        taste: "Sweet"
    },
    banana: {
        name: "Banana",
        color: "Yellow",
        taste: "Sweet"
    },
    lemon: {
        name: "Lemon",
        color: "Yellow",
        taste: "Sour"
    }
};

function checkObject(obj){

    return typeof obj === 'object' && obj !== null && !Array.isArray(obj);
}

for(const key in fruits3){

    if(checkObject(fruits3[key])){
        
        document.writeln("<strong>" + key.toUpperCase() + ":</strong>" + "<br>");

        for(const subkey in fruits3[key]){

            document.writeln(subkey + ": " + fruits3[key][subkey] + "<br>");
        }
    }else{

        document.writeln(key + ": " + fruits3[key] + "<br>");
    }
}

// get factorial of a numbers

// USING THE FOR LOOP

const num = Number(prompt("Enter a number to get its factorial: "));

function getFactorialCount(num){

    let result = 1;

    for(let i =  1; i <= num; i++){

        if(isNaN(num)){

            alert("Please enter a valid number");

        } else{
            
            result = result * i;
        }
    }
    return result;

}

const factorial = getFactorialCount(num);

const getResult = alert("The factorial of " + num + " is: " + factorial);

document.writeln("The factorial of 13 is " + factorial + "<br>");


// USING THE WHILE LOOP

const num2 = Number(prompt("Enter a number to get its factorial: ")); 

function getFactorialCount2(num2){

     let result2 = 1;

    let j = 1;

    while(j <= num2){

        if(isNaN(num2)){

            alert("Please enter a valid number");

        }else{

            result2 = result2 * j;

            j++; // increment the counter   
        }

    }

    return result2;
}

const factorial2 = getFactorialCount2(num2);

const getResult2 = alert("The factorial of " + num2 + " is: " + factorial2); 

document.writeln("The factorial of 13 is " +factorial2 + "<br>");


// USING THE DO-WHILE LOOP

const num3 = Number(prompt("Enter a number to get its factorial: "));

function getFactorialCount3(num3){

    let result3 = 1;

    let k = 1;

    do{
        if(isNaN(num3)){

            alert("Please enter a valid number");

        }else{

            result3 = result3 * k;
            k++; // increment the counter
        }
    }
    while(k <= num3);

    return result3;
}

const factorial3 = getFactorialCount3(num3);

const getResult3 = alert("The factorial of " + num3 + " is: " + factorial3);    

document.writeln("The factorial of 13 is " +factorial3 + "<br>");



// // FOR IN LOOPPRINTS OU THE KEYS WHILE THE FOR OF LOOP

// const shoppingList = { tomatoes: 4, apples: 10 };

// for (const item in shoppingList) {

//   document.writeln(item + "<br>");
// }



// for(let i = 2; i <=13; i++){

//     if(i % 2 === 0){ // divide by 2 and check if the remainder is 0

//         document.writeln("The number is even " + i + "<br>");
//     }
    
// }

// const fruity = ["Mango", "Pineapple", "Oranges"];

// for(const fruit of fruity){

//     document.writeln("The fruit is " + fruit + "<br>");
// }


// // USING THE BREAK AND CONTNUE STATEMENTS
// // break statement is used to exit the loop and continue statement is used to skip the current iteration and move to the next iteration

// for(let i = 0; i < 25; i++){

//     if( i % 5 === 0){

//         continue; // skip the current iteration
//     }

//     if( i % 13 === 0){

//         break; // exit the loop
//     }
// }

// // document.writeln("The number is " + i + "<br>");


// HOMEMADE ITERABLES

function myNumbers(){
    let n =0;

    return {
        next : function(){
            n=n + 10;
            return {value: n, done: false};
        }
    }
}

const n = myNumbers();

document.writeln(n.next().value + "<br>");
document.writeln(n.next().value + "<br>"); 
document.writeln(n.next().value + "<br>");


// An iterable can be iterated over with the code: for (const x of iterable) { }


function myNumbers2(){
    let n2 =0;

    return {
        next : function(){

            n2=n2 + 10;

            if(n === 100){done = true}

            return {value: n2, done: false}; // false not used for stopping here
        }
    }
}

document.write(n.next().value + "<br>");    
document.writeln(n.next().value + "<br>");  


// loop over the numbers from 1 to 100
// using the for loop
myNumbers = {};

// Make it Iterable
myNumbers[Symbol.iterator] = function() {
  let n = 0;
  done = false;
  return {
    next() {
      n += 10;
      if (n == 100) {done = true} // if n reaches 100, set done to true 
      return {value:n, done:done}; // return an object with value and done properties
    }
  };
}

let text = ""
for (const num of myNumbers) {
  text += num +"<br>"
}

document.writeln("Loop through the numbers from 1 to 100" + "<br>" +text);

  

myNumbers[Symbol.iterator] = function() {
  let n = 0;
  done = false;
  return {
    next() {
      n += 10;
      if (n == 100) {done = true}
      return {value:n, done:done};
    }
  };
}

// Create an Iterator
let iterator = myNumbers[Symbol.iterator]();

let text2 = "";

while (true) {
  const result = iterator.next();
  if (result.done) break;
  text2 += result.value +"<br>";
}

document.writeln("Loop through the numbers from 1 to 100" + "<br>" +text2);
