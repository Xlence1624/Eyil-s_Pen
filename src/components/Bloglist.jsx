import React, { useState } from 'react'
import { blog_data, blogCategories } from '../assets/assets'
import { motion } from "motion/react"
import BlogCard from './BlogCard'

const Bloglist = () => {
  const [menu, setMenu] = useState("Everything in between")
  return (
    <div className="overflow-hidden">
      <div className="flex justify-start sm:justify-center gap-4 sm:gap-8  relative my-3   ">

        <div className=" overflow-x-auto snap-x snap-mandatory py-5 flex gap-3 px-2">
{
  blogCategories.map(
    (item) => (
      <div key={item} className="relative text-xs sm:text-sm ">
        <button
          ref={(el) => {
    if (menu === item && el) {
      el.scrollIntoView({ behavior: "smooth", inline: "center" });
    }
  }}
        onClick={()=>setMenu(item)}
        className={`cursor-pointer text-gray-500 text-nowrap ${menu === item && "text-white text-nowrap  px-3 pt-0.5"}`}>
          {item}
          {menu === item && (    <motion.div layoutId='underline' transition={{type: 'sping', stiffness: 500, damping: 30}}className="absolute left-0 right-0 -top-1 sm:-top-0.5 h-7 -z-1 bg-primary rounded-full">

          </motion.div>)}
      
        </button>

      </div>
    )
  )}
        </div>

      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-4 mx-8 sm:mx-16 xl:mx-40">
{blog_data.filter(
  (blog) => menu === "Everything in between" ? true : blog.category === menu     
).map(
  (blog) => <BlogCard key={blog._id} blog={blog} />
)}
      </div>
    </div>
  )
}

export default Bloglist
