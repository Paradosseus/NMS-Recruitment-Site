import BarChart from "../../BarChart";
import LineChart from "../../LineChart";

export const Dashboard = () => {
    return (
        <div className="border p-6 grid gap-2 h-full grid-row-[auto,1fr]">
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
            <div className="flex justify-evenly bg-custom-container rounded-xl">
                <BarChart />
                <LineChart/>
            </div>
            <div>
                <h2>Recent Applications </h2>
            </div>
        </div>
    )
}