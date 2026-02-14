import { NavLink } from "react-router-dom"

export const Header=()=>{
    return(
        <>
        <div className="border-2 border-blue-200 p-10">
            <div className="flex justify-center items-center">
                <ul className="flex gap-5">
                        <NavLink to='/' className={({ isActive }) => isActive ? "text-red-400 underline" : ""}>Home</NavLink>
                        <NavLink to='/about' className={({ isActive }) => isActive ? "text-red-400 underline" : ""}>About</NavLink>
                    <NavLink to='/contact' className={({ isActive }) => isActive ? "text-red-400 underline" : ""}>Contact</NavLink>
                    <NavLink to='/blog' className={({ isActive }) => isActive ? "text-red-400 underline" : ""}>Blog</NavLink>
                </ul>
            </div>
        </div>
        </>
    )
}