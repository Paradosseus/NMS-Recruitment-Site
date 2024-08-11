import applicants from "../../../data/applicants"
export const Applicants = () => {
    return (
        <div className="h-full bg-custom-container m-3 p-6 rounded-lg">
            <h2 className="text-3xl font-semibold">Applicants</h2>
            <div className="h-[600px] overflow-y-auto hover">
                <table className="table w-full">
                    <thead>
                    <tr>
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
                        <tr key={applicant.id} className="hover cursor-pointer">
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
    )
}