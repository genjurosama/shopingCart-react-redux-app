export const CART_ADD_PRODUCT = 'CART_ADD_PRODUCT';
export const CART_REMOVE_PRODUCT = 'CART_REMOVE_PRODUCT';

export const addProductToCart = function(product){
    return {
        type:CART_ADD_PRODUCT,
        product:product
    }
}

export const removeProductFromCart = function(id){
    return {
        type:CART_REMOVE_PRODUCT,
        productId:id
    }
}
