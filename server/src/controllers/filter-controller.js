import database from '../database/index.js';
 
export const getFilters =(req,res) =>{
    const {filters, filterOptions} = database.data

    const newFilters = filters.map(x => {
        const currentId = x.id
        const filter ={
            id: x.id,
            label: x.label,
            options: filterOptions.filter(y => y.filterId === currentId)
        }
        return filter
    })

    res.status(200).json(newFilters)
}