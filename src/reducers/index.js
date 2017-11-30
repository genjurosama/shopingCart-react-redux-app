import { combineReducers } from "redux";
import { cartReducer } from "./cart";
import { productsReducer } from "./products";
import { uiReducer } from "./ui";

export default combineReducers({ cartReducer, productsReducer, uiReducer });
