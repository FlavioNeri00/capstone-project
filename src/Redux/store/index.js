import { combineReducers, configureStore } from "@reduxjs/toolkit";

import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import counterReducer from "../reducers/counterReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
});

const persistedReducer = persistReducer({ key: "root", storage }, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
export const persistedStore = persistStore(store);
export default store;
