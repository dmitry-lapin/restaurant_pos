import React from "react";

const StatisticalComponent = ({element}) => {
    return(
        <div className="rounded-2xl flex flex-col flex-1 p-4 items-center space-y-3 border-1 border border-zinc-300 bg-white justify-between h-full">
            <div className="w-full flex flex-row justify-between">
                <p className="font-medium text-md">{element.name}</p>
                <span className="">{element.icon}</span>
            </div>
            <div className="w-full flex flex-row justify-between">
                <p className="font-semibold text-xl">{element.value}</p>
                <span className="text-green-600 flex-row space-x-1 items-center hidden xl:flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                    </svg>
                    <p className="self-center text-center">3.35%</p>
                </span>
            </div>
        </div>
    );
}

export default StatisticalComponent;