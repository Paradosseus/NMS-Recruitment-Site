import { useState } from "react"
import Button from "./Button"
export const Filter = () => {
    const [currentRange, setCurrentRange] = useState(16000)

    const handleRange = (event) => {
        setCurrentRange(event.target.value)
    }

    return (
        <div className='form-control bg-custom-container rounded-lg p-6 w-[250px] m-auto sticky top-20 my-10 drop-shadow-md'>
            <h3 className='text-2xl font-semibold mb-4'>Filter</h3>
            <div className='mb-4 grid gap-2 '>
            <h4 className='font-semibold mb-2 text-xl'>Employment Type</h4>
            <label className=" flex items-center cursor-pointer gap-2">
            <input type="checkbox" className="checkbox" />
            <span className="label-text">Full-Time</span>
            </label>
            <label className=" flex items-center cursor-pointer gap-2">
                <input type="checkbox" className="checkbox" />
                <span className="label-text">Part-Time</span>
            </label>
            </div>
            <h3 className='font-semibold mb-2 text-xl'>Work Set-up</h3>
            <div className="mb-4 grid gap-2">
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
            <div className="form-control">
                <label htmlFor="range" className="label">
                <span className="label-text text-xl font-semibold">Salary:</span>
                <span>PHP {currentRange}</span>
                </label>
                <input
                type="range"
                id="range"
                min="16000"
                max="45000"
                value={currentRange}
                onChange={handleRange}
                className="range range-primary"
                />
                <div>
                    <div className="mt-4">
                        <Button label="Apply" width="w-full"/>
                    </div>
                </div>
        </div>
        
    </div>
    )
}