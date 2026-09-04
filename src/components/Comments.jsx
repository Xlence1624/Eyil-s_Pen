import React from 'react'

const Comments = () => {
  return (
     <div className="p-2 sm:px-30 sm:py-5" >
           
            <div className="bg-white focus-within:border-green-500 transition border border-[#102D26] rounded-md flex flex-col  flex">
                <textarea className="rounded-md rounded-b-none p-2 pb-0 w-80 h-28 outline-none resize-none" placeholder="Add your comment..."></textarea>
                <div className="flex items-center justify-between px-2 pb-2">
                    <div className="flex items-center gap-3">
                        <button type="button" aria-label="Add photo" className=''>
                            <svg width="16" height="18" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.857 1.581c.574.575.862 1.33.862 2.085s-.287 1.51-.862 2.084l-6.663 6.664A1.756 1.756 0 0 1 3.711 9.93l4.647-4.647.795.796-4.646 4.646a.631.631 0 0 0 .892.892l6.663-6.664a1.825 1.825 0 0 0-2.58-2.58L2.818 9.04a3.018 3.018 0 0 0 4.267 4.267l5.772-5.773.795.795-5.771 5.773a4.145 4.145 0 0 1-5.858-.003 4.144 4.144 0 0 1 0-5.855L8.687 1.58a2.95 2.95 0 0 1 4.17.002" fill="#6B7280"/>
                            </svg>
                        </button>
                        <button type="button" aria-label="Add Emoji">
                            <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.334 9.333s1 1.333 2.667 1.333 2.666-1.333 2.666-1.333M6.001 6h.006m3.994 0h.006m4.66 2A6.667 6.667 0 1 1 1.334 8a6.667 6.667 0 0 1 13.333 0" stroke="#6B7280" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>
                     <p
             onClick={() => navigate(`/blog/${210}`)} 
              className="bg-[#183c32] rounded text-xm text-white px-2 hover:bg-green-500  cursor-pointer"
            >
              Post
            </p>
                </div>
            </div>
        </div>
  )
}

export default Comments