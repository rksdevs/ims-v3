//import createSlice
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

//create initial state
const initialState = {
    isLoading: false,
    userDetails: {},
    isLoggedIn: false,
    error: ''
}

//async action reducer function to fetch users using createAsyncThunk
export const fetchUser = createAsyncThunk('user/fetchUser', async({username, password}, {rejectWithValue})=>{
    try {
        const response = await axios.post('auth/login', {username, password})
        return response.data
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString()
        return rejectWithValue(message) 
    }
})

//create slice
const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder)=> {
        builder.addCase(fetchUser.pending, (state)=> {
            state.isLoading = true;
        });
        builder.addCase(fetchUser.fulfilled, (state, action)=> {
            state.isLoading = false;
            state.userDetails = action.payload;
            state.isLoggedIn = true;
            state.error = '';
        })
        builder.addCase(fetchUser.rejected, (state, action)=>{
            state.isLoading = false;
            state.userDetails = {};
            state.isLoggedIn = false;
            state.error = action.payload;
        })
    }
})

export default userSlice.reducer