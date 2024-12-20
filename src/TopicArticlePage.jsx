import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticlesByTopic } from "./api";
import ArticleCard from "./ArticleCard";

function TopicArticlePage() {
  const { topicSlug } = useParams();
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    getArticlesByTopic(topicSlug)
      .then((articlesArray) => {
        setArticles(articlesArray);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(true);
        setIsLoading(false);
        console.error(error);
      });
  }, [topicSlug]);

  if (isLoading) return <p>Loading articles...</p>;
  if (isError) return <p>Error loading articles for {topicSlug}.</p>;

  return (
    <div>
      <h2>Articles about {topicSlug}</h2>
      <div className="articles-container">
        {articles.length > 0 ? (
          articles.map((article) => (
            <ArticleCard key={article.article_id} article={article} />
          ))
        ) : (
          <p>No articles found for this topic.</p>
        )}
      </div>
    </div>
  );
}

export default TopicArticlePage;
