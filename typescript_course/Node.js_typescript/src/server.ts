
import dotenv from "dotenv"
dotenv.config()
import express from 'express'
import type { Express, Request, Response } from "express"
import connectDB  from "./config/db"
import bodyParser from "body-parser"
import authRouter from "./routes/auth.routes"
import UserRoutes from "./routes/users.routes"

const app: Express = express();
const PORT: number = Number(process.env.PORT) || 8080;

// set up middleware
app.use(express.json())
app.use(bodyParser.json()) 

app.get("/", (req: Request, res: Response<{ message: string}>) => {
    res.status(200).json({ message: "Hello world"})
})

app.use('/api/auth', authRouter)
app.use('/api/users', UserRoutes)

const startServer = async (): Promise<void> => {
    try {
        await connectDB(); // call the connect db function
        app.listen(PORT, (): void =>
            console.log(`server is running at http://localhost:${PORT}`) // This part of the code is included in the app.ts file and export the app to use it in the app.ts file 
        )
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}

startServer();


// app.use(cors());// for front end development
// app.use(helmet())
// app.use(express.urlencoded({extended: false}));