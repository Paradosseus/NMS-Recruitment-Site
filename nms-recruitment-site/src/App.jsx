import './App.css'
import { AdminContainer } from './layout/Admin/AdminContainer'
// import Home from './layout/Home'
// import { JobDetails } from './layout/JobDetails'
// import { ApplicationProcess } from './layout/ApplicationProcess'
// import { Route, Routes } from 'react-router-dom'
// import { Register } from './layout/Register'
// import { SignIn } from './layout/SignIn'
// import { Footer } from './components/Footer'
import { SignIn } from './layout/Admin/SignIn'
function App() {


  return (
    <>
     {/* <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/SignIn' element={<SignIn/>}/>
      <Route path="/job/:id" element={<JobDetails />} />
      <Route path="/application/:id" element={<ApplicationProcess/>}/>
    </Routes>   */}
    <AdminContainer/>
    </>
  )
}

export default App
