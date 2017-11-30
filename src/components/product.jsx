import React from "react";
import {Button } from "react-bootstrap";

export const Product = ({ product, cartView ,subtractProductFromCart,removeProductFromCart,addProductToCart }) => {
  if (cartView) {
    return [
      <tr>
        <td> {product.title}</td>
        <td> {product.price.toFixed(2)}</td>
        <td> {product.qt} </td>
        <td>
          <Button
            onClick={e => addProductToCart(product)}
            bsStyle="primary"
          >
            <i className="fa fa-plus" />
          </Button>
          <Button
            onClick={e => subtractProductFromCart(product.id)}
            bsStyle="primary"
          >
            <i className="fa fa-minus" />
          </Button>
          <Button
            onClick={e => removeProductFromCart(product.id)}
            bsStyle="primary"
          >
            <i className="fa fa-close" />
          </Button>
        </td>
      </tr>
    ];
  } else {
    return [
      <tr>
        <td> {product.title}</td>
        <td> {product.price.toFixed(2)}</td>
        <td>
          <Button
            onClick={e => addProductToCart(product)}
            bsStyle="primary"
          >
            <i className="fa fa-plus" />
          </Button>
        </td>
      </tr>
    ];
  }
};
