//@flow
import { CART_ADD_PRODUCT, CART_REMOVE_PRODUCT } from "../actions/cart";

const initialState = {
  products: []
};

export const cart = (state = initialState, action) => {
  switch (action.type) {
    case CART_ADD_PRODUCT:
      return {
        ...state,
        products: state.products.concat(action.newProduct)
      };
    case CART_REMOVE_PRODUCT:
      const products = state.products.filter(
        product => product.id !== action.productId
      );
      return {
        ...state,
        products: products
      };
    default:
      return state;
  }
};
