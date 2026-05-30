import express, { json } from 'express'
import type { Express, Request, Response, NextFunction } from 'express';
import { pets } from './data/pets';
import cors from "cors";
import type {Pet} from './data/pets'
import petsRoutes from './routes/pets.routes';
const app: Express = express(); // Adding the type of Express in the app instance 

const PORT: number = 8080;

app.use(cors()) // install the cors type dependencies

type PetQueryParams = {
    species?: string
    adopted?: "true" | "false"
    minAge?: string
    maxAge?: string
}

// 404 catch-all (without TypeScript) - proper safety net - thss is the type of the pets
app.get('/', (req: Request, res: Response<Pet[]>): void => {
    res.json(pets); // This return an array of object hence the <Pet[]> in the response 
})

app.get('/', petsRoutes)

// This tell typescript that the id coming from the request is a type string and the response send is a type <Pet> which is an object or a json object 
app.get('/:id', (req: Request<{id: string}>, res: Response<Pet | { message: string}>): void | undefined => {
    const id = req.params.id;
    // const {id} = req.params; // you can also destucture the id property
    const pet: Pet | undefined = pets.find((pet: Pet): boolean => pet.id === Number(id));
    if(!pet) {
        res.status(404).json({ message: "Not pet with that ID"})
    }
    res.status(200).json(pet);
})

// String Query Parameters - The params is an empty object, resBody is unknown (which typescript will still check), req.body is empty object and req.query has a type of PetQueryParams

// Testing the request:
// ?adopted=false&species=cat&maxAge=2 should return only Willow
// /?adopted=true&species=dog&minAge=5&maxAge=6 should return only Rocky

app.get('/', (
    req:Request<{}, unknown, {}, PetQueryParams>, 
    res:Response<Pet[]>
): void=> {
    const { species, adopted, minAge, maxAge } = req.query; // This is the species query and access the species property - This follows the type PetQueryParams as being sent by the client
    let filteredPets:Pet[] = pets

    // you can also use a switch case for faster queries of the data
    if (species){
        filteredPets = filteredPets.filter((pet:Pet): boolean =>
        pet.species.toLowerCase() === species.toLowerCase()
    )}

    if (adopted){
        filteredPets = filteredPets.filter((pet:Pet):boolean=>
        pet.adopted === JSON.parse(adopted) // This is the boolean value and the method JSON.parse() converts the adopted to string for comparison 
    )}

    // minAge - Returns the age that is greater than the minAge
    if (minAge){
        filteredPets = filteredPets.filter((pet:Pet):boolean=>
        pet.age >= JSON.parse(minAge) // This is the boolean value and the method JSON.parse() converts the adopted to string for comparison 
    )}

    // maxAge - Returns the age that is less than the maxAge
    if (maxAge){
        filteredPets = filteredPets.filter((pet:Pet):boolean=>
        pet.age <= JSON.parse(maxAge) // This is the boolean value and the method JSON.parse() converts the adopted to string for comparison 
    )}
    res.json(filteredPets)
})

// (res.body)This response tells typescript what type of reposnse body should be expected -Whe having the wrong routes/endpoint
app.use((req: Request, res: Response<{ message: string }>, next: NextFunction): void => {
    res.status(404).json({ message: "Endpoint not found" })
})

app.listen(PORT, (): void => {
    console.log(`listening on port: http://localhost:${PORT}`)
})

