import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchProducts } from "../actions/products";
import {Product} from "../components/product.jsx";


class Products extends Component {

  constructor(props){
      super(props);
  }  
  componentDidMount() {
    this.props.fetchProducts();
  }
  componentWillReceiveProps(nextProps){
    console.log('received Props',nextProps);
  }
  
  render() {
    return (
       this.props.products.map(prod => {
        return <Product key={prod.id} title={prod.title} price={prod.price} />;
        }))
  }
}

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
  return { products: state.products.products };
}

//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch) {
  return bindActionCreators({ fetchProducts }, dispatch);
}

// We don't want to return the plain UserList anymore, we want to return the smart Container
//
export default connect(mapStateToProps, matchDispatchToProps)(Products);
