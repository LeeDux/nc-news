import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import getArticles from "./api";
import ArticleCard from "./ArticleCard";

function ArticlesContainer() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const defaultSortBy = searchParams.get("sort_by") || "created_at";
  const defaultOrder = searchParams.get("order") || "desc";

  const [sortBy, setSortBy] = useState(defaultSortBy);
  const [order, setOrder] = useState(defaultOrder);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    getArticles(sortBy, order)
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
  }, [sortBy, order]);

  const handleSortChange = (e) => {
    const { name, value } = e.target;
    if (name === "sortBy") {
      setSortBy(value);
    } else if (name === "order") {
      setOrder(value);
    }
  };

  useEffect(() => {
    setSearchParams({ sort_by: sortBy, order: order });
  }, [sortBy, order, setSearchParams]);

  if (isLoading) return <p>Loading articles...</p>;
  if (isError) return <p>Error loading articles.</p>;

  return (
    <div className="article-container">
    <h2>Articles</h2>

    <div className="sorting-controls">
      <label htmlFor="sortBy">Sort By:</label>
      <select
        id="sortBy"
        name="sortBy"
        value={sortBy}
        onChange={handleSortChange}
      >
        <option value="created_at">Date</option>
        <option value="votes">Votes</option>
      </select>

      <label htmlFor="order">Order:</label>
      <select
        id="order"
        name="order"
        value={order}
        onChange={handleSortChange}
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>

    <section className="item-container">
      <ul>
        {articles.map((article) => (
          <ArticleCard key={article.article_id} article={article} />
        ))}
      </ul>
    </section>
  </div>
  );
}

export default ArticlesContainer;
