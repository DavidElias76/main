
import http from 'http';
// import fs, { writeFile } from 'fs';
// import path from 'path';
import { getCurrentDate, formatCurrency } from '../util/utils.js';
import Logger from '../util/logger.js';
// import { log } from 'console';

const logger = new Logger('App'); // pass the app as the name of the constructor

const server = http.createServer((req, res) => {

    // CORS headers for it to work
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // send a preflight options to the browser
    if(req.method === 'OPTIONS'){
        res.writeHead(204);
        res.end();
    }

    if(req.url === '/api/data'){

        async function writeFile(){

            try {
                
                logger.log(`Request received for ${req.url}`) // pass the text to log method
                res.writeHead(200, { 'Content-Type': 'text/html' }); // sending a html file
                res.write(`<h1>Welcome to our app!</h1>`);
                res.write(`<p>Current date: ${getCurrentDate()}</p>`);
                res.write(`<p>Formatted amount: ${formatCurrency(99.99)}</p>`);
                res.end();

            }catch(error){
                logger.error(error)
                res.writeHead(500, { 'Content-Type': 'text/plain' }); // write a plain text 
                res.end('Internal Server Error');
            }

            // Handle 404 for other routes and other errors
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Error: Not found');
        }

        writeFile(); // call the async function in order for it to run
    }
})

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  logger.log(`Server running at http://localhost:${PORT}`);
});