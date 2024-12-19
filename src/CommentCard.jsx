import React from "react";

function CommentCard({ comment }) {
  return (
    <div className="comment-card">
      <p>{comment.body}</p>
      <p>By: {comment.author}</p>
      <p>Posted on: {comment.created_at}</p>
    </div>
  );
}

export default CommentCard;
