import express from "express";
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url'; // it convert the full url name into a file name of the directory 

// Recreate __dirname (REQUIRED in ES Modules)
const __filename = fileURLToPath(import.meta.url); // get the full url of he current file: C:/Users/David/node.js/back-end
const __dirname = path.dirname(__filename); // folder containing the file 

// create instance
const app = express();

// middleware
app.use(express.json());
app.use(cors());

// This tell the browser to look at the public folder and it also creates a virtual prefix that points to the public folder 
// app.use('/static', express.static('public'));
// Serve static files
app.use('/assets', express.static(path.join(__dirname, 'public'))); // connects the directory name to the pubic folder and adds an virtual folder names assets

// Send image URLs
app.get('/images', (req, res) => {
    const baseURL = `${req.protocol}://${req.get('host')}`; // Automatically gets the correct URL
    
    const images = [
        `${baseURL}/assets/images/bar image 2.jpeg`,
        `${baseURL}/assets/images/image 2.jpeg`,
        `${baseURL}/assets/images/image 4.png`
    ];

    res.json(images);
});
const PORT = process.env.PORT || 8080;

app.listen(PORT, () =>
  console.log(`server is running at http://localhost:${PORT}`)
);


// Dynamically listing all images - using the fsand path module

// Using the common.js modules 

// const fs = require('fs');
// const path = require('path');

// app.get('/api/images', (req, res) => {
//   const folderPath = path.join(__dirname, 'public/images');
//   fs.readdir(folderPath, (err, files) => {
//     if (err) return res.status(500).send('Server error');

//     // Prepend /assets/images so React can fetch
//     const images = files.map(file => `/assets/images/${file}`);
//     res.json(images);
//   });
// });
