
// The Util module is a core Node.js module that provides a collection of utility functions for common tasks.

// Note: While some functions in the Util module are designed for internal use by Node.js itself, many are valuable tools for developers building Node.js applications.
// The module is included with Node.js, so no installation is required.

const util = require('util'); // import th eutil module
const fs = require('fs'); // import the file system module

// Convert callback-based fs.readFile to Promise-based
const readFile = util.promisify(fs.readFile);

// Format strings with placeholders - uses the paceholder %s for string formatting 
const greeting = util.format('Hello, %s! Today is %s', 'Developer', new Date().toDateString()); // Hello, Developer! Today is Wed Jun 11 2025
console.log(greeting);

// Inspect an object with custom options
const obj = {
  name: 'Test',
  nested: { a: 1, b: [2, 3] },
  fn: function() { return 'test'; }
};

// Pretty-print objects for debugging. - colors: true → colored output in terminal, depth: 2 → how deep nested objects are shown
console.log(util.inspect(obj, { colors: true, depth: 2 })); // Without inspect → objects may collapse or hide details.

// Use debug logging - Creates conditional debug logger.
const debug = util.debuglog('app');
// Run with debug enabled - on the terminal NODE_DEBUG=app node app.js
debug('This will only show if NODE_DEBUG=app');

// Example of using promisify with async/await
async function readConfig() {
  try {
    const data = await readFile('package.json', 'utf8'); // because of promisify no callback needed - return the file content as a string  
    console.log('Package name:', JSON.parse(data).name);
  } catch (err) {
    console.error('Error reading config:', err);
  }
}
readConfig();


// importing and setup
// Commin.js module
// Import the entire module
const util = require('util');

// Import specific functions using destructuring - promisify 
const { promisify, inspect, format } = require('util');

// Using strict mode (recommended)
const assert = require('assert').strict;

// For TypeScript users
// import * as util from 'util';
// import { promisify, inspect } from 'util';


// ES Modules

// Default import
import util from 'util';

// Named imports
import { promisify, inspect } from 'util';

// Rename imports
import { promisify as pify } from 'util';

// Dynamic import (Node.js 14+)
const { promisify } = await import('util');

// Using with TypeScript types
// import * as util from 'util';

// String format and Inspection:

// util.format(format[, ...args]) passing the format and the argument of the text
// Returns a formatted string using the first argument as a printf-like format string.

// Basic formatting
const formatted = util.format('Hello, %s!', 'World'); // format the text
console.log(formatted); // 'Hello, World!'

// Multiple placeholders
const multiFormatted = util.format(
  'My name is %s. I am %d years old and I love %s.',
  'Kai',
  30,
  'Node.js'
);
console.log(multiFormatted);
// 'My name is Kai. I am 30 years old and I love Node.js.'

// Available specifiers
const specifiers = util.format(
  'String: %s, Number: %d, JSON: %j, Character: %c', // the string will have hello, the number will have 42 and the character will have the 65(A)
  'hello',
  42,
  { name: 'Object' },
  65  // ASCII code for 'A'
);
console.log(specifiers);

// Extra arguments are concatenated with spaces
const extra = util.format('Hello', 'World', 'from', 'Node.js');
console.log(extra); // 'Hello World from Node.js'

// Basic usage
const new_obj = {
  name: 'John',
  age: 30,
  hobbies: ['reading', 'coding'],
  address: {
    city: 'New York',
    country: 'USA'
  },
  toString() {
    return `${this.name}, ${this.age}`;
  }
};

// Default inspection
console.log(util.inspect(new_obj));

// - Adding options properties to the object - Custom options
console.log(util.inspect(new_obj, {
  colors: true, // Add ANSI color codes
  depth: 0, // Only inspect the first level
  showHidden: true, // Show non-enumerable properties
  compact: false, // Don't format objects on a single line
  showProxy: true, // Show proxy details
  maxArrayLength: 3, // Limit array elements displayed
  breakLength: 50, // Line break after 50 characters
  sorted: true // Sort object properties alphabetically
}));

// Circular references
const circular = { name: 'Circular' };
circular.self = circular;
console.log(util.inspect(circular));

// The output: 
// default inspection
// {
//   name: 'John',
//   age: 30,
//   hobbies: [ 'reading', 'coding' ],
//   address: { city: 'New York', country: 'USA' },
//   toString: [Function: toString]
// }

// After adding the properties
// {
//   address: [Object],
//   age: 30,
//   hobbies: [Array],
//   name: 'John',
//   toString: [Function]
// }
// <ref *1> { name: 'Circular', self: [Circular *1] }


// util.inspect.custom - Recommeded when inspecting objects
// Symbol used to customize object inspection.

// This allows objects to define their own string representation when inspected.

// Class with custom inspection
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this._private = 'hidden information';
  }
  
  // Custom inspect method
  [util.inspect.custom](depth, options) {
    return `Person(${this.name}, ${this.age})`;
  }
}
const kai = new Person('Kai', 30);

// Custom inspection is used
console.log(util.inspect(kai)); // Person(Kai, 30)

// Directly using console.log also uses custom inspection
console.log(kai); // Person(Kai, 30)

// util.promisify(original)
// Converts a callback-based function following the Node.js callback pattern to a function that returns a Promise.
// This is useful for working with older Node.js APIs that use callbacks.

// Example:

// Convert fs.readFile from callback-based to Promise-based
const readFilePromise = util.promisify(fs.readFile);

// Now we can use it with async/await or Promise chaining
async function readFileExample() {
  try {
    // Using the promisified function
    const data = await readFilePromise('package.json', 'utf8');
    console.log('File content:', data.substring(0, 100) + '...');
    
    // Error handling with try/catch
    return 'File read successfully';
  } catch (err) {
    console.error('Error reading file:', err.message);
    return 'Error reading file';
  }
}

readFileExample().then(result => {
  console.log('Result:', result);
});

// util.callbackify(original)
// Converts a function that returns a Promise to a function that follows the Node.js callback pattern.

// This is useful for working with older Node.js APIs that expect callback functions.

// A Promise-based function
async function fetchUserData(id) {

  if (!id) {
    throw new Error('ID is required');
  }
  
  // Simulate API request
  return {
    id,
    name: `User ${id}`,
    email: `user${id}@example.com`
  };
}

// Convert to callback-based
const fetchUserDataCallback = util.callbackify(fetchUserData);

// Using the callback-based function
fetchUserDataCallback(1, (err, user) => {
  if (err) {
    console.error('Error:', err);
    return;
  }
  
  console.log('User data:', user);
});

// Error handling
fetchUserDataCallback(null, (err, user) => {
  if (err) {
    console.error('Error occurred:', err.message);
    return;
  }
  
  console.log('User data:', user); // This won't execute
});

// util.promisify.custom
// Symbol to customize promisification behavior. This allows you to provide a custom implementation when a function is promisified.

// / Function with custom promisification

function doSomething(options, callback) {
  callback(null, 'regular result');
}

// Define custom promisification
doSomething[util.promisify.custom] = (options) => {
  return Promise.resolve('custom promisified result');
};

// Use the custom promisification
const promisified = util.promisify(doSomething);

// Compare the results
async function compareResults() {
  // Original function with callback
  doSomething({}, (err, result) => {
    console.log('Callback result:', result); // regular result 
  });

  // Custom promisified function
  const customResult = await promisified({});
  console.log('Promisified result:', customResult);
}

compareResults();


// Type Checking Utilities
// The Util module provides comprehensive type checking utilities that are more reliable than JavaScript's typeof operator, especially for built-in objects and Node.js-specific types.

const util = require('util');

// Example values
const values = [
  'string',
  123,
  true,
  Symbol('symbol'),
  { key: 'value' },
  [1, 2, 3],
  null,
  undefined,
  () => {},
  BigInt(123),
  new Date(),
  /regex/,
  Buffer.from('buffer'),
  new Error('error')
];

// Check types for each value
values.forEach(value => {
  console.log(`Value: ${util.inspect(value)}`);
  console.log(`- isArray: ${util.types.isArrayBuffer(value)}`);
  console.log(`- isDate: ${util.types.isDate(value)}`);
  console.log(`- isRegExp: ${util.types.isRegExp(value)}`);
  console.log(`- isNativeError: ${util.types.isNativeError(value)}`);
  console.log(`- isPromise: ${util.types.isPromise(value)}`);
  console.log(`- isPrimitive: ${util.isPrimitive(value)}`);
  console.log(`- isString: ${util.isString(value)}`);
  console.log(`- isNumber: ${util.isNumber(value)}`);
  console.log(`- isBoolean: ${util.isBoolean(value)}`);
  console.log(`- isSymbol: ${util.types.isSymbol(value)}`);
  console.log(`- isNull: ${value === null}`);
  console.log(`- isUndefined: ${value === undefined}`);
  console.log(`- isFunction: ${util.types.isFunction(value)}`);
  console.log(`- isBuffer: ${Buffer.isBuffer(value)}`);
  console.log('---');
});

// util.types
// The util.types provides type checking functions for various JavaScript types and Node.js-specific objects:

const util = require('util');

// JavaScript built-in types
console.log('util.types.isDate(new Date()):',
  util.types.isDate(new Date()));
console.log('util.types.isRegExp(/test/):',
  util.types.isRegExp(/test/));
console.log('util.types.isPromise(Promise.resolve()):',
  util.types.isPromise(Promise.resolve()));

// Node.js-specific types
console.log('util.types.isArrayBuffer(new ArrayBuffer(0)):',
  util.types.isArrayBuffer(new ArrayBuffer(0)));
console.log('util.types.isSharedArrayBuffer(new SharedArrayBuffer(0)):',
  util.types.isSharedArrayBuffer(new SharedArrayBuffer(0)));
console.log('util.types.isUint8Array(new Uint8Array()):',
  util.types.isUint8Array(new Uint8Array()));

// More advanced types
console.log('util.types.isProxy(new Proxy({}, {})):',
  util.types.isProxy(new Proxy({}, {})));
console.log('util.types.isExternal(Requiring C++ binding):',
  'Not demonstrated in this example');


// util.deprecate(fn, msg[, code])
// Marks a function as deprecated, issuing a warning when it's called. - it tell the codebase not to use specific function but use another function instead

const util = require('util');

// Original function
function oldFunction(x, y) {
  return x + y;
}

// Deprecate the function
const deprecatedFunction = util.deprecate(
  oldFunction, // function
  'oldFunction() is deprecated. Use newFunction() instead.', // msg
  'DEP0001' // the code provided
);

// New function
function newFunction(x, y) {
  return x + y;
}

// Using the deprecated function will show a warning
console.log('Result:', deprecatedFunction(5, 10));

// Using the new function
console.log('Result:', newFunction(5, 10));

// The output 
// Result: 15
// Result: 15
// (node:16996) [DEP0001] DeprecationWarning: oldFunction() is deprecated. Use newFunction() instead.
// (Use `node --trace-deprecation ...` to show where the warning was created)


// Managing Deprecation Warnings
// You can control the display of deprecation warnings using environment variables:

// # Show all deprecation warnings
// NODE_OPTIONS='--trace-deprecation'

// # Show only the first occurrence of each deprecation
// NODE_OPTIONS='--no-deprecation'

// # Silence all deprecation warnings
// NODE_OPTIONS='--no-warnings'

// # Turn deprecation warnings into exceptions
// NODE_OPTIONS='--throw-deprecation'


// util.debuglog(section)
// Creates a function that conditionally writes debug messages to stderr based on the NODE_DEBUG environment variable.

// This is a lightweight alternative to full-featured logging libraries.

const util = require('util');

// Create debug loggers for different sections
const debugApp = util.debuglog('app');
const debugDB = util.debuglog('db');
const debugAuth = util.debuglog('auth');

// These messages only appear when NODE_DEBUG includes 'app'
debugApp('Application starting...');
debugApp('Configuration loaded from %j', { source: 'config.json' });

// These messages only appear when NODE_DEBUG includes 'db'
debugDB('Connected to database');
debugDB('Query executed: %s', 'SELECT * FROM users');

// These messages only appear when NODE_DEBUG includes 'auth'
debugAuth('User authenticated: %s', 'john.doe');

// To see these messages, run your app with:
// NODE_DEBUG=app,db node your-app.js
console.log('Application running normally (this always shows)');