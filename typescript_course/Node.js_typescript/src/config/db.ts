// db.ts
import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI as string)
        console.log("Database connected successfully")
    } catch (error) {
        console.error("Error connecting to the database", error)
        process.exit(1)
    }
}

export default connectDB;