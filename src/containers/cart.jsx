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

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
  return { products: state.cartReducer.cart.products || [] };
}

//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch) {
  return bindActionCreators({ showModal }, dispatch);
}

// We don't want to return the plain UserList anymore, we want to return the smart Container
//
export default connect(mapStateToProps, matchDispatchToProps)(Cart);
