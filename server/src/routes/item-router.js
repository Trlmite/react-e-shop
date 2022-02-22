import express from 'express';
import { createItem, getItems } from '../controllers/item-controller.js';

const router = express.Router();

router.post('/create', createItem);

router.get('/getItems', getItems)

export default router;