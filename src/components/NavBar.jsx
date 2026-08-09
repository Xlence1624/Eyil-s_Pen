import React from 'react'

import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
const navigate  = useNavigate()


  return (
    <div className="flex justify-between items-center py-5 mx-3 sm:mx-20 xl:mx-32  ">
      <div className="flex items-center gap-3   cursor-pointer" onClick={()=>navigate("/")}>
        
           <img src={assets.eyilslogo} alt="Logo"  className=" w-16 rounded-full  " />
        
 
  <h1 className="text-2xl sm:text-4xl text-gray-700 font-bold">Eyilz' Pen</h1>
      </div>
    
      <button  onClick={()=>navigate("/admin")} className="flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5 ">Login
        <img src={assets.arrow} className="w-3" alt="arrow" />
      </button>

    </div>
  )
}

export default NavBar
