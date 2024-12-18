import { useState } from "react";
import Header from "./Header";
import NavBar from "./Navbar";

import { Routes, Route } from "react-router-dom";
import "./App.css";
import ArticlesContainer from "./ArticlesContainer";
import ArticlePage from "./ArticlePage";
import { UserProvider } from "./UserContext";



function App() {
  const [articles, setArticles] = useState(0);

  return (
    <>

      <UserProvider>
        <Header></Header>
        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<ArticlesContainer articles={articles} />} />

          <Route path="/articles/:article_id" element={<ArticlePage />} />
        </Routes>
      </UserProvider>
    </>
  );
}

export default App;
