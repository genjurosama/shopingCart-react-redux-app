import React from "react";
import { Table, Button } from "react-bootstrap";
import { Product } from "../components/product.jsx";
export const ProductsList = function({ products, addProductToCart,subtractProductFromCart,removeProductFromCart,cartView }) {
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
      {products.map(prod => {
        return (
          <tbody>
            <tr>
              <Product
                title={prod.title}
                price={prod.price}
                qt={prod.qt}
                unitPrice={prod.unitPrice}
                cartView={cartView}
              />
              {cartView ?(
                <td>
                <Button onClick={e => addProductToCart(prod)} bsStyle="primary">
                  <i className="fa fa-plus" />
                </Button>
                <Button onClick={e => subtractProductFromCart(prod.id)} bsStyle="primary">
                  <i className="fa fa-minus" />
                </Button>
                <Button onClick={e => removeProductFromCart(prod.id)} bsStyle="primary">
                  <i className="fa fa-close" />
                </Button>
                
              </td>
              ):
              (
                <td>
                <Button onClick={e => addProductToCart(prod)} bsStyle="primary">
                  <i className="fa fa-plus" />
                </Button>
                
              </td>
              )
              }
              
            </tr>
          </tbody>
        );
      })}
    </Table>
  );
};
