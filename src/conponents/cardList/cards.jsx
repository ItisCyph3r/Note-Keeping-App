import React from "react";
import './cards.css';

export const Cards = props => {

    const {list} = props;

    return (
        <div className="card-container">
            {list.map((element) => (
                <div className="card-body" key={element.id}>
                    <img alt="" src={`https://robohash.org/${element.id}/?set=set2&size=180x180`}/>
                    <p key={element.id}> {element.name} </p>
                </div>
            ))}
        </div> 
    )
    
}

