
// Session-Based Authentication
// Session-based authentication uses cookies to maintain user state:

import express from "express";
import session from "express-session";

const app = express();

// Built-in body parsing (no body-parser needed)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure sessions - create a session object 
app.use(session({
    secret: 'your-secret-key',
    resave: false, // Only save session when modified
    saveUninitialized: false, // Do NOT create empty sessions
    cookie: {
        secure: process.env.NODE_ENV === 'production', // true - cookie only sent over https and nort http
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
    }
}));

// Sample user database
const users = [
  { id: 1, username: 'user1', password: 'password1' }
];

app.post('/login', (req, res) => {

    const { username, password } = req.body;

    const user = users.find(
        u => u.username === username && u.password === password
    );

    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    // store the session data when the credential are received - Express-session generates a unique session ID 
    req.session.user = {
        id: user.id,
        username: user.username
    };

    // senda response with the mesage and the session object that has been created
    res.json({ message: 'Login successful', user: req.session.user }); // Express-session generates a unique session ID 

    // The browser receives a cookie like: eg connect.sid = s%3Aqwerty123456789
});

// Protected route - Only accessible if logged in. - Accessing the profile tab 
app.get('/profile', (req, res) => {

    // is the session missing in the browser deny access 
    if (!req.session.user) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    res.json({ message: 'Profile accessed', user: req.session.user }); // if authenticated allow access 
});

// Logout route
app.post('/logout', (req, res) => {

    req.session.destroy(err => {
        if (err) {
            return res.status(500).json({ message: 'Logout failed' });
        }
        res.json({ message: 'Logout successful' });
    });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () =>
    console.log(`Server running at http://localhost:${PORT}`)
);

// NOTE: The session data is stored in the server and not the browser
// Browser → sends session ID 
// Server → uses ID to retrieve data

// Browser stores → Session ID cookie only
// Server stores → Actual session data

// In real systems, sessions are stored in databases or caches: Redis (most popular), MongoDB, MYSQL/PostgreSQL



// Example: Password Hashing with Bcrypt

const bcrypt = require('bcrypt');
const express = require('express');
const bodyParser = require('body-parser');
// const app = express();

app.use(bodyParser.json());

// In-memory user database
// const users = [];

// Register route with password hashing
app.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
   
    // Check if username already exists
    if (users.find(u => u.username === username)) {
      return res.status(400).json({ message: 'Username already taken' });
    }
   
    // Hash password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
   
    // Create new user
    const newUser = {
      id: users.length + 1,
      username,
      password: hashedPassword
    };
   
    users.push(newUser);
   
    res.status(201).json({
      message: 'User registered successfully',
      userId: newUser.id
    });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user' });
  }
});

// Login route with password comparison
app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
   
    // Find user
    const user = users.find(u => u.username === username);
   
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
   
    // Compare password with stored hash
    const passwordMatch = await bcrypt.compare(password, user.password);
   
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
   
    // In a real app, generate and return a token
    res.json({
      message: 'Login successful',
      userId: user.id
    });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in' });
  }
});

// Start server
app.listen(8080, () => {
  console.log('Server running on port 8080');
});