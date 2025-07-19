import express from 'express';
import { registerUser, loginUser, getUserProfile } from '../controllers/authController.js';
import { protect } from '../middlewares/authMiddlewares.js';

const authRouter = express.Router();

authRouter.post('/register', registerUser); // register user
authRouter.post('/login', loginUser); // login user 
authRouter.get('/profile', protect, getUserProfile); // get user profile 

export default authRouter;  
