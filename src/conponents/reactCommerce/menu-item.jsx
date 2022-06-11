import React from 'react'
import { useNavigate } from 'react-router-dom';
export const MenuItem = (props) => {

    const {title, url, size} = props;
    const navigate = useNavigate();
    return (
        <div className={`menu-item ${size}`} onClick={() => navigate('/contact')}>
            <div className= 'background-image'  style={{backgroundImage: `url(${url})`}}>
                <div className='content'>
                    <h1 className='title'> {title} </h1>
                    <p className='subtitle'> SHOPNOW </p>
                </div>
            </div>
        </div>
    )
}
