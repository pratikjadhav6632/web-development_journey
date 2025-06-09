import React from 'react';
import { useParams } from 'react-router-dom';
function User(){
    const {userId}=useParams();
    return (
        
            <h1 className='bg-gray-700 py-8 text-center text-white text-3xl mx-70 my-30'>User : {userId}</h1>
        
    )
}

export default User