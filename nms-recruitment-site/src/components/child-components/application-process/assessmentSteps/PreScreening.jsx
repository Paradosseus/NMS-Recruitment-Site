export const PreScreening = () => {
    return (
        <div className="max-w-md m-auto">
            <h2 className="text-3xl font-bold my-2">Pre-Screening Questions</h2>
                <div className="form-control">
                    <label className="text-xl font-semibold">In cursus dictum risus, et feugiat nunc lacinia?</label>
                    <label className="flex items-center gap-2">
                        <input type="radio" name="radio-1" className="radio" />
                        <span>Yes</span>
                    </label>
                    <label className="flex items-center gap-2">
                        <input type="radio" name="radio-1" className="radio" />
                        <span>No</span>
                    </label>
                </div>
                <div className="form-control">
                    <label className="text-xl font-semibold">In cursus dictum risus, et feugiat nunc lacinia?</label>
                    <label className="flex items-center gap-2">
                        <input type="radio" name="radio-1" className="radio" />
                        <span>Yes</span>
                    </label>
                    <label className="flex items-center gap-2">
                        <input type="radio" name="radio-1" className="radio" />
                        <span>No</span>
                    </label>
                </div>
                <div className="form-control">
                    <label className="text-xl font-semibold">In cursus dictum risus, et feugiat nunc lacinia?</label>
                    <label className=" ">
                        <input type="radio" name="radio-1" className="radio" />
                        <span>Yes</span>
                    </label>
                    <label className="">
                        <input type="radio" name="radio-1" className="radio" />
                        <span>No</span>
                    </label>
                    <label className="">
                        <input type="radio" name="radio-1" className="radio" />
                        <span className="">Others</span>
                        <input type="text" placeholder="Type here" className="block input input-bordered w-full" />
                    </label>
                </div>
        </div>
    )
}