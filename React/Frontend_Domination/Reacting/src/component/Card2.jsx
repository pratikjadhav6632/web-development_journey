import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

function Card2(){
    const [scorll,setScroll]=useState(false)
    const handleScroll=()=>{
        setScroll(()=>!scorll)
    }
    return(
        <>
            <div className="w-full h-screen bg-zinc-300 flex justify-center items-center">
                <div className=" relative w-50 bg-zinc-100 rounded-md flex object-cover  overflow-hidden">
                    <img className={`w-full ${scorll==false?"-translate-x-[0%]":"translate-x-[100%]"} transition-normal ease-in-out duration-500 `} src="https://images.unsplash.com/photo-1758801304964-417e328be877?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                     <img className={`w-full ${scorll==false?"translate-x-[0%]":"-translate-x-[100%]"} transition-normal ease-in-out duration-500 `}  src="https://images.unsplash.com/photo-1503174971373-b1f69850bded?q=80&w=1213&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <div onClick={handleScroll} className="w-5 h-5 bg-[#dadada7b] absolute bottom-0.5 flex justify-center items-center translate-x-24 -translate-y-2 rounded-full">
                        <FaArrowRight  />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card2;