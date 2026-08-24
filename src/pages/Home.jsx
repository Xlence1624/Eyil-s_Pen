import React from "react";
import Hero from "../components/Hero";
import Header from "../components/Header";
import { articles } from "../data/Articles";
import About from "../components/About";
import ArticleCard from "../components/ArticleCard";
import Newsletter from "../components/NewsLetter"
import Categories from "../components/Categories";
import Footer from "../components/Footer"


export default function Home() {

  return (
    <>

      <Header />

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

              <a
                href="/articles"
                className="btn btn-outline"
              >
                View Everything
              </a>

            </div>


            <div className="article-grid">

              {articles.map((article) => (
                <ArticleCard
                  article={article}
                  key={article.id}
                />
              ))}

            </div>

          </div>

        </section>


        <Categories />

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
