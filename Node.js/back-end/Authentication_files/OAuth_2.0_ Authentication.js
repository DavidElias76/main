
// OAuth 2.0 Authentication
// OAuth 2.0 is the industry-standard protocol for authorization, enabling applications to obtain limited access to user accounts on HTTP services.

// Implementation with Passport.js
// 1. Install required packages:
// npm install passport passport-google-oauth20 express-session

import express from 'express'
import passport from 'passport' // after the installation of the package
import session from 'express-session';

const GoogleStrategy = require('passport-google-oauth20').Strategy; // allows users to sign in into their accounts 
const passport = require('passport'); // it is an authentication middleware that allows authorization and secure log in - it implements the external service

const app = express()

// middleware 
app.use(express.json())
app.use(cors())

// Configure sessions for OAuth 2.0
app.use(session({
    secret: 'your_secret_key', // ensure that the data is encrypted
    resave: false, // dont save the session
    saveUninitialized: false, // only save the session if they are initialized 
    cookie: { secure: process.env.NODE_ENV === 'production' }
}))

// Initialize Passport
app.use(passport.initialize()); // set up the passport 
app.use(passport.session()); // allows tge passport to store user info in sessions

// Configure Google OAuth 2.0 strategy - 
// Allows the secure sign in with the google account and authorize applaication to securely access the specific user data(like emails and profiles) 
// the all use the google cloud console 
passport.use(new GoogleStrategy({
    clientID: 'YOUR_GOOGLE_CLIENT_ID',
    clientSecret: 'YOUR_GOOGLE_CLIENT_SECRET',
    callbackURL: 'http://localhost:8080/auth/google/callback' // the url google that redirects after log in 
  },
  
  (accessToken, refreshToken, profile, done) => {
    // In a real app, you'd find or create a user in your database
    const user = {
      id: profile.id,
      displayName: profile.displayName,
      email: profile.emails[0].value,
      provider: 'google'
    };
   
    return done(null, user);
  }
));

// Serialize user for session - decided what user data goes into the session
passport.serializeUser((user, done) => {
  done(null, user);
});

// Deserialize user from session - get the user data from the session and atteches it to the req.user
passport.deserializeUser((user, done) => {
  done(null, user);
});

// Routes for Google OAuth
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }) // the scope permisions we request the profile and the email 
);

// google redirects after logn in, passport verifies the user, on failure redirect to '/login'  
app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    // Successful authentication
    res.redirect('/profile'); // on success redirect to the '/profile'
  }
);

// Middleware to check authentication - Middleware isAuthenticated checks if the user is logged in
const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next(); // returns true if the session contains a logged-in user
  }
  res.redirect('/login'); // is not logged in redirect to the /login 
};

// Protected route
app.get('/profile', isAuthenticated, (req, res) => {
  res.json({ user: req.user }); // if the user is authenticated send the req.user info
});

// Logout route - end the session and log the user out
app.get('/logout', (req, res) => {
  req.logout(); // call the logout method 
  res.redirect('/'); // redirect t the homepage 
});

// Start server
app.listen(8080, () => {
  console.log('Server running on port 8080');
});

