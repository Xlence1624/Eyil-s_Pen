import React from 'react'
import NavBar from "../components/NavBar"
import Header from '../components/Header'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { blog_data } from '../data/Articles';
import ArticleCard from '../components/ArticleCard';
import Categories from '../components/Categories';
import About from '../components/About';
import Newsletter from '../components/Newsletter.jsx';
import Scroll from '../components/Scroll';
import Footer from '../components/Footer';
const Everything = () => {



      const navigate = useNavigate();


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
Welcome to my mind, one post at a time.         </h1>

            <div className="gold-line" />

            <p>
          ME!!! …one who communicates better through writing and it is also my escape from anything, everything! Ah! Yes! I do ‘non-fictional fiction’, if there’s anything of sort. No one has a 100% ability to reach out to the world but then, we impact our individual spaces to the degree that we can. … reaching out to a few who in turn will reach out to others. This in mind, we are assured of a ‘close to perfect’ world. I will really appreciate feedbacks/comments.I love us all 💕💕
            </p>

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


          <div className="article-grid ">
     
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