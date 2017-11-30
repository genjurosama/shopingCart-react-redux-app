const products = [
    {"id": 1, "title": "iPad 4 Mini", "unitPrice": 500.01 ,"price": 500.01},
    {"id": 2, "title": "H&M T-Shirt White", "unitPrice": 10.99,"price": 10.99},
    {"id": 3, "title": "Charli XCX - Sucker CD", "unitPrice": 15.99 , "price": 15.99}
  ];
export const getProducts  = async function(){
    return products;
}