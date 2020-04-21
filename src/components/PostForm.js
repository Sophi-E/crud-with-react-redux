import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../actions/postActions";

const PostForm = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    title: "",
    message: ""
  });

  const handleChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = e => {
    e.preventDefault();

    const data = {
      id: new Date(),
      ...values
    };
    setValues(data);
    // dispatch({
    //   type: "ADD_POST",
    //   data
    // });
  };
  return (
    <div>
      <h1>Create Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          required
          type="text"
          name="title"
          placeholder="Enter Post Title"
          onChange={handleChange}
        />
        <br /> <br />
        <textarea
          required
          name="message"
          rows="5"
          cols="28"
          placeholder="Enter Post"
          onChange={handleChange}
        />
        <br /> <br />
        <button>Post</button>
      </form>
    </div>
  );
};
export default PostForm;
