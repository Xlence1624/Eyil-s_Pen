import React from "react";
import { useNavigate } from "react-router-dom";

export default function ArticleCard({ article }) {
  const navigate = useNavigate();

  // If the article prop hasn't loaded yet, prevent a crash
  if (!article) return null;

  return (
    <article
      className="article-card cursor-pointer"
      onClick={() => navigate(`/blog/${article._id}`)}
    >
      <div className="card-image">
         <img src={article.image} alt={article.title || "Article Image"} />
      </div>

      <div className="card-body">
        <span className="eyebrow">
          {article.category}
        </span>

        <h3>{article.title}</h3>

        <div className="card-footer">
          <span>{article.readTime}</span>
          <span className="arrow">→</span>
        </div>
      </div>
    </article>
  );
}
