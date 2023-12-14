import { createSlice } from "@reduxjs/toolkit";
import { addNewBrand, deleteBrand, fetchBrands } from "./brandService";

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
        resetBrandsSuccess: (state) => {
            state.isSuccess = false;
        },
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
            // setTimeout(()=>{
            //     state.isSuccess = false;
            // }, 2000)
        })
        builder.addCase(addNewBrand.rejected, (state, action)=> {
            state.isLoading = false;
            state.isError = true;
            state.errorMessage = action.payload;
            state.isSuccess = false;
        })
        builder.addCase(deleteBrand.pending, (state)=>{
            state.isLoading = true;
        })
        builder.addCase(deleteBrand.fulfilled, (state, action)=> {
            state.isLoading = false;
            state.brands = state.brands.filter((item)=> item._id !== action.payload._id)
            state.isError = false;
            state.errorMessage = "";
            state.isSuccess = true;

            // setTimeout(()=>{
            //     state.isSuccess = false;
            // }, 2000)
        })
        builder.addCase(deleteBrand.rejected, (state, action)=> {
            state.isLoading = false;
            state.isError = true;
            state.errorMessage = action.payload;
            state.isSuccess = false;
        })
    }
})

export default brandSlice.reducer
export const {resetBrands, resetBrandsSuccess} = brandSlice.actions;