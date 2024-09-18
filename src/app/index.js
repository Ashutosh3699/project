// combine reducers
import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import profileReducer from "../features/profileSlice";
import cartReducer from "../features/cartSlice";
import productReducer from "../features/productSlice";

const rootReducer = combineReducers({

    auth: authReducer,
    profile: profileReducer,
    cart: cartReducer,
    product: productReducer,
    
});

export default rootReducer;