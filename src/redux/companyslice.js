import { createSlice } from "@reduxjs/toolkit";
const companyslice = createSlice({
    name:"company",
    initialState:{
        singlecompany: null,
        companies:[]
    },
    reducers:{
        setsinglecompany:(state,action)=>{
            state.singlecompany = action.payload;
        },
        setcompany:(state,action)=>{
            state.companies = action.payload;
        }
    }
});
export const {setsinglecompany,setcompany} = companyslice.actions;
export default companyslice.reducer;