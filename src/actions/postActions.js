export const addPost = data => {
  return {
    type: "ADD_POST",
    payload: data
  };
};
export const deletePost = () => {
  return {
    type: "DELETE_POST"
  };
};
export const updatePost = () => {
  return {
    type: "UPDATE_POST"
  };
};
