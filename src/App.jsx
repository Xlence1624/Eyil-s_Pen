import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Blog from './pages/Blog.jsx'
import FullArticle from './pages/FullArticle.jsx'

const App = () => {
  return (
    <div >
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/a/:id' element={<FullArticle/>} />
          <Route path='/all_article' element={<FullArticle />} />
      
    </Routes>
    </div>
  )
}

export default App
