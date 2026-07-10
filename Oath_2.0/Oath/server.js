import express from 'express'
import dotenv from 'dotenv'

// const GoogleStrategy = require('passport-google-oauth20').Strategy; // need to use the latest module

const app = express();

app.get('/protected', (req, res) => {
    res.send("Hello world!");
})
const PORT = 8080;

app.listen(PORT, () => console.log(`server is running on http://localhost:${PORT}`))