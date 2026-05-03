import { use } from "react";
import User from "../models/user.model.js";

// get all the users
export const getUsers = async (req, res, next) => {

    try {
        const users = await User.find()
        res.status(200).json({
            success: true,
            users
        })
    } catch (error) {
        next(error)
    }
}

// get a user by id
export const getUser = async (req, res, next) => {

    try {
        const { id } = req.params;
        const user = await User.findById(id).select("-password"); // get the user by specific id and remove the password field

        if(!user) {
            const error = new Error('User not found!')
            error.statusCode(404);
            throw error;
        }
        res.status(200).json({
            success: true,
            user
        })
    } catch (error) {
        next(error)
    }
}