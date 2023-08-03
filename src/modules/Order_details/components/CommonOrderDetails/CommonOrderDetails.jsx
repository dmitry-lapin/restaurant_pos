import React from "react";

const CommonOrderDetails = () => {

    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    
    const data = {
        tableNumber: 5,
        date: `${day}.${month}.${year}`,
        waiterName: "Dmytro L"
    }

    return(
        <div className="p-7 font-semibold flex justify-between">
            <div className="flex flex-row space-x-3 items-center">
                <p className="text-white text-lg capitalize">Table {data.tableNumber}</p>
                <p className="flex items-center text-zinc-500 text-md font-medium underline">{data.waiterName}</p>
            </div>
            <p className="flex items-center text-zinc-500 text-lg font-semibold underline">{data.date}</p>
        </div>
    );
}

export default CommonOrderDetails;