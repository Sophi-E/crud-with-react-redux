import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deletePost, editPost } from "../actions/postActions";
import EditComponent from "./EditComponent";

const AllPost = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.postReducer);
  return (
    <div>
      <h1>All Posts</h1>
      {posts.map(post => (
        <div key={post.id}>
          {post.editing ? (
            <EditComponent />
          ) : (
            <div className="card" key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.message}</p>
              <button
                className="btn editBtn"
                onClick={() => dispatch(editPost(post.id))}
              >
                Edit
              </button>
              <button
                className="btn deleteBtn"
                onClick={() => dispatch(deletePost(post.id))}
              >
                Delete
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default AllPost;
