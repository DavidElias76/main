
// The Timers module provides functions that help schedule code execution at specific times or intervals.

// delayed executions  - setTimeout()
// repeated executiosn - setInterval()
// Immediate execution in the next loop - setImmediate()

// import the setTimeouts, setInterval and setImmediate () from the timer library
const { setTimeout, setInterval, setImmediate } = require('timers'); 

console.log('Starting timers...');

// Execute once after delay
setTimeout(() => {
  console.log('This runs after 1 second');
}, 1000);

// Execute repeatedly at interval
let counter = 0;
const interval = setInterval(() => {
  counter++;
  console.log(`Interval tick ${counter}`);
  if (counter >= 3) clearInterval(interval);
}, 1000);

// Execute in the next event loop iteration
setImmediate(() => {
  console.log('This runs in the next iteration of the event loop');
});

console.log('Timers scheduled');

// setTimeout()
// schedules an execution after a specific amount of time in milliseconds

// NB:ALWAYS CLEAR OUT THE SETTIMEOUT FUNCTION
// / Basic usage
setTimeout(() => {
  console.log('This message is displayed after 2 seconds');
}, 2000);

// With arguments from a function 
setTimeout((name) => {
  console.log(`Hello, ${name}!`);
}, 1000, 'World');

// Storing and clearing a timeout
const timeoutId = setTimeout(() => {
  console.log('This will never be displayed');
}, 5000);

// Cancel the timeout before it executes using the name variable of the function
clearTimeout(timeoutId);
console.log('Timeout has been cancelled');


// Promise-Based setTimeout
// Node.js 15.0.0 and later provide a promises-based API for timers:

const { setTimeout } = require('timers/promises');

async function delayedGreeting() {
  console.log('Starting...');

  // Wait for 2 seconds
  await setTimeout(2000);

  console.log('After 2 seconds');

  // Wait for 1 second with a value
  const result = await setTimeout(1000, 'Hello, World!');

  console.log('After 1 more second:', result);
}

delayedGreeting().catch(console.error);


// setInterval() and clearInterval()
// The setInterval() function calls a function repeatedly at specified intervals (in milliseconds).
// It returns an Interval object that can be used to stop the interval.

// Note: The actual interval between executions may be longer than specified if the event loop is blocked by other operations.

// Basic interval
let counter_1 = 0;

const intervalId = setInterval(() => {
  counter_1++;
  console.log(`Interval executed ${counter_1} times`);

  // Stop after 5 executions
  if (counter_1 >= 5) {
    clearInterval(intervalId);
    console.log('Interval stopped');
  }
}, 1000);

// Interval with arguments
const nameInterval = setInterval((name) => {
  console.log(`Hello, ${name}!`);
}, 2000, 'Node.js');

// Stop the name interval after 6 seconds -it will run after every one second and clear when it reaches 6 seconds
setTimeout(() => {
  clearInterval(nameInterval);
  console.log('Name interval stopped');
}, 6000);

// setImmediate() and clearImmediate()
// The setImmediate() function schedules a callback to run in the next iteration of the event loop, after I/O events but before timers.

console.log('Start');

setTimeout(() => {
  console.log('setTimeout callback');
}, 0);

setImmediate(() => {
  console.log('setImmediate callback');
});

process.nextTick(() => {
  console.log('nextTick callback');
});

console.log('End');


// Canceling an Immediate
const immediateId = setImmediate(() => {
  console.log('This will not be displayed');
});

clearImmediate(immediateId);
console.log('Immediate has been cancelled');


// process.nextTick()
// Although not part of the Timers module, process.nextTick() is a related function that defers a callback until the next iteration of the event loop, but executes it before any I/O events or timers.

// Runs before any I/O events or timers , Higher priority than setImmediate()

console.log('Start');

// Schedule three different types of callbacks
setTimeout(() => {
  console.log('setTimeout executed');
}, 0);

setImmediate(() => {
  console.log('setImmediate executed');
});

process.nextTick(() => {
  console.log('nextTick executed'); // this will be runned first compared to other I/O opertaions and timers
});

console.log('End');


// Advanced Timer Patterns
// Debouncing - Function runs only after things become quiet.
// Prevent a function from being called too frequently by delaying its execution:

function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}
// Example usage
const handleResize = debounce(() => {
  console.log('Window resized');
}, 300);
// Call handleResize() on window resize


// Throttling - Runs repeatedly at fixed intervals. - No matter how many events.
// Limit how often a function can be called over time:
// This function will run every time the event fires

function throttle(func, limit) {
  let inThrottle = false;
  // the function accepts all arguments by spreading them 
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit); // after the Reset flag Function allowed again
    }
  };
}
// Example usage
const handleScroll = throttle(() => {
  console.log('Handling scroll');
}, 200);
// Call handleScroll() on window scroll


// Sequential Timeouts
// Execute a series of operations with delays between them:

function sequentialTimeouts(callbacks, delay = 1000) {
  let index = 0;
  function next() {
    if (index < callbacks.length) {
      callbacks[index]();
      index++;
      setTimeout(next, delay);
    }
  }
  next();
}
// Example usage
sequentialTimeouts([
  () => console.log('Step 1'),
  () => console.log('Step 2'),
  () => console.log('Step 3')
], 1000);


// Measuring Timer Accuracy
const desiredDelay = 100; // 100ms
const start = Date.now();

setTimeout(() => {
  const actualDelay = Date.now() - start;
  console.log(`Desired delay: ${desiredDelay}ms`);
  console.log(`Actual delay: ${actualDelay}ms`);
  console.log(`Difference: ${actualDelay - desiredDelay}ms`);
}, desiredDelay);


// Memory and Resource Management
// Proper management of timers is crucial to prevent memory leaks and excessive resource usage:

// Common Memory Leak Patterns
// Leak: Interval keeps running even if not needed
function startService() {
  setInterval(() => {
    fetchData();
  }, 1000);
}
// Leak: Timeout with closure over large object
function processData(data) {
  setTimeout(() => {
    console.log('Processing complete');
   // 'data' is kept in memory until the timeout fires
  }, 10000, data);
}


// Zero-Delay Timeouts
// When using setTimeout(callback, 0), the callback doesn't execute immediately.
// It executes after the current event loop cycle completes, which can be used to "break up" CPU-intensive tasks:

function processArray(array, processFunction) {
  const chunkSize = 1000;
  let index = 0;

  function processChunk() {
    const chunk = array.slice(index, index + chunkSize);
    chunk.forEach(processFunction);

    index += chunkSize;

    if (index < array.length) {
      setTimeout(processChunk, 0); // Yield to the event loop
    } else {
      console.log('Processing complete');
    }
  }

  processChunk();
}

// Example usage
const bigArray = Array(10000).fill().map((_, i) => i);

console.log('Starting processing...');
processArray(bigArray, (item) => {
  // Simple processing
  if (item % 5000 === 0) {
    console.log(`Processed item ${item}`);
  }
});
console.log('This will log before processing completes');