import { combineReducers } from "redux";
import { cartReducer } from "./cart";
import { productsReducer } from "./products";
import { uiReducer } from "./ui";

//Pattern of precombining all reducers to keep the store init cleaner
export default combineReducers({ cartReducer, productsReducer, uiReducer });
