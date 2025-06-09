import React from 'react';
import { useParams } from 'react-router-dom';
function User(){
    const {userId}=useParams();
    return (
        
            <h1 className='bg-gray-700 py-8 text-center text-white text-3xl'>User : {userId}</h1>
        
    )
}

export default User