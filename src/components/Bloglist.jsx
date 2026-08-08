import React, { useState, useRef, useEffect} from 'react'
import { blog_data, blogCategories } from '../assets/assets'
import { motion } from "motion/react"
import BlogCard from './BlogCard'

const Bloglist = () => {
  const [menu, setMenu] = useState("Everything in between")
  const buttonRefs = useRef({})
  const [hasMounted, setHasMounted] = useState(false)
const containerRef = useRef(null)


useEffect(() => {
  setHasMounted(true)
}, [])

useEffect(() => {
  if (hasMounted && buttonRefs.current[menu]) {
    buttonRefs.current[menu].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" })
  }
}, [menu, hasMounted])
 useEffect(() => {
    const container = containerRef.current
    const button = buttonRefs.current[menu]
    if (container && button) {
      const offsetLeft =
        button.offsetLeft - container.offsetWidth / 2 + button.offsetWidth / 2
      container.scrollTo({ left: offsetLeft, behavior: "smooth" })
    }
  }, [menu])
  return (
    <div className="overflow-hidden">
      <div className="  ">

        <div className=" relative overflow-x-auto py-5 flex gap-3 px-4 mb-4 sm:justify-center">
{
  blogCategories.map(
    (item) => (
      <div key={item} className="relative text-xs sm:text-sm ">
        <button
   ref={(el) => (buttonRefs.current[item] = el)}
        onClick={()=>setMenu(item)}
        className={`cursor-pointer text-gray-500 text-nowrap ${menu === item && "text-white text-nowrap  px-3 pt-0.5"}`}>
          {item}
          {menu === item && (    <motion.div layoutId='underline' transition={{type: 'spring', stiffness: 150, damping: 30}}className="absolute left-0 right-0 -top-1 sm:-top-0.5 h-7 -z-1 bg-primary rounded-full">

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
