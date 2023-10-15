import { SET_COUNTER } from "../action";

const initialState = {
  counter: 0,
};

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COUNTER:
      return { content: action.payload + 1 };

    default:
      return state;
  }
};

export default menuReducer;
