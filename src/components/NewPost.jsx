import { useState } from "react";
import classes from "../styles/NewPost.module.css";

function NewPost({ onCancel, onAddPost }) {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function onchangeBodyHandler(e) {
    setEnteredBody(e.target.value);
  }
  function onchangeAuthorHandler(e) {
    setEnteredAuthor(e.target.value);
  }

  function submitHandler(event) {
    event.preventDefault;
    const postData = {
      body: enteredBody,
      author: enteredAuthor,
    };
    onAddPost(postData);
    onCancel();
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={onchangeBodyHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          required
          onChange={onchangeAuthorHandler}
        />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
