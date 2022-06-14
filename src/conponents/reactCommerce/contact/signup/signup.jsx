import React, { Component } from 'react'
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

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        })
    }

    handleChange = (e) => {
        console.log(e.target.value)
    }

    render() {
        return (
        <div className='sign-up'>
            <h2>I already have an account</h2>
            <span>Sign in with your email</span>
            
            <form className='form'>
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
                />
            </form>     
        </div>
        )
    }
}
