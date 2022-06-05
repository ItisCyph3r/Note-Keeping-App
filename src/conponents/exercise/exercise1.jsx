import React, {useState} from 'react';
import Input from './input';
import './exercise1.css'

export default function Exercise1(props) {

    const [color, setColor] = useState(false)

    function changeColor(){
        setColor(true);
    }

    function removeColor(){
        setColor(false);
    }

    const [inputChange, setInputChange] = useState('');

    const [text, setText] = useState('');

    function handleChange(event){
        console.log(event.target.value)
        setInputChange(event.target.value)
    }

    function buttonClick(event){
        setText(inputChange);
        event.preventDefault();
    }

    return (
        <div className="container">
            <h1> Hello {text} </h1>
            <form className="form" onSubmit={buttonClick}>
                <Input 
                    type="text" 
                    placeholder="What's your name?"
                    onChange={handleChange}
                    value={inputChange}
                />
                <button 
                    type='submit'
                    style={{backgroundColor: color ? 'black' : 'white'}}
                    onMouseOver={changeColor}
                    onMouseOut={removeColor}
                > 
                    Submit 
                </button>
            </form>
        </div>
    );
}
