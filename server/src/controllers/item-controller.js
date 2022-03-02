
import { v4 as uuidv4 } from 'uuid'
import database from '../database/index.js'

export const createItem = (req, res) => {
    const {title, imageURL, price, sellerId, description, condition, stock, manufacturer, memory, lust } = req.body
    const { filterOptions } = database.data

    const findManufacturerFilters = filterOptions.find(x => x.title == manufacturer)
    const findMemoryFilters = filterOptions.find(x => x.title == memory)
    const findLustFilters = filterOptions.find(x => x.title == lust)
    let manufacturerId, memoryId, lustId;

    if (!findManufacturerFilters){
        const newFilterOption ={
            id: uuidv4(),
            filterId: "1",
            title: manufacturer
        }
        
        manufacturerId = newFilterOption.id
        database.data.filterOptions.push(newFilterOption)
         database.write()
        return manufacturerId
    } else {
        manufacturerId = findManufacturerFilters.id
    }
    
    
    if (!findMemoryFilters){
        const newFilterOption ={
            id: uuidv4(),
            filterId: "2",
            title: memory
        }
        memoryId = newFilterOption.id
        database.data.filterOptions.push(newFilterOption)
         database.write()
        return memoryId
    } else {
        memoryId = findMemoryFilters.id
    }
    
    if (!findLustFilters){
        const newFilterOption ={
            id: uuidv4(),
            filterId: "3",
            title: lust
        }
        
        lustId = newFilterOption.id
        database.data.filterOptions.push(newFilterOption)
        database.write()
        return lustId
    } else {
        lustId = findLustFilters.id
    }
    
    
    const item ={ 
        id: uuidv4(),
        title,
        imageURL,
        price,
        sellerId,
        description,
        condition,
        stock,
        filters :{
            manufacturerId,
            memoryId,
            lustId,
        }
    }

    database.data.items.push(item)
    database.write()

    res.status(201).json({
        message: "Item created"
    });
}


export const getItems = (req,res) => {
    const { items } = database.data
    
    res.status(200).json(
        items
    )
}