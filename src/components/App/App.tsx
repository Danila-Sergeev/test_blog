import React from "react";
import Styles from "./App.module.css";
import BlogPage from "../../pages/BlogPage/BlogPage";
import { Route, Routes } from "react-router-dom";
import PostPage from "../../pages/PostPage/PostPage";

function App() {
  return (
    <div className={Styles.App}>
      <Routes>
        <Route path="/" element={<BlogPage />} />
        <Route path="/:id" element={<PostPage />} />
      </Routes>
    </div>
  );
}

export default App;
