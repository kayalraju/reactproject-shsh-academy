import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import AxiosInstance from "../Axios/AxiosInstance"

const initialState = {
    bannerdata: [],
    status: 'idle'
}
export const GetBanner = createAsyncThunk('Banner', async () => {
    try {
        const response = await AxiosInstance.get('banner')
        return response?.data
    } catch (e) {
        return e.response?.data
    }
})

export const BannerSlice = createSlice({
    name: 'banner',
    initialState,
    reducers: {},
    extraReducers: {
        [GetBanner.pending]: (state) => {
            state.status = 'loading'
            state.bannerdata = null
        },
        [GetBanner.fulfilled]: (state, { payload }) => {
            if (payload.success) {
                state.status = 'success'
                state.bannerdata=payload.bannerdata
            }
        },
        [GetBanner.rejected]:(state)=>{
            state.status='failed'
        }
    }
})