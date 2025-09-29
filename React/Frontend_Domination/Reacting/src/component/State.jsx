import React, { useState } from "react";

function State(){
    const [val,setVal]=useState({name:"pratik",isBanned:false})
    const [num,setNum]=useState([1,2,3,4,5,6]);
    const delete_num=()=>{
       setNum(()=>num.filter((item,index)=>index!=num.length-1))
    }
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
     <div className="px-5 py-1 flex justify-center  bg-zinc-100">
        <div>

           {num.map(item=><h1>{item}</h1>)} 
        <button onClick={()=>delete_num()} className="px-2 py-1 bg-red-500 text-xs rounded-full text-white">delete {num.length==0?" ":num.length}</button>
        </div>
     </div>
     </div>
    </>       
    )
}

export default State;