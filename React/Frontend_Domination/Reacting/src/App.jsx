import react, { useState } from "react";
import Card from "./component/Card";
import Song from "./component/Song"
import State from "./component/State"
import Card2 from "./component/Card2"
import Friend  from "./component/Friend";
import "./index.css";
function App() {
  const raw=[
    {name:"Harsh",proffession:"Painter",image:"https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=1021&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",friend:false},
    {name:"Aman",proffession:"Artist",image:"https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",friend:false},
    {name:"Raj",proffession:"Coder",image:"https://images.unsplash.com/photo-1569292316763-0b667e9e960c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",friend:false}
  ]

  const [data,setdata]=useState(raw);

  const handleFriend=(friendIndex)=>{
    setdata((prev)=>{
       return prev.map((item,index)=>{
          if(index==friendIndex){
              return {...item,friend:!item.friend}
          }
          return item;
       })
    })
  }


  return(
    <>
    <div className="w-full h-screen bg-zinc-300  flex justify-center items-center">
      {data.map((items,index)=>(
        <Friend key={index} handleFriend={handleFriend} index={index} values={items}  />
      ))}
      </div>
    <Card2/>
    <State/>
    <Card/>
    <Song/>
    </>
  )
}

export default App;