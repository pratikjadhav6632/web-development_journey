import React,{useContext, useState} from 'react';


function Form(){

    const [user,setUser]=useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        phoneNumber:''
    })

    const handleInput=(e)=>{
        let {name,value}=e.target;
        setUser((prev)=>({...prev,[name]:value}))
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(user)
    }




    return(
        <>
            
        <div className='h-screen  flex justify-center items-center'>
            <div className='bg-green-200 p-20'>
                <h1>Form data {`${user.firstName}|| ${user.email}||${user.phoneNumber}`}</h1>
                <form action="" onSubmit={handleSubmit}>
                    <label htmlFor="">FirstName</label><br />
                    <input 
                    type="text"
                    className='border rounded-md m-2 '
                    name='firstName'
                    placeholder='Enter FirstName'
                    required
                    onChange={handleInput}
                    />

                  <br />  <label htmlFor="">LastName</label><br />
                    <input 
                    type="text"
                     className='border rounded-md m-2 '
                    name='lastName'
                    placeholder='Enter lastName'
                    required
                    onChange={handleInput}
                    />

                  <br />  <label htmlFor="">Email</label><br />
                    <input 
                    type="email"
                     className='border rounded-md m-2 '
                    name='email'
                    placeholder='Enter email'
                    required
                    onChange={handleInput}
                    />

                 <br />   <label htmlFor="">Password</label><br />
                    <input 
                    type="password"
                     className='border rounded-md m-2 '
                    name='password'
                    placeholder='Enter Password'
                    required
                    onChange={handleInput}
                    />

                   <br /> <label htmlFor="">Phone Number</label><br />
                    <input 
                    type="phone"
                     className='border rounded-md m-2 '
                    name='phoneNumber'
                    placeholder=''
                    required
                    onChange={handleInput}
                    />

                  <br />  <input type="submit" className='border rounded-md bg-black text-white p-2'  />
                </form>
            </div>
        </div>
        </>
    )
}

export default Form;