
import React, { useEffect } from "react"
import Navbar from "./Navbar"
import Login from "./Login"
import {Route, Routes, useNavigate} from "react-router"
import Home from "./Home"
import Browse from "./Browse"
import About from "./About"
import SignUp from "./Signup"
import Jobs from "./Jobs"
import Profile from "./Profile"
import Description from "./Description"
import Usergetalljob from "./hooks/Usergetalljob"
import Userloader from "./Userloader"
import Company from "./Admin/Company"
import Companycreate from "./Admin/Companycreate"

import ProtectedRoute from './Admin/ProtectedRoute';
import Companytable from "./Admin/Companytable"
import Companysetup from "./Admin/Companysetup"
import { useSelector } from "react-redux"
import Adminjobs from "./Admin/Adminjobs"
import Adminpostjob from "./Admin/Adminpostjob"
import Applicants from "./Admin/Applicants"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Testmonial from "./Testmonial"

function App() {
      Usergetalljob();
      Userloader();
      const {user} = useSelector(store => store.auth);
      const navigate = useNavigate();
      useEffect(()=>{
        if(user?.role == 'recruiter'){
           navigate("/admin/company")
        }
      },[])
  return (
    <>
     <div >
      
     <Navbar />
      <ToastContainer />
     <Routes>
      <Route  path="/" element={< Home/>}/>
      
      <Route  path="/Jobs" element={< Jobs/>}/>
      <Route  path="/Browse" element={< Browse/>}/>
      <Route  path="/Signup" element={< SignUp/>}/>
      <Route  path="/Login" element={< Login/>}/>
      <Route  path="/Profile" element={< Profile/>}/>
      
      <Route  path="/About" element={< About/>}/>
      
      <Route  path="/Testmonial" element={< Testmonial/>}/>
      <Route path="/Description/:id" element={<Description/>}/>
      
      
      <Route  path="/admin/company" element={<ProtectedRoute>< Company/></ProtectedRoute>}/>
      <Route  path="/admin/companycreate" element={< Companycreate/>}/>
      <Route  path="/admin/companytable" element={< Companytable/>}/>
      <Route  path="/admin/companysetup/:id" element={< Companysetup/>}/>

      
      <Route  path="/admin/adminjobs" element={< Adminjobs/>}/>
       <Route  path="/admin/adminpostjob" element={< Adminpostjob/>}/>
       
       <Route  path="/admin/jobs/:id/applicants" element={< Applicants/>}/>
     </Routes>
     
     
        
         
     </div>
    </>
  )
}

export default App
