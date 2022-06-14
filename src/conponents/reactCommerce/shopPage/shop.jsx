import React, { Component } from 'react'
import './shop.styles.css';
import SHOP_DATA from './2.2 shop.data.js'
import { Link } from 'react-router-dom';
import { CollectionPreview } from './collectionPreview';


export default class Shoppage extends Component {
    render() {
        return (
        <>
            <h1>Collections</h1>

            {                
                SHOP_DATA.map(({id, ...collection}) => (
                    <CollectionPreview key={id} {...collection}/>
                ))   
            }
        </>
        )
    }
}
