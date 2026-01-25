import React, { useReducer } from 'react';

export const UseRed=()=>{
    const initialVal={
        count:0
    }

    const reducer=(state,action)=>{
        console.log(state,action)
        switch(action.type)
        {
            case "INCREMENT":
                return ({count:state.count+1})
            
            case "DECREMENT":
                return ({count:state.count-1})
            
            case "RESET":
                return ({count:0})
            default :
                return state.count    
        }
    }

    const [state,dispatch]=useReducer(reducer,initialVal);

    return(
        <>
        <div className='h-screen flex flex-col justify-center items-center'>
       
        <h1>count is :{state.count}</h1>
        <button className='  btn border border-black-1  rounded-lg mb-3 p-2 bg-green-400 text-white'   onClick={()=>dispatch({type:"INCREMENT"}) } >Increment</button>
        <button  className='  btn border border-black-1  rounded-lg mb-3 p-2 bg-red-400 text-white' onClick={()=>dispatch({type:"DECREMENT"})} >Decrement</button>
         <button className='  btn border border-black-1  rounded-lg mb-3 p-2 bg-blue-400 text-white'  onClick={()=>dispatch({type:"RESET"})} >RESET</button>
             
        </div>
        </>
    )
}