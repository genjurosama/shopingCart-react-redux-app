import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchProducts } from "../actions/products";
import { CART_ADD_PRODUCT, addProductToCart } from "../actions/cart";
import { ProductsList } from "../components/productsList.jsx";

class Products extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchProducts();
  }

  handleClick(e, data) {
    console.log(this)
    this.props.addProductToCart(data);
  }
  render() {
    return (
      <div>
         <ProductsList products={this.props.products} addProductToCart={this.props.addProductToCart} />
      </div>
    );
  }
}

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
  return { products: state.productsReducer.products  || []};
}

//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch) {
  return bindActionCreators({ fetchProducts, addProductToCart }, dispatch);
}

// We don't want to return the plain UserList anymore, we want to return the smart Container
//
export default connect(mapStateToProps, matchDispatchToProps)(Products);
