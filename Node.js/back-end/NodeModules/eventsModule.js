
// every action performed on a computer is an event

// Example to perform a specific function to read a file and console.log some message 
const fs = require('fs')
const rs = fs.createReadStream('./demofile.txt') // create a readable stream 
rs.on('end', () => {
    console.log('file is open')
})

// use emmitters
// / Import the events module
const EventEmitter = require('events');

// Create an event emitter instance - event-driven architecture. - creates a use new events object and use the properties
const myEmitter = new EventEmitter(); // emits events and listens to all the events

// Register an event listener
myEmitter.on('greet', () => {
  console.log('Hello there!');
});

// Emit the event - the event is fired and node listerns to all the events called "greet"
myEmitter.emit('greet'); // Outputs: Hello there!

// NOTE: to fire an event use the emit () method after creating an instance

// comon practices

// Passing Arguments to Event Handlers
// Example
const EventEmitter = require('events');
// const emitter = new EventEmitter();

// Emit event with arguments when calling the emit method 
emitter.on('userJoined', (username, userId) => {
  console.log(`${username} (${userId}) has joined the chat`);
});

emitter.emit('userJoined', 'JohnDoe', 42); // passing the event with arguments
// Outputs: JohnDoe (42) has joined the chat

//  Handling Events Only Once
// Example
const EventEmitter = require('events');
// const emitter = new EventEmitter();

// This listener will be called only once - it will be runned only once
emitter.once('connection', () => {
  console.log('First connection established');
});

emitter.emit('connection'); // This will trigger the listener
emitter.emit('connection'); // This won't trigger the listener again

// Error Handling
// Example
const EventEmitter = require('events');
const emitter = new EventEmitter(); // create an instance object

// Always handle 'error' events
emitter.on('error', (err) => {
  console.error('An error occurred:', err.message);
});

// This will trigger the error handler
emitter.emit('error', new Error('Something went wrong')); // pass the error as te argument


// STREAMS MODULE


// Example:

// Create a readable stream from a file
const readableStream = fs.createReadStream('input.txt', 'utf8');
// Create a writable stream to a file
const writableStream = fs.createWriteStream('output.txt');

// Pipe the data from readable to writable stream
readableStream.pipe(writableStream); // copies the input.txt and writes inside the output.txt 

// Handle completion and errors
writableStream.on('finish', () => {
  console.log('File copy completed!');
});

readableStream.on('error', (err) => {
  console.error('Error reading file:', err);
});

writableStream.on('error', (err) => {
  console.error('Error writing file:', err);
});

// Readable streams 
// reading modes - flowing mode and pausing mode

// flowing mode: data is read quickly as posiible
// reading mode: You must explicitly call stream.read() to get chunks of data from the stream

// Creting a readable streams - flowing mode
const readableStream_2 = fs.createReadStream('myfile.txt', {
    encoding: 'utf8',
    highWaterMark: 64 * 1024 // 64KB chunks
})

// Events for readable streams
readableStream_2.on('data', (chunk) => {
    console.log("File Received")
    console.log(chunk)
})

readableStream_2.on('end', () => {
    console.log('No more data to read.');
})

readableStream_2.on('error', (err) => {
  console.error('Error reading from stream:', err);
});


// Paused mode example - EXAMPLE
const readableStream_3 = fs.createReadStream('myfile.txt', {
  encoding: 'utf8',
  highWaterMark: 64 * 1024 // 64KB chunks
});

// Manually consume the stream using read() - you control how much data is read manually
readableStream_3.on('readable', () => {
  let chunk;
  while (null !== (chunk = readableStream_3.read())) {
    console.log(`Read ${chunk.length} bytes of data.`);
    console.log(chunk);
  } });

readableStream_3.on('end', () => {
  console.log('No more data to read.');
});

// Writable Streams - used to write inside a file and add some text in it

// Create a writable stream to a file
const writableStream_2 = fs.createWriteStream('output.txt');

// Write data to the stream
writableStream_2.write('Hello, ');
writableStream_2.write('World!');
writableStream_2.write('\nWriting to a stream is easy!');

// End the stream
writableStream_2.end(); // end the stream 

// Events for writable streams
writableStream_2.on('finish', () => {
  console.log('All data has been written to the file.');
});

writableStream_2.on('error', (err) => {
  console.error('Error writing to stream:', err);
});

// handling pressure - when the data is being processed faster it causes the backpressure 
// use the write() method to control this 

const writableStream_3 = fs.createWriteStream('output.txt');

function writeData() {
  let i = 100;
  function write() {
    let ok = true;
    // writing starting from 100
    do {
      i--;
      if (i === 0) {
        // Last time, close the stream
        writableStream_3.write('Last chunk!\n');
        writableStream_3.end();
      } else {
        // Continue writing data
        const data = `Data chunk ${i}\n`;
        // Write and check if we should continue
        ok = writableStream_3.write(data); // passes the writing of data
      }
    }
    while (i > 0 && ok);

    if (i > 0) {
      // We need to wait for the drain event before writing more
      writableStream_3.once('drain', write);
    }
  }
  write();
}

writeData();
writableStream_3.on('finish', () => {
  console.log('All data written successfully.');
});

// the PIPE() METHOD
// The pipe() method connects a readable stream to a writable stream, automatically managing the flow of data and handling backpressure.

// Create readable and writable streams
const readableStream_4 = fs.createReadStream('source.txt');
const writableStream_4 = fs.createWriteStream('destination.txt');

// Pipe the readable stream to the writable stream
readableStream_4.pipe(writableStream_4); // connects the readble stream to the writable stream

// Handle completion and errors
readableStream_4.on('error', (err) => {
  console.error('Read error:', err);
});

// when having an error 
writableStream_4.on('error', (err) => {
  console.error('Write error:', err);
});
// when the file has completed writing
writableStream_4.on('finish', () => {
  console.log('File copy completed!');
});

// chaining pipes
const zlib = require('zlib');v // allows you to compress the files

// Create a pipeline to read a file, compress it, and write to a new file
fs.createReadStream('source.txt')
  .pipe(zlib.createGzip()) // Compress the data
  .pipe(fs.createWriteStream('destination.txt.gz'))
  .on('finish', () => {
    console.log('File compressed successfully!');
  });


// DUPLEX AND TRANSFORM STREAMS

// DUPLEX streams- allows readble and writable like a two way pipe

// It lets you create TCP servers and clients
// This is lower-level than HTTP (you’re dealing with raw data streams)
const net = require('net'); // creates a tcp server and
const { Socket } = require('dgram');

// Create a TCP server
const server = net.createServer((socket) => {
  // 'socket' is a duplex stream - socket represents one client connection

  // Handle incoming data (readable side) - incoming data from the client 
  socket.on('data', (data) => {
    console.log('Received:', data.toString());

    // Echo back (writable side) - sending the data to the client
    socket.write(`Echo: ${data}`);

  });

//   canceling the connection 
  socket.on('end', () => {
    console.log('Client disconnected');
  });
});

server.listen(8080, () => {
  console.log('Server listening on port 8080');
});

// To test, you can use a tool like netcat or telnet:
// $ nc localhost 8080
// or create a client:
/*
// sending to the server 

const client = net.connect({ port: 8080 }, () => {
  console.log('Connected to server');
  client.write('Hello from client!');
});

client.on('data', (data) => {
  console.log('Server says:', data.toString());
  client.end(); // Close the connection
});
*/

// TRANFORM STREAMS

const {Transform} = require('stream') - 
// stream.Transform → used when you want to modify data while it’s flowing

// Create a transform stream that converts text to uppercase
class UppercaseTransform extends Transform {

  _transform(chunk, encoding, callback) {
    // Transform the chunk to uppercase
    const upperChunk = chunk.toString().toUpperCase();
    // Push the transformed data
    this.push(upperChunk);  //  - Sends the transformed data to the next stream
    // Signal that we're done with this chunk
    callback();
  }
}

// Create an instance of our transform stream
const uppercaseTransform = new UppercaseTransform(); // pass the data being tranformed

// Create a readable stream from a file
const readableStream_5 = fs.createReadStream('input.txt');

// Create a writable stream to a file
const writableStream_5 = fs.createWriteStream('output-uppercase.txt');

// Pipe the data through our transform stream
readableStream
  .pipe(uppercaseTransform)
  .pipe(writableStream)
  .on('finish', () => {
    console.log('Transformation completed!');
  });

// NOTE: - TAKES IT DATA TRANSFORMS IT AND OUTPUTS NEW DATA (Readbale - transform - writable)


// The stream.pipeline() Method
// The pipeline() function (available since Node.js v10.0.0) is a more robust way to pipe streams together, especially for error handling.

const {pipeline} = require('stream')
const zlib = require('zlib'); // used to compresss the file  - uses an extension after compression .gz

// Create a pipeline that handles errors properly
pipeline(
    fs.createReadStream('source.txt'),
    zlib.createGzip(), // this compresses the file
    fs.createWriteStream('destination.txt.gz'),
    (err) => {
    if (err) {
      console.error('Pipeline failed:', err);
    } else {
      console.log('Pipeline succeeded!');
    }
  }
)

const { Readable, Writable, Transform } = require('stream');

// Create a readable stream in object mode - same as the  createReadableStream
const objectReadable = new Readable({
  objectMode: true,

//   You’re manually pushing data using .push()
// Node still requires the method to exist
  read() {} // Implementation required but can be no-op
});

// Create a transform stream in object mode -
const objectTransform = new Transform({
  objectMode: true,
  transform(chunk, encoding, callback) {
    // Add a property to the object - you are mutating the object and adding a metadata
    chunk.transformed = true;
    chunk.timestamp = new Date();
    this.push(chunk);
    callback();
  } });

// Create a writable stream in object mode - same as the createWritableStream
const objectWritable = new Writable({
  objectMode: true,
  write(chunk, encoding, callback) {
    console.log('Received object:', chunk);
    callback();
  } });

// Connect the streams
objectReadable
  .pipe(objectTransform)
  .pipe(objectWritable);

// Push some objects to the stream
objectReadable.push({ name: 'Object 1', value: 10 });
objectReadable.push({ name: 'Object 2', value: 20 });
objectReadable.push({ name: 'Object 3', value: 30 });
objectReadable.push(null); // Signal the end of data


// for each object the output will be: 
// {
//   name: 'Object 1',
//   value: 10,
//   transformed: true,
//   timestamp: 2026-02-09T20:31:12.123Z
// }

// . Object Mode Streams
// Streams can work with JavaScript objects instead of just strings and buffers:

Example
const { Readable } = require('stream');

// Create a readable stream in object mode
const objectStream = new Readable({
  objectMode: true,
  read() {}
});
// Push objects to the stream
objectStream.push({ id: 1, name: 'Alice' });
objectStream.push({ id: 2, name: 'Bob' });
objectStream.push(null); // Signal end of stream
// Consume the stream
objectStream.on('data', (obj) => {
  console.log('Received:', obj);
});

// HTTP Streaming
// Streams are used extensively in HTTP requests and responses.

const http = require('http');
const fs = require('fs');

// Create an HTTP server
const server_5 = http.createServer((req, res) => {
  // Handle different routes
  if (req.url === '/') {
    // Send a simple response
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Stream Demo</h1><p>Try <a href="/file">streaming a file</a> or <a href="/video">streaming a video</a>.</p>');
  }
  else if (req.url === '/file') {
    // Stream a large text file
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    const fileStream = fs.createReadStream('largefile.txt', 'utf8');

    // Pipe the file to the response (handles backpressure automatically)
    fileStream.pipe(res); // send the data to the reponse Pipe file → response

    // Handle errors
    fileStream.on('error', (err) => {
      console.error('File stream error:', err);
      res.statusCode = 500;
      res.end('Server Error');
    });
  }
  else if (req.url === '/video') {
    // Stream a video file with proper headers
    const videoPath = 'video.mp4'; // video path being stored on the file
    const stat = fs.statSync(videoPath); // get the metadata of the video with returns an object and has some properties
    const fileSize = stat.size; // get the size of the video 
    // the range the browser sends the video - the client sends a request on the range of video they want 
    const range = req.headers.range; // (Range: bytes=1000000-2000000) - this is the range of the video sent by the client eg (when the user skips forward in a video or want a spefic part of the file)

    if (range) {
      // Handle range requests for video seeking
      const parts = range.replace(/bytes=/, "").split("-"); // ['1000000'-'2000000']
      const start = parseInt(parts[0], 10); // convert the string into nummber and get the 1st index in base decimal eg (10000)
      const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1; // convert the string into nummber and get the last index in base decimal eg (200000)
      const chunksize = (end - start) + 1; // get the difference

      const videoStream = fs.createReadStream(videoPath, { start, end }); // create a read stream and specify the range of the video you want - Only streams part of the video 
      res.writeHead(206, {
        'Content-Range': `bytes ${start}-${end}/${fileSize}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunksize,
        'Content-Type': 'video/mp4'
      });

      videoStream.pipe(res); // send the video stream to client in specified range 
      } else {
        // No range header, send entire video
        res.writeHead(200, {
          'Content-Length': fileSize,
          'Content-Type': 'video/mp4'
        });

        fs.createReadStream(videoPath).pipe(res); // send the entire video when the range is not specified 
      }
  }  else {
    // 404 Not Found
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

// Start the server
server_5.listen(8080, () => {
  console.log('Server running at http://localhost:8080/');
});


// Processing Large CSV Files

// const fs = require('fs');
// const { Transform } = require('stream');
// const csv = require('csv-parser'); // npm install csv-parser

// // Create a transform stream to filter and transform CSV data
// const filterTransform = new Transform({
//   objectMode: true,
//   transform(row, encoding, callback) {
//     // Only pass through rows that meet our criteria
//     if (parseInt(row.age) > 18) {
//       // Modify the row
//       row.isAdult = 'Yes';
//       // Push the transformed row
//       this.push(row);
//     }
//     }
//     callback();
//   }
// });

// // Create a writable stream for the results
// const results = [];
// const writeToArray = new Transform({
//   objectMode: true,
//   transform(row, encoding, callback) {
//     results.push(row);
//     callback();
//   }
// });

// // Create the processing pipeline
// fs.createReadStream('people.csv')
//   .pipe(csv())
//   .pipe(filterTransform)
//   .pipe(writeToArray)
//   .on('finish', () => {
//     console.log(`Processed ${results.length} records:`);
//     console.log(results);
//   }
//   })
//   .on('error', (err) => {
//     console.error('Error processing CSV:', err);
//   }
//   });