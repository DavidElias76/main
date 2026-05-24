import express from 'express'
import type { Express } from 'express';
import { pets } from './data/pets';

const app: Express = express(); // Adding the type of Express in the app instance 

const PORT: number = 8080;

app.get('/', (req, res) => {
    res.json(pets)
    console.log(`sent the pet object`)
})

app.listen(PORT, (): void => {
    console.log(`listening on port: http://localhost:${PORT}`)
})

