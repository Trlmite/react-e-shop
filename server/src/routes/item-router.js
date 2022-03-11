import express from 'express';
import { createItem, 
    getItems, 
    getUserItems 
} from '../controllers/item-controller.js';

const router = express.Router();

router.post('/create/:userId', createItem);

router.get('/getItems', getItems);

router.get('/getUserItems/:userId', getUserItems);


export default router;