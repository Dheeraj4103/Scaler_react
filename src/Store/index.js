import { combineReducers, createStore } from "redux";
import cartReducer from "./cart";
import categoriesReducer from "./categories";

const reducer = combineReducers({
  cart: cartReducer,
  categories: categoriesReducer,
});

const store = createStore(reducer);

export default store;
