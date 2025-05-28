import { useState } from 'react'
import './App.css'

function App() {
  let [Count, setCount] = useState(0)
  const addValue = () => {
    if (Count < 20) {
      setCount(Count + 1)
    } else {
      alert("Limit Exceed");
    }
  }
  const removeValue = () => {
    if (Count > 0) {
      r = setCount(Count - 1);
    } else {
      alert("0 is last value")
    }
  }

  return (
    <>
      <h1>Counter Value: {Count} </h1>
      <div className="btn">
        <button
          onClick={addValue}
        >Add value</button>
        <br />
        <button
          onClick={removeValue}
        >Remove Value</button>
      </div>
        <p>Total Count:{Count}</p>   
    </>
  )
}

export default App
