export default function ArticleCard({ article }) {
  return (
    <article className="article-card">

      <a href={`/articles/${article.slug}`}>

        <div className="card-image">
          <img
            src={article.image}
            alt={article.title}
            loading="lazy"
          />
        </div>

        <div className="card-body">

          <span className="eyebrow">
            {article.category}
          </span>

          <h3>
            {article.title}
          </h3>

          <div className="card-footer">

            <span>
              {article.readTime}
            </span>

            <span className="arrow">
              →
            </span>

          </div>

        </div>

      </a>

    </article>
  );
}