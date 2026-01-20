import react ,{Children, createContext} from "react";

export const BioContext=createContext();

 const BioProvider=({children})=>{

    let users={name:"ajay",age:22};
  return(   
    <BioContext.Provider value={users}>
        {children}
    </BioContext.Provider>
    )
}

export default BioProvider;


