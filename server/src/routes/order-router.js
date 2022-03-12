import express  from 'express';
import {
    getOrders,
    createOrder,
} from '../controllers/order-controller.js';

const router = express.Router();

router.get('/getOrder/:id', getOrders);

router.post('/createOrder/:id', createOrder);

export default router;