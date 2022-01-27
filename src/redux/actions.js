import axios from 'axios'
export const PRODUCT_DETAIL = 'PRODUCT_DETAIL';
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_CATEGORY = 'GET_CATEGORY';
export const ORDER_BY_PRICE = 'ORDER_BY_PRICE';
export const ORDER_BY_NAME = 'ORDER_BY_NAME';
export const FILTER_BY_CATEGORY = 'FILTER_BY_CATEGORY';
export const GET_PRODUCT_NAME = 'GET_PRODUCT_NAME';
export const FILTER_BY_BRAND = 'FILTER_BY_BRAND';
export const CREAR_USERS = "CREAR_USERS";
export const ADD_INICIO_USER = "ADD_INICIO_USER";
export const ADD_PRODUCT_SHOPPING_CART = 'ADD_PRODUCT_SHOPPING_CART';
export const SHOW_SHOPPING_CART = 'SHOW_SHOPPING_CART';
export const ADD_PRODUCT_WISHLIST = 'ADD_PRODUCT_WISHLIST';
export const DELETE_PRODUCT_WISHLIST = 'DELETE_PRODUCT_WISHLIST';



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

export const addUsers = (payload) => {
    return async (dispatch) => {
        let response = await axios.post(`http://localhost:3001/auth/signup`, payload);
        return response;
    }
}
//Responder
export const addInicioUser = ({email, pwd}) => {
    return  (dispatch) => {
        axios.post(`http://localhost:3001/auth/signIn`, {email, pwd}, { withCredentials: true })
        .then(res =>{
            res.data.user? 
            dispatch({type: ADD_INICIO_USER, payload:res.data.user}) 
            : 
            dispatch({type: ADD_INICIO_USER, payload: false}) 
        })
    }
}
//Acciones carrito 

export function addProductShoppingCart(id){
    return async function(dispatch){
        let json = await axios.get(`http://localhost:3001/products/${id}`)
        dispatch ({
            type: ADD_PRODUCT_SHOPPING_CART, 
            payload: json.data
        })
    }
}

export function addProductWishlist(id){
    return async function(dispatch){
        let prod = await axios.get(`http://localhost:3001/products/${id}`)
        dispatch ({
            type: ADD_PRODUCT_WISHLIST, 
            payload: prod.data
        })
    }
}


