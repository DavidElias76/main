import type { Request, Response } from "express";
import { addUserService, getUserService, updateUserService } from "../services/users.service.js";
import { stringify } from "node:querystring";
import type { CustomError } from "../types/error.js";

interface UserRequest extends Request {
    body: {
        name: string
        email: string
        password: string
    }
}

export const getUsersController = async (req: Request, res: Response) => {
    try {
        const users = await getUserService();
        res.status(200).json(users)
    } catch (err) {
        const error = err as Error
        console.error("Error getting the users", error)
        res.status(500).json({ error: error.message })
    }
}

export const addUserController = async (req: UserRequest, res: Response) => {
    try {
        const { name, email, password } = req.body

        if(!name || !email || !password) {
            return res.status(400).json({ message: "Fill all fields" });
        }

        const user = await addUserService(name, password) 

        res.status(201).json({
            message: "User added successfully",
            user
        })

    } catch (err) {
        const error = err as Error
        res.status(400).json({ error: error.message })
    }
}

export const updateUserController = async (req: Request, res: Response) => {
    try {
        const id = req.params.id // ✅ string

        if (Object.keys(req.body).length === 0) {
            return res.status(400).json({ message: 'No data provided for update' })
        }

        const { name, email, password } = req.body

        // ✅ only include fields that were provided
        const userUpdate = {
            ...(name && { name }),
            ...(email && { email }),
            ...(password && { password })
        }

        // const updatedUser = await updateUserService(id: String, userUpdate) // This is cauisng on error it as an object

        res.status(200).json({
            message: 'User updated successfully',
            // updatedUser
        })

    } catch (error) {
        const err = error as CustomError
        res.status(err.statusCode || 500).json({ error: err.message })
    }
}

export const deleteUserController = async (req: Request, res: Response) => {
}