import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
    const [data, setData] = useState('');

    useEffect(() => {
        // Fetch data from the backend
        axios.get('http://localhost:5000/api/data')
            .then((response) => {
                setData(response.data.message);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>React + Express App</h1>
            <p>{data || 'Loading...'}</p>
        </div>
    );
};

export default App;
