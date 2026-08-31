import React from "react";
import Hero from "../components/Hero";
import Header from "../components/Header";
import {  blog_data  } from "../data/Articles";
import About from "../components/About";
import ArticleCard from "../components/ArticleCard";
import Newsletter from "../components/NewsLetter"
import Categories from "../components/Categories";
import Footer from "../components/Footer"
import { useNavigate } from "react-router-dom";
import { useState } from "react";


export default function Home() {
  const navigate = useNavigate();

const [selectedCategory, setSelectedCategory] = useState("everything-in-between");
  const filteredArticles =
  selectedCategory === "everything-in-between"
    ? blog_data.slice(0,6)
    : blog_data.filter(
        (article) => article.category === selectedCategory
      ).slice(0,6);

  return (
    <>

      <Header selectedCategory={selectedCategory}

setSelectedCategory={setSelectedCategory}/>

      <main>

        <Hero />


        {/* WORTH READING */}

        <section className="worth-reading">

          <div className="container">

            <div className="section-top">

              <div>

                <div className="eyebrow">
                  Curated for You
                </div>

                <h2 className="section-heading">
                  Worth Reading
                </h2>

              </div>

              <p
     onClick={() => navigate("/everything")}
                className="btn btn-outline cursor-pointer"
              >
                View Everything
              </p>

            </div>


            <div className="article-grid">

           {filteredArticles.map((article) => (
  <ArticleCard
    article={article}
    key={article._id}
  />
))}

            </div>

          </div>

        </section>


        <Categories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>

        <About />

        <Newsletter />


        {/* IMAGE STRIP */}

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

      </main>

     

    </>
  );
}
