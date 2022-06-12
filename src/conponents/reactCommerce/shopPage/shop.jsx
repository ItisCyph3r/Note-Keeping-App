import React, { Component } from 'react'
import './shop.styles.css';
import SHOP_DATA from './2.2 shop.data.js'


export default class Shoppage extends Component {
    render() {
        return (
        <>
            Collections

            {                
                SHOP_DATA.map(({id, title, routeName, items}) => (
                    <div className="collection-preview" key={id}>
                        <div className="title">
                            <p> {title} </p>
                        </div>
                        <div className="preview">
                            {items.map((element) => (
                                <div key={element.id} className='preview-body'>
                                    <img src={element.imageUrl} alt=''/>
                                    <div className='description'>
                                        <div> {element.name} </div>
                                        <div> ${element.price} </div>
                                    </div>
                                </div>
                            ))}
                                
                            

                            
                        </div>
                    </div>
                ))   
            }
        </>
        )
    }
}
