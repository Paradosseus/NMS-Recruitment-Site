import BarChart from "../../BarChart";
import LineChart from "../../LineChart";
import applicants from "../../../data/applicants";
export const Dashboard = () => {
    return (
        <div className="p-4 grid gap-4 h-full grid-row-[auto,1fr]">
            <div className="stats stats-vertical lg:stats-horizontal shadow flex">
                <div className="stat">
                    <div className="stat-title">New Candidates</div>
                    <div className="stat-value">55</div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div className="stat">
                    <div className="stat-title">Hired</div>
                    <div className="stat-value">32</div>
                    <div className="stat-desc">↗︎ 32 (22%)</div>
                </div>
                <div className="stat">
                    <div className="stat-title">Rejected</div>
                    <div className="stat-value">11</div>
                    <div className="stat-desc">↗︎ 11(22%)</div>
                </div>
                <div className="stat">
                    <div className="stat-title">In Process</div>
                    <div className="stat-value">15</div>
                    <div className="stat-desc">↗︎ 15 (22%)</div>
                </div>
                <div className="stat">
                    <div className="stat-title">New Registers</div>
                    <div className="stat-value">113</div>
                    <div className="stat-desc">113 (14%)</div>
                </div>
            </div>
            <div className="flex justify-evenly bg-custom-container rounded-xl shadow-lg">
                <BarChart />
                <LineChart/>
            </div>
            <div>
            <div className="h-full bg-custom-container p-4 rounded-lg shadow-lg">
            <h2 className="text-3=2xl font-semibold p-4 border-b-2 border-custom-red">Recent Applications </h2>
            <div className="max-h-[650px] overflow-y-auto ">
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
                    {applicants.slice(0,5).map((applicant)=> {
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

   
        </div>
            </div>
        </div>
    )
}