
// Token-Based Authentication (JWT)
// JSON Web Tokens (JWT) provide a stateless authentication mechanism that's compact and self-contained.
// Unlike session-based authentication, token-based authentication (JWT) doesn't require a server to store session data.
// This makes it ideal for stateless API architecture and microservices.


// import the jsonwebtoken
import jwt from 'jsonwebtoken'
import express from 'express'
import cors from 'cors'

const app = express()

// middleware 
app.use(cors())
app.use(express.json())

const JWT_SECRET = 'your-jwt-secret-key'; // the secret key 

// Sample user database
const users = [
  { id: 1, username: 'user1', password: 'password1', role: 'user' }
];

app.post('/login', (req, res) => {
    const { username, password } = req.body; // get the username and the password 

    // find the user
    const user = users.find(u => u.username === username && u.password === password)

    // if the user is not found error
    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    // create a payload for jwt - this is the user that is going to be granted access 
    const payload = {
        id: user.id,
        username: user.username,
        role: user.role
    }

    // Sign token - it creates a string of characters that will be used to aithenticate the user and grant permission 
    const token = jwt.sign(payload, JWT_SECRET, {expiresIn: '1hr'})

    res.json({ message: 'Login successful', token }); // send the token to ther server
})


// middelware for the jwt authentication
const authenticateJWT = (req, res, next) => {

    // Get auth header - The Authorization header is commonly used to send authentication tokens
     const authHeader = req.headers.authorization; // it is going to have the bearer: token - Authorization: Bearer <token>

     if (!authHeader) {
        return res.status(401).json({ message: 'Authorization header missing' });
    }

    // Extract token from "Bearer <token>"
    const token = authHeader.split(' ')[1]; // extract the token 

    if (!token) {
        return res.status(401).json({ message: 'Token missing' });
    }

    try{
        // verify token - the result is comprised of an object {id, username and the passowrd} of th uer that has been verified 
        const decoded = jwt.verify(token, JWT_SECRET); //Signature valid, Not expired, Not tampered with - it automatically adds iat → issued at timestamp

        // Attach user to request - Makes user data available to ALL later handlers. - decoded is trusted only because verification succeeded.
        req.user = decoded; // Now routes can access: req.user.id, req.user.username, req.user.role which is an object that wa required by the client

        next(); // Allows route execution.

    }catch(error){
        return res.status(403).json({ message: 'Invalid or expired token' });
    }
}

// Protected route - the client decided what to do next eg what to show the user is the client is the user and what to show the admin if the client is an admin
// The client must make a new HTTP request.
// The client request the server : By sending a new HTTP request with the token attached.

app.get('/profile', authenticateJWT, (req, res) => {
  res.json({ message: 'Profile accessed', user: req.user });
});

// Role-based route
app.get('/admin', authenticateJWT, (req, res) => {

  // Check if user has admin role
  if (req.user.role !== 'admin') {

    return res.status(403).json({ message: 'Access denied: admin role required' });
  }

  res.json({ message: 'Admin panel accessed' }); // JWT allows authentication + authorization easily.
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`server is running at http://localhost:${PORT}`))