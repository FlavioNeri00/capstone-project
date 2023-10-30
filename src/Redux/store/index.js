import { combineReducers, configureStore } from "@reduxjs/toolkit";

import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import cafeReducer from "../reducers/cafeReducer";
import loginReducer from "../reducers/loginReducer";
import totalReducer from "../reducers/totalReducer";

const rootReducer = combineReducers({
  cafe: cafeReducer,
  login: loginReducer,
  total: totalReducer,
});

const persistedReducer = persistReducer({ key: "root", storage }, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
export const persistedStore = persistStore(store);
export default store;
