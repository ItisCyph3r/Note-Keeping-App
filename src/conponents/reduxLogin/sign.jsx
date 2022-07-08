import React from 'react';
import Input from './input';
import { useSelector, useDispatch } from 'react-redux';
import './Login.css';
import { userActions } from '../../redux/store';
export default function Sign() {

    const Fname = useSelector((state) => state.user.firstName);

    const Lname = useSelector((state) => state.user.lastName);

    const FFS = useSelector((state) => state.user.ffs);

    const dispatch = useDispatch();

    const setFname = (e) => { dispatch(userActions.setFname(e.target.value)) }

    const setLname = (e) => { dispatch(userActions.setLname(e.target.value)) }

    const setFFS = () => { dispatch(userActions.setFFS()) }

    return (
        <>
            {Fname}
            {Lname}
            {FFS}
            <form className="form" onSubmit={e => e.preventDefault()}>
                <Input type="text" placeholder="Username" onChange={setFname} />
                <Input type="text" placeholder="Username" onChange={setLname} />
                
                <button type="submit" onClick={setFFS}> Register </button>
            </form>
        </>
    );
}



// <form className="form">
//                 <Input type="text" placeholder="Username"/>
//                 <Input type="password" placeholder="Password"/>
                
//                 <button type="submit"> Register </button>
//             </form>