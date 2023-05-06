import { useState } from "react";
import "./styles/App.css";
import Post from "./components/Post";
import PostList from "./components/PostList";
import MainHeader from "./components/MainHeader";

function App() {
  const [modalIsVisible, setVisibility] = useState(false);

  function showModalHandler() {
    setVisibility(true);
  }
  function hideModalHandler() {
    setVisibility(false);
  }
  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostList isPosting={modalIsVisible} onStopPosting={hideModalHandler} />
      </main>
    </>
  );
}

export default App;
