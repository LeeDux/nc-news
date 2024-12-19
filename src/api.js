import axios from "axios";

const api = axios.create({
  baseURL: "https://lees-nc-news-1e2i.onrender.com/api",
});

export default function getArticles() {
  return api.get("/articles").then(({ data }) => {
    console.log(data.articles);
    return data.articles;
  });
}

export function getArticlesById(article_id) {
  return api.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
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
