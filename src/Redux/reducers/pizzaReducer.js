import { ADD_TO_CART } from "../action";

const initialState = {
  content: [],
};

const pizzaReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, content: [...state.content, action.payload] };

    default:
      return state;
  }
};

export default pizzaReducer;
