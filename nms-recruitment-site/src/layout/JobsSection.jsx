import React, { useState } from "react";
import Navbar from "../components/Navbar";
import jobs from "../data/jobs";
import JobCardItem from "../components/JobCardItem";
import { Filter } from "../components/Filter";
import SearchBar from "../components/SearchBar";
const ITEMS_PER_PAGE = 8;

export const JobsSection = () => {
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate the index range for the current page
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const paginatedJobs = jobs.slice(startIndex, endIndex);

    // Calculate total number of pages
    const totalPages = Math.ceil(jobs.length / ITEMS_PER_PAGE);

    // Handle page change
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="h-fit w-full bg-custom-background">
            <Navbar />
            <div className="grid grid-cols-[1fr,300px] gap-4 py-6 px-[100px]">
                <div className="flex flex-col">
                    <div className="flex justify-between items-center">
                        <h1 className="text-4xl font-bold">Available Positions</h1>
                        <SearchBar/>
                    </div>
                    <div className="grid grid-cols-4 gap-4 my-4">
                        {paginatedJobs.map((job) => (
                            <JobCardItem job={job} key={job.id}/>
                        ))}
                    </div>
                    <div className="mt-4 flex justify-center gap-2">
                        <button
                            className="btn btn-primary"
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </button>
                        <span className="self-center">{currentPage} / {totalPages}</span>


                        <button
                            className="btn btn-primary"
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </button>
                    </div>

                </div>
                <div className="sticky top-0">
                    <Filter />
                </div>
            </div>
        </div>
    );
};
