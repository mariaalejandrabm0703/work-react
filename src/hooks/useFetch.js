import { useState, useEffect } from 'react';

export function useFetchData(servicio, error_msg = 'An error has ocurred getting the data') {
    const [fetch_data, setFetchData] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchData = () => {
        setLoading(true);
        servicio()
            .then(response => {
                console.log(response)
                setFetchData(response);    
                setLoading(false);            
            })
            .catch(error => {
                console.error(error.message);
                setError(error_msg);
                setLoading(false);                 
            });            
    };

    useEffect(() => {
        fetchData();
    }, []);

    return { data: fetch_data, fetchData, loading, error }
}