
// open source that lets you run javsacript outside the browser - enabling server-side development with JavaScript
// build for fast and scalable applicatiions
// lets you handle multiple connections without waiting for other to finish

// run node.js // node app.js

// node build in modules - importing the modules using the require()

// npm - package manager for node.js that allows to to install packages(libraries) and add more feature to your app
// example: npm install express

// import express from 'express'
// import cors from cors

// this is using the common js method instead of the module method 
// // const express = require('express');
// const app = express();
// app.get('/', (req, res) => res.send('Hello World!'));
// app.listen(8080);

//Asynchronous Programming

// This means it can keep working while waiting for tasks like reading files or talking to a database.
// Load the filesystem module - fs()

// const fs = require('fs');

// // Read file asynchronously
// fs.readFile('./myfile.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error('Error reading file: ' + err);
//     return;
//   }
//   console.log('File content: ' + data);
// });

// console.log('Reading file... (this runs first!)');

// create a server to read the file  

// const http = require('http');
// const fs = require('fs');

// Another Example 
import http from 'http';
import fs from 'fs';
import { promises } from 'dns';
import { resolve } from 'path';
import { error } from 'console';
import { json } from 'stream/consumers';
import { config } from 'process';
 
// const http = require('http');
// const fs = require('fs');

// / Create a server object 
const server = http.createServer((req, res) => {

  // CORS headers for it to work 
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests - check if the request method has options default method for browsers
  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // Check if the request is for the home address
  if (req.url === '/') {
    // Read the file - and takes two arguments - does aynchronous function -the error object and the data that has been read 
    fs.readFile('./myfile.txt', 'utf8', (err, data) => {
      if (err) {
        //http status code 500 means that there is an error
        res.writeHead(500, { 'Content-Type': 'text/plain' }); // it tells the server this file is a plain text or another file like html
        res.end('Error reading file: ' + err); // send an error message
        return;
      }
      
      // Send file content as response - when the http status code 200 means success
      res.writeHead(200, { 'Content-Type': 'text/plain' }); // tells the browser the type of content being sent by the server 
      res.end(data); // send the file contents and closes the server
    });
  } else {
    // Handle other routes - the file/content is not found 
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found'); // send the message 
  }
});
// server.use

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log('Visit http://localhost:8080/ to see the file content');
});

// Comand-line arguments -Access command line arguments using process.argv:

console.log('All arguments:', process.argv);
console.log('First argument:', process.argv[2]);
console.log('Second argument:', process.argv[3]);

// Example usage:
// node args.js hello world
// Output:
// All arguments: ['/path/to/node', '/path/to/args.js', 'hello', 'world']
// First argument: hello
// Second argument: world

// Environment Variables - Access and set environment variables:
// env.js
console.log('Environment:', process.env.NODE_ENV || 'development');
console.log('Custom variable:', process.env.MY_VARIABLE);
console.log('Database URL:', process.env.DATABASE_URL || 'Not set');

// Example usage with environment variables:
// NODE_ENV=production MY_VARIABLE=test node env.js

// Show the V8 engine version used by your Node.js installation
console.log(`V8 version: ${process.versions.v8}`);


// Get information about V8's heap memory usage
// The v8 engine provide the core javascript execution environment that node.js is built upon- it allows execution of js code outside the browser
// Node.js regularly updates its V8 engine version
const v8 = require('v8');
const heapStats = v8.getHeapStatistics();

console.log('Heap size limit:', (heapStats.heap_size_limit / 1024 / 1024).toFixed(2), 'MB');
console.log('Total heap size:', (heapStats.total_heap_size / 1024 / 1024).toFixed(2), 'MB');
console.log('Used heap size:', (heapStats.used_heap_size / 1024 / 1024).toFixed(2), 'MB');

// New Node.js versions often include newer versions of V8
// This provides access to newer JavaScript features and better performance

// Node.js Architecture?
// Node.js uses a single-threaded, event-driven architecture that is designed to handle many connections at once, efficiently and without blocking the main thread.

const fs = require('fs');

// Blocking code example
console.log('Start of blocking code');
const data = fs.readFileSync('myfile.txt', 'utf8'); // Blocks here - this code needs to be completed before anything else runs
console.log('Blocking operation completed'); // this is not runned

// Non-blocking code example
console.log('Start of non-blocking code');
fs.readFile('myfile.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('Non-blocking operation completed');
});
console.log('This runs before the file is read'); /// this will run before the fle is read and completed

// Modern Async Patterns - reading a file
// const fs = require('fs').promises - //common.js file - the es module
import fs from 'fs/promises'
console.log('1. Reading file...');

fs.readFile('./myfile.txt', 'utf-8')
  .then(data => {
    console.log('File content', data)
  }).catch(err => console.error('Error:', err));


// Asynchronous

// using the async keyword and await - recommended
async function readFiles() {
  try {
    console.log('1. Starting to read files...'); // this will be printed first 
    const data1 = await fs.readFile('file1.txt', 'utf8');
    const data2 = await fs.readFile('file2.txt', 'utf8');
    console.log('2. Files read successfully!'); // this will be printed the second one
    return { data1, data2 };
  } catch (error) {
    console.error('Error reading files:', error);
  }
}

// Use async/await for better readability - using the async code for better structure
async function getUserData(userId) {
  try {
    const user = await User.findById(userId);
    const orders = await Order.find({ userId });
    return { user, orders };
  } catch (error) {     console.error('Failed to fetch user data:', error);
    throw error; // Re-throw or handle appropriately
  }
}

// Run multiple async operations in parallel
async function fetchAllData() {
  try {
    const [users, products, orders] = await Promise.all([
      User.find(),
      Product.find(),
      Order.find()
    ]);
    return { users, products, orders };
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

// promises - take two arguments ressolve and rejetct - avaoids callback hell 
// promise.all() runs multiple promises inparallel and waits for all of them to complete 
// if one fails all of them fails

// reading a file using promises
const promise1 = Promise.resolve("first result")
const promise2 = new Promise((resolve) => setTimeout(() => resolve('second result')))
const promise3 = fs.readFile('./myfile.txt', 'utf-8')

// run all promises at once -when one fails the reset of the promses fails 
Promise.all([promise1, promise2, promise3]).then(results => {
   console.log('Results:', results);
    // results[0] is from promise1
    // results[1] is from promise2
    // results[2] is the content of myfile.txt
}).catch(error => {
    console.error('Error in one of the promises:', error);
});


// Promise Chaining - Promises can be chained to execute asynchronous operations in sequence, with each .then() receiving the result of the previous operation.

function getUser(userId) {
  return new Promise((resolve, reject) => {
    // Simulating database call
    setTimeout(() => {
      resolve({ id: userId, name: 'John' }); // this retuns an object of user
    }, 1000);
  });
}

function getUserPosts(user) {
  return new Promise((resolve, reject) => {
    // Simulating API call
    setTimeout(() => {
      resolve(['Post 1', 'Post 2', 'Post 3']);
    }, 1000);
  });
}

// Chain the promises
getUser(123) // pass the user id and the getuser function returns and object 
  .then(user => {
    console.log('User:', user); // this will print out the user object {}
    return getUserPosts(user); // return an arrray when an object is passed as an argument
  })
  .then(posts => {
    console.log('Posts:', posts);
  })
  .catch(error => {
    console.error('Error:', error);
  });


// Promise.race() for First Result - the first result need to be fullfilled before the second one can start
// Promise.race() is useful when you need the result of the first settled promise, whether it's fulfilled or rejected.

const promise4 = new Promise(resolve => setTimeout(() => resolve('First result'), 1000));
const promise5 = new Promise(resolve => setTimeout(() => resolve('Second result'), 500)); // it will be logged first since the result of the second is faster than te first 

Promise.race([promise1, promise2])
  .then(result => {
    console.log('Fastest result:', result);
    // Will log 'Second result' because promise2 is faster
  });

// Promise Methods

// Promise.then()
// The then() method takes up to two arguments. The arguments are callback functions for the success and failure cases for the Promise.
myPromise
  .then(
    result => console.log(result),
    error => console.error(error)
  );

// Promise.catch()
// The catch() method handles rejected promises and is equivalent to .then(null, errorHandler).
myPromise
  .then(result => console.log(result))
  .catch(error => console.error(error));

// Promise.finally()
// The finally() method executes code regardless of whether the promise is fulfilled or rejected.
myPromise
  .then(result => console.log(result))
  .catch(error => console.error(error))
  .finally(() => console.log('Operation completed')); // runs regardless of the promise is fulfilled or rejected


// Error Handling in Promises
// Proper error handling is important.
// Promises provide several ways to handle errors:

// error handling using the prmoises
function fetchData() {
  return new Promise((resolve, reject) => {
    // Simulating an error
    reject(new Error('Network error'));
  });
}

// error handling using the fetchData function 
fetchData() // callback the function and processs the error
  .then(
    data => console.log('Data:', data),
    error => console.log('Error handled in then:', error.message) // print out the message object
  );

// Alternative method using catch
fetchData()
  .then(data => console.log('Data:', data))
  .catch(error => console.log('Error handled in catch:', error.message));


// Node.js async/await  Reading a File with Async/Await

const fs = require('fs').promises;

async function reasFile(){
  try{
    const data = await fs.readFile('myfile.txt', 'utf-8')
    console.log(data)
    
  }catch(err){
    console.error('Error reading file:', err)
  }
}

// error handling with try and catch block

async function fetchUserDaata(){
  try{
    const response = await fetch("https://api.example.com/users/1") // fetch the data from the api users

    // check if the reponse is not okay and the data is retuned throw a new error object to it
    if(!response.ok){
      throw new Error(`HTTP error: ${response.status}`) // throw an new error object 
    }
    const data = await response.json()
    console.log('User data:', data);
    return data;
  }catch(error){
    console.log('error fetching the data', error)
    throw error; // Re-throw the error if needed
  }finally{

  }
}

//Simulate an API call that fails
async function fetchUserData() {
  try {
    // Simulating a failed API request
    const response = await simulateHttpRequest(); // an object is returned
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const user = await response.json(); // will print out th error in the simulateHttpRequest
    console.log('User data:', user);
    return user;
  } catch (error) {
    console.error('Error in fetchUserData:', error.message); // this error is caught inside the async function
    throw error; // Re-throw the error
  }
}

// Simulate an HTTP request that fails - This promise will return an object 
function simulateHttpRequest() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        ok: false,
        status: 404,
        json: () => Promise.reject({ error: 'Not found' }) // this error will be printed out when when the reponse.json() function 
      });
    }, 1000);
  });
}

// Using catch with an async function - this error is caught outise the asycn function whan calling the function 
fetchUserData().catch(error => {
  console.log('Caught outside of async function:', error.message);
});

// Runnig promises in parallel
// Example: 

// Helper function to simulate an API call
function fetchData(id) {
  return new Promise(resolve => {
    setTimeout(() => resolve(`Data for ID ${id}`), 1000);
  });
}

// Sequential Operation - takes ~3 seconds since it has to wait for one to complete before proceeding to the nextcallback
async function fetchSequential() {
  console.time('sequential');
  const data1 = await fetchData(1);
  const data2 = await fetchData(2);
  const data3 = await fetchData(3);
  console.timeEnd('sequential');
  return [data1, data2, data3];
}

// Parallel operation - takes ~1 second since it runs only once and does not wait for once callback to complete
// it call all callback at once 
async function fetchParallel() {
  console.time('parallel');
  // all the functions are called at once 
  const results = await Promise.all([
    fetchData(1),
    fetchData(2),
    fetchData(3)
  ]);
  console.timeEnd('parallel');
  return results;
}

// Demo
async function runDemo() {
  console.log('Running sequentially...');
  const seqResults = await fetchSequential();
  console.log(seqResults); // this will take 3 seconds to complete
  
  console.log('\nRunning in parallel...');
  const parResults = await fetchParallel();
  console.log(parResults); // this will take 1 second to complete
}

runDemo();

// async/await vs promises vs callbacks
// using callbacks
function getUsers(userId, callback){
  setTimeout(() => {
    callback(null, {user: userId, name: "john"})
  })
}

function getUserPosts(userId, callback){
  setTimeout(() => {
    callback(null, ['Post 1', 'Posts 2']) // if there is no error in the callback function pass the null as the argument
  })
}

// using the callbacks
getUser(1, (error, user) => {
  if(error){
    console.error(error)
    return;
  }

  console.log(user); // The object that will be printed is: {user: userId, name: "john"}

  getUserPosts(user, (error, posts) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log('Posts:', posts);
  });

})

// using with promises
function getUserPromise(userId) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ id: userId, name: 'John' }); // it returns aon object 
    }, 1000);
  });
}

function getUserPostsPromise(user) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(['Post 1', 'Post 2']); // returns an array 
    }, 1000);
  });
}

// Using promises
getUserPromise(1)
  .then(user => {
    console.log('User:', user); // the console prints User: { id: 1, name: 'John' }
    return getUserPostsPromise(user);
  })
  .then(posts => {
    console.log('Posts:', posts); // the console prints : Posts: ['Post 1', 'Post 2']
  })
  .catch(error => {
    console.error(error);
  });


  // Example: 
// using promises
function getUserPromise(userId) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ id: userId, name: 'John' });
    }, 1000);
  });
}

function getUserPostsPromise(user) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(['Post 1', 'Post 2']);
    }, 1000);
  });
}

// Using async/await - 
async function getUserAndPosts() {
  try {
    const user = await getUserPromise(1);
    console.log('User:', user);
    
    const posts = await getUserPostsPromise(user);
    console.log('Posts:', posts);
  } catch (error) {
    console.error(error);
  }
}

getUserAndPosts();// call the function outise for it o run

// Node.js Error Handling

// Javascript Errors - typeError, Reference Error, Syntax Error

// System Error 

// ENOENT: No such file or directory
// ECONNREFUSED: Connection refused - 'ECONNREFUSED' or 'ENOTFOUND'

// Error-First Callbacks
const fs = require('fs');
// this function callback the function twice, wheen there is an error and when there is no error 

function readConfigFile(fileName, callback){
  fs.readFile(fileName, 'utf-8', (err, data) => {
    if(err){
      // Handle specific error types - error handling when the file / directory is not found
      if(err.code === 'ENOENT'){
        return callback(new Error(`Config file ${fileName} not found`)); //  create a new error object and it is assessed by the message property 
      }else if(err.code === 'EACCES'){
        return callback(new Error(`No permission to read ${fileName}`)); // creates a new error object 
      }
      // For all other errors
      return callback(err);
    }

    // process the data if no error
    try{
      const config = JSON.parse(data) // convert the data to object 
      callback(null, config) // pass null as the error object and the data that has been read 
    }catch (parseError) {
      callback(new Error(`Invalid JSON in ${fileName}`));
    }
  })
}

// the usage
readConfigFile('config.json', (err, config) => {
  if(err){
    console.error('Failed to read the config file', err.message) // the paramter of null is the err in the 
    // Handle the error (e.g., use default config)
    return;
  }
  console.log('Config loaded successfully:', config)
})

// Modern Error Handling - Recommended for Error Handling - avoids callback hell
// Using try...catch with Async/Await
// With async/await, you can use try/catch blocks for both synchronous and asynchronous code:

// The id can be the name of the file being requested by the client 
async function loadUserData(userId){

  try{
    const data = await fs.readFile(`users/${userId}.json`, 'utf8')
    const user = JSON.parse(data)

    if(user.email){
      throw new Error('Invalid user data: missing email')
    }

    return user;

  }catch(error){
      // handle different error types
      if(error.code === 'ENOENT'){
        throw new Error(`User ${userId} not found`); 
      }else if(error instanceof SyntaxError){
        throw new Error('Invalid user data format');  
      }
      // Re-throw other errors when found
      throw error;

  }finally {
    // Cleanup code that runs whether successful or not
    console.log(`Finished processing user ${userId}`);
  }

}

// Usage - this function calls the async function loadUserData
(async () => {
  try {
    const user = await loadUserData(123); // the id can be the name of the file being requested from the client 
    console.log('User loaded:', user);
  } catch (error) {
    console.error('Failed to load user:', error.message);
    // Handle error (e.g., show to user, retry, etc.)
  }

})(); // ou need to call the function so that it can run


// Global Error Handling 
// Uncaught Exceptions
// For unexpected errors, you can listen for uncaughtException to perform cleanup before exiting:

process.on('uncaughtException', (err) => {
  console.error('UNCAUGHT EXCEPTION! Shutting down...');
  console.error(err.name, err.message);
})

// Perform cleanup (close database connections, etc.) - closing the Database - closing the server 
server.close(() => {
   console.log('Process terminated due to uncaught exception');
  process.exit(1); // Exit with failure
})

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error('UNHANDLED REJECTION! Shutting down...');
  console.error(err.name, err.message);
  
  // Close server and exit
  server.close(() => {
    process.exit(1);
  });
  
})

// Example of an unhandled promise rejection
Promise.reject(new Error('Something went wrong'));

// Example of an uncaught exception
setTimeout(() => {
  throw new Error('Uncaught exception after timeout');
}, 1000);

// NB: Always handle "uncaughtExceptions" and "unhandleRejections' 