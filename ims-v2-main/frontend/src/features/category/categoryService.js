import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { createEnhancedTableData } from "../../utils/createEnhancedTableData";

export const fetchCategories = createAsyncThunk('category/fetchCategories', async(_, thunkAPI)=>{
    try {
        const response = await axios.get('category/allCategories', {withCredentials: true});
        if(response.data) {
            const categoryData = createEnhancedTableData({data: response.data, type: "category"})
            localStorage.setItem('categoryData', JSON.stringify(categoryData));
        }
        return response.data;
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

        return thunkAPI.rejectWithValue(message);
    }
})