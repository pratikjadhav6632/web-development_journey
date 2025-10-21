import react, { useState } from "react";
import FormEx from "./FormEx";
import Cards from "../Card/Cards";

function Exer1(){
    const [users,setUsers]=useState([]);

    const handleFromSubmitData=(data)=>{
        setUsers([...users,data]);
    }

    const handleRemove=(id)=>{
        setUsers(()=>users.filter((item,index)=>index!=id));
    }
    return(
        <>
            <Cards handleRemove={handleRemove}  users={users}/>
            <FormEx handleFromSubmitData={handleFromSubmitData}/>
        </>
    )
}


export default Exer1;