import React, {useState} from 'react';
import './events.css';

export default function Exercise2() {

    const [userDetails, setUserDetails] = useState({
        fname: '',
        lname: '',
        email: ''
    })

    function inputChange(event){

        const {name, value} = event.target;

        setUserDetails((element) => {
            return {
                ...element,
                [name]: value
            }
        })
    }

    return (
        <div className="container">
            <h1> Hello {userDetails.fname} {userDetails.lname} </h1>
            <p> {userDetails.email} </p>
            <form>
                <input 
                    onChange={inputChange}
                    name="fname"
                    placeholder="First name"
                    value={userDetails.fname}
                />
                <input 
                    onChange={inputChange}
                    name="lname"
                    placeholder="Second name" 
                    value={userDetails.lname}
                />
                <input 
                    onChange={inputChange}
                    name="email"
                    placeholder="Email"
                    value={userDetails.email}
                />
                <button>
                    Submit 
                </button>
            </form>
        </div>
    )
}
