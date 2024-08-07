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
    <div className='grid grid-cols-4 grid-rows-5'>
        <div className='row-span-5'>
          <div className='form-control border m-10'>
            <h3 className='text-2xl font-semibold'>Filter</h3>
            <div>
              <h4 className='font-medium'>Employment Type</h4>
              <label className=" flex items-center cursor-pointer gap-2">
              <input type="checkbox" className="checkbox" />
              <span className="label-text">Full-Time</span>
            </label>
            <label className=" flex items-center cursor-pointer gap-2">
              <input type="checkbox" className="checkbox" />
              <span className="label-text">Part-Time</span>
            </label>
            </div>
          </div>
        </div>
        <div className='col-span-3 flex items-center justify-stretch gap-10'>
            <h2 className='font-bold text-3xl'>Available Positions</h2>
            <div className='flex-grow'>
            <SearchBar/>
            </div>
        </div>
        <div className='col-span-3 row-span-4'>
          <JobCardItem/> 
        </div>
    </div>

    </div>
  )
}

export default Home