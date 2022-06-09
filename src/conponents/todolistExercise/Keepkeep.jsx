import React, {useState} from 'react';
import Footer from './footer/footer';
import Header from './header/header';
import Noted from './note/noted';
import Created from './note/created';
import './note/note.css';

export default function Keepkeep() {

    const [list, setList] = useState([]);

    function inputChange(input){
        // console.log(input)
        setList((element) => ([...element, input]))
    }

    function deleteList(id){
        // console.log(id)
        setList(element => element.filter((item, index) => (
            index !== id
        )))
    }

    // console.log(list)
    return (
        <>
            <Header/>
            <Created add={inputChange}/>
            {list.map((element, index) => {
                {/* console.log(element) */}
                return (
                    
                    <Noted 
                        key={index}
                        id={index}
                        title={element.title}
                        content={element.content}
                        onChanged={deleteList}
                    />
                )
            })}
            
            <Footer/>
        </> 
    );
}
