import React, { Component } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { MenuItem } from './menu-item';
import './directory.styles.css';



export default class Ecommerce extends Component {

    constructor(){
        super();
    
        this.state = {
            sections: [
                {
                    title: 'Hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1
                },
                {
                    title: 'Jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2
                },
                {
                    title: 'Sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3
                },
                {
                    title: 'Womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    id: 4
                },
                {
                    title: 'M ens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: 5
                } 
            ]
        };
    }

    

    render() {
        
        return (
        <>
            <div className='homepage'>
            Home
            <Link to='/shop'>
                <button>
                    Shop page
                </button>
            </Link>
                <div className='directory-menu'>
                    
                    {
                        this.state.sections.map(({title, imageUrl, id, size}) => (
                            <MenuItem key={id} title={title} url={imageUrl} size={size}/>
                        ))
                    }
                    
                    
                </div>
            </div>
        </>
        )
    }
}


