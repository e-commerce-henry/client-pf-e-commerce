import {
    PRODUCT_DETAIL
} from './actions';

const inicialState = {
    products : [],
    allProducts : [],
    details: [],
    category: []
}; 
const reducer = (state = inicialState, action) => {
    switch (action.type) {
        case PRODUCT_DETAIL:
            return {
                ...state,
                products: action.payload,
                details: action.payload
            }
        case "GET_PRODUCTS":
            return{
                ...state,
                products: action.payload
            }
        case "GET_CATEGORY":
            return {
                ...state,
                category: action.payload
            }
        case 'FILTER_BY_CATEGORY':
            return {
                ...state,
                products: action.payload === "none" ? state.allProducts : state.allProducts.filter(e => e.category === action.payload)}
                // products: action.payload === 'none' ? state.allProducts : state.allProducts.filter((c)=>{return c.category?.some((a)=> a.name === action.payload)})            };
    default: return state 
}

}
export default reducer; 
