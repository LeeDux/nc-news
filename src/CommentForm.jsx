import { useState, useContext } from "react";
import { useUser } from "./UserContext";
import { postComment, getCommentsByArticleId } from "./api";

function CommentForm({ articleId, comments, setComments }) {
  const { user } = useUser();
  console.log(user.username, "<-- commentForm");
  const [commentBody, setCommentBody] = useState("");

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!commentBody.trim()) return;

    const newComment = {
      body: commentBody,
      author: user.username,
    };

    postComment(articleId, newComment)
      .then((newCommentData) => {
        setComments((prevComments) => [...prevComments, newCommentData]);
        setCommentBody("");
      })
      .catch((error) => {
        console.error("error posting comment:", error);
      });
  };

  return (
    <>
      <div className="comments-section">
        <h3>Add comments</h3>
        <form onSubmit={handleCommentSubmit}>
          <textarea
            value={commentBody}
            onChange={(e) => setCommentBody(e.target.value)}
            placeholder="tell them what you think..."
          ></textarea>
          <button type="submit"> Post Comment</button>
        </form>
      </div>
    </>
  );
}

export default CommentForm;