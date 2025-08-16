import { createSlice } from "@reduxjs/toolkit";
const jobslice = createSlice({
    name:"job",
    initialState:{
        alljobs:[],
        singlejob:null,
        alladminjobs:[],
        allappliedjobs:[],
        searchedquery:"",
    },
    reducers:{
        setalljobs:(state,action)=>{
            state.alljobs = action.payload;
        },
        setsinglejob:(state,action)=>{
            state.singlejob= action.payload
        },
        setalladminjobs:(state,action)=>{
            state.alladminjobs = action.payload
        },
        setallappliedjobs:(state,action)=>{
               state.allappliedjobs = action.payload
        },
        setsearchedquery:(state,action)=>{
            state.searchedquery = action.payload
        }
    }
});
export const {setalljobs, setsinglejob , setalladminjobs,setallappliedjobs, setsearchedquery} = jobslice.actions;
export default jobslice.reducer;
