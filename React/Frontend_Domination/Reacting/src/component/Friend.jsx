import React from "react";

function Friend({values,index,handleFriend}){
    const {name,proffession,image,friend}=values;
    return(
        <>
        <div className="w-52 bg-white m-5 p-3 rounded-md ">
            <div className="w-full h-30 bg-zinc-300 object-cover overflow-hidden rounded-md" >
                <img src={image} alt="" />
            </div>
            <h3 className="text-xl font-semibold">{name}</h3>
            <h5 className="text-xs italic"> {proffession}</h5>
            <button onClick={()=>{handleFriend(index)}} className={`rounded-md mt-3 ${friend?"bg-green-600":"bg-blue-500"} text-white font-semibold px-2 py-1 `}>
                {friend?"friends":"Add friend"}
            </button>
        </div>
        </>
    )
}

export default Friend;