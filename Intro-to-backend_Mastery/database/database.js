import mongoose from 'mongoose';
import dotenv from 'dotenv';
// import { MONGO_URI, PORT } from '../config/env';

dotenv.config();

if(!process.env.MONGO_DB_URI) {
    throw new Error("Please define the MONGODB_URI environment variable inside .env.<development/production>")
}

// NB -> There is an error in the databse connection - needs to be fixed
const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_DB_URI); // ✅ match your .env
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Database connection error:', error);
        process.exit(1);
    }
}

export default connectDB;