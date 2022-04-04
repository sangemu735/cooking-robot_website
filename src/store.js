import { combineReducers, createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";
import {
    addProductReducer,
    editProductReducer,
    getAllProductsReducer,
    getProductByIdReducer,
} from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducer";
import { registerUserReducer, loginUserReducer, getAllUsersReducer } from "./reducers/userReducer";
import { getAllOrdersReducer, getUserOrdersReducer, placeOrderReducer } from "./reducers/orderReducer";

const finalReducer = combineReducers({
    getAllProductsReducer: getAllProductsReducer,
    cartReducer: cartReducer,
    registerUserReducer: registerUserReducer,
    loginUserReducer: loginUserReducer,
    placeOrderReducer: placeOrderReducer,
    getUserOrdersReducer: getUserOrdersReducer,
    addProductReducer: addProductReducer,
    getProductByIdReducer: getProductByIdReducer,
    editProductReducer: editProductReducer,
    getAllOrdersReducer: getAllOrdersReducer,
    getAllUsersReducer: getAllUsersReducer,
});

const cartItems = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [];
const currentUser = localStorage.getItem("currentUser") ? JSON.parse(localStorage.getItem("currentUser")) : null;

const initialState = {
    cartReducer: {
        cartItems: cartItems,
    },
    loginUserReducer: {
        currentUser: currentUser,
    },
};

const composeEnhancers = composeWithDevTools({});
const store = createStore(finalReducer, initialState, composeEnhancers(applyMiddleware(thunk)));

export default store;
