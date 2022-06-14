import React from 'react'
import SHOP_DATA from './2.2 shop.data.js'


export const Categories = () => {
    
    return (
        SHOP_DATA.map((item) => {
            console.log(item)
        })
        
    )
}


// items
//                 .filter((item, id) => (item !== id))
//                 .map(({id, ...item}) => (
//                 <CollectionItem {...item}/>
//             ))