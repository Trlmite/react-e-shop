import express from 'express';
import { createItem, 
    getItems, 
    getUserItems 
} from '../controllers/item-controller.js';

const router = express.Router();

router.post('/create/:id', createItem);

router.get('/getItems', getItems);

router.get('/getUserItems/:id', getUserItems);


export default router;