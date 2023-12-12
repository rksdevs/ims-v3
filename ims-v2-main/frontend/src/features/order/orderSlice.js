import { createSlice } from "@reduxjs/toolkit";
import { fetchOrders } from "./orderService";

const initialState = {
    isLoading: false,
    orders: [],
    isError: false,
    errorMessage: ''
}

const orderSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {
        resetOrders: (state)=> {
            return initialState
        },
    },
    //extrareducers
    extraReducers: (builder)=>{
        builder.addCase(fetchOrders.pending, (state)=>{
            state.isLoading = true;
        })
        builder.addCase(fetchOrders.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.orders = action.payload;
            state.isError = false;
            state.errorMessage = ''
        })
        builder.addCase(fetchOrders.rejected, (state, action)=>{
            state.isLoading = false;
            state.orders = [];
            state.isError = true;
            state.errorMessage = action.payload;
        })
    }
})

export default orderSlice.reducer
export const {resetOrders} = orderSlice.actions;