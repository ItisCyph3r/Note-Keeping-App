import React from 'react';

export default function Input(props) {
    const {type, placeholder, onChange} = props;

    return (
        <>
            <input type= {type} placeholder={placeholder} onChange={onChange}/>
        </>
    );
}
