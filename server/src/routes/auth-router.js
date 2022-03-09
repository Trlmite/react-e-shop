import express from 'express';
import {
  login,
  register,
  getUsers,
  deleteUser
} from '../controllers/auth-controller.js';

const router = express.Router();

router.post('/register', register);

router.post('/login', login);

router.get('/users', getUsers)

router.patch('/deleteUser', deleteUser)

export default router;

