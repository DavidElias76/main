import fs from 'fs'
import http from 'http';
import { promises } from 'fs/promises';

const server = http.createServer((req, res) => {

  // CORS headers for it to work 
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // Handle preflight requests - browser always sends an options request before making any cross-origin request
  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // Check if the request is for the home address
  if (req.url === '/users/user.json') {
    
    async function loadUserData(){

      try{
        const data = await fs.promises.readFile(`users/user.json`, 'utf8') // read the user.json
        const user = JSON.parse(data)
        
        if(!user.email){  // Changed: was checking if email EXISTS, should check if it DOESN'T exist
          throw new Error('Invalid user data: missing email')
        }
        
        return user;
        
      }catch(error){
        // handle different error types
        if(error.code === 'ENOENT'){
          throw new Error(`User not found`); // Changed: userId is undefined
        }else if(error instanceof SyntaxError){
          throw new Error('Invalid user data format');
        }
        throw error;
      }finally {
        console.log(`Finished processing user`); // Changed: userId is undefined
      }
    }
    
    // Call the async function and send response to the client 
    loadUserData()
      .then(user => {
        res.writeHead(200, { 'Content-Type': 'application/json' }); // sending a json file 
        res.end(JSON.stringify(user)); // send the user data as a json string to the client
      })
      .catch(error => {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: error.message })); // error reading the file and due to the status code 
      });
    
    return;
  }
  
  // Handle 404 for other routes
  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'Not found' }));
})

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log('Visit http://localhost:8080/users/user.json to see the file content');
});