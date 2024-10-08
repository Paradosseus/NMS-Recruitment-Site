import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import SearchBar from '../components/SearchBar'
import JobCardItem from '../components/JobCardItem'
import jobs from "../data/jobs"
import { Footer } from '../components/Footer'
import { Filter } from '../components/Filter'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'


function Home() {
  const navigate = useNavigate()

  const goToJobsPage = () => {
    navigate("/jobs")
  }

  return (
    <div className='w-full bg-[#f7f7f7]'>
    <Navbar/>
    <HeroSection/>
    <div className='grid grid-cols-4 grid-rows-[auto,1fr]  mx-[100px] my-[50px]'>
        <div className='row-span-5'>
          <Filter/>
        </div>
        <div className='col-span-3 flex items-center justify-between h-fit my-6'>
            <h2 className='font-bold text-3xl ' id='browse-jobs-section'>Available Positions</h2>
            <div className=''>
            <SearchBar/>
            </div>
        </div>
        <div className='col-span-3'>
          <div className='grid grid-cols-3 gap-4'>
            {jobs.slice(0, 6).map((job, index) => {
              return (
                <JobCardItem job={job} key={index}/>
              )
            })}
          </div>
          <div className="flex justify-center mt-6">
            <Button label='View all Jobs'onClick={goToJobsPage}/>
          </div>
        </div>
 
    </div>

    <Footer/>
    </div>
  )
}

export default Home