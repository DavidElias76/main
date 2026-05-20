import { Router } from "express";

// import the controllers from the users controller

const UserRoutes = Router()

UserRoutes.get('/')
UserRoutes.get('/:id')
UserRoutes.post('/')
UserRoutes.put('/:id')
UserRoutes.delete('/:id')


export default UserRoutes;
