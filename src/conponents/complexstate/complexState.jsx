import React, {useState} from 'react';
import Input from './input';
import './events.css';

export default function Complexstate(props) {

    const [fullname, setFullname] = useState({
        fname: '',
        lname: ''
    })

    function inputChange(event){
        const {name, value} = event.target

        setFullname((element) => {
            console.log(element)
            if(name === 'fname'){
                return {
                    fname: value,
                    lname: element.lname
                }
            }
            
            else{
                return {
                    fname: element.fname,
                    lname: value
                }
            }
        })
    }

    return (
        <div className="container">
            <h1> Hello {fullname.fname} {fullname.lname} </h1>

            <form className="form">
                <input 
                    name="fname"
                    onChange={inputChange}
                    type="text" 
                    placeholder="First name" 
                
                />
                <input 
                    name="lname"
                    onChange={inputChange}
                    type="text" 
                    placeholder="Second name" 
                />

                <button>
                    Submit 
                </button>
            </form>
        </div>
    );
}
