import type { Request, Response } from "express";
import { pets } from "../data/pets";
import type { Pet } from "../data/pets";
import type { CustomError } from "../types/error";

type PetQueryParams = {
    species?: string
    adopted?: "true" | "false"
    minAge?: string
    maxAge?: string
}

// type ResBody = {
//     body: string
// }

// gets all the pets
export const getPets = async (req: Request, res: Response<Pet[] | { error: string }>): Promise<void> => {
    try {
        res.status(201).json(pets);
    } catch (error) {
        const err = error as CustomError;
        res.status(err.statusCode || 500).json({ error: err.message })
    }
}

// This is when getting the id property from the request
export const getPetWithId = async (req: Request<{ id: string }>, res: Response<Pet | {message: string} | { error: string }>): Promise<void>  => {
    try {
        const { id } = req.params; 
        const pet: Pet | undefined = pets.find((pet: Pet): boolean => pet.id === Number(id))
        if(!pet) {
            res.status(404).json({ message: "Not pet with that ID"})
            return;
        }
        res.status(200).json(pet);

    } catch (error) {
        const err = error as CustomError;
        res.status(err.statusCode || 500).json({ error: err.message })
    }
}

// get the query para ms and return a result based on the search
export const getQueryParams = async (req: Request<{}, unknown, {}, PetQueryParams>, res: Response<Pet[] | {error: string}>): Promise<void> => {
    try {
        const { species, adopted, minAge, maxAge } = req.query;

        let filteredPets:Pet[] = pets;
        
        if (species){
            filteredPets = filteredPets.filter((pet:Pet): boolean=> 
                pet.species.toLowerCase() === species.toLowerCase()
            )
        }

        if (adopted){
            filteredPets = filteredPets.filter((pet:Pet): boolean=>
                pet.adopted === JSON.parse(adopted)
            )
        }

        if (minAge){
            filteredPets = filteredPets.filter((pet:Pet): boolean=>
                pet.age >= JSON.parse(minAge)
            )
        }

        if (maxAge){
            filteredPets = filteredPets.filter((pet:Pet): boolean=>
                pet.age <= JSON.parse(maxAge)
            )
        }
        res.json(filteredPets)
    } catch (error) {
        const err = error as CustomError;
        res.status(err.statusCode || 500).json({ error: err.message });
    }
}
