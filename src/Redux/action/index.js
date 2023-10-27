export const ADD_TO_CART = "ADD_TO_CART";
export const LESS_TO_CART = "LESS_TO_CART";
export const SET_USERNAME = "SET_USERNAME";
export const EXIT_LOGIN = "EXIT_LOGIN";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const ADD_TO_TOTAL = "ADD_TO_TOTAL";
export const LESS_TO_TOTAL = "LESS_TO_TOTAL";

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

export const addToTotal = (total) => ({
  type: ADD_TO_TOTAL,
  payload: total,
});

export const lessToTotal = (total) => ({
  type: LESS_TO_TOTAL,
  payload: total,
});
