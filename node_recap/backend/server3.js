
// THIS IS WITHOUT RUNNING THE BABEL LIBRARY 

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import http from 'http';

const App = () =>
  React.createElement(
    'div',
    {
      style: {
        background: 'white',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        display: 'inline-block'
      }
    },
    React.createElement(
      'h1',
      { style: { color: '#333', fontSize: '40px' } },
      'Hello from React'
    ),
    React.createElement(
      'p',
      { style: { fontSize: '18px', color: '#555' } },
      'This is running on the server'
    )
  );

const server = http.createServer((req, res) => {
  const html = ReactDOMServer.renderToString(React.createElement(App));
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <html>
      <body style="text-align:center; padding:50px; background:#f4f4f4;">
        <div id="root">${html}</div>
      </body>
    </html>
  `);
});

const PORT = 8080
server.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`)
});