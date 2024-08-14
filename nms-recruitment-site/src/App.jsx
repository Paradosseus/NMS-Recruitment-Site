import './App.css'
import { AdminContainer } from './layout/Admin/AdminContainer'
import Home from './layout/Home'
import { JobDetails } from './layout/JobDetails'
import { ApplicationProcess } from './layout/ApplicationProcess'
import { Route, Routes } from 'react-router-dom'
import { Register } from './layout/Register'
import { SignIn } from './layout/SignIn'
import { Footer } from './components/Footer'
import {Auth} from "./layout/Admin/Auth"
import { JobsSection } from './layout/JobsSection'

function App() {


  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/SignIn' element={<SignIn/>}/>
      <Route path='/jobs' element={<JobsSection/>}/>
      <Route path="/job/:id" element={<JobDetails />} />
      <Route path="/application/:id" element={<ApplicationProcess/>}/>
      <Route path="/admin-auth" element={<Auth/>}/>
      <Route path="/admin" element={<AdminContainer/>}/>
    </Routes> 
    
    </>
  )
}

export default App
