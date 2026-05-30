import type { Router } from "express";
import express from "express";
import { getUsersController, addUserController, updateUserController, getUserByIdController } from "../controllers/users.controller";
const UserRoutes: Router = express.Router();

UserRoutes.get('/', getUsersController) // get all the users
UserRoutes.get('/:id', getUserByIdController); // get the id of a specific user - add an middlware authentication that checks if the user role is "manager | admin" and if not do not grant access to the specific user
UserRoutes.post('/add', addUserController) // add a user
UserRoutes.put('/:id', updateUserController) // update the user
// UserRoutes.delete('/:id') // delete the user 

export default UserRoutes;
