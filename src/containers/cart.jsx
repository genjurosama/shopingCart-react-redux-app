import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  CART_ADD_PRODUCT,
  addProductToCart,
  removeProductFromCart
} from "../actions/cart";
import { Product } from "../components/product.jsx";
import { Table, Button } from "react-bootstrap";
import { showModal } from "../actions/ui";

class Cart extends Component {
  componentDidMount() {}
  render() {
    return (
      <li>
        <a onClick={this.props.showModal}>
          <span className="badge">{this.props.products.length}</span>
          <i className="fa fa-cart-plus fa-3x" />
        </a>
      </li>
    );
  }
}


function mapStateToProps(state) {
  return { products: state.cartReducer.cart.products || [] };
}


function matchDispatchToProps(dispatch) {
  return bindActionCreators({ showModal }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Cart);
