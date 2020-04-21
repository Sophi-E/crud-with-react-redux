import ADD_POST from "../actions/index";

const postReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_POST:
      console.log(action.data);
      return state.concat([action.data]);
    default:
      return state;
  }
};
export default postReducer;
