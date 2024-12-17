import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost, fetchPosts } from "../redux/PostAction";
import PostForm from "./PostForm";
import "./post.css";
const Post = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.post);

  const [isPopupPostForm, setIsPopupPostForm] = useState(false);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleSubmit = (title, body) => {
    const newPost = { title, body };
    dispatch(addPost(newPost));
    setIsPopupPostForm(false);
  };

  const handlePopupToggle = () => {
    setIsPopupPostForm(!isPopupPostForm);
  };

  return (
    <div className="post-container">
      <div className="header">
        <h1>Post</h1>
        <button className="add-post-btn" onClick={handlePopupToggle}>
          Add Post
        </button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>

      {isPopupPostForm && (
        <div className="modal">
          <div className="modal-content">
            <h2>Add A New Post</h2>
            <PostForm onSubmit={handleSubmit} />
            <button className="close-btn" onClick={handlePopupToggle}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
