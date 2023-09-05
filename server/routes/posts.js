import { Router } from 'express';
import { getAll, getById } from '../controllers/postsController.js';
import { checkAuth } from '../utils/checkAuth.js';
import { createPost } from '../controllers/postsController.js';
//import {getById} from

const router = new Router();

//create post
//http://localhost:3000/api/posts
router.post('/', checkAuth, createPost);

//get all posts
router.get('/', getAll);

//get post by id
router.get('/:id', getById);

export default router;
