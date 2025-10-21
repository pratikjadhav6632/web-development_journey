import react from "react";
import {useForm} from "react-hook-form"
function Form2(){
    const {register,handleSubmit,reset}=useForm();
    const handleFormSubmit=(data)=>{
      console.log(data);
       reset();
    }
    return(
        <>
        <div className=" w-full bg-zinc-50 mt-10 flex justify-center">

        <form  className="w-60 h-40 p-4 flex-wrap border-2 rounded" action="" onSubmit={handleSubmit(handleFormSubmit)}>
            <h1 className="italic font-semibold">React hook form</h1>
            <input className="border-2 rounded mt-1" {...register("name")} type="text" name="name" placeholder="Name" />
            <input className="border-2 rounded mt-1" {...register("email")} type="email" name="email" placeholder="abc@gmail.com" />
            <input className="border-2 rounded mt-1" type="submit"  />
        </form>
        </div>
            
        </>
    )
}

export default Form2;