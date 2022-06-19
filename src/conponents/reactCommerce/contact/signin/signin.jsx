import React, { Component } from 'react'
import { signInWithGoogle } from '../../../../firebase/firebase.util';
import { ContactBtn } from '../button/button'
import { ContactInput } from '../input/input'
import './signin.css';

export default class SignIn extends Component {

    constructor(){
        super();

        this.state={
            email: '',
            password: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({email: '', password: ''})
    }

    handleChange = (e) => {
        // console.log(e.target.name);
        const {name, value} = e.target;
        this.setState( ({[name]: value}))
        // this.setState({ [name]: value})s
    }

    render() {
        return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email</span>

            <form className='form' onSubmit={this.handleSubmit}>
                <ContactInput
                    handleChange={this.handleChange}
                    name='email'
                    value={this.state.email}
                    type='email'
                    label='Email'
                />
                <ContactInput 
                    handleChange={this.handleChange}
                    name='password'
                    value={this.state.password}
                    type='password'
                    label='Password'
                />
                <div>
                    <ContactBtn
                        btnColor='black'
                        placeholder='SIGN IN'
                    />
                    <ContactBtn
                        btnColor='skyblue'
                        placeholder='SIGN IN WITH GOOGLE'
                        onClick={signInWithGoogle}
                    />
                </div>
                
            </form>

            
        </div>
        )
    }
}
