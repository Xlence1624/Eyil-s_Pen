import React from 'react'

import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
const navigate  = useNavigate()


  return (
    <div className="flex justify-between items-center py-5 mx-3 sm:mx-20 xl:mx-32  ">
      <div className="flex items-center gap-2 cursor-pointer" onClick={()=>navigate("/")}>
        <div  className="w-8  border bg-primary relative flex items-center justify-center border-primary rounded-full p-5  " >
           <img src={assets.pen_icon} alt="Logo"  className="absolute " />
        </div>
 
  <h1 className="text-2xl sm:text-4xl text-gray-700 font-bold">Eyilz' Pen</h1>
      </div>
    
      <button  onClick={()=>navigate("/admin")} className="flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5 ">Login
        <img src={assets.arrow} className="w-3" alt="arrow" />
      </button>

    </div>
  )
}

export default NavBar
