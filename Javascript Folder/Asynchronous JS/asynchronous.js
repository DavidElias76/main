
// asynchronous loows nultiple operations to be performed concurently without waiting
// it doesnot block the flow of execution and llows program to continue
// A Promise is an object that represents the eventual comapletion or failure of asynchronous process and its value
// The value of a promise is not known when the promise is created. It’s only known when the asynchronous process is completed

// example
// setTimeout is one of the example of asynchronous function

// example

function func1(callback){
    setTimeout(() => {
       console.log("Task 1") 
       callback();
    }, 3000);
}

function func2(){

    console.log("Task 2");
    console.log("Task 3");
    console.log("Task 4");
}

// callback 
func1(func2); // pass function 2 as a argument

// exmaple 2

function myCalculator(num1, num2, callback) {
    let multiply = num1 * num2;
    callback(multiply);
}

function displayResults(result){
    console.log("The result is: " +  result);
}

myCalculator(10, 10, displayResults);

// exmaple 3
// create an array

// Create an Array
const myNumbers = [4, 1, -20, -7, 5, 9, -6];

function removeNegativeValues(numbers, callback){
    const array =  [];
    for(const x of numbers){
        if(callback(x)){
            array.push(x);
        }
    }
    return array;
}

const getValues = (x) => {
    return x >= 0;
}

const positiveValues = removeNegativeValues(myNumbers, getValues);
console.log(positiveValues);


// A PROMISE
// is an object that the reresents the eventual completion and failure of an asynchronous opration
// A promise does resolve or reject when the async keyword in a function is not included

// example 1
const aPromise =  new Promise((resolve, reject => {
    setTimeout(() => {
        resolve("Operation Successful!")
    }, 1000)
}))

// we create a promise that stimulates the asynchronous operation using the setTimout. after 1 second  the promise is resolved and  with a message
// then is a method that is used in a prmise to specify what should happens when the prmise is fulfilled while catch used to handle any errors

aPromise.then((result => {
    console.log(result) // outputs: operation successful
})).catch((error) => {
    console.error(error);
})


// PROMISE CHAINING
// chaining multiple asynchronous operation together

// example

fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        return fetch('https://api.example.com/data')
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))


// ASYNCH/AWAIT
// when you put async keyword before a function. it will always return a promise
// and the await keyword is used inside the async function and waits for  the promise to be resolved before moving to the next line of code
// A function declared with async keyword does return a promise but the promise doesnot Resolve or Reject    

async function fetchUserData(){
    try{
        let response = await fetch('https://api.example.com/users'); // get the data using the fetch method
        let userData = await response.json(); // convert the data to json format
        console.log(userData);  // log the data to the console
    } 
    catch(error){
        console.log("Error fetching the user Data: ", error);
    }
}
fetchUserData(); // invoke the function

// example using a promise

function wait(ms) {
  return new Promise(resolve => {
    setTimeout(() => resolve(`Waited ${ms} ms`), ms);
  });
}

async function run() {
  console.log("Start");
  const message = await wait(2000); // invoke the function and Waits for 2 seconds 
  console.log(message);            // Prints "Waited 2000 ms"
  console.log("End");
}

run();

// example
async function delayedGreeting(name) {
  console.log("A Messenger entered the chat...");
  await new Promise(resolve => setTimeout(resolve, 5000));
  console.log(`Hello, ${name}!`);
}

delayedGreeting("Alice");
console.log("First Printed Message!");// this line will be printed before the hello alice since the code is asynchronous

fetch("https://api.example.com/users", {
    method: 'POST',
    headers:  {
        'Content-Type' : 'application/json'// extra information to tell the server how to interpret the data being sent
    },
    body: JSON.stringify({ // convert the object being sent to json.stringify and 
        name:  'John Doe',
        email: 'john@example.com'
    })
})

// FROM BRO CODE
// Async and Await

// Async -  makes a function return a promise
// Await -  makes async function wait for a promise and only valid in async function

// Allows to write asynchronous function in a synchronous manner
// Async doesnot have to resolve or reject parameters
// Everything after the await is passed in the evnt queue
// A function declared using the async keyword does return a romise but the  promised returned does not resolve and reject
//  Async function uses the resolve automatically when returning a promise 
// surround you async function try and catch block 
// a function that returns a promise

// EXAMPLE 1

function fetchDataFromServer(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const  success = true;

            if(success){
                resolve("Data Fetchiing sucessfully")
            }else{
                reject("Failed to fetch Data")
            }
        }, 2000)
    })
}

// Async function using that function

async function getDataServer(){
    try{
        console.log("Fetching data....")
        const result = await fetchDataFromServer()
    }catch(error){
        console.error(error);
    }
}

getDataServer(); // invoke the function


// EXAMPLE 2

function walkDog() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked =  true;

            if(dogWalked){
                resolve("You walk the dog")
            }
            else{
                reject("You DIDN't walk the dog")
            }
        }, 1500)
    })
}

function cleanKitchen() {

    return new Promise((resolve, reject) =>  {
        setTimeout(() => {
            const kitchenCleaned =  true;

            if(kitchenCleaned){
                resolve("You clean the kitchen")
            }
            else{
                reject("You DIDN't clean the kitchen")
            }
        }, 2500)
    })
}

function takeOutTrash() {

    return new Promise((resolve, reject) =>  {
            setTimeout(() => {
                const trashTakenOut =  true;

            if(trashTakenOut){
                resolve("You take out the trash")
            }
            else{
                reject("You DIDN't take out the trash")
            }
        }, 500)
    })
}

async  function doChores(){

    try{
        const walkDodResult = await walkDog();
        console.log(walkDodResult);
    
        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);
    
        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);
    }catch(error){
        console.log(error);
    }

}

doChores(); // invoke the function 



// FROM BRO CODE

// we use promises instead of a callback
// resolve and reject are function and the message is the value
// you can wrap a promise object around asynchronous function 
// PENDING --> RESOLVE AND REJECT

function walkDog() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked =  true;

            if(dogWalked){
                resolve("You walk the dog")
            }
            else{
                reject("You DIDN't walk the dog")
            }
        }, 1500)
    })
}

function cleanKitchen() {

    return new Promise((resolve, reject) =>  {
        setTimeout(() => {
            const kitchenCleaned =  true;

            if(kitchenCleaned){
                resolve("You clean the kitchen")
            }
            else{
                reject("You DIDN't clean the kitchen")
            }
        }, 2500)
    })
}

function takeOutTrash() {

    return new Promise((resolve, reject) =>  {
            setTimeout(() => {
                const trashTakenOut =  true;

            if(trashTakenOut){
                resolve("You take out the trash")
            }
            else{
                reject("You DIDN't take out the trash")
            }
        }, 500)
    })
}

// when the first promise is rejected we do not even attempt to run the remaining function 

walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return takeOutTrash()})
         .then(value => {console.log(value);  return console.log("You have finished all the chores") }) 
         .catch(error => console.error(error));


// THIS IS CALLED CALLBACK HELL

// walkDog(() => {
//     cleanKitchen(() => {
//         takeOutTrash(() => {
//             console.log("You finshed all the task")
//         })
//     })
// })

