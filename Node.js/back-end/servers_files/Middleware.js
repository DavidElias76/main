import express from 'express'
import cors from 'cors'
import { json } from 'stream/consumers'
import { executionAsyncResource } from 'async_hooks'
import { nextTick } from 'process'

const app = express()
const PORT = process.env.PORT || 8080

// Middleware
app.use(cors())
app.use(express.json()) // send every request in json format 

// Routes
// Get requests
app.get('/', (req, res) => {
  res.send('Hello World from Express.js!')
})

// post requests
app.post('/about', (req, res) => {

  req.on('data', chunk => {
    let body = ''
    body += chunk;
  });

  // in express data is automaticaly converted into json format and acesssed using the req.body  

  try {
    // const newData = req.body
    const newData = JSON.parse(body); // express.json() middleware handles parsing
    newData.id = nextId++;     // Assign ID and increment for next object - create a new property 
    datastore.push(newData);   // Store the data - np database yet 
    
    res.status(201).json(newData);  // Send back the created object with ID
  } catch (error) {
    res.status(400).json({ error: 'Invalid request' });
  }
})


// Catch all other routes
app.all('*', (req, res) => {
  res.status(404).send('404 - Page not found');
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' })
})

// Error handling middleware- it has a status code of 500
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ error: 'Internal server error' })
})

// Start server
const server = app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, closing server...')
  server.close(() => console.log('Server closed'))
})



// Route Parameters(params)

// Route parameters are named URL segments that capture values at specific positions in the URL.
// They are specified in the path with a colon : prefix.

// Route with URL parameters
app.get('/users/:userId', (req, res) => {
  res.send(`User profile for ID: ${req.params.userId}`);
});

// Route with multiple parameters
app.get('/users/:userId/posts/:postId', (req, res) => {
  res.send(`
    <h2>User and Post Information</h2>
    <p>User ID: ${req.params.userId}</p>
    <p>Post ID: ${req.params.postId}</p>
  `);
});

// Optional parameters using ?
app.get('/products/:category/:product?', (req, res) => {
  if (req.params.product) {
    res.send(`Viewing product ${req.params.product} in category ${req.params.category}`);
  } else {
    res.send(`Viewing all products in category ${req.params.category}`);
  }
});

// Parameter with pattern (only digits)
app.get('/items/:itemId(\\d+)', (req, res) => {
  res.send(`Item ID must be numeric: ${req.params.itemId}`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// NOTE: Route parameters represent variable values embedded in the URL path, while query parameters are key–value pairs provided in the query string portion of the URL.

// Query Parameters

// Query parameters are key-value pairs that appear after the ? in a URL.
// They are automatically parsed by Express and available in req.query.
// They can also be accessed using the object destructureing method const {value, value} = req.query
// convert the query number into integers since they are string in the url 

// Basic route with query parameters
app.get('/search', (req, res) => {
  const { q, category, limit } = req.query; // access the q, category and linit property values 
  
  res.send(`
    <h2>Search Results</h2>
    <p>Query: ${q || 'Not specified'}</p>
    <p>Category: ${category || 'All categories'}</p>
    <p>Limit: ${limit || 'Default'}</p>
  `);
});

// Using query parameters for pagination
app.get('/products', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const pageSize = parseInt(req.query.pageSize) || 10;
  
  // Mock product data
  const products = [];
  for (let i = 1; i <= pageSize; i++) {
    const productId = (page - 1) * pageSize + i;
    products.push(`Product ${productId}`);
  }
  
  res.send(`
    <h2>Product Listing</h2>
    <p>Page: ${page}</p>
    <p>Page Size: ${pageSize}</p>
    <ul>
      ${products.map(product => `<li>${product}</li>`).join('')}
    </ul>
    <p>
      <a href="/products?page=${page > 1 ? page - 1 : 1}&pageSize=${pageSize}">Previous
      |
      <a href="/products?page=${page + 1}&pageSize=${pageSize}">Next
    </p>
  `);
});

// Optional filtering using query parameters
app.get('/filter', (req, res) => {
  // Convert query parameters to an array of key-value pairs
  const filters = Object.entries(req.query).map(([key, value]) => {
    return `${key}: ${value}`; // return an array 
  });
  
  if (filters.length === 0) {
    res.send('No filters applied. Try adding query parameters like ?color=red&size=large');
  } else {
    res.send(`
      <h2>Applied Filters</h2>
      <ul>
        ${filters.map(filter => `<li>${filter}</li>`).join('')}
      </ul>
    `);
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


// Middleware in Express
// Middleware functions are the backbone of Express applications. They have access to the req, res and the next

// express.json() - Parse JSON request bodies
// express.urlencoded() - Parse URL-encoded request bodies
// express.static() - Serve static files
// express.Router() - Create modular route handlers
// Middleware to parse JSON request bodies
app.use(express.json());

// Middleware to parse URL-encoded request bodies
app.use(express.urlencoded({ extended: true }));

// Middleware to serve static files from a directory
app.use(express.static('public'));

// POST route that uses JSON middleware
app.post('/api/users', (req, res) => {
  // req.body contains the parsed JSON data
  console.log(req.body);
  res.status(201).json({ message: 'User created', user: req.body });
});

// Error Handling in Express
// Error handling in Express is done through special middleware functions that have four arguments:

// (err, req, res, next).

app.use('/error', (req, res) => {
   // Simulating an error
  throw new Error('Something went wrong!');
})

app.use('/async-error', (req, res, next) => {
  // Simulating an asynchronous operation that fails
  setTimeout(() => {
    try{
      // Something that might fail
      const result = nonExistentFunction(); // This will throw an error
      res.send(result);
    }catch(error){
       next(error); // Pass errors to Express
    }
  }, 300)
})

// Custom error handling middleware
// Must have four parameters to be recognized as an error handler
app.use((err, req, res, next) => {
  console.error(err.stack); 
  res.status(500).send('Something broke!');
});


// Example of authentication when using the next 

// Flow: checkAuth → next() → dashboard handler
function checkAuth(res, res, next) {
  if(res.headers.authorizations){
    next(); // 
  }else{
    res.status(400).send('Unauthorized')
  }
} 

app.get('/dashboard', checkAuth, (req, res) => {
  res.send('Welcome to Dashboard')
})


// Serving Static Files
// Express can serve static files like images, CSS, and JavaScript using the built-in express.static middleware.

// To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function:

// Serve static files from the 'public' directory
app.use(express.static('public')); // tells express to look inside the public folder  requested by the browser

// You can also specify a virtual path prefix - Now files require /static in URL. - public/images/logo.png

// it means: When the browser requests URLs starting with /static, serve files from the public folder.”
app.use('/static', express.static('public'));  // eg: - public/images/logo.png

// Using absolute path (recommended) - Absolute path ensures: Works from any location and No path resolution bugs - dir_name is the back-end folder
app.use('/assets', express.static(path.join(__dirname, 'public'))); // assets is a virtual path prefix, so /assets/images/logo.png points to public/images/logo.png.

app.get('/', (req, res) => {
  res.send(`
    <h1>Static Files Example</h1>
    <img src="/images/logo.png" alt="Logo">
    <link rel="stylesheet" href="/css/style.css">
    <script src="/js/script.js"></script>
  `);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


// Routing in Separate Files
// For better organization, you can define routes in separate files using Express Router:

// using the common.js method 

// routes/users.js
const router = express.Router() // allows you to route files

router.use((req, res, next) => {
  console.log('Users Router Time:', Date.now());
  next();
});


// Define routes
router.get('/', (req, res) => {
  res.send('Users home page');
});

router.get('/:id', (req, res) => {
  res.send(`User profile for ID: ${req.params.id}`);
});

module.exports = router

// routes/products.js
// const router = express.Router();

// Define routes - use to get the users and not the home directory 
router.get('/', (req, res) => {
  res.send('Products list');
});

// get the users with the id 
router.get('/:id', (req, res) => {
  res.send(`Product details for ID: ${req.params.id}`);
});

module.exports = router;

// app.js (main file)
const express = require('express');
const usersRouter = require('./routes/users'); // import the user.js
const productsRouter = require('./routes/products'); // import the product.js

// const {products, users} = require('./routes') // importing using one statement 

// const app = express();
const port = 8080;

// Use the routers
app.use('/users', usersRouter);
app.use('/products', productsRouter);

app.get('/', (req, res) => {
  res.send('Main application home page');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


// Template Engines
// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set the directory where templates are located
app.set('views', './views');

// Route that renders a template
app.get('/', (req, res) => {
  const data = {
    title: 'Express Template Example',
    message: 'Hello from EJS!',
    items: ['Item 1', 'Item 2', 'Item 3']
  };

  // Renders the views/index.ejs template
  res.render('index', data);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// npm install ejs

// Security Best Practices
// Use Helmet to secure your Express apps by setting various HTTP headers
// Use environment variables for configuration
// Implement proper error handling
// Use HTTPS in production
// Validate user input to prevent injection attacks
// Set appropriate CORS policies

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
// const app = express();

// Security middleware
app.use(helmet());

// CORS configuration
app.use(cors({
  origin: 'https://example.com',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Other middleware and routes
// ...


// MIDDLEAWARES

// xample: A Simple Middleware ChainGet your own Node.js Server
const express = require('express');
// const app = express();

// First middleware
app.use((req, res, next) => {
  console.log('Middleware 1: This always runs');
  next(); // pass to the next middleware 
});

// Second middleware
app.use((req, res, next) => {
  console.log('Middleware 2: This also always runs');
  next(); // pass to the router handler
});

// Route handler
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(8080, () => {
  console.log('Server running on port 8080');
});


// APPLICATION LEVEL MIDDLEWARE

// Bound to the application instance using the app.use() and app.METHOD()

// Application-level middleware
// Use Cases: Logging, authentication, request parsing, and other operations that should run for every request.
app.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});

// Router-level Middleware
// Router-level middleware works similarly to application-level middleware but is bound to an instance of express.Router().
// Use Cases: Grouping route-specific middleware, API versioning, and organizing routes into logical groups. - its mostly used in routes

// Router-level middleware
router.use((req, res, next) => {
  console.log('Router specific middleware');
  next();
});

router.get('/user/:id', (req, res) => {
  res.send('User profile');
});

// Add the router to the app
app.use('/api', router);


// Example: Simple Logger Middleware

// Create a simple logging middleware
function requestLogger (req, res, next) {
  const timestamp = new Date().toISOString()
  console.log(`${timestamp} - ${req.method} ${req.requestLogger}`)
  next(); // Don't forget to call next()
}

//  Use the middleware
app.use(requestLogger)

// Example: Authentication Middleware

// Authentication middleware
function authenticate(req, res, next) {
  const authHeader = req.headers.authorization; // token is sent to the client
  
  if (!authHeader) {
    return res.status(401).send('Authentication required');
  }
  
  const token = authHeader.split(' ')[1]; // "bearer: "token"
  
  // Verify the token (simplified)
  if (token === 'secret-token') {
    // Authentication successful
    req.user = { id: 123, username: 'john' };
    next(); // this will make the route handler continues with executions after founfd guilty
  } else {
    res.status(403).send('Invalid token');
  }
}

// Public route - no authentication needed
app.get('/', (req, res) => {
  res.send('Welcome to the API - public area');
});

// Protected route - authentication required
app.get('/api/protected', authenticate, (req, res) => {
  res.json({ 
    message: 'Protected data', 
    user: req.user 
  });
});

// Start the server
// const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Try the following requests:');
  console.log('1. GET / - Public route');
  console.log('2. GET /api/protected - Without token (will fail)');
  console.log('3. GET /api/protected - With Authorization: Bearer secret-token header (will succeed)');
});

// For demonstration purposes, simulate API calls
setTimeout(() => {
  console.log('\n--- Making requests ---');
  
  // Simulate public route request
  console.log('\nRequest to public route:');
  console.log('GET /');
  console.log('Response: Welcome to the API - public area');
  
  // Simulate unauthenticated request
  console.log('\nRequest to protected route without token:');
  console.log('GET /api/protected');
  console.log('Response: Authentication required (401)');
  
  // Simulate authenticated request
  console.log('\nRequest to protected route with valid token:');
  console.log('GET /api/protected');
  console.log('Headers: Authorization: Bearer secret-token');
  console.log('Response: { "message": "Protected data", "user": { "id": 123, "username": "john" } }');
}, 1000);


// Example: Request Validation Middleware
// Validate a user creation request

function ValidateUserCredential(req, res, next) {

  const {username, email, password} = req.body

  if(!username || username.length < 3){
     return res.status(400).json({ error: 'Username must be at least 3 characters' });
  }

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email is required' });
  }

   if (!password || password.length < 6) {
    return res.status(400).json({ error: 'Password must be at least 6 characters' });
  }

  // validation is passeed
  next();
}

// Apply to user creation route
app.post('/api/users', ValidateUserCredential, (req, res) => {
   // Process valid user creation
  res.status(201).json({ message: 'User created successfully' });
})


// Error-Handling Middleware
// Error-handling middleware is special because it takes four parameters instead of three: (err, req, res, next).

// Parse JSON requests
app.use(express.json());

// Regular route
app.get('/', (req, res) => {
  res.send('Welcome to the error handling demo. Try visiting /error-demo to see error handling in action.');
});

// Route that deliberately throws an error
app.get('/error-demo', (req, res, next) => {
  try {
    // Simulate an error
    throw new Error('Something went wrong!');
  } catch (error) {
    next(error); // Pass error to the error handler - this will be captured by the errro handling middleware 
  }
});

// Route with async error
app.get('/async-error', async (req, res, next) => {
  try {
    // Simulate an async error
    await simulateAsyncError();
  } catch (error) {
    next(error); // this will be captured by the error handing middelware
  }
});

// Error-handling middleware (must have 4 parameters)
app.use((err, req, res, next) => {
  console.error('Error occurred:', err.stack); // this is the error handling middleware 
  
  // Send a formatted error response
  res.status(500).json({
    message: 'An error occurred',
    error: process.env.NODE_ENV === 'production' ? {} : {
      name: err.name,
      message: err.message,
      stack: err.stack
    }
  });
});

// Helper function to simulate async error
async function simulateAsyncError() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Async operation failed'));
    }, 100);
  });
}

// Start the server
// const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  
  // Simulate requests for demonstration
  console.log('Simulating requests:');
  
  // Simulate normal request
  console.log('\nRequest to home route:');
  console.log('GET /');
  console.log('Response: Welcome to the error handling demo. Try visiting /error-demo to see error handling in action.');
  
  // Simulate error request
  console.log('\nRequest to error route:');
  console.log('GET /error-demo');
  console.error('Error occurred: Error: Something went wrong!');
  console.log('Response:');
  console.log(JSON.stringify({
    message: 'An error occurred',
    error: {
      name: 'Error',
      message: 'Something went wrong!',
      stack: 'Error: Something went wrong! at ...'
    }
  }, null, 2));
});


// / Async middleware with proper error handling

app.get('/async-data', async (req, res, next) => {
  try {
    const data = await fetchDataFromDatabase();
    res.json(data);
  } catch (error) {
    next(error); // Pass error to the error handler
  }
});

// Alternative using Express 4.16+ wrapper
function asyncHandler(fn) {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
}

app.get('/better-async', asyncHandler(async (req, res) => {
  const data = await fetchDataFromDatabase();
  res.json(data);
}));


// MIDDLEWARE EXECUTION ORDER

// This middleware will run first for all requests (get, post put and delete methods)
app.use((req, res, next) => {
  console.log('First middleware: This runs for every request');
  next();
});

// This middleware will run for /users paths only and will log to the console
app.use('/users', (req, res, next) => {
  console.log('Users middleware: This runs only for /users routes');
  next();
});

// This route handler will run when matched after the middleware of the users 
app.get('/users', (req, res) => {
  console.log('Route handler: Handling GET /users request');
  res.send('Users list');
});

// Error-handling middleware  - It runs only when an error is passed. - Error middleware should be placed after all routes:
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: 'An error occurred',
    error: process.env.NODE_ENV === 'production' ? {} : err
  });
});


// This middleware will never run for the above matched route
// because the route handler ends the request-response cycle
app.use((req, res) => {
  console.log('404 handler: No routes matched');
  res.status(404).send('Not found');
});

// START THE SERVER
app.listen(PORT, () => console.log(`server has started running at ${PORT} `))


// RECOMMENDED ORDER

// 1. Application-wide middleware
app.use(express.json()); // CONVERT TO JSON FORMAT 
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev')); // LOGGING
app.use(helmet()); // SECURTY

// 2. Route-specific middleware
app.use('/api', authenticate); // Having an authentication function

// 3. Routes
app.use('/api/users', userRoutes); // having the userRoutes function
app.use('/api/products', productRoutes);

// 4. 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

// 5. Error handler (always last) - this is added at the last place in the server.js file
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Server error' });
});


// Pro Tip: Create reusable middleware factories by returning functions that generate middleware with specific configurations.

// Middleware factory
function requireRole(role) {
  return (req, res, next) => {
    if (req.user && req.user.role === role) {
      next();
    } else {
      res.status(403).send('Access denied');
    }
  };
}

// Usage
app.get('/admin', authenticate, requireRole('admin'), (req, res) => {
  res.send('Admin dashboard');
});

app.get('/editor', authenticate, requireRole('editor'), (req, res) => {
  res.send('Editor dashboard');
});


