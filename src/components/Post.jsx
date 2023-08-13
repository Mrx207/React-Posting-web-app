import React from "react";
import classes from "../styles/Post.module.css";

export default function Post({ author, body }) {
  return (
    <div>
      <li className={classes.post}>
        <p className={classes.author}>{author}</p>
        <p className={classes.text}>{body}</p>
      </li>
    </div>
  );
}
