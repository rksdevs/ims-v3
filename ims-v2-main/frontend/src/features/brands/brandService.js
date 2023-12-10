import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { createTableData } from "../../utils/createDataForTable";

export const fetchBrands = createAsyncThunk('brands/fetchBrands', async(_, thunkAPI)=>{
    try {
        const response = await axios.get("brands/allBrands", {withCredentials: true})
        if(response.data) {
            const brandData = createTableData({data: (await response).data, type: "brands"})
            localStorage.setItem('brandData', JSON.stringify(brandData));
        }
        return response.data
    } catch (error) {
        const message = (error.message && error.response.data && error.response.data.message) || error.message || error.toString()

        return thunkAPI.rejectWithValue(message);
    }
})