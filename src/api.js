import axios from "axios";

const api = axios.create({
  baseURL: "https://lees-nc-news-1e2i.onrender.com/api",
});

function getArticles() {
  return api.get("/articles").then(({ data }) => {
    console.log(data.articles);
    return data.articles;
  });
}

export default getArticles;
