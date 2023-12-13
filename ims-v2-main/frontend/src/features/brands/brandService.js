import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { createEnhancedTableData } from "../../utils/createEnhancedTableData";

const API_URL = '/brands'

export const fetchBrands = createAsyncThunk('brands/fetchBrands', async(_, thunkAPI)=>{
    try {
        const response = await axios.get(`${API_URL}/allBrands`, {withCredentials: true})
        if(response.data) {
            const brandData = createEnhancedTableData({data: response.data, type: "brands"})
            localStorage.setItem('brandData', JSON.stringify(brandData));
        }
        return response.data
    } catch (error) {
        const message = (error.message && error.response.data && error.response.data.message) || error.message || error.toString()

        return thunkAPI.rejectWithValue(message);
    }
})

export const addNewBrand = createAsyncThunk('brands/addNewBrand', async({brandName, status}, thunkAPI)=>{
    try {
        const response = await axios.post(`${API_URL}/addBrand`, {brandName, status}, {withCredentials: true})
        console.log(response.data)
        return response.data
    } catch (error) {
        const message = (error.message && error.response.data && error.response.data.message) || error.message || error.toString()

        return thunkAPI.rejectWithValue(message);
    }
})
