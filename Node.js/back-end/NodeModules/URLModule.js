
import {URL} from 'url'

// common.js
const url = require('url')

// ES Modules
const { URL } = require('url')

// Legacy API vs WHATWG URL API

// Using the WHATWG URL API (recommended for new code)
const myURL = new URL('https://example.org:8080/p/a/t/h?query=string#hash'); // convert the url into an object 
console.log(myURL.hostname); // 'example.org'
console.log(myURL.pathname); // '/p/a/t/h'
console.log(myURL.searchParams.get('query')); // 'string'

// Using the legacy API
const parsedUrl = require('url').parse('https://example.org:8080/p/a/t/h?query=string#hash'); // the url get concerted to an object and allows access to the value
console.log(parsedUrl.host); // 'example.org:8080'
console.log(parsedUrl.query); // 'query=string'


// URLSearchParams API
// The URLSearchParams API provides utility methods to work with the query string of a URL:
// it lets you read , add, update, delete and builf query string 

// use the url.searh to acess the query string 

const { URL, URLSearchParams } = require('url');

const myURL2 = new URL('https://example.com/?name=Kai&age=30');
const params = new URLSearchParams(myURL2.search); // get the search query string 

// Get a parameter
console.log(params.get('name')); // get the value of name property 

// Add a parameter
params.append('city', 'Stavanger'); // add the property city and the value 
// Delete a parameter
params.delete('age'); // delete the property name and it value 
// Convert to string
console.log(params.toString()); // convert the object into strings 

// best practices 

// summer.html

// <!DOCTYPE html>
// <html>
// <body>
// <h1>Summer</h1>
// <p>I love the sun!</p>
// </body>
// </html>

// Create a Node.js file that opens the requested file and returns the content to the client. If anything goes wrong, throw a 404 error:
// demo_fileserver.js:

let http = require('http');
let url = require('url');
let fs = require('fs');

http.createServer(function (req, res) {
  let q = url.parse(req.url, true); // convert it into an object 
  let filename = "." + q.pathname; // get the pathname
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }
 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);

// Always Validate and Sanitize URLs
// Example

function isValidHttpUrl(string) {
  try {
    const url = new URL(string);
    return url.protocol === 'http:' || url.protocol === 'https:'; // chck if the ur is http or https
  } catch (err) {
    return false;
  }
}

console.log(isValidHttpUrl('https://example.com')); // true
console.log(isValidHttpUrl('ftp://example.com')); // false

// Constructing URLs Safely
Example
const { URL } = require('url');

// Safe way to construct URLs
function createProfileUrl(domain, username) {
  return new URL(`/users/${encodeURIComponent(username)}`, domain).href;
}

console.log(createProfileUrl('https://example.com', 'johndoe'));
// 'https://example.com/users/johndoe'

// Route parameters represent variable values embedded in the URL path, while query parameters are key–value pairs provided in the query string portion of the URL.

// Handling Query Parameters
// the searchParams is an object consisting of the query string 
// Example
const { URL } = require('url');

// Parse URL with query parameters
const url = new URL('https://example.com/search?q=node.js&lang=en');

// Get all parameters and their value string
console.log(url.searchParams.toString()); // 'q=node.js&lang=en'

// Get specific parameter
console.log(url.searchParams.get('q')); // 'node.js'

// Check if parameter exists
console.log(url.searchParams.has('lang')); // true

// Add new parameter
url.searchParams.append('page', '2');
console.log(url.href);
// 'https://example.com/search?q=node.js&lang=en&page=2'