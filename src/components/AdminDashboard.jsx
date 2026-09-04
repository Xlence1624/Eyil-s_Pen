import React from 'react'
import { useState } from 'react';
import AdminHeader from './AdminHeader.jsx';

import Post from  "./Post.jsx"
import PostOverview from "./PostOverview.jsx"
const AdminDashboard = () => {
const [activePage, setActivePage] = useState('dashboard');
    // const dashboardicon = (
    //     <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    //         <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5Zm16 14a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2ZM4 13a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6Zm16-2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6Z" />
    //     </svg>
    // );

    // const overviewicon = (
    //     <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    //         <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M7.111 20A3.111 3.111 0 0 1 4 16.889v-12C4 4.398 4.398 4 4.889 4h4.444a.89.89 0 0 1 .89.889v12A3.111 3.111 0 0 1 7.11 20Zm0 0h12a.889.889 0 0 0 .889-.889v-4.444a.889.889 0 0 0-.889-.89h-4.389a.889.889 0 0 0-.62.253l-3.767 3.665a.933.933 0 0 0-.146.185c-.868 1.433-1.581 1.858-3.078 2.12Zm0-3.556h.009m7.933-10.927 3.143 3.143a.889.889 0 0 1 0 1.257l-7.974 7.974v-8.8l3.574-3.574a.889.889 0 0 1 1.257 0Z" />
    //     </svg>
    // );

    // const chaticon = (
    //     <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    //         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 9h5m3 0h2M7 12h2m3 0h5M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-6.616a1 1 0 0 0-.67.257l-2.88 2.592A.5.5 0 0 1 8 18.477V17a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
    //     </svg>
    // );

      const sidebarLinks = [
        { id: "dashboard", name: "Admin Dashboard",  icon: dashboardicon, component: <Post /> },
        { id: "overview", name: "Posts Analytics",  icon: overviewicon, component: <PostOverview /> },
        { id: "chat", name: "Comments approval", icon: chaticon, component: <PostOverview /> },
    ];

  const currentPage = sidebarLinks.find(item => item.id === activePage);


    return (
        <>
          
            <AdminHeader />

            <div className="flex">

 <aside className="md:w-64 w-16 border-r h-[550px] text-base border-gray-300 pt-4 flex flex-col transition-all duration-300">
                {sidebarLinks.map((item, index) => (
                    <button
                        className={`flex items-center py-3 px-4 gap-3 
                            ${activePage === item.id ? "border-r-4 md:border-r-[6px] bg-[#183c32] border-[#b89555] text-white"
                                : "hover:bg-gray-100/90 border-white text-[#183c32] "
                            }`
                        }
                        key={item.id}
                        onClick={() => {
                            setActivePage(item.id);
                           
                        }}
                    >
                        {item.icon}
                        <span className="md:block hidden text-center">{item.name}</span>
                    </button>
                ))}
               
            </aside>
<div className="flex-1 ">
                {currentPage ? currentPage.component : <Post />}
</div>
            </div>
           

        </>
    );
}

export default AdminDashboard