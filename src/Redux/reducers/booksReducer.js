import { ALERT_TRUE, EXIT_LOGIN, SET_USERNAME } from "../action";

const initialState = {
  content: "",
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERNAME:
      return { content: action.payload };
    case EXIT_LOGIN:
      return { content: action.payload };
    default:
      return state;
  }
};

export default booksReducer;
