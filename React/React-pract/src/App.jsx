import react, { useState } from "react"
import Form from "./Usestate/form";
import DateTime from "./UseEffect/DateTime"
import UseRef from "./useref/UseRef";
import { Bio } from "./ContextApi/Bio";
import BioProvider from "./ContextApi/Context";
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
     <BioProvider>
      {/* <h1>Task</h1>
      <p>count:{count}</p>
      <input type="number" value={step} onChange={(e)=>setStep(Number(e.target.value))} />
      <button onClick={Increment} disabled={count>=100}>Increment</button>
       <button onClick={Decrement} disabled={count<=0}>Decrement</button>
       <button onClick={Reset}>Reset</button>  */}
      
     <div className=" flex justify-center ">
      <h1>UseRef : </h1>
      <UseRef/>
     </div>
    
    <div className="flex justify-center ">
      <h1>Useeffect : </h1>
      <DateTime/>
     </div>
     <div className=" flex justify-center ">
      <h1>UseState : </h1>
      <Form/>
      </div> 

      <div>
       

        <Bio/>
      </div>
        </BioProvider>

    </>
  )
  
}


export default App;