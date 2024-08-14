import companyLogo from "../../assets/img/Logo-admin.png"
import avatar from "../../assets/img/avatar.png"
import { MdOutlineDashboard } from "react-icons/md";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { MdOutlineCases } from "react-icons/md";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { MdOutlineGroups } from "react-icons/md";
import { MdOutlineHelpCenter } from "react-icons/md";
import { MdOutlineSettings } from "react-icons/md";
import { MdOutlineLogout } from "react-icons/md";
import { MdOutlineNotifications } from "react-icons/md";
import { Dashboard } from "../../components/child-components/admin/Dashboard"
import { Applicants } from "../../components/child-components/admin/Applicants";
import { useState } from "react";


export const AdminContainer = () => {

    const [activeOption, setActiveOption] = useState("Dashboard");
    
    return (
        <div className="h-screen w-screen grid grid-cols-[auto,1fr] bg-custom-background">
            <div className="bg-custom-container">
                <div className=" h-full p-10 flex flex-col gap-20">
                   <div className="grid">
                        <img src={companyLogo} alt="" className="max-w-[200px]" /> 
                   </div>
                   <nav className="flex flex-col justify-between h-full">
                        <div>
                            <h2 className="text-xl text-custom-red font-semibold">MAIN MENU</h2>
                            <ul className="font-medium text text-lg grid gap-1">
                                <li className={`flex items-center gap-2 ${activeOption === "Dashboard" ? "text-custom-red" : ""}`} onClick={(e) => {
                                    setActiveOption("Dashboard")
                                }}>
                                    <MdOutlineDashboard className="inline-block"/>
                                    <button href="">Dashboard</button>
                                </li>
                                <li className={`flex items-center gap-2 ${activeOption === "Applicants" ? "text-custom-red" : ""}`} onClick={(e) => {
                                    setActiveOption("Applicants")
                                }}>
                                    <MdOutlineLibraryBooks className="inline-block"/>
                                    <button href="">Applicants</button>
                                </li>
                                <li className={`flex items-center gap-2 ${activeOption === "Jobs" ? "text-custom-red" : ""}`} onClick={(e) => {
                                    setActiveOption("Jobs")
                                }}>
                                    <MdOutlineCases className="inline-block"/>
                                    <button href="">Jobs</button>
                                </li>
                                <li className={`flex items-center gap-2 ${activeOption === "Calendar" ? "text-custom-red" : ""}`} onClick={(e) => {
                                    setActiveOption("Calendar")
                                }}>
                                    <MdOutlineCalendarMonth className="inline-block"/>
                                    <button href="">Calendar</button>
                                </li>
                                <li className={`flex items-center gap-2 ${activeOption === "Studio Accounts" ? "text-custom-red" : ""}`} onClick={(e) => {
                                    setActiveOption("Studio Accounts")
                                }}>
                                    <MdOutlineGroups className="inline-block"/>
                                    <button href="">Studio Accounts</button>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-xl text-custom-red font-semibold">HELP & SUPPORT</h2>
                            <ul className="font-medium text text-lg grid gap-1">
                                <li className="flex items-center gap-2">
                                    <MdOutlineHelpCenter className="inline-block"/>
                                    <button href="">Help Center</button>
                                </li>
                                <li className={`flex items-center gap-2 ${activeOption === "Settings" ? "text-custom-red" : ""}`} onClick={(e) => {
                                    setActiveOption("Settings")
                                }}>
                                    <MdOutlineSettings className="inline-block"/>
                                    <button href="">Settings</button>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="font-medium text text-lg">
                                <li className="flex items-center gap-2">
                                    <MdOutlineLogout className="inline-block"/>
                                    <a onClick="">Logout</a>
                                </li>
                            </ul>
                        </div>
                   </nav>
                </div>
            </div>
            <div className="grid grid-rows-[auto,1fr]">
                <div className="bg-custom-container p-10 flex justify-between">
                    <h1 className="text-3xl font-bold">Welcome back, John Doe!</h1>
                    <div className="flex items-center gap-4">
                        <span>

                        </span>
                        <div className="dropdown dropdown-end">
                            <div className="flex
                             items-center gap-3" tabIndex={0} role="button">
                            <MdOutlineNotifications className="text-[34px]"/>
                            </div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                <li><a>There's a new application!</a></li>

                            </ul>
                        </div>
                        <div className="dropdown dropdown-end">
                            <div className="flex
                             items-center gap-3" tabIndex={0} role="button">
                            <img src={avatar} alt="" className="max-w-[34px]" />
                            <div className="font-semibold">John</div>
                            </div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                <li><a>Account</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row-span-3 p-4">
                {activeOption === "Dashboard" ? <Dashboard/> : activeOption === "Applicants" ? <Applicants/> : ""}
                </div>
            </div>

        </div>
    )
}