import { Router } from "express";

import {addUserController} from '../controllers/userController.js'

const router = Router() // declare te instance of the router

router.get('/', addUserController)
