import { ADD_QUANTITY, ADD_TO_CART, REMOVE_FROM_CART } from "../action";

const initialState = {
  content: [],
};

const pizzaReducer = (state = initialState, action) => {
  console.log("ciaooooo", state.content.Quantita);
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, content: [...state.content, action.payload] };

    case ADD_QUANTITY:
      return { ...state, Quantita: action.payload };

    case REMOVE_FROM_CART:
      return {
        ...state,
        content: state.content.filter((_, i) => i !== action.payload),
      };

    default:
      return state;
  }
};

export default pizzaReducer;
