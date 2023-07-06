import express from 'express';
import addOrder from '../controllers/orders/addOrder.js';

const router = express.Router();

router.post("/", addOrder);

export default router;