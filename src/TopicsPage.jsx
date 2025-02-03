import React, { useState, useEffect } from "react";
import { getTopics } from "./api";
import getArticles from "./api";
import TopicsCard from "./TopicsCard";

function TopicsPage() {
  const [topics, setTopics] = useState([]);
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    getTopics()
      .then((topicsArray) => {
        setTopics(topicsArray);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(true);
        setIsLoading(false);
        console.error(error);
      });
    getArticles()
      .then((articlesArray) => {
        setArticles(articlesArray);
      })
      .catch((error) => {
        setIsError(true);
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading topics...</p>;
  if (isError) return <p>Error loading topics.</p>;

  return (
    <div>
      <div className="topics-container">
      <h2 className="topics-page-title">Topics</h2>
        {topics.map((topic) => (
          <TopicsCard key={topic.slug} topic={topic} articles={articles} />
        ))}
      </div>
    </div>
  );
}

export default TopicsPage;
