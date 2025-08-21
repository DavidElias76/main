const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (number){
    document.writeln("The output is: " +  +number * 2 + "<br>");
});

const number2 = [1, 2, 3, 4, 5];
number2.forEach((number) => {
    document.writeln("The output is: " + number * 2 + "<br>");  

});

// const numbers3 = [1, 2, 3, 4, 5];
// numbers3.forEach((number,index, array) => {
//     document.writein(`Element  ${number} is at ${index} in the ${array} `)
// });

// higher order function

// function operationArray(arr, operation){
//     let result = [];
//     for(let i = 0; i < arr.length; i++){
//         // Apply the operation to each element and push the result
//         result.push(operation(arr[i])); // A function to apply to each element of the array.
//     }
//     return result;
// }
// // Example operation function
// function double(x) {
//     return x * 2;
// }   

// let numbers4 = [1, 2, 3, 4, 5];
// let doubledNumbers = operationArray(numbers4, double);  
// document.write(`Doubled Numbers: ${doubledNumbers}`);   

function operationArray(arr, operation){
    let result = [];// array to store the results
    // Iterate through each element of the array
    for(let i = 0; i < arr.length; i++){
        result.push(operation(arr[i])); // A function to apply to each element of the array.
    }
    return result;
}
function double(x){
    return result * 2;
}

let numbers4 = [1, 2, 3, 4, 5];
let doubledNumbers = operationArray(numbers4, double);
document.writeIn(`Doubled Numbers: ${doubledNumbers}`); 


// function factories

function multiply(factor){
    return function(number){
        return number * factor;
    }
}

// passing an argument for the outer function and storing it in a variable
let double = multiply(2);
let triple = multiply(3);

// passing an argument for the inner function
document.writeln("Double of 5: " + double(5) + "<br>");
document.writeln("Triple of 5: " + triple(5) + "<br>"); 


const numbers6 = [1, 2, 3, 4, 5];
const newNumbers = numbers6.map((number, index, array) => {
    document.writeln("Element", number);
    document.writeln("Index", index);
    document.writeln("Array", array);   

    return number * 2; // Return a new value for each element   
});


//  filter() method

const numbers7 =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers6.filter((num) => num % 2 === 0);
const oddNumbers = numbers6.filter((num) => num % 2 !== 0); 
document.writeIn(evenNumbers); /// print out the even numbers
document.writeln(oddNumbers); // print out the odd numbers
// reduce method

// filter methid on objects
const products = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 },
    { name: "Tablet", price: 300 },
    { name: "Monitor", price: 200 }
];

const expensiveProducts = products.filter(product => product.price > 300);
document.writeln("Expensive Products: <br>" + expensiveProducts);   


// reduce() method - // It is used to reduce an array to a single value by applying a function to each element in the array.

const sum = numbers7.reduce((accumulator, currentValue) => {
    accumulator + currentValue, 0;
}); // Initial value is 0



// method chaining - allows you to perform multiple operations on an array in a single expression.
const transactions = [
    { amount: 100, type: "credit" },
    { amount: 50, type: "debit" },
    { amount: 200, type: "credit" },
    { amount: 150, type: "debit" }
];

const totalCreditWithBonus = transactions
    .filter(transaction => transaction.type === "credit") // Filter for credit transactions
    .map(transaction => transaction.amount * 1.1) // Apply a 10% bonus to each credit amount
    .reduce((sum, amount) => sum + amount, 0); // Sum the amounts

document.writeln("Total Credit with Bonus: " + totalCreditWithBonus); // Output the result


const transactions2 = [
    { amount: 100, type: "credit" },
    { amount: 50, type: "debit" },
    { amount: 200, type: "credit" },
    { amount: 150, type: "debit" }
];

const totalCreditWithoutBonus  = transactions2
    .filter(transaction => transaction.type = "debit")
    .reduce((sum, amount) => sum + amount, 0);

document.writeln("Total Credit without Bonus: " + totalCreditWithoutBonus); // Output the result


const obj ={
    value:  1,
    increment: function() {
        this.value++;
        return this;
    },
    double:function(){
        this.value * 2;
        return this;

    },
    getValue: function(){
        return this.value;
    }
}
const resultObject = obj.increment().double().increment().getValue();
document.writeln("Result Object Value: " + resultObject); // Output the result : 5

// every() method

const hasAllEvenNumbers = numbers7.every((num) => num % 2 === 0);
document.writeln("Has All Even Numbers: " + hasAllEvenNumbers); // Output: false

// some() method

const hasSomeEvenNumbers = numbers7.some((num) => num % 2 === 0);
document.writeln("Has Some Even Numbers: " + hasSomeEvenNumbers); // Output: true

// Callback functions and higher-order functions
const multiply = (a) => (b) => a * b;
const operations = [multiply(2), multiply(3)];
const result = operations.reduce((acc, fn) => fn(acc), 5);

document.writeln(result); // Output: 30 (5 * 2 * 3)