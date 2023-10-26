import { combineReducers, configureStore } from "@reduxjs/toolkit";

import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import pizzaReducer from "../reducers/pizzaReducer";
import booksReducer from "../reducers/booksReducer";
import loginReducer from "../reducers/loginReducer";

const rootReducer = combineReducers({
  pizza: pizzaReducer,
  books: booksReducer,
  login: loginReducer,
});

const persistedReducer = persistReducer({ key: "root", storage }, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
export const persistedStore = persistStore(store);
export default store;
