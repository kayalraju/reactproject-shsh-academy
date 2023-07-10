import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import AxiosInstance from "../Axios/AxiosInstance"
import { toast } from "react-toastify"

const initialState = {
    userData: {},
    status: 'idle',
    loginRedirect: null,
    isLoggedin: false
}

export const UserLogin = createAsyncThunk('User/Login', async (data) => {
    try {
        // console.log(data);
        const response = await AxiosInstance.post('login', data)

        return response?.data
    } catch (e) {
        return e.response?.data
    }
})

export const AuthSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        checkToken: (state) => {
            const token = localStorage.getItem('token')
            token !== null && token !== undefined ? state.isLoggedin = true : state.isLoggedin = false
        },
        logOut: (state) => {
            localStorage.removeItem('token')
            localStorage.removeItem('_name')
            state.isLoggedin = false
            state.loginRedirect = '/login'
        }
    },
    extraReducers: {
        [UserLogin.pending]: (state) => {
            state.status = 'validating'
            state.isLoggedin = false
            localStorage.removeItem('token')
        },
        [UserLogin.fulfilled]: (state, { payload }) => {
            if (payload.status == 200) {
                state.status = 'success'
                state.userData = payload.user
                state.loginRedirect = '/'
                localStorage.setItem('token', JSON.stringify(payload.token))
                localStorage.setItem('_name', JSON.stringify(payload.user.name))
                state.isLoggedin = true
            } else if (payload.status == 400) {
                toast.error(payload.message)
                state.isLoggedin = false
                state.loginRedirect = '/login'
            }
        },
        [UserLogin.rejected]: (state) => {
            state.status = 'failed'
            state.isLoggedin = false
            state.loginRedirect = '/login'
        }
    }
})

export const { checkToken, logOut } = AuthSlice.actions