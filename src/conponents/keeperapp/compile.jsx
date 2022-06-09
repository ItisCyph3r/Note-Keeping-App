import React, {useState} from 'react';
import Footer from './footer/footer';
import Header from './header/header';
import Create from './note/create';
import Note from './note/note';
import './note/note.css';

export default function KeeperApp() {

    const [notes, setNotes] = useState([])

    function addNote(note){
        setNotes((element) => ([
            ...element,
            note
        ]))
    }

    function deleteFunction(id){
        setNotes((element) => (
            element.filter((item, index) => (index !== id))
        ))
        console.log(id)
    }
    return (
        <>
            <Header/>
            <Create onAdd={addNote}/>
            {notes.map((element, index) => (<Note id={index} key={index} title={element.title} content={element.content} deleteNote={deleteFunction}/>))}
            <Footer/>
        </> 
    );
}
