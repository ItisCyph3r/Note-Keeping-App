import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import './Counter.css';
import { counterActions } from '../../redux/store';



const CounterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: green;
    outline: red;
    color: white !important;
`;

const BTNContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: green;
`;

const CounterBtn = styled.button`
    margin: 1rem;
    border-radius: 1rem;
    width: 50px;
    height: 50px;
    font-size: 2rem;
    background-color: limegreen;
    text-align: center;
`;

const CounterNum = styled.div`
    font-weight: bold;
    margin: 1rem;
    font-size: 2rem;
`;

export default function Counter() {

    const counter = useSelector((state) => state.counter.value);

    const dispatch = useDispatch();

    const increaseFN = () => { dispatch(counterActions.increase()) }

    const decreaseFN = () => { dispatch(counterActions.decrease()) }
 
    const multiplyFN = () => { dispatch(counterActions.multiply(10)) }
    
    return (
        <>
            <CounterContainer>
                <CounterNum>
                    {counter}
                </CounterNum>
                <BTNContainer>
                    <CounterBtn onClick={increaseFN}>
                        +
                    </CounterBtn>
                    <CounterBtn onClick={decreaseFN}>
                        -
                    </CounterBtn>
                    <CounterBtn onClick={multiplyFN}>
                        *
                    </CounterBtn>
                </BTNContainer>
                
            </CounterContainer>
        </>
    );
}
