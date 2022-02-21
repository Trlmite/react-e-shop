import express from 'express';
import { 
  login,
  register,
  getUsers
} from '../controllers/auth-controller.js';

const router = express.Router();

router.post('/register', register);

router.post('/login', login);

router.get('/users', getUsers)

export default router;

