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
    console.log(data.article, "<-- article by id in api");
    return data.article;
  });
}
