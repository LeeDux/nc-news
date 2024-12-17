import React from "react";

function ArticlePageCard({ article }) {
  console.log(article, "<---in articlepagecard");
  return (
    <div className="article-card">
      <h1>{article.title}</h1>
      <div className="article-header">
        <h2>{article.title}</h2>
        <img
          src={article.article_img_url}
          alt={article.title}
          className="article-image"
        />
      </div>
      <p className="article-body">{article.body}</p>
      <p>Written by: {article.author}</p>
      <p>Published on: {article.created_at}</p>
      <p>Votes: {article.votes}</p>
    </div>
  );
}

export default ArticlePageCard;
