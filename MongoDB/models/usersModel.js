import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt'

// user schema
const usersSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            unique: true,
            minlength: 2,
            maxlength: 30
        },
        password: {
            type: String,
            required: true,
            minlength: 6,
            maxlength: 50
        },
        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            unique: true
        }
    },
    // This will automatically add the timestamps when addding the user or updating the user
    {
        timestamps: true // mongoose will create the createdAt, updatedAt
    }
);

// before saving the password we need to hash it using bycrypt - it can be done in here or at the controller.js file
usersSchema.pre('save', async function (next) {
    if(this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10); // 10 is the salt rounds
})

// compare the password - it can also be done in here or at the controller.js file
usersSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password)
}
const User = model('User', usersSchema); // the collection name becomes users sence mongoose takes the name 'User" convert it to lowercase and pluralizes it to "users"

export default User;