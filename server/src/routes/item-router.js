import express from 'express';
import { checkItems, createItem, getItems } from '../controllers/item-controller.js';

const router = express.Router();

router.post('/create', createItem);

router.get('/check', checkItems)

router.get('/getItems', getItems)

export default router;