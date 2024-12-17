import React, { useState } from "react";

const PostForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(title, body);
    setTitle("");
    setBody("");
  };

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          className="form-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="body">Body</label>
        <textarea
          id="body"
          className="form-input"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="form-submit-btn">
        Add Post
      </button>
    </form>
  );
};

export default PostForm;
