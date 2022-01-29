import {
    PRODUCT_DETAIL,
    GET_PRODUCTS,
    GET_CATEGORY,
    ORDER_BY_PRICE,
    ORDER_BY_NAME,
    FILTER_BY_CATEGORY,
    GET_PRODUCT_NAME,
    FILTER_BY_BRAND,
    CREAR_USERS,
    ADD_INICIO_USER,
    ADD_PRODUCT_SHOPPING_CART,
    REMOVE_CART,
    SHOW_SHOPPING_CART,
    ADD_PRODUCT_WISHLIST,
    DELETE_PRODUCT_WISHLIST,
    CREATE_REVIEWS,
    GET_REVIEWS,
    GET_SALEBANNER,
    DETALLE_USERS, 
    EDIT_SHOPPING_CART,
    SHOW_WISHLIST,
    CREATE_ORDER,
    GET_ORDER,
    DELETE_ITEM_SHOPPINGCART
} from './actions';

const inicialState = {
    cart: {},
    products : [],
    allProducts : [],
    details: [],
    categories: [],
    order: [],
    favs: [],
    create_review :{},
    getreview:[],
    idUser: '',
    userAuth: false,
    saleBanner: [],
    userDetail: {},
    order: {}
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

        case GET_CATEGORY:
            return {
                ...state,
                categories: action.payload
            }
        case FILTER_BY_CATEGORY:
            let all = state.allProducts
            const filtered = action.payload === 'none' ? all : all.filter(e => e.category.name.includes(action.payload))        
            return {
                ...state,
                products: filtered
            }
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
        case CREAR_USERS:
                return { ...state, products: action.payload};

        case ADD_INICIO_USER:
            if(action.payload){
                return {...state, userAuth: true, idUser: action.payload}
            } 
            return {...state, userAuth: false, idUser: []}
        case ADD_PRODUCT_SHOPPING_CART:
            return{
                ...state
            }
        case REMOVE_CART : 
            let {vaciar} = action
            state.cart.shift(vaciar)
            return{
            ...state
            }
        case ADD_PRODUCT_WISHLIST:
            state.favs.push(action.payload)
            return{
                ...state
            }
        case DELETE_PRODUCT_WISHLIST:
            return{
            ...state,
            favs: state.favs.filter(e => e.id !== action.payload.id)
            }

        //crea mi review
        case CREATE_REVIEWS:
            return {
                ...state,
                create_review:action.payload
            }
        //obtengo todos mis reviews
        case GET_REVIEWS:
            return{
                ...state,
                getreview: action.payload
            }
        
        case GET_SALEBANNER:
        return {
            ...state,
            saleBanner: action.payload,
        };

    
        case "DETALLE_USERS":
                return {
                 ...state,
                  userDetail: action.payload 
            }
        case SHOW_SHOPPING_CART:
            return{
                ...state,
                cart: action.payload
            }
        case SHOW_WISHLIST:
            return{
                ...state,
                favs: action.payload
            }
        case EDIT_SHOPPING_CART:
            return {
                ...state
            }
        case CREATE_ORDER:
            return {
                ...state
            }
        case GET_ORDER:
            return {
                ...state,
                order: action.payload
            }
        case DELETE_ITEM_SHOPPINGCART:
            return {
                ...state
            }
        default: return state 

}

}


export default reducer; 

