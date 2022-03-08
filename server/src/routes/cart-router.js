import  express  from "express";
import { cartItems } from "../controllers/cart-controller.js";

const router = express.Router();

router.get('/cart', cartItems);


export default router;