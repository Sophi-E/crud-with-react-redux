export const addPost = data => {
  return {
    type: "ADD_POST",
    payload: data
  };
};
export const deletePost = id => {
  return {
    type: "DELETE_POST",
    payload: id
  };
};
export const updatePost = () => {
  return {
    type: "UPDATE_POST"
  };
};

// export const ADD_POST = 'ADD_POST';
