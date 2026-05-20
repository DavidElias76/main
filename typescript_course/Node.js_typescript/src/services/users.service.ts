import User from "../models/users.model.js";
import bcrypt from "bcrypt"
import type { CustomError } from "../types/error.js";

export const getUserService = async () => {
    try {
        // const getUsers = await User.find()
        // return getUsers;
        return await User.find() // gets all te users

    } catch (error) {
        console.error('Error getting the users', error)
    }
}

export const addUserService = async (name: string, password: string) => {
    const users = await User.find(); 
    
    // check if the user exist in the database
    const user = users.find(u => u.name === name)

    if(!user) {
        throw new Error("User already exists");
    }

    // const hashedPassword = await bcrypt.hash()

}

export const updateUserService = async (id: string, updateObject: Partial<{ name: string; email: string; password: string }>) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            id, 
            updateObject, 
            { new: true }
        ).select('-password')

        if (!updatedUser) {
            const error = new Error('User not found') as CustomError
            error.statusCode = 404
            throw error;
        }

        return updatedUser

    } catch (error) {
        throw error;
    }
}

export const deleteUserService = async () => {
    
}