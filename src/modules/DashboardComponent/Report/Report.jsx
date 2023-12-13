import React from "react";

const Report = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    const formattedDate = `${currentYear}`;

    return(
        <div className="w-full md:w-5/12 bg-white rounded-2xl border-zinc-300 border flex flex-col justify-between">
            <div className="flex flex-row justify-evenly items-center px-4 lg:px-10 py-4 md:py-5 rounded-t-2xl bg-slate-900 bg-opacity-75">
                <p className="text-xl md:text-md lg:text-lg font-medium w-fit text-white">Full report</p>
                <p className="text-blue-500 text-lg md:text-normal font-semibold">/ {formattedDate}</p>
            </div>
            <div className="flex flex-row w-full justify-center items-center space-x-0 md:space-x-2 py-3 md:py-0">
                <div className="">
                </div>
                <div className=" md:w-fit text-3xl md:text-lg xl:text-xl 2xl:text-2xl font-bold uppercase">
                    <p className="">Here is <br/>your <br/><span className="text-5xl md:text-xl xl:text-3xl 2xl:text-5xl text-blue-700">report</span></p>
                </div>
            </div>
            <div className="flex flex-row px-5 lg:px-10 pb-5">
                <button className="w-full hover:shadow-lg py-3 lg:py-4 px-3 bg-slate-900 bg-opacity-75 hover:bg-slate-800 hover:bg-opacity-90 text-white border border-slate-800 rounded-2xl duration-100 flex items-center justify-center space-x-2 cursor-pointer">
                    <p className="font-medium text-sm lg:text-md text-center">Download report</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 lg:w-6 lg:h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default Report;