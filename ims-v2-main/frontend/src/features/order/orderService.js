import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { createEnhancedTableData } from "../../utils/createEnhancedTableData";

export const fetchOrders = createAsyncThunk('orders/fetchOrders', async(_, thunkAPI)=>{
    try {
        // throw new Error('Intentional erorr');
        const response = await axios.get("/order/allOrders", {withCredentials: true});
        if(response.data) {
            const orderData = createEnhancedTableData({data: response.data, type: "orders"});
            localStorage.setItem('orderData', JSON.stringify(orderData));
        }
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