
import { v4 as uuidv4 } from 'uuid'
import database from '../database/index.js'

export const createItem = (req, res) => {
    const {title, imageURL, price, sellerId, description, condition, stock, filters } = req.body
    const database = database.data

    const item ={ 
        id: uuidv4(),
        title,
        imageURL,
        price,
        sellerId,
        description,
        condition,
        stock,
        filters
    }

    database.data.items.push(item)
    database.write()

    res.status(200).json({
        item
    });
}

export const checkItems = ( req,res) => {
    res.status(200).json({
        message: "veikia itemsCreate"
    });
}

export const getItems = (req,res) => {
    const items = database.data.items

    const formatedItems = items.map(({
        id, price, ...rest
      }) => {
        const item = {
          ...rest,
          id,
          price: `${price.value} ${price.currency}`,
        };
        return item;
      });


    res.status(200).json(
        formatedItems
    )
}