import axios from 'axios'
export const PRODUCT_DETAIL = 'PRODUCT_DETAIL';
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const ORDER_BY_PRICE = 'ORDER_BY_PRICE';
export const ORDER_BY_NAME = 'ORDER_BY_NAME';
export const FILTER_BY_CATEGORY = 'FILTER_BY_CATEGORY';


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
                type: 'FILTER_BY_CATEGORY',
                payload 
        }))
       
    };
};

export function orderByName(payload) {
    return function (dispatch){
        return(
            dispatch({
                type: 'ORDER_BY_NAME',
                payload
        }))
    };
};

export function orderByPrice(payload) {
    return function (dispatch){
        return(
            dispatch({
                type: 'ORDER_BY_PRICE',
                payload
        }))
    };
};