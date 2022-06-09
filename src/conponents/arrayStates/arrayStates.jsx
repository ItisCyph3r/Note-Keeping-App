import React, {useState} from 'react'
import Blog from './Blog'

export default function ArrayStates() {

    const [List, setList] = useState([
        {title: 'Fullstack', body: 'lorem ipsum...', id: 1},
        {title: 'DevOps', body: 'lorem ipsum...', id: 2},
        {title: 'Cloud Engineer', body: 'lorem ipsum...', id: 3}
    ])
    console.log(List)
    return (
        <div>
            <Blog blogs={List}/>
        </div>
    )
}
