import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import AxiosInstance from "../Axios/AxiosInstance"

const initialState = {
    testimonials: [],
    status: 'idle'
}

export const GetTestimonialsList = createAsyncThunk('Testimonials/List', async () => {
    try {
        const response = await AxiosInstance.get('testimonial')
        return response?.data
    } catch (e) {
        return e.response?.data
    }
})

export const TestimonialsSlice = createSlice({
    name: 'testimonials',
    initialState,
    reducers: {},
    extraReducers: {
        [GetTestimonialsList.pending]: (state) => {
            state.status = 'loading'
            state.testimonials = null
        },
        [GetTestimonialsList.fulfilled]: (state, action) => {
            state.status = 'success'
            state.testimonials = action.payload?.testimonials
        },
        [GetTestimonialsList.rejected]: (state) => {
            state.status = 'failed'
            state.testimonials = null
        }
    }
})