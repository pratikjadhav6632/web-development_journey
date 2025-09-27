import React from 'react';

function Card(){
    const data =[
        {
        image:'https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?q=80&w=1196&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title:'Amazon',
        description:'lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed vulputate, lectus vel suscipit fermentum, quam velit tristique velit, non fringilla diam dolor'
      },
      {
        image:'https://images.unsplash.com/photo-1621768216002-5ac171876625?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title:'Apple',
        description:'lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed vulputate, lectus vel suscipit fermentum, quam velit tristique velit, non fringilla diam dolor'
      },
        {
        image:'https://images.unsplash.com/photo-1600783245777-080fd7ff9253?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title:'Google',
        description:'lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed vulputate, lectus vel suscipit fermentum, quam velit tristique velit, non fringilla diam dolor'
      }
]
    return( 
        <>
            <div className=' top-10 mt-10 left-10 text-3xl font-extrabold text-gray-800 '>
                <h1 className='text-center'>Reusable Component</h1>
            </div>
        <div className='w-full h-screen  rounded-md flex items-center justify-center text-2xl font-bold text-gray-700'>
            {data.map((element,index)=>(
            <div key={index} className='w-56 h-88 bg-white rounded-md shadow-lg ml-4'>
                <div className='w-full h-39 object-cover bg-zinc-100 overflow-hidden rounded-t-md'>
                    <img className='w-full h-full object-cover' src={element.image} alt="" />
                </div>
                <div className='w-full font-semibold text-xl'>
                    <h1 className='mt-4 ml-2'>{element.title}</h1>
                </div>
                <div className='p-4 text-sm h-full w-full font-normal'>
                    <p className='text-gray-600'>{element.description}</p>
                </div>
            </div>
            ))}
        </div>
        </>
    )
}

export default Card;