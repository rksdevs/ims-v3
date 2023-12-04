import { createSlice } from "@reduxjs/toolkit";
import { fetchOrders } from "./orderService";

const initialState = {
    isLoading: false,
    orders: [],
    error: ''
}

const orderSlice = createSlice({
    name: "orders",
    initialState,
    //extrareducers
    extraReducers: (builder)=>{
        builder.addCase(fetchOrders.pending, (state)=>{
            state.isLoading = true;
        })
        builder.addCase(fetchOrders.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.orders = action.payload;
            state.error = ''
        })
        builder.addCase(fetchOrders.rejected, (state, action)=>{
            state.isLoading = false;
            state.orders = [];
            state.error = action.payload;
        })
    }
})

export default orderSlice.reducer