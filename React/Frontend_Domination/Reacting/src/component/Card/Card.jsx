import React from "react";

function Card({user,handleRemove,id})
{
    return (
        <>
          <div className="h-60 w-50 bg-zinc-300  rounded-md px-5 p-5 gap-5  my-4 justify-center items-center">
                <div className="m-auto  rounded-full h-20 w-20 bg-zinc-50 overflow-hidden object-cover">
                        <img src={user.image} alt="img" />
                </div>
                <div className="">
                    <h1 className="font-semibold text-center">{user.name}</h1>
                    <h3 className="opacity-40 text-center font-semibold">{user.email}</h3>
                    <p className="text-xs  ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, voluptas.</p>
                </div>
                <div className="bg-red-500 rounded-md  m-auto mt-1 w-20 flex justify-center text-white font-semibold">
                    <button onClick={()=>handleRemove(id)}>Remove it</button>
                </div>           
        </div>
        </>
    );
}

export default Card;