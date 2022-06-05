import React , {useState} from 'react';
import Input from './input';
import './events.css';

export default function FormHandling(props) {

    const [headingText, setHeadingText] = useState('')
    const [Text, setText] = useState('')
    const [isMouseOver, setMouseOver] = useState(false)

    function handleClick(event){
        setText(headingText)
        event.preventDefault();
    }

    function handleInputChange(event){
        console.log(event.target.value)
        setHeadingText(event.target.value)
    }
    

    function activeBG(){
        setMouseOver(true)
    }

    function resetBG(){
        setMouseOver(false)
    }

    return (
        <div className="container">
            <h1> Hello {Text} </h1>
            <form className="form">
                <Input 
                    onChange ={handleInputChange} 
                    type="text" placeholder="What's your name?" 
                    value={headingText}

                />
                <button 
                    type='submit'
                    style={{backgroundColor: isMouseOver ? 'black' : 'white'}}
                    onClick={handleClick}
                    onMouseOver={activeBG}
                    onMouseOut={resetBG}
                > 
                    Submit 
                </button>
            </form>
        </div>
    );
}
