import express from 'express';
import { createItem, getItems } from '../controllers/item-controller.js';

const router = express.Router();

router.post('/create/:id', createItem);

router.get('/getItems', getItems)

export default router;