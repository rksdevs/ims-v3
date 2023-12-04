import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchOrders = createAsyncThunk('orders/fetchOrders', async(_, thunkAPI)=>{
    try {
        // throw new Error('Intentional erorr');
        const response = await axios.get("order/allOrders", {withCredentials: true});
        return response.data;
    } catch (error) {
        const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
        return thunkAPI.rejectWithValue(message);
    }
})