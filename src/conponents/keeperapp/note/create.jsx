import React, {useState} from 'react'

export default function Create(props) {

    const {onAdd} = props;

    const [input, setInput] = useState({
        title: '',
        content: ''
    })
    

    function inputChange(event){
        const {name, value} =event.target;

        setInput(element => ({...element, [name]: value}))
    }

    
    function renderNotes(event){
        onAdd(input)
        setInput({
            title: '',
            content: ''
        })
        event.preventDefault();
    }


    return (
        <div>
            <form className="note"> 
                <input name='title' 
                    onChange={inputChange} 
                    type="text" 
                    placeholder="Title" 
                    value={input.title}
                />
                <textarea 
                    name='content' 
                    onChange={inputChange} 
                    type="text" 
                    placeholder="Take a note" 
                    value={input.content}
                    rows='3'
                />
                <button 
                    onClick={renderNotes}
                > 
                    Add 
                </button>
                <br/>
            </form>
        </div>
    )
}
