import {
    PRODUCT_DETAIL,
    GET_PRODUCTS,
    GET_PRODUCT_NAME
} from './actions';

const inicialState = {
    products : [],
    allProducts : [],
    details: []
}; 
const reducer = (state = inicialState, action) => {
    switch (action.type) {
        case PRODUCT_DETAIL:
            return {
                ...state,
                details: action.payload
            }
        case GET_PRODUCTS:
            return{
                ...state,
                products: action.payload
            }
        case GET_PRODUCT_NAME:
            return {
                ...state, 
                products: action.payload
            }
    default: return state 
}

}
export default reducer; 

