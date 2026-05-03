import express from 'express';
import dotenv from 'dotenv';
// import cors from 'cors';
// import helmet from 'helmet';
import connectDB from './mongodb.js';
import userRoutes from './routes/userRoutes.js';
import postsRoutes from './routes/postsRoutes.js'

dotenv.config();

const app = express();

// middleware
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cors());
// app.use(helmet());

// example url: http://localhost:8080/api/v1/users/register
// http://localhost:8080/api/users/register

// routes
app.use('/api/users', userRoutes); // this is the users routes
app.use('/api/posts', postsRoutes)

const PORT = process.env.PORT || 8000;

const connection = async () => {
    try {
        await connectDB(); // callback the function to connect to the database
        app.listen(PORT, () => {
            console.log(`Server is running at http://localhost:${PORT}`);
        });
    } catch (err) {
        console.log('Error starting the server:', err);
        process.exit(1);
    }
};

connection();