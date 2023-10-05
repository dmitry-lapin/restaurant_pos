import React from "react";

const ChartWrapper = ({name, chart}) => {
    return(
        <div className="w-full md:w-1/2 bg-white rounded-2xl p-5 flex flex-col border border-zinc-300 h-96">
            <div className=" h-full w-full">
                {chart}
            </div>
        </div>
    );
}

export default ChartWrapper;