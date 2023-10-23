import { PIZZA } from "../action";

const initialState = {
  content: [],
};

const pizzaReducer = (state = initialState, action) => {
  switch (action.type) {
    case PIZZA:
      return {
        ...state,
        content: action.payload,
      };

    default:
      return state;
  }
};

export default pizzaReducer;
