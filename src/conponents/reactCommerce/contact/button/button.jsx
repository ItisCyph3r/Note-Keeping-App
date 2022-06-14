import React from 'react'
import './button.css';

export const ContactBtn = ({placeholder, btnColor, onClick}) => {
    return (
        <button 
            className='contact-button' 
            style={{backgroundColor: btnColor}}
            onClick={onClick}
        >
            {placeholder}
        </button>
    )
}
