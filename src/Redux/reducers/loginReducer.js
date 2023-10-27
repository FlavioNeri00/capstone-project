import { EXIT_LOGIN, SET_USERNAME } from "../action";

const initialState = {
  content: "",
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERNAME:
      return { content: action.payload };
    case EXIT_LOGIN:
      return { content: action.payload };
    default:
      return state;
  }
};

export default loginReducer;
