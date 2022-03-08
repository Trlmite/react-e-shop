import database from "../database/index.js";

export const cartItems = (req, res) => {
    const { carts, cartProducts, items, users, filterOptions } = JSON.parse(JSON.stringify(database.data))
    const user = req.body.user
    console.log(req.body)
    let userCarts = carts
    
    //reikai pataisyti !!??!?
    if(user.role !== "ADMIN"){
        let userCart = userCarts.filter(cart => cart.userId === user.id)
        if(!userCart){
            res.status(400).json({
                message: 'No carts found'
            })
            return
        }
        return userCarts = userCart
    } 

    const modifiedCarts = userCarts.map(x => {
        const findCartProduct = cartProducts.find(cartProduct => cartProduct.cartId === x.id)
        const findItem = items.find(item => item.id === findCartProduct.productId)
        
        const returnedCart ={
            ...x,
            cartId: findCartProduct.id,
            count: findCartProduct.count,
            item: findItem
        }

        return returnedCart
    })
    
    res.status(200).json({
        modifiedCarts
    })
}