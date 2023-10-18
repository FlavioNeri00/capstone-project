import { LESS_COUNTER, PLUS_COUNTER } from "../action";

const initialState = {
 content: 0
}

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case PLUS_COUNTER: 
    return {
      content: action.payload
    };
    
    case LESS_COUNTER:
      return{
        content:  action.payload
      }

    default:
      return state;
  }
};

export default counterReducer;


