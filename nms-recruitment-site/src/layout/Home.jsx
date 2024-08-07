import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import SearchBar from '../components/SearchBar'
import JobCardItem from '../components/JobCardItem'
function Home() {
  return (
    <div className='w-full bg-[#f7f7f7]'>
    <Navbar/>
    <HeroSection/>
    <SearchBar/>
    <JobCardItem/> 
    </div>
  )
}

export default Home