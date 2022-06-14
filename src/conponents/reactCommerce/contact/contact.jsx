import React, { Component } from 'react'
import Signin from './signin/signin'
import SignUp from './signup/signup'
import './contact.css';


export default class Contact extends Component {
    render() {
        return (
        <div className='container'>
            <div>
                <Signin/>
            </div>
            <div>
                <SignUp/>
            </div>
            
            
        </div>
        )
    }
}
