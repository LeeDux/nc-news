import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function TopicsCard({ topic, articles }) {
  const [firstArticleImage, setFirstArticleImage] = useState("");

  useEffect(() => {
    const firstArticle = articles.find(
      (article) => article.topic === topic.slug
    );
    if (firstArticle) {
      setFirstArticleImage(firstArticle.article_img_url);
    }
  }, [topic, articles]);

  return (
    <div className="topic-card">
      <div className="topic-card-content">
        <h3>{topic.slug}</h3>
        <div>
          <p>{topic.description}</p>
        </div>
      </div>

      <div className="topic-card-details">
        <div className="topic-card-image">
          {firstArticleImage && (
            <img
              src={firstArticleImage}
              alt={topic.slug}
              className="thumbnail"
            />
          )}
          <Link to={`/topics/${topic.slug}`}>
            <button className="view-topic-button">View Articles</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TopicsCard;
