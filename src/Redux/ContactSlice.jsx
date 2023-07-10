import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import AxiosInstance from "../Axios/AxiosInstance"
import { toast } from "react-toastify"
import swal from "sweetalert"

const initialState = {
    status: 'idle'
}
export const SubmitMessage = createAsyncThunk('Post/Contact', async (data) => {
    try {
        const response = await AxiosInstance.post('contact/create', data)
        return response?.data
    } catch (e) {
        return e.response?.data
    }
})
export const ContactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {},
    extraReducers: {
        [SubmitMessage.pending]: (state) => {
            state.state = 'submitting'
        },
        [SubmitMessage.fulfilled]: (state, { payload }) => {
            if (payload.success) {
                state.status = 'success'
                // toast.success(payload.message)
                swal('Thank you',payload.message,'success')
            } else {
                state.status = 'failed'
                toast.error(payload.message)
            }
        },
        [SubmitMessage.rejected]: (state) => {
            state.status = 'failed'
        }
    }
})