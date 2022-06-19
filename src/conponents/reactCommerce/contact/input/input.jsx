import React from 'react'
import './input.css';
export const ContactInput = ({name, type, label, handleChange}) => {
    return (
        <div style={{ marginBottom: '40px'}}>
            <label> {label} </label>
            <div>
                <input
                    onChange={handleChange}
                    name={name}
                    className='contact-input'
                    type={type}
                    
                    // required 
                />
                <hr></hr>
            </div>
            
        </div>
    )
}
