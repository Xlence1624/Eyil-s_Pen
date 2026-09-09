// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// import Header from "./Header.jsx";
// import Newsletter from "./NewsLetter.jsx";

// import Footer from "./Footer.jsx";

// import { blog_data } from "../data/Articles.js";
// import { useNavigate } from "react-router-dom";
// import Comments from "./Comments.jsx";
// import axios from "../api/axios.js;"

// export default function FromDbPage() {


// const { id } = useParams();
  
//  useEffect(() => {
//     // Make the Axios GET request
//     axios.get('https://herblogg.vercel.app/api/post')
//       .then(response => {
//         setPost(response.data); // Axios wraps data in response.data
//       })
//       .catch(error => {
//         console.error("Error fetching data with axios", error);
//       });
//   }, [id]);
// const [post, setPost] = useState([]);
// const article = post.find((item) => String(item._id) === String(id));


//   const navigate = useNavigate();
  

//   const [progress, setProgress] = useState(0);

//   const [comments, setComments] = useState([
//   {
//     id: 1,
//     author: "Michael",
//     text: "Great article!",
//   },
// ]);

// const [newComment, setNewComment] = useState("");



// const handleAddComment = () => {
//   if (!newComment.trim()) return;

//   const comment = {
//     id: Date.now(),
//     author: "Guest User",
//     text: newComment,
//   };

//   setComments((prevComments) => [
//     ...prevComments,
//     comment,
//   ]);

//   setNewComment("");
// };

//   useEffect(() => {
//     window.scrollTo(0, 0);

//     const handleScroll = () => {
//       const scrollTop = window.scrollY;

//       const documentHeight =
//         document.documentElement.scrollHeight - window.innerHeight;

//       const percentage =
//         documentHeight > 0 ? (scrollTop / documentHeight) * 100 : 0;

//       setProgress(Math.min(100, percentage));
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     if (article) {
//       document.title = `${article.title} — eyilzpen`;
//     }
//   }, [article]);

//   if (!article) {
//     return (
//       <>
//         <main className="article-404">
//           <span className="eyebrow">404</span>

//           <h1>This story seems to have wandered off.</h1>

//           <a href="/" className="btn btn-primary">
//             Back to eyilzpen
//           </a>
//         </main>

//         <Footer />
//       </>
//     );
//   }

//   return (
//     <>
//       {/* READING PROGRESS */}

//       <div className="reading-progress" style={{ width: `${progress}%` }} />

       

//       <main>
//         {/* =====================================
//             ARTICLE HERO
//         ===================================== */}

//         <header className="article-hero">
//           <div className="article-hero-inner">
//             <div className="article-category-row">
//               <span className="eyebrow">{ post.category}</span>

//               <span className="article-separator">/</span>

//               <span>{article.readTime}</span>
//             </div>

//             <h1>{article.title}</h1>

//             <p className="article-deck">{article.excerpt}</p>

//             <div className="article-author-row">
//               <div className="author-avatar">E</div>

//               <div>
//                 <div className="author-name">{article.author}</div>

//                 <div className="author-meta">{article.date }</div>
//               </div>
//             </div>
//           </div>
//         </header>

//         {/* =====================================
//             HERO IMAGE
//         ===================================== */}

//         <figure className="article-cover ">
//           <img src={article.image || post.image} alt={article.title || post.title} />

//           {/* <figcaption>{article.category}</figcaption> */}
//         </figure>

//         {/* =====================================
//             CONTENT AREA
//         ===================================== */}

//         <section className="article-layout">
//           {/* LEFT SIDEBAR */}

//           <aside className="article-sidebar">
//             <div className="sidebar-inner">
//               <span className="sidebar-label"></span>

//               <nav>
//                 <a href="#beginning">The intro</a>

//                 <a href="#repetition">The quiet power of repetition</a>

//                 <a href="#becoming">Who are you becoming?</a>

//                 <a href="#choose">Choose again</a>
//               </nav>

//               <div className="sidebar-share">
//                 <span className="sidebar-label">Share</span>

//                 <button>X</button>

//                 <button>in</button>

//                 <button
//                   onClick={() =>
//                     navigator.clipboard.writeText(window.location.href)
//                   }
//                 >
//                   ↗
//                 </button>
//               </div>
//             </div>
//           </aside>

//           {/* MAIN ARTICLE */}

//           <article className="article-content">
//             <div id="beginning" className="text-blue-100">
//              <p dangerouslySetInnerHTML={{ __html: article.description}}></p>
//             </div>

//             {/* AUTHOR */}

//             <div className="article-author-card">
//               <div className="large-author-avatar">E</div>

//               <div>
//                 <span className="eyebrow">Written by</span>

//                 <h3>IyanuOluwa T Araba</h3>

//                 <p>
//                   Thoughts on faith, relationships, lifestyle, work, money and
//                   everything in between.
//                 </p>
//               </div>
//             </div>
//           </article>
//         </section>

//         <Comments/>

// {/* 
//         <textarea
//   value={newComment}
//   onChange={(e) => setNewComment(e.target.value)}
//   placeholder="Write a comment..."
// />

// <button onClick={handleAddComment}>
//   Post Comment
// </button>



// <div className="comments">
//   {comments.map((comment) => (
//     <div key={comment.id}>
//       <h4>{comment.author}</h4>
//       <p>{comment.text}</p>
//     </div>
//   ))}
// </div> */}

//         {/* =====================================
//             RELATED STORIES
//         ===================================== */}

//         <section className="article-related">
//           <div className="container">
//             <div className="related-heading">
//               <div>
//                 <span className="eyebrow">Keep Reading</span>

//                 <h2>You might also like</h2>
//               </div>

//               <p onClick={() => navigate("/everything")} className="btn btn-outline">
//                 All essays
//               </p>
//             </div>

//             <div className="related-grid">
//               <a
//                 href="/articles/lead-a-family-spiritually"
//                 className="related-card"
//               >
//                 <span className="eyebrow">Faith</span>

//                 <h3>What Does It Really Mean to Lead a Family Spiritually?</h3>

//                 <span>Read essay →</span>
//               </a>

//               <a
//                 href="/articles/your-salary-is-not-your-wealth"
//                 className="related-card"
//               >
//                 <span className="eyebrow">Finance</span>

//                 <h3>Your Salary Is Not Your Wealth</h3>

//                 <span>Read essay →</span>
//               </a>

//               <a
//                 href="/articles/sometimes-love-is-not-the-problem"
//                 className="related-card"
//               >
//                 <span className="eyebrow">Relationships</span>

//                 <h3>Sometimes Love Is Not the Problem</h3>

//                 <span>Read essay →</span>
//               </a>
//             </div>
//           </div>
//         </section>

//         <Newsletter />
//       </main>

//       <section className="image-strip ">
//         <img
//           src="https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=700&q=80"
//           alt=""
//         />

//         <img
//           src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=700&q=80"
//           alt=""
//         />

//         <img
//           src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=700&q=80"
//           alt=""
//         />

//         <img
//           src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=700&q=80"
//           alt=""
//         />

//         <img
//           src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=700&q=80"
//           alt=""
//         />
//       </section>

//       <Footer />
//     </>
//   );
// }



import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import header from "../components/Header.jsx";
import Newsletter from "./NewsLetter.jsx";
import Footer from "./Footer.jsx";
import Comments from "./Comments.jsx";

export default function FromDbPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [progress, setProgress] = useState(0);

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

        setArticle(response.data.post);
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
              {article.excerpt || article.content?.slice(0, 160)}
            </p>

            <div className="article-author-row">

              <div className="author-avatar">
                E
              </div>

              <div>
                <div className="author-name">
                  {article.author?.name || article.author}
                </div>

                <div className="author-meta">
                  {article.date || article.createdAt}
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

        </figure>


        {/* =====================================
            CONTENT AREA
        ===================================== */}
        <section className="article-layout">

          {/* LEFT SIDEBAR */}
          <aside className="article-sidebar">

            <div className="sidebar-inner">

              <span className="sidebar-label">
                Contents
              </span>

              <nav>
                <a href="#beginning">
                  The intro
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

            <div
              id="beginning"
              className="article-body"
              // dangerouslySetInnerHTML={{
              //   __html: article.description || article.content
              // }}
            >{article.content}</div> 

            {/* AUTHOR */}
            <div className="article-author-card">

              <div className="large-author-avatar">
                E
              </div>

              <div>

                <span className="eyebrow">
                  Written by
                </span>

                <h3>
                  IyanuOluwa T Araba
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
