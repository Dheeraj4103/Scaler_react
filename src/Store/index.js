import { applyMiddleware, combineReducers, createStore } from "redux";
import cartReducer from "./cart";
import categoriesReducer from "./categories";
import thunk from "redux-thunk";
import productsReducer from "./Products";

const reducer = combineReducers({
  cart: cartReducer,
  categories: categoriesReducer,
  productList: productsReducer
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
