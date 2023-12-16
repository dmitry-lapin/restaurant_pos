import React from "react";
import ModuleHeaderName from "../../UI/ModuleHeaderName";
import TextHeader from "../../UI/textHeader";
import { FetchStatisticsData } from "../../app/helpers/fetchStatisticsData";
import StatisticalComponent from "./StatisticalComponent/StatisticalComponent";
import LinearChart from "../Charts/LinearChart";
import ChartPie from "../Charts/PieChart";
import ChartWrapper from "./ChartWrapper/ChartWrapper";
import OrderList from "./OrderList/OrderList";
import Report from "./Report/Report";

const DashboardComponent = () => {
    return(
        <div className="flex flex-1 flex-col bg-zinc-100 dark:bg-zinc-800">
            <ModuleHeaderName bgColor="bg-zinc-200 dark:bg-stone-950">
                <TextHeader text="Dashboard" color="text-zinc-950 dark:text-gray-300" size="text-xl" />
            </ModuleHeaderName>
            <div className="p-4 space-y-5 overflow-auto flex flex-col flex-grow">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {FetchStatisticsData().map((item, index) => (
                    <div key={index}>
                        <StatisticalComponent element={item} />
                    </div>
                    ))}
                </div>
                <div className="flex flex-col md:flex-row w-full space-y-5 md:space-y-0 md:space-x-5 ">
                    <ChartWrapper chart={<LinearChart />}/>
                    <ChartWrapper chart={<ChartPie />}/>
                </div>
                <div className="w-full flex flex-col md:flex-row flex-grow space-y-5 md:space-y-0 md:space-x-5">
                { /* <OrderList />
                    <Report /> */ }
                </div>
            </div>
        </div>
    );
}

export default DashboardComponent;