import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistedStore } from "./Redux/store";
// Your web app's Firebase configuration
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCy_9f-fLJZqdKg_LYCVz-e3zYAfTtY9K8",
  authDomain: "scaro-1.firebaseapp.com",
  projectId: "scaro-1",
  storageBucket: "scaro-1.appspot.com",
  messagingSenderId: "305858532206",
  appId: "1:305858532206:web:ba746c1bf370240180677f",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
console.log(db);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistedStore}>
      <App />
    </PersistGate>
  </Provider>
);
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
