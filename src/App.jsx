import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
// import Blog from './pages/Blog.jsx'
import FullArticle from './pages/FullArticle.jsx'
import Scroll from './components/Scroll.jsx' 
import Everything from './pages/Everything.jsx'
import AdminLogin from './components/AdminLogin.jsx'
import AdminDashboard from './components/AdminDashboard.jsx'
const App = () => {
  return (
    <div >
      <Scroll/>
    <Routes>
      
      <Route path='/' element={<Home />} />
      <Route path='/blog/:id' element={<FullArticle />} />
          <Route path='/admindashboard' element={<AdminDashboard />} />
          <Route path='/everything' element={<Everything />} />
            <Route path='/admin' element={<AdminLogin />} />
      
    </Routes>
    </div>
  )
}

export default App
