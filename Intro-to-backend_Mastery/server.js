import express from 'express';
import cookieParser from "cookie-parser"
import dotenv from 'dotenv'
// import { PORT } from './config/env.js'; // This needs to be fixed - using the env.production/development
import connectDB from './database/database.js';
import userRouter from './routes/user.routes.js';
import subscriptionRouter from './routes/subscription.routes.js';
import authRouter from './routes/auth.routes.js';
import errorMiddleware from './middleware/error.middleware.js';
import arcjetMiddleware from './config/arcjet.js';

dotenv.config()
const app = express();

const PORT = process.env.PORT || 8080;
// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(arcjetMiddleware)

app.get('/', (req, res) => {
    res.send('Hello from server')
})
app.use('/api/auth', authRouter); // http://localhost:8080/api/auth/signup
app.use('/api/users', userRouter);
app.use('/api/subscriptions', subscriptionRouter);

// app.use(errorMiddleware); // error middleware

const startServer = async () => {
    try {
        await connectDB();; // connect to the database -> there is an error connecting the database cloud - atlas
        app.listen(PORT, () =>
            console.log(`server is running at http://localhost:${PORT}`)
        );
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

startServer();
// app.use(errorMiddleware); // ✅ re-enable this/