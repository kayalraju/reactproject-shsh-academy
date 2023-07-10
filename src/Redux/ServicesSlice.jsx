import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import AxiosInstance from "../Axios/AxiosInstance"

const initialState = {
    services: [],
    status: 'idle'
}

export const GetServices = createAsyncThunk('Services', async () => {
    try {
        const response = await AxiosInstance('service')
        return response?.data
    } catch (e) {
        return e.response?.data
    }
})

export const ServicesSlice = createSlice({
    name: 'Services',
    initialState,
    reducers: {},
    extraReducers: {
        [GetServices.pending]: (state) => {
            state.status = 'loading'
            state.services = null
        },
        [GetServices.fulfilled]: (state, action) => {
            state.status = 'success'
            state.services = action.payload?.data
        },
        [GetServices.rejected]: (state) => {
            state.status = 'failed'
            state.services = null
        }
    }
})