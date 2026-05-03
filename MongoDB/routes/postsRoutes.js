import { Router } from "express";
import { createPostsController, getAllPostsController, updatePostsController, deletePostsController } from "../controllers/postsController.js";

const router = Router();

router.get('/', getAllPostsController)
router.post('/add', createPostsController);
router.patch('/update/:id', updatePostsController)
router.delete('/delete/:id', deletePostsController)

export default router;