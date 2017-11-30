/**
 *This file will hold the cart reducer to manage addition subtraction and removal of products
 */
import * as _ from "lodash";

import {
  CART_ADD_PRODUCT,
  CART_REMOVE_PRODUCT,
  CART_SUB_PRODUCT,
  CART_CLEAR
} from "../actions/cart";


const initialState = {
  cart: {
    products: []
  }
};


/**
 * Reducer for cart operations
 * @param {Object} state 
 * @param {Object} action 
 * @returns {Object} as a new immutated state
 */
export const cartReducer = (state = initialState, action) => {
  let cart = state.cart || {};
  let products = [];
  switch (action.type) {
    case CART_ADD_PRODUCT:
      cart.products = cart.products || [];
      cart.products.push({
        ...action.product,
        qt: 1,
        price: action.product.unitPrice
      });

      //group by items types and calculate subtotals
      const result = _.chain(cart.products)
        .groupBy("id")
        .map(function(category) {
          return category.reduce(sumTotals, {
            title: category[0].title,
            qt: 0,
            price: 0,
            unitPrice: 0
          });
        })
        .valueOf();
      cart.products = result;
      return {
        ...state,
        cart: cart
      };
    case CART_REMOVE_PRODUCT:
      //product is removed all together from cart
      products = state.cart.products.filter(
        product => product.id !== action.productId
      );
      cart.products = products;
      return {
        ...state,
        cart: cart
      };
    case CART_SUB_PRODUCT:
      //only subtract amount and unit price from the target product
      products = state.cart.products.map(product => {
        if (product.id === action.productId && product.qt > 1) {
          product.qt -= 1;
          product.price -= product.unitPrice;
        }
        return product;
      });

      cart.products = products;
      return {
        ...state,
        cart: cart
      };
    case CART_CLEAR:
      cart.products = [];
      return {
        ...state,
        cart: cart
      };
    default:
      return state;
  }
};


/**
 * 
 * @param {Object} p accumulator product holding total price and amount
 * @param {Object} c current element
 * @returns {Number} will return a new new object with accumulated values
 */
function sumTotals(p, c) {
  return _.extend(p, {
    id: c.id,
    unitPrice: c.unitPrice,
    qt: p.qt + c.qt,
    price: p.price + c.price
  });
}
