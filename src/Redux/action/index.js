export const ADD_TO_CART = "ADD_TO_CART";
export const LESS_TO_CART = "LESS_TO_CART";
export const ADD_QUANTITY = "ADD_QUANTITY";
export const SET_USERNAME = "SET_USERNAME";
export const SET_LOGIN = "SET_LOGIN";
export const EXIT_LOGIN = "EXIT_LOGIN";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const ADD = "ADD";

export const addToCartAction = (food) => ({
  type: ADD_TO_CART,
  payload: food,
});

export const lessToCartAction = (food) => ({
  type: LESS_TO_CART,
  payload: food,
});

export const setUsernameAction = (username) => ({
  type: SET_USERNAME,
  payload: username,
});

export const removeFromCartAction = (i) => ({
  type: REMOVE_FROM_CART,
  payload: i,
});

export const exitLoginAction = (exitLogin) => ({
  type: EXIT_LOGIN,
  payload: exitLogin,
});
