import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import AxiosInstance from "../Axios/AxiosInstance"

const initialState={
    TeamMember:[],
    status:'idle'
}
export const GetTeamMembers=createAsyncThunk('Team/Members',async()=>{
    try{
        const response=await AxiosInstance.get('team')
        return response.data
    }catch(e){
        return e.response.data
    }
})
export const TeamSlice=createSlice({
    name:'team/members',
    initialState,
    reducers:{},
    extraReducers:{
        [GetTeamMembers.pending]:(state)=>{
            state.status='loading'
            state.TeamMember=null
        },
        [GetTeamMembers.fulfilled]:(state,{payload})=>{
            if(payload.success){
                state.status='success'
                state.TeamMember=payload?.TeamMember
            }
        },
        [GetTeamMembers.pending]:(state)=>{
            state.status='failed'
        }
    }
})