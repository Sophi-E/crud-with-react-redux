import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deletePost } from "../actions/postActions";

const AllPost = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.postReducer);
  return (
    <div>
      <h1>All Posts</h1>
      {posts.map(post => (
        <div className="card" key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.message}</p>
          <button className="btn editBtn">Edit</button>
          <button
            className="btn deleteBtn"
            onClick={() => dispatch(deletePost(id))}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};
export default AllPost;
