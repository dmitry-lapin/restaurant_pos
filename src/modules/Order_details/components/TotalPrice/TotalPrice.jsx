import React from "react";

const TotalPrice = () => {
    return(
        <div className="flex flex-col bg-zinc-900 rounded-2xl m-2 px-7 py-4 space-y-5 basis-2/12">
            <div className="flex flex-row justify-between">
                <p className="text-zinc-500 font-semibold">Subtotal</p>
                <p className="text-white">$10.00</p>
            </div>
            <div className="flex flex-row justify-between">
                <p className="text-zinc-500 font-semibold">Tax</p>
                <p className="text-white">$1.00</p>
            </div>
            <hr className="border border-zinc-500"/>
            <div className="flex flex-row justify-between">
                <p className="text-zinc-500 font-semibold">Total</p>
                <p className="text-white">$11.00</p>
            </div>
        </div>
    );
}

export default TotalPrice;