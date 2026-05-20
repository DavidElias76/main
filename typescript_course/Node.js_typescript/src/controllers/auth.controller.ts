// auth.controller.ts
import type { Request, Response } from "express"
import { signUpService, signInService } from "../services/auth.service.js" 
import type { CustomError } from "../types/error.js"

interface UserRequest extends Request {
    body: {
        name: string
        email: string
        password: string
    }
}

interface UserLogIn extends Request {
    body: {
        email: string
        password: string
    }
}

export const signUp = async (req: UserRequest, res: Response) => {
    try {
        const { name, email, password } = req.body

        if (!name || !email || !password) {
            return res.status(400).json({ message: "Fill out all the fields" })
        }

        const user = await signUpService(name, email, password)

        res.status(201).json({
            message: "User added successfully",
            user
        })

    } catch (error) {
        const err = error as CustomError
        res.status(err.statusCode || 500).json({ error: err.message })
    }
}

export const signIn = async (req: UserLogIn, res: Response) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({ message: "Fill out all the fields" })
        }

        const { user, token }= await signInService(email, password)

        res.status(200).json({
            success: true,
            message: "User signed in successfully",
            user, 
            token 
        })

    } catch (error) {
        const err = error as CustomError
        res.status(err.statusCode || 500).json({ error: err.message })
    }
}