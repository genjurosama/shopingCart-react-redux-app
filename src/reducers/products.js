//@flow
import {
  PRODUCT_FETCH_FAILED,
  PRODUCT_FETCH_REQUESTED,
  PRODUCT_FETCH_SUCCEEDED
} from "../actions/products";

const initialState = {
  products: []
};

const products = (
  state = initialState,
  action: { type: string, payload: any }
) => {
  switch (action.type) {
    case PRODUCT_FETCH_REQUESTED:
      return Object.assign({}, state, action.payload);
    case PRODUCT_FETCH_SUCCEEDED:
      return Object.assign({}, state, action.payload);
    case PRODUCT_FETCH_FAILED:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};
