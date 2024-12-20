import React from "react";
import { useState } from "react";
import { useUser } from "./UserContext";
import { deleteComment } from "./api";

function CommentCard({ comment, onDelete }) {
  const { user } = useUser();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);
    deleteComment(comment.comment_id)
      .then(() => {
        onDelete(comment.comment_id);
      })
      .catch((error) => {
        console.error("error deleting comment:", error);
        setIsDeleting(false);
        throw error;
      });
  };

  const canDelete = user.username === comment.author;

  return (
    <>
      <div className="comment-card">
        <p>{comment.body}</p>
        <p>By: {comment.author}</p>
        <p>Posted on: {comment.created_at}</p>
        {canDelete && (
          <button onClick={handleDelete} disabled={isDeleting}>
            {isDeleting ? "Deleting..." : "Delete"}
          </button>
        )}
      </div>
    </>
  );
}

export default CommentCard;
