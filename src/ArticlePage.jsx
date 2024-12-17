import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ArticlePageCard from "./ArticlePageCard";
import { getArticlesById } from "./api";

function ArticlePage() {
  const [article, setArticle] = useState([]);
  const [isError, setIsError] = useState(false);
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsError(false);
    setIsLoading(true);
    getArticlesById(article_id)
      .then((data) => {
        setIsError(false);
        setArticle(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(true);
        return error;
      });
  }, [article_id]);

  if (isLoading) {
    return <p>Loading articles...</p>;
  }

  console.log(article, "<--- in article page");

  return (
    <>
      <ArticlePageCard article={article} />;
    </>
  );
}

export default ArticlePage;
