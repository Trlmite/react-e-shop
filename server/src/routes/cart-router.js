import  express  from "express";
import { cartItems, addItemToCart } from "../controllers/cart-controller.js";

const router = express.Router();

router.get('/cart/:id',  cartItems);

router.post('/addCartItem', addItemToCart)


export default router;