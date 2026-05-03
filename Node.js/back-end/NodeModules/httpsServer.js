

// HTTPS REQUEST
// import environmental varibales
require('dotenv').config(); 

// MAKING THE GET REQUEST 
// Using https.get() for Simple Requests
// For simple GET requests, you can use the more concise https.get() method. This is a convenience method that automatically sets the HTTP method to GET and calls req.end() for you.

// creating a new request url using the New URL - it is used for external API
const https = require('https');
const { URL } = require('url');

// Parse the URL
const url = new URL('https://jsonplaceholder.typicode.com/posts/1'); // EXTERNAL API

 const options = {
  hostname: url.hostname,
  path: url.pathname,
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'User-Agent': 'MySecureApp/1.0'
  }
};

console.log(`Fetching data from: ${url}`);

// Make the GET request const req = https.get(options, (res) => {
  const { statusCode } = res;
  const contentType = res.headers['content-type'];

  if (statusCode !== 200) {
    console.error(`Request failed with status code: ${statusCode}`);
    res.resume(); // Consume response data to free up memory
    return;
  }

  if (!/^application\/json/.test(contentType)) {
    console.error(`Expected JSON but got ${contentType}`);
    res.resume();
    return;
  }

  let rawData = '';
  res.setEncoding('utf8');

  // Collect data chunks
  res.on('data', (chunk) => {     rawData += chunk;
  });

  // Process complete response
  res.on('end', () => {
    try {
      const parsedData = JSON.parse(rawData);
      console.log('Received data:', parsedData);
    } catch (e) {
      console.error('Error parsing JSON:', e.message);
    }
  });

// Handle errors
req.on('error', (e) => {
  console.error(`Error: ${e.message}`);
});

// Set a timeout
req.setTimeout(10000, () => {
  console.error('Request timeout');
  req.destroy();
});

// MAKING A POST REQUESTS

// To send data to a server, you can use a POST request.
// Here's how to make a secure POST request with JSON data:

const https = require('https');
const { URL } = require('url');

// Requested data from the client
const postData = JSON.stringify({
  title: 'foo',
  body: 'bar',
  userId: 1
});

// Parse the URL
const url_2 = new URL('https://jsonplaceholder.typicode.com/posts'); // EXTERNAL API

// Request options - the url object that will be requested by the client and the back-end will use
const options_2 = {
  hostname: url_2.hostname,
  port: 443,
  path: url_2.pathname,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData),
    'User-Agent': 'MySecureApp/1.0',
    'Accept': 'application/json'
  },
  timeout: 10000 // 10 seconds
};

console.log('Sending POST request to:', url_2.toString()); // convert the data onto string before requesting it

// Create the request - THE BACK-END ACTS AS THE CLIENT 

// This code prepares a secure HTTPS POST request, telling Node where to send it, what method to use, what data format to send, and how long to wait.
const req = https.request(options_2, (res) => {
  console.log(`Status Code: ${res.statusCode}`);
  console.log('Headers:', res.headers);

  let responseData = '';
  res.setEncoding('utf8');

  // Collect response data
  res.on('data', (chunk) => {
    responseData += chunk;
  });

  // Process complete response
  res.on('end', () => {
    try {
      const parsedData = JSON.parse(responseData);
      console.log('Response:', parsedData);
    } catch (e) {
      console.error('Error parsing response:', e.message);
    }
  });
});

// Handle errors
req.on('error', (e) => {
  console.error(`Request error: ${e.message}`);
});

// Set a timeout
req.setTimeout(15000, () => {
  req.destroy(new Error('Request timeout after 15 seconds'));
});

// Write data to request body
req.write(postData);

// End the request
req.end();


// MAKING A REQUEST USING PROMISES
// To make HTTPS requests more manageable, you can wrap them in a Promise:

const https = require('https');
const { URL } = require('url');

/**
* Makes an HTTPS request and returns a Promise
* @param {Object} options - Request options
* @param {string|Buffer} [data] - Request body (for POST, PUT, etc.)
* @returns {Promise<Object>} - Resolves with response data
*/
function httpsRequest(options, data = null) {
  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let responseData = '';

      // Collect response data
      res.on('data', (chunk) => {
        responseData += chunk;
      });

      // Process complete response
      res.on('end', () => {
        try {
          const contentType = res.headers['content-type'] || '';
          const isJSON = /^application\/json/.test(contentType);
         
          const response = {
            statusCode: res.statusCode,
            headers: res.headers,
            data: isJSON ? JSON.parse(responseData) : responseData
          };
         
          if (res.statusCode >= 200 && res.statusCode < 300) {
            resolve(response);
          } else {
            const error = new Error(`Request failed with status code ${res.statusCode}`);
            error.response = response;
            reject(error);
          }
        } catch (e) {
          e.response = { data: responseData };
          reject(e);
        }
      });
    });

    // Handle errors
    req.on('error', (e) => {
      reject(e);
    });

    // Set timeout
    req.setTimeout(options.timeout || 10000, () => {
      req.destroy(new Error('Request timeout'));
    });

    // Write data if provided
    if (data) {
      req.write(data);
    }

    // End the request
    req.end();
  });
}

// Example usage - creating an external API - NEW REQUEST
async function fetchData() {
  try {

    const url = new URL('https://jsonplaceholder.typicode.com/posts/1'); // EXTERNAL API
   
    const options = {
      hostname: url.hostname,
      path: url.pathname,
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      },
      timeout: 5000
    };

    const response = await httpsRequest(options);
    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error:', error.message);
    if (error.response) {
      console.error('Response data:', error.response.data);
    }
  }
}

// Run the example
fetchData();

// HTTPS Server with Express.js
// While you can use the core HTTPS module directly, most Node.js applications use a web framework like Express.js to handle HTTP/HTTPS requests.

// Here's how to set up an Express application with HTTPS support.
// Basic Express.js HTTPS Server

const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');
const helmet = require('helmet'); // Security middleware

// Create Express app
const app = express();

// Security middleware
app.use(helmet()); // setting up middleware

// Parse JSON and URL-encoded bodies - middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from 'public' directory - 
// acess the direcorty name file and declare the file name extension  
app.use(express.static(path.join(__dirname, 'public'), {
  dotfiles: 'ignore',
  etag: true,
  extensions: ['html', 'htm'],
  index: 'index.html',
  maxAge: '1d',
  redirect: true
}));

// Routes
app.get('/', (req, res) => {
  res.send('<h1>Welcome to Secure Express Server</h1>');
});

app.get('/api/status', (req, res) => {
  res.json({
    status: 'operational',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    nodeVersion: process.version
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

// SSL/TLS options - https security 
const sslOptions = {
  key: fs.readFileSync(path.join(__dirname, 'key.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'cert.pem')),
  // Enable HTTP/2 if available
  allowHTTP1: true,
  // Recommended security options
  minVersion: 'TLSv1.2',
  ciphers: [
    'TLS_AES_256_GCM_SHA384',
    'TLS_CHACHA20_POLY1305_SHA256',
    'TLS_AES_128_GCM_SHA256',
    'ECDHE-RSA-AES128-GCM-SHA256',
    '!DSS',
    '!aNULL',
    '!eNULL',
    '!EXPORT',
    '!DES',
    '!RC4',
    '!3DES',
    '!MD5',
    '!PSK'
  ].join(':'),
  honorCipherOrder: true
};

// // Create HTTPS server
// const PORT = process.env.PORT || 3000;
// const server = https.createServer(sslOptions, app);

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  // Perform cleanup and exit if needed
  process.exit(1);
});

// Graceful shutdown
const gracefulShutdown = (signal) => {
  console.log(`\nReceived ${signal}. Shutting down gracefully...`);

  server.close(() => {
    console.log('HTTP server closed.');
    // Close database connections, etc.
    process.exit(0);
  });

  // Force close server after 10 seconds
  setTimeout(() => {
    console.error('Forcing shutdown...');
    process.exit(1);
  }, 10000);
};

// Listen for shutdown signals
process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);

// Start the server
const HOST = process.env.HOST || '0.0.0.0';
server.listen(PORT, HOST, () => {
  console.log(`Express server running at https://${HOST}:${PORT}`);
  console.log('Environment:', process.env.NODE_ENV || 'development');
  console.log('Press Ctrl+C to stop the server');
});


// HTTP/2 with Node.js
// HTTP/2 is a major revision of the HTTP protocol that provides significant performance improvements over HTTP/1.1. When combined with HTTPS, it offers both security and performance benefits for modern web applications.

const http2 = require('http2');
const fs = require('fs');
const path = require('path');

// SSL/TLS options
const serverOptions = {
  key: fs.readFileSync(path.join(__dirname, 'key.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'cert.pem')),
  allowHTTP1: true, // Fallback to HTTP/1.1 if needed

  // Recommended security settings
  minVersion: 'TLSv1.2',
  ciphers: [
    'TLS_AES_256_GCM_SHA384',
    'TLS_CHACHA20_POLY1305_SHA256',
    'TLS_AES_128_GCM_SHA256',
    'ECDHE-ECDSA-AES256-GCM-SHA384',
    '!aNULL',
    '!eNULL',
    '!EXPORT',
    '!DES',
    '!RC4',
    '!3DES',
    '!MD5',
    '!PSK'
  ].join(':'),
  honorCipherOrder: true
};

// Create HTTP/2 server
const server = http2.createSecureServer(serverOptions);

// Handle incoming requests
server.on('stream', (stream, headers) => {
  const method = headers[':method'];
  const path = headers[':path'];
  const scheme = headers[':scheme'];
  const authority = headers[':authority'];

  console.log(`${method} ${path} (HTTP/2)`);

  // Handle different routes
  if (path === '/') {
  // Set response headers
    stream.respond({
      'content-type': 'text/html; charset=utf-8',
      ':status': 200,
      'x-powered-by': 'Node.js HTTP/2',
      'cache-control': 'public, max-age=3600'
    });

    // Send HTML response
    stream.end(`
      <!DOCTYPE html>
      <html>
      <head>
      <title>HTTP/2 Server</title>
      <link rel="stylesheet" href="/styles.css">
      </head>
      <body>
        <h1>Hello from HTTP/2 Server!</h1>
        <p>This page is served over HTTP/2.</p>
        <div id="data">Loading data...</div>
        <script src="/app.js"></script>
      </body>
      </html>
      `);
    }
    // API endpoint
    else if (path === '/api/data' && method === 'GET') {
      stream.respond({
        'content-type': 'application/json',
        ':status': 200,
        'cache-control': 'no-cache'
      });

      stream.end(JSON.stringify({
        message: 'Data from HTTP/2 API',
        timestamp: new Date().toISOString(),
        protocol: 'HTTP/2',
        server: 'Node.js HTTP/2 Server'
      }));
    }
    // Server Push example
    else if (path === '/push') {
      // Push additional resources
      stream.pushStream({ ':path': '/styles.css' }, (err, pushStream) => {
        if (err) {
          console.error('Push stream error:', err);
          return;
        }
        pushStream.respond({
          'content-type': 'text/css',
          ':status': 200
        });
        pushStream.end('body { font-family: Arial, sans-serif; margin: 2em; }');
      },
      stream.respond({
        'content-type': 'text/html; charset=utf-8',
        ':status': 200
      }),
      stream.end('<h1>Server Push Example</h1><link rel="stylesheet" href="/styles.css">'))
    }
    // 404 Not Found
  else {
    stream.respond({
      'content-type': 'text/plain',
      ':status': 404
    });
    stream.end('404 - Not Found');
  }
});

// Handle errors
server.on('error', (err) => {
  console.error('Server error:', err);
  process.exit(1);
});

// Start the server
const PORT = process.env.PORT || 8443;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`HTTP/2 server running at https://localhost:${PORT}`);
  console.log('Environment:', process.env.NODE_ENV || 'development');
  console.log('Press Ctrl+C to stop the server');
});

// Graceful shutdown
const gracefulShutdown_2 = (signal) => {
  console.log(`\nReceived ${signal}. Shutting down gracefully...`);
  server.close(() => {
    console.log('HTTP/2 server closed.');
    process.exit(0);
  });
 
  // Force close server after 10 seconds
  setTimeout(() => {
    console.error('Forcing shutdown...');
    process.exit(1);
  }, 10000);
};

// Listen for shutdown signals
process.on('SIGTERM', gracefulShutdown_2);
process.on('SIGINT', gracefulShutdown_2);

// HTTP/2 with Express.js
// To use HTTP/2 with Express.js, you can use the spdy package, which provides HTTP/2 support for Express applications:

// npm install spdy --save

const express = require('express');
const spdy = require('spdy');
const fs = require('fs');
const path = require('path');

const app_2 = express();

// Your Express middleware and routes here
app_2.get('/', (req, res) => {
  res.send('Hello from Express over HTTP/2!');
});

// SSL/TLS options
const options_3 = {
  key: fs.readFileSync(path.join(__dirname, 'key.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'cert.pem')),
  spdy: {
    protocols: ['h2', 'http/1.1'], // Allow both HTTP/2 and HTTP/1.1
    plain: false, // Use TLS
    'x-forwarded-for': true
  }
};

// Create HTTP/2 server with Express
const PORT_3 = process.env.PORT || 3000;
spdy.createServer(options_3, app).listen(PORT_3, () => {
  console.log(`Express server with HTTP/2 running on port ${PORT_3}`);
});