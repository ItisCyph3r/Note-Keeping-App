import React from 'react'
import './button.css';

export const ContactBtn = ({placeholder, btnColor, onClick, onSubmit}) => {
    return (
        <button 
            className='contact-button' 
            style={{backgroundColor: btnColor}}
            onClick={onClick}
            // onSubmit={onSubmit}
        >
            {placeholder}
        </button>
    )
}
