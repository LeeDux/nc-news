import React from "react";
import ArticleCard from "./ArticleCard";
import { useState, useEffect } from "react";
import getArticles from "./api";

function ArticlesContainer() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsError(false);
    setIsLoading(true);
    getArticles()
      .then((articlesArray) => {
        console.log(articlesArray, "<--- in useEffect");
        setIsError(false);
        setArticles(articlesArray);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(true);
        return error;
      });
  }, []);

  if (isLoading) return <p>Fetching articles!</p>;

  return (
    <>
      <div>
        <h2>Articles</h2>
        <section className="item-container">
          {
            <ul>
              {articles.map((article) => {
                console.log(article, "<---in map");
                return (
                  <ArticleCard
                    key={article.article_id}
                    article={article}
                    // handleAddtoBasket={handleAddtoBasket}
                  />
                );
              })}
            </ul>
          }
        </section>
      </div>
    </>
  );
}

export default ArticlesContainer;
