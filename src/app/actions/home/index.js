import axios from 'axios';
export const GET_PRODUCT_CARD='GET_PRODUCTS';
export const GET_PRODUCT_MORE='GET_PRODUCT_MORE';
 
export function geProducts(){
    const reqest = axios.get('http://localhost:8080/asset/mock-data/product-card.json');
    console.log("getProducts action is called."+reqest); // request is object promise
    return {
        type : GET_PRODUCT_CARD,
        payload : reqest
    }
}

export function geProductMore(){
    const reqest = axios.get('http://localhost:8080/asset/mock-data/products.json');
    console.log("getProductMore action is called."+reqest); // request is object promise
    return {
        type : GET_PRODUCT_MORE,
        payload : reqest
    }
}
