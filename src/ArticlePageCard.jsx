import React from "react";
import { useState } from "react";
import AddVote from "./AddVote";
import CommentForm from "./CommentForm";

function ArticlePageCard({ article, setArticle }) {
  const [votes, setVotes] = useState(article.votes);

  const handleVoteUpdate = (newVotes) => {
    setVotes(newVotes);
  };

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true, // to use 12-hour format with AM/PM
    };
    const date = new Date(dateString);
    return date.toLocaleString("en-US", options); // 'en-US' can be changed based on locale
  };



  return (
    <div className="article-card">
      <div className="article-header">
        <h2>{article.title}</h2>
        <div>
          <p className="article-body">{article.body}</p>
        </div>
        <div>
          <p>Written by: {article.author}</p>
          <p>Published on: {formatDate(article.created_at)}</p>
        </div>
      </div>
      <div>
        <img
          src={article.article_img_url}
          alt={article.title}
          className="article-image"
        />
        <p>Votes: {article.votes}</p>
        <AddVote
          article={article}
          articleId={article.article_id}
          setArticle={setArticle}
          initialVotes={article.votes}
          onVoteUpdate={handleVoteUpdate}
        />
      </div>
    </div>
  );
}

export default ArticlePageCard;
