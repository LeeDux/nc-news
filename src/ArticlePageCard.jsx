import React from "react";
import { useState } from "react";
import AddVote from "./AddVote";

function ArticlePageCard({ article, setArticle }) {
  const [votes, setVotes] = useState(article.votes);

  const handleVoteUpdate = (newVotes) => {
    setVotes(newVotes);
  };
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
      <AddVote
        article={article}
        articleId={article.article_id}
        setArticle={setArticle}
        initialVotes={article.votes}
        onVoteUpdate={handleVoteUpdate}
      />
    </div>
  );
}

export default ArticlePageCard;
