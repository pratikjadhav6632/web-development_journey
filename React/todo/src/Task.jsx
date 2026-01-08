import react, { useState } from "react";

const Task=()=>{
    const [inputVal,setInputVal]=useState("");
    const [task,setTask]=useState([]);

    const handleInputval=(value)=>{
        setInputVal(value);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!inputVal)return;

        if(task.includes(inputVal)){
            console.log("avail")
            setTask('')
           
        }

        setTask((prev)=>[...prev,inputVal]);
        console.log(task)
        

        setInputVal('')
    }

    return (
        <>
                <h1>Task</h1>
        <div className="bg-gray-100 p-20  w-full h-full flex-col justify-center align-item-center">
            <div className="w-70 h-10 bg-white justify-center align-item-center " >
                <form action="" onSubmit={handleSubmit} >
                    <input
                className="border border-gray-100 h-10 w-45"
                 name="task"
                placeholder="Enter task here" 
                value={inputVal}
                onChange={((e)=>handleInputval(e.target.value))}
                />
                <button className="bg-blue-400 p-2 pl-5 pr-5 text-white rounded" >Add</button>
                </form>
            </div>
            <div>
                <ul className="color-red w-20 p-20">
                    {task.map((ele,index)=>{
                       return <li key={index}>
                            {ele}
                        </li>
                    })}
                </ul>
            </div>
        </div>
        
        </>
    )
}

export  default Task;