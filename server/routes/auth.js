import { Router } from 'express';
import { register, login, getMe } from '../controllers/authController.js';

const router = new Router();

//registartion
router.post('/register', register);
//login
router.post('/login', login);
//get me
router.get('/me', getMe);

export default router;
