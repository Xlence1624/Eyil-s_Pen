import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='mx-8 sm:mx-16 xl:mx-24 relative flex items-center flex-col  justify-center mt-18 sm:mt-10  text-center'>
      <div className=" mt-10 mb-8">
<div className="inline-flex items-center justify-center gap-4 px-6 py-1.5 mb-4 border border-primary/40 bg-primary/10 rounded-full text-sm text-primary">
  <p>Welcome to the Eyilz' Universe</p>
  <img src={assets.star_icon} alt="Star Icon" className="w-2.5"/>
</div>



      </div>
          <h1 className="text-3xl sm:text-6xl  font-semibold sm:leading-16 text-gray-700 text-center">Eyilz' own   <span className="text-primary">blogging </span> platform.</h1>
  <p className='my-6 sm:my-8 max-w-2xl m-auto text-xs text-gray-500 italic'> ME!!! …one who communicates better through writing and it is also my escape from anything, everything! Ah! Yes! I do ‘non-fictional fiction’, if there’s anything of sort. No one has a 100% ability to reach out to the world but then, we impact our individual spaces to the degree that we can. … reaching out to a few who in turn will reach out to others. This in mind, we are assured of a ‘close to perfect’ world. I will really appreciate feedbacks/comments.I love us all 💕💕</p>
  <form className="flex justify-between max-w-lg max-sm:scale-75 mx-auto border border-gray-300 bg-white rounded overflow-hidden focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
    <input type="text"  placeholder="Search for blogs" className="w-full pl-4 outline-none" />

    <button className="bg-primary text-white px-8 py-2 m-1.5 rounded hover:scale-105 transition-all cursor-pointer " type="submit" > 
      Search
    </button>
  </form>
      <img src={assets.gradientBackground} alt="Gradient Background"  className="absolute -top-20 -z-1 opacity-50"/>
      
    </div>
  )
}

export default Header
