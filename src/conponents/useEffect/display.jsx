import React from 'react';

export default function DisplayFetch(props) {

    const {list} = props

    return (
        <>
            {list.map((element) => (
                <div key={element.id}>
                    <h3> {element.name} </h3>
                    <p> {element.email} </p>
                </div>
            ))}
        </>
    );
}
