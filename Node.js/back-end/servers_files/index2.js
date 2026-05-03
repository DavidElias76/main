
// Node Modules
// Modules are the building blocks of Node.js applications, allowing you to organize code into logical, reusable components.

// exporitng mutiple functions from a module and items - in commonJS method
// Exporting multiple functions

// in util.js file
const getCurrentDate = () => new Date().toISOString();
const formatCurrency = (amount, currency = 'USD') => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency
  }).format(amount);
};

// Method 1: Exporting multiple items
exports.getCurrentDate = getCurrentDate;
exports.formatCurrency = formatCurrency;

// Method 2: Exporting an object with multiple properties 
// module.exports = { getCurrentDate, formatCurrency };

//  Exporting a Single Item

// in logger.js file 
class Logger {
  constructor(name) {
    this.name = name;
  }

  log(message) {
    console.log(`[${this.name}] ${message}`);
  }

  error(error) {
    console.error(`[${this.name}] ERROR:`, error.message);
  }
}

// Exporting a single class and needed to create an instance of the class when importing it
module.exports = Logger;


//  Using Your Modules to import the logger.js and util.js
// Import and use your custom modules using require() with a relative or absolute path:
// app.js

const http = require('http');
const path = require('path');

// Importing custom modules both the utils vs logger 
const { getCurrentDate, formatCurrency } = require('../util/utils'); // from utils.js file
const Logger = require('../util/logger'); // from the looger file 

// Create a logger instance
const logger = new Logger('App'); // pass the app as the name of the constructor

const server = http.createServer((req, res) => {
    try{
        logger.log(`Request received for ${req.url}`) // pass the text to log method
        
        // send the html tags to the client
        res.writeHead(200, { 'Content-Type': 'text/html' }); // sending a html file
        res.write(`<h1>Welcome to our app!</h1>`);
        res.write(`<p>Current date: ${getCurrentDate()}</p>`);
        res.write(`<p>Formatted amount: ${formatCurrency(99.99)}</p>`);
        res.end();
    }catch(error){
        logger.error(error)
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
    }
})

const PORT = 8080 || process.env.PORT;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));


try{
    res.writeHead(200, { 'Content-Type' : 'text/html'}); // 
}catch(error){
    logger.error(error)
}

// Node ES Modules (ESM)
// Using ES6 import/export syntax in Node.js

// math.js (CommonJS) Example: 
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
module.exports = {
  add,
  subtract
};
// app.js (CommonJS)
const math = require('./math');
console.log(math.add(5, 3)); // 8

// ES MODLUES EXAMPLE - RECOMMENDED

// math.mjs (ES Module)
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

// app.mjs (ES Module)
import { add, subtract } from './math.mjs';
console.log(add(5, 3)); // 8

// To use ES modules in Node.js, ensure your package.json includes "type": "module" or use the .mjs file extension.

// node modules- dynamic imports
// Dynamic imports allow you to load modules conditionally or on-demand using the import() function, which returns a promise.

// These would be in separate files:
// prod.mjs
export default function() {
  console.log('Production environment initialized');
}

// dev.mjs
export default function() {
  console.log('Development environment initialized');
}

// math.mjs
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

// Main application code - app.mjs

async function loadModule(moduleName){

    try{
         // Simulate dynamic import
        console.log(`Loading ${moduleName} module...`); // first line of code to be printed out

        // In a real ESM implementation, this would be:
        // const module = await import(`./${moduleName}.mjs`);

        // For demonstration, we'll simulate the module loading:

    let module;
    if(moduleName === 'dev'){
      // create an development object
           module = {
            default: function() {
            console.log('Development environment initialized');
            }       
        }
    }else if(moduleName === 'prod'){
      // creating o production object 
        module = {
            default: function (){
                console.log('Production evironment initialized ')
            }
        }
    }else if (moduleName === 'math') {
      module = {
        add: (a, b) => a + b,
        subtract: (a, b) => a - b
      };
    }
        console.log(`${moduleName} module loaded successfully`);
        return module;
    }catch(error){
        console.error(`Failed to load ${moduleName}:`, error);
    }
}

// Set a mock environment variable for demo purposes
const NODE_ENV = 'development';  // This would normally come from process.env.NODE_ENV


// Set a mock environment variable for demo purposes
const NODE_ENV_2 = 'production';  // This would normally come from process.env.NODE_ENV

// Load a module based on a condition - pass in production or development according NODE_ENV  
const moduleName = NODE_ENV === 'production' ? 'prod' : 'dev';

// / First example - using promise chain
loadModule(moduleName).then(module => {
  module.default(); // Call the default export function 
});

// Second example - using async/await in an IIFE
(async () => {
  console.log('\nLoading math module with await syntax:');
  const mathModule = await loadModule('math'); // pass the math as its arugument 
  console.log(`10 + 5 = ${mathModule.add(10, 5)}`); // call the add property 
  console.log(`20 - 8 = ${mathModule.subtract(20, 8)}`); // call the subtract property 
})();

// NOTE: WHEN USING THE (.JS) EXTENSION YOU NEED TO CONFIGURE THE PACKAGE.JSON FILE BY ADDING THE "TYPE: "MODULE" IN ODER TO USE THE IMPORT/EXPORTS 
// NOTE WHEN YOU ARE USING THE (.MJS) EXTENSION YOU DONT NEED TO CONFIGURE THE PACKAGE .JSON FILE SINCE SINCE NODEJS AUTOMATICALLY ACCEPTS THE IMPORTS AND EXPORTS 

// Node.js package.json
// package.json is a special file that describes your Node.js project.
// It contains information about your app, such as its name, version, dependencies, scripts, and more.
// This file is essential for managing and sharing Node.js projects, especially when using npm (Node Package Manager).
