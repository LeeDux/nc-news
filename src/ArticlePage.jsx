import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ArticlePageCard from "./ArticlePageCard";
import CommentCard from "./CommentCard";
import { getArticlesById, getCommentsByArticleId } from "./api";
import CommentForm from "./CommentForm";

function ArticlePage() {
  const [article, setArticle] = useState([]);
  const [comments, setComments] = useState([]);
  const [isError, setIsError] = useState(false);
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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
        setErrorMessage(error.message);
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

  if (isError) {
    return (
      <div className="error-container">
        <h2>{errorMessage}</h2>
      </div>
    );
  }

  const toggleShowComments = () => {
    setShowComments((prevState) => !prevState);
  };

  const deleteComment = (comment_id) => {
    const updatedComments = comments.filter(
      (comment) => comment.comment_id !== comment_id
    );
    setComments(updatedComments);
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
        <div>
          <CommentForm
            articleId={article.article_id}
            comments={comments}
            setComments={setComments}
          ></CommentForm>
        </div>

        <div className="comments-section">
          <button onClick={toggleShowComments}>
            {showComments ? "Hide Comments" : "Show Comments"}
          </button>
          {showComments && (
            <div className="comments-list">
              {comments.length > 0 ? (
                comments.map((comment) => (
                  <CommentCard
                    key={comment.comment_id}
                    comment={comment}
                    onDelete={deleteComment}
                  />
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
