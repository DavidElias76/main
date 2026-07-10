import { isUtf8 } from 'buffer'
import express from 'express'
import fs from 'fs'
import http from "http"
import https from 'https'
const app = express()

app.get('/', (req, res) => {
    res.json({ message: 'server is running'})
    res.status(200).json({message: "the server is not running as it should"})
})

fs.readFile('./myfile.txt',  'utf8', (err, data) => {
    try{
         console.log('File content: ' + data);
    }catch(err) {
        console.log("Error readin the file", err)
    }
})

// gttp server object 

const server = http.createServer((req, res) => {
    if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  if(req.url === "/") {
    fs.readFile('myfile.txt', "utf8", (req, res) => {
        // there is an error in reading the file
        if (err) {
            // tell the browser the type of file that is being sent to the client(text/plain, application/json) - sets up the http header by defining the status code and the content type
        res.writeHead(500, { 'Content-Type': 'text/plain' }); // it tells the server this file is a plain text or another file like html
        res.end('Error reading file: ' + err); // send an error message // ends the server
        return;
      }
    })
  }
})

// Node.js
https.get('https://example.com', res => {
  let data = ''; // teh varibale that i sgoing to store the data 
  res.on('data', chunk => data += chunk); // concatenate the data(chunk) and the varibale(data)
  res.on('end', () => console.log(data)); // log the data 
});

// Modern asycn patterns

import fs from "fs/promises"
import { rejects } from 'assert'
import { setDefaultAutoSelectFamily } from 'net'

console.log('1. reading the file 1') // this will be runned first 
fs.readFile('myfile.txt', 'utf8')
    .then(data =>  {
      console.log('3. file content data', data)
    }).catch(err => console.log('error reading the fle try again')) // this will be runned the third time

    console.log("2. reading the file ") // this will be runned the second time


// Recommneded asycn function 

const readFile = async () => {
  try{
    console.log('1. Starting to read files...'); // this will be printed first 
    const data1 = await fs.readFile('file1.txt', 'utf8');
    const data2 = await fs.readFile('file2.txt', 'utf8');
    console.log('2. Files read successfully!'); // this will be printed the second time
    return { data1, data2 };

  }catch(err) {
     console.error('Error reading files:', error);
  }
}

// Promises
const myPromise = (resolve, reject) => {
  // simulate async function
  setTimeout(() => {    
    const sucess = Math.random < 0.5
    if(sucess) {
      resolve('Operation completed successfully')
    }else{
      reject('Operation not completed')
    }
  }, 1000)
}

myPromise.then(result => console.log('Success:', result)).catch(error => console.error('Error:', error.message));

const fs = require('fs').promises;
const promise1 = Promise.resolve('First result'); // this wil be prited first 
const promise2 = new Promise((resolve) => setTimeout(() => resolve('Second result'), 1000)); // this will be printed second time 
const promise3 = fs.readFile('data.txt', 'utf8'); // Read local file instead of fetch

Promise.all([promise1, promise2, promise3]) // runnig the array of promises and getting the result
  .then(results => {
    console.log('Results:', results);
    // results[0] is from promise1
    // results[1] is from promise2
    // results[2] is the content of data.txt
  })
  .catch(error => {
    console.error('Error in one of the promises:', error);
  });

// Modern async/awaut function

async function getData() {
  console.log('Starting...');
  const result = await someAsyncOperation(); // call back the fuction and once completed the rest of te code will be runned
  console.log(`Result: ${result}`);
  return result;
}

function someAsyncOperation() {
  return new Promise(resolve => {
    setTimeout(() => resolve('Operation completed'), 1000);
  });
}
// Call the async function
getData().then(data => console.log('Final data:', data));


// Error Handling with Async/Await
async function fetchUserData() {
  try {
    const response = await fetch('https://api.example.com/users/1');
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const user = await response.json(); // the data is converted to json format
    console.log('User data:', user);
    return user; // return te user object
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error; // Re-throw the error if needed
  }
}
      
// Example: Sequential vs Parallel Operations

// Helper function to simulate an API call
function fetchData(id) {
  return new Promise(resolve => {
    setTimeout(() => resolve(`Data for ID ${id}`), 1000);
  });
}

// Sequential operation - takes ~3 seconds - opne operation has to wait for another before completing the other one
async function fetchSequential() {
  console.time('sequential');
  const data1 = await fetchData(1);
  const data2 = await fetchData(2);
  const data3 = await fetchData(3);
  console.timeEnd('sequential');
  return [data1, data2, data3];
}

// Parallel operation - takes ~1 second - all operation run at once
async function fetchParallel() {
  console.time('parallel');
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
  console.log(seqResults);
  
  console.log('\nRunning in parallel...');
  const parResults = await fetchParallel();
  console.log(parResults);
}

runDemo();

// With callbacks
function getUser(userId, callback) {
  setTimeout(() => {
    callback(null, { id: userId, name: 'John' });
  }, 1000);
}

function getUserPosts(user, callback) {
  setTimeout(() => {
    callback(null, ['Post 1', 'Post 2']);
  }, 1000);
}

// Using callbacks
getUser(1, (error, user) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log('User:', user);
  
  getUserPosts(user, (error, posts) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log('Posts:', posts);
  });
});

// example of uing callback function as argument
const getUserData = (userId, callback)=> {
  setTimeout(() => {
    callback(null, {user: 1, name: 'john'})
  }, 1000)
}

getUserData(1, (err, user) => {
  if(error) {
    throw err
    return;
  }
   console.log('User:', user);
})

const util = require('util');
const fs = require('fs');

// Convert callback-based function to Promise-based
const readFile = util.promisify(fs.readFile); // conerting a callback function to promise function

async function readFileContents() {
  const data = await readFile('file.txt', 'utf8');
  return data;
}


// Node.js error handling
function readConfigFile(filename, callback) {
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      // Handle specific error types -
      if (err.code === 'ENOENT') { //  file not in the directory 
        return callback(new Error(`Config file ${filename} not found`));
      } else if (err.code === 'EACCES') { // no permission in te file
        return callback(new Error(`No permission to read ${filename}`));
      }
      // For all other errors
      return callback(err);
    }

    // Process data if no error
    try {
      const config = JSON.parse(data);
      callback(null, config);
    } catch (parseError) {
      callback(new Error(`Invalid JSON in ${filename}`));
    }
  });
}

// Usage
readConfigFile('config.json', (err, config) => {
  if (err) {
    console.error('Failed to read config:', err.message);
    // Handle the error (e.g., use default config)
    return;
  }
  console.log('Config loaded successfully:', config);
});

// Modern Error Handling
// Using try...catch with Async/Await
async function loadUserData(userId) {
  try {
    const data = await fs.readFile(`users/${userId}.json`, 'utf8'); // read the file saved on the user folder
    const user = JSON.parse(data); // convert from json file to an object

    if (!user.email) {
      throw new Error('Invalid user data: missing email');
    }
    return user;

  } catch (error) {
    // Handle different error types
    if (error.code === 'ENOENT') { // no current file in the directory 
      throw new Error(`User ${userId} not found`);
    } else if (error instanceof SyntaxError) {
      throw new Error('Invalid user data format');
    }
    // Re-throw other errors
    throw error;
  } finally {
    // Cleanup code that runs whether successful or not
    console.log(`Finished processing user ${userId}`);
  }
}

// Usage
(async () => {
  try {
    const user = await loadUserData(123);
    console.log('User loaded:', user);
  } catch (error) {
    console.error('Failed to load user:', error.message);
    // Handle error (e.g., show to user, retry, etc.)
  }
})();

// Dynamic Imports

// app.mjs
async function loadModule(moduleName) {
  try {
    // Dynamic import returns a promise- import the module name as a file 
    const module = await import(`./${moduleName}.mjs`); // the name of the module file - es module method 
    return module;
  } catch (error) {
    console.error(`Failed to load ${moduleName}:`, error);
  }
}

// Load a module based on a condition
const moduleName = process.env.NODE_ENV === 'production' ? 'prod' : 'dev'; // if it is production use the prod else dev 

loadModule(moduleName).then(module => {
  module.default(); // Call the default export
});

// Or with simpler await syntax
(async () => {
  const mathModule = await import('./math.mjs');
  console.log(mathModule.add(10, 5)); // 15
})();

// HTTP MODULE

// Import the HTTP module
const http = require('http');

// Create a server object
const server = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and Content type - 
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send the response body as 'Hello, World!'
  res.end('Hello, World!\n'); // send the repoonse and end
});


// Accessing the Request URL
const http = require('http');

const server = http.createServer((req, res) => {
  // Get the URL and HTTP method
  const { url, method } = req; // the http method can be(GET, POST, PUT, DELETE) and the url contains the url string that was requested by the client

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`You made a ${method} request to ${url}`);
});

// // GET example of a path url : {
//   "pathname": "/products",
//   "query": {
//     "category": "electronics",
//     "sort": "price",
//     "page": "2"
//   },
//   "fullUrl": "/products?category=electronics&sort=price&page=2" // the full url
// }

// Working with Query Strings - constructing a new url 

const { URL } = require('url');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
  // Using the newer URL API (Node.js 10+)
  const baseURL = 'http://' + req.headers.host + '/';   // eg =  http://localhost:3000
  const parsedUrl = new URL(req.url, baseURL); // used when constructing a new ulr path to be sent to te client

  // Get query parameters
  const params = Object.fromEntries(parsedUrl.searchParams);

  // Example of building a query string to send to the client
  const queryObj = {
    name: 'John Doe',
    age: 30,
    interests: ['programming', 'music']
  };
  const queryStr = querystring.stringify(queryObj); // converts to string

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    path: parsedUrl.pathname,
    params,
    exampleQueryString: queryStr
  }, null, 2));
});

// The output will be:
//  {
//   "path": "/products",
//   "params": {
//     "category": "electronics",
//     "sort": "price",
//     "page": "2"
//   },
//   "exampleQueryString": "name=John%20Doe&age=20&interest=programming&interest=music"
// }


// Node.js File System Module

import fs from 'fs';
// 

//  Read file asynchronously with callback
fs.readFile('myfile.txt', 'utf8', (err, data) => {
  if(err) {
    console.log("'Error rading the file" , err)
  } console.log("File read successfully")
})

// For binary data (like images), omit the encoding
fs.readFile('image.png', (err, data) => {
  if (err) throw err;
  // data is a Buffer containing the file content
  console.log('Image size:', data.length, 'bytes');
});

import fs from 'fs/promises'; // alows the use of async and await methods

// reading the file sung the asycn and awai keyword 
async function readfile() {
  try{
    const data = await fs.readFile('myfile.txt', 'utf8');
    console.log("Fie content", data)

  }catch (err) {
    console.error('Error reading file:', err);
  }
}

readFileExample();

// Or with util.promisify (Node.js 8.0.0+)
const { promisify } = require('util'); // get the promisify
const readFileAsync = promisify(require('fs').readFile); // this can also be done by fs/promises

async function readWithPromisify() {
  try {
    const data = await readFileAsync('myfile.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

readWithPromisify();

// write files

async function writeFileExample() {
  try {
    // Write text to a file
    await fs.writeFile('myfile.txt', 'Hello, World!', 'utf8'); // writ the word "hello word" to the myfile.txt

    // Write JSON data
    const data = { name: 'John', age: 30, city: 'New York' };
    await fs.writeFile('data.json', JSON.stringify(data, null, 2), 'utf8'); // write the object as a string inside the data.json file 

    console.log('Files created successfully');
  } catch (err) {
    console.error('Error writing files:', err);
  }
}

// Using fs.appendFile()
// Appends content to a file, creating the file if it doesn't exist:

const fs = require('fs').promises;

async function appendToFile() {
  try {
    // Append a timestamped log entry - it also creates a file if it doesnot exist
    const logEntry = `${new Date().toISOString()}: Application started\n`;
    await fs.appendFile('app.log', logEntry, 'utf8'); // add a kog entry to the app.log file 

    console.log('Log entry added');
  } catch (err) {
    console.error('Error appending to file:', err);
  }
}

appendToFile();

// Using File Handles
// For more control over file operations, you can use file handles:

async function writeWithFileHandle() {
  let fileHandle;

  try{
      // Open a file for writing (creates if doesn't exist)
    fileHandle = await fs.open('output.txt', 'w'); // open the file and write inside it

    // Write content to the file
    await fileHandle.write('First line\n');
    await fileHandle.write('Second line\n');
    await fileHandle.write('Third line\n');
  }catch(err) {
    console.log('Error writing inside the file', err)
  }finally {
    // Always close the file handle
    if (fileHandle) {
      await fileHandle.close(); // close the file handle after the completion of the writing inside the file 
  }
}
}

// Using Streams for Large Files
// For writing large amounts of data, use streams to avoid high memory usage:

import { pipeline } from 'stream/promises'
import { Readable } from 'stream'

async function readableStream () {
  // Create a readable stream (could be from HTTP request, etc.)
  const data = Array(1000).fill().map((_, i) => `Line ${i + 1}: ${'x'.repeat(100)}\n`); // data that will be written in the file
  const readable = Readable.from(data); // creates a readbale stream
  
  // Create a writable stream to a file
  const writable = fs.createWriteStream('large-file.txt');

  try{
    // Pipe the data from readable to writable
    await pipeline(readable, writable); // connects the readable stream to te writable stream 
    console.log('Large file written successfully');
  
  }catch(err) {
     console.error('Error writing file:', err);

  }finally {

  }
}

writeLargeFile(); // callback teh funtion

// Deleting a Single File
// Use fs.unlink() to delete a file:


async function deleteFile() {
  const filePath = 'file-to-delete.txt'; // get the file path of the file 

  try {
    // Check if file exists before deleting
    await fs.access(filePath); // access the file path and check if it does exist

    // Delete the file
    await fs.unlink(filePath);
    console.log('File deleted successfully');
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log('File does not exist');
    } else {
      console.error('Error deleting file:', err);
    }
  }
}

deleteFile();

// Delete Multile Files
const path = require('path');

async function deleteFiles() {
  // delete multiple directories - you have to specify the file path and so as to get the file and delete it
  const filesToDelete = [
    'temp1.txt',
    'temp2.txt',
    'temp3.txt'
  ];

  try {
    // Delete all files in parallel
    await Promise.all(
      filesToDelete.map(file =>
        fs.unlink(file).catch(err => {
          if (err.code !== 'ENOENT') {
            console.error(`Error deleting ${file}:`, err);
          }
        })
      )
    );

    console.log('Files deleted successfully');
  } catch (err) {
    console.error('Error during file deletion:', err);
  }
}

deleteFiles();

// Delete Directories 

async function deleteDirectories (dirPath) {
   // Check if the directory exists
    const stats = await fs.stat(dirPath); // specify the path of te directory of it exist

    if (!stats.isDirectory()) {
      console.log('Path is not a directory');
      return;
    }

     await fs.rm(dirPath, { recursive: true, force: true }); // using the rm method- specify the path to be deleted and the object to force the deletion 
    // For older Node.js versions (deprecated but still works)
    // await fs.rmdir(dirPath, { recursive: true });

    console.log('Directory deleted successfully');
}


deleteDirectory('directory-to-delete'); // the path of te directory to be deleted passed as an argument

// Delete multiple directories

async function emptyDirectory(dirPath) {
  try {
    // Read the directory
    const files = await fs.readdir(dirPath, { withFileTypes: true });

    // Delete all files and directories in parallel
    await Promise.all(
      // loop inside the directory and delete the files
      files.map(file => {
        const fullPath = path.join(dirPath, file.name); // jon the directory name and the file name together 
        return file.isDirectory()
          ? fs.rm(fullPath, { recursive: true, force: true }) // force the deletion of the directory and the file path
          : fs.unlink(fullPath); // remove the directoty 
      })
    );

    console.log('Directory emptied successfully');
  } catch (err) {
    console.error('Error emptying directory:', err);
  }
}

// renaming teh directory name and he file name 
async function renameFile() {
  const oldPath = 'old-name.txt'; // get the path of the old directory - can be writen in relative or absolute path name
  const newPath = 'new-name.txt';// the new path name

  try {
    // Check if source file exists
    await fs.access(oldPath); // check the file

    // Check if destination file already exists
    try {
      await fs.access(newPath);// check if the destination of the file path exist of it does log to the console
      console.log('Destination file already exists');
      return;
    } catch (err) {
      // Destination doesn't exist, safe to proceed
    }

    // Perform the rename
    await fs.rename(oldPath, newPath); // rename the old path to new path and save the changes 
    console.log('File renamed successfully');
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log('Source file does not exist');
    } else {
      console.error('Error renaming file:', err);
    }
  }
}

// Usage
renameFile();

// move the file to a new directory 

const path = require('path');

async function moveFile() {
  const sourceFile = 'source/file.txt'; // the file that is being moved
  const targetDir = 'destination'; // the target directory 
  const targetFile = path.join(targetDir, 'file.txt');// join the directory name and the file path 

  try {
    // Ensure source file exists
    await fs.access(sourceFile); // acess the file

    // Create target directory if it doesn't exist
    await fs.mkdir(targetDir, { recursive: true }); // make the directory

    // Move the file to te new directory 
    await fs.rename(sourceFile, targetFile);

    console.log('File moved successfully');
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log('Source file does not exist');
    } else if (err.code === 'EXDEV') {
      console.log('Cross-device move detected, using copy+delete fallback');
      await moveAcrossDevices(sourceFile, targetFile);
    } else {
      console.error('Error moving file:', err);
    }
  }
}

// Helper function for cross-device moves
async function moveAcrossDevices(source, target) {
  try {
    // Copy the file
    await fs.copyFile(source, target);

    // Delete the original
    await fs.unlink(source);

    console.log('File moved across devices successfully');
  } catch (err) {
    // Clean up if something went wrong
    try { await fs.unlink(target); } catch (e) {}
    throw err;
  }
}

// Usage
moveFile();

// Usage
emptyDirectory('directory-to-empty');

// Events emmiter objects

// Import the events module
const EventEmitter = require('events'); // import the event emitter module

// Create an event emitter instance
const myEmitter = new EventEmitter(); // creeate a event emitter 

// Register an event listener - the event will be fired upon the greet event is called
myEmitter.on('greet', () => { // the on method takes two arguments and used to call a specific event
  console.log('Hello there!');
});

// the emit method is ised to fire up an event
// Emit the event - emit/ call the event with the event emiiter object
myEmitter.emit('greet'); // Outputs: Hello there!

// Example when reading and writing readbale stream

import { EventEmitter } from 'events';

const emitter = new EventEmitter();

const readableStream = fs.createReadStream('myfile.txt', 'utf8') // used to read a file 
const writeableStream = fs.createWriteStream('myfile.txt') // used to write a stream

readableStream.pipeline(writeableStream);

emitter.on('finish', () => {
  console.log('Finished reading and the writing the file')
})

readableStream.on('error', (err) => {
  console.log('Error reading the file content', err)
})

writeableStream.on('error', () => {
  console.log('Error writing the file content', err)
})

// Chaining Pipes
// You can chain multiple streams together using pipe().
// This is especially useful when working with transform streams.

const fs = require('fs');
const zlib = require('zlib'); // tye libraru used to comporess the data

// Create a pipeline to read a file, compress it, and write to a new file
fs.createReadStream('source.txt')
  .pipe(zlib.createGzip()) // Compress the data (source.txt)
  .pipe(fs.createWriteStream('destination.txt.gz'))
  .on('finish', () => {
    console.log('File compressed successfully!');
  });

  
const PORT = 8080;

// http streaming

const http = require('http');
const fs = require('fs');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Handle different routes
  if (req.url === '/') {
    // Send a simple response
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Stream Demo</h1><p>Try <a href="/file">streaming a file</a> or <a href="/video">streaming a video</a>.</p>');
  }
  else if (req.url === '/file') {
    // Stream a large text file
    res.writeHead(200, { 'Content-Type': 'text/plain' }); // send a plain text 

    const fileStream = fs.createReadStream('largefile.txt', 'utf8'); // create a readableStream of the file 

    // Pipe the file to the response (handles backpressure automatically)
    fileStream.pipe(res); // read the file and send it in bits

    // Handle errors
    fileStream.on('error', (err) => {
      console.error('File stream error:', err);
      res.statusCode = 500;
      res.end('Server Error');
    });
  }
  else if (req.url === '/video') {
    // Stream a video file with proper headers
    const videoPath = 'video.mp4'; // get the video path 
    const stat = fs.statSync(videoPath); // return the metadata if the video which contain the size of the video
    const fileSize = stat.size; // access the file video size
    const range = req.headers.range; // get the range of the video requested by the user

    if (range) {
      // Handle range requests for video seeking
      const parts = range.replace(/bytes=/, "").split("-"); // get the part of the video
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
      const chunksize = (end - start) + 1;

      const videoStream = fs.createReadStream(videoPath, { start, end });
      res.writeHead(206, {
        'Content-Range': `bytes ${start}-${end}/${fileSize}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunksize,
        'Content-Type': 'video/mp4'
      });

      videoStream.pipe(res); // send the video part to the client and use the pipe method to avoid backward pressure
      } else {
        // No range header, send entire video
        res.writeHead(200, {
          'Content-Length': fileSize,
          'Content-Type': 'video/mp4'
        });

        fs.createReadStream(videoPath).pipe(res); // end the entire video when no range specified
      }
  }  else {
    // 404 Not Found
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

// buffers

import { Buffer } from 'buffer'
const buffer = Buffer.alloc(10) // alocate the size to the memory and
console.log(buffer.write('Hello world')) // write inside the buffer and log it

const buffer_2 = Buffer.from('Hello world') // creates a buffer of astring
console.log(buffer_2)

const buffer = Buffer.from('Hello');

// Iterate using for...of loop
for (const byte of buffer) {
  console.log(byte); // prints out each character in the string hello h, e, l, l, o
}

// prints out the character and the position it has in the memory/ position of each character
buffer.forEach((byte, index) => {
  console.log(`Byte at position ${index}: ${byte}`);
});

// Create source and target buffers
const source = Buffer.from('Hello, World!');
const target = Buffer.alloc(source.length);

// Copy from source to target
source.copy(target); // 

console.log(target.toString()); // target will have the same value and the length as the source

// Create a target buffer for partial copy
const partialTarget = Buffer.alloc(5);

// Copy only part of the source (starting at index 7)
source.copy(partialTarget, 0, 7); // copy a spcific portion of text

console.log(partialTarget.toString());


const buffer = Buffer.from('Hello, World!');

// Create a slice from position 7 to the end
const slice = buffer.slice(7);
console.log(slice.toString());

// Create a slice from position 0 to 5
const slice2 = buffer.slice(0, 5);
console.log(slice2.toString());

// Important: slices share memory with original buffer
slice[0] = 119; // ASCII for 'w' (lowercase)
console.log(slice.toString());
console.log(buffer.toString());

// Convert back to original

const base64Str = 'Hello world'
const fromBase64 = Buffer.from(base64Str, 'base64').toString('utf8'); // convert the encoding from base64 to utf8
console.log('From Base64:', fromBase64);


// CRYPTO MODULE 

const crypto = require('crypto'); // import the cypto module
import crypto from 'crypto' // install the crypto module before using it

// Create a hash object with specific alogorithm
const hash = crypto.createHash('sha256');

// Update the hash with data
hash.update('Hello, World!');

// Get the digest in hexadecimal format of the data
const digest = hash.digest('hex');
console.log(digest);

// example of hasing string

const crypto = require('crypto');

// Function to hash a password
function hashPassword(password) {
  // Generate a random salt (16 bytes)
  const salt = crypto.randomBytes(16).toString('hex'); // get the random characters called salt

  // Use scrypt for password hashing (recommended)
  const hash = crypto.scryptSync(password, salt, 64).toString('hex'); // this combines the passowrd and the random characters (salt) together to form a unique characters

  // Return both salt and hash for storage
  return { salt, hash }; // return the hash and the password 
}

// Function to verify a password to make sure that the password and the hashed passowrd are the same
function verifyPassword(password, salt, hash) {
  const hashedPassword = crypto.scryptSync(password, salt, 64).toString('hex');
  return hashedPassword === hash; // return true or false
}

// Example usage
const password = 'mySecurePassword';

// Hash the password for storage
const { salt, hash } = hashPassword(password);
console.log('Salt:', salt);
console.log('Hash:', hash);

// Verify a login attempt
const isValid = verifyPassword(password, salt, hash);
console.log('Password valid:', isValid); // true

const isInvalid = verifyPassword('wrongPassword', salt, hash);
console.log('Wrong password valid:', isInvalid); // false


// HMAC (Hash-based Message Authentication Code)

const crypto = require('crypto');
import { timingSafeEqual } from 'crypto' // used to compare when delaing with HMAC 

// Sender creates a signature
const signature = createSignature(message, secretKey);
console.log('Message:', message);
console.log('Signature:', signature);

// Function to create an HMAC for a message
function createSignature(message, key) {
  const hmac = crypto.createHmac('sha256', key); // create a hashed message with the hmac 
  hmac.update(message);
  return hmac.digest('hex');
}

// Function to verify a message's signature using the buffer and return true of false
function verifySignature(message, signature, key) {
  const expectedSignature = createSignature(message, key);
  // use the timing safe equal to compare the two and return true or false if the message is auhenticated and true - use the Buffer to also compare the sizes
  return crypto.timingSafeEqual(
    Buffer.from(signature, 'hex'),
    Buffer.from(expectedSignature, 'hex')
  );
}

// Example usage
const secretKey = 'verySecretKey'; // the secret key that you have and will be shared to the receiver
const message = 'Important message to verify'; // the message being sent to the receiver


// Receiver verifies the signature
try {
  const isValid = verifySignature(message, signature, secretKey);
  console.log('Signature valid:', isValid); // true

  // Try with a tampered message
  const isInvalid = verifySignature('Tampered message', signature, secretKey);
  console.log('Tampered message valid:', isInvalid); // false
} catch (error) {
  console.error('Verification error:', error.message);
}

// AES (Advanced Encryption Standard) - provides both the encryption and the decryption key for authentication

const crypto = require('crypto');
import { createCipheriv } from 'crypto' // import the module to use it

// Function to encrypt data
function encrypt(text, key) {
  // Generate a random initialization vector
  const iv = crypto.randomBytes(16); // get randomBytes generated by the crypto module

  // Create cipher with AES-256-CBC
  const cipher = crypto.createCipheriv('aes-256-cbc', key, iv); // create a cypher with the key and the randomBytes(iv)

  // Encrypt the data
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');

  // Return both the encrypted data and the IV
  return {
    iv: iv.toString('hex'),
    encryptedData: encrypted
  };
}

// Function to decrypt data
function decrypt(encryptedData, iv, key) {
  // Create decipher
  const decipher = crypto.createDecipheriv(
    'aes-256-cbc',
    key,
    Buffer.from(iv, 'hex')
  );

  // Decrypt the data
  let decrypted = decipher.update(encryptedData, 'hex', 'utf8');
  decrypted += decipher.final('utf8');

  return decrypted;
}

// Example usage
// Note: In a real application, use a properly generated and securely stored key
const key = crypto.scryptSync('secretPassword', 'salt', 32); // 32 bytes = 256 bits
const message = 'This is a secret message';

// Encrypt
const { iv, encryptedData } = encrypt(message, key);
console.log('Original:', message);
console.log('Encrypted:', encryptedData);
console.log('IV:', iv);

// Decrypt
const decrypted = decrypt(encryptedData, iv, key);
console.log('Decrypted:', decrypted);

// IN REAL WORLD APPLICATION 

import crypto from "crypto"
import { createCipheriv } from 'crypto'

const salt = crypto.randomBytes(16).toString('hex'); // generate the random bytes to be used as the salt
const key = crypto.scryptSync(process.env.PASSWORD_KEY, salt, '32') // the secret key

function encrypt (message, key) {
  const iv = crypto.randomBytes(16); // get the random bytes
  
  const cipher = crypto.createCipheriv('aes-256-cbc', key, iv) // create a cipher key with the key and the iv(randomBytes)
  
  let encrypted = cipher.update(text,'utf8', 'hex')
  encrypted += cipher.final('hex');
  
  // return an object with the encrypted data
  return {
    iv: iv.toString('hex'),
    encryptedData: encrypted
  };
}

function decrypt(ecryptedData, iv, key) {
  // Create decipher
  const decipher = crypto.createDecipheriv(
    'aes-256-cbc',
    key,
    Buffer.from(iv, 'hex')
  );
  
  // Decrypt the data
  let decrypted = decipher.update(encryptedData, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  
  return decrypted;
}

// Encrypt
const { iv, encryptedData } = encrypt(message, key);
console.log('Original:', message);
console.log('Encrypted:', encryptedData);
console.log('IV:', iv);

// Decrypt
const decrypted = decrypt(encryptedData, iv, key);
console.log('Decrypted:', decrypted);


// NODE 6+ 

// Function that returns a promise
const fetchUser = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) {
        resolve({ id, name: `User ${id}` }); // return an object
       } else {
        reject(new Error('Invalid user ID'));
       }
     }, 1000);
  });
};

// Using async/await
async function getUserData(id) {
  try {
    console.log('Fetching user...');
    const user = await fetchUser(id); // Waits for the promise to resolve - returns an object 
    console.log('User data:', user);

    // You can use the result directly
    return `${user.name}'s profile`;
  } catch (error) {
     // Handle errors with try/catch
     console.error('Error fetching user:', error.message);
     return 'Guest profile';
   }
}

// Async functions always return promises
console.log('Starting...');
getUserData(1)
  .then(result => console.log('Result:', result)) // the result 
  .catch(error => console.error('Unexpected error:', error));
console.log('This runs before getUserData completes');


// Session-Based Authentication
// Session-based authentication uses cookies to maintain user state:

const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser'); // install the bodyparser
const app = express();

// Parse request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configure sessions
app.use(session({
  secret: 'your-secret-key', // add a secret key to be used in each session - can be installed using the crypto module get generate the secret key
  resave: false,
  saveUninitialized: false,
  cookie: { secure: process.env.NODE_ENV === 'production', maxAge: 24 * 60 * 60 * 1000 } // 24 hours
}));

// Sample user database
const users = [
  { id: 1, username: 'user1', password: 'password1' }
];

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;
 
  // Find user
  const user = users.find(u => u.username === username && u.password === password);
 
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
 
  // Store user information in session (excluding password) - this will be stoed in localstorage
  req.session.user = {
    id: user.id,
    username: user.username
  };
 
  res.json({ message: 'Login successful', user: req.session.user }); // this will be sent to the client
});

// Protected route
app.get('/profile', (req, res) => {
  // Check if user is logged in
  if (!req.session.user) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
 
  res.json({ message: 'Profile accessed', user: req.session.user });
});

// Logout route
app.post('/logout', (req, res) => {
  // Destroy session - use the session destroy method to delete the current session
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: 'Logout failed' });
    }
    res.json({ message: 'Logout successful' });
  });
});


// Token-Based Authentication (JWT)
// JSON Web Tokens (JWT) provide a stateless authentication mechanism that's compact and self-contained.

// Unlike session-based authentication, token-based authentication (JWT) doesn't require a server to store session data.

// This makes it ideal for stateless API architecture and microservices.

const JWT_SECRET = 'your-jwt-secret-key'; // this can be generated by using the crypto module to come up with the secret key


// Sample user database
const users = [
  { id: 1, username: 'user1', password: 'password1', role: 'user' }
];

// Login route - generate token
app.post('/login', (req, res) => {
  const { username, password } = req.body; // get the username and the password

  // Find user
  const user = users.find(u => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Create payload for JWT - this alows the token to be sent for each user
  const payload = {
    id: user.id,
    username: user.username,
    role: user.role
  };

  // Sign token
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' }); // use the sign method to assign the user a token

  res.json({ message: 'Login successful', token });
});

// Middleware for JWT verification
const authenticateJWT = (req, res, next) => {
  // Get auth header - The Authorization header is commonly used to send authentication tokens
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: 'Authorization header missing' });
  }

  // Extract token from "Bearer <token>"
  const token = authHeader.split(' ')[1]; // get the token from the bearer token sent by the client

  if (!token) {
    return res.status(401).json({ message: 'Token missing' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, JWT_SECRET);

    // Attach user to request
    req.user = decoded;

    next();
  } catch (error) {
    return res.status(403).json({ message: 'Invalid or expired token' });
  }
};

// Protected route
app.get('/profile', authenticateJWT, (req, res) => {
  res.json({ message: 'Profile accessed', user: req.user });
});

// Role-based route
app.get('/admin', authenticateJWT, (req, res) => {
  // Check if user has admin role
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Access denied: admin role required' });
  }

  res.json({ message: 'Admin panel accessed' });
});


// /combining authentication methods

// JWT authentication with API rate limiting and refresh tokens
const express = require('express');
const jwt = require('jsonwebtoken');
const rateLimit = require('express-rate-limit');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

// Configure rate limiting - configure how many request should have
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 attempts per window
  message: 'Too many login attempts, please try again later'
});

// JWT configuration
const JWT_SECRET = 'your-jwt-secret-key';
const JWT_REFRESH_SECRET = 'your-refresh-token-secret';

// Token storage (use a database in production)
const tokenBlacklist = new Set();
const refreshTokens = new Set();

// Login route with rate limiting
app.post('/login', loginLimiter, (req, res) => {
  const { username, password } = req.body; // ge the username and the password
 
  // Authentication logic (simplified)
  if (username !== 'user1' || password !== 'password1') {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
 
  // Generate tokens
  const accessToken = jwt.sign(
    { id: 1, username },
    JWT_SECRET,
    { expiresIn: '15m' } // Short-lived access token
  );
 
  // te user doesnot need to generate the token everytime they log in, they can use the refresh token to log in
  const refreshToken = jwt.sign(
    { id: 1, username },
    JWT_REFRESH_SECRET,
    { expiresIn: '7d' } // Longer-lived refresh token
  );
 
  // Store refresh token
  refreshTokens.add(refreshToken); // store the refresh token in the database
 
  res.json({
    message: 'Login successful',
    accessToken,
    refreshToken
  });
});

// Refresh token route
app.post('/refresh-token', (req, res) => {
  const { refreshToken } = req.body;
 
  if (!refreshToken) {
    return res.status(401).json({ message: 'Refresh token required' });
  }
 
  // Check if token exists and is not blacklisted
  if (!refreshTokens.has(refreshToken)) {
    return res.status(403).json({ message: 'Invalid refresh token' });
  }
 
  try {
    // Verify refresh token
    const decoded = jwt.verify(refreshToken, JWT_REFRESH_SECRET);
   
    // Generate new access token
    const accessToken = jwt.sign(
      { id: decoded.id, username: decoded.username },
      JWT_SECRET,
      { expiresIn: '15m' }
    );
   
    res.json({
      message: 'Token refreshed',
      accessToken
    });
  } catch (error) {
    // Remove invalid refresh token
    refreshTokens.delete(refreshToken);
   
    return res.status(403).json({ message: 'Invalid or expired refresh token' });
  }
});

// JWT verification middleware
const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
 
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Authorization header required' });
  }
 
  const token = authHeader.split(' ')[1];
 
  // Check if token is blacklisted
  if (tokenBlacklist.has(token)) {
    return res.status(403).json({ message: 'Token revoked' });
  }
 
  try {
    // Verify token
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Invalid or expired token' });
  }
};

// Logout route
app.post('/logout', authenticateJWT, (req, res) => {
  const authHeader = req.headers.authorization;
  const token = authHeader.split(' ')[1];
  const { refreshToken } = req.body;
 
  // Blacklist the current access token
  tokenBlacklist.add(token);
 
  // Remove refresh token if provided
  if (refreshToken) {
    refreshTokens.delete(refreshToken);
  }
 
  res.json({ message: 'Logout successful' });
});

// Protected route
app.get('/protected', authenticateJWT, (req, res) => {
  res.json({
    message: 'Protected resource accessed',
    user: req.user
  });
});

// Start server
app.listen(8080, () => {
  console.log('Server running on port 8080');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Authorization header required' });
  }

  const token = authHeader.split(' ')[1];

  // Check if token is blacklisted
  if (tokenBlacklist.has(token)) {
    return res.status(403).json({ message: 'Token revoked' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Invalid or expired token' });
  }
});

// Logout route
app.post('/logout', authenticateJWT, (req, res) => {
  const authHeader = req.headers.authorization;
  const token = authHeader.split(' ')[1];
  const { refreshToken } = req.body;

  // Blacklist the current access token
  tokenBlacklist.add(token);

  // Remove refresh token if provided
  if (refreshToken) {
    refreshTokens.delete(refreshToken);
  }

  res.json({ message: 'Logout successful' });
});

// Protected route
app.get('/protected', authenticateJWT, (req, res) => {
  res.json({
    message: 'Protected resource accessed',
    user: req.user
  });
});

// Start server
app.listen(8080, () => {
  console.log('Server running on port 8080');
});
// Start the server
server.listen(8080, () => {
  console.log('Server running at http://localhost:8080/');
});
app.listen(PORT, () => {
    console.log(`app is running at http://localhost/${PORT}`)
})