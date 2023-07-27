import { Router } from "express";
import { register, login, getMe } from "../controllers/authController.js";
import { checkAuth } from "../utils/checkAuth.js";
import { createPost } from "../controllers/postsController.js";

const router = new Router();

//create post
//http://localhost:3000/api/posts
router.post("/", checkAuth, createPost);

export default router;
