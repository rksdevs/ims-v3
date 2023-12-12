import { createSlice } from "@reduxjs/toolkit";
import { fetchBrands } from "./brandService";

const initialState = {
    isLoading: false,
    brands: [],
    isError: false,
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
            state.errorMessage = ""
        })
        builder.addCase(fetchBrands.rejected, (state, action)=> {
            state.isLoading = false;
            state.brands = [];
            state.isError = true;
            state.errorMessage = action.payload
        })
    }
})

export default brandSlice.reducer
export const {resetBrands} = brandSlice.actions;