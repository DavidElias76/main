import type { Request, Response } from "express";
import { addUserService, getUserService, updateUserService, getUserByIdService, deleteUserService } from "../services/users.service";
import type { CustomError } from "../types/error";
import mongoose from "mongoose";
import { error } from "node:console";

// interface UserRequest extends Request {
//     body: {
//         name: string
//         email: string
//         password: string
//     }
// }

type UserRequest = {
    _id: mongoose.Types.ObjectId | string // ← _id not id
    name: string
    email: string
    createdAt: Date
    updatedAt: Date
}

type UserRequestSignUp = {
    name: string // you can make the name property optional and check if it will still work - This prevents the types of the same properties
    email: string
    password: string
}

type UserResponse = {
    message: string
    user: {
        name: string,
        email: string
    }
}

export const getUsersController = async (
    req: Request<{}, unknown, UserRequest, {}>, 
    res: Response<UserRequest[] | {error: string}>
) => {
    try {
        const users = await getUserService(); // we are returning the name and the id of the user
        res.status(200).json(users)
    } catch (err) {
        const error = err as Error
        console.error("Error getting the users", error)
        res.status(500).json({ error: error.message })
    }
}

// get the user by id - This needs the authorization to get the specific user
export const getUserByIdController = async (
    req: Request<{ id: string }>,
    res: Response<{ message: string; user: UserRequest } | { error: string }>
) => {
    try {
        const { id } = req.params;

        const user = await getUserByIdService(id);

        return res.status(200).json({
            message: "success",
            user 
        })

    } catch (err) {
        const error = err as CustomError
        return res.status(error.statusCode || 500).json({ error: error.message })
    }
}
// add user - There is an error adding the user
export const addUserController = async (
    req: Request<{}, unknown, UserRequestSignUp, {}>,
    res: Response<UserResponse | { message: string } | { error: string }>
) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ error: "Fill all fields" })
        }

        const { user } = await addUserService(name, email, password);

        return res.status(201).json({ 
            message: "User added successfully", 
            user: { 
                name: user.name,
                email: user.email
            }    
        }) 

    } catch (err) {
        const error = err as CustomError
        return res.status(error.statusCode || 500).json({ error: error.message })
    }
}

// update a specific user - use the partial utility type to update the user partially
export const updateUserController = async (
    req: Request<{ id: string }, unknown, Partial<UserRequestSignUp>>,
    res: Response<{ message: string } | { error: string }>
) => {
    try {
        const { id } = req.params;

        if (Object.keys(req.body).length === 0) {
            return res.status(400).json({ error: "No data provided for update" })
        }

        const { name, email, password } = req.body;

        // check the value if available and create an object
        const userUpdate = {
            ...(name && { name }),
            ...(email && { email }),
            ...(password && { password })
        }

        await updateUserService(id, userUpdate)

        return res.status(200).json({ message: "User updated successfully" })

    } catch (error) {
        const err = error as CustomError
        return res.status(err.statusCode || 500).json({ error: err.message })
    }
}

// delete the user
export const deleteUserController = async (
    req: Request<{ id: string }>,
    res: Response<{ message: string; success: boolean } | { error: string }>
) => {
    try {
        const { id } = req.params;
        await deleteUserService(id);

        return res.status(200).json({
            success: true,
            message: "User deleted successfully"
        })

    } catch (error) {
        const err = error as CustomError
        return res.status(err.statusCode || 500).json({ error: err.message })
    }
}