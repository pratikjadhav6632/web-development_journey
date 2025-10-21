import react from "react";
import Cards from "../Card/Cards"
import {useForm} from "react-hook-form"
function FormEx({handleFromSubmitData})
{
    const {register,handleSubmit,reset}=useForm();
    const HandleFormSubmit =(data)=>{
        console.log(data);
        handleFromSubmitData(data);
        reset();
    }
    return(
    <>
            {/* <Cards/> */}
            <div className="flex gap-5 justify-center py-10 ">
                <form action="" onSubmit={handleSubmit(HandleFormSubmit)}>
                <input className="border-1 mx-1 rounded-md text-center bg-white" placeholder="name"  {...register("name")} type="text" />
                <input className="border-1 mx-1 rounded-md text-center bg-white" placeholder="email" {...register("email")}  type="email" name="email" id="" />
                <input className="border-1 mx-1 rounded-md text-center bg-white" placeholder="Image url" {...register("image")}  type="text" name="image" id="" />
                <input className="border-1 mx-1 rounded-md text-center px-3 bg-blue-500 text-white" type="submit" value="Submit" />
                </form>
            </div>
    </>
    );
}

export default FormEx;