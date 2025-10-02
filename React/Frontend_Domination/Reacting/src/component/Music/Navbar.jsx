import React from "react";

function Navbar({count}){
    return (
        <>
            <div className="w-full px-10 py-4 flex justify-between items-center">
                <h1>Orange</h1> 
                <div className="flex py-1 px-2 rounded-md text-white font-semibold  bg-orange-400">
                    <h5>Favorait {count.filter((item)=>item.added).length} </h5>
            
                </div>
            </div>
        </>
    )
}

export default Navbar;