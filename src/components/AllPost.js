import React from "react";
import { useSelector } from "react-redux";

const AllPost = () => {
  const posts = useSelector(state => state.postReducer);
  return (
    <div>
      <h1>All Posts</h1>
      {/* {posts} */}

      {console.log(posts)}
    </div>
  );
};
export default AllPost;
