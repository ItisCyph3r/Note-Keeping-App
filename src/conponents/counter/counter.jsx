import React, {useState} from 'react';
import'./Counter.css';






export default function Counter() {
    const [count, setCount] = useState(0);

    function increase(x){
        setCount(count + 1)
    }

    function decrease(x){
        setCount(count - 1)
    }

    return (
        <>
            <div className="counter">
                <div className="counter-num">
                    {count}
                </div>
                <button onClick={increase} className="counter-btn">
                    +
                </button>
                <button onClick={decrease} className="counter-btn">
                    -
                </button>
            </div>
        </>
    );
}
