import { Router } from "express";
import { registerUserController, loginController, logoutController } from "../controllers/usersController.js";

const router = Router();

router.post('/register', registerUserController); 
router.post('/login', loginController);
router.post('logout', logoutController)

export default router