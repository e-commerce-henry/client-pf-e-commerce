import {
    PRODUCT_DETAIL,
    GET_PRODUCTS,
    ORDER_BY_PRICE,
    ORDER_BY_NAME,
    FILTER_BY_CATEGORY,
    GET_PRODUCT_NAME,
    FILTER_BY_BRAND,
    ADD_PRODUCT_SHOPPING_CART,
    SHOW_SHOPPING_CART
} from './actions';

const inicialState = {
    cart: [],
    products : [],
    allProducts : [],
    details: [],
    categories: [],
    order: [],


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
                categories: action.payload
            }

        case FILTER_BY_CATEGORY:
            let produ = state.allProducts
            const matches = []
            const produfilter = action.payload === 'none' ? produ : produ.filter(e => e.category.name.includes(action.payload))        
            console.log(produfilter)     
            return {
                ...state,
                products: produfilter
                // products: action.payload === "none" ? state.allProducts : state.allProducts.filter(e => e.categoryId === action.payload)
            }

                // products: action.payload === 'none' ? state.allProducts : state.allProducts.filter((c)=>{return c.categories?.some((a)=> a.name === action.payload)})            };
                // bycategory: action.payload === "none" ? state.allProducts : state.allProducts.filter(e => e.categories === action.payload)}
        case FILTER_BY_BRAND:
            return {
                ...state,
                products: action.payload === "seeall" ? state.allProducts : state.products.filter(e => e.brand === action.payload)}

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
        case ADD_PRODUCT_SHOPPING_CART:
            let {payload} = action
            state.cart.push(payload)
            return{
                ...state
            }
    
            default: return state 

}

}


export default reducer; 

