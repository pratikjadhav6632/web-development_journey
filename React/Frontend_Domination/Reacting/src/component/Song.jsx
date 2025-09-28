import React from 'react';

function Song() {
    const data=[
        {name:"Paradox",desciption:"lorem ispusim dome thi sdhadg jsadbod iadas dn sdk"},
        {name:"krishna",desciption:"lorem ispusim dome thi sdhadg jsadbod iadas dn sdk"},
        {name:"ed shareen",desciption:"lorem ispusim dome thi sdhadg jsadbod iadas dn sdk"},

    ]
  return (
    <div className='w-full h-screen flex flex-col justify-center gap-7 items-center bg-zinc-300'>
        <h1 className='text-center text-xl  font-bold'>Event handling </h1>
     {data.map((item,index)=>(
         <div key={index} className='w-60 bg-zinc-100 rounded-md px-4 py-4'>
                <div className='font-semibold '>
                    <h1>{item.name}</h1>
                </div>
                <div className='text-xs '>
                    <p>{item.desciption}</p>
                </div>
                <div onClick={()=>{alert("Downloading started...")}} className='mt-3 py-1 px-2 bg-blue-600 rounded text-center'>
                    <button className='  text-sm text-zinc-100' >Download now</button>
                </div>
        </div>
     ))}
    </div>
  );
}

export default Song;
