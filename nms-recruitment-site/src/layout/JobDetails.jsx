import Button from "../components/Button"
import { Modal } from "../components/Modal"
import Navbar from "../components/Navbar"

export const JobDetails = () => {
    return (
        <div className="w-full bg-[#f7f7f7]">
        <Navbar/>
        <div
            className="hero h-[450px]"
            style={{
                backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Web Designer</h1>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-[auto,1fr] mx-[100px] my-6 gap-6">
            <div className="bg-custom-container rounded-lg p-6">
                <div className="mb-8">
                    <h2 className="text-3xl font-semibold mb-6">Job Description</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam magna  est, pharetra accumsan convallis ac, finibus vitae elit. In interdum  porttitor mi. Cras quis ultrices ex, sit amet placerat odio. Sed in  risus sed ante consectetur fringilla ut eu urna. Donec gravida nisi vel  metus tempus malesuada. Proin ac congue urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam magna  est, pharetra accumsan convallis ac, finibus vitae elit. In interdum  porttitor mi. Cras quis ultrices ex, sit amet placerat odio. Sed in  risus sed ante consectetur fringilla ut eu urna. Donec gravida nisi vel  metus tempus malesuada. Proin ac congue urna.</p>
                </div>
                <div>
                    <h2 className="text-3xl font-semibold mb-6">Requirements</h2>
                    <ul className="list-disc list-inside grid gap-2">
                        <li>A relevant bachelor’s degree or diploma in a related field.</li>
                        <li>Proficiency in graphic design software including Adobe Photoshop, Adobe Illustrator, and other visual design tools.</li>
                        <li>Proficiency in front-end development web programming languages such as HTML and CSS, JQuery, and JavaScript.</li>
                        <li>Good understanding of content management systems.</li>
                        <li>Portfolio of graphic designs/ completed projects</li>
                        <li>Good understanding of search engine optimization principles.</li>
                        <li>Proficient understanding of cross-browser compatibility issues.</li>
                        <li>Excellent visual design skills.</li>
                        <li>Up-to-date experience with international web protocols, standards, and technologies.</li>
                        <li>Creative and open to new ideas.</li>
                        <li>Adaptable and willing to learn new techniques.</li>
                    </ul>
                </div>
            </div>
            <div className="bg-custom-container rounded-lg p-6 w-fit">
                <h2 className="text-3xl font-semibold mb-6">Job Details</h2>
                <div className="mb-6 w-56 grid gap-4">
                    <div>
                        <h3 className="text-lg">Job Creation Date</h3>
                        <span className="font-semibold">August 6, 2024</span>
                    </div>
                    <div>
                        <h3>Salary</h3>
                        <span className="font-semibold">PHP 16,000 - 18,000</span>
                    </div>
                    <div>
                        <h3>Employment Type</h3>
                        <span className="font-semibold">Full-Time</span>
                    </div>
                    <div>
                        <h3>Work Set-up</h3>
                        <span className="font-semibold">Office-based</span>
                    </div>
                    <div>
                        <h3>Experience Required</h3>
                        <span className="font-semibold">No experience required</span>
                    </div>
                </div>
                <div>
                    <Button label="Apply Now" onClick={()=>document.getElementById('my_modal_4').showModal()}/>
                    <Modal/>
                </div>
            </div>
        </div>
        </div>
    )
}