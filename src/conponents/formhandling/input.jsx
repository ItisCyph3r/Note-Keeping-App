import React from 'react';

export default function Input(props) {
    const {type, placeholder, onChange, name} = props;

    return (
        <>
            <input name={name} onChange={onChange} type= {type} placeholder={placeholder}/>
        </>
    );
}
