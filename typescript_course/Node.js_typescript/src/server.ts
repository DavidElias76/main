
import dotenv from "dotenv"
dotenv.config()

import express from 'express'
import type {Request, Response} from "express"
import connectDB  from "./config/db.js" // This is allows use the node module(NodeNext) and this is setup in the tsconfig.json file
import bodyParser from "body-parser"
// import cors from "cors"
// import helmet from 'helmet';
import authRouter from "./routes/auth.routes.js"

const app = express()
const PORT = process.env.PORT || 8080;

// set up middleware
app.use(express.json())
app.use(bodyParser.json()) // allows sending of json data
// app.use(cors());// for front end development
// app.use(helmet())
// app.use(express.urlencoded({extended: false}));

await connectDB(); // call the connect db function

app.get('/', (req: Request, res: Response) => {
    res.send("hello world")
})

app.use('/api/auth', authRouter)

// The server is running but not working at the moment
const startServer = async () => {
    try {
         app.listen(PORT, () =>
            console.log(`server is running at http://localhost:${PORT}`) // This part of the code is included in the app.ts file and export the app to use it in the app.ts file 
        )
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}

startServer();
