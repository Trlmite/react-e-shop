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
                            productId: findProduct.id,
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

    res.status(200).json(
        modifiedUser
    );
}

export const addItemToCart = (req,res) => {
    const { itemId, userId } = req.body
    const { users } = JSON.parse(JSON.stringify(database.data))

    const foundUser = users.find(user => user.id === userId)
    if(foundUser.role === "ADMIN"){
        res.status(200).json({
            message: 'Admin cannot buy.... Sorry'
        })
        return
    }
    const newItem = {
        productId: itemId,
        quantity: "1"
    }
    const duplicateCheck = foundUser.cart.products.find(product => product.productId === itemId)
    
    if(duplicateCheck){
        const increasedQnt = foundUser.cart.products.map(product => {
            if(product.productId === itemId){
                const newProduct = {
                    ...product,
                    quantity: (Number(product.quantity) + 1).toString()
                }
                return newProduct
            } else {
                return product
            }
        })
        const modifiedUser = {
            ...foundUser,
            cart:{
                products: increasedQnt
            }
        }
        database.data.users = users.filter(x => x.id !== userId)
        database.data.users.push(modifiedUser)
        database.write()

        res.status(200).json({
            message: "Added to cart"
        })
        return
    }

    foundUser.cart.products.push(newItem)

    database.data.users = users.filter(x => x.id !== userId)
    database.data.users.push(foundUser)
    database.write()

    res.status(200).json({
        message: "Added to cart"
    })
}