import { useLocation, useParams } from "react-router-dom"
import Button from "../components/Button"
import { Modal } from "../components/Modal"
import Navbar from "../components/Navbar"
import jobs from "../data/jobs"
import { MdOutlineArrowBack } from "react-icons/md";
import { useNavigate } from "react-router-dom"

export const JobDetails = () => {
    const location = useLocation() 
    const {id} = useParams();
    const navigate = useNavigate();
    const job = location.state?.job || jobs.find(j => j.id === parseInt(id)); 

    if (!job) {
      return <div>Job not found</div>;
    }

    const navigateToJobDetails = () => {
        
    }

    const handleBackClick = () => {
        if (location.state && location.state.from) {
            navigate(location.state.from, { replace: true });
        } else {
            navigate('/');
        }
    };
    

    return (
        <div className="w-full bg-[#f7f7f7]">
        <Navbar/>
        <div
            className="hero h-[450px] relative"
            style={{backgroundImage: `url(${job.imageBanner})`,}}>
            <div className="hero-overlay bg-[#000000] bg-opacity-60"></div>
        {/* Back Arrow */}
        <a onClick={handleBackClick}>
        <MdOutlineArrowBack 
            className="text-custom-content-color text-5xl absolute top-6 left-0  cursor-pointer ml-[100px] hover:bg-[#0000008d] rounded-full"/>
        </a>
            <div className="hero-content text-custom-content-color text-center relative z-10">
                <div className="max-w-full">
                <h1 className="mb-5 text-5xl font-bold">{job.jobName}</h1>
                </div>
            </div>
        </div>
        
        <div className="grid grid-cols-[auto,1fr] mx-[100px] my-6 gap-6">
            <div className="bg-custom-container rounded-lg p-10 grid gap-6">
                <div className="">
                    <h2 className="text-3xl font-semibold mb-6">Job Description</h2>
                    <p>{job.description}</p>
                </div>
                <div>
                    <h2 className="text-3xl font-semibold mb-6">Requirements</h2>
                    <ul className="list-disc list-inside grid gap-2">
                        {job.requirements.map((requirement, index)=> {
                            return (
                                <li key={index}>{requirement}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <div className="bg-custom-container rounded-lg p-6 w-fit">
                <h2 className="text-3xl font-semibold mb-6">Job Details</h2>
                <div className="mb-6 w-56 grid gap-4">
                    <div>
                        <h3 className="text-lg">Job Creation Date</h3>
                        <span className="font-semibold">{job.datePosted}</span>
                    </div>
                    <div>
                        <h3>Salary</h3>
                        <span className="font-semibold">PHP {job.salaryMinimum} - {job.salaryMaximum}</span>
                    </div>
                    <div>
                        <h3>Employment Type</h3>
                        <span className="font-semibold">{job.employmentType}</span>
                    </div>
                    <div>
                        <h3>Work Set-up</h3>
                        <span className="font-semibold">{job.setUp}</span>
                    </div>
                    <div>
                        <h3>Experience Required</h3>
                        <span className="font-semibold">{job.experience === 0 ? 'No Experience Required' : `${job.experience} years of Experience Required`}</span>
                    </div>
                </div>
                <div className="w-full">
                    <Button label="Apply Now" onClick={()=>document.getElementById('my_modal_4').showModal()} width="w-full"/>
                    <Modal job={job}/>
                </div>
            </div>
        </div>
        <div className="px-[100px] py-4">
    <h2 className="font-semibold mb-6 text-3xl">More Jobs</h2>
    <div className="grid grid-cols-5 gap-4">
        {jobs.slice(0, 5).map((job, index) => {
            return (
                <div key={index} className="card bg-base-100 shadow-lg p-4 flex flex-col">
                    <div className="card-body flex flex-col justify-between">
                        <h2 className="card-title text-lg font-bold">{job.jobName}</h2>
                        <span className="text-sm">{job.setUp}</span>
                        <span className="font-semibold text-sm">PHP {job.salaryMinimum} - {job.salaryMaximum}</span>
                        <div className="card-actions mt-4">
                            <Button label="Details" width="w-full" onClick={()=> {navigate(`/job/${job.id}`, { state: { job, from: location.pathname } });}}/>
                        </div>
                    </div>
                </div>
            );
        })}
    </div>
</div>

        </div>
    )
}