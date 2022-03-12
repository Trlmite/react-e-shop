import express from 'express';
import { createItem, 
    deleteItem, 
    getItems, 
    getUserItems,
} from '../controllers/item-controller.js';

const router = express.Router();

router.post('/create/:userId', createItem);

router.get('/getItems', getItems);

router.get('/getUserItems/:userId', getUserItems);

router.patch('/deleteItem', deleteItem);

export default router;