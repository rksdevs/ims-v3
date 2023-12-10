//import configureStore to create store
import { configureStore } from "@reduxjs/toolkit";
// import { useReducer } from "react";
import userReducer from '../features/authSlice'
import productReducer from '../features/product/productSlice'
import orderReducer from "../features/order/orderSlice"
import brandReducer from "../features/brands/brandSlice"

const store = configureStore({
    reducer: {
        user: userReducer,
        products: productReducer,
        orders: orderReducer,
        brands: brandReducer
    }
})

export default store