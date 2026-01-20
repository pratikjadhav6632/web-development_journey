import React, { useRef } from "react";

function UseRef(){

    const username=useRef(null);
    const password=useRef(null);
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(username.current.value,password.current.value)
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
         
            <input type="text" placeholder="Enter your username " name="username" ref={username} />
             <input type="password" placeholder="Enter your password " name="password" ref={password} />
             <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default UseRef;