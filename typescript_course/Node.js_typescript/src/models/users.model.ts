import { Schema, model, Document } from "mongoose"

// NOTE: Without extends Document you lose access to Mongoose methods like .save(), ._id etc on the model instance.

interface UserI extends Document {
    name: string
    email: string
    password: string
}

const userSchema = new Schema<UserI>({
    name: {
        type: String,
        required: [true, 'User name is required'],
        trim: true,
        minlength: 2,  
        maxlength: 50  
    },
    email: {
        type: String,
        required: [true, 'User email is required'],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: [true, 'User password is required'],
        minlength: 6,  
        select: false
    }
}, { timestamps: true })

const User = model<UserI>('User', userSchema)

export default User