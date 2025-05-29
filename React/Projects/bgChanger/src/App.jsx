import { useState } from 'react'
import './App.css'

function App() {
  const [color,setColor] = useState("yellow")

  return (
    <div className="w-full h-screen "
    style={{backgroundColor:color}}
    >
  <div className='fixed flex flex-wrap justify-center bottom-14 inset-x-0 '>
    <div className='flex flex-wrap justify-center gap-5 px-3 py-3 rounded-md  bg-white'>
    <button className='px-3 py-3 w-18 rounded-md text-white' 
    style={{backgroundColor:'red'}}
    onClick={()=>setColor('red')}
    > Red </button>
     <button className=' px-3 py-3 w-18 rounded-md text-white' 
     style={{backgroundColor:'yellow'}}
     onClick={()=>setColor('yellow')}
     > Yellow </button>
      <button className=' px-3 py-3 w-18 rounded-md border-2 text-white' 
      style={{backgroundColor:'green'}}
      onClick={()=>setColor('green')}
      > Green </button>
       <button className=' px-3 py-3 w-18 rounded-md text-black' 
       style={{backgroundColor:'white'}}
       onClick={()=>setColor('white')}
       > White </button>
        <button className=' px-3 py-3 w-18 rounded-md text-white' 
        style={{backgroundColor:'blueviolet'}}
        onClick={()=>setColor('blueviolet')}
        > Violet</button>
         <button className=' px-3 py-3 w-18 rounded-md text-white' 
         style={{backgroundColor:'orange'}}
         onClick={()=>setColor('orange')}
         > Orange </button>
          <button className=' px-3 py-3 w-18 rounded-md text-white' 
          style={{backgroundColor:'black'}}
          onClick={()=>setColor('black')}
          > Black </button>         
    </div>
  </div>
    </div>
   
  )
}

export default App
