import React from "react";

const ProfileCard=(props)=>{
    let{img,name,bio,children}=props
    return (
        <>
        <div className=" p-20 border border-indigo-600 .">
        <div className="bg-red-100 m-auto h-130 w-100 p-20 border border-indigo-600 p-10">
            <div className="rounded-full h-40 w-40">
                <img src={img} alt="" />
            </div>
            <div className="name">{name}</div>
            <div className="bio">{bio}</div>
            <div className="hobbies">{children}</div>
         
        </div>
        </div>
        </>
    )
}

export default ProfileCard;