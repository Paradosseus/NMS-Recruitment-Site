export const BasicInformationStep = () => {
    return (
        <div className="max-w-md m-auto">
        <h2 className="text-3xl font-semibold my-10">Add your Contact Information</h2>
        <div className="max-w-md m-auto">
            <div className="mb-4">
                <label className="form-control w-full max-w-md">
                    <div className="label">
                    <span className="label-text font-semibold">First Name</span>
                    </div>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-full" />
                    <div className="label">
                    </div>
                </label>
                <label className="form-control w-full max-w-md">
                    <div className="label">
                    <span className="label-text font-semibold">Last Name</span>
                    </div>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-full" />
                    <div className="label">
                    </div>
                </label>
                <label className="form-control w-full max-w-md">
                    <div className="label"> 
                    <span className="label-text font-semibold">Email Address</span>
                    </div>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-full" />
                    <div className="label">
                    </div>
                </label>
                <label className="form-control w-full max-w-md">
                    <div className="label">
                    <span className="label-text font-semibold">Contact Number</span>
                    </div>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-full" />
                    <div className="label">
                    </div>
                </label>
            </div>
        </div>
    </div>
    )
}