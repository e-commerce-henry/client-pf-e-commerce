import {
    PRODUCT_DETAIL,
    GET_PRODUCTS,
    ORDER_BY_PRICE,
    ORDER_BY_NAME,
    FILTER_BY_CATEGORY,
    GET_PRODUCT_NAME,
    FILTER_BY_BRAND
} from './actions';

const inicialState = {
    products : [],
    allProducts : [],
    details: [],
    category: [],
    order: [],
    bycategory: [],
    bybrand: []
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
                products: action.payload,
                allProducts: action.payload
            }

        case GET_PRODUCT_NAME:
            return {
                ...state, 
                products: action.payload
            }

        case "GET_CATEGORY":
            return {
                ...state,
                category: action.payload
            }

        case FILTER_BY_CATEGORY:
            return {
                ...state,
                // bycategory: action.payload === "none" ? state.allProducts : state.allProducts.filter(e => e.category === action.payload)}
                products: action.payload === 'none' ? state.allProducts : state.allProducts.filter((c)=>{return c.category?.some((a)=> a.name === action.payload)})            };
        
        case FILTER_BY_BRAND:
            return {
                ...state,
                products: action.payload === "seeall" ? state.allProducts : state.products.filter(e => e.brand === action.payload)}
                // products: action.payload === 'none' ? state.allProducts : state.allProducts.filter((c)=>{return c.category?.some((a)=> a.name === action.payload)})            };

        case ORDER_BY_PRICE:
            let sortedAr = action.payload === 'price_asc' ? state.products.sort(function (a, b){
                if (a.price > b.price) {
                    return 1;
                };
                if (b.price > a.price) {
                    return -1;
                };
                return 0;
            }) :
                state.products.sort(function (a, b) {
                    if (a.price > b.price) {
                        return -1;
                    };
                    return 0;
                });
                return {
                    ...state,
                    order: sortedAr
                };
        
        case ORDER_BY_NAME:
            let sortedArr = action.payload === 'name_asc' ? state.products.sort(function (a, b){
                if (a.name > b.name) {
                    return 1;
                };
                if (b.name > a.name) {
                    return -1;
                };
                return 0;
            }) :
                state.products.sort(function (a, b) {
                    if (a.name > b.name) {
                        return -1;
                    };
                    return 0;
                });
                return {
                    ...state,
                    order: sortedArr
                };
    
            default: return state 

}

}
export default reducer; 

