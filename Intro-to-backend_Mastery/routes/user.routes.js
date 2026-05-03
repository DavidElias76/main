import { Router} from 'express';
import { getUsers, getUser } from '../controllers/user.controller.js';
import { authorize } from '../middleware/auth.middleware.js';

const userRouter = Router();

userRouter.get('/', getUsers)

userRouter.get('/:id', authorize, getUser); // authorize the user getting the details of a specific user 

userRouter.post('/', (req, res) => res.send({ title: 'Create a new user'}))

userRouter.put('/:id', (req, res) => res.send({ title: 'Update a new user withe specific id'}))

userRouter.delete('/:id', (req, res) => res.send({ title: 'delete a user'}))

export default userRouter;