import react, { useState } from "react"
import Form from "./Usestate/form";

function App(){

  // const [count ,setCount]=useState(0);
  // const [step,setStep]=useState("");

  // const Increment=()=>{
  //   setCount(count+step)
  // }
  // const Decrement=()=>{
  //   setCount(count - step)
  // }
  // const Reset=()=>{
  //   setCount(0)
  // }
  
  return(
    <>
      {/* <h1>Task</h1>
      <p>count:{count}</p>
      <input type="number" value={step} onChange={(e)=>setStep(Number(e.target.value))} />
      <button onClick={Increment} disabled={count>=100}>Increment</button>
       <button onClick={Decrement} disabled={count<=0}>Decrement</button>
       <button onClick={Reset}>Reset</button> */}
     
     <div className="">
      <Form/>
      </div> 

    </>
  )
  
}


export default App;