import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducer from "./ContactReducer";

const setLocalStorageDate = (store) => {
  try {
    const data = JSON.stringify(store);
    localStorage.setItem("LocalStorageDate", data);
  } catch (error) {
    console.log("Error", error);
  }
};

const getLocalStorageDate = () => {
  try {
    const data = localStorage.getItem("LocalStorageDate");

    if (data === null) return undefined;

    return JSON.parse(data);
  } catch (error) {
    console.log("Error", error);
  }
};

const store = createStore(
  reducer,
  getLocalStorageDate(),
  composeWithDevTools(applyMiddleware(thunk))
);
store.subscribe(() => setLocalStorageDate(store.getState()));

export default store;
