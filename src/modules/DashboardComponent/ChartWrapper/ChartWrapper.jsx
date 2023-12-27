import React from "react";

const ChartWrapper = ({chart}) => {
    return(
        <div className="w-full md:w-1/2 rounded-2xl p-5 flex flex-col border-1 border border-zinc-300 bg-zinc-200 dark:bg-zinc-900 dark:border-zinc-950 text-zinc-950 dark:text-gray-300 h-96">
            <div className=" h-full w-full" id="chart-container">
                {chart}
            </div>
        </div>
    );
}

export default ChartWrapper;