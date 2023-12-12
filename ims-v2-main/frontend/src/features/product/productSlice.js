//import slice creator
import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./productService";

//create initial state
const initialState = {
    isLoading: false,
    products: [],
    isError: false,
    errorMessage: ''
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
            state.isError = false;
            state.errorMessage = '';
        })
        builder.addCase(fetchProducts.rejected, (state, action)=>{
            state.isLoading = false;
            state.products = [];
            state.isError = true
            state.errorMessage = action.payload;
        })
    }
})

export default productSlice.reducer;
export const {resetProducts} = productSlice.actions;