import { createSlice } from "@reduxjs/toolkit";
import { fetchBrands } from "./brandService";

const initialState = {
    isLoading: false,
    brands: [],
    error: ''
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
            state.error = ""
        })
        builder.addCase(fetchBrands.rejected, (state, action)=> {
            state.isLoading = false;
            state.brands = [];
            state.error = action.payload
        })
    }
})

export default brandSlice.reducer
export const {resetBrands} = brandSlice.actions;