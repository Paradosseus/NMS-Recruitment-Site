import Button from "./Button";

const JobCardItem = () => {
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <div className="p-3">
                <figure className="relative rounded-2xl mb-6">
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" className="rounded-2xl"/>
                    <div className="absolute bg-[#000000] opacity-30 h-full w-full"></div>
                    <div className="absolute h-full w-full flex flex-col justify-between text-custom-content-color p-4">
                        <div className="flex justify-between">
                            <span>August 6, 2023</span>
                            <span>Full-Time</span>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold">Web Designer</h3>
                            <span>Office-based</span>
                        </div>
                    </div>

                </figure>
                <div className="flex items-center justify-between">
                    <span className="font-bold text-lg">PHP 16,000 - 18,000</span>
                    <Button label="Details"/>
                </div>
            </div>
        </div>
      
    )
}

export default JobCardItem;