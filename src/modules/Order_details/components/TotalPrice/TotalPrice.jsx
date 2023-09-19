import React from "react";
import { useSelector } from "react-redux";

const TotalPrice = () => {
    let price = useSelector((state) => state.OrdersFeed.totalAmount);
    let taxes = ((price/100)*10).toFixed(2);
    let netIncome = (price - taxes).toFixed(2);
    price = price.toFixed(2);


    return(
        <div className="flex flex-col bg-zinc-900 rounded-2xl m-2 px-7 py-4 space-y-5 basis-2/12">
            <div className="flex flex-row justify-between">
                <p className="text-zinc-500 font-semibold">Net-Income</p>
                <p className="text-white">${netIncome}</p>
            </div>
            <div className="flex flex-row justify-between">
                <p className="text-zinc-500 font-semibold">Tax</p>
                <p className="text-white">${taxes}</p>
            </div>
            <hr className="border border-zinc-500"/>
            <div className="flex flex-row justify-between">
                <p className="text-zinc-500 font-semibold">Total</p>
                <p className="text-white">${price}</p>
            </div>
        </div>
    );
}

export default TotalPrice;