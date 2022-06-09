import React, {useState, useEffect} from 'react';

const useFetch = (url) => {
    

    const [name, setName] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingError, setLoadingError] = useState('');

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
            .then((response) => {
                // if (!response) throw Error('Could not fetch data')
                return response.json()
            })
            .then((user) => {
                setName(user)
                setLoading(false)
            })
            .catch((error) => {
                setLoadingError(error.message);
            });
        }, 1000)
        
    })

    

    return {name, loading, loadingError};
}

export default useFetch;