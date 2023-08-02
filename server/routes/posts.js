import { Router } from 'express';
import { getAll } from '../controllers/postsController.js';
import { checkAuth } from '../utils/checkAuth.js';
import { createPost } from '../controllers/postsController.js';

const router = new Router();

//create post
//http://localhost:3000/api/posts
router.post('/', checkAuth, createPost);

//get all posts
router.get('/', getAll);

export default router;
