import {
    PRODUCT_DETAIL
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
                products: action.payload,
                details: action.payload
            }
    
    default: return state 
}

}
export default reducer; 
