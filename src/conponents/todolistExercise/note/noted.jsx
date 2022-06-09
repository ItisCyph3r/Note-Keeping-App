import React from 'react';
import './note.css';
import { DeleteForever } from '@mui/icons-material';



export default function Noted(props) {
    
    const {title, content, id, onChanged} = props;

    function inputChange(){
        onChanged(id)
    }

    return (
        <>
            <div className="note">
                <h1> {title} </h1>
                <p> {content} </p>
                <button onClick={inputChange}> <DeleteForever/> </button>
            </div>
        </>
    );
}
