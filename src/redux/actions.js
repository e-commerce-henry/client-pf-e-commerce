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
export const REMOVE_CART = 'REMOVE_CART';
export const ADD_PRODUCT_WISHLIST = 'ADD_PRODUCT_WISHLIST';
export const DELETE_PRODUCT_WISHLIST = 'DELETE_PRODUCT_WISHLIST';
export const CREATE_REVIEWS = "CREATE_REVIEWS";
export const GET_REVIEWS = "GET_REVIEWS";
export const GET_SALEBANNER = "GET_SALEBANNER";
export const DETALLE_USERS = "DETALLE_USERS";
export const EDIT_SHOPPING_CART = "EDIT_SHOPPING_CART"


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

export function addProductShoppingCart(body){
    return async function(dispatch){
        await axios.post(`http://localhost:3001/cart`, body)
        dispatch ({
            type: ADD_PRODUCT_SHOPPING_CART
        })
    }
}

export function removeCart(id){
    return async function (dispatch){
        let json = await axios.post(`http://localhost:3001/cart`)
        dispatch({
            type: REMOVE_CART,
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

export function deleteProductWishlist(id){
    return async function (dispatch){
        let json = await axios.get(`http://localhost:3001/products/${id}`)
        dispatch({
            type: DELETE_PRODUCT_WISHLIST,
            payload: json.data
        })
    }
}
//CreateReview crea una puntuacion y comentario 
export function createReview(id,review){
    return dispatch => {
        axios.post(`http://localhost:3001/productReview/${id}/review`,review)
        .then((result) => {
            return dispatch({
                type:CREATE_REVIEWS,
                payload: result.data
            })
        }).catch((err) => {
            console.log('err :>> ', err);
        });
    }

}

//obtengo todos mis comentarios por ID de producto
export function getReview(id){
    return dispatch => {
        axios.get(`http://localhost:3001/productReview/${id}/review`)
        .then((result) => {
            return dispatch({
                type:GET_REVIEWS,
                payload:result.data
            })
        }).catch((err) => {
            console.log('err :>> ', err);
        });
    }
}

//obtengo mi salebanner
export function getSaleBanner() {
	return  (dispatch) => {
		axios.get("http://localhost:3001/saleBanner")
        .then((result) => {
            return dispatch({
                type: GET_SALEBANNER,
                payload: result.data
            })
        }).catch((err) => {
            console.error(err)
        });
		
	}
} 
export const detalleUsers = (id) => {
    return async (dispatch) => {
        let response = await axios.get(`http://localhost:3001/users/${id}`);
        dispatch({
            type: DETALLE_USERS,
            payload: response.data
        });
    }
}

export function getShoppingCart(userId){
    return async function(dispatch){
        let prod = await axios(`http://localhost:3001/cart/${userId}`)
        dispatch ({
            type: SHOW_SHOPPING_CART, payload: prod.data
        })
    }
}

export function editShoppingCart(body){
    return async function (dispatch){
        console.log(body);
        await axios.put(`http://localhost:3001/cart/`, body)
        dispatch({
            type: EDIT_SHOPPING_CART
        })
    }
}