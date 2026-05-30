import User from "../models/users.model";
import bcrypt from "bcrypt"
import type { CustomError } from "../types/error";
import mongoose from "mongoose";

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

type IdResponse = {
    name: string
    email: string
}

export const getUserService = async (): Promise<UserRequest[]> => {
    try {
        return await User.find().select("-password").lean<UserRequest[]>(); // The lean method was causing some error since it returns a FlattenMaps
        // return await User.find().select("-password").lean() as unknown as UserRequest[] 
    } catch (error) {
        console.error('Error getting the users', error)
        throw error;
    }
}

export const getUserByIdService = async (id: string): Promise<UserRequest> => {
    try {
        const getUser = await User.findById(id)
            .select("-password")
            .lean<UserRequest>() // the lean method returns a plain javascript object

        if (!getUser) {
            const error = new Error("User not found") as CustomError
            error.statusCode = 404
            throw error
        }

        return getUser;

    } catch (error) {
        console.error('Error getting the user with Id', error)
        throw error
    }
}


// create a user 
export const addUserService = async (name: string, email: string, password: string) => {
    try {
        const existingUser = await User.findOne({ email })
    
        if (existingUser) {
            const error = new Error("User already exists") as CustomError
            error.statusCode = 409
            throw error
        }
    
        const salt: string = await bcrypt.genSalt(10) 
        const hashedPassword = await bcrypt.hash(password, salt) 
    
        const newUser = await User.create({ name, email, password: hashedPassword })
    
        const user = {
            name: newUser.name,
            email: newUser.email
        }
        
        return { user }
        
    } catch (error) {
        console.error('Error adding the user', error)
        throw error;
    }
}

// The partial utility is used to update a part of the user and not all the property exclude password
export const updateUserService = async (
    id: string,
    updateObject: Partial<UserRequestSignUp>
) => {

    try {
        // update the object.password property by hasing the password
        if (updateObject.password) {
            updateObject.password = await bcrypt.hash(updateObject.password, 10)
        }
    
        const updatedUser = await User.findByIdAndUpdate(
        id,
        { $set: updateObject }, // used to avoid conflicts
        { new: true, runValidators: true }
    ).select("-password")
    
        if (!updatedUser) {
            const error = new Error("User not found") as CustomError
            error.statusCode = 404
            throw error
        }
    
        return updatedUser;
        
    } catch (error) {
        console.error('Error updating the user', error)
        throw error;
    }
}

export const deleteUserService = async (id: string) => {
    try {
        const deletedUser = await User.findByIdAndDelete(id)

        if (!deletedUser) {
            const error = new Error("User not found") as CustomError
            error.statusCode = 404
            throw error
        }

    } catch (error) {
        console.error('Error deleting the user', error)
        throw error
    }
}