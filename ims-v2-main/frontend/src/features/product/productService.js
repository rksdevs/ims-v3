//create product async action creator 
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk('products/fetchProducts', async(_,thunkAPI)=>{
    try {
        const response = await axios.get("product/allProducts", {withCredentials: true})
        return response.data 
    } catch (error) {
        const message =
        (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})