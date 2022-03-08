import database from "../database/index.js";

export const cartItems = (req, res) => {
    const { id } = req.params
    const { items, users } = JSON.parse(JSON.stringify(database.data))

    const foundUser = users.find(user => user.id === id)
    delete foundUser.password;

    if (foundUser.role === "ADMIN") {
        const adminCart = users.map(user => {
            const userCart = {
                id: user.id,
                cart: {
                    products: user.cart.products.map(product => {
                        const findProduct = items.find(cartItem => cartItem.id === product.productId)
                        const totalPrice = Number(product.quantity) * Number(findProduct.price);

                        const newProduct = {
                            ...product,
                            title: findProduct.title,
                            price: totalPrice.toString()

                        }
                        return newProduct
                    })

                }
            }
            return userCart
        })

        res.status(200).json(
            adminCart
        )
        return
    }

    if (foundUser.cart.products.length === 0) {
        res.status(200).json({
            message: "Cart is empty"
        })
        return
    }

    const modifiedUser = {
        ...foundUser,
        cart: {
            products: foundUser.cart.products.map(product => {
                const findProduct = items.find(cartItem => cartItem.id === product.productId)
                const totalPrice = Number(product.quantity) * Number(findProduct.price);

                const newProduct = {
                    ...product,
                    title: findProduct.title,
                    price: totalPrice.toString()

                }
                return newProduct
            })
        }
    }




    // //reikai pataisyti !!??!?
    // if(user.role !== "ADMIN"){
    //     userCart = userCarts.filter(cart => cart.userId === user.id)
    //     if(!userCart){
    //         res.status(400).json({
    //             message: 'No carts found'
    //         })
    //         return
    //     }
    //     return userCarts = userCart
    // } 

    // const modifiedCarts = userCarts.map(x => {
    //     const findCartProduct = cartProducts.find(cartProduct => cartProduct.cartId === x.id)
    //     const findItem = items.find(item => item.id === findCartProduct.productId)
    //     const findPrice = Number(findCartProduct.count) * Number(findItem.price);

    //     const returnedCart ={
    //         ...x,
    //         cartId: findCartProduct.id,
    //         count: findCartProduct.count,
    //         price: findPrice,
    //         item: findItem
    //     }

    //     return returnedCart
    // })

    res.status(200).json({
        modifiedUser
    })
}