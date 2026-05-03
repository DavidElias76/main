import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// create a connection to the mongodb locally - using the mongodb compass
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI); // connect to the mongodb uri
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Database connection error:', error);
        process.exit(1);
    }
};

export default connectDB;