import User from "../models/usersModel.js";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"

const SALT_ROUNDS = 10; // salt rounds
const TOKEN_EXPIRY_SECONDS = 1 * 60 * 60; 

export const registerUserController = async (req, res) => {
    try {
        const { username, password, email } = req.body;

        // check if fields are empty
        if (!username || !password || !email) {
            return res.status(400).json({
                message: "Fill out all the fields"
            });
        }

        // check if user already exists
        const existingUser = await User.findOne({
            email: email.toLowerCase()
        });

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists!"
            });
        }
        const hashedPassword = bcrypt.hash(password, SALT_ROUNDS) // hash the password before saving it into the database

        // const hashedPassword = User.isModified(password); // this calls the function that is in the userModel.js file

        // create user
        const user = await User.create({
            username,
            hashedPassword,
            email: email.toLowerCase(),
            loggedIn: true
        });

        res.status(201).json({
            message: "User registered successfully",
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        });
    } catch (error) {
        res.status(500).json({
            message: "Error registering the user",
            error: error.message
        });
    }
};

// login the user and assign a token 
export const loginController = async (req, res) => {
    try {
        const {email, password} = req.body;

        if(!email || !password) {
            res.status(400).json({ message: "Fill iut all the fields"})
        }

        const user = User.findOne({ email: email.toLowerCase()}); // the findOne method finds the user with the email mathching the request email
    
        if(!user) return res.status(400).json({ message: "user doesnot exist" })

        // const comparePassword = bcrypt.compare(password, user.password)

        // const comparePassword = User.comparePassword(password); // this calls the comparePassword function that is in the userModel.js file

        // if (!comparePassword) {
        //     return res.status(401).json({ message: "Invalid credentials, try again!" });
        // }

        // use the jwtwebtoken to generate the token
        const payload = {
            id: user._id,
            username: user.username,
            email: user.email
        }

        // generate the token and send it as a cookie 
        const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
            expiresIn: TOKEN_EXPIRY_SECONDS
        })

        // you can generate the token and send the token as cookies using the cokkie-parser

        res.status(200).json({message: "Login successful", user: {
            id: user._id,
            username: user.username,
            email: user.email

        }, token}); //
        
    } catch (error) {
        res.status(500).json({message: "Error logging the user", error: error.message})
    }  
}

// the user logs out

export const logoutController = async (req, res) => {
    try {
        const {email} = req.body;
    
        const user = User.findOne({ email })
    
        if(!user) return res.status(404).json({ message: 'User doesnot exist' })
    
        res.status(200).json({ message: 'User loggedout successfully'})
        
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message})
        
    }
}