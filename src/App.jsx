import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
// import Blog from './pages/Blog.jsx'
import FullArticle from './pages/FullArticle.jsx'
import Scroll from './components/Scroll.jsx' 
import Everything from './pages/Everything.jsx'
import AdminLogin from './components/AdminLogin.jsx'
import AdminDashboard from './components/AdminDashboard.jsx'
import Life from './components/Life.jsx'
import Work from './components/Work.jsx'
import Finance from './components/Finance.jsx'
import Relationships from './components/Relationships.jsx'
import Faith from './components/Faith.jsx'
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
        <Route path='/life' element={<Life />} />
          <Route path='/work' element={<Work />} />
          <Route path='/finance' element={<Finance />} />
            <Route path='/relationships' element={<Relationships />} />
              <Route path='/faith' element={<Faith />} />
    </Routes>
    </div>
  )
}

export default App
