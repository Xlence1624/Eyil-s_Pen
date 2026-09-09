import React from 'react'
import NavBar from "../components/NavBar"
import Header from '../components/Header'

import  { useState, useEffect } from 'react';
import axios from '../api/axios';

import { useNavigate } from 'react-router-dom';
import { blog_data } from '../data/Articles';
import ArticleCard from '../components/ArticleCard';
import Categories from '../components/Categories';
import About from '../components/About';
import Newsletter from '../components/NewsLetter.jsx';
import Scroll from '../components/Scroll';
import Footer from '../components/Footer';
import Fromdb from '../components/Fromdb';
const Everything = () => {
  const [posts, setPost] = useState([]);


      const navigate = useNavigate();


  useEffect(() => {
    // Make the Axios GET request
    axios.get('https://herblogg.vercel.app/api/posts')
      .then(response => {
        setPost(response.data.posts); // Axios wraps data in response.data
      })
      .catch(error => {
        console.error("Error fetching data with axios", error);
      });
  }, []);

  const filteredArticles =
  blog_data.filter((article) => article.category === "life" || article.category === "work" || article.category === "finance" || article.category === "relationships" || article.category === "faith"  
      );
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

            <h1>
  Everything else that shapes how we see life.       </h1>

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

            // src={assets.office2}
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1400&q=85"
              alt="Coffee beside a quiet window"
            />
          </div>

        </div>

      </div>

    </section>


          <div className="article-grid p-3 ">





                    {posts.map((post) => (
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

export default Everything