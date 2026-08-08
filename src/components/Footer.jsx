import React from 'react'
import { assets, footer_data } from '../assets/assets'
import { useNavigate } from 'react-router-dom'



const Footer = () => {
  const navigate = useNavigate()

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32  bg-primary/3  ">
{/* first */}
   <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0 border-b border-gray-500/30 py-10">

      <div className="flex flex-col md:flex-row items-center justify-center gap-5 py-10 border-b border-gray-500/30 text-gray-500">
    <div className="flex items-center gap-2 cursor-pointer" onClick={()=>navigate("/")}>
       <div  className="w-8  border bg-primary relative flex items-center justify-center border-primary rounded-full p-5  " >
             <img src={assets.pen_icon} alt="Logo"  className="absolute " />
          </div>
  <h1 className="text-2xl sm:text-4xl text-gray-700 font-bold">Eyilz' Pen</h1>
      </div>

 <p className="max-w-[410px] mt-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta magni quos dolore, numquam totam nisi nostrum aliquam repellendus laboriosam, sunt ipsa, impedit laborum repudiandae accusantium ratione debitis quod quam delectus.

</p>

      </div>
{/* second */}
      <div className="text-gray-500 flex flex-wrap justify-between w-full md:w-[45%] gap-8">
{
  footer_data.map(
    (section, index)=> (
      <div key={index}>
<h3 className="font-semibold text-base  md:mb-5 mb-2">{section.title}</h3>
<ul className="text-sm space-y-1">
  {section.links.map((link, i) => (
    <li className="" key={i}>
      <a href="#" className="hover:underline transition">{link}</a>
    </li>
  ))}
</ul>
      </div>
    )
  )
}
      </div>

   </div>
   
   
   
   
   


 <p className="py-4 text-center text-sm md:text-base text-gray-500">© 2026 Eyilz' Pen. All rights reserved.</p>

     
    </div>
  )
}

export default Footer
