import axios from "axios";

const api = axios.create({
  baseURL: "https://lees-nc-news-1e2i.onrender.com/api",
});

export default function getArticles(sortBy = "created_at", order = "desc") {
  return api
    .get(`/articles`, {
      params: {
        sort_by: sortBy,
        order: order,
      },
    })
    .then(({ data }) => {
      return data.articles;
    })
    .catch((error) => {
      console.error("Error fetching articles:", error);
      throw error;
    });
}

export function getTopics() {
  return api
    .get("/topics")
    .then(({ data }) => {
      console.log(data.topics);
      return data.topics;
    })
    .catch((error) => {
      console.error("error fetching topics", error);
      throw error;
    });
}

export function getArticlesByTopic(topicSlug) {
  return api
    .get(`/articles?topic=${topicSlug}`)
    .then(({ data }) => {
      console.log(data.articles);
      return data.articles;
    })
    .catch((error) => {
      if (error.response && error.response.status === 404) {
        throw new Error("Topic not found.");
      }
      throw error;
    });
}

export function getArticlesById(article_id) {
  return api
    .get(`/articles/${article_id}`)
    .then(({ data }) => {
      return data.article;
    })
    .catch((error) => {
      if (error.response && error.response.status === 404) {
        throw new Error("Article not found.");
      }
      throw error;
    });
}

export function getCommentsByArticleId(article_id) {
  return api.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data.comments;
  });
}

export function updateVotes(article_id, incVotes) {
  return api
    .patch(`/articles/${article_id}`, { inc_votes: incVotes })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
}

export function postComment(article_id, commentData) {
  console.log(commentData, "<-- in api");
  return api
    .post(`/articles/${article_id}/comments`, {
      body: commentData.body,
      username: commentData.author,
    })
    .then((response) => {
      return response.data.comment;
    })
    .catch((error) => {
      console.error(
        "error posting comment:",
        error.response?.data || error.message
      );
      throw error;
    });
}

export function deleteComment(comment_id) {
  return api
    .delete(`/comments/${comment_id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("problem deleting the comment:", error);
      throw error;
    });
}
