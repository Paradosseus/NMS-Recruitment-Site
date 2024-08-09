import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import SearchBar from '../components/SearchBar'
import JobCardItem from '../components/JobCardItem'
import jobs from "../data/jobs"


function Home() {
  return (
    <div className='w-full bg-[#f7f7f7]'>
    <Navbar/>
    <HeroSection/>
    <div className='grid grid-cols-4 grid-rows-[auto,1fr] px-[100px]'>
        <div className='row-span-5 border'>

          <div className='form-control bg-custom-container rounded-lg p-2 w-[250px] m-auto sticky top-20 my-10 '>
              <h3 className='text-3xl font-semibold mb-4 text-center'>Filter</h3>
              <div className='mb-4 grid gap-2 '>
                <h4 className='font-medium mb-2 text-xl'>Employment Type</h4>
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
                <h4 className='font-medium mb-2 text-xl'>Work Set-up</h4>
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
            {jobs.map((job, index) => {
              return (
                <JobCardItem job={job} key={index}/>
              )
            })}
          </div>
        </div>
    </div>

    </div>
  )
}

export default Home