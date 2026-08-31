import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
// import Blog from './pages/Blog.jsx'
import FullArticle from './pages/FullArticle.jsx'
import Scroll from './components/Scroll.jsx' 
import Everything from './pages/Everything.jsx'

const App = () => {
  return (
    <div >
      <Scroll/>
    <Routes>
      
      <Route path='/' element={<Home />} />
      <Route path='/blog/:id' element={<FullArticle />} />
          <Route path='/all_article' element={<FullArticle />} />
          <Route path='/everything' element={<Everything />} />
      
    </Routes>
    </div>
  )
}

export default App
