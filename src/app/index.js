// combine reducers
import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import profileReducer from "../features/profileSlice";
import cartReducer from "../features/cartSlice";
import productReducer from "../features/productSlice";
import viewProductReducer from "../features/viewProduct";

const rootReducer = combineReducers({

    auth: authReducer,
    profile: profileReducer,
    cart: cartReducer,
    product: productReducer,
    viewProduct: viewProductReducer
    
});

export default rootReducer;