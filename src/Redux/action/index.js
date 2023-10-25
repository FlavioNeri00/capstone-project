export const PLUS_COUNTER = "PLUS_COUNTER";
export const LESS_COUNTER = "LESS_COUNTER";
export const GET_API = "GET_API";
export const PIZZA = "PIZZA";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const ADD_QUANTITY = "ADD_QUANTITY";
export const ALERT_TRUE = "ALERT_TRUE";

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

export const addQuantityAction = (quantity) => ({
  type: ADD_QUANTITY,
  payload: quantity,
});

export const removeFromCartAction = (food) => ({
  type: REMOVE_FROM_CART,
  payload: food,
});

export const alertTrueAction = (setShow) => ({
  type: ALERT_TRUE,
  payload: setShow,
});
