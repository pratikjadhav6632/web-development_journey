import { useCallback, useEffect, useState,useRef } from "react";

import "./App.css";

function App() {
  const [length, setLength] = useState(6);
  const [charAllowed, setCharAllowed] = useState(false);
  const [numAllowed, setNumAllowed] = useState(false);
  const [password, setPassword] = useState("");
const passwordRef=useRef(null)

let passGenerator=useCallback(()=>{
let pass="";
let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
if(numAllowed) str+="1234567890";
if(charAllowed)str+='!@#$%^&*()_+[]{}';
for(let i=0;i<=length;i++){
    let Char=Math.floor(Math.random()*str.length+1);
    pass+=str.charAt(Char);
}
setPassword(pass);
},[length,charAllowed,numAllowed,setPassword])

const CopyPass=useCallback(()=>{
  passwordRef.current?.select()
  window.navigator.clipboard.writeText(password)
},[password])

 useEffect(()=>{
    passGenerator();  
  },[length,numAllowed,charAllowed,passGenerator])

 const [otp, setOtp] = useState("");

  const generateOtp = () => {
    const randomOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setOtp(randomOtp);
  };

  return (
    <>
      <div className="w-full max-w-xl mx-auto rounded-lg px-4 my-8  pb-8 bg-gray-600  text-orange-600 shrink">
        <h1 className="text-center text-4xl mb-4">Password Generator</h1>
        <div className="flex  rounded-lg overflow-hidden shrink mx-auto justify-center ">
          <input
            type="text"
            value={password}
            placeholder="Password"
            className="bg-white outline-none text-gray-600 border-none px-8 py-2 rounded-l-lg"
            readOnly
            ref={passwordRef}
          />
          <button 
          id="Copybtn"
          onClick={()=>{
            alert("Password Copied successfully ! "),
            CopyPass()
          }}
          className="bg-blue-700 text-white px-4 rounded-r-lg overflow-hidden alert-success">
            Copy
          </button>
        </div>
        <div className="flex mx-auto px-4 py-4">
          <div className="flex mx-auto gap-x-3">
            <input
              type="range"
              className="cursor-pointer"
              value={length}
              min={6}
              max={16}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="length">Length:{length}</label>
          </div>
          <div className="flex mx-auto gap-x-3">
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id="numInput"
              onChange={() => {
                setNumAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numAllowed">Num Allow</label>
          </div>
          <div className="flex mx-auto gap-x-3">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charAllowed">Char Allow</label>
          </div>
        </div>
      </div>

      <br />
      <br />


       <div className="w-full max-w-xl mx-auto rounded-lg px-4 my-8  pb-8 bg-gray-600  text-orange-600 shrink">
        <h1 className="text-center text-4xl mb-4">OTP  Generator</h1>
       <div className="text-4xl font-mono flex justify-center shrink tracking-widest mb-6">{otp || "------"}</div>
        <button
          onClick={generateOtp}
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-200 flex shrink mx-auto"
        >
          Generate OTP
        </button>
      </div>
    </>
  );
}

export default App;
