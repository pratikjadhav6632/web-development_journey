import React, { useState } from "react";

function State(){
    const [val,setVal]=useState({name:"pratik",isBanned:false})
    return (
    <>
    <div className="w-full h-screen  bg-zinc-300">
    <h1 className="p-5 text-center font-bold text-xl">UseState</h1>
        <div className=" flex justify-center items-center">
            
            <div className="p-5 w-60 h-70 bg-zinc-100 rounded "> 
                    <h1>Name:{val.name}</h1>
                    <h1>Banned:{val.isBanned.toString()}</h1>
                    <button onClick={()=>setVal({...val,isBanned:!val.isBanned})} className={`text-zinc-100 px-2 py-1 rounded-md ${val.isBanned?"bg-red-600":"bg-green-600"}`}>{val.isBanned?"Ban":"UnBan"}</button>
            </div>
        </div>
     </div>
    </>       
    )
}

export default State;