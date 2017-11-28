//@flow
import * as _ from 'lodash'
console.log(_.groupBy)
import { CART_ADD_PRODUCT, CART_REMOVE_PRODUCT } from "../actions/cart";

const initialState = {
  products: [],
  cart:{
    cart:{
      products:[]
    }
  }
};

export const cart = (state = initialState, action) => {
  switch (action.type) {
    case CART_ADD_PRODUCT:
      let cart = state.cart || {};
      cart.products =  cart.products || [];
      cart.products.push({...action.product,qt:1})
      const result = _.chain(cart.products).groupBy('title').map(function(category) {return category.reduce(sumTotals, {title:category[0].title, qt:0, price:0})}).valueOf();
      cart.products = result;
      return {
        ...state,
        cart: cart
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


function sumTotals(p, c) {
  return _.extend(p, {qt:p.qt + c.qt, price:p.price + c.qt*c.price});
};

