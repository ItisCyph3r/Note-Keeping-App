import React, {useState, useEffect} from 'react';
import DisplayFetch from './display';
import useFetch from './useFetch';

function FetchExercise() {
    
    const {name, loading, loadingError} = useFetch('https://jsonplaceholder.typicode.com/users')

    return (
        <div>
            {loading && <h1> Loading... </h1>}
            {loading && <h3> {loadingError} </h3>}
            <DisplayFetch list={name}/>
        </div>
    )
}

export default FetchExercise;