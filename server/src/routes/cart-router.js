import  express  from "express";
import { cartItems, 
    addItemToCart,
    deleteCartItem,
    deleteCart,
} from "../controllers/cart-controller.js";

const router = express.Router();

router.get('/cart/:id',  cartItems);

router.post('/addCartItem', addItemToCart);

router.patch('/deleteCartItem/:id', deleteCartItem);

router.delete('/deleteCart/:id', deleteCart)

export default router;