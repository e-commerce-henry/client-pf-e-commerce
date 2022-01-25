import axios from 'axios'
export const PRODUCT_DETAIL = 'PRODUCT_DETAIL';
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const ORDER_BY_PRICE = 'ORDER_BY_PRICE';
export const ORDER_BY_NAME = 'ORDER_BY_NAME';
export const FILTER_BY_CATEGORY = 'FILTER_BY_CATEGORY';
export const GET_PRODUCT_NAME = 'GET_PRODUCT_NAME';
export const FILTER_BY_BRAND = 'FILTER_BY_BRAND';
export const ADD_CART = 'ADD_CART';
export const REMOVE_ONE_CART = 'REMOVE_ONE_CART';
export const REMOVE_ALL_CART = 'REMOVE_ALL_CART';
export const CLEAR_CART = 'CLEAR_CART'


export function productDetail(id){
    return async function (dispatch){
        try {
            let json = await axios.get(`http://localhost:3001/products/${id}`)
            return dispatch({
                type: PRODUCT_DETAIL,
                payload: json.data
            })
        }catch (error){
            console.log(error);
        }
    }
}

export function getProducts(){
    return async function(dispatch){
        const products = await axios('http://localhost:3001/products')
        return(
            dispatch({type: GET_PRODUCTS , payload: products.data})
        )
    }
}


export function getProductName(name){
        return async function (dispatch){
            try {
            let json = await axios.get("http://localhost:3001/products?name=" + name)
            dispatch ({
                type: GET_PRODUCT_NAME, 
                payload: json.data
            })
             
        } catch (error) {
            console.log(error);
        }
        
    }}
    

export function getCategory(){
    return async function (dispatch){
        const category = await axios('http://localhost:3001/category')
        return(
            dispatch({type: "GET_CATEGORY", payload: category.data})
        )
    }
};

export function filterProductsByCategory(payload){
    return function (dispatch){
        return(
            dispatch({
                type: FILTER_BY_CATEGORY,
                payload 
        }))
       
    };
};

export function filterProductsByBrand(payload){
    return function (dispatch){
        return(
            dispatch({
                type: FILTER_BY_BRAND,
                payload 
        }))
       
    };
};

export function orderByName(payload) {
    return function (dispatch){
        return(
            dispatch({
                type: ORDER_BY_NAME,
                payload
        }))
    };
};

export function orderByPrice(payload) {
    return function (dispatch){
        return(
            dispatch({
                type: ORDER_BY_PRICE,
                payload
        }))
    };
};
//Acciones carrito 

export function addCart(payload){
    return async function (dispatch){
        let res = await axios('http://localhost:3001/cart', payload)
        return res;
    }
}
export function removeOneCart(){

}
export function removeAllCart(){

}
export function clearCart(){

}