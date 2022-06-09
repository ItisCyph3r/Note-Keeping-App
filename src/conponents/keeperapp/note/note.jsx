import React from 'react';
import './note.css';



export default function Note(props) {
    
    const {title, content, deleteNote, id} = props

    function handleClick(){
        deleteNote(id);
    }
    
    return (
        <>
            <div className="note">
                <h1> {title} </h1>
                <p> {content} </p>
                <button onClick={handleClick}>Delete</button>
            </div>
        </>
    );
}
