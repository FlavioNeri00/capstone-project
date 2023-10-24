import { collection, getDocs } from "firebase/firestore";
import { db } from "../..";

export const PLUS_COUNTER = "PLUS_COUNTER";
export const LESS_COUNTER = "LESS_COUNTER";
export const GET_API = "GET_API";
export const PIZZA = "PIZZA";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const plusCounterAction = (counterSelector) => ({
  type: PLUS_COUNTER,
  payload: counterSelector + 1,
});
export const lessCounterAction = (counterSelector) => ({
  type: PLUS_COUNTER,
  payload: counterSelector - 1,
});

export const addToCartAction = (food) => ({
  type: ADD_TO_CART,
  payload: food,
});

export const removeFromCartAction = (i) => ({
  type: REMOVE_FROM_CART,
  payload: i,
});
// export const getAPIAction = () => {
//      return async (dispatch, getState) => {
//        try{
//         let resp = await fetch("")
//         if (resp.ok){
//             let fetched = await resp.json()
//             dispatch({type: GET_API, payload: fetched})
//             console.log("get", getState());
//         }
//        }catch(err){
//         console.log(err);
//        }
//     }
// }
