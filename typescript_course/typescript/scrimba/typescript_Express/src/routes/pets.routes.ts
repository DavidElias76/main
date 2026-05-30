import type { Router } from 'express'
import express from "express"
import { getPets, getPetWithId, getQueryParams } from '../controllers/pets.controller';
import { validateNumericIdMiddleware, pleaseAuthMiddleware } from '../middleware/pets.middleware';

const petsRoutes: Router = express.Router(); // This defines the type of router on express

petsRoutes.get('/', getPets); // get all the pets
petsRoutes.get('/query/', getQueryParams); // searching using the query params 
// This route will check password query, the id is a number and continue with getting the object with the id 
petsRoutes.get('/:id', validateNumericIdMiddleware, pleaseAuthMiddleware, getPetWithId); // get the pet with specific id - Middleware -  This is going to check if the id is not a number

export default petsRoutes;
