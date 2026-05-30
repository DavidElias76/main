import express, { json } from 'express'
import type { Express, Request, Response, NextFunction } from 'express';
import cors from "cors";
import petsRoutes from './routes/pets.routes';

const app: Express = express(); // Adding the type of Express in the app instance 

const PORT: number = 8080;

app.use(cors()) // install the cors type dependencies

app.use('/', petsRoutes)

// (res.body)This response tells typescript what type of reposnse body should be expected -Whe having the wrong routes/endpoint
app.use((req: Request, res: Response<{ message: string }>, next: NextFunction): void => {
    res.status(404).json({ message: "Endpoint not found" })
    next();
})

app.listen(PORT, (): void => {
    console.log(`listening on port: http://localhost:${PORT}`)
})

