import { Router } from "express";
import {
  getAll,
  getById,
  getMyPosts,
  removePost,
  createPost,
} from "../controllers/postsController.js";
import { checkAuth } from "../utils/checkAuth.js";

const router = new Router();

//create post
//http://localhost:3000/api/posts
router.post("/", checkAuth, createPost);

//get all posts
router.get("/", getAll);

//get post by id
router.get("/:id", getById);

//get my posts
router.get("/user/me", checkAuth, getMyPosts);

//remove post
router.delete("/:id", checkAuth, removePost);

export default router;
