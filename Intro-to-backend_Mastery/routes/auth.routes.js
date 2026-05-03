
import { Router } from 'express'
import { signOut, signUp, signIn } from '../controllers/auth.controller.js';

const authRouter = Router();

authRouter.post('/signup', signUp)
authRouter.post('/signin', signIn)
authRouter.post('/signout', signOut)

export default authRouter;