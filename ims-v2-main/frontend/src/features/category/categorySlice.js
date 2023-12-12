import { createSlice } from "@reduxjs/toolkit";
import { fetchCategories } from "./categoryService";

const initialState = {
    isLoading: false,
    categories: [],
    isError: false,
    errorMessage: ''
}

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        resetCategory:(state)=>initialState
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchCategories.pending, (state)=> {
            state.isLoading = true;
        })
        builder.addCase(fetchCategories.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.categories = action.payload;
            state.isError = false;
            state.errorMessage = '';
        })
        builder.addCase(fetchCategories.rejected, (state, action)=>{
            state.isLoading = false;
            state.categories = [];
            state.isError = true;
            state.errorMessage = action.payload
        })
    }
})

export default categorySlice.reducer
export const {resetCategory} = categorySlice.actions