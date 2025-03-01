import React from "react";
import { Link } from "react-router-dom";

function ArticleCard({ article }) {
  console.log("Article data in Card:", article);

  const maxLength = 100;
  const articleSnippet =
    typeof article.body === "string"
      ? article.body.substring(0, maxLength)
      : "No body content available";

  return (
    <div className="article-card">
    <div className="article-header">
      <h2>{article.title}</h2>
    </div>
    <div className="box-content">
      <div className="article-body">
        <p>{articleSnippet}...</p>
      </div>
    <div className="read-more">
      <div className="article-image">
        <img
          src={article.article_img_url}
          alt={article.title}
          className="article-image"
        />
      </div>
      <Link to={`/articles/${article.article_id}`}>
        <button className="read-more-button">ReadMore</button>
      </Link>
    </div>
    </div>
  </div>
  );
}

export default ArticleCard;
