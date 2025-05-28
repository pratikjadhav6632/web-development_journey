import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./component/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-500 rounded-xl p-4 mb-4">Tailwind CSS</h1>
      <div className="flex gap-4">
    <Card username="Green-Plant" btnName="Click Me" />
    <Card username="foliage" />
    </div>
      
    </>
  );
}

export default App;
