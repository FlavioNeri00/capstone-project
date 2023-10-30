import { ADD_TO_LIBRARY, REMOVE_FROM_LIBRARY } from "../action";

const initialState = {
  content: [],
};

const libraryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_LIBRARY:
      return {
        ...state,
        content: [...state.content, action.payload],
      };
    case REMOVE_FROM_LIBRARY:
      return {
        ...state,
        content: [...state.content.filter((i) => i.ID !== action.payload.ID)],
      };
    default:
      return state;
  }
};

export default libraryReducer;
