import React, {useState} from 'react'
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import { Zoom } from '@mui/material';

export default function Created(props) {

    const {add} = props

    const [input, setInput] = useState({
        title: '',
        content: ''
    })

    const [inputDisplay, setInputDisplay] =useState(false);

    function inputChange(event){
        const {name, value} = event.target
        // console.log(`${name} and  ${value}`)
        setInput((element) => ({...element, [name]: value}))
    }

    function expandInput(){
        setInputDisplay(true)
    }

    function buttonClick(event){
        add(input)
        // setInput({
        //     title: '',
        //     content: ''
        // })
        event.preventDefault();
    }
    return (
        <div>
            <form className="note"> 
            {inputDisplay && (
                <input name='title' 
                    onChange={inputChange}
                    type="text" 
                    placeholder="Title"     
                />
            )}
                
                    <textarea 
                    name='content'
                    onChange={inputChange}
                    type="text" 
                    placeholder="Take a note" 
                    onClick={expandInput}
                    rows= {inputDisplay ? '3' : '1'}
                />  
                
                
                <Zoom in={inputDisplay} style={{width: '20%'}}>
                    <Fab
                        onClick={buttonClick}
                    > 
                        <AddIcon/>
                    </Fab>
                </Zoom>
                
                <br/>
            </form>
        </div>
    )
}
