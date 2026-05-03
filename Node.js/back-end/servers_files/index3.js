
// NODE MODULES 
// HTTP MODULE
// it allows you to make http servers and make the http requests
// create a server -~ callback function(req, res) -~ res.writeHead() -~ res.end() -~ server.listen()

// Reading Request Headers
import http from 'http'

// const http = require('http');

const server_1 = http.createServer((req, res) => {
  // Log all request headers
  console.log('Request Headers:', req.headers);

  // Get specific headers (case-insensitive)
  const userAgent = req.headers['user-agent'];
  const acceptLanguage = req.headers['accept-language'];

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`User-Agent: ${userAgent}\nAccept-Language: ${acceptLanguage}`);

  // Get the URL and HTTP method
  const { url, method } = req;
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`You made a ${method} request to ${url}`);


});

 // in order for you to send another request you need another port server to sent it - not displayed 
// const PORT = process.env.PORT || 3000;

server_2.listen(PORT, () => console.log(`server is running at http://localhost:${PORT}`));

const server_2 = http.createServer((req, res) => {

    const {url, method} = req; // using the object destructuring to acess the property and values of the url from the req object
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`You made a ${method} request to ${url}`);

})

// The url module 
// it allows you parse a URL string into a URL object with properties for each part of the URL.
// it provides utilities for URL resolution and parsing.

// This is the old method of using the url strings - OLD METHOD - NOT RECOMMENDED

// import the url module
import url from 'url' // convert the string into a object and access the properties of each object

const server = http.createServer((req, res) => {
  // Parse the URL
  const parsedUrl = url.parse(req.url, true); // take the url string and passes it and return an url object and set the property to true 

  // Get different parts of the URL - get the pathname and the query 
  const pathname = parsedUrl.pathname; // The path without query string eg /products, /tasks, /prices or it can be "/" to represent the home
  const query = parsedUrl.query; // The query string as an object - what i sbeing asked by the client- look at the text after the question mark and it is concatenated by the & symbol 

  res.writeHead(200, { 'Content-Type': 'application/json' }); // send an josn format of the object by converting back to string

  // send the url as json format
  res.end(JSON.stringify({
    pathname,
    query,
    fullUrl: req.url
  }, null, 2));
});

//  const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`server is running at http://localhost:${PORT}`));

// example when fullurl is being sent to the server get method

const server2 = http.createServer((req, res) => {

    const fullUrl = 'https://localhsot:3000/products?category=electronics&sort=price&page=2' ;
    
  // Parse the URL - using the parse method
  const parsedUrl = url.parse(fullUrl, true); // take the url string and passes it and returns an url object 

  // Get different parts of the URL
  const pathname = parsedUrl.pathname; // The path without query string eg products 
  const query = parsedUrl.query; // The query string as an object eg : category=electronics&sort=price&page=2

  res.writeHead(200, { 'Content-Type': 'application/json' });
  // convert back to striing using the json file 
  res.end(JSON.stringify({
    pathname, // this is the path to the url - products
    query, // creates an object with category: electrons, sort: price, page: 2
    fullUrl: fullUrl // the full url 
  }, null, 2));
});

 const PORT_2 = process.env.PORT || 3000;

server2.listen(PORT_2, () => console.log(`server is running at http://localhost:${PORT_2}`));


// Working with Query Strings - RECOMMENDED METHOD - the modern method 

// NOTE: This is the modern and recommended way to handle URLs in Node.js.

// const { URL } = require('url');
// const querystring = require('querystring'); // used to convert the object into strings

import { URL } from 'url'; // built-in URL API - Used to parse URLs (path, query params, hostname)
import querystring from 'querystring'; // used to convert the object into strings - use the stringify

const server4 = http.createServer((req, res) => {

    const fullUrl = 'https://localhost:3000/products?category=electronics&sort=price&page=2' ;
    
    // using a new url API  
    // This builds : http://localhost:3000/
    const baseURL = 'http://' +  req.headers.host + '/' // this is going to be:  http://localhost:3000/

    const parsedURL = new URL(fullUrl, baseURL) // Converts the URL string into a structured object

    // this is the output of the parsedURL converted to object: 

    // {
    //     pathname: "/products",
    //     search: "?category=electronics&sort=price&page=2",
    //     searchParams: URLSearchParams {...},
    //     hostname: "localhost",
    //     protocol: "https:"
    // }

    // get query paramters - this converts the searchParams string to an object
    const params = Object.fromEntries(parsedURL.searchParams); // gives a URLSearchParams object

    // exmaple in building the query strings
    const queryObj = {
        name: 'John Doe',
        age: 20,
        interest: ["programming", "music"]
    }

    // You want to convert it into a query string using the querystring module - Converts object → query string
    const querystr = querystring.stringify(queryObj)

    // send a response
    res.writeHead(200, { 'Content-Type': 'application/json' });

    res.end(JSON.stringify({
        path: parsedURL.pathname, // products
        params, // this is the object inside the searchparams property 
        exampleQueryString: querystr
    }, null, 2));

})

// corrected example 2
import { URL } from 'url';
import querystring from 'querystring';
import http from 'http';

const server4 = http.createServer((req, res) => {

  const baseURL = 'http://' + req.headers.host;
  const parsedURL = new URL(req.url, baseURL);

  const params = Object.fromEntries(parsedURL.searchParams);

  const queryObj = {
    name: 'John Doe',
    age: 20,
    interest: ["programming", "music"]
  };

  const querystr = querystring.stringify(queryObj); // this converts the query string back to object

  res.writeHead(200, { 'Content-Type': 'application/json' });

  res.end(JSON.stringify({
    path: parsedURL.pathname,
    params,
    exampleQueryString: querystr
  }, null, 2));
});

server4.listen(3000);

const PORT = process.env.PORT || 3000;
server4.listen(PORT, () => console.log(`server running at http://localhost:${PORT}`))

// NOTE:THE Node.js RECOMMENDS USE OF NEW URL().

// Handling Different HTTP Methods
// RESTful APIs commonly use different HTTP methods (GET, POST, PUT, DELETE, etc.) to perform different operations on resources.
// Here's how// In-memory data store (for demonstration)


let todos = [
  { id: 1, task: 'Learn Node.js', completed: false },
  { id: 2, task: 'Build an API', completed: false }
];

const server_run = http.createServer((req, res) => {
  const { method, url } = req; // access the url and the method
  const parsedUrl = new URL(url, `http://${req.headers.host}`);
  const pathname = parsedUrl.pathname;

  // Set CORS headers (for development)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // Route: GET /todos
  if (method === 'GET' && pathname === '/todos') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(todos)); // send the todo object 
  }
  // Route: POST /todos
  else if (method === 'POST' && pathname === '/todos') {
    let body = ''; // declare the variable that will hold the data

    // get the data from the client and convert it into a string 
    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      try {
        const newTodo = JSON.parse(body); // convert to the object 
        // loop inside the todos array anf get the array with id, then spread the aray into individual items and get the maxof the id 
        // add the id plus 1
        newTodo.id = todos.length > 0 ? Math.max(...todos.map(t => t.id)) + 1 : 1;
        todos.push(newTodo); // push the new array in to the todos array 
        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(newTodo)); // send the new todo back to the client 
      } catch (error) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Invalid JSON' }));
      }
    });
  }

  // Route: PUT /todos/:id
  else if (method === 'PUT' && pathname.startsWith('/todos/')) {

    const id = parseInt(pathname.split('/')[2]); // split the array and access the 2 index from the splitted array 
    let body = '';

    // get the data from the client 
    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      try {
        const updatedTodo = JSON.parse(body); // convert the data to an object 
        const index = todos.findIndex(t => t.id === id); // find the aobject with the same is as the extracted one from the url 

        if (index === -1) {
          res.writeHead(404, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Todo not found' }));
        } else {
          todos[index] = { ...todos[index], ...updatedTodo }; // spread the object you want to update and add the new updated todod
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify(todos[index]));
        }
      } catch (error) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Invalid JSON' }));
      }
    });
  }

  // Route: DELETE /todos/:id
  else if (method === 'DELETE' && pathname.startsWith('/todos/')) {
    const id = parseInt(pathname.split('/')[2]);
    const index = todos.findIndex(t => t.id === id);

    if (index === -1) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Todo not found' }));
    } else {
      todos = todos.filter(t => t.id !== id);
      res.writeHead(204);
      res.end();
    }
  }

  // 404 Not Found
  else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not Found' }));
  }
});

const PORT_new = 3000;
server_run.listen(PORT_new, () => {
  console.log(`Server running at http://localhost:${PORT_new}/`);
});