import { ADD_TO_TOTAL, LESS_TO_TOTAL } from "../action";

const initialState = {
  content: 0,
};

const totalReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_TOTAL:
      return {
        ...state,
        content: parseFloat(state.content + action.payload),
      };
    case LESS_TO_TOTAL:
      return {
        ...state,
        content: parseFloat(state.content - action.payload),
      };
    default:
      return state;
  }
};

export default totalReducer;
