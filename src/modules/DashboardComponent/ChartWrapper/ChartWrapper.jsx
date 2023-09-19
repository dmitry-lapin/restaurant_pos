import React from "react";

const ChartWrapper = ({name, chart}) => {
    return(
        <div className="w-full md:w-1/2 bg-white rounded-2xl p-5 flex flex-col border border-zinc-300">
            <p className="font-semibold text-xl pl-8">{name}</p>
            <div className="flex items-center justify-center">
                {chart}
            </div>
        </div>
    );
}

export default ChartWrapper;