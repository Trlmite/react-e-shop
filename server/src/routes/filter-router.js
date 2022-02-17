import express from 'express';
import { getFilters } from '../controllers/filter-controller.js';

const router = express.Router();

router.get('/filters', getFilters)

export default router;