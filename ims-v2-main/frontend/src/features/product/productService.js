//create product async action creator 
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { createTableData } from "../../utils/createDataForTable";

export const fetchProducts = createAsyncThunk('products/fetchProducts', async(_,thunkAPI)=>{
    try {
        const response = await axios.get("product/allProducts", {withCredentials: true})
        if(response.data) {
            const productData = createTableData({data: response.data, type: "products"})
            localStorage.setItem('productData', JSON.stringify(productData));
        }
        return response.data 
    } catch (error) {
        const message =
        (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})