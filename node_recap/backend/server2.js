
// SENDING PLAIN HTML FROM THE SERVER

import express from 'express'

const app = express()

import http from 'http';

const getCurrentDate = () => new Date().toISOString();

const formatCurrency = (amount, currency = 'USD') => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency
  }).format(amount);
};

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

const logger = new Logger('App');

const server = http.createServer((req, res) => {
  try {
    logger.log(`Request received for ${req.url}`);

    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>My App</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #f4f4f4;
              text-align: center;
              padding: 50px;
            }
            h1 {
              color: #333;
              font-size: 40px;
            }
            p {
              font-size: 18px;
              color: #555;
            }
            .card {
              background: white;
              padding: 20px;
              border-radius: 10px;
              box-shadow: 0 4px 8px rgba(0,0,0,0.1);
              display: inline-block;
            }
          </style>
        </head>
        <body>
          <div class="card">
            <h1>Welcome to our app!</h1>
            <p>Current date: ${getCurrentDate()}</p>
            <p>Formatted amount: ${formatCurrency(99.99)}</p>
          </div>
        </body>
      </html>
    `);

    res.end();

  } catch (error) {
    logger.error(error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));


// SERVER SIDE RENDERING - writing react app in the server without creating a client 

