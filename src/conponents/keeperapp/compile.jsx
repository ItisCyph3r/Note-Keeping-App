import React from 'react';
import Footer from './footer/footer';
import Header from './header/header';
import Note from './note/note';
import notes from './note/notes.js';

export default function KeeperApp() {

    return (
        <> 
            <Header/>
            {notes.map((x) => {
                return <Note
                    id={x.id}
                    name={x.title}
                    content={x.content}
                />
            })}
            <Footer/>
        </>
    );
}
