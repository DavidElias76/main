import { Router } from "express"

import { signUp, signIn } from "../controllers/auth.controller.js"
import { authenticate } from "../middleware/auth.middleware.js"

const authRouter = Router()

authRouter.post('/signup', signUp); 
authRouter.post('/signin', signIn) // this also return the user
authRouter.get("/verify", authenticate, (req, res) => {
  res.status(200).json({ message: "User Authenticated", user: req.user }); // thsi passes the user twice with the signin route 
});
// authRouter.post('/signout', signOut)

export default authRouter;