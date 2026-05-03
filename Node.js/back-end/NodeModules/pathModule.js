
import path from 'path' // es modukle method

// path.basename() - return the last portion of the path 

import { join, resolve, basename } from 'path'; // THE METHODS THAT CAN BE USED BY THE PATH NAME

// / Get filename from a path
const filename = path.basename('/users/docs/file.txt'); // get the name of the file that exist inside the directory
console.log(filename); // returns file.txt 

// Get filename without extension 
const filenameWithoutExt = path.basename('/users/docs/file.txt', '.txt'); // get the name of the file without the extension
console.log(filenameWithoutExt); // without extension return the file name

// __dirname and __filename
// provide the directory name and the file name of the current module

// common.js method
// CommonJS module (e.g., app.js)
const path = require('path'); 
// Get the directory name of the current module
console.log('Directory name:', __dirname); // dir only - directory name 

// Get the file name of the current module
console.log('File name:', __filename); // dir and file name- directiry name and the file name

// Building paths relative to the current module
const configPath = path.join(__dirname, 'config', 'app-config.json');
console.log('Config file path:', configPath);

// Getting the directory name using path.dirname()
console.log('Directory using path.dirname():', path.dirname(__filename));

// output: 
// Directory name: /home/user
// File name: /home/user/prog.js
// Config file path: /home/user/config/app-config.json
// Directory using path.dirname(): /home/user

// Es mdoule method- ES MODULE METHOD 
// ES Module (e.g., app.mjs or "type": "module" in package.json)
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Get the current module's URL
const __filename = fileURLToPath(import.meta.url); // takes the current file path and convert it o a normal file path
const __dirname = dirname(__filename); // get the directory name after the conversion of the file path 

console.log('ES Module file path:', __filename);
console.log('ES Module directory:', __dirname);

// Example with dynamic imports
async function loadConfig() {
  const configPath = new URL('../config/app-config.json', import.meta.url);
  const config = await import(configPath, { with: { type: 'json' } });
  return config;
}

// output:
// ES Module file path: /home/user/prog.js
// ES Module directory: /home/user

// path.extname()
// Returns the extension of a path, from the last occurrence of the . character to the end of the string.

const extension = path.extname('file.txt');
console.log(extension); // return the etension of The file (txt, .html, .css)


// path.join() - output depends on the os in windoWs we use the backslashes
// Joins all given path segments together using the platform-specific separator as a delimiter, then normalizes the resulting path.
// Join path segments
const fullPath = path.join('/users', 'docs', 'file.txt');
console.log(fullPath); // Output depends on OS

// Handle relative paths and navigation
console.log(path.join('/users', '../system', './logs', 'file.txt'));

// Handle multiple slashes
console.log(path.join('users', '//docs', 'file.txt')); // Normalizes slashes


// path.resolve()
// Resolves a sequence of paths or path segments into an absolute path, processing from right to left until an absolute path is constructed.

// 1. Resolve relative to current working directory
console.log(path.resolve('file.txt'));

// 2. Resolve with multiple segments/  JOINS MULTIPLE SEGMENTS
console.log(path.resolve('/users', 'docs', 'file.txt'));

// 3. Right-to-left processing - when having differrent paths
console.log(path.resolve('/first', '/second', 'third')); // '/second/third'

// 4. Using __dirname for module-relative paths
console.log(path.resolve(__dirname, 'config', 'app.json'));


// path.parse() - RETUNS AN OBJECT OF THE FILE
// Returns an object whose properties represent significant elements of the path.

// Parse a file path
const pathInfo = path.parse('/users/docs/file.txt'); // RETURN AON OBJECT 
console.log(pathInfo);

/* Output on Unix/macOS:
{
  root: '/',
  dir: '/users/docs',
  base: 'file.txt',
  ext: '.txt',
  name: 'file'
}
*/

// Accessing parsed components
console.log('Directory:', pathInfo.dir); // /users/docs
console.log('Filename:', pathInfo.base); // file.txt
console.log('Name only:', pathInfo.name); // file
console.log('Extension:', pathInfo.ext); // .txt

// path.format()
// Returns a path string from an object, which is the opposite of path.parse().

// Method 1: Using dir and base - CONVERT THE PATH OBJECT BACK TO A STRING 
const pathString1 = path.format({
    dir: '/users/docs',
    base: 'file.txt'
});
console.log(pathString1); // '/users/docs/file.txt'

// Method 2: Using root, dir, name, and ext
const pathString2 = path.format({
    root: '/',
    dir: '/users/docs',
    name: 'file',
    ext: '.txt'
});
console.log(pathString2); // '/users/docs/file.txt'

// Practical example: Modify and reconstruct a path
const parsedPath = path.parse('/users/docs/old-file.txt');
parsedPath.base = 'new-file.md';

const newPath = path.format(parsedPath);
console.log(newPath); // '/users/docs/new-file.md'


// path.normalize()

// Normalizes the given path, resolving .. and . segments and removing redundant separators.
// it fixex all the extra slashes and cleans up messay paths
// eg: 
// /users/./docs/../data/file.txt - messy paths
// → /users/data/file.txt - fixed using the path.normalize

// Resolve relative navigation
console.log(path.normalize('/users/./docs/../data/file.txt')); // '/users/data/file.txt'

// Handle multiple consecutive slashes
console.log(path.normalize('/users//docs////file.txt')); // '/users/docs/file.txt'

// Windows-style paths (automatically handled)
console.log(path.normalize('C:\\users\\docs\\..\\file.txt')); // 'C:\\users\\file.txt'

// Edge cases console.log(path.normalize('')); // '.'
console.log(path.normalize('.')); // '.'
console.log(path.normalize('..')); // '..'
console.log(path.normalize('/..')); // '/'


// path.relative 
// Returns the relative path from the first path to the second path, or an empty string if the paths are the same.

// Basic relative path
console.log(path.relative('/users/docs/file.txt', '/users/images/photo.jpg'));
// Output: '../../images/photo.jpg'

// Same directory
console.log(path.relative('/users/docs/file1.txt', '/users/docs/file2.txt'));
// Output: 'file2.txt'

// Same file - when the path are the same it return the second path 
console.log(path.relative('/users/docs/file.txt', '/users/docs/file.txt'));
// Output: ''

// Different roots (Windows)
console.log(path.relative('C:\\user\\test\\aaa', 'C:\\user\\impl\\bbb'));
// Output: '..\\..\\impl\\bbb'

// Practical example: Creating a relative path for web
const absolutePath = '/var/www/static/images/logo.png';
const webRoot = '/var/www/';
const webPath = path.relative(webRoot, absolutePath).replace(/\\/g, '/');
console.log(webPath); // 'static/images/logo.png'


// path.isAbsolute()
// Determines if the given path is an absolute path. An absolute path will always resolve to the same location, regardless of the working directory.
// it return a boolean value - RETURN TRUR OR FALSE

// POSIX (Unix/Linux/macOS)
console.log(path.isAbsolute('/users/docs')); // true
console.log(path.isAbsolute('users/docs')); // false

// Windows
console.log(path.isAbsolute('C:\\temp')); // true
console.log(path.isAbsolute('temp')); // false

// UNC paths (Windows network paths)
console.log(path.isAbsolute('\\\\server\\share')); // true

// Practical example: Ensure absolute path for config files
function ensureAbsolute(configPath) {
  return path.isAbsolute(configPath)
    ? configPath
    : path.resolve(process.cwd(), configPath);
  }
// changes the path to absolute
console.log(ensureAbsolute('config.json')); // Resolves to absolute path
console.log(ensureAbsolute('/etc/app/config.json')); // Already absolute

// path.sep()
// Provides the platform-specific path segment separator.
// This is a read-only property that returns the default path segment separator for the current operating system.
// it checks what the OS is being used and use the segment operator by joining them to build a path

// Get the platform-specific separator
console.log(`Path separator: ${JSON.stringify(path.sep)}`); // '\\' on Windows, '/' on POSIX

// Building paths safely across platforms
const parts = ['users', 'docs', 'file.txt'];
const filePath = parts.join(path.sep);
console.log('Built path:', filePath); // building a path based on the OS operator 

// Splitting paths correctly
const pathToSplit = process.platform === 'win32'
  ? 'C:\\Users\\docs\\file.txt'
  : '/users/docs/file.txt';
const pathParts = pathToSplit.split(path.sep);
console.log('Split path:', pathParts);

// Normalizing paths with the correct separator
const normalized = path.normalize(`users${path.sep}docs${path.sep}..${path.sep}file.txt`);
console.log('Normalized path:', normalized);


// path.delimiter()
// Provides the platform-specific path delimiter used to separate paths in environment variables like PATH.
// eg: colons and semi colons used in differenet OS are extracted from the file path 

// It separates multiple paths inside an environment variable like PATH

// Get the platform-specific delimiter
console.log(`Path delimiter: ${JSON.stringify(path.delimiter)}`); // ';' on Windows, ':' on POSIX

// Working with PATH environment variable - access the file 
function findInPath(executable) {
  if (!process.env.PATH) return null;

  // Split PATH into directories
  const pathDirs = process.env.PATH.split(path.delimiter); // 

  // Check each directory for the executable
  for (const dir of pathDirs) {
    try {
      const fullPath = path.join(dir, executable); // it also remove the colon or semicolon and build a full path
      require('fs').accessSync(fullPath, require('fs').constants.X_OK);
      return fullPath;
    } catch (err) {
      // File not found or not executable
      continue;
    }
  }
  return null;
}

// Example: Find node executable in PATH
const nodePath = findInPath(process.platform === 'win32' ? 'node.exe' : 'node');
console.log('Node.js path:', nodePath || 'Not found in PATH');

// eg C:\Windows\System32;C:\Program Files\nodejs - That ; or : is exactly what path.delimiter gives you.


// path.win32 ()
// Provides access to Windows-specific path methods, allowing you to work with Windows-style paths regardless of the operating system you're running on.

// Always use Windows-style path handling
const winPath = 'C:\\Users\\user\\Documents\\file.txt';
console.log('Windows basename:', path.win32.basename(winPath));
console.log('Windows dirname:', path.win32.dirname(winPath));

// Normalize Windows paths
console.log('Normalized path:', path.win32.normalize('C:\\\\temp\\\\foo\\..\\bar\\file.txt'));

// Convert between forward and backward slashes
const mixedPath = 'C:/Users/User/Documents//file.txt';
console.log('Normalized mixed slashes:', path.win32.normalize(mixedPath));

// Working with UNC paths
const uncPath = '\\\\server\\share\\folder\\file.txt';
console.log('UNC path components:', path.win32.parse(uncPath));


// path.posix()

// Provides access to POSIX-compliant path methods, ensuring consistent forward-slash path handling across all platforms.

// Always use POSIX-style path handling
const posixPath = '/home/user/documents/file.txt';
console.log('POSIX basename:', path.posix.basename(posixPath));
console.log('POSIX dirname:', path.posix.dirname(posixPath));

// Normalize POSIX paths
console.log('Normalized path:', path.posix.normalize('/usr/local//bin/../lib/file.txt'));

// Working with relative paths
console.log('Relative path:', path.posix.relative('/data/test/aaa', '/data/impl/bbb'));

// Joining paths with POSIX separators
const urlPath = ['static', 'images', 'logo.png'].join(path.posix.sep);
console.log('URL path:', urlPath); // 'static/images/logo.png'

// output:
// POSIX basename: file.txt
// POSIX dirname: /home/user/documents
// Normalized path: /usr/local/lib/file.txt
// Relative path: ../../impl/bbb
// URL path: static/images/logo.png

// REAL WORLD SCENARIOS

const path = require('path');
const fs = require('fs/promises'); // returns a promise

// Current module's directory and file name info
console.log('Module directory:', __dirname);
console.log('Module file path:', __filename);


// Common path patterns - COMMON.JS FILE HANDLING
const paths = {
  // Configuration files relative to project root
  config: path.join(__dirname, '..', 'config', 'app.json'),  // current dir_name/../config/app.json
 
  // Logs directory (create if doesn't exist)
  logs: path.join(__dirname, '..', 'logs'), // current dir_name/../logs
 
  // Public assets
  public: path.join(__dirname, '..', 'public'), // current dir_name/../public
 
  // Uploads directory with proper permissions
  uploads: path.join(__dirname, '..', 'uploads') // // current dir_name/../uploads
};

// Ensure directories exist
async function ensureDirectories() {

  try {
    // loop and make the folders insise the current directory
    await Promise.all([
      fs.mkdir(paths.logs, { recursive: true }), // makes the logs folder
      fs.mkdir(paths.public, { recursive: true }), // makes the public folder
      fs.mkdir(paths.uploads, { recursive: true, mode: 0o755 }) // makes the uploads folder
    ]);
    console.log('All directories ready');
  } catch (error) {
    console.error('Error creating directories:', error);
  }
}

// Example: Load configuration
async function loadConfig() {
  try {
    const configData = await fs.readFile(paths.config, 'utf8'); // read the file inside the config folder(app.json)
    return JSON.parse(configData); // converts it to an object 
  } catch (error) {
    console.error('Error loading config:', error.message);
    return {};
  }
}

// Example: Log to application log
async function logToFile(message) {
  try {
    const logFile = path.join(paths.logs, `${new Date().toISOString().split('T')[0]}.log`); // final name : current dir_name/logs/2026-02-07.log
    const logMessage = `[${new Date().toISOString()}] ${message}\n`;  //: Timestamp included : \n ensures each log entry goes on a new line[2026-02-07T19:10:22.456Z] Application started
    await fs.appendFile(logFile, logMessage, 'utf8'); // writes at the end of the file 
  } catch (error) {
    console.error('Error writing to log:', error);
  }
}

// Initialize and run examples
(async () => {
  await ensureDirectories();
  const config = await loadConfig();
  console.log('Loaded config:', config);
  await logToFile('Application started');
})();


// ES MODULES FILE HANDLING 

// / ES Module (app.mjs or with "type": "module" in package.json)
import { fileURLToPath } from 'url'; // get the current path name
import { dirname, join } from 'path';
import { promises as fs } from 'fs'; // return a promise / import {fs} from 'fs/promise 

// Get current module's directory and file path
const __filename_2 = fileURLToPath(import.meta.url); // path to the current directory  “Take the current file’s URL and convert it into a normal file path”
const __dirname_2 = dirname(__filename); // get the directory name

// Utility function for path resolution in ES modules
function resolvePath(relativePath) {
  return new URL(relativePath, import.meta.url).pathname; // build a pathname and convert it into an object 
}

// Example usage
const configPath_2= join(__dirname, '..', 'config', 'settings.json'); // current dir_name/../config/setting.json
const assetPath = resolvePath('../assets/logo.png');

// Dynamic imports with paths relative to current module
async function loadModule(modulePath) {
  const fullPath = new URL(modulePath, import.meta.url);
  return import(fullPath);
}

// Advanced Path Handling Patterns
// Here are some advanced patterns for working with paths in real-world applications.


// Example: Path Utilities for Production Applications

const path = require('path');
const fs = require('fs/promises');
const os = require('os'); // import the os modules used (windows)

// Path utility class
class PathUtils {
  static get tempDir() {
    return path.join(os.tmpdir(), 'myapp'); // create a temporary directory name 
  }
 
  // the method to access the file
  static get userHome() {
    return process.env.HOME || process.env.USERPROFILE || os.homedir(); // access the files 
  }

  static async ensureDirectory(dirPath) {
    try {
      await fs.mkdir(dirPath, { recursive: true, mode: 0o755 });
      return true;
    } catch (error) {
      if (error.code !== 'EEXIST') throw error;
      return false;
    }
  }
 
  static isSafePath(baseDir, targetPath) {
    const normalizedBase = path.resolve(baseDir);
    const normalizedTarget = path.resolve(targetPath);
    return normalizedTarget.startsWith(normalizedBase);
  }
 
  static getUniqueFilename(dir, filename) {
    const { name, ext } = path.parse(filename); // conver the path to an object and get the exit and the name property 
    let counter = 1;
    let candidate = filename;
   
    while (fs.existsSync(path.join(dir, candidate))) {
      candidate = `${name} (${counter++})${ext}`;
    }
    return candidate;
  }
}

// Example usage
(async () => {
  // Ensure temp directory exists
  await PathUtils.ensureDirectory(PathUtils.tempDir); // the tepmdir myapp
 
  // Safe file operations
  const userUploads = path.join(PathUtils.userHome, 'uploads');
  const safePath = path.join(userUploads, 'profile.jpg');
 
  if (PathUtils.isSafePath(userUploads, safePath)) {
    console.log('Path is safe for operations');
  } else {
    console.error('Potential path traversal attack detected!');
  }
 
  // Generate unique filename
  const uniqueName = PathUtils.getUniqueFilename(
    userUploads,
    'document.pdf'
  );
  console.log('Unique filename:', uniqueName);
 
  // Working with file extensions
  const filePath = '/users/john/docs/report.pdf';
  const fileInfo = {
    name: path.basename(filePath, path.extname(filePath)),
    ext: path.extname(filePath),
    dir: path.dirname(filePath)
  };
  console.log('File info:', fileInfo);
})();


// Security Considerations
// When working with file paths, security should always be a top priority. Here are some important security considerations and best practices:

// Example: Secure Path Handling
const path = require('path');
const fs = require('fs').promises;

// 1. Prevent directory traversal attacks
function safeJoin(base, ...paths) {
  const targetPath = path.join(base, ...paths);
  const normalizedPath = path.normalize(targetPath);
 
  // Ensure the resulting path is still within the base directory
  if (!normalizedPath.startsWith(path.resolve(base))) {
    throw new Error('Access denied: Path traversal detected');
  }
 
  return normalizedPath;
}

// 2. Validate file extensions
const ALLOWED_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.gif']);

function hasValidExtension(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return ALLOWED_EXTENSIONS.has(ext);
}

// 3. Safe file operations
async function safeReadFile(baseDir, relativePath) {
  const safePath = safeJoin(baseDir, relativePath);
 
  // Additional security checks
  if (!hasValidExtension(safePath)) {
    throw new Error('Invalid file type');
  }
 
  const stats = await fs.stat(safePath);
  if (!stats.isFile()) {
    throw new Error('Not a file');
  }
 
  return fs.readFile(safePath, 'utf8');
}

// Example usage
(async () => {
  const UPLOAD_DIR = path.join(process.cwd(), 'uploads');
  const userInput = '../../../etc/passwd'; // Malicious input
 
  try {
    // This will throw an error due to path traversal attempt
    const content = await safeReadFile(UPLOAD_DIR, userInput);
    console.log('File content:', content);
  } catch (error) {
    console.error('Security error:', error.message);
  }
})();

// Security Best Practices:
// Example: Cross-Platform Path Handling
const path = require('path');

// Platform detection
const isWindows = process.platform === 'win32';
const isMac = process.platform === 'darwin';
const isLinux = process.platform === 'linux';

// Platform-specific paths
const appDataDir = isWindows
  ? path.join(process.env.APPDATA || path.join(process.env.USERPROFILE, 'AppData', 'Roaming'))
  : path.join(process.env.HOME || process.env.USERPROFILE, isMac ? 'Library/Application Support' : '.config');

// Application-specific directories
const appName = 'MyApp';
const appDir = path.join(appDataDir, appName);

// Ensure application directory exists
require('fs').mkdirSync(appDir, { recursive: true });

// Platform-specific temporary directory
const tempDir = path.join(require('os').tmpdir(), appName);

// Example: Platform-agnostic path handling
function getConfigPath() {
  const configName = 'config.json';

  // Development vs production paths
  if (process.env.NODE_ENV === 'development') {
    return path.join(process.cwd(), 'config', configName);
  }
  
  // Production path
  return path.join(appDir, configName);
}

console.log('Application directory:', appDir);
console.log('Temporary directory:', tempDir);
console.log('Config file path:', getConfigPath());