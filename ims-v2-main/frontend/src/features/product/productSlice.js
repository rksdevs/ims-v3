//import slice creator
import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./productService";

//create initial state
const initialState = {
    isLoading: false,
    products: [],
    error: ''
}


const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        resetProducts: (state)=> {
            return initialState
        },
    },
    //extrareducers
    extraReducers: (builder)=>{
        builder.addCase(fetchProducts.pending, (state)=>{
            state.isLoading = true;
        })
        builder.addCase(fetchProducts.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.products = action.payload;
            state.error = '';
        })
        builder.addCase(fetchProducts.rejected, (state, action)=>{
            state.isLoading = false;
            state.products = [];
            state.error = action.payload;
        })
    }
})

export default productSlice.reducer;
export const {resetProducts} = productSlice.actions;