import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { CART_ADD_PRODUCT, addProductToCart,removeProductFromCart,subtractAmountProductFromCart } from "../actions/cart";
import { Product } from "../components/product.jsx";
import { Table, Button,Modal } from "react-bootstrap";
import { ProductsList } from "../components/productsList.jsx";
import {hideModal} from '../actions/ui'

class CartPage extends Component{
    componentDidMount(){

    }
    render(){
        return (
            <div className="static-modal">
            <Modal  show={this.props.showModal} onHide={this.close}>
              <Modal.Header>
                <Modal.Title>Modal title</Modal.Title>
              </Modal.Header>
        
              <Modal.Body>
              <ProductsList products={this.props.products} cartView={true}  addProductToCart={this.props.addProductToCart} subtractProductFromCart={this.props.subtractAmountProductFromCart} removeProductFromCart={this.props.removeProductFromCart}/>
            
              </Modal.Body>
        
              <Modal.Footer>
                <Button onClick={()=>this.props.hideModal()}>Close</Button>
              </Modal.Footer>
        
            </Modal>
          </div>
                
        );
    }
}


// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
    console.log('received :',state);
    return { products: state.cartReducer.cart.products || [],
            showModal:state.uiReducer.showModal };
  }
  
  //      > now UserList has this.props.selectUser
  function matchDispatchToProps(dispatch) {
    return bindActionCreators({addProductToCart,removeProductFromCart,subtractAmountProductFromCart,hideModal }, dispatch);
  }
  
  // We don't want to return the plain UserList anymore, we want to return the smart Container
  //
  export default connect(mapStateToProps, matchDispatchToProps)(CartPage);
  