import { useState } from 'react'
import './App.css'
import Home from './layout/Home'
import { JobDetails } from './layout/JobDetails'
import { Modal } from './components/Modal'
import { ApplicationProcess } from './layout/ApplicationProcess'
import { Route, Routes } from 'react-router-dom'



function App() {


  return (
    <>
      <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/application' element={<ApplicationProcess/>}/> 
  </Routes>
    </>
  )
}

export default App
