import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { CART_ADD_PRODUCT, addProductToCart,removeProductFromCart } from "../actions/cart";
import { Product } from "../components/product.jsx";
import { Table, Button } from "react-bootstrap";

class Cart extends Component{
    componentDidMount(){

    }
    render(){
        return (
            <div>
                <a href="/cart"><span className="badge">{this.props.products.length}</span><i className='fa fa-cart-plus fa-3x'></i></a>
            </div>
        );
    }
}


// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
    console.log('received :',state);
    return { products: state.cart.cart.products || [] };
  }
  
  //      > now UserList has this.props.selectUser
  function matchDispatchToProps(dispatch) {
    return bindActionCreators({addProductToCart,removeProductFromCart }, dispatch);
  }
  
  // We don't want to return the plain UserList anymore, we want to return the smart Container
  //
  export default connect(mapStateToProps, matchDispatchToProps)(Cart);
  