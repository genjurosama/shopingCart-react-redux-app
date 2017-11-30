import React from "react";
import { Table, Button } from "react-bootstrap";
import { Product } from "../components/product.jsx";
export const ProductsList = function({
  products,
  addProductToCart,
  subtractProductFromCart,
  removeProductFromCart,
  cartView
}) {
  return (
    <Table striped bordered condensed hover>
      <thead>
        {cartView ? (
          <tr>
            <th>title</th>
            <th>price</th>
            <th>qte</th>
          </tr>
        ) : (
          <tr>
            <th>title</th> <th>price</th>
          </tr>
        )}
      </thead>
      <tbody>
      {products.map((prod,i) => {
        return (
             <Product
                  key={!cartView?prod.id:i}
                  product = {prod}
                  cartView={cartView}
                  addProductToCart = {addProductToCart}
                  subtractProductFromCart= {subtractProductFromCart}
                  removeProductFromCart = {removeProductFromCart}
                />
        );
      })}
      </tbody>
    </Table>
  );
};
