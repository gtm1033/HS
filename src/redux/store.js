import { configureStore } from "@reduxjs/toolkit";
import authslice from './authslice';
import jobslice from './jobslice';
import companyslice from './companyslice'
import applicationslice from './applicationslice'
const store = configureStore({
    reducer:{
        auth: authslice,
        job: jobslice,
        company: companyslice,
        application: applicationslice
    }
});
export default store;