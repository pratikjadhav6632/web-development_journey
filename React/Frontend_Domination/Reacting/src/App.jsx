import react, { useState } from "react";
import Card from "./component/Card";
import Song from "./component/Song"
import State from "./component/State"
import Card2 from "./component/Card2"
import Friend  from "./component/Friend";
import Navbar from "./component/Music/navbar";
import "./index.css";
import Music from "./component/Music/Music";
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

  const Mdata=[
    {name:"Unstopable",image:"https://images.unsplash.com/photo-1759188534271-be7832eff679?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",author:"ed shareen",added:false},
    {name:"beliver",image:"https://media.istockphoto.com/id/2164466808/photo/road-amidst-trees-in-forest.jpg?s=2048x2048&w=is&k=20&c=nP1IzPwDV0NtSIWa0Kb6YtbzbyCmtPziMQSJwvmAucQ= ",author:"dragon monster",added:false},
    {name:"yadein",image:" https://images.unsplash.com/photo-1530236668220-b9c6c098c9aa?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",author:"arjit singh",added:false},
    {name:"sayara",image:"https://plus.unsplash.com/premium_photo-1759256104816-7ad6036a984e?q=80&w=1159&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",author:"sonu nigam",added:false},
    {name:"one love",image:"https://plus.unsplash.com/premium_photo-1759256104413-6a3d1643235d?q=80&w=2087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",author:"ed shareen",added:false},
     {name:"sayara",image:" https://plus.unsplash.com/premium_photo-1728158950030-3e6a29cb3fe1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",author:"sonu nigam",added:true},
    {name:"one love",image:" https://images.unsplash.com/photo-1758645444266-68a04fe34d4d?q=80&w=689&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",author:"ed shareen",added:false},
  ]

  const [Mcard,setMcard]=useState(Mdata);

  const handlecard=(Mindex)=>{
    setMcard((prev2)=>{
      return prev2.map((items1,index1)=>{
        if(index1===Mindex){
            return {...items1,added:!items1.added}
        }
        return items1;
      })  
    })
  }

  
  return(
    <>

    <Navbar count={Mcard}/>
    <div className="w-full h-screen flex flex-wrap p-10">
        {Mcard.map((item,index)=>(
          <Music key={index} values={item} index={index} handleCard={handlecard}/>
        ))}
    </div>
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