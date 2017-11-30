export const PRODUCT_FETCH_REQUESTED = "PRODUCT_FETCH_REQUESTED";
export const PRODUCT_FETCH_SUCCEEDED = "PRODUCTS_FETCH_SUCCEEDED";
export const PRODUCT_FETCH_FAILED = "PRODUCT_FETCH_FAILED";

export const fetchProducts = function() {
  return {
    type: PRODUCT_FETCH_REQUESTED
  };
};

export const fetchProductsSucceeded = function(products) {
  return {
    type: PRODUCT_FETCH_SUCCEEDED,
    payload: products
  };
};

export const fetchProductsFailed = function(message) {
  return {
    type: PRODUCT_FETCH_SUCCEEDED,
    payload: message
  };
};
