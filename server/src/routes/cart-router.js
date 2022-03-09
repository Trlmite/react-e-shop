import  express  from "express";
import { cartItems, addItemToCart, deleteCartItem } from "../controllers/cart-controller.js";

const router = express.Router();

router.get('/cart/:id',  cartItems);

router.post('/addCartItem', addItemToCart)

router.patch('/deleteCartItem/:id', deleteCartItem)


export default router;