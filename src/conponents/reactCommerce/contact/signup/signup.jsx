import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { Component } from 'react'
import { auth, createProfileDocument } from '../../../../firebase/firebase.util';
import { ContactBtn } from '../button/button'
import { ContactInput } from '../input/input'
import './signup.css';

export default class SignUp extends Component {

    constructor(){
        super();

        this.state={
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleClick = async e => {
        // console.log('hehe')

        const {displayName, email, password, confirmPassword} = this.state;

        console.log(email, password, confirmPassword, displayName)

        if(password !== confirmPassword){
            alert('Passwords dont match!!!')
            
            return; 
        }

        createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredentials) => {

            const user = userCredentials.user;
            console.log(displayName)
            await createProfileDocument(user, {displayName})
        })

        e.preventDefault();
    }

    handleChange = (e) => {
        const {name, value} = e.target;

        this.setState({[name]: value})
    }

    render() {
        return (
        <div className='sign-up'>
            <h2>I already have an account</h2>
            <span>Sign in with your email</span>
            
            <form className='form' onSubmit={e => e.preventDefault()}>
                <ContactInput
                    name='displayName'
                    value={this.state.displayName}
                    handleChange={this.handleChange}
                    type='text'
                    label='Display Name'
                />
                <ContactInput
                    name='email'
                    value={this.state.email}
                    handleChange={this.handleChange}
                    type='email'
                    label='Email'
                />
                <ContactInput 
                    name='password'
                    value={this.state.password}
                    handleChange={this.handleChange}
                    type='password'
                    label='Password'
                />
                <ContactInput 
                    name='confirmPassword'
                    value={this.state.confirmPassword}
                    handleChange={this.handleChange}
                    type='password'
                    label='Confirm Password'
                />
                <ContactBtn
                    btnColor='black'
                    placeholder='SIGN UP'
                    onClick={this.handleClick}
                />
            </form>     
        </div>
        )
    }
}
