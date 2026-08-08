import React from 'react'
import NavBar from '../components/NavBar.jsx'
import Header from '../components/Header.jsx'
import Bloglist from '../components/Bloglist.jsx'
import NewsLetter from '../components/NewsLetter.jsx'
import Footer from '../components/Footer.jsx'

const Home = () => {
  return (
    <>
      <NavBar />
      <Header/>
      <Bloglist/>
      <NewsLetter/>
      <Footer/>
    </>
  )
}

export default Home
