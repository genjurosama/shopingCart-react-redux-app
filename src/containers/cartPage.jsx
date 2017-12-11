import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  CART_ADD_PRODUCT,
  addProductToCart,
  removeProductFromCart,
  subtractAmountProductFromCart
} from "../actions/cart";
import { Product } from "../components/product.jsx";
import { Table, Button, Modal } from "react-bootstrap";
import { ProductsList } from "../components/productsList.jsx";
import { hideModal } from "../actions/ui";
import { clearCart } from "../actions/cart";
import * as _ from "lodash";
import "../App.css";

class CartPage extends Component {
  getTotal() {
    let total = 0;
    const products = this.props.products;
    if (products.length >= 1) {
      total = _.sumBy(products, function(o) {
        return o.price;
      });
    }

    return total;
  }
  render() {
    return (
      <div className="static-modal">
        <Modal show={this.props.showModal} onHide={this.close}>
          <Modal.Header>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          {this.props.products.length > 0 ? (
            <Modal.Body>
              <ProductsList
                products={this.props.products}
                cartView={true}
                addProductToCart={this.props.addProductToCart}
                subtractProductFromCart={
                  this.props.subtractAmountProductFromCart
                }
                removeProductFromCart={this.props.removeProductFromCart}
              />
              <div className="total">
                <b>Total: </b>
                {this.getTotal().toFixed(2)}
              </div>
            </Modal.Body>
          ) : (
            <Modal.Body>Cart is empty.</Modal.Body>
          )}

          <Modal.Footer>
            <Button onClick={() => this.props.hideModal()}>Close</Button>
            <Button onClick={() => this.props.clearCart()}>Clear</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    products: state.cartReducer.cart.products || [],
    showModal: state.uiReducer.showModal
  };
}


function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      addProductToCart,
      removeProductFromCart,
      subtractAmountProductFromCart,
      hideModal,
      clearCart
    },
    dispatch
  );
}

// We don't want to return the plain UserList anymore, we want to return the smart Container
//
export default connect(mapStateToProps, matchDispatchToProps)(CartPage);
