import React from 'react'
import Headers from './Header.jsx'
import { blog_data } from '../data/Articles.js'
import ArticleCard from './ArticleCard.jsx'
import Categories from './Categories.jsx'
import Newsletter from './NewsLetter.jsx'
import Footer from './Footer.jsx'
import Scroll from './Scroll.jsx'
import { useNavigate } from 'react-router-dom'
import {assets} from "../assets/assets"

const Relationships = () => {
      const filteredArticles =
      blog_data.filter((article) => article.category === "relationships"
          );
          const navigate = useNavigate();
  return (
 <div className='flex flex-col justify-between gap-9 '>
        <Scroll/>
     <Headers />


   <section className="hero">

      <div className="container">

        <div className="hero-grid">

          <div className="hero-copy">

            {/* <span className="eyebrow">
              A thought on work ethics
            </span> */}

            <h1>Love, marriage, friendship and the people in between.         </h1>

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

            
            src={assets.relationship}
            alt="Coffee beside a quiet window"
            />
          </div>

        </div>

      </div>

    </section>


          <div className="article-grid p-3 ">
     
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

export default Relationships