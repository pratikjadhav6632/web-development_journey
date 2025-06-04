import { useState,useId } from 'react'
import './App.css'
import {InputBox} from './Components'
import useCurrencyInfo from './Hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0);
  const [from,setFrom]=useState('usd');
   const [to,setTo]=useState('inr')
  const [convertedAmount,setConvertedAmount]=useState(0)
  const curencyInfo=useCurrencyInfo(from)

 const options= Object.keys(curencyInfo)

 const swap=()=>{
  setFrom(to)
  setTo(from)
  setConvertedAmount(amount)
  setAmount(convertedAmount)
 }

 const convert=()=>{
  setConvertedAmount(amount * curencyInfo[to])
 }

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center  bg-cover bg-no-repeat"
        style={
          {
           backgroundImage:`url("https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`
          }
        }
        
    >
          <h1 className='text-white text-7xl underline decoration-sky-500 py-7 mt-4  mx-3 animate-pulse font-mono' ><span className='underline decoration-green-500'>Currency</span> Converter 💱</h1>
        <div className="w-full">     
            <div className="w-full justify-center max-w-xl mx-auto border border-gray-60 rounded-lg p-9 py-12 backdrop-blur-sm bg-white/30">
            
                <form
                    onSubmit={(e)=>{
                      e.preventDefault();
                      convert()
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency)=>setAmount(amount)}
                            selectCurrency={from}
                            onAmountChange={(amount)=>setAmount(amount)}

                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                           
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency)=>setTo(currency)}
                            selectCurrency={to}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
