/**
 *This file will hold the products reducer to manage data fetching state
 */

import {
  PRODUCT_FETCH_FAILED,
  PRODUCT_FETCH_REQUESTED,
  PRODUCT_FETCH_SUCCEEDED
} from "../actions/products";

const initialState = {
  products: []
};


/**
 * Reducer for products operations
 * @param {Object} state 
 * @param {Object} action 
 * @returns {Object} as a new immutated state
 */

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_FETCH_REQUESTED:
      return Object.assign({}, state, action.payload);
    case PRODUCT_FETCH_SUCCEEDED:
      return {
        ...state,
        products: state.products.concat(action.products)
      };
    case PRODUCT_FETCH_FAILED:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};
