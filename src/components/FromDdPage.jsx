import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../api/axios.js";

import Newsletter from "./NewsLetter.jsx";
import Footer from "./Footer.jsx";
import Comments from "./Comments.jsx";
import Header from "../components/Header.jsx";
import Markdown from "react-markdown"

export default function FromDbPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [progress, setProgress] = useState(0);






  // Share functionality

  // Current URL of the article
const shareUrl = window.location.href;
const shareTitle = article?.post?.title || "Check out this article";

// 1. Native Web Share API (Mobile / Modern Browsers)
const handleNativeShare = async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: shareTitle,
        url: shareUrl,
      });
    } catch (err) {
      if (err.name !== "AbortError") {
        console.error("Error sharing:", err);
      }
    }
  } else {
    handleCopyLink();
  }
};

// 2. Share to X (Twitter)
const handleShareX = () => {
  const url = `https://x.com/intent/tweet?text=${encodeURIComponent(
    shareTitle
  )}&url=${encodeURIComponent(shareUrl)}`;
  window.open(url, "_blank", "noopener,noreferrer");
};

// 3. Share to LinkedIn
const handleShareLinkedIn = () => {
  const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    shareUrl
  )}`;
  window.open(url, "_blank", "noopener,noreferrer");
};

// 4. Copy Direct Link to Clipboard
const handleCopyLink = async () => {
  try {
    await navigator.clipboard.writeText(shareUrl);
    alert("Link copied to clipboard!");
  } catch (err) {
    console.error("Failed to copy link:", err);
  }
};

  /*
   * ==========================================
   * GET SINGLE POST FROM DATABASE
   * ==========================================
   */
  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);

        const response = await axios.get(
          `https://herblogg.vercel.app/api/post/${id}`
        );

        setArticle(response.data);
       } catch (error) {
        console.error("Error fetching post:", error);

        setError("Unable to load this article.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchPost();
    }
  }, [id]);

  /*
   * ==========================================
   * READING PROGRESS
   * ==========================================
   */
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

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*
   * ==========================================
   * PAGE TITLE
   * ==========================================
   */
  useEffect(() => {
    if (article) {
      document.title = `${article.title} — eyilzpen`;
    }
  }, [article]);

  /*
   * ==========================================
   * LOADING
   * ==========================================
   */
  if (loading) {
    return (
      <>
        <main className="min-h-screen flex items-center justify-center">
          <h2>Loading article...</h2>
        </main>

        <Footer />
      </>
    );
  }

  /*
   * ==========================================
   * ERROR / 404
   * ==========================================
   */
  if (error || !article) {
    return (
      <>
        <main className="min-h-screen flex flex-col items-center justify-center">
          <div className="text-center">
            <div className="text-6xl font-bold">
              404
            </div>

            <h1>
              This story seems to have wandered off.
            </h1>

            <button
              onClick={() => navigate("/")}
              className="btn btn-primary"
            >
              Back to eyilzpen
            </button>
          </div>
        </main>

        <Footer />
      </>
    );
  }

  /*
   * ==========================================
   * ARTICLE PAGE
   * ==========================================
   */
  return (
    <>
      {/* Reading progress */}
      <div
        className="reading-progress"
        style={{ width: `${progress}%` }}
      />

      <main>

        {/* =====================================
            ARTICLE HERO
        ===================================== */}
<Header/>

        <header className="article-hero">
          <div className="article-hero-inner">

            <div className="article-category-row">
              <span className="eyebrow">
                {article.post.category} 
              </span>

              <span className="article-separator">
                /
              </span>

              <span>
                {article.post.readTime} Minutes read
               
              </span>
            </div>

            <h1>
              {article.post.title}
            </h1>

            <p className="article-deck">
              {article.post.excerpt}
            </p>

            <div className="article-author-row">

              <div className="author-avatar">
                E
              </div>

              <div>
               

                <div className="author-meta">
                  {article.post.date}
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
            src={article.post.image}
            alt={article.post.title}
          />

        </figure>


        {/* =====================================
            CONTENT AREA
        ===================================== */}
        <section className="article-layout">

          {/* LEFT SIDEBAR */}
          <aside className="article-sidebar">

            <div className="sidebar-inner">

              <span className="sidebar-label">
          
              </span>

              <nav>
                <a href="#beginning">
                    {article.post.progressStamps[0]}
                </a>

                <a href="#repetition">
                 {article.post.progressStamps[1]}
                </a>

                <a href="#becoming">
                 {article.post.progressStamps[2]}
                </a>

                <a href="#choose">
                 {article.post.progressStamps[3]}
                </a>
              </nav>
<div className="sidebar-share">
  <span className="sidebar-label">
    Share
  </span>

  {/* Share to X (Twitter) */}
  <button 
    onClick={handleShareX}
    title="Share on X"
    aria-label="Share on X"
  >
    X
  </button>

  {/* Share to LinkedIn */}
  <button 
    onClick={handleShareLinkedIn}
    title="Share on LinkedIn"
    aria-label="Share on LinkedIn"
  >
    in
  </button>

  {/* Native Share or Copy Link */}
  <button 
    onClick={handleNativeShare}
    title="Share or Copy Link"
    aria-label="Share or Copy Link"
  >
    ↗
  </button>
</div>
             

            </div>

          </aside>


          {/* MAIN ARTICLE */}
          <article className="article-content">


        
        
             <div
              id="beginning"
              className="whitespace-pre-wrap "
            
           > <Markdown>{article.post.content}</Markdown></div>
<div className="flex justify-center py-8 ">
     <button
          onClick={handleNativeShare}
          disabled={loading}
          className="px-4 py-1.5 bg-[#183c32] text-white font-medium  rounded disabled:opacity-50 sm:hidden"
        >
          Share → 
        </button>
</div>
            {/* AUTHOR */}
            <div className="article-author-card">

              <div className="large-author-avatar">
                Eyils
              </div>

              <div>

                <span className="eyebrow">
                  Written by
                </span>

                <h3>
                  IyanuOluwa T Araba
                </h3>

                <p>
                ME!!! …one who communicates better through writing and it is also my escape from anything, everything!
                </p>

              </div>

            </div>

          </article>

        </section>


        {/* COMMENTS */}
        <Comments postId={article._id} />


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

              <p
                onClick={() =>
                  navigate("/everything")
                }
                className="btn btn-outline"
              >
                All essays
              </p>

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
                  Finance
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


      {/* IMAGE STRIP */}
      <section className="image-strip">

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


