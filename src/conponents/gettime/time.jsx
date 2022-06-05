import React, {useState} from 'react'
import './time.css';

export default function Time() {

    let time = new Date().toLocaleTimeString();

    const [count, setCount] = useState(time);

    setInterval(getTime, 1000 )

    function getTime(){
        const newTime = new Date().toLocaleTimeString();
        
        setCount(newTime)
    }

    return (
        <div className='counter'>
            <div className='counter-num'>
                {count}
            </div>
            <button onClick={getTime} className='counter-btn'>
                Get Time
            </button>
        </div>
    )
}
