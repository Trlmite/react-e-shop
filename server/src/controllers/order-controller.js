import database from "../database/index.js";

export const getOrders = (req, res) => {
    const { id } = req.params;
    const { orders, items } = database.data;

    const findOrder = orders.filter(order => order.userId === id);
    console.log(findOrder)

    const modifiedOrders = findOrder.map(order => {
        const modifiedOrder ={
            ...order,
            products: order.products.map(product => {
                const findProduct = items.find(orderItem => orderItem.id === product.productId)
                const totalPrice = Number(product.quantity) * Number(findProduct.price);
                const newProduct ={
                    ...product,
                   price: totalPrice
                }
                return newProduct
            }),
        }
        return modifiedOrder
    })

    const withTotal = modifiedOrders.map(order => {
        const orderTotal ={
            ...order,
            totalPrice: order.products.reduce((total, {price}) => total + price, 0)
        }
        return orderTotal
    })

    if(!findOrder){
        res.status(400).json({
            message: "no order found"
        })
        return;
    }

    res.status(200).json(
        withTotal
    )
}

export const createOrder = (req, res) => {
    
}
