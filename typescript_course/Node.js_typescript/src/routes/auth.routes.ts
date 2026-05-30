import type { Router } from "express"
import express from "express"
import type { Request, Response } from "express"
import { signUp, signIn } from "../controllers/auth.controller"
import { authenticate } from "../middleware/auth.middleware"

type UserObject = {
  user: {
    id: string,
    email: string
  }
}

const authRouter: Router = express.Router()

authRouter.post('/signup', signUp); 
authRouter.post('/signin', signIn) // this also return the user
authRouter.get("/verify", authenticate, (req: Request, res: Response<{ message: string,} | UserObject>) => {
  res.status(200).json({ message: "User Authenticated", user: req.user }); // this passes the user twice with the signin route 
});

export default authRouter;