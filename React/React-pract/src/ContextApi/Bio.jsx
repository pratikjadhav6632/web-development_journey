import react, { useContext } from "react";
import { BioContext } from "./Context";


export const Bio=()=>{

    const users=useContext(BioContext);
    return (
        <>
        <h1>Context name is {users.name} </h1>
        <h1>Context age is {users.age} </h1>
        </>
    )
}