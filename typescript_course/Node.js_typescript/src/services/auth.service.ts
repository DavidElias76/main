import User from "../models/users.model.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import mongoose from "mongoose"
import type { CustomError } from "../types/error.js"

export const signUpService = async (name: string, email: string, password: string) => {
    const session = await mongoose.startSession()
    session.startTransaction()

    try {
        const existingUser = await User.findOne({ email })

        if (existingUser) {
            const error = new Error("User already exists!") as CustomError
            error.statusCode = 409
            throw error
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const [newUser] = await User.create(
            [{ name, email, password: hashedPassword }],
            { session }
        )

        const token = jwt.sign(
            { userId: newUser._id },
            process.env.JWT_SECRET as string,
            { expiresIn: "1d" as jwt.SignOptions["expiresIn"] }
        )

        await session.commitTransaction()

        const userCreated = {
            id: newUser._id,
            name: newUser.name
        }

        return { user: userCreated, token } // this gets the user?.userCreated?.name - to access the name property

    } catch (error) {
        await session.abortTransaction()
        throw error
    } finally {
        session.endSession()
    }
}

export const signInService = async (email: string, password: string) => {
    try {
        const existingUser = await User.findOne({ email }).select("-password"); // get the id, name and the email only

        if (!existingUser) {
            const error = new Error("User not found") as CustomError
            error.statusCode = 404
            throw error
        }

        const isValidPassword = await bcrypt.compare(password, existingUser.password!)

        if (!isValidPassword) {
            const error = new Error("Invalid password") as CustomError
            error.statusCode = 401;
            throw error;
        }

        const token = jwt.sign(
            { userId: existingUser._id },
            process.env.JWT_SECRET as string,
            { expiresIn: "1d" as jwt.SignOptions["expiresIn"] }
        )

        const userResponse = {
            id: existingUser._id,
            name: existingUser.name
        }

        return { user: userResponse, token: token }

    } catch (error) {
        throw error
    }
}

// export const signOutService = async () => {
// }