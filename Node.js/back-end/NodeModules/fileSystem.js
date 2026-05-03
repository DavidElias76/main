
// The Node.js File System module (fs) provides a comprehensive set of methods for working with the file system on your computer.

import { json } from 'express';
import fs from 'fs' // import the file system module

// // promises based API
// // Using promises (Node.js 10.0.0+)
// const fs = require('fs').promises;

// // Or with destructuring
// const { readFile, writeFile } = require('fs').promises;

// // Or with ES modules
// // import { readFile, writeFile } from 'fs/promises';

// // Read file - fs.readFile()
// fs.readFile('myfile.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error('Error reading file:', err);
//     return;
//   }
//   console.log('File content:', data);
// });

// // For binary data (like images), omit the encoding
// fs.readFile('image.png', (err, data) => {
//   if (err) throw err;
//   // data is a Buffer containing the file content
//   console.log('Image size:', data.length, 'bytes');
// });

// // Reading Files with Promises (Modern Approach)
// async function readFileExample() {
//   try {
//     const data = await fs.readFile('myfile.txt', 'utf8');
//     console.log('File content:', data);
//   } catch (err) {
//     console.error('Error reading file:', err);
//   }
// }

// readFileExample(); // call the function to run 

// // Or with util.promisify (Node.js 8.0.0+)
// const { promisify } = require('util');
// const readFileAsync = promisify(require('fs').readFile);

// async function readWithPromisify() {
//   try {
//     const data = await readFileAsync('myfile.txt', 'utf8');
//     console.log(data);
//   } catch (err) {
//     console.error(err);
//   }
// }

// readWithPromisify();

// Creating and writing a new file
// using the fs.writeFile

import http  from 'http'

    async function writeFile(){
    
        try{
            // write a text file - this will be runned first 
            await fs.writeFile('myFile.txt', 'Hello world', 'utf8') // Replaces file content
    
            // write a json file
             const data = { name: 'John', age: 30, city: 'New York' };
             fs.writeFile('data.json', JSON.stringify(data, null, 2), 'utf8')
    
             console.log('File created sucessfully')
        }catch(err){
            console.error('Failed to create the file', err)
        }
    }

writeFile()

// const PORT = 8080
// server.listen(PORT, () => {
//     console.log(`server is running at http:///ocalhost:${PORT} `)
// })

// Using fs.appendFile() - addds content to an existing file
// Appends content to a file, creating the file if it doesn't exist:

async function appendFile(){
    try{
        //  // Append a timestamped log entry
        const logEntry = `${new Date().toISOString()}: Application started\n`; // It adds content to the end of an existing file.
        await fs.appendFile('app.log', logEntry, 'utf8');

    }catch(error){
        console.error('')
    }
}

// Using File Handles
// or more control over file operations, you can use file handles:

async function appendToFile() {
    let handleFile = ''

    try{
        // / Open a file for writing (creates if doesn't exist)
        fileHandle = await fs.open('myFile.txt', 'w')

        //Write content to the file
        await fileHandle.write('First line\n');
        await fileHandle.write('Second line\n');
        await fileHandle.write('Third line\n');

        console.log('File written sucessfully')
    }catch(error){
        console.error('Faild to write the file', error)
    }finally{
        if(fileHandle){
            await fileHandle.close() // close the file whter written or not
        }
    }
}
appendToFile();


// Using Streams for Large Files 
// For writing large amounts of data, use streams to avoid high memory usage:

const fs = require('fs');
const { pipeline } = require('stream/promises'); // ist is a safer why to connect streams and return a promise 
const { Readable } = require('stream'); // used to create readbale streams - Streams data piece by piece, not all at once

async function writeLargeFile() {
  // Create a readable stream (could be from HTTP request, etc.) - it writes one at a time 
  const data = Array(1000).fill().map((_, i) => `Line ${i + 1}: ${'x'.repeat(100)}\n`); // the data will be streamed and not written at once
  const readable = Readable.from(data); // Converts the array into a Readable stream

  // Create a writable stream to a file
//   Opens (or creates) large-file.txt, Prepares it to receive streamed data, Writes in chunks instead of all at once
  const writable = fs.createWriteStream('large-file.txt');

  try {
    // Pipe the data from readable to writable
    await pipeline(readable, writable);
    console.log('Large file written successfully');
  } catch (err) {
    console.error('Error writing file:', err);
  }
}

writeLargeFile();


// Deleting a Single File

// Use fs.unlink() to delete a file:

async function deleteFile() {
  const filePath = 'file-to-delete.txt'; // path of the file to delete

  try {
    // Check if file exists before deleting
    await fs.access(filePath); // access the file and check if the file exist  

    // Delete the file
    await fs.unlink(filePath); // delete the file
    console.log('File deleted successfully');
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log('File does not exist');
    } else {
      console.error('Error deleting file:', err);
    }
  }
}

deleteFile();

//  Deleting Multiple Files
// To delete multiple files, you can use Promise.all() with fs.unlink():

const path = require('path')
async function deleteFiles() {
    // delete all the files at oce with promise.all
  const filesToDelete = [
    'temp1.txt',
    'temp2.txt',
    'temp3.txt'
  ];

  try {
    // Delete all files in parallel
    await Promise.all(
      filesToDelete.map(file =>
        fs.unlink(file).catch(err => {
          if (err.code !== 'ENOENT') {
            console.error(`Error deleting ${file}:`, err);
          }
        })
      )
    );

    console.log('Files deleted successfully');
  } catch (err) {
    console.error('Error during file deletion:', err);
  }
}

deleteFiles();

//  Deleting Directories
// To delete directories, you have several options depending on your needs:

async function deleteDirectory(dirPath) {

  try {
    // Check if the directory exists
    const stats = await fs.stat(dirPath); // the stat check if the file exist
   
    // Prevents accidentally deleting a file, Adds a safety check
    if (!stats.isDirectory()) {
      console.log('Path is not a directory');
      return;
    }

    // For Node.js 14.14.0+ (recommended)
    // recursive: delete the directory and all contents
    // force: true : Ignore errors (like missing files)
    await fs.rm(dirPath, { recursive: true, force: true });

    // For older Node.js versions (deprecated but still works)
    // await fs.rmdir(dirPath, { recursive: true });

    console.log('Directory deleted successfully');
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log('Directory does not exist');
    } else {
      console.error('Error deleting directory:', err);
    }
  }
}

// Usage
deleteDirectory('directory-to-delete'); // the directory the file exists

// Empty the directory without deleting itself
// To remove all files and subdirectories within a directory but keep the directory itself:
const path = require('path')

async function emptyDirectory(dirPath) {
  try {
    // Read the directory
    const files = await fs.readdir(dirPath, { withFileTypes: true }); // read the directories and get all the files 

    // Delete all files and directories in parallel
    await Promise.all(
      files.map(file => {
        const fullPath = path.join(dirPath, file.name); // all the directory path and their file names
        return file.isDirectory()
          ? fs.rm(fullPath, { recursive: true, force: true }) // delete the path and the directory name 
          : fs.unlink(fullPath);
      })
    );

    console.log('Directory emptied successfully');
  } catch (err) {
    console.error('Error emptying directory:', err);
  }
}

// Usage
emptyDirectory('directory-to-empty'); // the directory path 


// Renaming of the file
// basic renaming of the file

async function renameFile() {
  const oldPath = 'old-name.txt'; // old name of the file
  const newPath = 'new-name.txt'; // new name of the file

  try {
    // Check if source file exists
    await fs.access(oldPath); // acess the old name file

    // Check if destination file already exists
    try {
      await fs.access(newPath); // acess the new name file path
      console.log('Destination file already exists');
      return;
    } catch (err) {
      // Destination doesn't exist, safe to proceed
    }

    // Perform the rename
    await fs.rename(oldPath, newPath); // rename the old file to new file
    console.log('File renamed successfully');
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log('Source file does not exist');
    } else {
      console.error('Error renaming file:', err);
    }
  }
}

// Usage
renameFile();

// Moving Files Between Directories
// You can use fs.rename() to move files between directories:

async function moveFile() {
  const sourceFile = 'source/file.txt'; // the file folder path 
  const targetDir = 'destination'; // the destination of the file it is going - new directory 
  const targetFile = path.join(targetDir, 'file.txt'); // join the path and the file name (destination/file.txt)

  try {
    // Ensure source file exists by acessing the file 
    await fs.access(sourceFile);

    // Create target directory if it doesn't exist
    await fs.mkdir(targetDir, { recursive: true });

    // Move the file - take the source file, rename it and move it to the new target file
    await fs.rename(sourceFile, targetFile); 

    console.log('File moved successfully');
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log('Source file does not exist');
    } else if (err.code === 'EXDEV') {
      console.log('Cross-device move detected, using copy+delete fallback');
      await moveAcrossDevices(sourceFile, targetFile);
    } else {
      console.error('Error moving file:', err);
    }
  }
}

// Helper function for cross-device moves
async function moveAcrossDevices(source, target) {
  try {
    // Copy the file
    await fs.copyFile(source, target);

    // Delete the original
    await fs.unlink(source);

    console.log('File moved across devices successfully');
  } catch (err) {
    // Clean up if something went wrong
    try { await fs.unlink(target); } catch (e) {}
    throw err;
  }
}

// Usage
moveFile();

// Bath renaiming file- RENAMING MULTIPLE FILES
// rename Multiple files matching a pattern

async function batchRename() {
  const directory = 'images';
  const pattern = /^image(\d+)\.jpg$/; // the pattern for renaimg the file

  try {
    // Read directory contents
    const files = await fs.readdir(directory); // read the directory - Returns an array of file names (string

    // Process each file
    for (const file of files) {
      const match = file.match(pattern); // see if it matches the pattern 
      if (match) {
        const [_, number] = match; // _ ignores the full match (image12.jpg) number gets the captured digits ('12')
        const newName = `photo-${number.padStart(3, '0')}.jpg`; // the new name of the file - from image2.jpg → photo-002.jpg
        const oldPath = path.join(directory, file); // images/image2.jpg
        const newPath = path.join(directory, newName); // images/photo-002.jpg

        // Skip if the new name is the same as the old name
        if (oldPath !== newPath) {
          await fs.rename(oldPath, newPath); // remove the old name and add the new name 
          console.log(`Renamed: ${file} - ${newName}`);
        }
      }
    }

    console.log('Batch rename completed');
  } catch (err) {
    console.error('Error during batch rename:', err);
  }
}

batchRename();

//  Atomic Rename Operations
// For critical operations, use a temporary file to ensure atomicity:

// Example: Atomic file update
const fs = require('fs').promises;
const path = require('path');
const os = require('os');

async function updateFileAtomic(filePath, newContent) {
  const tempPath = path.join(
    os.tmpdir(), // temporary directory 
    `temp-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
  );

  try {
    // 1. Write to temp file
    await fs.writeFile(tempPath, newContent, 'utf8');

    // 2. Verify the temp file was written correctly
    const stats = await fs.stat(tempPath);
    if (stats.size === 0) {
      throw new Error('Temporary file is empty');
    }

    // 3. Rename (atomic on most systems)
    await fs.rename(tempPath, filePath);

    console.log('File updated atomically');
  } catch (err) {
    // Clean up temp file if it exists
    try { await fs.unlink(tempPath); } catch (e) {}

    console.error('Atomic update failed:', err);
    throw err;
  }
}

// Usage
updateFileAtomic('important-config.json', JSON.stringify({ key: 'value' }, null, 2));
// Cross-Platform Note: The fs.rename() operation is atomic on Unix-like systems but may not be on Windows.

// For cross-platform atomic operations, consider using a temporary file approach as shown in the example above.