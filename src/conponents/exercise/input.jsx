import React from 'react';

export default function Input(props) {
    const {type, placeholder, onChange} = props;

    return (
        <>
            <input onChange={onChange} type= {type} placeholder={placeholder}/>
        </>
    );
}
