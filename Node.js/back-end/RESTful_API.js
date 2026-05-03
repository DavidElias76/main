
// Node.js RESTful API
// REST (Representational State Transfer) is an architectural style for designing networked applications that has become the standard for web services.
// RESTful APIs provide a flexible, lightweight way to integrate applications and enable communication between different systems.


import express from "express";
import cors from "cors"

const app = express()

// set up middleware 
app.use(express.json())
app.use(cors())

// declare an array 
let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];

// GET - Retrieve all users or a specific user
app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id)) // find the user with specific id

    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
})

// GET - Retrieve all users
app.get('/users', (req, res) => {
    res.json(users);
})


// POST - Create a new user  
app.post('/api/users', (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email
  };
  users.push(newUser);
  res.status(201).json(newUser);

});


// PUT - Update a user completely
app.put('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: 'User not found' });

  user.name = req.body.name;
  user.email = req.body.email;

  res.json(user);
});

// DELETE - Remove a user
app.delete('/api/users/:id', (req, res) => {
  const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
  if (userIndex === -1) return res.status(404).json({ message: 'User not found' });

  const deletedUser = users.splice(userIndex, 1);
  res.json(deletedUser[0]);
});

const PORT  = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`server is running at http://localhost:${PORT}`))


// Example: Well-structured API Routes
// Good API structure
app.get('/api/products', getProducts);
app.get('/api/products/:id', getProductById);
app.get('/api/products/:id/reviews', getProductReviews);
app.get('/api/users/:userId/orders', getUserOrders);
app.post('/api/orders', createOrder);

// Filtering and pagination - use the query in this path
app.get('/api/products?category=electronics&sort=price&limit=10&page=2');


// Example: Setting Up Express Router
// you can alose use the import module
import { Router } from "express";
const router = express.Router(); // use this for routing

const { getUsers, getUserById, createUser, updateUser, deleteUser } = require('../controllers/userController');

// routers file 
router.get('/', getUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;


// app.js - main file
const express = require('express');
const userRoutes = require('./routes/users');

app.use(express.json());
app.use('/api/users', userRoutes);

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});

// Controllers and Models
// Separating concerns between routes, controllers, and models improves code organization and maintainability:

// Models - is used o retrieve data from the database and contains database logic structure
const User = require('../models/User'); // import the model which has the user

// Fetches all users from the database and sends them the client
 
// Example: Controller Implementation - all this exist in the controller folder
const getUsers = async (req, res) => {
  try{
    const users = await User.findAll() //usually from Sequelize (ORM)
    res.status(200).json(users) // return all users
    
  }catch(error){
    res.status(500).json({message: 'Error retrieving users', error: error.message})
  }
}

// get the user by id
  const getUserById = async (req, res) => {
    try{
      const user = await User.findById(req.params.id)
      if(!user){
        return res.status(404).json({message: 'User not found'})
      }
      res.status(200).json(user)

    }catch(error){
      res.status(500).json({message: 'Error retrieving user', error: error.msaage})
  }

  }

  const createUser = async (req, res) => {
    try{

      const user  = await User.create(req.body)
      res.status(201).json(user);
    }catch(error){
      res.status(400).json({ message: 'Error creating user', error: error.message });
    }
  }

module.exports = { getUsers, getUserById, createUser };


// MODELS - used to define the databse logic and structure 
// - it defines tables ans schemas and also handle any DB Operations 

// CONTROLLER FOLDER - contains the request handdling logic 

// API Versioning
// Versioning helps you evolve your API without breaking existing clients.

// Common approaches include:

// URI Path Versioning: /api/v1/users
// Query Parameter: /api/users?version=1
// Custom Header: X-API-Version: 1
// Accept Header: Accept: application/vnd.myapi.v1+json
// Example: URI Path Versioning

const express = require('express');
// const app = express();

// Version 1 routes
const v1UserRoutes = require('./routes/v1/users');
app.use('/api/v1/users', v1UserRoutes);

// Version 2 routes with new features
const v2UserRoutes = require('./routes/v2/users');
app.use('/api/v2/users', v2UserRoutes);

app.listen(8080);


// Request Validation
// Always validate incoming requests to ensure data integrity and security.

// Libraries like Joi or express-validator can help:

// Example: Request Validation with Joi

// npm install joi - install the library
const JOI = require('joi')// import the joi library for validaton schema

// const app = express()

// Validation schema
const userSchema = JOI.object({
  name: JOI.string().min(3).required(), // the name must be a string, min characters are 3 and required
  email: JOI.string().email().required(), // the email must be a stirng, must be a email and is required
  age: JOI.number().integer().min(18).max(120) // the age must be a number, converted as a integer, minimum age and the max age is 120
})

app.post('/api/users', (req, res) => {
  // Validate request body
  const { error } = userSchema.validate(req.body); //validate using the userschema the req sent by the client 
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  // Process valid request
  // ...
  res.status(201).json({ message: 'User created successfully' });
});


// Error Handling - both in the utils and the middleware function 
// Implement consistent error handling to provide clear feedback to API consumers:
// Example: Centralized Error Handling

// utils/errorHandler.js - helper functions
class AppError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = { AppError };

// middleware/errorMiddleware.js - error handler function that takes an error as it argument - this is the last after the response has been sent
const errorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  // Different error responses for development and production
  if (process.env.NODE_ENV === 'development') {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
      stack: err.stack,
      error: err
    });
  } else {
    // Production: don't leak error details
    if (err.isOperational) {
      res.status(err.statusCode).json({
        status: err.status,
        message: err.message
      });
    } else {
      // Programming or unknown errors
      console.error('ERROR 💥', err);
      res.status(500).json({
        status: 'error',
        message: 'Something went wrong'
      });
    }
  }
};

module.exports = { errorHandler };

// / Usage in app.js
const { errorHandler } = require('./middleware/errorMiddleware'); // import the error handler from he middleware
const { AppError } = require('./utils/errorHandler'); // import the error handler from he middleware

// This route throws a custom error
app.get('/api/error-demo', (req, res, next) => {
  next(new AppError(404, 'Resource not found')); // pass the error to both the error handler functions 
});

// Error handling middleware (must be last)
app.use(errorHandler);


// API Documentation
// Good documentation is essential for API adoption.
// Tools like Swagger/OpenAPI can automatically generate documentation from code:

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// const app = express();

// Swagger configuration
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'User API',
      version: '1.0.0',
      description: 'A simple Express User API'
    },
    servers: [
      {
        url: 'http://localhost:8080',
        description: 'Development server'
      }
    ]
  },
  apis: ['./routes/*.js'] // Path to the API routes folders
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
/@swagger
* /api/users:
* get:
* summary: Returns a list of users
* description: Retrieve a list of all users
* responses:
* 200:
* description: A list of users
* content:
* application/json:
* schema:
* type: array
* items:
* type: object
* properties:
* id:
* type: integer
* name:
* type: string
* email:
* type: string
*/
app.get('/api/users', (req, res) => {
  // Handler implementation
});

// TESTING API
// 
// Testing is critical for API reliability.

// Use libraries like Jest, Mocha, or Supertest:

// // Example: API Testing with Jest and Supertest

// const app = express()
const app = require('../app'); // the main fie server to be tested

// the deScribe() method is used to group related fileds together with are the 'user API'

describe('User API', () => {
  
  // test for the get API users
  describe('GET /api/users', () => {
    // It() - When I call GET /api/users, it should return all users.”
    it('should return all users', async () => {
      const res = await request(app).get('/api/users'); // Supertest uses your Express/Node app - the method request requests the app and get the api/users route for test 
      expect(res.statusCode).toBe(200); // expect the status code to be 200 which is ok - Server responded correctly
      expect(Array.isArray(res.body)).toBeTruthy(); // the req.body is expected to be an array by using the arrayIsArray method to check
    });
  });

  describe('POST /api/users', () => {
    it('should create a new user', async () => {
      // the post method should create a user when tested - 'When valid data is sent, user should be created.”
      const userData = {
        name: 'Test User',
        email: 'test@example.com'
      };
      // Simulate a post request, Sends JSON body, Server receives it like a real client request
      const res = await request(app).post('/api/users').send(userData);

      expect(res.statusCode).toBe(201);
      expect(res.body).toHaveProperty('id'); // Confirms server generated an ID - the response is expected to have an id 
      expect(res.body.name).toBe(userData.name); // Ensures returned data matches input
    });

    // the invalid data should not be sent and rejected
    it('should validate request data', async () => {
      const invalidData = {
        email: 'not-an-email'
      };
      const res = await request(app)
        .post('/api/users')
        .send(invalidData);

      expect(res.statusCode).toBe(400); // the error code whne there is an invald data
    });
  });
});




