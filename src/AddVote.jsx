import React, { useState, useEffect } from "react";
import { updateVotes } from "./api";

function AddVote({
  article,
  setArticle,
  articleId,
  initialVotes,
  onVoteUpdate,
}) {
  const [votes, setVotes] = useState(initialVotes);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setVotes(initialVotes);
  }, []);

  const handleVote = (voteType) => {
    const previousVotes = votes;
    const newVotes = votes + voteType;
    setVotes(newVotes);
    onVoteUpdate(newVotes);
    setIsLoading(true);
    setIsError(false);
    setArticle((currentArticle) => {
      return { ...currentArticle, votes: newVotes };
    });

    updateVotes(articleId, voteType)
      .then((data) => {
        setIsLoading(false);
        setIsError(false);
      })
      .catch((err) => {
        setVotes((currentVotes) => votes - 1);
        setIsLoading(false);
        setIsError(true);
      });
  };

  return (
    <div>
      <button className="vote-button" onClick={() => handleVote(1)} disabled={isLoading}>
        {isLoading ? "Updating..." : "Upvote"}
      </button>
      <button className="vote-button" onClick={() => handleVote(-1)} disabled={isLoading}>
        {isLoading ? "Updating..." : "Downvote"}
      </button>
    </div>
  );
}

export default AddVote;
