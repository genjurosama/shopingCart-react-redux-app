export const CART_ADD_PRODUCT = 'CART_ADD_PRODUCT';
export const CART_REMOVE_PRODUCT = 'CART_REMOVE_PRODUCT';
export const CART_SUB_PRODUCT = 'CART_SUB_PRODUCT';

export const addProductToCart = function(product){
    console.log(product);
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


export const subtractAmountProductFromCart = function(id){
    console.log('prodid:',id);
    return {
        type:CART_SUB_PRODUCT,
        productId:id
    }
}
