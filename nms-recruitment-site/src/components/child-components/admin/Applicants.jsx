import { useState } from "react";
import applicants from "../../../data/applicants"
import avatar from "../../../assets/img/avatar.png"
export const Applicants = () => {
    const [selectedApplicant, setSelectedApplicant] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState(0); 

    const handleRowClick = (applicant) => {
      setSelectedApplicant(applicant);
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
      setSelectedApplicant(null);
      setActiveTab(0); 
    };


    return (
        <div className="h-full bg-custom-container p-4 rounded-lg">
            <h2 className="text-3xl font-semibold p-4 border-b-2 border-custom-red">Applicants</h2>
            <div className="max-h-[700px] overflow-y-auto ">
                <table className="table w-full">
                    <thead>
                    <tr >
                        <th>Date</th>
                        <th>Name</th>
                        <th>Applying For</th>
                        <th>location</th>
                        <th>Status</th>
                        <th>Source</th>
                    </tr>
                    </thead>
                    <tbody>
                    {applicants.map((applicant)=> {
                        return (
                        <tr key={applicant.id} 
                            className="hover cursor-pointer" 
                            onClick={() => handleRowClick(applicant)}>
                            <th>{applicant.date}</th>
                            <td>{applicant.name}</td>
                            <td>{applicant.position}</td>
                            <td>{applicant.jobType}</td>
                            <td>{applicant.status}</td>
                            <td>{applicant.source}</td>
                        </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>

            {isModalOpen && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Applicant Details</h3>
            {selectedApplicant && (
              <div>
                <div role="tablist" className="tabs tabs-lifted">
                <a role="tab" className={`tab tab-lifted ${activeTab === 0 ? "tab-active" : ""}`}
                onClick={() => setActiveTab(0)}>Applicant Details</a>  
                <a role="tab" className={`tab tab-lifted ${activeTab === 1 ? "tab-active" : ""}`}
                onClick={() => setActiveTab(1)}>Assessment Info</a>
                </div>
                    {activeTab === 0 && (
                    <div className="p-4">
                        <img src={avatar} alt="" className="w-[100px] mx-auto my-2"/>
                        <p><strong>Name:</strong> {selectedApplicant.name}</p>
                        <p><strong>Date:</strong> {selectedApplicant.date}</p>
                        <p><strong>Applying For:</strong> {selectedApplicant.position}</p>
                        <p><strong>Location:</strong> {selectedApplicant.jobType}</p>
                        <p><strong>Status:</strong> {selectedApplicant.status}</p>
                        <p><strong>Source:</strong> {selectedApplicant.source}</p>
                    </div>
                    )}
                    {activeTab === 1 && (
                    <div className="p-4">
                        <p><strong>Grammar:</strong> 45</p>
                        <p><strong>Typing:</strong> 44wpm - 100%</p>
                        <p><strong>Essay:</strong> Passed</p>
                    </div>
                    )}

              </div>
            )}
            <div className="modal-action">
            <button onClick={closeModal}  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </div>
          </div>
        </div>
      )}
        </div>
    )
}