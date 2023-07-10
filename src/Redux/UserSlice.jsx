import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import AxiosInstance from "../Axios/AxiosInstance"
import { toast } from "react-toastify"

const initialState = {
    status: 'idle',
    data: {},
    redirectTo: ''
}

export const RegisterUser = createAsyncThunk('User/Register', async (data) => {
    try {
        const response = await AxiosInstance.post('register', data)
        return response?.data
    } catch (e) {
        return e.response?.data
    }
})

export const UserSlice = createSlice({
    name: 'user/register',
    initialState,
    reducers: {},
    extraReducers: {
        [RegisterUser.pending]: (state) => {
            console.log('Processing');
            state.status = 'processing'
        },
        [RegisterUser.fulfilled]: (state, { payload }) => {
            if (payload.success) {
                toast.success(payload.message, {
                    position: toast.POSITION.TOP_CENTER
                })
                state.status = 'success'
                state.data = payload
                state.redirectTo = '/login'
            } else {
                toast.error(payload.msg, {
                    position: toast.POSITION.TOP_CENTER
                })
                state.redirectTo = ''
            }
        }
    },
    [RegisterUser.rejected]: (state, { payload }) => {
        state.status = 'failed'
        state.data = payload
    }
})