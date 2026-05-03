
// Streaming Responses
// Node.js streams are powerful for handling large amounts of data efficiently. 
// The HTTP module works well with streams for both reading request bodies and writing responses.

import http from 'http'
import fs from 'fs'
import path from 'path' // safely builds the file paths(avoids broken path and recently issues)

const server = http.createServer((req, res) => {

  // Get the file path from the URL - when the user request fo the file
    //   __dirname - folder at which the file lives
    // User requests: http://localhost:3000/test.txt
    // filePath becomes: C:/project-folder/test.txt
  const filePath = path.join(__dirname, req.url); // joining the directory name and the req url

  // Check if file exists F_OK means the existence file only 
  fs.access(filePath, fs.constants.F_OK, (err) => {
    
    if (err) {
      res.statusCode = 404;
      res.end('File not found');
      return;
    }

    // Get file stats - get the size, created date, modifies date, whether a file or folder
    fs.stat(filePath, (err, stats) => {
      if (err) {
        res.statusCode = 500;
        res.end('Server error');
        return;
      }

      // Set appropriate headers
      res.setHeader('Content-Length', stats.size);
      res.setHeader('Content-Type', 'application/octet-stream');

      // Create read stream and pipe to response
    //   doesnot load the whole file but reads it piece by piece much faster for larger files
      const stream = fs.createReadStream(filePath);

      // Handle errors
      stream.on('error', (err) => {
        console.error('Error reading file:', err);
        if (!res.headersSent) {
          res.statusCode = 500;
          res.end('Error reading file');
        }
      });

      // Pipe the file to the response
      stream.pipe(res); // send the file as the reponse
    });
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`File server running at http://localhost:${PORT}/`);
});

