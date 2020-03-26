import React from "react";
import "./App.css";

// import Home from "./components/pages/home";
import Layout from "./layouts/layout";
import Post from "./components/pages/post/index"

function App() {
  return (
    <Layout>
      <Post />
    </Layout>
  );
}

export default App;
