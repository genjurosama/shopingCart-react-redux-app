export const PRODUCT_FETCH_REQUESTED = 'PRODUCT_FETCH_REQUESTED';
export const PRODUCT_FETCH_SUCCEEDED = 'PRODUCT_FETCH_SUCCEEDED';
export const PRODUCT_FETCH_FAILED = 'PRODUCT_FETCH_FAILED';

function fetchProducts(){
    return {
        type:PRODUCT_FETCH_REQUESTED
    }
}

function fetchProductsSucceeded(products){
    return {
        type:PRODUCT_FETCH_SUCCEEDED,
        payload:products
    }
}


function fetchProductsSucceeded(message){
    return {
        type:PRODUCT_FETCH_SUCCEEDED,
        payload:message
    }
}