import React from 'react';
import Input from './input';
import './Login.css';
export default function Sign() {
    return (
        <>
            <form className="form">
                <Input type="text" placeholder="Username"/>
                <Input type="password" placeholder="Password"/>
                
                <button type="submit"> Register </button>
            </form>
        </>
    );
}
