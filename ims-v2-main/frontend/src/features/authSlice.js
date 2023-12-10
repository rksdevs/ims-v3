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
        if(response.data) {
            localStorage.setItem('userDetails', JSON.stringify(response.data))
            localStorage.setItem("isLoggedIn", true);
        }
        return response.data
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString()
        return rejectWithValue(message) 
    }
})

export const userLogout = createAsyncThunk('user/userLogout', ()=>  {
    localStorage.removeItem('userDetails');
    localStorage.removeItem('productData');
    localStorage.removeItem('orderData');
    localStorage.removeItem('isLoggedIn');

}
)

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
        builder.addCase(userLogout.fulfilled, (state)=>{
            state.userDetails = {};
            state.isLoggedIn = false;
        })
    }
})

export default userSlice.reducer;
// export const {logout} = userSlice.actions; 
