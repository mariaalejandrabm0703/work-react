import { useState, useEffect } from 'react';

export const useFetchData = (BASE_URL = '', error_msg = 'An error has ocurred getting the data') => {
    const [fetch_data, setFetchData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await window.fetch(BASE_URL);
                if (!response.ok) {
                    throw new Error(`Http status ${response.status}`);
                }
                const data = await response.json();
                console.log(data);
                setFetchData(data.results);
            } catch (error) {
                console.error(error.message);
                setError(error_msg)
            }
            setLoading(false);
        }
        fetchData();
    }, [BASE_URL]);
    return { data: fetch_data, loading, error }
}