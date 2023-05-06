import React, { useState } from "react";
import Post from "./Post";
import classes from "../styles/PostList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";

export default function PostList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }
  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}

      <ul className={classes.posts}>
        {posts.map(({ author, body }) => (
          <Post key={author} author={author} body={body} />
        ))}
      </ul>
    </>
  );
}
