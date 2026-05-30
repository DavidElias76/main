// auth.controller.ts
import type { Request, Response } from "express"
import { signUpService, signInService } from "../services/auth.service" 
import type { CustomError } from "../types/error"
import mongoose from "mongoose"

// interface UserRequest extends Request {
//     body: {
//         name: string
//         email: string
//         password: string
//     }
// }

// interface UserLogIn extends Request {
//     body: {
//         email: string
//         password: string
//     }
// }

type UserRequestSignUp = {
    name: string // you can make the name property optional and check if it will still work - This prevents the types of the same properties
    email: string
    password: string
}

type UserRequestSignIn = {
    email: string,
    password: string
}

type UserResponse = {
    message: string
    user: {
        id: mongoose.Types.ObjectId | string
        name: string
    }
    token: string
}


//  {} - req.params, unknown - res.body, UserRequest- {}-res.body, {}- req.query
export const signUp = async (req: Request<{}, unknown, UserRequestSignUp, {}>, res: Response<UserResponse | { message: string} | {error: string}>) => {
    try {
        const { name, email, password } = req.body

        if (!name || !email || !password) {
            return res.status(400).json({ message: "Fill out all the fields" })
        }

        const { user, token } = await signUpService(name, email, password)

        res.status(201).json({
            message: "User added successfully",
            user: {
                id: user.id.toString(), // convert the id object to string 
                name: user.name
            },
            token
        })

    } catch (error) {
        const err = error as CustomError
        res.status(err.statusCode || 500).json({ error: err.message })
    }
}

export const signIn = async (req: Request<{}, unknown, UserRequestSignIn, {}>, res: Response<UserResponse | { message: string} | { error: string}>): Promise<void> => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            res.status(400).json({ message: "Fill out all the fields" })
            return
        }

        const { user, token } = await signInService(email, password)

        res.status(200).json({
            message: "User signed in successfully",
            user: {
                id: user.id.toString(), // converted to string or use the mongoose.Types.ObjectId 
                name: user.name
            }, 
            token 
        })

    } catch (error) {
        const err = error as CustomError
        res.status(err.statusCode || 500).json({ error: err.message })
    }
}