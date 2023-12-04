//import configureStore to create store
import { configureStore } from "@reduxjs/toolkit";
// import { useReducer } from "react";
import userReducer from '../features/authSlice'
import productReducer from '../features/product/productSlice'
import orderReducer from "../features/order/orderSlice"

const store = configureStore({
    reducer: {
        user: userReducer,
        products: productReducer,
        orders: orderReducer
    }
})

export default store