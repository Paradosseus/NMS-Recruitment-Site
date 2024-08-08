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
    <div className='grid grid-cols-4 grid-rows-[auto,1fr] px-[100px]'>
        <div className='row-span-5 border'>
          <div className='form-control bg-custom-container rounded-lg p-2 w-40 m-auto sticky top-20'>
              <h3 className='text-2xl font-semibold mb-4'>Filter</h3>
              <div className='mb-4'>
                <h4 className='font-medium mb-2'>Employment Type</h4>
                <label className=" flex items-center cursor-pointer gap-2">
                <input type="checkbox" className="checkbox" />
                <span className="label-text">Full-Time</span>
                </label>
                <label className=" flex items-center cursor-pointer gap-2">
                  <input type="checkbox" className="checkbox" />
                  <span className="label-text">Part-Time</span>
                </label>
              </div>
              <div>
                <h4 className='font-medium mb-2'>Work Set-up</h4>
                <label className=" flex items-center cursor-pointer gap-2">
                <input type="checkbox" className="checkbox" />
                <span className="label-text">Hybrid</span>
                </label>
                <label className=" flex items-center cursor-pointer gap-2">
                <input type="checkbox" className="checkbox" />
                <span className="label-text">Office-based</span>
                </label>
                <label className=" flex items-center cursor-pointer gap-2">
                  <input type="checkbox" className="checkbox" />
                  <span className="label-text">Home-based</span>
                </label>
              </div>
          </div>
        </div>
        <div className='col-span-3 flex items-center justify-stretch h-fit my-6'>
            <h2 className='font-bold text-3xl basis-2/5' id='browse-jobs-section'>Available Positions</h2>
            <div className='basis-3/5'>
            <SearchBar/>
            </div>
        </div>
        <div className='col-span-3'>
          <div className='grid grid-cols-3 gap-4'>
            <JobCardItem/> 
            <JobCardItem/> 
            <JobCardItem/> 
            <JobCardItem/> 
            <JobCardItem/> 
            <JobCardItem/> 
            <JobCardItem/> 
            <JobCardItem/> 
            <JobCardItem/> 
          </div>
        </div>
    </div>

    </div>
  )
}

export default Home