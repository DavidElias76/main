
import express from "express";
import jwt from 'jsonwebtoken'
import cors from "cors"

const SECRET_KEY = 'your_secret_key'

const app = express()

// setUp middleware 
app.use(express.json())
app.use(cors())

// the database 
const users = [
  { id: 1, username: 'user1', password: 'password1', role: 'user' }
];


app.post('/login', (req, res) => {
    // get the username and the passowrd from the request 
    const {username, password} = res.body

    // find the user
    const user = users.find(u => u.id  === username && u.password === password)

    if(!user){
        res.status(400).send({messag: 'Invalid user'})
    }

    // create a playload
    const playload = {
        id: user.id,
        username: user.username,
        password: user.password,
        
    }

    // create a token for the specific user that expires in 1hr
    const token = jwt.sign(playload, SECRET_KEY, {expiresIn: '1hr'})

    res.json({token, message: 'Login successful'})

})

const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization; // get the authorization header with the token 

    if(!authHeader){
        res.json({message: 'Invalid Token'})
    }

    try{

        // extract the token from the authheader and get the token 
        const token = authHeader.split(' ')[1];
        
        const decoded = jwt.verify(token, SECRET_KEY) // verify the user and it seret key 
        
        res.user = decoded // pass the decodd object to the request 

        next();

    }catch(error){
        res.status(403).json({ message: 'Invalid or expired token' });
    }

}

app.get('/profile', authenticateJWT, (req, res) => {
    res.json({ message: 'Profile accessed', user: req.user })

})