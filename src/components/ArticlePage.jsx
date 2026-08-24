import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Header from "../components/Header";
import Newsletter from "../components/NewsLetter"

import Footer from "../components/Footer";

import { blog_data } from "../data/Articles.js";

export default function ArticlePage() {
  const { slug } = useParams();

  const article = blog_data[0];

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const percentage =
        documentHeight > 0
          ? (scrollTop / documentHeight) * 100
          : 0;

      setProgress(Math.min(100, percentage));
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (article) {
      document.title = `${article.title} — eyilzpen`;
    }
  }, [article]);

  if (!article) {
    return (
      <>
        

        <main className="article-404">
          <span className="eyebrow">404</span>

          <h1>
            This story seems to have wandered off.
          </h1>

          <a href="/" className="btn btn-primary">
            Back to eyilzpen
          </a>
        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      {/* READING PROGRESS */}

      <div
        className="reading-progress"
        style={{ width: `${progress}%` }}
      />


    

      <main>

        {/* =====================================
            ARTICLE HERO
        ===================================== */}

        <header className="article-hero">

          <div className="article-hero-inner">

            <div className="article-category-row">

              <span className="eyebrow">
                {article.category}
              </span>

              <span className="article-separator">
                /
              </span>

              <span>
                {article.readTime}
              </span>

            </div>


            <h1>
              {article.title}
            </h1>


            <p className="article-deck">
              {article.excerpt}
            </p>


            <div className="article-author-row">

              <div className="author-avatar">
                E
              </div>

              <div>

                <div className="author-name">
                  {article.author}
                </div>

                <div className="author-meta">
                  {article.date}
                </div>

              </div>

            </div>

          </div>

        </header>


        {/* =====================================
            HERO IMAGE
        ===================================== */}

        <figure className="article-cover">

          <img
            src={article.image}
            alt={article.title}
          />

          <figcaption>
            A quiet moment worth paying attention to.
          </figcaption>

        </figure>


        {/* =====================================
            CONTENT AREA
        ===================================== */}

        <section className="article-layout">

          {/* LEFT SIDEBAR */}

          <aside className="article-sidebar">

            <div className="sidebar-inner">

              <span className="sidebar-label">
                On this page
              </span>

              <nav>

                <a href="#beginning">
                  The beginning
                </a>

                <a href="#repetition">
                  The quiet power of repetition
                </a>

                <a href="#becoming">
                  Who are you becoming?
                </a>

                <a href="#choose">
                  Choose again
                </a>

              </nav>


              <div className="sidebar-share">

                <span className="sidebar-label">
                  Share
                </span>

                <button>
                  X
                </button>

                <button>
                  in
                </button>

                <button
                  onClick={() =>
                    navigator.clipboard.writeText(
                      window.location.href
                    )
                  }
                >
                  ↗
                </button>

              </div>

            </div>

          </aside>


          {/* MAIN ARTICLE */}

          <article className="article-content">

            <div id="beginning">
<p dangerouslySetInnerHTML={{__html: article.description}} ></p>

              <p className="lead-paragraph">
                There is something strangely comforting
                about imagining that our lives are shaped
                by the big decisions.
              </p>

              <p>
                The career we choose. The person we marry.
                The city we move to. The opportunities we
                accept or reject.
              </p>

              <p>
                But most of life does not happen in those
                moments. Most of life happens in between
                them.
              </p>

              <p>
                It happens on ordinary Tuesdays. In the five
                minutes before bed. In the conversations we
                keep having. In the habits we return to when
                nobody is watching.
              </p>

            </div>


            {/* PULL QUOTE */}

            <blockquote className="article-pullquote">

              <span>
                “
              </span>

              <p>
                Our lives are often less a product of what
                we decide once and more a product of what
                we decide repeatedly.
              </p>

            </blockquote>


            {/* SECTION */}

            <section id="repetition">

              <h2>
                The quiet power of repetition
              </h2>

              <p>
                A single decision can change the direction
                of a life, but repetition determines whether
                that direction becomes a destination.
              </p>

              <p>
                Reading one book does not make you a reader.
                Going to the gym once does not make you
                healthy. Having one meaningful conversation
                does not automatically create a meaningful
                relationship.
              </p>

              <p>
                The ordinary things we repeatedly do
                eventually become extraordinary forces in
                our lives.
              </p>

            </section>


            


            {/* SECTION */}

            <section id="becoming">

              <h2>
                Who are you becoming?
              </h2>

              <p>
                Perhaps one of the better questions we can
                ask ourselves is not simply, “What do I
                want?” but “Who am I becoming?”
              </p>

              <p>
                The question moves us away from immediate
                gratification and toward formation.
              </p>

              <p>
                It makes us examine our habits, our
                relationships, our work and even the way we
                spend our attention.
              </p>

            </section>


            {/* CALLOUT */}

            <div className="article-callout">

              <span className="eyebrow">
                A thought to carry with you
              </span>

              <p>
                Every repeated choice is quietly casting a
                vote for the person we are becoming.
              </p>

            </div>


            {/* SECTION */}

            <section id="choose">

              <h2>
                Choose again
              </h2>

              <p>
                Maybe the point is not to construct a
                perfect life.
              </p>

              <p>
                Maybe the point is to become increasingly
                intentional about the life we are
                constructing.
              </p>

              <p>
                Choose the conversation. Choose the
                discipline. Choose the relationship. Choose
                the work. Choose the faith.
              </p>

              <p>
                Choose the small thing that, repeated long
                enough, becomes part of who you are.
              </p>

              <p>
                Because eventually, the things we repeatedly
                choose stop feeling like choices.
              </p>

              <p className="final-line">
                They become us.
              </p>

            </section>


            {/* END OF ARTICLE */}

            <div className="article-end">

              <span>
                ✦
              </span>

              <p>
                End of essay
              </p>

            </div>


            {/* AUTHOR */}

            <div className="article-author-card">

              <div className="large-author-avatar">
                IyanuOluwa Temitope Araba
              </div>

              <div>

                <span className="eyebrow">
                  Written by
                </span>

                <h3>
                  Eyilzpen
                </h3>

                <p>
                  Thoughts on faith, relationships,
                  lifestyle, work, money and everything
                  in between.
                </p>

              </div>

            </div>

          </article>

        </section>


        {/* =====================================
            RELATED STORIES
        ===================================== */}

        <section className="article-related">

          <div className="container">

            <div className="related-heading">

              <div>
                <span className="eyebrow">
                  Keep Reading
                </span>

                <h2>
                  You might also like
                </h2>
              </div>

              <a
                href="/articles"
                className="btn btn-outline"
              >
                All essays
              </a>

            </div>


            <div className="related-grid">

              <a
                href="/articles/lead-a-family-spiritually"
                className="related-card"
              >

                <span className="eyebrow">
                  Faith
                </span>

                <h3>
                  What Does It Really Mean to Lead a
                  Family Spiritually?
                </h3>

                <span>
                  Read essay →
                </span>

              </a>


              <a
                href="/articles/your-salary-is-not-your-wealth"
                className="related-card"
              >

                <span className="eyebrow">
                  Money
                </span>

                <h3>
                  Your Salary Is Not Your Wealth
                </h3>

                <span>
                  Read essay →
                </span>

              </a>


              <a
                href="/articles/sometimes-love-is-not-the-problem"
                className="related-card"
              >

                <span className="eyebrow">
                  Relationships
                </span>

                <h3>
                  Sometimes Love Is Not the Problem
                </h3>

                <span>
                  Read essay →
                </span>

              </a>

            </div>

          </div>

        </section>


        <Newsletter />

      </main>

      
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

      <Footer />

    </>
  );
}