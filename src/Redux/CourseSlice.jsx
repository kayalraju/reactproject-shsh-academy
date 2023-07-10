import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import AxiosInstance from "../Axios/AxiosInstance"
import swal from "sweetalert"

const initialState = {
    courses: [],
    status: 'idle',
    applyStatus: 'idle'
}

export const GetCourses = createAsyncThunk('Courses', async () => {
    try {
        const response = await AxiosInstance.get('course')
        return response?.data
    } catch (e) {
        return e.response?.data
    }
})

export const GetCourseImage = createAsyncThunk('Course/Image', async (id) => {
    try {
        const response = await AxiosInstance(`course/photo/${id}`)
        return response?.data
    } catch (e) {
        return e.response?.data
    }
})

export const ApplyCourse = createAsyncThunk('Course/Apply', async (data) => {
    try {
        // console.log(data.course_name)
        const response = await AxiosInstance.post(`course/apply/${data.course}`, data)
        const responseData = {
            resp: response?.data,
            coursename: data.course_name
        }
        return responseData
    } catch (e) {
        return e.response.data
    }
})

export const CourseSlice = createSlice({
    name: 'Courses',
    initialState,
    reducers: {},
    extraReducers: {
        [GetCourses.pending]: (state) => {
            state.status = 'loading'
            state.courses = null
        },
        [GetCourses.fulfilled]: (state, { payload }) => {
            state.status = 'success'
            state.courses = payload.Courses
        },
        [GetCourses.rejected]: (state) => {
            state.status = 'failed'
        },
        [ApplyCourse.pending]: (state) => {
            state.applyStatus = 'submitting'
        },
        [ApplyCourse.fulfilled]: (state, { payload }) => {
            state.applyStatus = 'success'
            // toast.success(payload?.resp.message)
            //toast.success(payload?.coursename)
            swal("Congratulations!", `You have successfully applied for ${payload?.coursename}`, "success")
        },
        [ApplyCourse.rejected]: (state) => {
            state.applyStatus = 'failed'
        }
    }
})