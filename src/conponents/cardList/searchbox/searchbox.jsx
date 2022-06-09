import React from 'react';
import './searchbox.css';

export const SearchBox = (props) => {

    const {type, placeholder, handleChange} = props;

    return (
        <div style={{
            textAlign: 'center'
        }}>
            <input 
                className="search"
                type={type}
                placeholder={placeholder}
                onChange={handleChange}
            /> 
        </div>   
    );
}
