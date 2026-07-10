import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.status(200).send('Hello World')
})

// Basic route with query parameters
app.get('/search', (req, res) => {
  const { q, category, limit } = req.query; // key-value pairs and get them from the request
  
  res.send(`
    <h2>Search Results</h2>
    <p>Query: ${q || 'Not specified'}</p>
    <p>Category: ${category || 'All categories'}</p>
    <p>Limit: ${limit || 'Default'}</p>
  `);
});

// Using query parameters for pagination
app.get('/products', (req, res) => {
    // convert to intergers
  const page = parseInt(req.query.page) || 1; // get the property value of page
  const pageSize = parseInt(req.query.pageSize) || 10; // get the value of the pagesize 
  
  // Mock product data
  const products = [];
  for (let i = 1; i <= pageSize; i++) {
    const productId = (page - 1) * pageSize + i; // get the product id
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
  // Convert query parameters to an array of key-value pairs - the query that is being sent to the server is a string with key=value pairs and the object.entries method converts to an array of value
  const filters = Object.entries(req.query).map(([key, value]) => {
    return `${key}: ${value}`;
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

// import { Router } from 'express';

// router.get('/router', (req, res) => {
//     res.send({message: 'Hello from the server'})
// })


// Template Engines
// Express can be configured with template engines to generate dynamic HTML:

// Set the view engine to EJS
app.set('view engine', 'ejs'); // uses the view engine that allows you to send a html file to the client from the server =

// Set the directory where templates are located
app.set('views', './views'); // the file path where it is located

// Route that renders a template
app.get('/views', (req, res) => {
  const data = {
    title: 'Express Template Example',
    message: 'Hello from EJS!',
    items: ['Item 1', 'Item 2', 'Item 3']
  };

  // Renders the views/index.ejs template
  res.render('index', data); // you can access the data
});

// MIDDLEWARES

// / First middleware
app.use((req, res, next) => {
  console.log('Middleware 1: This always runs');
  next(); // lets the next code run after the completion of the previous code
});

// Second middleware
app.use((req, res, next) => {
  console.log('Middleware 2: This also always runs');
  next(); // the next code runs
});

// Route handler
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Application-level Middleware

// Application-level middleware
app.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});

// this runs after the server is down and usually added at the bottom of the server.js file
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Server error' });
});

app.listen(8080, () => {
  console.log('Server running on port 8080');
});


// RESTful APi

let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];

// GET - Retrieve all users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// GET - Retrieve a specific user
app.get('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id)); // get the user with the specific id
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
});

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
  const user = users.find(u => u.id === parseInt(req.params.id)); // get the user with the specific id and update the user in the user array
  if (!user) return res.status(404).json({ message: 'User not found' });

  user.name = req.body.name;
  user.email = req.body.email;

  res.json(user);
});

// DELETE - Remove a user
app.delete('/api/users/:id', (req, res) => {
  const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));// find the inddex of the using the user id and delete the user 
  if (userIndex === -1) return res.status(404).json({ message: 'User not found' });

  const deletedUser = users.splice(userIndex, 1);
  res.json(deletedUser[0]);
});
const PORT = process.env.PORT || 8080

app.listen(PORT, () => console.log(`server is running at http://localhost:${PORT}`))