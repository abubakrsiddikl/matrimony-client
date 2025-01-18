import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BiodataDetails = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            
        </div>
    );
};

export default BiodataDetails;