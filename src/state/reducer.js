import {
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    ADD_TO_CART_START,
    ADD_TO_CART_SUCCESS,
    ADD_TO_CART_FAILURE,
    DELETE_FROM_CART_START,
    DELETE_FROM_CART_SUCCESS,
    DELETE_FROM_CART_FAILURE,
} from "./actions/types";
import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";
import categoryReducer from "./reducers/categoryReducer";
import productReducer from "./reducers/productReducer";

export default combineReducers({
    cart: cartReducer,
    categories: categoryReducer,
    products: productReducer
})



// const initalStore = {
//     categories: {
//         data: [],
//         isFetching: false,
//         error: null
//     },
//     products: {
//         data: [],
//         isFetching: false,
//         error: null
//     },
//     cart: {
//         data: [],
//         isUpdating: false,
//         error: null
//     },
// };

// export default (state = initalStore, action) => {
//     switch (action.type) {
//         case FETCH_DATA_START:
//             return {
//                 ...state,
//                 categories: {
//                     isFetching: true,
//                 },
//                 products: {
//                     isFetching: true,
//                 },
//             }
//         case FETCH_DATA_SUCCESS:
//             return {
//                 ...state,
//                 categories: {
//                     isFetching: false,
//                     data: action.payload.categories
//                 },
//                 products: {
//                     isFetching: false,
//                     data: action.payload.products
//                 },
//             }
//         case FETCH_DATA_FAILURE:
//             return {
//                 ...state,
//                 // isFetching: false,
//                 // error: action.payload
//                 categories: {
//                     isFetching: false,
//                     error: action.payload
//                 },
//                 products: {
//                     isFetching: false,
//                     error: action.payload
//                 },
//             }
//         case ADD_TO_CART_START:
//             return {
//                 ...state,
//                 isUpdating: true,
//             }
//         case ADD_TO_CART_SUCCESS:
//             return {
//                 ...state,
//                 isUpdating: false,
//                 data: action.payload
//             }
//         case ADD_TO_CART_FAILURE:
//             return {
//                 ...state,
//                 isUpdating: false,
//                 error: action.payload
//             }
//         case DELETE_FROM_CART_START:
//             return {
//                 ...state,
//                 isUpdating: true,
//             }
//         case DELETE_FROM_CART_SUCCESS:
//             return {
//                 ...state,
//                 isUpdating: false,
//                 data: action.payload
//             }
//         case DELETE_FROM_CART_FAILURE:
//             return {
//                 ...state,
//                 isUpdating: false,
//                 error: action.payload
//             }
//     }
// }