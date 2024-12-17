import { useState } from "react";
import Header from "./Header";
import NavBar from "./Navbar";
import "./App.css";
import ArticlesContainer from "./ArticlesContainer";

function App() {
  const [articles, setArticles] = useState(0);

  return (
    <>
      <Header></Header>
      <NavBar></NavBar>
      <ArticlesContainer articles={articles}></ArticlesContainer>
    </>
  );
}

export default App;
