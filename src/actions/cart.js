export const CART_ADD_PRODUCT = 'CART_ADD_PRODUCT';
export const CART_REMOVE_PRODUCT = 'CART_REMOVE_PRODUCT';

function addProductToCart(product){
    return {
        type:CART_ADD_PRODUCT,
        product:product
    }
}

function removeProductFromCart(id){
    return {
        type:CART_REMOVE_PRODUCT,
        productId:id
    }
}
