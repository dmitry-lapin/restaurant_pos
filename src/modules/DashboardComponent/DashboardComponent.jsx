import React from "react";
import ModuleHeaderName from "../../UI/ModuleHeaderName";
import TextHeader from "../../UI/textHeader";
import { StatisticalArrData } from "../../common_data";
import StatisticalComponent from "./StatisticalComponent/StatisticalComponent";
import LinearChart from "../Charts/LinearChart";
import ChartPie from "../Charts/PieChart";
import ChartWrapper from "./ChartWrapper/ChartWrapper";
import OrderList from "./OrderList/OrderList";
import Report from "./Report/Report";

const DashboardComponent = () => {

    return(
        <div className="flex flex-1 flex-col bg-gray-200">
            <ModuleHeaderName bgColor="bg-white">
                <TextHeader text="Dashboard" color="text-black" size="text-xl" />
            </ModuleHeaderName>
            <div className="p-4 space-y-5 overflow-auto flex flex-col flex-grow">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {StatisticalArrData.map((item, index) => (
                    <div key={index}>
                        <StatisticalComponent element={item} />
                    </div>
                    ))}
                </div>
                <div className="flex flex-col md:flex-row w-full space-y-5 md:space-y-0 md:space-x-5 ">
                    <ChartWrapper name="Revenue" chart={<LinearChart />}/>
                    <ChartWrapper name="Best-selling dishes" chart={<ChartPie />}/>
                </div>
                <div className="w-full flex flex-col md:flex-row flex-grow space-y-5 md:space-y-0 md:space-x-5">
                    <OrderList />
                    <Report />
                </div>
            </div>
        </div>
    );
}

export default DashboardComponent;