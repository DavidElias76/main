import User from "../models/users.model"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import mongoose from "mongoose"
import type { CustomError } from "../types/error"

// Define the shape of the user response object
type UserResponse = {
    id: mongoose.Types.ObjectId; // This is the objectId that is in the database
    name: string;
}

// Define the shape of the returned object from both services
type AuthServiceResponse = {
    user: UserResponse;
    token: string;
}

export const signUpService = async (name: string, email: string, password: string): Promise<AuthServiceResponse> => {
    // const session = await mongoose.startSession()
    // session.startTransaction()

    try {
        const existingUser = await User.findOne({ email })

        if (existingUser) {
            const error = new Error("User already exists!") as CustomError
            error.statusCode = 409
            throw error
        }

        const salt: string = await bcrypt.genSalt(10);
        const hashedPassword: string = await bcrypt.hash(password, salt);

        const [newUser] = await User.create(
            [{ name, email, password: hashedPassword }],
            // { session }
        );

        const token: string = jwt.sign(
            { userId: newUser._id },
            process.env.JWT_SECRET as string,
            { expiresIn: "1d" as jwt.SignOptions["expiresIn"] }
        )

        // await session.commitTransaction()

        const user: UserResponse = {
            id: newUser._id,
            name: newUser.name
        }

        return { user, token } // this gets the user?.userCreated?.name - to access the name property

    } catch (error) {
        // await session.abortTransaction()
        throw error
    } finally {
        // session.endSession()
    }
}

export const signInService = async (email: string, password: string): Promise<AuthServiceResponse> => {
    try {
        const existingUser = await User.findOne({ email }).select("+password"); // This geves an error when using the select("-password") which doesnot select the password and doesnot compare the password

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

        const user: UserResponse = {
            id: existingUser._id,
            name: existingUser.name
        }

        return { user, token }

    } catch (error) {
        throw error
    }
}

// export const signOutService = async () => {
// }