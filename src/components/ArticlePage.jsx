import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Header from "../components/Header";
import Newsletter from "../components/NewsLetter.jsx";

import Footer from "../components/Footer";

import { blog_data } from "../data/Articles.js";
import { useNavigate } from "react-router-dom";
import Comments from "./Comments.jsx";


export default function ArticlePage() {


const { id } = useParams();
const article = blog_data.find((item) => String(item._id) === String(id));


  const navigate = useNavigate();
  

  const [progress, setProgress] = useState(0);

  const [comments, setComments] = useState([
  {
    id: 1,
    author: "Michael",
    text: "Great article!",
  },
]);

const [newComment, setNewComment] = useState("");

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

const handleAddComment = () => {
  if (!newComment.trim()) return;

  const comment = {
    id: Date.now(),
    author: "Guest User",
    text: newComment,
  };

  setComments((prevComments) => [
    ...prevComments,
    comment,
  ]);

  setNewComment("");
};

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const percentage =
        documentHeight > 0 ? (scrollTop / documentHeight) * 100 : 0;

      setProgress(Math.min(100, percentage));
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
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

          <h1>This story seems to have wandered off.</h1>

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

      <div className="reading-progress" style={{ width: `${progress}%` }} />

       

      <main>
        {/* =====================================
            ARTICLE HERO
        ===================================== */}

        <header className="article-hero">
          <div className="article-hero-inner">
            <div className="article-category-row">
              <span className="eyebrow">{article.category }</span>

              <span className="article-separator">/</span>

              <span>{article.readTime}</span>
            </div>

            <h1>{article.title }</h1>

            <p className="article-deck">{article.excerpt}</p>

            <div className="article-author-row">
              <div className="author-avatar">E</div>

              <div>
                <div className="author-name">{article.author }</div>

                <div className="author-meta">{article.date }</div>
              </div>
            </div>
          </div>
        </header>

        {/* =====================================
            HERO IMAGE
        ===================================== */}

        <figure className="article-cover object-top ">
          <img src={article.image } alt={article.title} className="object-top" />

          {/* <figcaption>{article.category}</figcaption> */}
        </figure>

        {/* =====================================
            CONTENT AREA
        ===================================== */}

        <section className="article-layout">
          {/* LEFT SIDEBAR */}

          <aside className="article-sidebar">
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
          </aside>

          {/* MAIN ARTICLE */}

          <article className="article-content">
            <div id="beginning" className="text-blue-100">
             <p dangerouslySetInnerHTML={{ __html: article.description}}></p>
            </div>
<div className="flex justify-center py-8 ">
     <button
          onClick={handleNativeShare}
         
          className="px-4 py-1.5 bg-[#183c32] text-white font-medium  rounded disabled:opacity-50 sm:hidden"
        >
          Share → 
        </button>
</div>
            {/* AUTHOR */}

            <div className="article-author-card">
              <div className="large-author-avatar">E</div>

              <div>
                <span className="eyebrow">Written by</span>

                <h3>IyanuOluwa T Araba</h3>

                <p>
               ME!!! …one who communicates better through writing and it is also my escape from anything, everything!
                </p>
              </div>
            </div>
          </article>
        </section>

        <Comments/>

{/* 
        <textarea
  value={newComment}
  onChange={(e) => setNewComment(e.target.value)}
  placeholder="Write a comment..."
/>

<button onClick={handleAddComment}>
  Post Comment
</button>



<div className="comments">
  {comments.map((comment) => (
    <div key={comment.id}>
      <h4>{comment.author}</h4>
      <p>{comment.text}</p>
    </div>
  ))}
</div> */}

        {/* =====================================
            RELATED STORIES
        ===================================== */}

        <section className="article-related">
          <div className="container">
            <div className="related-heading">
              <div>
                <span className="eyebrow">Keep Reading</span>

                <h2>You might also like</h2>
              </div>

              <p onClick={() => navigate("/everything")} className="btn btn-outline">
                All essays
              </p>
            </div>

            <div className="related-grid">
              <a
                href="/articles/lead-a-family-spiritually"
                className="related-card"
              >
                <span className="eyebrow">Faith</span>

                <h3>What Does It Really Mean to Lead a Family Spiritually?</h3>

                <span>Read essay →</span>
              </a>

              <a
                href="/articles/your-salary-is-not-your-wealth"
                className="related-card"
              >
                <span className="eyebrow">Finance</span>

                <h3>Your Salary Is Not Your Wealth</h3>

                <span>Read essay →</span>
              </a>

              <a
                href="/articles/sometimes-love-is-not-the-problem"
                className="related-card"
              >
                <span className="eyebrow">Relationships</span>

                <h3>Sometimes Love Is Not the Problem</h3>

                <span>Read essay →</span>
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
