import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.css';
import { ReactComponent as Logo } from "../../../assets/4.4 crown.svg";
import {auth} from '../../../firebase/firebase.util';
import { useSelector, useDispatch } from 'react-redux';

// const dispatch = useDispatch();

// const setCurrentUser = (e) => { dispatch(userActions.setFname(e.target.value)) }



const Header = () => {

    const currentUser = useSelector(state => state.reficom.currentUser)

    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo/>
            </Link>
            <h1 style={{color: 'red'}}> { currentUser }</h1>
            <div className='options'>
                <Link className='option' to='/shop'>
                    Shop
                </Link>
                <Link className='option' to='/contact'>
                    Contact
                </Link>
                
                {
                    currentUser ?
                    (<div 
                        className='option'  
                        onClick={() => auth.signOut()}
                    >
                        Sign Out
                    </div>) : (
                    <Link 
                        className='option' 
                        to='/contact '
                    >
                        Sign in
                    </Link>
                    )
                }
                
            </div>
        </div>
    )
}



export default Header;