import React from "react";
import "./App.css"; // Import styles

const SkeletonArticleCard = () => {
  return (
    <div className="article-card skeleton">
      <div className="article-header">
        <div className="skeleton-box skeleton-title"></div>
      </div>
      <div className="box-content">
        <div className="article-body">
          <div className="skeleton-box skeleton-text"></div>
          <div className="skeleton-box skeleton-text"></div>
        </div>
        <div className="read-more">
          <div className="article-image">
            <div className="skeleton-box skeleton-image"></div>
          </div>
          <div className="skeleton-box skeleton-button"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonArticleCard;