import React from "react";

function Music({values,index,handleCard}){
    const {name,image,added,author}=values;
    return(
        <> 
            <div className="w-60 h-45 rounded-md  m-5 p-4 bg-zinc-300 border-amber-100  flex gap-5 relative">
                <div className="w-30 h-30 overflow-hidden object-cover rounded-md">
                    <img src={image} alt="" />
                </div>
                <div className="font-semibold text-white whitespace-nowrap">
                    <h1>{name}</h1>
                    <h5 className="italic text-xs">{author}</h5>
                </div>
                <div onClick={()=>{handleCard(index)}} className={`${added?"bg-teal-200":"bg-amber-600"}  rounded-full px-2 py-1 text-white font-semibold absolute right-2.5 bottom-1.5`}>
                    <button>{added?"Added":"Add to favourait"}</button>
                </div>
               
            </div>
        </>
    )
}

export default Music;