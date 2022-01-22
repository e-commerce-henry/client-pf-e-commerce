import axios from 'axios'
export const PRODUCT_DETAIL = 'PRODUCT_DETAIL';

export function productDetail(id){
    return async function (dispatch){
        try {
            let json = await axios.get(`http://localhost:3001/category/${id}`)
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
            dispatch({type: "GET_PRODUCTS", payload: products.data})
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
    return{
        type: 'FILTER_BY_CATEGORY',
        payload
    };
};