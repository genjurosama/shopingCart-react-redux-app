//@flow
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

export const cartReducer = (state = initialState, action) => {
  let cart = state.cart || {};
  let products = [];
  switch (action.type) {
    case CART_ADD_PRODUCT:
      cart.products = cart.products || [];
      cart.products.push({ ...action.product, qt: 1 });
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
      products = state.cart.products.filter(
        product => product.id !== action.productId
      );
      cart.products = products;
      return {
        ...state,
        cart: cart
      };
    case CART_SUB_PRODUCT:
      products = state.cart.products.map(product => {
        if (product.id === action.productId) {
          product.qt -= 1;
          product.price -= product.unitPrice;
        }
        return product;
      });
      console.log('products after map:',products);

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

function sumTotals(p, c) {
  return _.extend(p, {
    id: c.id,
    unitPrice: c.unitPrice,
    qt: p.qt + c.qt,
    price: p.price + c.price
  });
}
