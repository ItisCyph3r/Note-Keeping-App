import React from 'react';
import Input from './input';
import './Login.css';
export default function Log(props) {

    return (
        <>
            <form className="form">
                <Input type="text" placeholder="Username"/>
                <Input type="password" placeholder="Password"/>
                {!props.isRegistered && <Input type="password" placeholder="Repeat Password"/>}
                <button type="submit"> {props.isRegistered ? "Login" : "Register"} </button>
            </form>
        </>
    );
}
