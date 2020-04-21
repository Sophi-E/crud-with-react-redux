const postReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_POST":
      console.log(action.payload);
      return state.concat([action.payload]);
    default:
      return state;
  }
};
export default postReducer;
