
// Buffer - used to handle binary data - allocating a specific size to the memory and addign some text to it

// Create a buffer from a string
const buf = Buffer.from('Hello, Node.js!');

// Buffers can be converted to strings
console.log(buf.toString()); // 'Hello, Node.js!'

// Access individual bytes
console.log(buf[0]); // 72 (ASCII for 'H')

// Buffers have a fixed length
console.log(buf.length); // 15

// Buffer.alloc()
// Creates a new Buffer of the specified size, initialized with zeros.

// Create a buffer of 10 bytes filled with zeros
const buffer1 = Buffer.alloc(10); // allocate specific size to the memory
console.log(buffer1);

//  Buffer.allocUnsafe()
// Creates a new Buffer of the specified size, but doesn't initialize the memory.
// This is faster than Buffer.alloc() but may contain old or sensitive data.
// Create an uninitialized buffer of 10 bytes

const buffer2 = Buffer.allocUnsafe(10); // doesnot initialize the memory
console.log(buffer2);

// Fill the buffer with zeros for security
buffer2.fill(0); // fill the buffer with some value (0)
console.log(buffer2);


// Buffer.from()
// Creates a new Buffer from various sources like strings, arrays, or ArrayBuffer. This is the most flexible way to create buffers from existing data.

// Create a buffer from a string
const buffer3 = Buffer.from('Hello, World!');
console.log(buffer3);

console.log(buffer3.toString());

// Create a buffer from an array of integers
const buffer4 = Buffer.from([65, 66, 67, 68, 69]);
console.log(buffer4);

console.log(buffer4.toString());

// Create a buffer from another buffer
const buffer5 = Buffer.from(buffer4);
console.log(buffer5);

// Writing to Buffers
// You can write data to a buffer using various methods:

// Create an empty buffer
const buffer = Buffer.alloc(10);

// Write a string to the buffer
buffer.write('Hello');
console.log(buffer);

console.log(buffer.toString()); // convert to string

// Write bytes at specific positions  
buffer[5] = 44; // ASCII for ','
buffer[6] = 32; // ASCII for space
buffer.write('Node', 7);
console.log(buffer.toString());


// Reading from Buffers
// You can read data from a buffer using various methods:

// Create a buffer from a string
const buffer = Buffer.from('Hello, Node.js!');

// Read the entire buffer as a string
console.log(buffer.toString());

// Read a portion of the buffer (start at position 7, end before position 11)
console.log(buffer.toString('utf8', 7, 11));

// Read a single byte
console.log(buffer[0]);

// Convert the ASCII code to a character
console.log(String.fromCharCode(buffer[0]));


// / Create a buffer from a string
const buffer = Buffer.from('Hello');

// Iterate using for...of loop
for (const byte of buffer) {
console.log(byte); // prints out each character in the string hello
}

// Iterate using forEach - prints out the index position of each character and byte
buffer.forEach((byte, index) => {
  console.log(`Byte at position ${index}: ${byte}`);
});


// Buffer.compare()
// Compares two buffers and returns a number indicating whether the first one comes before, after, or is the same as the second one in sort order:
// it arranges them is order - ascending or descending order 
const buffer_1 = Buffer.from('ABC');
const buffer_2 = Buffer.from('BCD');
const buffer_3 = Buffer.from('ABC');

console.log(Buffer.compare(buffer_1, buffer_2));
console.log(Buffer.compare(buffer_2, buffer_1));
console.log(Buffer.compare(buffer_1, buffer_3));

// buffer.copy()
// Copies data from one buffer to another:

// Create source and target buffers
const source = Buffer.from('Hello, World!');
const target = Buffer.alloc(source.length);

// Copy from source to target
source.copy(target);

console.log(target.toString());

// Create a target buffer for partial copy
const partialTarget = Buffer.alloc(5);

// Copy only part of the source (starting at index 7)
source.copy(partialTarget, 0, 7);

console.log(partialTarget.toString());

// buffer.slice()
// Creates a new buffer that references the same memory as the original, but with offset and cropped to the given end:

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


// buffer.toString()
// Decodes a buffer to a string using a specified encoding:

const buffer = Buffer.from('Hello, World!');

// Default encoding is UTF-8
console.log(buffer.toString());

// Specify encoding
console.log(buffer.toString('utf8'));

// Decode only a portion of the buffer
console.log(buffer.toString('utf8', 0, 5));

// Using different encodings
const hexBuffer = Buffer.from('48656c6c6f', 'hex');
console.log(hexBuffer.toString());

const base64Buffer = Buffer.from('SGVsbG8=', 'base64');
console.log(base64Buffer.toString());


// Working with Encodings
// Buffers work with various encodings when converting between strings and binary data:

// Create a string
const str = 'Hello, World!';

// Convert to different encodings
const utf8Buffer = Buffer.from(str, 'utf8');
console.log('UTF-8:', utf8Buffer);

const base64Str = utf8Buffer.toString('base64');
console.log('Base64 string:', base64Str);

const hexStr = utf8Buffer.toString('hex');
console.log('Hex string:', hexStr);

// Convert back to original
const fromBase64 = Buffer.from(base64Str, 'base64').toString('utf8');
console.log('From Base64:', fromBase64);

const fromHex = Buffer.from(hexStr, 'hex').toString('utf8');
console.log('From Hex:', fromHex);


// Advanced Buffer Operations
// Concatenating Buffers
// You can combine multiple buffers into one using Buffer.concat():

// Example
const buf1 = Buffer.from('Hello, ');
const buf2 = Buffer.from('Node.js!');

// Concatenate buffers
const combined = Buffer.concat([buf1, buf2]);
console.log(combined.toString()); // 'Hello, Node.js!'

// With a maximum length parameter
const partial = Buffer.concat([buf1, buf2], 5);
console.log(partial.toString()); // 'Hello'


// Searching in Buffers
// Buffers provide methods to search for values or sequences:

// Example
const buf_1 = Buffer.from('Hello, Node.js is awesome!');

// Find the first occurrence of a value
console.log(buf_1.indexOf('Node')); // 7

// Check if buffer contains a value
console.log(buf_1.includes('awesome')); // true

// Find the last occurrence of a value
console.log(buf_1.lastIndexOf('e')); // 24


// Buffer and Streams
// Buffers are commonly used with streams for efficient data processing:

// Example
const fs = require('fs');
const { Transform } = require('stream');

// Create a transform stream that processes data in chunks
const transformStream = new Transform({
  transform(chunk, encoding, callback) {
   // Process each chunk (which is a Buffer)
   const processed = chunk.toString().toUpperCase();
   this.push(Buffer.from(processed));
   callback();
  }
});
// Create a read stream from a file
const readStream = fs.createReadStream('input.txt');
// Create a write stream to a file
const writeStream = fs.createWriteStream('output.txt');
// Process the file in chunks
readStream.pipe(transformStream).pipe(writeStream);

// BUFFER ARE COMMONLY USED IN FILE SYSTEM OPERATIONS

const fs = require('fs');

// Write buffer to file
const writeBuffer = Buffer.from('Hello, Node.js!');

fs.writeFile('buffer.txt', writeBuffer, (err) => {
  if (err) throw err;
  console.log('File written successfully');

  // Read file into buffer
  fs.readFile('buffer.txt', (err, data) => {
    if (err) throw err;
    
    // 'data' is a buffer
    console.log('Read buffer:', data);
    console.log('Buffer content:', data.toString());

    // Read only part of the file into a buffer
    const smallBuffer = Buffer.alloc(5);
    fs.open('buffer.txt', 'r', (err, fd) => {
      if (err) throw err;

      // Read 5 bytes starting at position 7
      fs.read(fd, smallBuffer, 0, 5, 7, (err, bytesRead, buffer) => {
        if (err) throw err;

        console.log('Partial read:', buffer.toString());
        // Output: Node.

        fs.close(fd, (err) => {
          if (err) throw err;
        });
      });
    });
  });
});

// SAFE HANDLING LIKE PASSWORDS

// Example: Safely handling sensitive data - like password

function processPassword(password) {
  // Create a buffer to hold the password
  const passwordBuffer = Buffer.from(password);

  // Process the password (e.g., hashing)
  const hashedPassword = hashPassword(passwordBuffer);

  // Zero out the original password buffer for security
  passwordBuffer.fill(0);

  return hashedPassword;
}

// Simple hashing function for demonstration
function hashPassword(buffer) {
  // In a real application, you would use a cryptographic hash function
  // This is a simplified example
  let hash = 0;
  for (let i = 0; i < buffer.length; i++) {
    hash = ((hash < 5) - hash) + buffer[i];
    hash |= 0; // Convert to 32-bit integer
  }
  return hash.toString(16);
}

// Usage
const password = 'secret123';
const hashedPassword = processPassword(password);
console.log('Hashed password:', hashedPassword);

