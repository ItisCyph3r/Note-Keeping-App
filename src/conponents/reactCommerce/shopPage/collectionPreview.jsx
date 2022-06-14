import React from 'react'
import {Link} from 'react-router-dom'
import { CollectionItem } from './collectionItem'

export const CollectionPreview = ({title, items, key, routeName}) => {
    return (
        <div className="collection-preview" key={key}>
            <Link to={`/shop/${routeName}`}>
                <p className="title"> {title} </p>
            </Link>
            
            <div className="preview">
                {items
                .filter((item, id) => (id < 4))
                .map(({id, ...item}) => (
                    <CollectionItem {...item}/>
                ))}
            </div>
        </div>                                
    )
}
