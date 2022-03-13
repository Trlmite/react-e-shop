
import { v4 as uuidv4 } from 'uuid'
import database from '../database/index.js'

export const createItem = (req, res) => {
    const { userId } = req.params
    console.log( userId );
    const {title, imageURL, price, description, condition, stock, manufacturer, memory, lust } = req.body
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
    } else {
        lustId = findLustFilters.id
    }
    
    
    const item ={ 
        id: uuidv4(),
        title,
        imageURL,
        price,
        sellerId: userId,
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
    const { items, filterOptions } = database.data

    const modifiedItems = items.map(x => {
        const findManufacurer = filterOptions.find(manufacturerTitle => manufacturerTitle.id === x.filters.manufacturerId)
        const findMemory = filterOptions.find(memoryTitle => memoryTitle.id === x.filters.memoryId)
        const findLust = filterOptions.find(lustTitle => lustTitle.id === x.filters.lustId)
        const newItem ={
            ...x,
            manufacturer: findManufacurer.title,
            memory: findMemory.title,
            lust: findLust.title,
        }
        return newItem
    })
    
    res.status(200).json( 
        modifiedItems
    )
}

export const getUserItems = (req,res) => {
    const { userId } = req.params;
    const { items } = database.data
 

    const userItems = items.filter(item => item.sellerId === userId)

    res.status(200).json(
        userItems
    )
}

export const deleteItem = (req,res) => {
    const { itemId } = req.body
    const { items, users, filterOptions } = database.data

    const findItem = items.find(item => item.id === itemId)

    const modifiedUsers = users.map(user =>{
        const modifiedUser ={
            ...user,
            cart: {
                products: user.cart.products.filter(product => product.productId !== itemId)
            }
        }
        return modifiedUser
    })

    let newFilterOptions = filterOptions;
    
    const itemManufacturer = findItem.filters.manufacturerId
    const isSameManufacturer = items.filter(item => item.filters.manufacturerId === itemManufacturer && item.id !== findItem.id);
    if (isSameManufacturer.length === 0) {
        newFilterOptions = newFilterOptions.filter(option => option.id !== itemManufacturer);
    }

    const itemMemory = findItem.filters.memoryId
    const isSameMemory = items.filter(item => item.filters.memoryId === itemMemory && item.id !== findItem.id);
    if (isSameMemory.length === 0) {
        newFilterOptions = newFilterOptions.filter(option => option.id !== itemMemory)
    }
    
    const itemLust = findItem.filters.lustId
    const isSameLust = items.filter(item => item.filters.lustId === itemLust && item.id !== findItem.id);
    if (isSameLust.length === 0) {
        newFilterOptions = newFilterOptions.filter(option => option.id !== itemLust)
    }
    
    
    
    database.data.users = modifiedUsers
    database.data.items = items.filter(item => item.id !== findItem.id)
    database.data.filterOptions = newFilterOptions
    database.write();

    res.status(200).json({
        message: "item deleted"
    })
}