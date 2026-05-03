
import mongoose from "mongoose"
import User from "../models/user.model.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from 'dotenv'

dotenv.config();
// req.body -> is a an object containing data coming from the client

// create a user
export const signUp = async (req, res, next) => {
    const session = await mongoose.startSession(); // This is a session for mongoose transaction -> it makes sure that the opertion is completed and not half finished
    session.startTransaction(); // this starts the transactions -> this starts something called atomic operations

    try {
        const {name, email, password} = req.body; // get the name email and password

        console.log(name, email, password)

         // validate fields
        if (!name || !email || !password) {
            return res.status(400).json({
                message: "Fill out all the fields"
            });
        }

        // check if the users exists
        const existingUser = await User.findOne({ email }); // check if the user email is the same as email

       if (existingUser) {
            const error = new Error("User already exists!");
            error.statusCode = 409;
            throw error;
        }

        // hash the password
        const salt = await bcrypt.genSalt(10) // generate salt round

        const hashedPassword = await bcrypt.hash(password, salt); // hash the password for security

        // create user
        const newUser = await User.create(
            { name, email, password: hashedPassword },
            { session }
        ); // creates a user one at at time
        
        // const newUser = await User.create([{name, email, password: hashedPassowrd}], {session}) // creates multiple users at the same time

        // // generate the token for the user -> this is used when using the array method to add a new user
        // const token = jwt.sign(
        //     {userId: newUser[0]._id}, 
        //     process.env.JWT_SECRET, 
        //     {expiresIn: process.env.JWT_EXPIRES_IN}
        // )

        // OR

        // create a payload to assign an new user
        const payload = {
            id: newUser._id,
        }

        const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRES_IN})

        await session.commitTransaction(); // complete the transsactions

        // safe response - this prevents the response from sending imcomplete data
        const userResponse = {
            id: newUser._id,
            name: newUser.name,
            email: newUser.email
        };

        // send a response ot the user
        res.status(201).json({
            success: true,
            message: "User created successfully",
            token,
            user: userResponse
        });
    } catch (error) {
        await session.abortTransaction();  // cancel the transacation when there is an error
        session.endSession();  // end the session
        next(error);
    }finally{ 
        session.endSession(); // end the session of generating the token and adding the new user
    }

}

// sign in the user
export const signIn = async (req, res) => {
    const {email, password} = req.body;

    const user = await User.findOne({ email });

    // check if te user exist 
    if(!user) {
        const error = new Error('User not found')
        error.statusCode = 404;
        throw error;
    }

    // validate the password
    const isValidPassword = await bcrypt.compare(password, user.password);

    if(!isValidPassword) {
        const error = new Error('Invalid password');
        error.statusCode = 404;
        throw error;
    }

    // assign a user a token
    const token = jwt.sign(
        { id: user._id}, 
        process.env.JWT_SECRET, 
        {expiresIn: process.env.JWT_EXPIRES_IN}
    )

    res.status(200).json({
        success: true,
        message: "User signed In successfully",
        token,
        user
    })
}
export const signOut = async (req, res) => {

}
