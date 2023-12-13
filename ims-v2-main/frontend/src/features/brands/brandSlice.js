import { createSlice } from "@reduxjs/toolkit";
import { addNewBrand, fetchBrands } from "./brandService";

const initialState = {
    isLoading: false,
    brands: [],
    isError: false,
    isSuccess: false,
    errorMessage: ''
}

const brandSlice = createSlice({
    name: "brands",
    initialState,
    reducers: {
        resetBrands: (state) => initialState
    },
    //reducers
    extraReducers: (builder)=>{
        builder.addCase(fetchBrands.pending, (state)=>{
            state.isLoading = true;
        })
        builder.addCase(fetchBrands.fulfilled, (state, action)=> {
            state.isLoading = false;
            state.brands = action.payload;
            state.isError = false;
            state.errorMessage = "";
        })
        builder.addCase(fetchBrands.rejected, (state, action)=> {
            state.isLoading = false;
            state.brands = [];
            state.isError = true;
            state.errorMessage = action.payload;
            state.isSuccess = false;
        })
        builder.addCase(addNewBrand.pending, (state)=>{
            state.isLoading = true;
        })
        builder.addCase(addNewBrand.fulfilled, (state, action)=> {
            state.isLoading = false;
            state.brands = [...state.brands, action.payload];
            state.isError = false;
            state.errorMessage = "";
            state.isSuccess = true;
        })
        builder.addCase(addNewBrand.rejected, (state, action)=> {
            state.isLoading = false;
            state.isError = true;
            state.errorMessage = action.payload;
            state.isSuccess = false;
        })
    }
})

export default brandSlice.reducer
export const {resetBrands} = brandSlice.actions;