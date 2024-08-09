import { useNavigate } from "react-router-dom";
import Button from "./Button";



const JobCardItem = ({job}) => {

    const navigate = useNavigate();

    const navigateToJobDetails =() => {
        navigate(`/job/${job.id}`, {state: {job}})
    }

    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="p-3">
                <figure className="relative rounded-2xl mb-6">
                    <img
                    src={job.imageBanner}
                    alt="Shoes" className="rounded-2xl"/>
                    <div className="absolute bg-[#000000] opacity-30 h-full w-full"></div>
                    <div className="absolute h-full w-full flex flex-col justify-between text-custom-content-color p-4">
                        <div className="flex justify-between">
                            <span>{job.datePosted}</span>
                            <span>{job.employmentType}</span>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold">{job.jobName}</h3>
                            <span>{job.setUp}</span>
                        </div>
                    </div>

                </figure>
                <div className="flex items-center justify-between">
                    <span className="font-bold text-lg">PHP {job.salaryMinimum} - {job.salaryMaximum}</span>
                    <Button label="Details" onClick={navigateToJobDetails}/>
                </div>
            </div>
        </div>
      
    )
}

export default JobCardItem;