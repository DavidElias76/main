
// basci promises

const fetchData = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { id: 1, name: 'Product' };
            const success = true;

            if(success){
                console.log('Data received successfully')
                 resolve(data); // Fulfilled with data
            }else{
                reject(new Error('Failed to fecth data'))
            }

        }, 3000)
    })
}

fetchData().then(data => {
    console.log("Data reived sucessfully")
    return data.id;
})
.then(id=> {
    console.log('Processing Id', id)
})
.catch(err => {
    console.log('Error: ', err.message)
}).finally(() => {
    console.log('Operation completed (success or failure)');
})


// basic await ans async function 
// function that return a promise

const fetchDataDetails = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if(id > 0){
                resolve({ id, name: `User ${id}` })
            }else{
                reject(new Error('Failed to receive Data'))
            }
        }, 3000)
    })
}

// using the async and await 
async function getUserData(id){
    console.log('Fetching user....')
    try{
        const user = await fetchDataDetails(id) //// Waits for the promise to resolve
        console.log("User data", user)

         // You can use the result directly
        return `${user.name}'s profile`;
    }catch(err){
         // Handle errors with try/catch
        console.error('Error fetching user:', error.message);
        return 'Guest profile';
    }
}


// Async functions always return promises
console.log('Starting...');

// Async functions always return promises
console.log('Starting...');
getUserData(1)
  .then(result => console.log('Result:', result))
  .catch(error => console.error('Unexpected error:', error));
console.log('This runs before getUserData completes');

// Optional Chaining and Nullish Coalescing
// Modern JavaScript introduces syntax to safely access nested properties and provide fallback values.

// Optional Chaining (?.)
// Optional chaining lets you access deeply nested object properties without worrying about null or undefined values in the chain.

// Example: Optional Chaining
function getUserCity(user) {
  return user?.address?.city;
}

const user1 = {
  name: 'Alice',
  address: { city: 'New York', country: 'USA' }
};

const user2 = {
  name: 'Bob'
};

const user3 = null;

console.log(getUserCity(user1)); // 'New York'
console.log(getUserCity(user2)); // undefined


// Nullish Coalescing (??)
// The nullish coalescing operator (??) provides a default value when a value is null or undefined (but not for other falsy values like 0 or "").

// Example: Nullish Coalescing
function calculatePrice(price, tax) {
  // Only uses default if tax is null or undefined
  return price + (tax ?? 0.1) * price;
}

console.log(calculatePrice(100, 0)); // 100 (correct! tax of 0 was used)
console.log(calculatePrice(100, null)); // 110 (using default)

// Modern Asynchronous Patterns
// Sequential vs Parallel Execution:

// Sequential: Operations run one after another, each waiting for the previous to complete
// Parallel: Operations run simultaneously, which is more efficient when operations are independent - suing the promise.all([promise1, promise2, promise3])


// Child Processes
// Node.js can run system commands and other scripts using the child_process module.

// 1. Execute a Simple Command
const { exec } = require('child_process');

exec('ls -la', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(`Output: ${stdout}`);
});

// 2. Using spawn for Large Output
// const { spawn } = require('child_process');

// Better for large data output
const child = spawn('find', ['/', '-type', 'f']);
child.stdout.on('data', (data) => {
  console.log(`Found file: ${data}`);
});
child.stderr.on('data', (data) => {
  console.error(`Error: ${data}`);
});
child.on('close', (code) => {
  console.log(`Child process exited with code ${code}`);
});


// Process Monitoring and Performance
// 1. Memory Usage
// Get memory usage in MB
function getMemoryUsage() {
  const used = process.memoryUsage(); // access the memeory usage
  return {
    rss: `${Math.round(used.rss / 1024 / 1024 * 100) / 100} MB`,
    heapTotal: `${Math.round(used.heapTotal / 1024 / 1024 * 100) / 100} MB`,
    heapUsed: `${Math.round(used.heapUsed / 1024 / 1024 * 100) / 100} MB`,
    external: `${Math.round(used.external / 1024 / 1024 * 100) / 100} MB`
  };
}

// Monitor memory usage every 5 seconds
setInterval(() => {
  console.log('Memory usage:', getMemoryUsage());
}, 5000);

// 2. CPU Usage
const startUsage = process.cpuUsage(); // access the cpu usage

// Do some CPU-intensive work
for (let i = 0; i < 1000000000; i++) {}

const endUsage = process.cpuUsage(startUsage);
console.log('CPU usage (user):', endUsage.user / 1000, 'ms');
console.log('CPU usage (system):', endUsage.system / 1000, 'ms');