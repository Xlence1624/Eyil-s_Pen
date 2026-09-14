import React from 'react'
import Header from './Header'
import { blog_data } from '../data/Articles'
import ArticleCard from './ArticleCard'
import Categories from './Categories'
import Newsletter from './NewsLetter.jsx'
import Footer from './Footer'
import Scroll from './Scroll'
import { useNavigate } from 'react-router-dom'
import {assets} from "../assets/assets"
import { useState, useEffect } from 'react'
import axios from '../api/axios.js'
import Fromdb from './Fromdb.jsx'

const Faith = () => {

 const [faith, setFaith] = useState([])

//from db
useEffect(() => {
  // Make the Axios GET request
  axios.get('https://herblogg.vercel.app/api/posts')
    .then(response => {
    
     

      // 2. Safely grab the array if it's nested inside an object property (like 'posts' or 'data')
      const postsArray = Array.isArray(response.data) 
        ? response.data 
        : (response.data.posts || response.data.data || []);

      setFaith(postsArray); 
    })
    .catch(error => {
      console.error("Error fetching data with axios", error);
      setFaith([]); // Fallback to an empty array to prevent crashing on network failure
    });
}, []);


  const filteredFaith = faith.filter((article) => article.category === "Faith" );

//from the code asset
      const filteredArticles =
      blog_data.filter((article) => article.category === "faith"  
          );
          const navigate = useNavigate();
  return (
 <div className='flex flex-col justify-between gap-9 '>
        <Scroll/>
     <Header />


   <section className="hero">

      <div className="container">

        <div className="hero-grid">

          <div className="hero-copy">

            {/* <span className="eyebrow">
              A thought on work ethics
            </span> */}

            <h1>Thoughts on God, purpose and everything eternal.        </h1>

            <div className="gold-line" />

       
         

            <a
             onClick={() => navigate(`/everything`)} 
              className="btn btn-primary"
            >
              Explore <span>→</span>
            </a>

          </div>

          <div className="hero-image">
            <img

        src={assets.faith2}
             
            />
          </div>

        </div>

      </div>

    </section>


          <div className="article-grid p-3">

      {filteredFaith.map((post) => (
       <Fromdb
          post={post}
         key={post._id}
         title={post.title}
         content={post.content}
         image={post.image}
       />
     ))}





     
                {filteredArticles.map((article) => (
       <ArticleCard
         article={article}
         key={article._id}
       />
     ))}
     
                 </div>


        <Categories />

          
             <Newsletter/>   

                 <section className="image-strip ">

          <img
            src="https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=700&q=80"
            alt=""
          />

          <img
            src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=700&q=80"
            alt=""
          />

          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=700&q=80"
            alt=""
          />

          <img
            src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=700&q=80"
            alt=""
          />

          <img
            src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=700&q=80"
            alt=""
          />

        </section>
             <Footer/> 
    </div>
  )
}

export default Faith