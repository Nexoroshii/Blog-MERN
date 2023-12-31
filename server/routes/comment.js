import { Router } from 'express';
import { checkAuth } from '../utils/checkAuth.js';
import { createComment } from '../controllers/commentController.js';

const router = new Router();

//create comment
router.post('/:id', checkAuth, createComment);

export default router;
