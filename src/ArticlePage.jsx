import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ArticlePageCard from "./ArticlePageCard";
import CommentCard from "./CommentCard";
import { getArticlesById, getCommentsByArticleId } from "./api";

function ArticlePage() {
  const [article, setArticle] = useState([]);
  const [comments, setComments] = useState([]);
  const [isError, setIsError] = useState(false);
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    setIsError(false);
    setIsLoading(true);
    getArticlesById(article_id)
      .then((articleData) => {
        setArticle(articleData);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(true);
        return error;
      });

    getCommentsByArticleId(article_id)
      .then((commentData) => {
        setComments(commentData);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(true);
        return error;
      });
  }, []);

  const toggleShowComments = () => {
    setShowComments((prevState) => !prevState);
  };

  if (isLoading) {
    return <p>Loading articles...</p>;
  }

  console.log(article, "<---article in article page");
  console.log(article.votes, "<--- votes in article page");
  console.log(article.article_id, "<--- in article page");

  return (
    <>
      <div className="article-page">
        <ArticlePageCard article={article} setArticle={setArticle} />

        <div className="comments-section">
          <button onClick={toggleShowComments}>
            {showComments ? "Hide Comments" : "Show Comments"}
          </button>
          {showComments && (
            <div className="comments-list">
              {comments.length > 0 ? (
                comments.map((comment) => (
                  <CommentCard key={comment.comment_id} comment={comment} />
                ))
              ) : (
                <p>Be the first to comment...</p>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ArticlePage;
