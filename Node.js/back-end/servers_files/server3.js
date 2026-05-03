
// 
import http from 'http'
import { URL } from 'url'
import todos from '../todos.js'
// import { Http2ServerRequest } from 'http2'

// The new URL method is used to convaert the url into a object to access the properties of the url  - eg pathname. hostname, query and id 

// req.on is a method used in Node.js to attach event listeners to request objects.
// It's part of Node.js's event-driven architecture and is commonly used when working with HTTP requests.

const server = http.createServer((req, res) => {

    const { method, url } = req; // destructure the req object
    // convert the url strings into object in order to access the pathname, querystring, hostname, protocol
    const parsedUrl = new URL(url, `http://${req.headers.host}`);
    const pathname = parsedUrl.pathname; // get the pathname property

    // Set CORS headers (for development)
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight requests  - the cors is runnig properly
    if (method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

     // Route: GET /todos
     if(method ==='GET' &&  url === '/todos'){
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(todos));
     }

     // Route: POST /todos - the res on is runned inside the post action
     else if(method === "POST" && url === '/todos'){
        let body = '';
        // used to receive data from the client - // Handle incoming data chunks
        req.on('data', chunk => {
            body += chunk.toString(); // convert the data to strings - convert the object to strings
        })

        // the end event listeners
        req.on('end', () => {
    
            try{
                // the data is converted back to json format (object)
                const newTodo = JSON.parse(body); // covert the data gotten from the client to json 
                // spreads the toods array into individual items, get the largest object id and adds it plus 1
                newTodo.id = todos.length > 0 ? Math.max(...todos.map(t => t.id)) + 1 : 1; // add the id plus 1
                todos.push(newTodo) // add the data object in the todos array 
                res.writeHead(201, { 'Content-Type': 'application/json' }); // jsonfile
                res.end(JSON.stringify(newTodo)); // send the data back to the client - send the object that has beend recived by the client 
    
            }catch(error){
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Invalid JSON' }));
            }finally{
                res.writeHead(400, { 'Content-Type': 'text/plain' });
                res.end('Data received successfully')
            }
        })
    }

    // Route: PUT /todos/:id
    else if(method === 'PUT' && pathname.startsWith('/todos/')){
        // parseInt("15") // 15 - it convert to an array and then access the second index value [2] eg : "/todos/15"
        const id = parseInt(pathname.split('/')[2]); // It extracts a number (ID) from a URL path and converts it into an integer. - that has been sent from the client
        let body = ''

        req.on('data', chunk => {
            body += chunk.toString(); // convert the data to strings
        });

        req.on('end', () => {

            try{
                const updatedTodo = JSON.parse(body); // convert back to json file 
                const index = todos.findIndex(t => t.id === id); // find the index with the same id - returns the index

                if(index === -1){
                    res.writeHead(404, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ error: 'Todo not found' }));
                }else {
                    // spread the todos object by copying existing values you want to update and add the updated
                    todos[index] = { ...todos[index], ...updatedTodo }; // get the index object and update the specific object index in the todos array 
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify(todos[index])); // send the updated object index back to client
                }
            }catch(error){
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Invalid JSON' }));
            }
        })
    }

    // Route: DELETE /todos/:id
    else if(method === 'DELETE' && pathname.startsWith('/todos/')){
        const id = parseInt(pathname.split('/')[2]);
        const index = todos.findIndex(t => t.id === id); // find the index in the object

        if(index === -1){
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Todo not found' }))
        }else {
            todos = todos.filter(t => t.id !== id)
            res.writeHead(204);
            res.end();
        }
    }

    // 404 Not Found
    else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Not Found' }));
    }

})

const PORT  = 8080;
server.listen(PORT, () => console.log(`server is running at http://localhost:${PORT}`))