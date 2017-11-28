import React from 'react';
import { Table, Button } from "react-bootstrap";
import { Product } from "../components/product.jsx";
export const ProductsList = function({products,addProductToCart}){
    return (
        <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>title</th>
            <th>price</th>
          </tr>
        </thead>
        {products.map(prod => {
          return (
            <tbody>
              <tr>
                <Product key={prod.id} title={prod.title} price={prod.price} />
                <td>
                  <Button
                    onClick={e => addProductToCart(e,prod)}
                    bsStyle="primary"
                  >
                    <i className="fa fa-plus" />
                  </Button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </Table>
    )
}