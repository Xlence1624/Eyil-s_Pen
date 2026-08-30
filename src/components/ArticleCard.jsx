import React from "react";
import { useNavigate } from "react-router-dom";

export default function ArticleCard({ article }) {
  const navigate = useNavigate();
  const {title, description, image, author, date, _id, category, readTime} = article
  // If the article prop hasn't loaded yet, prevent a crash
  if (!article) return null;

  return (
    <article
      className="article-card cursor-pointer"
      onClick={() => navigate(`/blog/${article._id}`)}
    >
      <div className="card-image">
         <img src={image} alt={title || "Article Image"} />
      </div>

      <div className="card-body">
        <span className="eyebrow">
          {category}
        </span>

        <h3>{title}</h3>
            
     
        <p className="mb-3 text-xs text-gray-500" dangerouslySetInnerHTML={{ __html: description.slice(0,100) }} />
    

        <div className="card-footer">
          <span>{readTime}</span>
          <span className="arrow">→</span>
        </div>
      </div>
    </article>
  );
}
