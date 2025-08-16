import { createSlice } from "@reduxjs/toolkit";
const applicationslice = createSlice({
    name:"application",
    initialState:{
        applicants:[],
    },
    reducers:{
        setallapplicants:(state,action)=>{
            state.applicants = action.payload;
        }
    }
})
export const {setallapplicants} = applicationslice.actions;
export default applicationslice.reducer;