
// USING THE BABEL LIBRARY 
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import http from 'http';

const App = () => {
    return (
    
        <div style={{
            background: 'white',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            display: 'inline-block'
        }}>
        <h1 style={{ color: '#333', fontSize: '40px' }}>
            Hello from React
        </h1>

        <p style={{ fontSize: '18px', color: '#555' }}>
            This is running on the server
        </p>

        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>

        <button style={{ padding: '10px',
            background: 'blue',
            color: 'white',
            border: 'none',
            borderRadius: '5px'
        }}>
            Click Me
        </button>
        </div>
    );
}
const server = http.createServer((req, res) => {
  try {
    const html = ReactDOMServer.renderToString(<App />);

    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.end(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>React SSR</title>
          <style>
            body {
              background: #f4f4f4;
              font-family: Arial;
              text-align: center;
              padding: 50px;
            }
          </style>
        </head>
        <body>
          <div id="root">${html}</div>
        </body>
      </html>
    `);

  } catch (err) {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

server.listen(8080, () => {
  console.log('Server running at http://localhost:8080');
});

// NB: THIS CODE NEEDS TO BE FIXED

// to use the views folder

// install the ejs to use views folder
