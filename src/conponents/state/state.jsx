import React from 'react';

const isDone = true;
const someStyle = {
    textDecoration: 'line-through'
}

export default function State() {
    return (
        <>
            <p style={isDone ? someStyle: null}> Get some maidens</p>
        </>
    ); 
}
