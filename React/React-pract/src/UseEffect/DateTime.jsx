import React, { useState } from "react";
import { useEffect } from "react";

export default  function DateTime(){
    const [date,setDate]=useState('');

    
    
    useEffect(()=>{
       const interval= setInterval(()=>{
            const time=new Date()
            setDate(time.toLocaleTimeString());
        },0)

        return (()=>clearInterval(interval));
    },[])

    return(
        <>
         <h1>Date :{date}</h1>
        </>
    )
}