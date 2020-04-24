import React from "react";
import { useSelector } from "react-redux";

const AllPost = () => {
  const posts = useSelector(state => state.postReducer);
  return (
    <div>
      <h1>All Posts</h1>
      {posts.map(post => (
        <div className="card" key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.message}</p>
        </div>
      ))}
    </div>
  );
};
export default AllPost;
